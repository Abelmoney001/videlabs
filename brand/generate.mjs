// Regenerates every file in brand/png, brand/svg and brand/favicon from the
// master icon and the site wordmark. Run from the repo root:
//
//   node brand/generate.mjs
//
// Uses the copy of sharp that Next.js already installs.

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const BRAND = path.dirname(fileURLToPath(import.meta.url));
const MASTER = path.join(BRAND, "master/videlabs-icon-master-3232.png");
const WORDMARK = path.join(BRAND, "../public/images/videlabs-wordmark.svg");

const NIGHT = "#01031a";
const WHITE = "#ffffff";
const CLEAR = { r: 0, g: 0, b: 0, alpha: 0 };
const TONES = { white: WHITE, ink: NIGHT };

// No `effort` or `quality` here: either one makes sharp quantise to a palette.
const PNG = { compressionLevel: 9, adaptiveFiltering: true };
const png = (image, file) =>
  image.png(PNG).toFile(path.join(BRAND, "png", file));

const hexToRgb = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

for (const dir of ["png", "svg", "favicon"]) {
  await rm(path.join(BRAND, dir), { recursive: true, force: true });
  await mkdir(path.join(BRAND, dir), { recursive: true });
}

const master = await sharp(MASTER).toBuffer();
const icon = (size) =>
  sharp(master).resize(size, size, { kernel: "lanczos3" }).toBuffer();

// --- Icon ------------------------------------------------------------------

// The tile as drawn: rounded corners on a transparent background.
const ICON_SIZES = [16, 32, 48, 64, 96, 128, 180, 192, 256, 512, 1024];
for (const size of ICON_SIZES) {
  await png(sharp(await icon(size)), `videlabs-icon-${size}.png`);
}

// Same tile with the corners filled and no alpha channel, for stores and
// platforms that reject transparency.
for (const size of [180, 192, 512, 1024]) {
  await png(
    sharp(await icon(size)).flatten({ background: NIGHT }),
    `videlabs-icon-opaque-${size}.png`,
  );
}

// Tile at 58% on a night background. The whole tile survives a circular crop
// and sits inside the Android maskable safe zone.
for (const size of [192, 512, 1024]) {
  const inner = Math.round(size * 0.58);
  const padded = await sharp({
    create: { width: size, height: size, channels: 3, background: NIGHT },
  })
    .composite([{ input: await icon(inner), gravity: "centre" }])
    .png()
    .toBuffer();
  await png(sharp(padded).removeAlpha(), `videlabs-icon-padded-${size}.png`);
}

// --- Glyph -----------------------------------------------------------------

// The white glyph in the pupil is the only near-white area of the artwork, so
// the lowest colour channel works as its alpha mask.
const glyphMask = await (async () => {
  const region = { left: 900, top: 1150, width: 1500, height: 1450 };
  const { data, info } = await sharp(master)
    .extract(region)
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  const alpha = Buffer.alloc(info.width * info.height);
  let x0 = info.width, y0 = info.height, x1 = 0, y1 = 0;
  for (let i = 0; i < alpha.length; i++) {
    const low = Math.min(data[i * 3], data[i * 3 + 1], data[i * 3 + 2]);
    const a = Math.max(0, Math.min(255, Math.round(((low - 48) / (232 - 48)) * 255)));
    alpha[i] = a;
    // Only solid white sets the bounds, which keeps the pale end of the
    // gradient band below the eye out of the crop.
    if (a === 255) {
      const x = i % info.width, y = Math.floor(i / info.width);
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  // Keep only what is connected to the solid white, so faint light edges
  // elsewhere in the eye do not come along.
  const keep = new Uint8Array(alpha.length);
  const queue = [];
  for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] === 255) {
      keep[i] = 1;
      queue.push(i);
    }
  }
  while (queue.length) {
    const i = queue.pop();
    const x = i % info.width;
    for (const n of [i - info.width, i + info.width, x > 0 ? i - 1 : -1, x < info.width - 1 ? i + 1 : -1]) {
      if (n >= 0 && n < alpha.length && !keep[n] && alpha[n] > 0) {
        keep[n] = 1;
        queue.push(n);
      }
    }
  }
  for (let i = 0; i < alpha.length; i++) if (!keep[i]) alpha[i] = 0;
  return sharp(alpha, { raw: { width: info.width, height: info.height, channels: 1 } })
    .extract({ left: x0 - 4, top: y0 - 4, width: x1 - x0 + 9, height: y1 - y0 + 9 })
    .png()
    .toBuffer();
})();

