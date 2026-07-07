# Agente de base de conocimiento

Este es un boceto funcional para probar un agente RAG que responde solo con lo que encuentre en tu base de conocimiento.

## Donde subir la base de conocimiento

Coloca tus archivos dentro de:

```text
knowledge_base/
```

Formatos soportados en este boceto:

- Word: `.docx`
- Excel: `.xlsx`
- PowerPoint: `.pptx`
- Texto: `.txt`, `.md`
- Enlaces web: pega las URLs en `knowledge_base/urls.txt`, una por linea

## Configuracion inicial

1. Crea un entorno virtual:

```bash
python -m venv .venv
```

2. Activa el entorno:

```bash
# Windows PowerShell
.venv\Scripts\Activate.ps1
```

3. Instala dependencias:

```bash
pip install -r requirements.txt
```

4. Copia `.env.example` a `.env` y coloca tu API key:

```bash
copy .env.example .env
```

Edita `.env`:

```text
OPENAI_API_KEY=tu_api_key_real
OPENAI_MODEL=gpt-5.4-mini
OPENAI_EMBEDDING_MODEL=text-embedding-3-small
```

## Probar con interfaz web

Abre la pantalla moderna del agente:

```bash
python src/web_app.py
```

Luego entra a:

```text
http://127.0.0.1:8000
```

La interfaz abre el chat del agente, solicita el nombre del usuario antes de empezar y guarda internamente el historial de preguntas y respuestas para reportes.

## Probar por consola

Primero crea el indice:

```bash
python src/ingest.py
```

Luego pregunta:

```bash
python src/ask.py
```

## Regla de seguridad del agente

El agente recibe solo los fragmentos recuperados desde `knowledge_base/` y tiene una instruccion estricta:

```text
Si el contexto no contiene la respuesta, debe decir:
No encuentro esa informacion en mi base de conocimiento.
```

## Subir tu base de conocimiento

Sube tus documentos a `knowledge_base/`. No subas `.env`; esta ignorado en `.gitignore`.

## Compartir online

GitHub Pages solo puede mostrar contenido estatico, por eso este proyecto se comparte mejor en un hosting Python. El repositorio ya incluye `render.yaml` para desplegarlo en Render sin cambiar el flujo local.

1. En Render, crea un nuevo servicio web desde este repositorio.
2. Deja que Render lea `render.yaml`.
3. Configura `OPENAI_API_KEY` como variable secreta.
4. Si vas a usar tu base real en nube, sube los archivos al proyecto desplegado o conecta almacenamiento persistente.
