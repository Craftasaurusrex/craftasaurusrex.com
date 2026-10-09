# Graph Report - brand  (2026-07-10)

## Corpus Check
- 17 files · ~6,447 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 53 nodes · 58 edges · 11 communities (8 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1cad3915`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- index.astro
- data.ts
- dependencies
- scripts
- index.astro
- tsconfig.json
- ../components/Nav.astro
- ../styles/global.css
- ../components/Featured.astro
- ../components/Footer.astro

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `../components/Nav.astro` - 5 edges
3. `../components/Footer.astro` - 4 edges
4. `../components/Featured.astro` - 3 edges
5. `../components/CTA.astro` - 2 edges
6. `../components/Maker.astro` - 2 edges
7. `photo()` - 2 edges
8. `images` - 2 edges
9. `socials` - 2 edges
10. `../layouts/Base.astro` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (11 total, 3 thin omitted)

### Community 0 - "index.astro"
Cohesion: 0.33
Nodes (6): ../data, ../components/Crafts.astro, ../components/CTA.astro, ../components/Hero.astro, ../components/Maker.astro, ../components/Process.astro

### Community 1 - "data.ts"
Cohesion: 0.27
Nodes (8): crafts, images, nav, photo(), pieces, socials, steps, schema

### Community 2 - "dependencies"
Cohesion: 0.18
Nodes (10): dependencies, astro, @fontsource-variable/bricolage-grotesque, @fontsource-variable/work-sans, tailwindcss, @tailwindcss/vite, name, private (+2 more)

### Community 3 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, astro, build, dev, optimize:images, preview

### Community 4 - "index.astro"
Cohesion: 0.33
Nodes (5): ../components/Crafts.astro, ../components/Hero.astro, ../components/Process.astro, ../layouts/Base.astro, ../components/FAQ.astro

### Community 5 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 6 - "../components/Nav.astro"
Cohesion: 0.67
Nodes (3): ../components/Nav.astro, menuBtn, mobileNav

## Knowledge Gaps
- **35 isolated node(s):** `../components/FAQ.astro`, `instagram`, `year`, `menuBtn`, `mobileNav` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `../components/Nav.astro` connect `../components/Nav.astro` to `index.astro`, `data.ts`, `index.astro`?**
  _High betweenness centrality (0.056) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `dependencies`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `../components/FAQ.astro`, `instagram`, `year` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._