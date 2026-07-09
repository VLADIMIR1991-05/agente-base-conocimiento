# VERIFICAR

Aqui se guarda la base de codigos importada desde el repositorio `VERIFICAR`.

Archivo principal:

- `db_codigos.js`: diccionario de codigos, colores, accesorios y nomenclaturas.
- `reglas_despiece.json`: reglas editables para calcular piezas, descuentos, espesores y ajustes.

Si actualizas el repositorio `VERIFICAR`, reemplaza este archivo con la version nueva para que el agente use el conocimiento actualizado tambien en Render.

## Comportamiento en despieces

Cuando el usuario pide un despiece, el agente debe usar primero las reglas tecnicas. La IA puede ayudar a explicar la respuesta, pero no debe cambiar medidas calculadas.

Si el usuario continua con frases como `el mismo en 18`, `hazlo de 15`, `ok`, `compara`, o `y la puerta`, debe retomar el ultimo modulo valido del historial.
