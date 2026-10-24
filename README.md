# Portfolio · Máximo Bonarrico

Portfolio personal de ciberseguridad (SOC / Blue Team / Cloud Security).
HTML, CSS y JavaScript vanilla: sin frameworks, sin build, sin dependencias externas.

🌐 **Live:** https://maxi414.github.io

## Stack y decisiones
- HTML + CSS + Vanilla JS, estética de terminal en dark mode
- Bilingüe ES / EN (toggle en la barra superior, también `?lang=en`)
- Todo self-hosted (la fuente Fira Code incluida): cero requests a terceros
- Content-Security-Policy estricta por `<meta>` (GitHub Pages no permite headers propios)
- Todo texto que entra al DOM pasa por una función de escape
- `/.well-known/security.txt` (RFC 9116) y página 404 propia
- Respeta `prefers-reduced-motion` y es navegable con teclado

## Estructura
```
.
├── index.html
├── 404.html
├── css/style.css
├── js/main.js              ← todo el contenido se edita acá
├── assets/
│   ├── fonts/fira-code-latin.woff2
│   ├── foto.jpg
│   ├── og-image.png        ← preview al compartir el link
│   ├── CV_Bonarrico_Maximo.pdf
│   └── favicons
├── .well-known/security.txt
├── robots.txt · sitemap.xml
└── .nojekyll               ← necesario para que se publique .well-known/
```

## Editar contenido
Todo está en los bloques de datos al inicio de `js/main.js`. Los textos van en pares `{ es: '...', en: '...' }` y las fechas como `'AAAA-MM'` o `'AAAA-MM/AAAA-MM'`.

- **Nuevo lab:** agregar un objeto en `LABS`. El que tenga `featured: true` se muestra arriba, a lo ancho, con su lista de `highlights`.
- **Próximos labs / certificaciones:** `ROADMAP`.
- **Materias aprobadas:** `DEGREE.passed`.
- **Nueva certificación:** `CERTS` (con `wip: true` se muestra como "en curso").

Después de cambiar CSS o JS, subí el número de `?v=` en `index.html` para que el navegador no muestre la versión cacheada.
