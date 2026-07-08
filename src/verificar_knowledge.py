from __future__ import annotations

import json
import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
KNOWLEDGE_DIR = ROOT / "knowledge_base"


@dataclass
class ModuleDimensions:
    tipo: str = ""
    ancho: int = 0
    alto: int = 0
    profundidad: int = 0
    profundidad_estructura: int = 0


def normalize_code(value: str) -> str:
    return str(value or "").upper().strip().replace("S-P", "S/P")


def normalize_piece(value: str) -> str:
    text = unicodedata.normalize("NFD", str(value or "").upper())
    text = "".join(char for char in text if unicodedata.category(char) != "Mn")
    return re.sub(r"\s+", "", text).strip()


def verificar_candidate_paths() -> list[Path]:
    return [
        KNOWLEDGE_DIR / "verificar" / "db_codigos.js",
        ROOT.parent / "VERIFICAR" / "db_codigos.js",
        ROOT / "VERIFICAR" / "db_codigos.js",
    ]


def load_verificar_db() -> dict[str, str]:
    for path in verificar_candidate_paths():
        if path.exists():
            return parse_js_db(path)
    return {}


def parse_js_db(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8", errors="ignore")
    match = re.search(r"const\s+DB\s*=\s*\{(?P<body>.*?)\};", text, re.DOTALL)
    if not match:
        return {}

    body = match.group("body")
    entries: dict[str, str] = {}
    for item in re.finditer(r'"((?:\\.|[^"\\])*)"\s*:\s*"((?:\\.|[^"\\])*)"', body):
        key = json.loads(f'"{item.group(1)}"')
        value = json.loads(f'"{item.group(2)}"')
        entries[key.upper()] = value
    return entries


DB = load_verificar_db()


def split_clean_description(value: str) -> str:
    seen: set[str] = set()
    parts = []
    for part in str(value or "").split("/"):
        cleaned = part.strip()
        key = cleaned.upper()
        if cleaned and key not in seen:
            seen.add(key)
            parts.append(cleaned)
    return " / ".join(parts)


def translate_token(token: str) -> str:
    clean = normalize_code(token)
    if clean == "SI":
        return "Sistema Invisible"
    if clean == "C1":
        return "1 Tubo Colgador"
    if clean == "C2":
        return "2 Tubos Colgadores"
    if clean in DB:
        return split_clean_description(DB[clean])
    if clean == "SIN-ACV":
        return "Sin Accesorio"
    if clean == "ACV-LE":
        return "Accesorio Vibo Legumbrero"
    if clean == "ST":
        return "Sistema ST"
    if clean == "IN":
        return "1 Interna"

    gavetas = re.match(r"^G(\d+)$", clean)
    if gavetas:
        count = int(gavetas.group(1))
        return "1 Gaveta" if count == 1 else f"{count} Gavetas"
    if re.match(r"^H\d", clean):
        return translate_height(clean)
    if re.match(r"^P\d", clean):
        return translate_depth(clean)
    return clean


def combine_special_tokens(parts: list[str]) -> list[str]:
    result = []
    index = 0
    while index < len(parts):
        current = normalize_code(parts[index])
        next_value = normalize_code(parts[index + 1]) if index + 1 < len(parts) else ""
        if current == "S" and next_value.startswith("P"):
            result.append(f"S/P{next_value[1:]}")
            index += 2
            continue
        if current == "SIN" and next_value == "ACV":
            result.append("SIN-ACV")
            index += 2
            continue
        if current == "ACV" and next_value == "LE":
            result.append("ACV-LE")
            index += 2
            continue
        result.append(parts[index])
        index += 1
    return result


def split_main_and_accessories(code: str) -> tuple[str, list[str]]:
    parts = combine_special_tokens([part for part in re.split(r"[-+]", code) if part])
    if not parts:
        return "", []
    index_with_width = next((i for i, part in enumerate(parts) if re.search(r"[A-Z]+\d", normalize_code(part))), -1)
    if index_with_width <= 0:
        return parts[0], parts[1:]
    return "-".join(parts[: index_with_width + 1]), parts[index_with_width + 1 :]


def known_token_prefix(text: str) -> str:
    text = normalize_code(text)
    for key in sorted(DB, key=len, reverse=True):
        if text.startswith(key):
            return key
    return ""


def split_known_token_with_compact_detail(principal: str) -> tuple[str, str] | None:
    text = normalize_code(principal)
    marker = re.search(r"(HE|H\d+(?:[.,]\d+)?|(?<![/-])P\d+(?:[.,]\d+)?)", text)
    if not marker or marker.start() == 0:
        return None
    candidate = text[: marker.start()]
    detail = text[marker.start() :]
    if candidate in DB:
        return candidate, detail
    token = known_token_prefix(candidate)
    if token and token == candidate:
        return token, detail
    return None


def convert_code_number_to_mm(value: str | float) -> int:
    try:
        number = float(str(value).replace(",", "."))
    except ValueError:
        return 0
    return round(number * 10)


def total_depth_from_p_number(number: float) -> int:
    if number >= 10 and number.is_integer():
        return round(number * 10)
    if 2 <= number <= 4 and number.is_integer():
        return round(number * 100 + 20)
    return round(number * 100 if number < 20 else number * 10)


def translate_height(height: str) -> str:
    code = normalize_code(height)
    if code in DB:
        description = split_clean_description(DB[code])
        for part in description.split("/"):
            if part.strip().upper().startswith("ALTURA"):
                return part.strip()
        return description
    match = re.match(r"^H(\d+(?:[.,]\d+)?)$", code)
    if not match:
        return code
    return f"Altura {code} ({convert_code_number_to_mm(match.group(1))}mm)"


def translate_depth(depth: str) -> str:
    match = re.match(r"^P(\d+(?:[.,]\d+)?)$", normalize_code(depth))
    if not match:
        return normalize_code(depth)
    number = float(match.group(1).replace(",", "."))
    return f"Profundidad {total_depth_from_p_number(number)}mm"


def translate_module_type(tipo: str) -> str:
    types = {
        "B": "Modulo Bajo",
        "A": "Modulo Alto",
        "S": "Modulo Suspendido",
        "BS": "Modulo Bajo Suspendido",
        "MBS": "Mueble Bajo Suspendido",
        "BAR": "Bar",
        "X": "Modulo Auxiliar",
        "E": "Modulo Esquinero",
        "EB": "Esquinero Bajo",
        "EA": "Esquinero Alto",
        "ES": "Esquinero Suspendido",
        "EX": "Esquinero Auxiliar",
        "ECL": "Esquinero Closet",
        "MB": "Mueble de Bano",
        "CL": "Closet",
        "CLOSET": "Closet",
    }
    return types.get(tipo, split_clean_description(DB.get(tipo, "")) or f"Modulo {tipo}")


def default_height(tipo: str) -> str:
    family = normalize_code(tipo)
    if family in {"BS", "MBS", "S", "ES"}:
        return "H3"
    if family in {"B", "MB", "ST", "EB", "E", "A", "EA"}:
        return "H4"
    if family in {"X", "CL", "CLOSET", "CM", "BAR", "ECL"}:
        return "H11"
    if re.match(r"^(LX|LXTR|LX2L|FX|FXTR)", family):
        return "H11"
    if re.match(r"^(LB|LBTR|LVB|FB|FBTR)", family):
        return "H4"
    return ""


def default_depth(tipo: str) -> int:
    family = normalize_code(tipo)
    if family in {"A", "EA"}:
        return 320
    if family in {"BS", "MBS", "S", "ES", "MB"}:
        return 530
    if family == "ST":
        return 600
    if family in {"B", "X", "CM", "BAR", "CL", "CLOSET", "ECL", "EB", "EX"}:
        return 580
    if re.match(r"^(LX|LXTR|LX2L|FX|FXTR|LB|LBTR|LVB|FB|FBTR)", family):
        return 580
    return 0


def type_uses_number_as_depth(tipo: str) -> bool:
    return bool(re.match(r"^(LX|LXTR|LX2L|LB|LBTR|LVB|FX|FXTR|FB|FBTR)", normalize_code(tipo)))


def extract_height_mm(text: str) -> int:
    clean = normalize_code(text)
    if "HE" in clean:
        return 1360
    match = re.search(r"H(\d+(?:[.,]\d+)?)", clean)
    if not match:
        return 0
    code = f"H{match.group(1).replace(',', '.')}"
    db_match = re.search(r"(\d+(?:\.\d+)?)\s*mm", DB.get(code, ""), re.IGNORECASE)
    if db_match:
        return round(float(db_match.group(1)))
    return convert_code_number_to_mm(match.group(1))


def extract_depth_mm(text: str) -> int:
    match = re.search(r"(?<![A-Z/])P(\d+(?:[.,]\d+)?)", normalize_code(text))
    if not match:
        return 0
    return total_depth_from_p_number(float(match.group(1).replace(",", ".")))


def structural_depth_from_code(text: str, total_depth: int, tipo: str = "") -> int:
    match = re.search(r"(?<![A-Z/])P(\d+(?:[.,]\d+)?)", normalize_code(text))
    number = float(match.group(1).replace(",", ".")) if match else 0
    family = normalize_code(tipo)
    if not total_depth:
        return 0
    if "S/P" in normalize_code(text) or family == "ST":
        return total_depth
    if number == 2:
        return total_depth - 20
    if number in {3, 4} or number >= 20:
        return total_depth
    return total_depth - 20 if total_depth > 20 else 0


def interpret_compact_detail(detail: str) -> list[str]:
    rest = normalize_code(detail)
    parts = []
    while rest:
        if rest[0] in "+-":
            rest = rest[1:]
            continue
        height = re.match(r"^(HE|H\d+(?:[.,]\d+)?)", rest)
        if height:
            parts.append(translate_height(height.group(1)))
            rest = rest[len(height.group(1)) :]
            continue
        if rest.startswith("S/P") or rest.startswith("S-P"):
            parts.append(translate_token("S/P"))
            rest = rest[3:]
            continue
        shelf = re.match(r"^(\d+)R(?:P|EP)?", rest)
        if shelf:
            count = int(shelf.group(1))
            parts.append("1 Repisa" if count == 1 else f"{count} Repisas")
            rest = rest[len(shelf.group(0)) :]
            continue
        depth = re.match(r"^P\d+(?:[.,]\d+)?", rest)
        if depth:
            parts.append(translate_depth(depth.group(0)))
            rest = rest[len(depth.group(0)) :]
            continue
        drawers = re.match(r"^G(\d+)", rest)
        if drawers:
            count = int(drawers.group(1))
            parts.append("1 Gaveta" if count == 1 else f"{count} Gavetas")
            rest = rest[len(drawers.group(0)) :]
            continue
        if rest.startswith("IN"):
            parts.append("1 Interna")
            rest = rest[2:]
            continue
        if rest.startswith("I") or rest.startswith("D"):
            parts.append("Apertura Izquierda" if rest[0] == "I" else "Apertura Derecha")
            rest = rest[1:]
            continue
        token = known_token_prefix(rest)
        if token:
            parts.append(translate_token(token))
            rest = rest[len(token) :]
            continue
        parts.append(rest[0])
        rest = rest[1:]
    return parts


def interpret_code(code: str) -> list[str]:
    code = normalize_code(code)
    if not code:
        return ["Codigo no definido"]
    if code in DB:
        return [split_clean_description(DB[code])]

    principal, accessories = split_main_and_accessories(code)
    compact = split_known_token_with_compact_detail(principal)
    if compact:
        token, detail = compact
        description = [translate_token(token), *interpret_compact_detail(detail)]
    else:
        match = re.match(r"^([A-Z]+(?:-[A-Z]+)*)(\d+(?:[.,]\d+)?)(.*)$", principal)
        if not match:
            return [translate_token(part) for part in combine_special_tokens([part for part in re.split(r"[-+]", code) if part])]
        tipo, width, detail = match.groups()
        description = [translate_module_type(tipo), f"Ancho {convert_code_number_to_mm(width)}mm"]
        details = interpret_compact_detail(detail)
        description.extend(details)
        if not any(item.startswith("Altura") for item in details):
            height = default_height(tipo)
            if height:
                description.append(translate_height(height))

    description.extend(translate_token(item) for item in accessories)
    return [item for item in description if item]


def dimensions_from_code(code: str) -> ModuleDimensions:
    code = normalize_code(code)
    principal, _ = split_main_and_accessories(code)
    dims = ModuleDimensions()
    compact = split_known_token_with_compact_detail(principal)
    match = re.match(r"^([A-Z]+(?:-[A-Z]+)*)(\d+(?:[.,]\d+)?)(.*)$", principal)
    if compact:
        token, detail = compact
        dims.tipo = token
        dims.alto = extract_height_mm(code) or extract_height_mm(detail)
        dims.profundidad = extract_depth_mm(code) or extract_depth_mm(detail)
        dims.profundidad_estructura = structural_depth_from_code(code, dims.profundidad, dims.tipo) if dims.profundidad else 0
    elif match:
        tipo, width, detail = match.groups()
        dims.tipo = tipo
        dims.ancho = 0 if type_uses_number_as_depth(tipo) else convert_code_number_to_mm(width)
        dims.alto = extract_height_mm(code) or extract_height_mm(detail) or extract_height_mm(default_height(tipo))
        dims.profundidad = extract_depth_mm(code) or extract_depth_mm(detail)
        if not dims.profundidad:
            number = float(str(width).replace(",", "."))
            dims.profundidad = total_depth_from_p_number(number) if type_uses_number_as_depth(tipo) else default_depth(tipo)
        dims.profundidad_estructura = structural_depth_from_code(code, dims.profundidad, tipo) if extract_depth_mm(code) or extract_depth_mm(detail) else dims.profundidad
    return dims


def has_token(code: str, token: str) -> bool:
    return token in re.split(r"[-+]", normalize_code(code))


def extract_shelf_count(code: str) -> int:
    counts = [int(match.group(1)) for match in re.finditer(r"(\d+)R(?:P|EP)?", normalize_code(code))]
    return max(counts) if counts else 0


def build_piece_rows(code: str) -> list[dict[str, str | int]]:
    dims = dimensions_from_code(code)
    if not dims.ancho or not dims.alto or not dims.profundidad:
        return []

    thickness = 18
    back_thickness = 6
    internal_width = dims.ancho - (thickness * 2) - 1
    depth = dims.profundidad_estructura or dims.profundidad
    rows: list[dict[str, str | int]] = [
        {"pieza": "Lateral", "cantidad": 2, "medida": f"{dims.alto} x {depth} mm", "regla": "alto x profundidad del modulo"},
        {"pieza": "Base", "cantidad": 1, "medida": f"{internal_width} x {depth} mm", "regla": "ancho interno x profundidad"},
        {"pieza": "Techo", "cantidad": 1, "medida": f"{internal_width} x {depth} mm", "regla": "ancho interno x profundidad"},
        {
            "pieza": "Respaldo",
            "cantidad": 1,
            "medida": f"{dims.ancho - (thickness * 2) + 10} x {dims.alto - (thickness * 2) + 10} mm",
            "regla": f"descuenta laterales de {thickness}mm y suma ranura; respaldo base {back_thickness}mm",
        },
    ]

    shelf_count = extract_shelf_count(code)
    if shelf_count:
        shelf_depth = depth - 110 if depth > 110 else depth
        rows.append({"pieza": "Repisa movil", "cantidad": shelf_count, "medida": f"{internal_width - 1} x {shelf_depth} mm", "regla": "REPM descuenta 1mm al ancho interno y usa profundidad de repisa"})

    if "S/P" not in normalize_code(code):
        door_count = 2 if dims.ancho > 619 else 1
        door_width = round(dims.ancho / door_count) - 3
        extra_novak = 110 if has_token(code, "NK") else 0
        henzo_discount = 35 if has_token(code, "HZ") else 0
        door_height = dims.alto + extra_novak if extra_novak else dims.alto - henzo_discount - 3
        rows.append({"pieza": "Puerta", "cantidad": door_count, "medida": f"{door_height} x {door_width} mm", "regla": "descuenta 1.5mm por lado; Henzo descuenta 35mm; Novak suma 110mm"})
    return rows


def extract_possible_code(question: str) -> str:
    text = normalize_code(question)
    candidates = re.findall(r"\b[A-Z][A-Z0-9/+=.,-]{1,40}\b", text)
    stopwords = {"DESPIECE", "CODIGO", "COD", "MUEBLE", "MODULO", "VALIDAR", "CONSULTAR", "QUIERO", "DAME"}
    for candidate in sorted(candidates, key=len, reverse=True):
        if candidate in stopwords:
            continue
        if re.search(r"\d", candidate) or candidate in DB:
            return candidate.strip(".,;:")
    return ""


def looks_like_verificar_question(question: str) -> bool:
    lowered = str(question or "").lower()
    keywords = ("despiece", "codigo", "código", "modulo", "módulo", "medida", "puerta", "lateral", "repis")
    return any(keyword in lowered for keyword in keywords) and bool(extract_possible_code(question))


def answer_verificar_question(question: str) -> dict | None:
    if not looks_like_verificar_question(question):
        return None

    code = extract_possible_code(question)
    if not code:
        return None

    description = interpret_code(code)
    dims = dimensions_from_code(code)
    rows = build_piece_rows(code)
    source = next((str(path) for path in verificar_candidate_paths() if path.exists()), "VERIFICAR/db_codigos.js")

    lines = [f"Despiece interpretado para `{code}`.", ""]
    lines.append("| Campo | Valor |")
    lines.append("|---|---|")
    lines.append(f"| Descripcion | {' + '.join(description)} |")
    lines.append(f"| Tipo | {dims.tipo or 'No detectado'} |")
    lines.append(f"| Ancho | {dims.ancho or 'No detectado'} mm |")
    lines.append(f"| Alto | {dims.alto or 'No detectado'} mm |")
    lines.append(f"| Profundidad | {dims.profundidad or 'No detectada'} mm |")
    lines.append("")

    if rows:
        lines.append("| Pieza sugerida | Cantidad | Medida esperada | Regla aplicada |")
        lines.append("|---|---:|---|---|")
        for row in rows:
            lines.append(f"| {row['pieza']} | {row['cantidad']} | {row['medida']} | {row['regla']} |")
        lines.append("")
        lines.append("Este despiece es una propuesta tecnica calculada desde las reglas de `VERIFICAR`; si subes filas reales de piezas, se pueden validar contra estas medidas.")
    else:
        lines.append("Pude traducir el codigo, pero no detecte dimensiones suficientes para calcular piezas.")

    return {
        "answer": "\n".join(lines),
        "sources": [{"source": source, "chunk": 1, "text": json.dumps({"code": code, "description": description}, ensure_ascii=False), "score": 1.0}],
    }
