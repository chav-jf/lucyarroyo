
# Plan: Escuela de Baile Lucy Arroyo

Sitio web one-page premium, cinematográfico y totalmente responsive construido sobre el stack actual del proyecto (TanStack Start + React + Tailwind v4 + Framer Motion). Nota: el proyecto usa **TanStack Start**, no Next.js — se mantiene la misma experiencia (SSR, SEO, lazy loading, rendimiento), sólo cambia el framework subyacente.

## Identidad visual

- Paleta configurada como tokens semánticos en `src/styles.css` (oklch):
  - `--background` negro profundo `#050505`
  - `--primary` rojo intenso `#D6001C`
  - `--accent` rojo brillante hover `#FF2B45`
  - `--foreground` blanco, `--muted` gris `#EAEAEA`, `--muted-foreground` `#B8B8B8`
- Tipografías cargadas vía `<link>` en `__root.tsx` (Google Fonts):
  - Títulos: **Playfair Display**
  - Cuerpo: **Manrope**
- Logo oficial subido: se integra vía Lovable Assets (sin fondo si es necesario) y se usa en navbar + favicon + og:image.

## Estructura de rutas

Al ser one-page con anclas, se usa una sola ruta `src/routes/index.tsx` que compone las secciones. Contacto y páginas legales quedan como secciones ancladas (el usuario pidió explícitamente navegación tipo one-page). `__root.tsx` recibe metadatos SEO reales (title, description, og:*, twitter:*).

## Componentes a crear (en `src/components/site/`)

1. `Navbar.tsx` — transparente sobre hero, cambia a negro con `backdrop-blur` al scrollear (`useScroll` de Framer Motion). Logo a la izquierda, menú (Inicio, Nosotros, Clases, Profesores, Galería, Redes, Contacto), botón "Inscríbete". Menú hamburguesa animado en móvil (Sheet de shadcn).
2. `Hero.tsx` — 100vh, video de fondo cinematográfico en loop (muted, autoplay, playsInline), overlay negro degradado, título Playfair enorme, subtítulo, dos CTAs con efecto hover elegante, indicador de scroll animado (mouse + flecha). Parallax en título con `useScroll` + `useTransform`.
3. `Nosotros.tsx` — layout dividido (texto + imagen placeholder), contadores animados con `motion` + `useInView` (+10 años, +500 alumnos, +100 presentaciones, +20 estilos).
4. `Clases.tsx` — grid de tarjetas (Salsa, Bachata, Kizomba, Reggaeton, Urbano, Contemporáneo — placeholders), imagen placeholder, hover con zoom + overlay rojo, botón "Más información".
5. `Profesores.tsx` — tarjetas con foto placeholder, nombre, especialidad, iconos redes sociales, hover reveal.
6. `Galeria.tsx` — grid tipo masonry con placeholders, Lightbox usando `Dialog` de shadcn + navegación con flechas y teclado.
7. `Redes.tsx` — dos videos verticales (9:16) tipo Reels, poster placeholder, botón play centrado, título y descripción debajo. Videos demo fáciles de reemplazar (rutas en `public/videos/`).
8. `Contacto.tsx` — formulario (nombre, email, teléfono, mensaje) con validación (react-hook-form + zod), tarjetas info (WhatsApp, teléfono, correo, redes), mapa embebido de Google Maps (iframe), envío por ahora vía `mailto:` o toast de confirmación (sin backend hasta que el usuario lo pida).
9. `Footer.tsx` — logo, enlaces, redes sociales, copyright.

## Videos

- **Hero**: video cinematográfico generado con `videogen--generate_video` (bailarines, iluminación dramática, tomas dinámicas, ~6-8s en loop). Se guarda en `public/videos/hero.mp4` con poster JPG generado.
- **Redes**: dos videos verticales generados también con `videogen` como demostración, reemplazables luego.

## Placeholders de imágenes

Todas las imágenes (Nosotros, Clases, Profesores, Galería) son placeholders visuales elegantes (bloques con gradiente + icono + texto tipo "Imagen 01"), **sin generar fotografías con IA**, tal como se pidió. Se estructuran para que el usuario simplemente reemplace `src` más adelante.

## Animaciones (Framer Motion)

- `fadeIn`, `slideUp`, `zoomIn` como variantes reutilizables en `src/lib/motion.ts`.
- Scroll reveal con `whileInView` + `viewport={{ once: true }}`.
- Parallax en hero y separadores con `useScroll` + `useTransform`.
- Microinteracciones en botones (`whileHover`, `whileTap`).
- Smooth scroll nativo (`scroll-behavior: smooth` + offset para navbar).
- GSAP no se incluye salvo que se detecte necesidad real (Framer Motion cubre todo lo pedido).

## Responsive

Tailwind breakpoints estándar. Navbar colapsa a hamburguesa `<md`. Grids ajustan columnas (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`). Tipografías con `clamp()` en el hero. Se aplican los patrones de `min-w-0` + `shrink-0` para filas mixtas.

## SEO y rendimiento

- `head()` en la ruta index con title, description, og:title, og:description, og:image (logo), twitter:card.
- `<h1>` único en hero.
- Alt text en todas las imágenes.
- `loading="lazy"` en imágenes fuera del viewport.
- Video hero con `preload="metadata"` y `poster`.
- Fuentes con `display=swap`.

## Detalles técnicos

- Framer Motion ya disponible o se instala con `bun add framer-motion`.
- Iconos: `lucide-react` (ya instalado).
- Componentes shadcn reutilizados: `button`, `dialog`, `sheet`, `input`, `textarea`, `form`, `sonner`.
- Sin backend en esta iteración (formulario muestra toast). Si luego se quiere envío real por email, se activará Lovable Cloud + endpoint de email.

## Fuera de alcance (para pedir después)

- Backend real de contacto / base de datos de inscripciones.
- CMS para que Lucy edite clases y profesores.
- Multi-idioma.
