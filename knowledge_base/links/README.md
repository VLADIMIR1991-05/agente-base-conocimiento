# Base organizada de enlaces

Usa esta carpeta para guardar enlaces livianos y faciles de consultar sin gastar tokens.

Reglas:

- Solo usa URLs que abran directamente con `http://` o `https://`.
- Agrega palabras de busqueda en `aliases`.
- No pegues textos largos; guarda el enlace y una descripcion corta.
- Separa por tipo: colores, imagenes, videos, presentaciones y documentos.

Ejemplo:

```json
{
  "kind": "color",
  "resources": [
    {
      "title": "Bardolino",
      "aliases": ["bardolino", "tapas bardolino", "0520000947"],
      "code": "0520000947",
      "description": "TAPAS ADHESIVAS Ø14mm BARDOLINO / UNI",
      "url": "https://ejemplo.com/bardolino"
    }
  ]
}
```

Si el campo `url` esta vacio, el agente lo ignora para no entregar enlaces rotos.
