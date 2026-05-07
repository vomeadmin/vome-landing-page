/**
 * One-shot image resizer for Lighthouse "Improve image delivery" wins.
 * Originals live at .image-originals/ (outside public/, not deployed).
 * Re-run is idempotent because each target dimension is fixed; if you
 * drop a new high-res source, copy it into .image-originals/<rel>/ first.
 *
 * Targets are sized at ~3x DPI of the displayed dimensions reported by
 * Lighthouse, with a small cushion. PNG → PNG and WebP → WebP (don't
 * change extensions; existing markup references would break).
 */
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SRC_ROOT = path.join(PROJECT_ROOT, ".image-originals");
const DST_ROOT = path.join(PROJECT_ROOT, "public");

const targets = [
  // [src relative to public, target width, target height OR null=keep aspect]
  ["integrations/salesforce.png", 120, 120],
  ["integrations/zapier.png", 200, null],          // wide aspect
  ["integrations/microsoft.png", 120, 120],
  ["integrations/sterling.jpeg", 120, 120],
  ["integrations/gmail.webp", 120, 120],
  ["integrations/dtd.png", 120, 120],
  ["logos/full-logo-orange.png", 300, null],       // hero/footer logo, wide aspect
  ["logos/full-logo-white.png", 300, null],
  ["logos/app-logo-white.png", 120, 120],
  ["logos/app-logo-orange.png", 120, 120],
  ["customers/molaa.webp", 200, null],
  ["customers/rmhc.webp", 240, null],
  ["customers/habitat.webp", 200, null],
  ["customers/golf-canada.webp", 240, null],
];

(async () => {
  for (const [rel, w, h] of targets) {
    const srcPath = path.join(SRC_ROOT, rel);
    const dstPath = path.join(DST_ROOT, rel);
    if (!fs.existsSync(srcPath)) {
      console.log(`skip (no backup): ${rel}`);
      continue;
    }
    const beforeSize = fs.statSync(dstPath).size;
    let pipeline = sharp(srcPath).resize({
      width: w,
      height: h ?? undefined,
      fit: "inside",
      withoutEnlargement: true,
    });
    const ext = path.extname(rel).toLowerCase();
    if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9, palette: true });
    else if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true });
    else if (ext === ".webp") pipeline = pipeline.webp({ quality: 82 });
    await pipeline.toFile(dstPath + ".tmp");
    fs.renameSync(dstPath + ".tmp", dstPath);
    const afterSize = fs.statSync(dstPath).size;
    console.log(
      `${rel}: ${(beforeSize / 1024).toFixed(1)}KB → ${(afterSize / 1024).toFixed(1)}KB`
    );
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
