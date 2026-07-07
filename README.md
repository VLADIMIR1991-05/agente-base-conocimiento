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
OPENAI_MODEL=gpt-5.5
OPENAI_EMBEDDING_MODEL=text-embedding-3-small
```

## Probar

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

## Subir a GitHub

En esta maquina el GitHub CLI no esta disponible en el PATH normal, asi que deje el proyecto como carpeta lista para subir.

Opcion facil:

1. Crea un repositorio vacio en GitHub, por ejemplo `agente-base-conocimiento`.
2. Sube todos los archivos de esta carpeta.
3. No subas `.env`; esta ignorado en `.gitignore`.

Opcion con Git instalado:

```bash
git init
git add .
git commit -m "Crear prototipo RAG para base de conocimiento"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/agente-base-conocimiento.git
git push -u origin main
```
