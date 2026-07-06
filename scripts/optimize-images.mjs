// Generates responsive WebP variants for landing photos.
//
// Source of truth: assets/landing/*.jpg (full-resolution originals, not served).
// Output: public/landing/{base}-{width}.webp  (+ src/landing-manifest.json)
//
// The site's photo() helper (src/data.ts) reads the manifest to resolve each
// requested width to the nearest available variant. Re-run after adding or
// replacing an original: `npm run optimize:images`.

import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { basename, dirname, extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC_DIR = join(root, "assets", "landing");
const OUT_DIR = join(root, "public", "landing");
const MANIFEST = join(root, "src", "landing-manifest.json");

// Responsive width ladder. Variants above the source width are never upscaled;
// output is capped at MAX_WIDTH so we never ship needlessly huge files.
const LADDER = [640, 800, 1000, 1200, 1600, 2000];
const MAX_WIDTH = 2000;
const QUALITY = 78;

function targetWidths(nativeWidth) {
  const widths = new Set(LADDER.filter((w) => w < nativeWidth));
  widths.add(Math.min(nativeWidth, MAX_WIDTH));
  return [...widths].sort((a, b) => a - b);
}

async function run() {
  await mkdir(OUT_DIR, { recursive: true });
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  const files = (await readdir(SRC_DIR)).filter((f) =>
    /\.(jpe?g|png)$/i.test(f),
  );
  const manifest = {};
  let totalOut = 0;

  for (const file of files.sort()) {
    const base = basename(file, extname(file));
    const input = join(SRC_DIR, file);
    const meta = await sharp(input).metadata();
    const widths = targetWidths(meta.width);
    manifest[base] = widths;

    for (const w of widths) {
      const outPath = join(OUT_DIR, `${base}-${w}.webp`);
      const info = await sharp(input)
        .rotate() // honor EXIF orientation before stripping metadata
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(outPath);
      totalOut += info.size;
    }
    console.log(
      `${base.padEnd(26)} ${String(meta.width).padStart(4)}px -> ${widths.join(", ")}`,
    );
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
  console.log(
    `\nWrote ${Object.keys(manifest).length} images, total ${(totalOut / 1024 / 1024).toFixed(2)} MB`,
  );
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
