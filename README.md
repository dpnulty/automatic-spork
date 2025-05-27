# Dan's Static Site

This repo contains a lightweight static website structured for GitHub Pages.
All pages are plain HTML with Tailwind CSS from a CDN.

## Adding Pages
1. Create your HTML file inside `blog/`, `portfolio/`, `garden/`, or `hub/`.
2. Add an entry to `search.json` with title, url, tags, and excerpt.
3. Push changes to GitHub; Pages will serve them automatically.

## Development Tips
 - `dark-mode.js` toggles the theme and now stores your preference in `localStorage`.
 - `search.js` is a minimal ES6 module for fetching `search.json`.

## Deploying
Simply push to the `main` branch (or enable GitHub Pages in settings).

## Building with Partials
Run `node build.js` to inject the header and footer into each HTML page. The script looks for `<!-- @@header -->` and `<!-- @@footer -->` placeholders and replaces them with the content of the files in `partials/`.
