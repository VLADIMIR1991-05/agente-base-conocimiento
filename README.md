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

## Conocimiento de VERIFICAR y despieces por codigo

El agente ahora puede usar el conocimiento del repositorio `VERIFICAR` para interpretar codigos de muebles y generar un despiece tecnico sugerido. Cuando la pregunta contiene palabras como `despiece`, `codigo`, `modulo`, `medida`, `puerta`, `lateral` o `repisa`, el agente intenta resolver primero con reglas deterministicas de `VERIFICAR` y solo usa el RAG documental si no detecta una consulta de codigo.

Fuentes que busca automaticamente:

- `knowledge_base/verificar/db_codigos.js`
- Un repositorio hermano clonado como `../VERIFICAR/db_codigos.js`

Ejemplos de preguntas:

```text
Dame el despiece de B60IH4
Que significa el codigo A40DH5-TI-LBA-BF
Calcula medidas para el modulo B90G2P6-HZ
```

La respuesta incluye descripcion, dimensiones detectadas y piezas sugeridas como laterales, base, techo, respaldo, repisas y puertas cuando el codigo tiene suficientes datos. Si luego subes filas reales de piezas desde produccion, las reglas pueden ampliarse para validar cada fila contra las medidas esperadas.

Las busquedas directas en `VERIFICAR`, por ejemplo colores, accesorios o codigos de producto como `bardolino`, se resuelven automaticamente desde `db_codigos.js` aunque todavia no exista el indice RAG ni una `OPENAI_API_KEY`. El boton `Crear indice` queda para documentos generales que quieras responder con embeddings.

El chat usa el historial reciente del usuario para continuar el hilo. Si alguien pregunta primero por `bardolino` y luego dice `y el video?`, el agente entiende que sigue hablando de Bardolino y busca enlaces de video relacionados.

## Base liviana de enlaces

Para ahorrar tokens y responder mas rapido, agrega recursos externos como enlaces organizados en:

```text
knowledge_base/links/
```

Archivos preparados:

- `colores.json`: enlaces de imagenes o fichas de colores.
- `imagenes.json`: enlaces directos a imagenes generales.
- `videos.json`: videos de capacitacion, procesos o productos.
- `presentaciones.json`: PowerPoint, Google Slides o PDFs de presentacion.
- `documentos.json`: fichas, manuales, hojas tecnicas o documentos compartidos.

Cada recurso debe tener una URL abierta con `http://` o `https://`. Si no hay URL valida, el agente lo ignora para no entregar enlaces rotos. Usa `aliases` para agregar formas comunes de busqueda, codigos y nombres alternativos.

## Subir tu base de conocimiento

Sube tus documentos a `knowledge_base/`. No subas `.env`; esta ignorado en `.gitignore`.

## Compartir online

GitHub Pages solo puede mostrar contenido estatico, por eso este proyecto se comparte mejor en un hosting Python. El repositorio ya incluye `render.yaml` para desplegarlo en Render sin cambiar el flujo local.

1. En Render, crea un nuevo servicio web desde este repositorio.
2. Deja que Render lea `render.yaml`.
3. Configura `OPENAI_API_KEY` como variable secreta.
4. Si vas a usar tu base real en nube, sube los archivos al proyecto desplegado o conecta almacenamiento persistente.