const glyph = async (size, color) => {
  const inner = Math.round(size * 0.84);
  const mask = await sharp(glyphMask)
    .resize(inner, inner, { fit: "contain", background: "#000", kernel: "lanczos3" })
    .extend({
      top: Math.floor((size - inner) / 2),
      bottom: Math.ceil((size - inner) / 2),
      left: Math.floor((size - inner) / 2),
      right: Math.ceil((size - inner) / 2),
      background: "#000",
    })
    .extractChannel(0)
    .raw()
    .toBuffer();
  const [r, g, b] = hexToRgb(color);
  const rgba = Buffer.alloc(size * size * 4);
  for (let i = 0; i < size * size; i++) rgba.set([r, g, b, mask[i]], i * 4);
  return sharp(rgba, { raw: { width: size, height: size, channels: 4 } });
};

for (const [tone, color] of Object.entries(TONES)) {
  for (const size of [32, 64, 128, 256, 512, 1024]) {
    await png(await glyph(size, color), `videlabs-glyph-${tone}-${size}.png`);
  }
}

// --- Wordmark --------------------------------------------------------------

const wordmarkSource = await readFile(WORDMARK, "utf8");
const [, , , vbW, vbH] = wordmarkSource
  .match(/viewBox="([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)"/)
  .map(Number);
const wordmarkSvg = (color) => wordmarkSource.replace(/fill="#fff"/, `fill="${color}"`);
const wordmark = (width, color) =>
  sharp(Buffer.from(wordmarkSvg(color).replace("<svg ", `<svg width="${width}" `)))
    .resize({ width })
    .toBuffer({ resolveWithObject: true });

for (const [tone, color] of Object.entries(TONES)) {
  await writeFile(path.join(BRAND, `svg/videlabs-wordmark-${tone}.svg`), wordmarkSvg(color));
  for (const width of [512, 1024, 2048]) {
    const { data } = await wordmark(width, color);
    await png(sharp(data), `videlabs-wordmark-${tone}-${width}.png`);
  }
}

// --- Lockups ---------------------------------------------------------------

const canvas = (width, height) =>
  sharp({ create: { width, height, channels: 4, background: CLEAR } });

for (const [tone, color] of Object.entries(TONES)) {
  for (const width of [512, 1024, 2048]) {
    const stacked = width <= 1024;
    // Horizontal: the navbar and footer arrangement. Tile, a gap of 3/11 of
    // the tile, then the wordmark at 7/22 of the tile's height.
    {
      const tile = Math.floor(width / (1 + 3 / 11 + (7 / 22) * (vbW / vbH)));
      const word = await wordmark(width - tile - Math.round((tile * 3) / 11), color);
      await png(
        canvas(width, tile).composite([
          { input: await icon(tile), left: 0, top: 0 },
          {
            input: word.data,
            left: width - word.info.width,
            top: Math.round((tile - word.info.height) / 2),
          },
        ]),
        `videlabs-lockup-horizontal-${tone}-${width}.png`,
      );
    }

    // Stacked: the original logo. Wordmark directly under the tile, inset
    // slightly, with the spacing of the source artwork (tile 38.38 units
    // wide, gap 1.94, wordmark 37.2 x 5.8). Stops at 1024 wide to keep the
    // folder small; build larger ones from the master.
    if (stacked) {
      const unit = width / 38.38;
      const word = await wordmark(Math.round(37.2 * unit), color);
      const top = width + Math.round(1.94 * unit);
      await png(
        canvas(width, top + word.info.height).composite([
          { input: await icon(width), left: 0, top: 0 },
          { input: word.data, left: Math.round((width - word.info.width) / 2), top },
        ]),
        `videlabs-lockup-stacked-${tone}-${width}.png`,
      );
    }
  }
}

// --- Favicon ---------------------------------------------------------------

// An .ico is a small directory followed by ordinary PNG files.
{
  const sizes = [16, 32, 48];
  const images = await Promise.all(
    sizes.map(async (size) => sharp(await icon(size)).png(PNG).toBuffer()),
  );
  const header = Buffer.alloc(6 + 16 * sizes.length);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(sizes.length, 4);
  let offset = header.length;
  sizes.forEach((size, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry);
    header.writeUInt8(size, entry + 1);
    header.writeUInt16LE(1, entry + 4);
    header.writeUInt16LE(32, entry + 6);
    header.writeUInt32LE(images[i].length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += images[i].length;
  });
  await writeFile(path.join(BRAND, "favicon/favicon.ico"), Buffer.concat([header, ...images]));
}

console.log("Brand assets written to", BRAND);
