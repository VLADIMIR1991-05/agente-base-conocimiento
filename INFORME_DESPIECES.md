# Informe de despieces - Asistente MADEVAL

Fecha: 2026-07-08

## Fallas encontradas

1. La palabra `despiece` no activaba siempre la tabla de piezas.
   - La regla buscaba principalmente variantes con `z`, como `despiez`.
   - Consultas como `Dame el despiece de SB90` reconocian el codigo, pero no mostraban el despiece.

2. El cambio de espesor no se aplicaba si el usuario escribia solo `en 18`.
   - Antes se detectaba mejor cuando venia como `18mm`.
   - Ahora tambien entiende `en 18`, `de 18`, `material 18`, `estructura 18`, `casco 18`, etc.

3. La continuidad del chat podia tomar una palabra incorrecta del historial.
   - En respuestas anteriores aparecia `PROFUNDIDAD` dentro de tablas.
   - Al pedir `el mismo en 18`, el agente podia tomar `PROFUNDIDAD` como codigo, en vez de retomar `A79H5`.

4. El codigo `X45DH9R` interpretaba mal `H9R`.
   - Leia el `9R` como `9 repisas moviles`.
   - Ahora no cuenta repisas cuando el numero pertenece a una altura tipo `H9`.

5. La IA podia resumir una tabla tecnica y perder datos.
   - Para despieces, la tabla calculada debe respetarse.
   - Ahora los despieces salen desde el motor de reglas, sin dejar que el modelo cambie medidas.

## Reglas reforzadas

- Ancho interno: `ancho del modulo - grosor lateral - grosor lateral`.
- Piezas internas: `ancho interno - 1 mm`.
- Altos: por defecto estructura de 15 mm.
- Bajos y bajos suspendidos: por defecto estructura de 18 mm.
- Si el usuario pide 15 o 18 mm, recalcula la estructura con ese espesor.
- Puertas y frentes: 18 mm.
- Respaldo: 6 mm.
- Bajos sin TPM: 2 ajustes superiores en lugar de techo.
- Bajos con TPM: reemplaza los ajustes superiores por 1 TPM.
- Ajuste posterior:
  - hasta H4: 1 ajuste posterior.
  - desde H5: 2 ajustes posteriores.
- Ajustes por defecto: 60 mm.
- Repisa movil: `ancho interno - 1` x `profundidad - 110`.

## Mejoras recomendadas

1. Crear una tabla maestra de reglas por tipo de modulo.
   - Ejemplo: bajos, altos, suspendidos, auxiliares, closets, esquineros.
   - Asi cada familia tendria piezas obligatorias, piezas opcionales, espesores y descuentos definidos en datos, no solo en codigo.

2. Separar piezas por categoria.
   - Estructura.
   - Puertas/frentes.
   - Respaldo.
   - Repisas.
   - Ajustes.
   - Accesorios.

3. Agregar validaciones visuales en el informe.
   - Marcar en rojo cuando falta ancho, alto o profundidad.
   - Marcar si el codigo parece acabado y no modulo.
   - Marcar si hay reglas incompletas.

4. Crear ejemplos oficiales por familia.
   - Un bajo normal.
   - Un bajo con TPM.
   - Un alto H5.
   - Un suspendido bajo.
   - Un auxiliar.
   - Un closet.

5. Guardar versiones de reglas.
   - Ejemplo: `reglas_despiece_v1.json`.
   - Cuando cambie una regla, se actualiza el archivo y queda trazabilidad.

## Pruebas agregadas

Se agregaron pruebas automaticas para:

- `Dame el despiece de SB90`
- `A79H5` en 15 mm y 18 mm
- continuidad: `el mismo en 18`
- bajo con TPM
- `X45DH9R` sin crear 9 repisas falsas
