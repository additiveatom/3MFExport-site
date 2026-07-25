import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(here, '..', 'public', 'og-image.svg');
const pngPath = resolve(here, '..', 'public', 'og-image.png');

const svg = await readFile(svgPath);
const png = await sharp(svg, { density: 300 })
  .resize(1200, 630, { fit: 'contain', background: '#17181c' })
  .png({ compressionLevel: 9 })
  .toBuffer();

await writeFile(pngPath, png);
console.log(`Wrote ${pngPath} (${png.length} bytes)`);
