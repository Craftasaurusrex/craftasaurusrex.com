# Design Context

Craftasaurus is a **brand** surface (design IS the product): the storefront and story for a maker of handcrafted wood, blacksmith/metal, and laser-cut goods. Commerce via Snipcart. First deliverable: a landing page that earns enough trust to move a curious visitor toward a purchase.

- **Full context:** see [PRODUCT.md](PRODUCT.md) (strategy: register, users, personality, anti-references) and [DESIGN.md](DESIGN.md) (visual system — currently a SEED, re-run `/impeccable document` once code exists).
- **Register:** brand. **Personality:** honest, warm, made-by-hand — grown-up first, wit second.
- **North Star:** "The Workbench, Not the Boutique." Warmth comes from wood/steel/fire and real imagery, never a cream/beige body background.
- **Palette:** full palette — wood (primary), forged steel, ember (rare hot accent, ≤10%).
- **Type:** heavy slab/grotesque display + warm humanist sans.
- **Motion:** responsive — tactile feedback + a few earned reveals; honor `prefers-reduced-motion`.
- **Avoid:** Etsy-cluttered, generic SaaS sheen, cold-sterile minimalism, childish/cartoonish.

Design and iteration run through the `/impeccable` skill.

## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).
