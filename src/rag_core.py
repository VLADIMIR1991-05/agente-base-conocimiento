from __future__ import annotations

import json
import math
import os
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_DIR = ROOT / "knowledge_base"
DATA_DIR = ROOT / "data"
INDEX_PATH = DATA_DIR / "index.json"

IMAGE_FILE_TYPES = {".png", ".jpg", ".jpeg", ".webp"}
SUPPORTED_FILE_TYPES = {".txt", ".md", ".docx", ".xlsx", ".pptx"} | IMAGE_FILE_TYPES


class UserFacingError(RuntimeError):
    pass


@dataclass
class TextDocument:
    source: str
    text: str


def load_settings() -> None:
    try:
        from dotenv import load_dotenv
    except ModuleNotFoundError:
        return
    load_dotenv(ROOT / ".env", encoding="utf-8-sig")


def get_client():
    load_settings()
    if not os.getenv("OPENAI_API_KEY"):
        raise UserFacingError("Falta configurar OPENAI_API_KEY en el archivo .env.")

    try:
        from openai import OpenAI
    except ModuleNotFoundError as error:
        raise UserFacingError("Faltan dependencias. Ejecuta: pip install -r requirements.txt") from error

    return OpenAI()


def friendly_openai_error(error: Exception) -> UserFacingError:
    message = str(error)
    lowered = message.lower()
    if "insufficient_quota" in lowered or "exceeded your current quota" in lowered:
        return UserFacingError(
            "Tu API key esta bien, pero la cuenta no tiene cuota disponible. "
            "Revisa billing, saldo o limite mensual en OpenAI Platform."
        )
    if "invalid_api_key" in lowered or "incorrect api key" in lowered:
        return UserFacingError("La API key no es valida. Revisa el valor de OPENAI_API_KEY en .env.")
    if "model_not_found" in lowered:
        return UserFacingError("El modelo configurado no esta disponible para esta cuenta. Revisa OPENAI_MODEL en .env.")
    return UserFacingError(f"OpenAI devolvio un error: {error}")


def read_text_file(path: Path) -> str:
    return path.read_text(encoding="utf-8", errors="ignore")


def read_docx(path: Path) -> str:
    from docx import Document as WordDocument

    document = WordDocument(path)
    paragraphs = [p.text.strip() for p in document.paragraphs if p.text.strip()]
    tables = []
    for table in document.tables:
        for row in table.rows:
            values = [cell.text.strip() for cell in row.cells]
            if any(values):
                tables.append(" | ".join(values))
    return "\n".join(paragraphs + tables)


def read_xlsx(path: Path) -> str:
    from openpyxl import load_workbook

    workbook = load_workbook(path, read_only=True, data_only=True)
    parts = []
    for sheet in workbook.worksheets:
        parts.append(f"Hoja: {sheet.title}")
        for row in sheet.iter_rows(values_only=True):
            values = [str(value).strip() for value in row if value is not None]
            if values:
                parts.append(" | ".join(values))
    return "\n".join(parts)


def read_pptx(path: Path) -> str:
    from pptx import Presentation

    presentation = Presentation(path)
    parts = []
    for index, slide in enumerate(presentation.slides, start=1):
        slide_text = []
        for shape in slide.shapes:
            if hasattr(shape, "text") and shape.text.strip():
                slide_text.append(shape.text.strip())
        if slide_text:
            parts.append(f"Diapositiva {index}\n" + "\n".join(slide_text))
    return "\n\n".join(parts)


def read_image(path: Path) -> str:
    label = path.stem.replace("_", " ").replace("-", " ").strip()
    return (
        f"Imagen disponible en la base de conocimiento. "
        f"Nombre o color asociado: {label}. "
        f"Archivo: {path.name}."
    )


def read_web_page(url: str) -> str:
    import requests
    from bs4 import BeautifulSoup

    response = requests.get(url, timeout=20, headers={"User-Agent": "kb-rag-prototype/1.0"})
    response.raise_for_status()
    soup = BeautifulSoup(response.text, "html.parser")
    for tag in soup(["script", "style", "nav", "footer", "header"]):
        tag.decompose()
    text = soup.get_text("\n")
    lines = [line.strip() for line in text.splitlines() if line.strip()]
    return "\n".join(lines)


def load_local_documents() -> list[TextDocument]:
    documents = []
    for path in KNOWLEDGE_DIR.rglob("*"):
        if not path.is_file() or path.name == "urls.txt" or path.name.startswith("~$"):
            continue
        if path.suffix.lower() not in SUPPORTED_FILE_TYPES:
            continue

        if path.suffix.lower() in {".txt", ".md"}:
            text = read_text_file(path)
        elif path.suffix.lower() == ".docx":
            text = read_docx(path)
        elif path.suffix.lower() == ".xlsx":
            text = read_xlsx(path)
        elif path.suffix.lower() == ".pptx":
            text = read_pptx(path)
        elif path.suffix.lower() in IMAGE_FILE_TYPES:
            text = read_image(path)
        else:
            text = ""

        if text.strip():
            documents.append(TextDocument(source=str(path.relative_to(ROOT)), text=text))
    return documents


