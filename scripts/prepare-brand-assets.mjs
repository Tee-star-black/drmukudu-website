import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceCandidates = [
  resolve(projectRoot, 'images', 'DrMp.png'),
  resolve(projectRoot, 'public', 'images', 'DrMp.png'),
];

const sourceLogo = sourceCandidates.find((candidate) => existsSync(candidate));

if (!sourceLogo) {
  console.error('\nBrand asset missing: DrMp.png');
  console.error('Expected it at one of:');
  for (const candidate of sourceCandidates) console.error(`  - ${candidate}`);
  console.error('\nThe production build was stopped so the old logo cannot be deployed accidentally.\n');
  process.exit(1);
}

const publicDir = resolve(projectRoot, 'public');
const outputLogo = resolve(publicDir, 'logo.png');
const outputFavicon = resolve(publicDir, 'favicon.svg');

mkdirSync(publicDir, { recursive: true });
copyFileSync(sourceLogo, outputLogo);

const pngBase64 = readFileSync(sourceLogo).toString('base64');
const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n  <image href="data:image/png;base64,${pngBase64}" width="512" height="512" preserveAspectRatio="xMidYMid meet" />\n</svg>\n`;

writeFileSync(outputFavicon, faviconSvg, 'utf8');

console.log('Brand assets prepared from DrMp.png:');
console.log('  - public/logo.png');
console.log('  - public/favicon.svg');
