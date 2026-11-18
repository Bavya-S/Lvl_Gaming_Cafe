# LVL Gaming Café — website

Static, multi-page site (no build step, no framework). Mobile-first, dark cyberpunk / neon look.

## Run locally
```
python3 -m http.server 8000      # or: npx serve
# open http://localhost:8000
```
Always serve over http (not file://) so fonts, modules and the games list load correctly.

## Deploy
Upload the whole folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, cPanel).
Paths are case-sensitive on Linux hosts — every path in this version has been checked.
This package is already lean: the original full-resolution game artwork and the unused `jinx.glb` / `.HEIC`
files are NOT included (the site only uses the optimised WebP files). Keep your originals in your own backup.

## Structure
```
index.html rooms.html games.html food.html about.html booking.html
css/   style.css (global: nav, drawer, dock, buttons, footer, motion)
       hero.css  (home hero poster)   home.css  games.css  rooms.css  food.css  about.css  booking.css
js/    script.js (nav drawer, dock, loader, particles, reveals, page fade)
       home.js   (hero parallax + motes, counters, tap-to-load videos)
       games.js  (games list, filters, modal)   booking.js (WhatsApp booking)   rooms.js food.js about.js
assets/
  hero/   cut-out characters used by the home poster (Kratos, Eve, Atsu, Spider-Man)
  img/    optimised logo sizes, icons, room photos (WebP)
  fonts/  self-hosted Orbitron, Rajdhani, Share Tech Mono (woff2)
  games/web/  optimised 640 / 1280 px WebP game art
```

## Things you will edit most
* **Game list** – `js/games.js` (`GAMES` array). Keep the original image path in the entry (e.g. `assets/games/My Game.jpg`); the site loads the
  optimised copy at `assets/games/web/<lowercase-name-with-dashes>-640.webp` and `-1280.webp`
  — create it from your original (any tool, WebP, ~640 px and ~1280 px wide).
* **WhatsApp number** – `WA_NUMBER` at the top of `js/booking.js`, plus the `wa.me` / `tel:` links in the HTML.
* **Hero characters** – `.hc-kratos / .hc-eve / .hc-atsu / .hc-spidey` in `css/hero.css`
  (`--cx` horizontal position, `--h` size, `--b` vertical offset, `--z` layering).