def load_web_documents() -> list[TextDocument]:
    url_file = KNOWLEDGE_DIR / "urls.txt"
    if not url_file.exists():
        return []

    documents = []
    urls = [
        line.strip()
        for line in url_file.read_text(encoding="utf-8", errors="ignore").splitlines()
        if line.strip() and not line.strip().startswith("#")
    ]
    for url in urls:
        text = read_web_page(url)
        if text.strip():
            documents.append(TextDocument(source=url, text=text))
    return documents


def chunk_text(text: str, chunk_size: int = 1200, overlap: int = 180) -> list[str]:
    normalized = " ".join(text.split())
    if not normalized:
        return []

    chunks = []
    start = 0
    while start < len(normalized):
        end = start + chunk_size
        chunks.append(normalized[start:end])
        next_start = end - overlap
        start = next_start if next_start > start else end
    return chunks


def embed_texts(client, texts: list[str]) -> list[list[float]]:
    model = os.getenv("OPENAI_EMBEDDING_MODEL", "text-embedding-3-small")
    embeddings = []
    batch_size = 80
    for start in range(0, len(texts), batch_size):
        batch = texts[start : start + batch_size]
        try:
            response = client.embeddings.create(model=model, input=batch)
        except Exception as error:
            raise friendly_openai_error(error) from error
        embeddings.extend(item.embedding for item in response.data)
    return embeddings


def build_index() -> dict:
    client = get_client()
    documents = load_local_documents() + load_web_documents()
    chunks = []
    for document in documents:
        for index, chunk in enumerate(chunk_text(document.text), start=1):
            chunks.append({"source": document.source, "chunk": index, "text": chunk})

    if not chunks:
        raise RuntimeError("No encontre documentos para indexar en knowledge_base.")

    embeddings = embed_texts(client, [chunk["text"] for chunk in chunks])
    for chunk, embedding in zip(chunks, embeddings):
        chunk["embedding"] = embedding

    DATA_DIR.mkdir(exist_ok=True)
    payload = {"chunks": chunks}
    INDEX_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
    return payload


def load_index() -> dict:
    if not INDEX_PATH.exists():
        raise UserFacingError("Primero crea el indice con el boton 'Crear indice'.")
    return json.loads(INDEX_PATH.read_text(encoding="utf-8"))


def cosine_similarity(left: list[float], right: list[float]) -> float:
    numerator = sum(a * b for a, b in zip(left, right))
    left_norm = math.sqrt(sum(a * a for a in left))
    right_norm = math.sqrt(sum(b * b for b in right))
    if not left_norm or not right_norm:
        return 0.0
    return numerator / (left_norm * right_norm)


def retrieve(question: str, top_k: int = 5) -> list[dict]:
    index = load_index()
    client = get_client()
    question_embedding = embed_texts(client, [question])[0]
    scored = []
    for chunk in index["chunks"]:
        score = cosine_similarity(question_embedding, chunk["embedding"])
        scored.append({**chunk, "score": score})
    return sorted(scored, key=lambda item: item["score"], reverse=True)[:top_k]


def build_context(matches: list[dict]) -> str:
    return "\n\n".join(
        f"[Fuente: {match['source']} | fragmento {match['chunk']}]\n{match['text']}"
        for match in matches
    )


def generate_answer(question: str, matches: list[dict]) -> str:
    load_index()
    client = get_client()
    model = os.getenv("OPENAI_MODEL", "gpt-5.4-mini")
    context = build_context(matches)
    try:
        response = client.responses.create(
            model=model,
            input=[
                {
                    "role": "system",
                    "content": (
                        "Eres un asistente estricto de una base de conocimiento privada. "
                        "Responde unicamente con informacion del contexto entregado. "
                        "Si el contexto no contiene la respuesta, di exactamente: "
                        "'No encuentro esa informacion en mi base de conocimiento.' "
                        "Incluye fuentes breves cuando respondas."
                    ),
                },
                {
                    "role": "user",
                    "content": f"Contexto:\n{context}\n\nPregunta: {question}",
                },
            ],
        )
    except Exception as error:
        raise friendly_openai_error(error) from error
    return response.output_text


def answer_question(question: str, top_k: int = 5) -> str:
    matches = retrieve(question, top_k=top_k)
    return generate_answer(question, matches)


def answer_question_with_sources(question: str, top_k: int = 5) -> dict:
    matches = retrieve(question, top_k=top_k)
    return {"answer": generate_answer(question, matches), "sources": matches}
