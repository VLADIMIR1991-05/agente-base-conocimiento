# Mapa de la base de conocimiento

Esta carpeta esta organizada para crecer sin mezclar informacion ni gastar tokens de mas.

## Carpetas principales

- `verificar/`: reglas y base de codigos del validador. Aqui vive `db_codigos.js`.
- `links/`: enlaces livianos que el agente entrega directamente sin resumir contenido pesado.
- `imagenes/`: archivos reales de imagen (`.png`, `.jpg`, `.jpeg`, `.webp`) que el agente puede mostrar si coinciden con la consulta.
- `documentos/`: documentos por formato para crear indice RAG cuando haga falta.
- `codigo/`: fragmentos, reglas tecnicas o notas de implementacion que no pertenecen a `VERIFICAR`.
- `urls.txt`: paginas web que se indexan como texto cuando se crea el indice.
- `usuarios.txt`: archivo opcional para administrar usuarios desde una carpeta sincronizada, por ejemplo OneDrive.

## Regla practica

Si el recurso ya esta en internet y solo necesitas abrirlo, guardalo en `links/`.
Si necesitas que el agente lea el contenido y responda sobre el texto, guardalo en `documentos/`.
Si es una imagen que debe mostrarse directamente, guardala en `imagenes/`.

El objetivo es evitar informacion duplicada y mantener respuestas rapidas.

## Como debe responder el agente

La base de conocimiento no solo guarda documentos; tambien orienta el comportamiento del agente.

El agente debe:

- conectar la pregunta actual con el historial reciente;
- responder corto cuando el dato es simple;
- explicar mejor cuando hay reglas, pasos, comparaciones o despieces;
- usar tablas solo cuando hacen mas clara la respuesta;
- reconocer abreviaciones y errores de escritura si el contexto es suficiente;
- pedir aclaracion solo cuando falte un dato clave;
- evitar inventar informacion que no este en la base o en las reglas.

La guia completa esta en `../COMPORTAMIENTO_AGENTE.md`.

## Usuarios desde TXT / OneDrive

Puedes manejar usuarios con un archivo `usuarios.txt`. Por defecto el agente lo busca en:

`knowledge_base/usuarios.txt`

Si quieres usar una ruta sincronizada por OneDrive, configura la variable `APP_USERS_FILE` con la ruta completa del archivo. Ejemplo:

`APP_USERS_FILE=C:\Users\TuUsuario\OneDrive\MADEVAL\usuarios.txt`

Formato recomendado:

```txt
usuario: vlad
contrasena: 1234
tipo: 1
activo: 1

usuario: invitado1
contrasena: 1234
tipo: 2
activo: 1
```

Tipos:

- `1` = super usuario.
- `2` = invitado.

Estado:

- `activo: 1` permite ingresar.
- `activo: 0` bloquea el usuario.

Si el mismo usuario existe en `usuarios.txt` y en la base local, manda lo que diga `usuarios.txt`.
