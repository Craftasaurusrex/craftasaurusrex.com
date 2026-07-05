# Craftasaurus

The storefront and story for a maker of handcrafted wood, blacksmith/metal, and
laser-cut goods. Built with [Astro](https://astro.build) + Tailwind. Commerce is
planned via [Snipcart](https://snipcart.com) (client-side, no backend needed) —
not yet wired into the code.

## Local development

Requires Node 18+.

```bash
npm install
npm run dev        # http://localhost:4321
```

| Command           | What it does                                  |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Start the dev server with hot reload          |
| `npm run build`   | Build the production site into `dist/`        |
| `npm run preview` | Serve the built `dist/` locally to spot-check |

## Hosting

This is a **static site** — `npm run build` outputs plain HTML/CSS/JS to
`dist/`, which any static host can serve. There is no server to run (and once
Snipcart is added, its cart and checkout load entirely in the browser).

Set `site` in [`astro.config.mjs`](astro.config.mjs) to your real domain before
building (currently `https://craftasaurus.com`) so canonical URLs and the
sitemap are correct.

### Deploy to a static host (recommended)

Point any of these at the repo; they auto-detect Astro:

- **Build command:** `npm run build`
- **Output / publish directory:** `dist`

Works out of the box with **Netlify**, **Vercel**, **Cloudflare Pages**, and
**GitHub Pages**. Push to your main branch and the host rebuilds and redeploys.

### Deploy anywhere else

Run `npm run build` and upload the contents of `dist/` to any web server, CDN,
or object store (S3, nginx, Apache, etc.). No Node runtime required in
production.

### Snipcart (when added)

Once Snipcart is integrated, add its script and your **public** API key to the
layout, and configure product `data-item-*` attributes on the buy buttons. Use
the test key locally; swap in the live key for production.
