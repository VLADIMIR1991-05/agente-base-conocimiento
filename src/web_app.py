import warnings

warnings.simplefilter("ignore", DeprecationWarning)

import json
import mimetypes
import os
import secrets
import sqlite3
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import quote, unquote

from rag_core import IMAGE_FILE_TYPES, INDEX_PATH, KNOWLEDGE_DIR, UserFacingError, answer_question_with_sources, build_index


ROOT = Path(__file__).resolve().parents[1]
ALLOWED_EXTENSIONS = {".txt", ".md", ".docx", ".xlsx", ".pptx"} | IMAGE_FILE_TYPES
DB_PATH = ROOT / "data" / "usage_log.db"
ASSETS_DIR = ROOT / "assets"
ADMIN_USERS = {
    "USUARIO": {"CONTRASEÑA", "contraseña", "CONTRASENA", "contrasena"},
}
ADMIN_SESSIONS: set[str] = set()


PAGE = r"""<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Asistente MADEVAL</title>
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
      width: min(920px, calc(100% - 32px));
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
      width: 54px;
      height: 54px;
      display: block;
      border-radius: 8px;
      box-shadow: var(--shadow);
      flex: 0 0 auto;
      object-fit: cover;
      background: white;
      border: 1px solid var(--line);
    }

    h1 {
      margin: 0;
      font-size: clamp(24px, 4vw, 42px);
      line-height: 1.05;
      letter-spacing: 0;
    }

    .subtitle {
      display: none;
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
      grid-template-columns: 1fr;
      gap: 18px;
      align-items: stretch;
    }

    aside.panel { display: none; }

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

    .control-box {
      border: 1px solid #cfe4dc;
      border-radius: 8px;
      padding: 18px;
      background: #f4fbf7;
      display: grid;
      gap: 12px;
    }

    .text-input {
      width: 100%;
      min-height: 42px;
      padding: 10px 12px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
      color: var(--ink);
      font: inherit;
      outline-color: var(--teal);
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
      max-height: 320px;
      overflow-y: auto;
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
      min-height: calc(100vh - 150px);
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    .messages {
      padding: 18px;
      display: flex;
      flex-direction: column;
      gap: 12px;
      overflow-y: auto;
      min-height: 460px;
      background: linear-gradient(180deg, #ffffff, #fbfdfb);
    }

    .message {
      max-width: 84%;
      padding: 12px 14px;
      border-radius: 8px;
      line-height: 1.45;
      overflow-wrap: anywhere;
    }

    .message p {
      margin: 0 0 10px;
      white-space: pre-wrap;
    }

    .message p:last-child { margin-bottom: 0; }

    .message ul {
      margin: 0 0 10px 20px;
      padding: 0;
    }

    .message-table-wrap {
      max-width: 100%;
      overflow-x: auto;
      margin: 10px 0;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
    }

    .message table {
      width: 100%;
      border-collapse: collapse;
      min-width: 420px;
      font-size: 14px;
    }

    .message th,
    .message td {
      padding: 9px 10px;
      border-bottom: 1px solid var(--line);
      text-align: left;
      vertical-align: top;
    }

    .message th {
      background: #f4fbf7;
      color: var(--teal-dark);
      font-weight: 800;
    }

    .message tr:last-child td { border-bottom: 0; }

    .assistant {
      align-self: flex-start;
      background: #eef8f4;
      border: 1px solid #cfece0;
    }

    .image-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 10px;
      margin-top: 12px;
    }

    .image-result {
      display: grid;
      gap: 6px;
      color: var(--muted);
      font-size: 12px;
      text-decoration: none;
    }

    .image-result img {
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: 8px;
      border: 1px solid var(--line);
      background: white;
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

    .button-bot {
      width: 20px;
      height: 20px;
      border-radius: 999px;
      object-fit: cover;
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

    .report-list {
      display: grid;
      gap: 8px;
      margin-top: 12px;
      max-height: 210px;
      overflow-y: auto;
    }

    .report-item {
      padding: 10px;
      border: 1px solid var(--line);
      border-radius: 8px;
      background: white;
      font-size: 13px;
      line-height: 1.35;
    }

    .report-item strong {
      display: block;
      margin-bottom: 3px;
    }

    .icon-button {
      width: 44px;
      min-width: 44px;
      padding: 0;
      border: 1px solid var(--line);
      background: rgba(255,255,255,.88);
      color: var(--teal-dark);
    }

    .modal-backdrop {
      position: fixed;
      inset: 0;
      display: none;
      align-items: center;
      justify-content: center;
      padding: 18px;
      background: rgba(11, 23, 18, .42);
      z-index: 20;
    }

    .modal-backdrop.active { display: flex; }

    .modal {
      width: min(440px, 100%);
      background: white;
      border: 1px solid var(--line);
      border-radius: 8px;
      box-shadow: var(--shadow);
      padding: 22px;
      display: grid;
      gap: 14px;
    }

    .modal h2 { font-size: 22px; }

    .admin-panel {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: min(440px, 100%);
      background: white;
      border-left: 1px solid var(--line);
      box-shadow: var(--shadow);
      transform: translateX(105%);
      transition: transform .18s ease;
      z-index: 18;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .admin-panel.active { transform: translateX(0); }

    .admin-body {
      padding: 18px;
      overflow-y: auto;
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
          <img class="mark" src="/assets/bot.png" alt="Asistente MADEVAL" />
          <h1>Asistente MADEVAL</h1>
        </div>
        <p class="subtitle">Consulta la informacion de la empresa con una experiencia clara y rapida.</p>
      </div>
      <button class="icon-button" type="button" id="adminOpen" title="Super usuario"><i data-lucide="settings"></i></button>
    </section>

    <section class="grid">
      <aside class="panel">
        <div class="panel-header">
          <h2>Base cargada</h2>
          <span class="pill"><i data-lucide="folder-open"></i><span id="fileCount">0</span></span>
        </div>
        <div class="panel-body">
          <div class="control-box">
            <strong>Usuario</strong>
            <input class="text-input" id="userName" type="text" placeholder="Escribe tu nombre" autocomplete="name" />
            <div class="file-meta">Este nombre se usa para personalizar respuestas y guardar el informe de consultas.</div>
          </div>
          <div class="control-box" style="margin-top: 12px;">
            <strong>Base local</strong>
            <div class="file-meta">Copia archivos o carpetas directamente en <strong>knowledge_base</strong> y luego actualiza el indice.</div>
            <div class="btn-row">
              <button class="primary" type="button" id="indexBtn"><i data-lucide="refresh-cw"></i>Crear indice</button>
            </div>
          </div>
          <div class="control-box" style="margin-top: 12px;">
            <strong>Informe reciente</strong>
            <div class="file-meta">Ultimas preguntas registradas por usuario.</div>
            <div class="report-list" id="reportList"></div>
          </div>
          <div class="hint">Las preguntas quedan registradas por usuario y fecha para generar informes internos.</div>
          <div class="files" id="files"></div>
        </div>
      </aside>

      <section class="panel chat">
        <div class="messages" id="messages">
        </div>
        <form class="composer" id="askForm">
          <textarea id="question" placeholder="Escribe una pregunta sobre la empresa..." required></textarea>
          <button class="accent" type="submit"><img class="button-bot" src="/assets/bot.png" alt="" />Enviar</button>
        </form>
      </section>
    </section>
  </main>

  <div class="modal-backdrop" id="nameGate">
      <div class="modal">
        <div class="brand">
        <img class="mark" src="/assets/bot.png" alt="Asistente MADEVAL" />
        <h2>Antes de empezar</h2>
      </div>
      <p class="file-meta">Ingresa tu nombre para personalizar la respuesta y registrar internamente tus consultas.</p>
      <input class="text-input" id="gateName" type="text" placeholder="Tu nombre" autocomplete="name" />
      <button class="primary" type="button" id="saveNameBtn"><i data-lucide="check"></i>Continuar</button>
    </div>
  </div>

  <div class="modal-backdrop" id="adminLogin">
    <div class="modal">
      <div class="panel-header" style="padding:0 0 10px;">
        <h2>Super usuario</h2>
        <button class="icon-button" type="button" id="adminLoginClose" title="Cerrar"><i data-lucide="x"></i></button>
      </div>
      <input class="text-input" id="adminUser" type="text" placeholder="Usuario" autocomplete="username" />
      <input class="text-input" id="adminPassword" type="password" placeholder="Contraseña" autocomplete="current-password" />
      <button class="primary" type="button" id="adminLoginBtn"><i data-lucide="lock-keyhole"></i>Ingresar</button>
      <div class="file-meta" id="adminLoginMessage"></div>
    </div>
  </div>

  <section class="admin-panel" id="adminPanel">
    <div class="panel-header">
      <h2>Opciones de super usuario</h2>
      <button class="icon-button" type="button" id="adminClose" title="Cerrar"><i data-lucide="x"></i></button>
    </div>
    <div class="admin-body">
      <div class="control-box">
        <strong>Base local</strong>
        <div class="file-meta"><span id="adminFileCount">0</span> archivos detectados. Copia documentos en <strong>knowledge_base</strong> y actualiza el indice.</div>
        <button class="primary" type="button" id="adminIndexBtn"><i data-lucide="refresh-cw"></i>Crear indice</button>
      </div>
      <div class="control-box" style="margin-top: 12px;">
        <strong>Reporte de consultas</strong>
        <div class="file-meta">Descarga el historial ordenado por usuario, preguntas, respuestas y fecha.</div>
        <button class="secondary" type="button" id="downloadReportBtn"><i data-lucide="download"></i>Descargar Excel</button>
        <div class="report-list" id="reportList"></div>
      </div>
    </div>
  </section>

  <script>
    const filesEl = document.querySelector("#files");
    const fileCountEl = document.querySelector("#fileCount");
    const messagesEl = document.querySelector("#messages");
    const reportListEl = document.querySelector("#reportList");
    const userNameEl = document.querySelector("#userName");
    const adminFileCountEl = document.querySelector("#adminFileCount");
    const nameGate = document.querySelector("#nameGate");
    const gateNameEl = document.querySelector("#gateName");
    const saveNameBtn = document.querySelector("#saveNameBtn");
    const adminOpen = document.querySelector("#adminOpen");
    const adminLogin = document.querySelector("#adminLogin");
    const adminLoginClose = document.querySelector("#adminLoginClose");
    const adminLoginBtn = document.querySelector("#adminLoginBtn");
    const adminUserEl = document.querySelector("#adminUser");
    const adminPasswordEl = document.querySelector("#adminPassword");
    const adminLoginMessage = document.querySelector("#adminLoginMessage");
    const adminPanel = document.querySelector("#adminPanel");
    const adminClose = document.querySelector("#adminClose");
    const adminIndexBtn = document.querySelector("#adminIndexBtn");
    const downloadReportBtn = document.querySelector("#downloadReportBtn");
    const askForm = document.querySelector("#askForm");
    const questionEl = document.querySelector("#question");
    let adminToken = sessionStorage.getItem("kb_admin_token") || "";

    function icons() {
      if (window.lucide) window.lucide.createIcons();
    }

    function addMessage(text, role) {
      const el = document.createElement("div");
      el.className = `message ${role}`;
      el.textContent = text;
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return el;
    }

    function appendInlineText(parent, text) {
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      for (const part of parts) {
        if (part.startsWith("**") && part.endsWith("**")) {
          const strong = document.createElement("strong");
          strong.textContent = part.slice(2, -2);
          parent.appendChild(strong);
        } else if (part) {
          parent.appendChild(document.createTextNode(part));
        }
      }
    }

    function isTableSeparator(line) {
      return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
    }

    function parseTableRow(line) {
      return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((cell) => cell.trim());
    }

    function appendParagraph(container, lines) {
      const text = lines.join("\n").trim();
      if (!text) return;
      const p = document.createElement("p");
      appendInlineText(p, text);
      container.appendChild(p);
    }

    function appendTable(container, lines) {
      const headers = parseTableRow(lines[0]);
      const rows = lines.slice(2).map(parseTableRow).filter((row) => row.length);
      const wrap = document.createElement("div");
      wrap.className = "message-table-wrap";
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      const headRow = document.createElement("tr");
      for (const header of headers) {
        const th = document.createElement("th");
        appendInlineText(th, header);
        headRow.appendChild(th);
      }
      thead.appendChild(headRow);
      table.appendChild(thead);
      const tbody = document.createElement("tbody");
      for (const row of rows) {
        const tr = document.createElement("tr");
        for (const cell of row) {
          const td = document.createElement("td");
          appendInlineText(td, cell);
          tr.appendChild(td);
        }
        tbody.appendChild(tr);
      }
      table.appendChild(tbody);
      wrap.appendChild(table);
      container.appendChild(wrap);
    }

    function renderAssistantText(container, text) {
      const lines = text.split("\n");
      let paragraph = [];
      for (let index = 0; index < lines.length; index += 1) {
        const line = lines[index];
        const next = lines[index + 1] || "";
        if (line.includes("|") && isTableSeparator(next)) {
          appendParagraph(container, paragraph);
          paragraph = [];
          const tableLines = [line, next];
          index += 2;
          while (index < lines.length && lines[index].includes("|")) {
            tableLines.push(lines[index]);
            index += 1;
          }
          index -= 1;
          appendTable(container, tableLines);
          continue;
        }
        paragraph.push(line);
      }
      appendParagraph(container, paragraph);
    }

    function addAssistantMessage(text, images = []) {
      const el = document.createElement("div");
      el.className = "message assistant";
      const textEl = document.createElement("div");
      renderAssistantText(textEl, text);
      el.appendChild(textEl);
      if (images.length) {
        const grid = document.createElement("div");
        grid.className = "image-grid";
        for (const image of images) {
          const item = document.createElement("a");
          item.className = "image-result";
          item.href = image.url;
          item.target = "_blank";
          item.rel = "noopener";
          const img = document.createElement("img");
          img.src = image.url;
          img.alt = image.name;
          const caption = document.createElement("span");
          caption.textContent = image.name;
          item.appendChild(img);
          item.appendChild(caption);
          grid.appendChild(item);
        }
        el.appendChild(grid);
      }
      messagesEl.appendChild(el);
      messagesEl.scrollTop = messagesEl.scrollHeight;
      return el;
    }

    function humanSize(bytes) {
      if (bytes < 1024) return `${bytes} B`;
      if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
      return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
    }

    async function refreshFiles() {
      const response = await fetch("/api/files");
      const data = await response.json();
      if (fileCountEl) fileCountEl.textContent = data.files.length;
      if (adminFileCountEl) adminFileCountEl.textContent = data.files.length;
      filesEl.innerHTML = "";
      for (const file of data.files) {
        const row = document.createElement("div");
        row.className = "file";
        row.innerHTML = `
          <div class="file-icon"><i data-lucide="${file.is_image ? "image" : "file-text"}"></i></div>
          <div>
            <div class="file-name"></div>
            <div class="file-meta">${humanSize(file.size)} - ${file.extension}</div>
          </div>`;
        row.querySelector(".file-name").textContent = file.path || file.name;
        filesEl.appendChild(row);
      }
      icons();
    }

    async function refreshReport() {
      if (!adminToken) return;
      const response = await fetch("/api/report", { headers: { Authorization: `Bearer ${adminToken}` } });
      if (!response.ok) return;
      const data = await response.json();
      reportListEl.innerHTML = "";
      if (!data.interactions.length) {
        const empty = document.createElement("div");
        empty.className = "file-meta";
        empty.textContent = "Todavia no hay consultas registradas.";
        reportListEl.appendChild(empty);
        return;
      }
      for (const item of data.interactions) {
        const row = document.createElement("div");
        row.className = "report-item";
        const date = new Date(item.created_at);
        row.innerHTML = `<strong></strong><span></span>`;
        row.querySelector("strong").textContent = `${item.user_name} - ${date.toLocaleString()}`;
        row.querySelector("span").textContent = item.question;
        reportListEl.appendChild(row);
      }
    }

    function currentUserName() {
      return userNameEl.value.trim();
    }

    userNameEl.value = localStorage.getItem("kb_user_name") || "";
    gateNameEl.value = userNameEl.value;
    nameGate.classList.add("active");
    setTimeout(() => gateNameEl.focus(), 50);
    userNameEl.addEventListener("input", () => {
      localStorage.setItem("kb_user_name", currentUserName());
    });

    function saveUserName() {
      const name = gateNameEl.value.trim();
      if (!name) {
        gateNameEl.focus();
        return;
      }
      userNameEl.value = name;
      localStorage.setItem("kb_user_name", name);
      nameGate.classList.remove("active");
      addAssistantMessage(`Hola ${name}. Ya puedes hacerme preguntas.`);
      questionEl.focus();
    }

    saveNameBtn.addEventListener("click", saveUserName);
    gateNameEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") saveUserName();
    });

    async function createIndex(button) {
      button.disabled = true;
      const response = await fetch("/api/ingest", { method: "POST" });
      const data = await response.json();
      addMessage(data.message, "assistant");
      button.disabled = false;
      await refreshFiles();
    }

    adminIndexBtn.addEventListener("click", () => createIndex(adminIndexBtn));

    adminOpen.addEventListener("click", () => {
      if (adminToken) {
        adminPanel.classList.add("active");
        refreshReport();
      } else {
        adminLogin.classList.add("active");
        setTimeout(() => adminUserEl.focus(), 50);
      }
    });

    adminLoginClose.addEventListener("click", () => adminLogin.classList.remove("active"));
    adminClose.addEventListener("click", () => adminPanel.classList.remove("active"));

    async function loginAdmin() {
      adminLoginMessage.textContent = "";
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: adminUserEl.value.trim(), password: adminPasswordEl.value })
      });
      const data = await response.json();
      if (!data.ok) {
        adminLoginMessage.textContent = data.message || "No se pudo ingresar.";
        return;
      }
      adminToken = data.token;
      sessionStorage.setItem("kb_admin_token", adminToken);
      adminLogin.classList.remove("active");
      adminPanel.classList.add("active");
      await refreshReport();
    }

    adminLoginBtn.addEventListener("click", loginAdmin);
    adminPasswordEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") loginAdmin();
    });

    downloadReportBtn.addEventListener("click", () => {
      if (!adminToken) return;
      window.location.href = `/api/report.xlsx?token=${encodeURIComponent(adminToken)}`;
    });

    askForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      const question = questionEl.value.trim();
      if (!question) return;
      const userName = currentUserName();
      if (!userName) {
        nameGate.classList.add("active");
        gateNameEl.focus();
        return;
      }
      addMessage(question, "user");
      questionEl.value = "";
      const waiting = addAssistantMessage("Buscando en la base...");
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question, user_name: userName })
      });
      const data = await response.json();
      waiting.remove();
      addAssistantMessage(data.answer || data.message, data.images || []);
      if (adminPanel.classList.contains("active")) await refreshReport();
    });

    questionEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        askForm.requestSubmit();
      }
    });

    refreshFiles();
    refreshReport();
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


def init_db() -> None:
    DB_PATH.parent.mkdir(exist_ok=True)
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute(
            """
            CREATE TABLE IF NOT EXISTS interactions (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                created_at TEXT NOT NULL,
                date TEXT NOT NULL,
                user_name TEXT NOT NULL,
                question TEXT NOT NULL,
                answer TEXT NOT NULL,
                sources TEXT NOT NULL,
                images TEXT NOT NULL
            )
            """
        )


def log_interaction(user_name: str, question: str, answer: str, sources: list[dict], images: list[dict]) -> None:
    init_db()
    now = datetime.now()
    source_names = [str(source.get("source", "")) for source in sources if source.get("source")]
    with sqlite3.connect(DB_PATH) as connection:
        connection.execute(
            """
            INSERT INTO interactions (created_at, date, user_name, question, answer, sources, images)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            """,
            (
                now.isoformat(timespec="seconds"),
                now.date().isoformat(),
                user_name,
                question,
                answer,
                json.dumps(source_names, ensure_ascii=False),
                json.dumps(images, ensure_ascii=False),
            ),
        )


def recent_interactions(limit: int = 20) -> list[dict]:
    init_db()
    with sqlite3.connect(DB_PATH) as connection:
        connection.row_factory = sqlite3.Row
        rows = connection.execute(
            """
            SELECT created_at, date, user_name, question, answer, sources
            FROM interactions
            ORDER BY id DESC
            LIMIT ?
            """,
            (limit,),
        ).fetchall()
    return [dict(row) for row in rows]


def all_interactions() -> list[dict]:
    init_db()
    with sqlite3.connect(DB_PATH) as connection:
        connection.row_factory = sqlite3.Row
        rows = connection.execute(
            """
            SELECT created_at, date, user_name, question, answer, sources
            FROM interactions
            ORDER BY user_name COLLATE NOCASE, created_at DESC
            """
        ).fetchall()
    return [dict(row) for row in rows]


def create_report_xlsx() -> bytes:
    try:
        from openpyxl import Workbook
        from openpyxl.styles import Font, PatternFill
        from openpyxl.utils import get_column_letter
    except ModuleNotFoundError as error:
        raise UserFacingError("Falta openpyxl para generar el reporte Excel.") from error

    from io import BytesIO

    rows = all_interactions()
    workbook = Workbook()
    sheet = workbook.active
    sheet.title = "Reporte consultas"
    headers = ["Usuario", "Fecha", "Pregunta", "Respuesta", "Fuentes"]
    sheet.append(headers)
    header_fill = PatternFill("solid", fgColor="DFF4EA")
    for cell in sheet[1]:
        cell.font = Font(bold=True, color="00665C")
        cell.fill = header_fill

    current_user = None
    for row in rows:
        if row["user_name"] != current_user:
            current_user = row["user_name"]
            sheet.append([current_user, "", "", "", ""])
            user_row = sheet.max_row
            sheet.cell(user_row, 1).font = Font(bold=True, size=14, color="17211C")
        try:
            sources = ", ".join(json.loads(row["sources"] or "[]"))
        except json.JSONDecodeError:
            sources = row["sources"] or ""
        sheet.append([row["user_name"], row["created_at"], row["question"], row["answer"], sources])

    widths = [24, 22, 44, 70, 55]
    for index, width in enumerate(widths, start=1):
        sheet.column_dimensions[get_column_letter(index)].width = width
    for row in sheet.iter_rows():
        for cell in row:
            cell.alignment = cell.alignment.copy(wrap_text=True, vertical="top")

    buffer = BytesIO()
    workbook.save(buffer)
    return buffer.getvalue()


def list_files() -> list[dict]:
    KNOWLEDGE_DIR.mkdir(exist_ok=True)
    files = []
    for path in sorted(KNOWLEDGE_DIR.rglob("*")):
        if not path.is_file() or path.name.startswith(".") or path.name.startswith("~$") or path.name == "urls.txt":
            continue
        relative_path = path.relative_to(KNOWLEDGE_DIR)
        files.append(
            {
                "name": path.name,
                "path": str(relative_path).replace("\\", "/"),
                "size": path.stat().st_size,
                "extension": path.suffix.lower() or "archivo",
                "is_image": path.suffix.lower() in IMAGE_FILE_TYPES,
            }
        )
    return files


def safe_relative_path(name: str) -> Path | None:
    raw_parts = unquote(name).replace("\\", "/").split("/")
    safe_parts = []
    for part in raw_parts:
        cleaned = "".join(char for char in part.strip() if char.isalnum() or char in "._- ")
        if not cleaned or cleaned in {".", ".."}:
            continue
        safe_parts.append(cleaned)
    if not safe_parts:
        return None
    return Path(*safe_parts)


def admin_token_from(handler: BaseHTTPRequestHandler) -> str:
    auth_header = handler.headers.get("Authorization", "")
    if auth_header.startswith("Bearer "):
        return auth_header.removeprefix("Bearer ").strip()
    if "?token=" in handler.path:
        return unquote(handler.path.split("?token=", 1)[1].split("&", 1)[0])
    return ""


def is_admin_request(handler: BaseHTTPRequestHandler) -> bool:
    return admin_token_from(handler) in ADMIN_SESSIONS


def read_json_body(handler: BaseHTTPRequestHandler) -> dict:
    length = int(handler.headers.get("Content-Length", "0"))
    raw = handler.rfile.read(length)
    try:
        text = raw.decode("utf-8")
    except UnicodeDecodeError:
        text = raw.decode("latin-1")
    return json.loads(text or "{}")


class AppHandler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        if self.path in {"/", "/index.html"}:
            page_response(self)
            return
        if self.path == "/api/files":
            json_response(self, {"files": list_files(), "index_exists": INDEX_PATH.exists()})
            return
        if self.path.startswith("/api/report.xlsx"):
            self.handle_report_xlsx()
            return
        if self.path == "/api/report":
            if not is_admin_request(self):
                json_response(self, {"ok": False, "message": "Acceso restringido."}, status=403)
                return
            json_response(self, {"interactions": recent_interactions()})
            return
        if self.path.startswith("/assets/"):
            self.handle_asset_file()
            return
        if self.path.startswith("/knowledge/"):
            self.handle_knowledge_file()
            return
        json_response(self, {"ok": False, "message": "Ruta no encontrada."}, status=404)

    def handle_report_xlsx(self) -> None:
        if not is_admin_request(self):
            json_response(self, {"ok": False, "message": "Acceso restringido."}, status=403)
            return
        try:
            body = create_report_xlsx()
        except UserFacingError as error:
            json_response(self, {"ok": False, "message": str(error)}, status=500)
            return
        filename = f"reporte_consultas_{datetime.now().date().isoformat()}.xlsx"
        self.send_response(200)
        self.send_header("Content-Type", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
        self.send_header("Content-Disposition", f'attachment; filename="{filename}"')
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_knowledge_file(self) -> None:
        relative = safe_relative_path(self.path.removeprefix("/knowledge/"))
        if relative is None:
            json_response(self, {"ok": False, "message": "Archivo no encontrado."}, status=404)
            return
        target = (KNOWLEDGE_DIR / relative).resolve()
        root = KNOWLEDGE_DIR.resolve()
        if root not in target.parents or not target.exists() or not target.is_file():
            json_response(self, {"ok": False, "message": "Archivo no encontrado."}, status=404)
            return
        mime_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        body = target.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", mime_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def handle_asset_file(self) -> None:
        relative = safe_relative_path(self.path.removeprefix("/assets/"))
        if relative is None:
            json_response(self, {"ok": False, "message": "Archivo no encontrado."}, status=404)
            return
        target = (ASSETS_DIR / relative).resolve()
        root = ASSETS_DIR.resolve()
        if root not in target.parents or not target.exists() or not target.is_file():
            json_response(self, {"ok": False, "message": "Archivo no encontrado."}, status=404)
            return
        mime_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        body = target.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", mime_type)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self) -> None:
        if self.path == "/api/admin/login":
            self.handle_admin_login()
            return
        if self.path == "/api/ingest":
            self.handle_ingest()
            return
        if self.path == "/api/ask":
            self.handle_ask()
            return
        json_response(self, {"ok": False, "message": "Ruta no encontrada."}, status=404)

    def handle_admin_login(self) -> None:
        payload = read_json_body(self)
        username = str(payload.get("username", "")).strip()
        password = str(payload.get("password", ""))
        allowed_passwords = ADMIN_USERS.get(username)
        if not allowed_passwords or password not in allowed_passwords:
            json_response(self, {"ok": False, "message": "Usuario o contraseña incorrectos."}, status=401)
            return
        token = secrets.token_urlsafe(32)
        ADMIN_SESSIONS.add(token)
        json_response(self, {"ok": True, "token": token})

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
        payload = read_json_body(self)
        question = str(payload.get("question", "")).strip()
        user_name = str(payload.get("user_name", "")).strip()
        if not user_name:
            json_response(self, {"ok": False, "message": "Primero escribe tu nombre para registrar la consulta."}, status=400)
            return
        if not question:
            json_response(self, {"ok": False, "message": "Escribe una pregunta."}, status=400)
            return
        try:
            result = answer_question_with_sources(question, user_name=user_name)
        except UserFacingError as error:
            json_response(self, {"ok": False, "message": str(error)}, status=400)
            return
        except Exception as error:
            json_response(self, {"ok": False, "message": f"No pude responder todavia. Revisa la configuracion e intenta otra vez. Detalle: {error}"}, status=500)
            return
        image_candidates = []
        seen = set()
        combined_text = f"{question} {result['answer']}".lower()
        for source in result["sources"]:
            source_path = str(source.get("source", ""))
            extension = Path(source_path).suffix.lower()
            if extension not in IMAGE_FILE_TYPES or source_path in seen:
                continue
            seen.add(source_path)
            normalized_source = source_path.replace("\\", "/")
            relative_source = normalized_source.removeprefix("knowledge_base/")
            image_candidates.append(
                {
                    "name": Path(source_path).name,
                    "path": source_path,
                    "url": "/knowledge/" + quote(relative_source, safe="/"),
                }
            )
        matched_images = [
            image
            for image in image_candidates
            if any(token in combined_text for token in Path(image["name"]).stem.lower().replace("_", " ").split() if len(token) > 2)
        ]
        images = matched_images or image_candidates
        images = images[:4]
        log_interaction(user_name, question, result["answer"], result["sources"], images)
        json_response(self, {"ok": True, "answer": result["answer"], "images": images})

    def log_message(self, format: str, *args) -> None:
        return


def run() -> None:
    host = os.getenv("HOST", "127.0.0.1")
    port = int(os.getenv("PORT", "8000"))
    server = ThreadingHTTPServer((host, port), AppHandler)
    print(f"Interfaz lista en http://{host}:{port}")
    server.serve_forever()


if __name__ == "__main__":
    run()
