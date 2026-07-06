# Graph Report - C:\code\craftasaurus\brand  (2026-07-06)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 46 nodes · 48 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `b7fdc6de`
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
2. `extends` - 1 edges
3. `include` - 1 edges
4. `exclude` - 1 edges
5. `menuBtn` - 1 edges
6. `mobileNav` - 1 edges
7. `../styles/global.css` - 1 edges
8. `private` - 1 edges
9. `dev` - 1 edges
10. `build` - 1 edges

## Surprising Connections (you probably didn't know these)
- None detected - all connections are within the same source files.

## Import Cycles
- None detected.

## Communities (9 total, 2 thin omitted)

### Community 0 - "index.astro"
Cohesion: 0.29
Nodes (3): ../data, instagram, year

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

## Knowledge Gaps
- **28 isolated node(s):** `extends`, `include`, `exclude`, `menuBtn`, `mobileNav` (+23 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `scripts` connect `scripts` to `package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.066) - this node is a cross-community bridge._
- **What connects `extends`, `include`, `exclude` to the rest of the system?**
  _28 weakly-connected nodes found - possible documentation gaps or missing edges._