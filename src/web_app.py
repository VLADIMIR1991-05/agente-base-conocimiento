import warnings

warnings.simplefilter("ignore", DeprecationWarning)

import cgi
import json
import os
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote

from rag_core import INDEX_PATH, KNOWLEDGE_DIR, UserFacingError, answer_question, build_index


ROOT = Path(__file__).resolve().parents[1]
ALLOWED_EXTENSIONS = {".txt", ".md", ".docx", ".xlsx", ".pptx"}


PAGE = r"""<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Agente de Conocimiento</title>
  <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
  <style>
    :root {
      --bg: #f7faf8;
      --panel: #ffffff;
      --ink: #17211c;
      --muted: #68736d;
      --line: #dce5df;
      --teal: #007f73;
      --teal-dark: #00665c;
      --coral: #ef6f61;
      --mint: #dff4ea;
      --amber: #f6c453;
      --shadow: 0 18px 42px rgba(28, 50, 40, .10);
    }

    * { box-sizing: border-box; }

    body {
      margin: 0;
      min-height: 100vh;
      color: var(--ink);
      background:
        linear-gradient(180deg, rgba(223,244,234,.85), rgba(247,250,248,.96) 44%),
        var(--bg);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .shell {
      width: min(1180px, calc(100% - 32px));
      margin: 0 auto;
      padding: 24px 0 36px;
    }

    .topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 10px 0 24px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .mark {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      color: white;
      background: var(--teal);
      border-radius: 8px;
      box-shadow: var(--shadow);
      flex: 0 0 auto;
    }

    h1 {
      margin: 0;
      font-size: clamp(24px, 4vw, 42px);
      line-height: 1.05;
      letter-spacing: 0;
    }

    .subtitle {
      margin: 8px 0 0;
      color: var(--muted);
      font-size: 15px;
      max-width: 740px;
    }

    .status {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: rgba(255,255,255,.82);
      color: var(--muted);
      white-space: nowrap;
    }

    .grid {
      display: grid;
      grid-template-columns: 380px 1fr;
      gap: 18px;
      align-items: stretch;
    }

    .panel {
      background: rgba(255,255,255,.94);
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      overflow: hidden;
    }

    .panel-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      padding: 18px 18px 14px;
      border-bottom: 1px solid var(--line);
    }

    h2 {
      margin: 0;
      font-size: 18px;
      letter-spacing: 0;
    }

    .panel-body { padding: 18px; }

    .drop {
      border: 1.5px dashed #8db7a9;
      border-radius: 8px;
      padding: 18px;
      background: #f4fbf7;
      display: grid;
      gap: 12px;
    }

    .file-input {
      width: 100%;
      padding: 10px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
      color: var(--muted);
    }

    .btn-row {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    button {
      border: 0;
      border-radius: 8px;
      min-height: 42px;
      padding: 0 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      font-weight: 700;
      cursor: pointer;
      transition: transform .15s ease, background .15s ease, opacity .15s ease;
    }

    button:hover { transform: translateY(-1px); }
    button:disabled { opacity: .58; cursor: not-allowed; transform: none; }

    .primary { background: var(--teal); color: white; }
    .primary:hover { background: var(--teal-dark); }
    .secondary { background: #eef4f0; color: var(--ink); border: 1px solid var(--line); }
    .accent { background: var(--coral); color: white; }

    .files {
      display: grid;
      gap: 10px;
      margin-top: 16px;
    }

    .file {
      display: grid;
      grid-template-columns: 34px 1fr;
      gap: 10px;
      align-items: center;
      padding: 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
    }

    .file-icon {
      width: 34px;
      height: 34px;
      border-radius: 8px;
      display: grid;
      place-items: center;
      color: var(--teal-dark);
      background: var(--mint);
    }

    .file-name {
      font-weight: 750;
      overflow-wrap: anywhere;
    }

    .file-meta {
      margin-top: 2px;
      color: var(--muted);
      font-size: 13px;
    }

    .chat {
      min-height: 620px;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    .messages {
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
      min-height: 410px;
      background: linear-gradient(180deg, #ffffff, #fbfdfb);
    }

    .message {
      max-width: 84%;
      padding: 12px 14px;
      border-radius: 8px;
      line-height: 1.45;
      white-space: pre-wrap;
      overflow-wrap: anywhere;
    }

    .assistant {
      align-self: flex-start;
      background: #eef8f4;
      border: 1px solid #cfece0;
    }

    .user {
      align-self: flex-end;
      color: white;
      background: #1f7f77;
    }

    .composer {
      padding: 14px;
      border-top: 1px solid var(--line);
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 10px;
      background: white;
    }

    textarea {
      width: 100%;
      min-height: 48px;
      max-height: 150px;
      resize: vertical;
      border: 1px solid var(--line);
      border-radius: 8px;
      padding: 13px 14px;
      font: inherit;
      color: var(--ink);
      outline-color: var(--teal);
    }

    .hint {
      margin-top: 12px;
      padding: 12px;
      border-left: 4px solid var(--amber);
      background: #fff9e7;
      border-radius: 8px;
      color: #64512a;
      font-size: 14px;
      line-height: 1.4;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 9px;
      border-radius: 999px;
      background: #edf7f2;
      color: var(--teal-dark);
      font-size: 13px;
      font-weight: 700;
    }

    @media (max-width: 860px) {
      .topbar { align-items: flex-start; flex-direction: column; }
      .grid { grid-template-columns: 1fr; }
      .composer { grid-template-columns: 1fr; }
      .message { max-width: 100%; }
      .status { white-space: normal; }
    }
  </style>
</head>
<body>
  <main class="shell">
    <section class="topbar">
      <div>
        <div class="brand">
          <div class="mark"><i data-lucide="library-big"></i></div>
          <h1>Agente de Conocimiento</h1>
        </div>
        <p class="subtitle">Consulta tus documentos privados con una experiencia clara, rapida y enfocada en fuentes.</p>
      </div>
      <div class="status" id="indexStatus"><i data-lucide="activity"></i><span>Revisando indice...</span></div>
    </section>

    <section class="grid">
      <aside class="panel">
        <div class="panel-header">
          <h2>Base cargada</h2>
          <span class="pill"><i data-lucide="folder-open"></i><span id="fileCount">0</span></span>
        </div>
        <div class="panel-body">
          <form class="drop" id="uploadForm">
            <strong>Subir documentos</strong>
            <input class="file-input" id="fileInput" name="files" type="file" multiple accept=".txt,.md,.docx,.xlsx,.pptx" />
            <div class="btn-row">
              <button class="secondary" type="submit"><i data-lucide="upload"></i>Subir</button>
              <button class="primary" type="button" id="indexBtn"><i data-lucide="refresh-cw"></i>Crear indice</button>
            </div>
          </form>
          <div class="hint">Por ahora deje cargado solo el Excel <strong>Guia_lectura_codigos.xlsx</strong>. Cuando agregues mas archivos, crea el indice otra vez.</div>
          <div class="files" id="files"></div>
        </div>
      </aside>

      <section class="panel chat">
        <div class="panel-header">
          <h2>Chat con tus documentos</h2>
          <span class="pill"><i data-lucide="shield-check"></i>Solo base</span>
        </div>
        <div class="messages" id="messages">
          <div class="message assistant">Hola. Ya puedo trabajar con la base cargada. Crea el indice y preguntame algo sobre el Excel.</div>
        </div>
        <form class="composer" id="askForm">
          <textarea id="question" placeholder="Escribe una pregunta sobre la guia..." required></textarea>
          <button class="accent" type="submit"><i data-lucide="send"></i>Preguntar</button>
        </form>
      </section>
    </section>
  </main>

  <script>
    const filesEl = document.querySelector("#files");
    const fileCountEl = document.querySelector("#fileCount");
    const statusEl = document.querySelector("#indexStatus span");
    const messagesEl = document.querySelector("#messages");
    const uploadForm = document.querySelector("#uploadForm");
    const indexBtn = document.querySelector("#indexBtn");
    const askForm = document.querySelector("#askForm");
    const questionEl = document.querySelector("#question");

    function icons() {
      if (window.lucide) window.lucide.createIcons();
    }

    function addMessage(text, role) {
      const el = document.createElement("div");
      el.className = `message ${role}`;
      el.textContent = text;
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    function humanSize(bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    }

    async function refreshFiles() {
      const response = await fetch("/api/files");
      const data = await response.json();
      fileCountEl.textContent = data.files.length;
      statusEl.textContent = data.index_exists ? "Indice listo" : "Indice pendiente";
      filesEl.innerHTML = "";
      for (const file of data.files) {
        const row = document.createElement("div");
        row.className = "file";
        row.innerHTML = `
          <div class="file-icon"><i data-lucide="file-spreadsheet"></i></div>
          <div>
            <div class="file-name"></div>
            <div class="file-meta">${humanSize(file.size)} - ${file.extension}</div>
          </div>`;
        row.querySelector(".file-name").textContent = file.name;
        filesEl.appendChild(row);
      }
      icons();
    }

    uploadForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const formData = new FormData(uploadForm);
      const response = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await response.json();
      addMessage(data.message, data.ok ? "assistant" : "assistant");
      await refreshFiles();
    });

    indexBtn.addEventListener("click", async () => {
      indexBtn.disabled = true;
      statusEl.textContent = "Creando indice...";
      const response = await fetch("/api/ingest", { method: "POST" });
      const data = await response.json();
      statusEl.textContent = data.ok ? "Indice listo" : "Indice pendiente";
      addMessage(data.message, "assistant");
      indexBtn.disabled = false;
    });

    askForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const question = questionEl.value.trim();
      if (!question) return;
      addMessage(question, "user");
      questionEl.value = "";
      const waiting = "Buscando en la base...";
      addMessage(waiting, "assistant");
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question })
      });
      const data = await response.json();
      messagesEl.lastChild.textContent = data.answer || data.message;
    });

    refreshFiles();
    icons();
  </script>
</body>
</html>
"""


