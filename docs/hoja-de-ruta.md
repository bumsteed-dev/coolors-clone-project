# Hoja de ruta

Ruta recomendada para ir agregando funcionalidad a **Colorya** de forma incremental. No intentes implementarlo todo de golpe: hazlo en este orden, y ve marcando cada punto (`- [x]`) a medida que lo completes en el proyecto.

## 1. Fundamentos de color y DOM

- [x] **Contraste automático blanco/negro** — funciones, strings, números, condiciones
- [ ] **Copiar HEX al hacer clic** — eventos + Clipboard API
- [ ] **Mostrar mensaje "Copied!"** — crear/modificar elementos, clases

## 2. Control por color individual

- [ ] **Bloquear un color** 🔒 — estado + DOM
- [ ] **Randomizar solo los colores desbloqueados** — condiciones + atributos/clases
- [ ] **Botón individual para cambiar un color** — eventos por elemento

## 3. Columnas dinámicas

- [ ] **Eliminar una columna** — `remove()`
- [ ] **Agregar una columna** — `createElement()`, `append()`
- [ ] **Mostrar HEX / RGB / HSL** — transformación de datos

## 4. Persistencia

- [ ] **Guardar paletas favoritas** — arrays + objetos + `localStorage`
- [ ] **Historial de paletas** — arrays + renderizado dinámico
- [ ] **Recuperar paleta al recargar** — `localStorage` + JSON

---

Este archivo se actualiza a medida que avanza el proyecto: es el registro vivo de qué se ha practicado y qué falta.
