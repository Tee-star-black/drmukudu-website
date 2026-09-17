import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const source = readFileSync(resolve(dist, 'index.html'), 'utf8');
const siteUrl = 'https://drmukudu.co.za';

const pages = {
  '/': ['Dr Mukudu & Partners | GP Practice in Johannesburg South', 'Modern, patient-centred primary healthcare in Tulisa Park, Johannesburg South. GP consultations, women’s health, preventative care and accessible care programmes.'],
  '/about': ['About Dr Mukudu & Partners | Johannesburg South', 'Learn about Dr Mukudu & Partners, a modern medical practice focused on clinical precision, continuity and patient-centred primary care.'],
  '/services': ['Medical Services | Dr Mukudu & Partners', 'Explore GP consultations, preventative and procedural care, women’s health and free medical male circumcision services in Johannesburg South.'],
  '/services/general-medical-consultations': ['General Medical Consultations | Dr Mukudu & Partners', 'Routine check-ups, non-emergency illness care, chronic condition monitoring, prevention and follow-up at Dr Mukudu & Partners.'],
  '/services/preventative-procedural-care': ['Preventative & Procedural Care | Dr Mukudu & Partners', 'Screening, selected minor procedures, immunisations and structured aftercare at Dr Mukudu & Partners.'],
  '/services/womens-health': ['Women’s Health | Dr Mukudu & Partners', 'Private women’s health consultations covering screening, contraception, maternal support and hormonal health needs.'],
  '/free-male-circumcision': ['Free Male Circumcision | Dr Mukudu & Partners', 'Free, confidential voluntary medical male circumcision for eligible clients aged 10 years and older in Johannesburg South.'],
  '/medkulula': ['MedKulula Subscription | Dr Mukudu & Partners', 'Affordable monthly primary healthcare plans for individuals, students and dependants.'],
  '/price-list': ['Price List | Dr Mukudu & Partners', 'Published practice pricing for consultations and selected services at Dr Mukudu & Partners.'],
  '/contact': ['Contact Dr Mukudu & Partners | Tulisa Park', 'Call, WhatsApp or get directions to Dr Mukudu & Partners at 29 Landor Street, Tulisa Park, Johannesburg South.'],
  '/privacy-policy': ['Privacy Policy | Dr Mukudu & Partners', 'Privacy and POPIA information for the Dr Mukudu & Partners website.'],
  '/terms-and-conditions': ['Terms and Conditions | Dr Mukudu & Partners', 'Terms and conditions for Dr Mukudu & Partners and related subscription services.'],
  '/legal-notice': ['Legal Notice | Dr Mukudu & Partners', 'Important legal information about the Dr Mukudu & Partners website.'],
  '/cancellation-and-refund-policy': ['Cancellation and Refund Policy | Dr Mukudu & Partners', 'Cancellation and refund policy for eligible Dr Mukudu & Partners services and subscriptions.'],
  '/service-fulfilment-policy': ['Service Fulfilment Policy | Dr Mukudu & Partners', 'Service fulfilment information for Dr Mukudu & Partners.'],
  '/governing-law-and-jurisdiction': ['Governing Law and Jurisdiction | Dr Mukudu & Partners', 'Governing law and jurisdiction information for Dr Mukudu & Partners.'],
  '/cookie-policy': ['Cookie Policy | Dr Mukudu & Partners', 'Cookie and analytics policy for the Dr Mukudu & Partners website.'],
};

function esc(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function replaceMeta(html, path, title, description) {
  const canonical = `${siteUrl}${path === '/' ? '/' : path}`;
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(description)}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(title)}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(description)}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${esc(title)}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${esc(description)}" />`);
}

for (const [path, [title, description]] of Object.entries(pages)) {
  const html = replaceMeta(source, path, title, description);
  if (path === '/') {
    writeFileSync(resolve(dist, 'index.html'), html, 'utf8');
    continue;
  }
  const target = resolve(dist, `.${path}`, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html, 'utf8');
}

const today = new Date().toISOString().slice(0, 10);
const urls = Object.keys(pages).map((path) => {
  const loc = `${siteUrl}${path === '/' ? '/' : path}`;
  const priority = path === '/' ? '1.0' : path.startsWith('/services') || path === '/free-male-circumcision' ? '0.9' : path === '/contact' || path === '/medkulula' ? '0.8' : '0.5';
  return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
}).join('\n');

writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');

console.log(`Prerendered ${Object.keys(pages).length} public routes and regenerated sitemap.xml`);