def json_response(handler: BaseHTTPRequestHandler, payload: dict, status: int = 200) -> None:
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


def page_response(handler: BaseHTTPRequestHandler) -> None:
    body = PAGE.encode("utf-8")
    handler.send_response(200)
    handler.send_header("Content-Type", "text/html; charset=utf-8")
    handler.send_header("Content-Length", str(len(body)))
    handler.end_headers()
    handler.wfile.write(body)


def list_files() -> list[dict]:
    KNOWLEDGE_DIR.mkdir(exist_ok=True)
    files = []
    for path in sorted(KNOWLEDGE_DIR.iterdir()):
        if not path.is_file() or path.name.startswith(".") or path.name == "urls.txt":
            continue
        files.append(
            {
                "name": path.name,
                "size": path.stat().st_size,
                "extension": path.suffix.lower() or "archivo",
            }
        )
    return files


def safe_filename(name: str) -> str:
    candidate = Path(unquote(name)).name.replace("\\", "_").replace("/", "_")
    return "".join(char for char in candidate if char.isalnum() or char in "._- ")


class AppHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        if self.path in {"/", "/index.html"}:
            page_response(self)
            return
        if self.path == "/api/files":
            json_response(self, {"files": list_files(), "index_exists": INDEX_PATH.exists()})
            return
        json_response(self, {"ok": False, "message": "Ruta no encontrada."}, status=404)

    def do_POST(self) -> None:
        if self.path == "/api/upload":
            self.handle_upload()
            return
        if self.path == "/api/ingest":
            self.handle_ingest()
            return
        if self.path == "/api/ask":
            self.handle_ask()
            return
        json_response(self, {"ok": False, "message": "Ruta no encontrada."}, status=404)

    def handle_upload(self) -> None:
        form = cgi.FieldStorage(fp=self.rfile, headers=self.headers, environ={"REQUEST_METHOD": "POST"})
        fields = form["files"] if "files" in form else []
        if not isinstance(fields, list):
            fields = [fields]

        saved = []
        KNOWLEDGE_DIR.mkdir(exist_ok=True)
        for field in fields:
            if not field.filename:
                continue
            filename = safe_filename(field.filename)
            extension = Path(filename).suffix.lower()
            if extension not in ALLOWED_EXTENSIONS:
                continue
            destination = KNOWLEDGE_DIR / filename
            with destination.open("wb") as output:
                output.write(field.file.read())
            saved.append(filename)

        if not saved:
            json_response(self, {"ok": False, "message": "No se subio ningun archivo compatible."}, status=400)
            return
        json_response(self, {"ok": True, "message": f"Archivo(s) subido(s): {', '.join(saved)}"})

    def handle_ingest(self) -> None:
        try:
            index = build_index()
        except UserFacingError as error:
            json_response(self, {"ok": False, "message": str(error)}, status=400)
            return
        except Exception as error:
            json_response(self, {"ok": False, "message": f"No pude crear el indice. Revisa la configuracion e intenta otra vez. Detalle: {error}"}, status=500)
            return
        json_response(self, {"ok": True, "message": f"Indice creado con {len(index['chunks'])} fragmentos."})

    def handle_ask(self) -> None:
        length = int(self.headers.get("Content-Length", "0"))
        payload = json.loads(self.rfile.read(length).decode("utf-8") or "{}")
        question = str(payload.get("question", "")).strip()
        if not question:
            json_response(self, {"ok": False, "message": "Escribe una pregunta."}, status=400)
            return
        try:
            answer = answer_question(question)
        except UserFacingError as error:
            json_response(self, {"ok": False, "message": str(error)}, status=400)
            return
        except Exception as error:
            json_response(self, {"ok": False, "message": f"No pude responder todavia. Revisa la configuracion e intenta otra vez. Detalle: {error}"}, status=500)
            return
        json_response(self, {"ok": True, "answer": answer})

    def log_message(self, format: str, *args) -> None:
        return


def run() -> None:
    port = int(os.getenv("PORT", "8000"))
    server = ThreadingHTTPServer(("127.0.0.1", port), AppHandler)
    print(f"Interfaz lista en http://127.0.0.1:{port}")
    server.serve_forever()


if __name__ == "__main__":
    run()
