# tomchard-playground

A working notebook of design and motion experiments for tomchard.uk
and client projects. Each experiment is one self-contained HTML page
in `/experiments`, listed on `index.html`.

## How this repo works

1. Copy an existing experiment (or start from the live site's HTML).
2. Save it as a new file in `/experiments`.
3. Add a card for it on `index.html`.
4. Commit, push — GitHub Pages updates the live gallery.

Shared assets:

- `css/main.css` — design tokens and base styles (Newsreader,
  cream `#F7F4ED`, burgundy `#7E2046`)
- `css/animations.css` — reusable motion classes
- `js/main.js` — IntersectionObserver scroll reveals with
  automatic sibling staggering

To use the motion library on any page, link both files and add
classes: `.reveal-load` (+ `.d1`–`.d4`) for page-load sequences,
`.reveal-scroll` / `.reveal-left` / `.reveal-right` for
scroll-triggered reveals, `.draw-line` for self-drawing rules,
`.lift` for hover. Reduced motion is respected automatically.

## Lab notes

| # | Experiment | Technique | Verdict |
|---|------------|-----------|---------|
| i | Homepage with scroll motion | Vanilla JS, IntersectionObserver | — |

(One line per experiment. Future Tom will thank present Tom.)
