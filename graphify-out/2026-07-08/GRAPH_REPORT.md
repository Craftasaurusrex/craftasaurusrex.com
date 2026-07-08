# Graph Report - brand  (2026-07-08)

## Corpus Check
- 15 files · ~4,523 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 46 nodes · 48 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5345c4c5`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_index.astro|index.astro]]
- [[_COMMUNITY_data.ts|data.ts]]
- [[_COMMUNITY_dependencies|dependencies]]
- [[_COMMUNITY_scripts|scripts]]
- [[_COMMUNITY_package.json|package.json]]
- [[_COMMUNITY_tsconfig.json|tsconfig.json]]
- [[_COMMUNITY_..componentsNav.astro|../components/Nav.astro]]
- [[_COMMUNITY_..layoutsBase.astro|../layouts/Base.astro]]

## God Nodes (most connected - your core abstractions)
1. `scripts` - 6 edges
2. `../components/Nav.astro` - 4 edges
3. `../components/Featured.astro` - 3 edges
4. `../components/Footer.astro` - 3 edges
5. `../components/CTA.astro` - 2 edges
6. `../components/Crafts.astro` - 2 edges
7. `../components/Hero.astro` - 2 edges
8. `../components/Maker.astro` - 2 edges
9. `../components/Process.astro` - 2 edges
10. `../layouts/Base.astro` - 2 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 0 - "index.astro"
Cohesion: 0.29
Nodes (10): ../data, ../components/Crafts.astro, ../components/CTA.astro, ../components/Featured.astro, instagram, ../components/Footer.astro, year, ../components/Hero.astro (+2 more)

### Community 1 - "data.ts"
Cohesion: 0.25
Nodes (6): crafts, images, nav, pieces, socials, steps

### Community 2 - "dependencies"
Cohesion: 0.33
Nodes (6): dependencies, astro, @fontsource-variable/bricolage-grotesque, @fontsource-variable/work-sans, tailwindcss, @tailwindcss/vite

### Community 3 - "scripts"
Cohesion: 0.33
Nodes (6): scripts, astro, build, dev, optimize:images, preview

### Community 4 - "package.json"
Cohesion: 0.40
Nodes (4): name, private, type, version

### Community 5 - "tsconfig.json"
Cohesion: 0.50
Nodes (3): exclude, extends, include

### Community 6 - "../components/Nav.astro"
Cohesion: 0.67
Nodes (3): ../components/Nav.astro, menuBtn, mobileNav

## Knowledge Gaps
- **28 isolated node(s):** `name`, `type`, `version`, `private`, `dev` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `../components/Nav.astro` connect `../components/Nav.astro` to `index.astro`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **What connects `name`, `type`, `version` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._