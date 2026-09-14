import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourceCandidates = [
  resolve(projectRoot, 'public', 'images', 'DrMp.png'),
  resolve(projectRoot, 'images', 'DrMp.png'),
];

const sourceLogo = sourceCandidates.find((candidate) => existsSync(candidate));

if (!sourceLogo) {
  console.error('\nBrand asset missing: DrMp.png');
  console.error('Expected it at one of:');
  for (const candidate of sourceCandidates) console.error(`  - ${candidate}`);
  console.error('\nThe production build was stopped so an outdated logo cannot be deployed.\n');
  process.exit(1);
}

const publicDir = resolve(projectRoot, 'public');
const outputLogo = resolve(publicDir, 'logo.png');
const outputFavicon = resolve(publicDir, 'favicon.svg');

mkdirSync(publicDir, { recursive: true });
copyFileSync(sourceLogo, outputLogo);

const faviconSvg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n  <image href="/images/DrMp.png" x="0" y="0" width="512" height="512" preserveAspectRatio="xMidYMid meet" />\n</svg>\n`;
writeFileSync(outputFavicon, faviconSvg, 'utf8');

console.log('Official Dr Mukudu branding prepared from public/images/DrMp.png:');
console.log('  - public/logo.png');
console.log('  - public/favicon.svg');
