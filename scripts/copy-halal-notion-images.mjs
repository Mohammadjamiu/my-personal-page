/**
 * Copies Notion-export images from ExportBlock…Part-1 into public/blog/
 * with stable names used by the halal Nigeria posts.
 *
 * Run from mohammads_diary:  pnpm run copy:halal-images
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const diaryRoot = path.resolve(__dirname, '..');
const repoRoot = path.resolve(diaryRoot, '..');

const SOURCE_DIR = path.join(
  repoRoot,
  'ExportBlock-b465a3df-d585-4175-b202-43e9cf6bfdf7-Part-1',
);

const DEST_INVEST = path.join(diaryRoot, 'public', 'blog', 'halal-nigeria-investnaija');
const DEST_ONE17 = path.join(diaryRoot, 'public', 'blog', 'halal-nigeria-one17-fund');

/** Order matches `Beginner's Guide to Halal Investing` screenshots → halal-nigeria-investnaija-stock-guide.md */
const INVESTNAIJA_MAP = [
  ['IMG-20250728-WA0038.jpg', '01.jpg'],
  ['IMG-20250728-WA0032.jpg', '02.jpg'],
  ['IMG-20250728-WA0042.jpg', '03.jpg'],
  ['IMG-20250728-WA0040.jpg', '04.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.59_79dcdabe.jpg', '05.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.58_4a392792.jpg', '06.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.58_21642f58.jpg', '07.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.58_aac42c52.jpg', '08.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.59_dad18983.jpg', '09.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.58_5fa90c8a.jpg', '10.jpg'],
  ['IMG-20250728-WA0023.jpg', '11.jpg'],
  ['IMG-20250728-WA0021.jpg', '12.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.57_8a5f344e.jpg', '13.jpg'],
  ['IMG-20250728-WA0006.jpg', '14.jpg'],
  ['IMG-20250728-WA0002.jpg', '15.jpg'],
  ['IMG-20250728-WA0004.jpg', '16.jpg'],
  ['IMG-20250728-WA0003.jpg', '17.jpg'],
  ['IMG-20250728-WA0014.jpg', '18.jpg'],
  ['IMG-20250728-WA0009.jpg', '19.jpg'],
  ['IMG-20250728-WA0015.jpg', '20.jpg'],
  ['IMG-20250728-WA0008.jpg', '21.jpg'],
  ['IMG-20250728-WA0001.jpg', '22.jpg'],
  ['IMG-20250728-WA0007.jpg', '23.jpg'],
  ['WhatsApp_Image_2025-07-28_at_21.29.54_8800c5fe.jpg', '24.jpg'],
  ['WhatsApp_Image_2025-07-28_at_22.02.50_72dd8784.jpg', '25.jpg'],
];

function copyOrFail(from, to) {
  if (!fs.existsSync(from)) {
    console.error(`Missing source: ${from}`);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
  console.log(`OK  ${path.basename(from)} → ${path.relative(diaryRoot, to)}`);
}

function removeIfExists(p) {
  if (fs.existsSync(p)) {
    fs.unlinkSync(p);
    console.log(`Del ${path.relative(diaryRoot, p)}`);
  }
}

console.log(`Source: ${SOURCE_DIR}\n`);

if (!fs.existsSync(SOURCE_DIR)) {
  console.error(`Source folder not found. Expected:\n  ${SOURCE_DIR}`);
  process.exit(1);
}

for (const [srcName, destName] of INVESTNAIJA_MAP) {
  const from = path.join(SOURCE_DIR, srcName);
  const to = path.join(DEST_INVEST, destName);
  removeIfExists(to.replace(/\.jpg$/, '.svg'));
  copyOrFail(from, to);
}

const one17From = path.join(SOURCE_DIR, 'one17-mutual-fund.jpg');
const one17To = path.join(DEST_ONE17, 'mutual-fund-overview.jpg');
removeIfExists(path.join(DEST_ONE17, 'mutual-fund-overview.svg'));
copyOrFail(one17From, one17To);

console.log('\nDone.');
