# Colorya — Coolors Clone Project

**Versión 3.8** · Proyecto de práctica personal

Colorya es un clon educativo de [coolors.co](https://coolors.co), construido para practicar JavaScript, manipulación del DOM y diseño de interfaz (UI). Este repositorio (`coolors-clone-project`) no tiene fines de lucro, no pretende sustituir ni competir con el servicio original, y todo el crédito conceptual del generador de paletas de colores es de coolors.co.

## Objetivo del proyecto

El propósito es puramente práctico: reforzar conceptos de JavaScript vanilla, eventos del DOM y maquetado responsivo, integrando además un framework moderno (Astro) para estructurar el sitio.

Este proyecto **no busca**:

- Copiar el código fuente de coolors.co (es un producto cerrado y propietario).
- Generar ingresos de ningún tipo.
- Presentarse como el proyecto original o afiliarse a la marca Coolors.

## Funcionalidades actuales

- Generación aleatoria de una paleta de 5 colores en formato HEX.
- Cálculo automático de contraste: el texto del código HEX cambia a blanco o negro según la luminancia del color de fondo.
- Regenerar la paleta con el botón **Random**.
- Regenerar la paleta con la barra espaciadora.
- Copiar el código HEX al portapapeles con un clic, con badge de confirmación "Copied!".
- Panel de atajos/acciones por color (`ShortCuts`) con tooltips: eliminar color, ver contraste, ver tonalidades, guardar color, arrastrar, copiar HEX, ver info del color y bloquear/desbloquear — **de momento solo "Copiar HEX" tiene lógica funcional; el resto son botones de interfaz aún sin comportamiento** (ver Hoja de ruta).
- SEO básico (metadatos, favicons, `site.webmanifest`) y analítica con Vercel Analytics.
- Diseño responsivo: la paleta se apila verticalmente en pantallas pequeñas.

## Hoja de ruta

Ruta de implementación sugerida en [`docs/hoja-de-ruta.md`](docs/hoja-de-ruta.md), pensada para ir agregando funcionalidad de forma incremental. **Nota:** ese documento aún no refleja el estado actual (marca "Copiar HEX" y "mensaje Copied!" como pendientes cuando ya están implementados); conviene actualizarlo también.

| # | Funcionalidad | Estado |
|---|---|---|
| 1 | Contraste automático blanco/negro | ✅ Hecho |
| 2 | Copiar HEX al hacer clic | ✅ Hecho |
| 3 | Mostrar mensaje "Copied!" | ✅ Hecho |
| 4 | Bloquear un color 🔒 | ⏳ Pendiente (icono/tooltip listo, sin lógica) |
| 5 | Randomizar solo los colores desbloqueados | ⏳ Pendiente |
| 6 | Botón individual para cambiar un color | ⏳ Pendiente |
| 7 | Eliminar una columna | ⏳ Pendiente (icono/tooltip listo, sin lógica) |
| 8 | Agregar una columna | ⏳ Pendiente |
| 9 | Mostrar HEX / RGB / HSL | ⏳ Pendiente (icono "info" listo, sin lógica) |
| 10 | Guardar paletas favoritas (localStorage) | ⏳ Pendiente (icono "corazón" listo, sin lógica) |
| 11 | Historial de paletas | ⏳ Pendiente |
| 12 | Recuperar paleta al recargar | ⏳ Pendiente |
| 13 | Ver tonalidades (shades) de un color | ⏳ Pendiente (icono/tooltip listo, sin lógica) |
| 14 | Reordenar colores por arrastre (drag) | ⏳ Pendiente (icono/tooltip listo, sin lógica) |

## Stack tecnológico

- [Astro](https://astro.build) — estructura y build del sitio
- JavaScript vanilla — toda la lógica de generación de colores y eventos
- Sass/SCSS (`sass-embedded`) — estilos de los componentes Astro
- HTML5 / CSS3
- [Vercel Analytics](https://vercel.com/docs/analytics) — analítica del sitio
- [pnpm](https://pnpm.io) como gestor de paquetes

## Estructura del proyecto

```
coolors-clone-project/
├── docs/
│   ├── hoja-de-ruta.md       # Ruta de implementación sugerida
│   └── teoria-del-color.md   # Teoría del color y espacio HSL
├── public/
│   ├── app.js                # Lógica principal (generación de color, contraste, copiar HEX)
│   └── favicons, manifest, og-image, robots.txt
├── src/
│   ├── components/           # RandomButton, SpaceBarButton, ShortCuts, CopyClipboardReady, SEO
│   ├── data/
│   │   └── shortcuts.ts      # Definición de los atajos/acciones por color
│   ├── icons/                # Iconos generales y de shortcuts (shades, lock, heart, drag, etc.)
│   ├── sections/              # Header, Colors, Tools
│   ├── styles/
│   │   └── _mixins.scss
│   └── pages/
│       └── index.astro       # Página principal
├── index.html                # Versión estática original (sin Astro)
└── astro.config.mjs
```

## Cómo correr el proyecto localmente

```bash
pnpm install
pnpm dev       # entorno de desarrollo
pnpm build     # build de producción
pnpm preview   # previsualizar el build
```

## Documentación adicional

- [`docs/teoria-del-color.md`](docs/teoria-del-color.md) — por qué un color/paleta "se ve bien", el espacio HSL y armonía de colores.
- [`docs/hoja-de-ruta.md`](docs/hoja-de-ruta.md) — orden recomendado para ir agregando funcionalidades.

## Contribuciones

Este es un proyecto personal de aprendizaje, pero las sugerencias, correcciones o ideas son bienvenidas:

1. Haz un fork del repositorio.
2. Crea una rama para tu cambio: `git checkout -b feature/nombre-descriptivo`.
3. Haz tus cambios y commitea: `git commit -m "Agrega nueva funcionalidad"`.
4. Sube tu rama: `git push origin feature/nombre-descriptivo`.
5. Abre un Pull Request describiendo el cambio propuesto.

## Créditos

- Inspirado en [coolors.co](https://coolors.co), generador de paletas de colores.
- Este proyecto es un ejercicio de práctica personal, sin afiliación, patrocinio ni respaldo por parte de coolors.co.

## Licencia

El código de este repositorio se distribuye bajo la licencia [MIT](LICENSE). Esta licencia cubre únicamente el código escrito en este proyecto, no la marca, el concepto original ni cualquier contenido perteneciente a coolors.co.

## Autor

Jesús Cedeño Vélez
