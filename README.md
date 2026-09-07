# Portfolio

Personal portfolio site — React + Vite, no UI framework.

## Running locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview   # serve the build locally
```

## Editing content

All copy lives in **`src/content.js`** — projects, roles, skills and contact
links. You shouldn't need to touch the components to update the site.

Project images live in `src/assets/`. Three of them (`mirror.svg`,
`fitforge.svg`, `forensic.svg`) are hand-drawn mockups standing in until real
screenshots exist; drop a real `.png` in and update the import to swap one out.

## Before publishing

Search for `TODO` in `src/content.js` — the email address, LinkedIn URL and two
role date ranges still need filling in.

## Design notes

- System font stack (San Francisco on Apple devices) — no webfont to load.
- One accent colour (`--accent`), defined with the rest of the tokens at the top
  of `src/index.css`.
- Scroll reveals use `IntersectionObserver` and respect
  `prefers-reduced-motion`. No animation library.
- No 3D, no canvas — the whole page is HTML, CSS and ~67 kB of JS gzipped.

## Deploying

Vercel and Netlify both detect Vite automatically: build command `npm run build`,
output directory `dist`.
