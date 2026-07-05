# Graph Report - C:\code\craftasaurus\brand  (2026-07-05)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 43 nodes · 45 edges · 10 communities (7 shown, 3 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_index.astro|index.astro]]
- [[_COMMUNITY_data.ts|data.ts]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_tsconfig.json|tsconfig.json]]
- [[_COMMUNITY_..componentsNav.astro|../components/Nav.astro]]
- [[_COMMUNITY_..layoutsBase.astro|../layouts/Base.astro]]
- [[_COMMUNITY_..componentsFooter.astro|../components/Footer.astro]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 5 edges
2. `../components/Footer.astro` - 3 edges
3. `../components/CTA.astro` - 2 edges
4. `../components/Crafts.astro` - 2 edges
5. `../components/Featured.astro` - 2 edges
6. `../components/Hero.astro` - 2 edges
7. `../components/Maker.astro` - 2 edges
8. `../components/Process.astro` - 2 edges
9. `private` - 1 edges
10. `dev` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (10 total, 3 thin omitted)

### Community 0 - "index.astro"
Cohesion: 0.43
Nodes (7): ../data, ../components/Crafts.astro, ../components/CTA.astro, ../components/Featured.astro, ../components/Hero.astro, ../components/Maker.astro, ../components/Process.astro

### Community 1 - "data.ts"
Cohesion: 0.29
Nodes (5): crafts, images, nav, pieces, steps

### Community 2 - "dependencies"
Cohesion: 0.33
Nodes (6): dependencies, astro, @fontsource-variable/bricolage-grotesque, @fontsource-variable/work-sans, tailwindcss, @tailwindcss/vite

### Community 3 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 4 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, astro, build, dev, preview

### Community 5 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): exclude, extends, include

## Knowledge Gaps
- **25 isolated node(s):** `name`, `type`, `version`, `private`, `dev` (+20 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.070) - this node is a cross-community bridge._
- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Why does `../components/Footer.astro` connect `../components/Footer.astro` to `index.astro`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._