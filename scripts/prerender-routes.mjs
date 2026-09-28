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
  '/privacy-policy': ['Privacy Policy | Dr Mukudu & Partners', 'Learn how Dr Mukudu & Partners handles personal information, patient privacy, POPIA obligations and website data in South Africa.'],
  '/terms-and-conditions': ['Terms and Conditions | Dr Mukudu & Partners', 'Read the terms that apply to Dr Mukudu & Partners website use, healthcare services and MedKulula subscription services.'],
  '/legal-notice': ['Legal Notice & Healthcare Compliance | Dr Mukudu & Partners', 'Read the legal, privacy and healthcare-compliance information that applies to Dr Mukudu & Partners and its digital services in South Africa.'],
  '/cancellation-and-refund-policy': ['Cancellation & Refund Policy | Dr Mukudu & Partners', 'Review cancellation and refund terms that may apply to eligible Dr Mukudu & Partners services and MedKulula subscriptions.'],
  '/service-fulfilment-policy': ['Service Fulfilment Policy | Dr Mukudu & Partners', 'Learn how Dr Mukudu & Partners and MedKulula healthcare services are activated, scheduled and delivered in person or digitally.'],
  '/governing-law-and-jurisdiction': ['Governing Law & Jurisdiction | Dr Mukudu & Partners', 'Learn which South African laws and courts govern the Dr Mukudu & Partners website, services and MedKulula terms.'],
  '/cookie-policy': ['Cookie & Analytics Policy | Dr Mukudu & Partners', 'Learn how Dr Mukudu & Partners uses essential browser storage and optional analytics, and how you can manage your cookie preferences.'],
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
  const legalPaths = ['/privacy-policy', '/terms-and-conditions', '/legal-notice', '/cancellation-and-refund-policy', '/service-fulfilment-policy', '/governing-law-and-jurisdiction', '/cookie-policy'];
  const priority = path === '/' ? '1.0' : path.startsWith('/services') || path === '/free-male-circumcision' ? '0.9' : path === '/contact' || path === '/medkulula' || path === '/price-list' ? '0.8' : legalPaths.includes(path) ? '0.3' : '0.6';
  return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${priority}</priority></url>`;
}).join('\n');

writeFileSync(resolve(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, 'utf8');

console.log(`Prerendered ${Object.keys(pages).length} public routes and regenerated sitemap.xml`);
