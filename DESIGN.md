<!-- SEED: re-run /impeccable document once there's code to capture the actual tokens and components. -->
---
name: Craftasaurus
description: The storefront and story for a maker of handcrafted wood, metal, and laser-cut goods — honest, warm, made by hand.
---

# Design System: Craftasaurus

## 1. Overview

**Creative North Star: "The Workbench, Not the Boutique"**

Craftasaurus should feel like standing in a working shop where the sawdust is fresh and the steel is still warm — a place run by someone who lets the work speak. The system is built on **material honesty**: warmth comes from wood, forged steel, and fire, never from a warm-tinted near-white background pretending to be paper. Color is carried by a full three-role palette (wood, steel, ember) that maps onto the three crafts themselves. Type is sturdy and tactile — a display face with the weight of workshop signage over a warm, readable body. Motion is quiet and responsive: things react to the hand, but the page never performs for its own sake.

This is a brand surface where design *is* the product, so it commits. But it commits the way a good maker does — with restraint as the strategy, not as an absence of soul. Personality lives in the name, the wit, and the material; the goods themselves are handled with a straight face, for grown-ups. References that anchor the lane: **Best Made Co.** (rugged objects shot beautifully, hand-and-workbench storytelling), **Shinola** (made-here narrative, industrial-warm, process as the brand), and **Aesop** (material restraint, tactile premium, disciplined typography).

It explicitly rejects: the **Etsy-cluttered / craft-fair** look (sticker soup, five fonts, twee mess), **generic SaaS / startup** sheen (gradient blobs, hero-metric templates, cool-blue tech gloss), **cold sterile minimalism** (stripped so far back it loses the maker's-hands warmth), and anything **childish or cartoonish** (the dino name is a wink, never the meal).

**Key Characteristics:**
- Full palette — three deliberate material roles (wood, steel, ember), not a neutral wash.
- Material carries warmth; the background never fakes it with cream/beige.
- Sturdy, tactile type: workshop-signage display + humanist sans body.
- Responsive motion — tactile feedback and a few earned reveals, no spectacle.
- Restraint as discipline: characterful but never twee, refined but never cold.

## 2. Colors

A full palette of three material roles — **wood, forged steel, and ember** — carried by real materials rather than decoration invented on top. *(Seed: exact values resolved during implementation. Anchor the primary on a warm walnut/oak wood tone, steel on a forged charcoal, ember on a hot forge-orange. Work in OKLCH.)*

### Primary
- **Wood** (`[to be resolved during implementation]`): The dominant material voice — warm walnut/oak brown. Grounds surfaces, section fields, and the tactile warmth of the brand.

### Secondary
- **Forged Steel** (`[to be resolved during implementation]`): Charcoal-steel with a warm cast. Structure, ink, strong type, and metalwork context.

### Tertiary
- **Ember** (`[to be resolved during implementation]`): Hot forge-orange. The rarest, hottest accent — reserved for calls to action and the single point of heat on a screen.

### Neutral
- **Off-white / Ink** (`[to be resolved during implementation]`): A true off-white (chroma pulled toward wood, **not** toward generic warm cream) for light fields; a deep ink-brown for body text. Body text must clear 4.5:1.

### Named Rules
**The Material-Warmth Rule.** Warmth is carried by wood, steel, fire, and imagery — never by a warm-tinted near-white body background. If the "warmth" is coming from a `--cream` / `--sand` / `--parchment` token, it is the AI default and is prohibited.

**The One Ember Rule.** Ember is the hottest, rarest color on any screen (≤10% of surface). Its scarcity is what makes it read as heat. Never spread it as decoration.

## 3. Typography

**Display Font:** `[slab/grotesque display — to be chosen at implementation]` (workshop-signage / letterpress / branding-iron weight)
**Body Font:** `[warm humanist sans — to be chosen at implementation]`
**Label Font:** *(only if distinct; otherwise the body sans in a heavier weight)*

**Character:** Sturdy and tactile over warm and readable — the pairing should feel stamped and made, not typeset for a magazine. Pair on a real contrast axis (heavy slab/grotesque display vs. humanist sans); never two similar sans families. Avoid the reflex-reject display serifs and the editorial-magazine lane.

### Hierarchy
- **Display** (heavy, `clamp()` up to ~6rem max, tight but ≥ -0.04em): Hero and section-defining headlines. `text-wrap: balance`.
- **Headline** (semibold, large): Section leads.
- **Title** (medium): Product names, sub-section heads.
- **Body** (regular, ~1.0–1.125rem, line-height ~1.6, 65–75ch max): Story and product copy. `text-wrap: pretty` on long prose.
- **Label** (medium/heavy, small): Product specs, material tags, buttons. Reserve any all-caps for short labels only — never body copy.

### Named Rules
**The Stamped-Not-Typeset Rule.** Display type should read like it was pressed or branded into the surface. If the headline could sit unchanged on a generic SaaS landing page, the face is wrong.

## 4. Elevation

Flat by default, with warmth and depth conveyed through material, tone, and imagery rather than floating cards. Motion is responsive (feedback + tasteful reveals), so shadows appear mainly as a soft response to interaction — a lift on hover, a focus glow — not as ambient decoration on every surface.

### Named Rules
**The Flat-By-Default Rule.** Surfaces rest flat. Shadow is a *response* to state (hover, focus, active), never a resting decoration. Nested cards are forbidden.

## 5. Components

*(Seed: no components exist yet. Real primitives — buttons, product cards, nav, inputs — get extracted on the next `/impeccable document` run once there's code. Until then, follow the rules above: flat by default, ember reserved for primary actions, stamped display type.)*

## 6. Do's and Don'ts

### Do:
- **Do** carry warmth through wood, steel, fire, and real imagery — the making is the proof of craft.
- **Do** lead with process: grain, forge marks, sawdust, the tool in hand. Show *how*, not just *what*.
- **Do** reserve ember for the single hottest action on a screen; keep it under ~10% of surface.
- **Do** keep body text at 4.5:1 contrast against its field; bump toward ink if it's even close.
- **Do** pair a heavy slab/grotesque display against a warm humanist sans — contrast axis, not two lookalikes.
- **Do** honor `prefers-reduced-motion` with a non-motion alternative for every reveal.

### Don't:
- **Don't** go Etsy-cluttered / craft-fair busy — no sticker soup, no five fonts, no twee hobbyist mess.
- **Don't** reach for generic SaaS / startup moves — no gradient blobs, no hero-metric template, no cool-blue tech sheen. This sells physical objects.
- **Don't** go cold-sterile-minimalist — empty white space is not the goal; material and texture are.
- **Don't** get childish or cartoonish — the dino name is a wink, never the meal. Grown-up first.
- **Don't** fake warmth with a `--cream` / `--sand` / `--parchment` near-white body background — that's the 2026 AI default.
- **Don't** use gradient text, side-stripe borders, decorative glassmorphism, or repeated tiny uppercase eyebrows above every section.
