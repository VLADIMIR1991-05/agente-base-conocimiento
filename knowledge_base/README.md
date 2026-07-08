# Mapa de la base de conocimiento

Esta carpeta esta organizada para crecer sin mezclar informacion ni gastar tokens de mas.

## Carpetas principales

- `verificar/`: reglas y base de codigos del validador. Aqui vive `db_codigos.js`.
- `links/`: enlaces livianos que el agente entrega directamente sin resumir contenido pesado.
- `imagenes/`: archivos reales de imagen (`.png`, `.jpg`, `.jpeg`, `.webp`) que el agente puede mostrar si coinciden con la consulta.
- `documentos/`: documentos por formato para crear indice RAG cuando haga falta.
- `codigo/`: fragmentos, reglas tecnicas o notas de implementacion que no pertenecen a `VERIFICAR`.
- `urls.txt`: paginas web que se indexan como texto cuando se crea el indice.

## Regla practica

Si el recurso ya esta en internet y solo necesitas abrirlo, guardalo en `links/`.
Si necesitas que el agente lea el contenido y responda sobre el texto, guardalo en `documentos/`.
Si es una imagen que debe mostrarse directamente, guardala en `imagenes/`.

El objetivo es evitar informacion duplicada y mantener respuestas rapidas.
