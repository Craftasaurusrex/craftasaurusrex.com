# Graph Report - brand  (2026-07-10)

## Corpus Check
- 17 files · ~6,447 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 49 nodes · 58 edges · 7 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0daef6bb`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- index.astro
- data.ts
- dependencies
- scripts
- tsconfig.json
- ../components/Nav.astro

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `../components/Nav.astro` - 5 edges
3. `../components/Footer.astro` - 4 edges
4. `../components/Featured.astro` - 3 edges
5. `../layouts/Base.astro` - 3 edges
6. `../components/CTA.astro` - 2 edges
7. `../components/Crafts.astro` - 2 edges
8. `../components/Hero.astro` - 2 edges
9. `../components/Maker.astro` - 2 edges
10. `../components/Process.astro` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (7 total, 0 thin omitted)

### Community 0 - "index.astro"
Cohesion: 0.26
Nodes (11): ../data, ../components/Crafts.astro, ../components/CTA.astro, ../components/FAQ.astro, ../components/Featured.astro, instagram, ../components/Footer.astro, year (+3 more)

### Community 1 - "data.ts"
Cohesion: 0.21
Nodes (10): ../styles/global.css, crafts, images, nav, photo(), pieces, socials, steps (+2 more)

### Community 2 - "dependencies"
Cohesion: 0.33
Nodes (6): dependencies, astro, @fontsource-variable/bricolage-grotesque, @fontsource-variable/work-sans, tailwindcss, @tailwindcss/vite

### Community 3 - "scripts"
Cohesion: 0.18
Nodes (10): name, private, scripts, astro, build, dev, optimize:images, preview (+2 more)

### Community 5 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 6 - "../components/Nav.astro"
Cohesion: 0.67
Nodes (3): ../components/Nav.astro, menuBtn, mobileNav

## Knowledge Gaps
- **28 isolated node(s):** `name`, `type`, `version`, `private`, `dev` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `scripts`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `../components/Nav.astro` connect `../components/Nav.astro` to `index.astro`, `data.ts`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._