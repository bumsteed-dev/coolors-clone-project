# Teoría del color y espacio HSL

Notas sobre por qué un color (o una paleta) "se ve bien" o "se ve feo", pensadas para el proyecto **coolors**. No es sobre cómo escribirlo en JS — es sobre el color en sí: qué es, cómo se organiza y qué reglas usan los generadores de paletas (como coolors.co) para que el resultado no sea un azar cualquiera.

## 1. Por qué el random "crudo" en RGB/hex se ve feo

Un hex como `#A3F02B` se arma combinando tres canales (Rojo, Verde, Azul) de 0-255 cada uno. El problema: **el ojo humano no percibe el color en términos de R/G/B**. Percibimos primero el matiz (¿es rojo? ¿azul?), después qué tan "puro" o "apagado" se ve, y por último qué tan claro u oscuro es.

Cuando generás los tres canales al azar de forma independiente, es fácil terminar con combinaciones que caen en zonas "sucias" — ni suficientemente saturadas para verse vivas, ni suficientemente claras/oscuras para verse elegantes. No es que el random esté mal, es que RGB no es el espacio adecuado para razonar sobre "qué se ve bien".

## 2. El espacio HSL

HSL reorganiza el mismo color en tres ejes que sí coinciden con cómo lo percibimos:

- **Hue (matiz)** — 0° a 360°, la posición en el círculo cromático. 0° = rojo, 120° = verde, 240° = azul, y vuelve a rojo en 360°.
- **Saturation (saturación)** — 0% a 100%. 0% es gris neutro (sin color), 100% es el matiz más "vivo" posible.
- **Lightness (luminosidad)** — 0% a 100%. 0% es negro, 50% es el color "puro", 100% es blanco.

Se suele representar como un cilindro: el ángulo alrededor del eje es el hue, la distancia al eje central es la saturación, y la altura es la luminosidad.

**Por qué importa para generar paletas:** en HSL podés dejar el hue completamente libre (ahí está la variedad) pero **acotar saturación y luminosidad** a rangos que casi siempre se ven bien (por ejemplo, saturación 55-80%, luminosidad 40-65%). Eso solo ya elimina la mayoría de los colores "sucios" sin necesidad de reglas más complejas.

## 3. Armonía de colores — cómo combinar varios colores entre sí

Elegir un buen color individual no alcanza para una paleta: los colores también tienen que combinar *entre ellos*. Para eso existen esquemas basados en la posición relativa de los hues en el círculo cromático:

- **Complementarios** — dos colores opuestos (180° de diferencia). Máximo contraste.
- **Análogos** — colores vecinos en el círculo (±30° aprox). Transiciones suaves, sensación armoniosa.
- **Triádicos** — tres colores equidistantes (120° entre sí). Vivo pero equilibrado.
- **Split-complementario / tetrádico** — variantes más elaboradas de las anteriores.

La idea clave: en vez de tirar varios hues totalmente independientes al azar, se elige **un hue base al azar** y los demás se calculan como *offsets matemáticos* de ese hue según el esquema elegido. Ahí es donde el azar deja de ser caótico y empieza a tener estructura.

## 4. Resumen práctico

1. Generá el color en HSL, no en RGB/hex directo.
2. Dejá el hue libre, pero acotá saturación y luminosidad a rangos "seguros".
3. Si querés que varios colores combinen entre sí, relacioná sus hues con un esquema de armonía (complementario, análogo, triádico...) en vez de generarlos 100% independientes.
4. Opcional: variar la luminosidad de forma progresiva entre los colores de la paleta da sensación de "degradado con sentido" en vez de bloques sueltos.

## Enlaces (español)

- [Modelo de color HSL — Wikipedia](https://es.wikipedia.org/wiki/Modelo_de_color_HSL)
- [HSL y HSV — Wikipedia](https://es.wikipedia.org/wiki/HSL_y_HSV)
- [Modelo de color HSL en productos digitales (UX, UI y CSS) — Medium](https://medium.com/@camilaveracas/modelo-de-color-hsl-f5ef78e16458)
- [Guía completa del modelo de color HSL para diseñadores web — Coloratrix](https://coloratrix.com/es/blog/modelo-hsl-guia-completa/)
- [Círculo cromático — HTML Color Codes](https://htmlcolorcodes.com/es/circulo-cromatico/)
- [Armonías de color: complementarios y análogos — paletadecolores.org](https://paletadecolores.org/armonia-de-colores.html)
- [Colores análogos y complementarios en el círculo cromático — Lalola Studio](https://lalolastudio.com/colores-analogos-y-complementarios-circulo-cromatico/)
- [Creando esquemas y paletas de colores con HSL — Silo Creativo](https://www.silocreativo.com/creando-esquemas-paletas-colores-hsl/)
- [Cómo generar y combinar paletas de colores — Ignacio Santiago](https://ignaciosantiago.com/combinacion-paletas-de-colores/)

## Videos (español)

- [Teoría del color | Conceptos básicos de diseño gráfico](https://www.youtube.com/watch?v=cGglJKvpCEs)
- [Teoría del color en el diseño gráfico](https://www.youtube.com/watch?v=7Sc-WkcQKj4)
- [¿Qué es el color? Explicación de la Teoría del color](https://www.youtube.com/watch?v=CFn-wPKxRR4)
- [La teoría del color: de principiante a experto](https://www.youtube.com/watch?v=8gLfTi6w6XE)
