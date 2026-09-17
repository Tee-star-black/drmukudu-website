import React from "react";
import "./production-site.css";

const PHONE = "0116131141";
const DISPLAY_PHONE = "011 613 1141";
const WHATSAPP = "27615471346";
const ADDRESS = "29 Landor Street, Tulisa Park, Johannesburg South, 2197";
const MAPS = "https://www.google.com/maps?q=29%20Landor%20Street%2C%20Tulisa%20Park%2C%20Johannesburg%20South%2C%202197";
const PATIENT_APP = "https://patient.drmukudu.co.za/install";
const SITE_URL = "https://drmukudu.co.za";
const LOGO = "/logo.png";

const serviceImages = {
  clinical: "/images/drm/pic1.jpg",
  consultation: "/images/drm/Gemini_Generated_Image_anxg0manxg0manxg.jpg",
  procedures: "/images/drm/Gemini_Generated_Image_bqxtwkbqxtwkbqxt%20(1).jpg",
  women: "/images/drm/Gemini_Generated_Image_loufcnloufcnlouf.jpg",
};

const pageMeta = {
  "/": ["Dr Mukudu & Partners | GP Practice in Johannesburg South", "Modern, patient-centred primary healthcare in Tulisa Park, Johannesburg South. GP consultations, women’s health, preventative care and accessible care programmes."],
  "/about": ["About Dr Mukudu & Partners | Johannesburg South", "Learn about Dr Mukudu & Partners, a modern medical practice focused on clinical precision, continuity and patient-centred primary care."],
  "/services": ["Medical Services | Dr Mukudu & Partners", "Explore GP consultations, preventative and procedural care, women’s health and free medical male circumcision services in Johannesburg South."],
  "/services/general-medical-consultations": ["General Medical Consultations | Dr Mukudu & Partners", "Routine check-ups, non-emergency illness care, chronic condition monitoring, prevention and follow-up at Dr Mukudu & Partners."],
  "/services/preventative-procedural-care": ["Preventative & Procedural Care | Dr Mukudu & Partners", "Screening, selected minor procedures, immunisations and structured aftercare at Dr Mukudu & Partners."],
  "/services/womens-health": ["Women’s Health | Dr Mukudu & Partners", "Private women’s health consultations covering screening, contraception, maternal support and hormonal health needs."],
  "/free-male-circumcision": ["Free Male Circumcision | Dr Mukudu & Partners", "Free, confidential voluntary medical male circumcision for eligible clients aged 10 years and older in Johannesburg South."],
  "/medkulula": ["MedKulula Subscription | Dr Mukudu & Partners", "Affordable monthly primary healthcare plans for individuals, students and dependants."],
  "/price-list": ["Price List | Dr Mukudu & Partners", "Published practice pricing for consultations and selected services at Dr Mukudu & Partners."],
  "/contact": ["Contact Dr Mukudu & Partners | Tulisa Park", "Call, WhatsApp or get directions to Dr Mukudu & Partners at 29 Landor Street, Tulisa Park, Johannesburg South."],
  "/privacy-policy": ["Privacy Policy | Dr Mukudu & Partners", "Privacy and POPIA information for the Dr Mukudu & Partners website."],
  "/terms-and-conditions": ["Terms and Conditions | Dr Mukudu & Partners", "Terms and conditions for Dr Mukudu & Partners and related subscription services."],
  "/legal-notice": ["Legal Notice | Dr Mukudu & Partners", "Important legal information about the Dr Mukudu & Partners website."],
  "/cancellation-and-refund-policy": ["Cancellation and Refund Policy | Dr Mukudu & Partners", "Cancellation and refund policy for eligible Dr Mukudu & Partners services and subscriptions."],
  "/service-fulfilment-policy": ["Service Fulfilment Policy | Dr Mukudu & Partners", "Service fulfilment information for Dr Mukudu & Partners."],
  "/governing-law-and-jurisdiction": ["Governing Law and Jurisdiction | Dr Mukudu & Partners", "Governing law and jurisdiction information for Dr Mukudu & Partners."],
  "/cookie-policy": ["Cookie Policy | Dr Mukudu & Partners", "Cookie and analytics policy for the Dr Mukudu & Partners website."],
};

const services = [
  {
    title: "General Medical Consultations",
    href: "/services/general-medical-consultations",
    image: serviceImages.consultation,
    summary: "Routine check-ups, common non-emergency illness, chronic monitoring, prevention and clear follow-up planning.",
  },
  {
    title: "Preventative & Procedural Care",
    href: "/services/preventative-procedural-care",
    image: serviceImages.procedures,
    summary: "Health screening, selected in-practice procedures, immunisations and structured aftercare.",
  },
  {
    title: "Women’s Health",
    href: "/services/womens-health",
    image: serviceImages.women,
    summary: "Private care across screening, contraception, reproductive health, maternal support and hormonal wellbeing.",
  },
];

const serviceDetails = {
  "/services/general-medical-consultations": {
    eyebrow: "General medical consultations",
    title: "Primary care with a clear plan from first concern to follow-up.",
    intro: "A general consultation brings routine care, assessment of common non-emergency concerns, chronic-condition review and preventative planning into one structured clinical visit.",
    image: serviceImages.consultation,
    coverage: ["Routine physical check-ups and health screening", "Assessment of common non-emergency symptoms", "Hypertension, diabetes and cholesterol monitoring", "Medication and treatment review", "Preventative risk assessment and lifestyle guidance", "Referral and follow-up planning when needed"],
    journey: ["Tell us what has changed and what is worrying you.", "The clinician reviews your history and performs the relevant examination.", "Your treatment, tests or referral plan is explained in plain language.", "Follow-up is arranged when monitoring or reassessment is needed."],
  },
  "/services/preventative-procedural-care": {
    eyebrow: "Preventative & procedural care",
    title: "Screening, selected procedures and prevention with structured aftercare.",
    intro: "Prevention works best when it is organised. Each visit starts with an assessment to confirm what is appropriate, followed by the relevant screening or intervention and clear aftercare guidance.",
    image: serviceImages.procedures,
    coverage: ["Preventative health screening", "Blood pressure, glucose and cholesterol checks", "Wound care and dressing", "Selected minor procedures", "Immunisation guidance", "ECG and other in-practice assessments where indicated"],
    journey: ["The reason for the visit and relevant risks are reviewed.", "The clinician confirms whether the screening or procedure is appropriate.", "The intervention is completed with clear explanation and consent.", "Aftercare and review instructions are provided before you leave."],
  },
  "/services/womens-health": {
    eyebrow: "Women’s health",
    title: "Discreet women’s healthcare across screening, reproductive and hormonal needs.",
    intro: "Women’s health consultations begin with a focused history and discussion of the reason for the visit. Examination, screening, treatment or referral is tailored to the clinical need.",
    image: serviceImages.women,
    coverage: ["Cervical screening and Pap smears", "Breast health assessment and screening guidance", "Contraception and family-planning support", "Menstrual and hormonal health concerns", "Maternal and postnatal support", "Referral pathways when specialist care is needed"],
    journey: ["Your concern, history and preferences are discussed privately.", "Relevant examination or screening is explained before it is performed.", "Options and next steps are discussed so you can make an informed decision.", "Follow-up, results review or referral is arranged where appropriate."],
  },
};

const priceItems = [
  ["GP Consultation", "R500"],
  ["Medical Report", "R500"],
  ["Review", "R250"],
  ["Referral", "R250"],
  ["Family Planning", "R320"],
  ["Wound Dressing", "R300"],
  ["Pap Smear", "R150 + lab cost"],
  ["PDP", "R300"],
  ["Prescription", "R300"],
  ["Blood Tests", "R100 + lab cost"],
  ["ECG", "R250"],
  ["Ear Syringing", "R400"],
  ["Biopsy", "R380"],
  ["Removal of Stitches", "R200"],
  ["Implant Removal", "R500"],
  ["Vital Checks", "R50"],
];

const plans = [
  { name: "MedKulula", price: "R300", audience: "Individual", href: "https://redcap.link/Dr_Mukudu_MedKulula_Subscription" },
  { name: "MedKulula + Dependant", price: "R380", audience: "Two members", href: whatsappUrl("I would like to enquire about the MedKulula + Dependant plan.") },
  { name: "Student MedKulula", price: "R200", audience: "Student", href: "https://redcap.link/Student_MedKulula_Subscription" },
];

const collaborators = [
  { title: "Dietician", practice: "Preno Nutrition and Wellness Services", phones: ["0636132102"] },
  { title: "Physiotherapy", practice: "Thabang Khoza", phones: ["0671231607"] },
  { title: "Clinical Psychologist", practice: "Monareng Psychology Practice", phones: ["0796675718"] },
  { title: "Counsellor", practice: "Botshelo Mosito", phones: ["0656105416", "0820732568"] },
];

const legalPages = {
  "/legal-notice": ["Legal Notice", "This website provides general information about Dr Mukudu & Partners and its services. Website information is not a substitute for an individual medical consultation, diagnosis or emergency care."],
  "/privacy-policy": ["Privacy Policy", "Dr Mukudu & Partners aims to process personal information in accordance with applicable South African data-protection requirements, including POPIA. Public website enquiries should not contain sensitive clinical information. Clinical information should only be submitted through approved patient or clinical systems."],
  "/terms-and-conditions": ["Terms and Conditions", "Use of this website and participation in subscription services are subject to the relevant service terms, eligibility requirements, payment arrangements and clinical policies communicated by the practice."],
  "/cancellation-and-refund-policy": ["Cancellation and Refund Policy", "Cancellation and refund eligibility depends on the service or subscription involved. Patients should contact the practice before a billing date or scheduled service where a cancellation is required."],
  "/service-fulfilment-policy": ["Service Fulfilment Policy", "Clinical services are fulfilled according to appointment availability, eligibility, clinical appropriateness and any programme-specific requirements. Subscription services begin according to the relevant application and payment process."],
  "/governing-law-and-jurisdiction": ["Governing Law and Jurisdiction", "This website and the practice’s South African services are governed by applicable South African law, subject to any mandatory rights or jurisdiction that may apply."],
  "/cookie-policy": ["Cookie Policy", "The website uses essential browser storage to remember privacy preferences. Optional Google Analytics is loaded only after consent and is used to understand broad website usage and improve the patient experience. Analytics is not configured for personalised advertising."],
};

function whatsappUrl(message = "Good day, Dr Mukudu & Partners. I would like to make an appointment enquiry.") {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function AppLink({ href, children, className = "", onClick, ...props }) {
  const external = /^https?:\/\//.test(href);
  function handleClick(event) {
    onClick?.(event);
    if (event.defaultPrevented || external || !href.startsWith("/")) return;
    event.preventDefault();
    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  return <a href={href} onClick={handleClick} className={className} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} {...props}>{children}</a>;
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function Seo({ pathname }) {
  React.useEffect(() => {
    const [title, description] = pageMeta[pathname] || ["Dr Mukudu & Partners", "Patient-centred primary healthcare in Johannesburg South."];
    document.title = title;
    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
        if (match) el.setAttribute(match[1], match[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", `${SITE_URL}${pathname}`);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${pathname}`;
  }, [pathname]);
  return null;
}

function Header({ pathname }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => setOpen(false), [pathname]);
  const nav = [
    ["About", "/about"],
    ["Services", "/services"],
    ["Free Male Circumcision", "/free-male-circumcision"],
    ["MedKulula", "/medkulula"],
    ["Price List", "/price-list"],
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <AppLink href="/" className="brand" aria-label="Dr Mukudu & Partners home">
          <img src={LOGO} alt="Dr Mukudu & Partners logo" />
          <span><strong>Dr Mukudu & Partners</strong><small>Optimising Health, Optimising Growth</small></span>
        </AppLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, href]) => {
            const active = href === "/services" ? pathname.startsWith("/services") : pathname === href;
            return <AppLink key={href} href={href} className={active ? "active" : ""}>{label}</AppLink>;
          })}
        </nav>
        <a className="header-cta" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a>
        <button className="menu-button" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu"><span className="sr-only">Open navigation</span><span /><span /></button>
      </div>
      {open && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
        {nav.map(([label, href]) => <AppLink key={href} href={href}>{label}<span>→</span></AppLink>)}
        <AppLink href="/contact">Contact<span>→</span></AppLink>
        <a href={PATIENT_APP} target="_blank" rel="noopener noreferrer">Patient App<span>↗</span></a>
      </nav>}
    </header>
  );
}

function Hero() {
  return <section className="home-hero">
    <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=82&w=2200&auto=format&fit=crop" alt="Modern clinical environment" className="hero-photo" />
    <div className="hero-overlay" />
    <div className="hero-content">
      <p className="eyebrow warm">Private medical practice · Tulisa Park</p>
      <h1>Modern primary healthcare in Johannesburg South.</h1>
      <p className="hero-copy">Discreet, patient-centred care with clear clinical plans, practical follow-up and digital access when it improves the patient experience.</p>
      <div className="hero-actions">
        <a className="button light" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Book via WhatsApp <Arrow /></a>
        <AppLink className="button ghost" href="/services">Explore services</AppLink>
      </div>
      <div className="hero-facts"><span>29 Landor Street</span><span>Tulisa Park</span><span>{DISPLAY_PHONE}</span></div>
    </div>
  </section>;
}

function PageHero({ eyebrow, title, intro, action }) {
  return <section className="page-hero">
    <div className="page-hero-inner">
      <p className="eyebrow">{eyebrow}</p>
      <h1 tabIndex="-1" data-page-heading>{title}</h1>
      {intro && <p>{intro}</p>}
      {action}
    </div>
  </section>;
}

function SectionTitle({ eyebrow, title, copy }) {
  return <div className="section-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

function HomePage() {
  return <>
    <Hero />
    <section className="trust-strip"><div><span>Primary care</span><span>Women’s health</span><span>Preventative care</span><span>Free VMMC</span><span>Patient app access</span></div></section>

    <section className="section clinical-experience">
      <div className="split-grid">
        <div className="content-panel">
          <SectionTitle eyebrow="Clinical experience" title="Care that feels organised from the moment you arrive." copy="The practice combines clinical expertise, clear communication and modern health technology without losing the human part of medicine." />
          <div className="numbered-list">
            <div><b>01</b><span><strong>Clear assessment</strong><small>Understand the concern, history and clinical context before deciding on next steps.</small></span></div>
            <div><b>02</b><span><strong>Personalised treatment</strong><small>Explain the plan clearly and shape it around the patient’s immediate and longer-term needs.</small></span></div>
            <div><b>03</b><span><strong>Continuity</strong><small>Support patients beyond a once-off visit with prevention, education and review where appropriate.</small></span></div>
          </div>
        </div>
        <div className="image-panel"><img src={serviceImages.clinical} alt="Clinical care at Dr Mukudu & Partners" loading="lazy" /></div>
      </div>
    </section>

    <section className="section light-section">
      <SectionTitle eyebrow="Clinical services" title="Focused services around real patient needs." copy="Start with the reason for your visit. Each pathway explains what we can help with and what to expect next." />
      <div className="service-grid">
        {services.map((service, index) => <article className="service-card" key={service.href}>
          <div className="service-image"><img src={service.image} alt="" loading="lazy" /></div>
          <div className="service-body"><span className="index">0{index + 1}</span><h3>{service.title}</h3><p>{service.summary}</p><AppLink href={service.href}>Find out more <span>→</span></AppLink></div>
        </article>)}
      </div>
    </section>

    <section className="section dark-section">
      <div className="dark-grid">
        <SectionTitle eyebrow="Preventative programme" title="Free medical male circumcision." copy="Free, confidential voluntary medical male circumcision for eligible clients aged 10 years and older, with counselling, clinical assessment, the procedure and follow-up care." />
        <div className="dark-actions"><AppLink className="button mint" href="/free-male-circumcision">View programme details</AppLink><a className="text-link" href="https://redcap.link/DRMUKUDU_FREE_CIRCUMCISION_BOOKING" target="_blank" rel="noopener noreferrer">Book free consultation ↗</a></div>
      </div>
    </section>

    <section className="section light-section">
      <SectionTitle eyebrow="Collaborative care" title="Connected support when your care needs more than one discipline." copy="Selected allied health professionals can support nutrition, movement, mental health and counselling needs." />
      <div className="collab-grid">{collaborators.map((item) => <article className="collab-card" key={item.title}><p>{item.title}</p><h3>{item.practice}</h3><div>{item.phones.map((phone) => <a key={phone} href={`tel:${phone}`}>{phone}</a>)}</div></article>)}</div>
    </section>

    <section className="section contact-band">
      <div><SectionTitle eyebrow="Appointments" title="Need to see the practice?" copy="Use WhatsApp for the fastest appointment enquiry, call the practice, or get directions to Tulisa Park." /></div>
      <div className="contact-actions"><a className="button dark" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Book via WhatsApp</a><a className="button outline" href={`tel:${PHONE}`}>Call {DISPLAY_PHONE}</a><a className="text-link dark-text" href={MAPS} target="_blank" rel="noopener noreferrer">Directions ↗</a></div>
    </section>

    <section className="subscription-mini">
      <div className="subscription-mini-inner">
        <div><p className="eyebrow">Optional subscription care</p><h2>MedKulula</h2><p>For patients who prefer predictable monthly access to primary healthcare. It remains available without taking focus away from the practice’s core clinical services.</p></div>
        <div className="mini-plans"><span><b>R300</b> Individual</span><span><b>R380</b> + Dependant</span><span><b>R200</b> Student</span></div>
        <AppLink className="text-link dark-text" href="/medkulula">View subscription options →</AppLink>
      </div>
    </section>
  </>;
}

function AboutPage() {
  return <>
    <PageHero eyebrow="About us" title="A modern medical practice built around continuity, clarity and patient-centred care." intro="Dr Mukudu & Partners combines primary care, clinical precision and appropriate health technology to support patients across everyday health needs and longer-term wellbeing." />
    <section className="section light-section"><div className="split-copy"><SectionTitle eyebrow="Our philosophy" title="Optimising Health, Optimising Growth." /><div className="prose"><p>Healthcare is delivered through a personalised approach that starts by listening carefully, understanding the clinical context and explaining the plan clearly.</p><p>The practice continues to refine its clinical knowledge and patient experience while using digital health tools where they genuinely improve access, continuity or accuracy.</p><p>Whether the visit is for prevention, a new concern or a chronic condition, the goal is to give patients a clear next step and reliable follow-up.</p></div></div></section>
    <section className="section dark-section"><div className="principle-grid"><article><span>01</span><h3>Clinical excellence</h3><p>Care guided by current standards, precision and continuous professional refinement.</p></article><article><span>02</span><h3>Modern practice</h3><p>Technology supports care where it improves access, diagnostics or continuity.</p></article><article><span>03</span><h3>Human continuity</h3><p>Patients are supported beyond a once-off treatment through education and follow-up.</p></article></div></section>
  </>;
}

function ServicesPage() {
  return <>
    <PageHero eyebrow="Medical services" title="Clinical care organised around the reason you came in." intro="Explore the practice’s core pathways, then contact the team with the service already identified so the next step is simpler." action={<a className="button mint hero-inline-action" href={whatsappUrl("I would like help choosing the right Dr Mukudu & Partners service for my appointment.")} target="_blank" rel="noopener noreferrer">Ask about a service</a>} />
    <section className="section light-section"><div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.href}><div className="service-image"><img src={service.image} alt="" /></div><div className="service-body"><span className="index">0{index + 1}</span><h2>{service.title}</h2><p>{service.summary}</p><AppLink href={service.href}>View service <span>→</span></AppLink></div></article>)}</div></section>
    <section className="section dark-section"><div className="dark-grid"><SectionTitle eyebrow="Free VMMC" title="Free male circumcision is a dedicated programme." copy="Eligible clients aged 10 years and older can review the programme separately and book using the dedicated form." /><AppLink className="button mint" href="/free-male-circumcision">Programme details</AppLink></div></section>
  </>;
}

function ServiceDetailPage({ detail }) {
  const message = `Good day, Dr Mukudu & Partners. I would like to arrange a consultation for ${detail.eyebrow}.`;
  return <>
    <PageHero eyebrow={detail.eyebrow} title={detail.title} intro={detail.intro} action={<a className="button mint hero-inline-action" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Arrange via WhatsApp</a>} />
    <section className="section light-section"><div className="service-detail-grid"><div className="detail-image"><img src={detail.image} alt={`${detail.eyebrow} at Dr Mukudu & Partners`} /></div><div><SectionTitle eyebrow="What this can include" title="A focused clinical visit with a clear next step." /><ul className="check-list">{detail.coverage.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="section muted-section"><SectionTitle eyebrow="Patient journey" title="What to expect." /><div className="journey-grid">{detail.journey.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
    <section className="section contact-band"><SectionTitle eyebrow="Appointments" title="Ready to arrange your consultation?" copy="Your WhatsApp message will already include the service you were viewing." /><a className="button dark" href={whatsappUrl(message)} target="_blank" rel="noopener noreferrer">Continue on WhatsApp</a></section>
  </>;
}

function CircumcisionPage() {
  return <>
    <PageHero eyebrow="Free preventative care programme" title="Free, confidential medical male circumcision." intro="Dr Mukudu & Partners offers voluntary medical male circumcision for eligible clients aged 10 years and older, including counselling, clinical assessment, procedure guidance and follow-up." action={<a className="button mint hero-inline-action" href="https://redcap.link/DRMUKUDU_FREE_CIRCUMCISION_BOOKING" target="_blank" rel="noopener noreferrer">Book your free consultation</a>} />
    <section className="section light-section"><div className="two-col"><SectionTitle eyebrow="Eligibility" title="A structured, confidential pathway." copy="The consultation confirms eligibility and gives you the opportunity to ask questions before any procedure is planned." /><ul className="check-list"><li>Programme intended for eligible clients aged 10 years and older</li><li>Clinical assessment before the procedure</li><li>Counselling and informed consent</li><li>Clear wound-care and recovery instructions</li><li>Follow-up after the procedure</li></ul></div></section>
    <section className="section muted-section"><SectionTitle eyebrow="What to expect" title="From booking to follow-up." /><div className="journey-grid"><article><span>01</span><p>Complete the booking form or contact the practice.</p></article><article><span>02</span><p>Attend counselling and clinical assessment.</p></article><article><span>03</span><p>If eligible, the procedure is completed with aftercare guidance.</p></article><article><span>04</span><p>Return for follow-up according to the care plan.</p></article></div><a className="button dark spaced-button" href="https://redcap.link/DRMUKUDU_FREE_CIRCUMCISION_BOOKING" target="_blank" rel="noopener noreferrer">Book your free consultation</a></section>
    <section className="section dark-section"><div className="faq-grid"><article><h3>Is it free?</h3><p>Yes. The practice’s VMMC programme is offered free of charge to eligible clients.</p></article><article><h3>How long should I allow?</h3><p>The procedure itself may be around 30 minutes, but counselling, assessment and aftercare instructions mean the overall visit can take longer.</p></article><article><h3>How do I start?</h3><p>Use the dedicated booking form. If you need help, WhatsApp the practice.</p></article></div></section>
  </>;
}

function MedKululaPage() {
  return <>
    <PageHero eyebrow="Optional subscription care" title="MedKulula subscription options." intro="A secondary care option for patients who prefer predictable monthly access to primary healthcare." />
    <section className="section light-section"><SectionTitle eyebrow="Plans" title="Choose the option that fits your household." /><div className="plan-table"><div className="plan-row plan-head"><span>Plan</span><span>Monthly</span><span>For</span><span>Apply</span></div>{plans.map((plan) => <div className="plan-row" key={plan.name}><strong>{plan.name}</strong><b>{plan.price}</b><span>{plan.audience}</span><a href={plan.href} target="_blank" rel="noopener noreferrer">Start / enquire ↗</a></div>)}</div></section>
    <section className="section muted-section"><div className="two-col"><SectionTitle eyebrow="What it is" title="Predictable access without replacing clinical judgement." copy="Subscription plans support routine access and continuity. Eligibility, specific benefits and clinically appropriate care still depend on the relevant service terms and individual needs." /><div className="support-box"><p>Need help with the application?</p><a href={`tel:${PHONE}`}>{DISPLAY_PHONE}</a><a href={whatsappUrl("I need help with a MedKulula application.")} target="_blank" rel="noopener noreferrer">WhatsApp application support ↗</a></div></div></section>
  </>;
}

function PricePage() {
  return <>
    <PageHero eyebrow="Pricing" title="Practice price list." intro="Published pricing for common services. Laboratory costs or additional services may apply where stated." />
    <section className="section light-section"><div className="price-list">{priceItems.map(([service, price]) => <div key={service}><span>{service}</span><strong>{price}</strong></div>)}</div><p className="price-note">Prices can change. Confirm the final fee with the practice before your visit, especially where laboratory or procedure-specific costs may apply.</p><div className="inline-actions"><a className="button dark" href={whatsappUrl("Good day. I would like to confirm the current price for a Dr Mukudu & Partners service.")} target="_blank" rel="noopener noreferrer">Confirm pricing on WhatsApp</a><a className="button outline" href={`tel:${PHONE}`}>Call practice</a></div></section>
    <section className="section subscription-mini"><div className="subscription-mini-inner"><div><p className="eyebrow">MedKulula</p><h2>Subscription pricing</h2></div><div className="mini-plans"><span><b>R300</b> Individual</span><span><b>R380</b> + Dependant</span><span><b>R200</b> Student</span></div><AppLink className="text-link dark-text" href="/medkulula">Plan details →</AppLink></div></section>
  </>;
}

function ContactPage() {
  return <>
    <PageHero eyebrow="Contact" title="Arrange your consultation or speak to the practice." intro="For the fastest appointment enquiry, use WhatsApp. You can also call the practice, get directions or access the patient app." />
    <section className="section light-section"><div className="contact-grid"><a href={`tel:${PHONE}`}><span>Call</span><strong>{DISPLAY_PHONE}</strong><small>General practice enquiries</small></a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer"><span>WhatsApp</span><strong>061 547 1346</strong><small>Appointments and service enquiries</small></a><a href={MAPS} target="_blank" rel="noopener noreferrer"><span>Visit</span><strong>29 Landor Street</strong><small>Tulisa Park, Johannesburg South, 2197</small></a><a href={PATIENT_APP} target="_blank" rel="noopener noreferrer"><span>Patient App</span><strong>Open patient access</strong><small>Existing digital patient services</small></a></div></section>
    <section className="section muted-section"><div className="two-col"><SectionTitle eyebrow="Before you contact us" title="A little context helps us direct you faster." copy="Tell the practice which service you are enquiring about and whether you are looking for a new appointment, follow-up or programme booking. Please do not send sensitive clinical information through the public website." /><div className="support-box warning"><p>Medical emergency?</p><strong>Do not use the website for emergency care.</strong><span>Use the appropriate emergency service or nearest emergency facility.</span></div></div></section>
  </>;
}

function LegalPage({ title, copy }) {
  return <><PageHero eyebrow="Practice information" title={title} /><section className="section light-section"><div className="legal-copy"><p>{copy}</p><p>For questions about this information, contact the practice using the details published on the Contact page.</p><AppLink href="/contact" className="text-link dark-text">Contact the practice →</AppLink></div></section></>;
}

function NotFoundPage() {
  return <><PageHero eyebrow="404" title="This page could not be found." intro="The address may be outdated. Use the main navigation or return to the homepage." /><section className="section light-section"><AppLink className="button dark" href="/">Return home</AppLink></section></>;
}

function Footer() {
  return <footer className="site-footer"><div className="footer-grid"><div className="footer-brand"><img src={LOGO} alt="Dr Mukudu & Partners logo" /><div><strong>Dr Mukudu & Partners</strong><p>Modern primary healthcare in Tulisa Park, Johannesburg South.</p></div></div><div><h3>Practice</h3><AppLink href="/about">About</AppLink><AppLink href="/services">Services</AppLink><AppLink href="/free-male-circumcision">Free Male Circumcision</AppLink><AppLink href="/price-list">Price List</AppLink></div><div><h3>Access</h3><AppLink href="/contact">Contact</AppLink><a href={PATIENT_APP} target="_blank" rel="noopener noreferrer">Patient App ↗</a><a href="https://teledoctorsa.co.za/" target="_blank" rel="noopener noreferrer">TeledoctorSA ↗</a><a href="https://www.instagram.com/drmukudu_andpartners/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></div><div><h3>Legal</h3><AppLink href="/privacy-policy">Privacy</AppLink><AppLink href="/cookie-policy">Cookies</AppLink><AppLink href="/terms-and-conditions">Terms</AppLink><AppLink href="/legal-notice">Legal Notice</AppLink></div></div><div className="footer-bottom"><span>{ADDRESS}</span><span>© {new Date().getFullYear()} Dr Mukudu & Partners</span></div></footer>;
}

function MobileActions() {
  return <nav className="mobile-actions" aria-label="Quick patient actions"><a href={`tel:${PHONE}`}>Call</a><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">WhatsApp</a><a href={PATIENT_APP} target="_blank" rel="noopener noreferrer">Patient App</a></nav>;
}

function CookieConsent() {
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const choice = localStorage.getItem("drmukudu_cookie_consent_v2");
    if (!choice) setVisible(true);
    if (choice === "accepted") loadAnalytics();
  }, []);
  function loadAnalytics() {
    if (window.__drMukuduAnalyticsLoaded) return;
    window.__drMukuduAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.gtag("config", "G-21WWHMKVBT", { anonymize_ip: true });
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-21WWHMKVBT";
    document.head.appendChild(script);
  }
  function choose(choice) {
    localStorage.setItem("drmukudu_cookie_consent_v2", choice);
    setVisible(false);
    if (choice === "accepted") loadAnalytics();
  }
  return <>{visible && <section className="cookie-banner" role="dialog" aria-label="Cookie preferences"><div><strong>Your privacy matters</strong><p>We use essential storage to remember this choice. Optional analytics helps us improve the website and loads only with your permission. <AppLink href="/cookie-policy">Cookie Policy</AppLink></p></div><div><button type="button" onClick={() => choose("rejected")}>Reject optional</button><button type="button" className="primary" onClick={() => choose("accepted")}>Accept analytics</button></div></section>}<button type="button" className="cookie-settings" onClick={() => setVisible(true)}>Cookie settings</button></>;
}

function getPage(pathname) {
  if (serviceDetails[pathname]) return <ServiceDetailPage detail={serviceDetails[pathname]} />;
  if (legalPages[pathname]) return <LegalPage title={legalPages[pathname][0]} copy={legalPages[pathname][1]} />;
  const routes = {
    "/": <HomePage />,
    "/about": <AboutPage />,
    "/services": <ServicesPage />,
    "/free-male-circumcision": <CircumcisionPage />,
    "/medkulula": <MedKululaPage />,
    "/price-list": <PricePage />,
    "/contact": <ContactPage />,
  };
  return routes[pathname] || <NotFoundPage />;
}

export default function ProductionSite() {
  const [pathname, setPathname] = React.useState(window.location.pathname.replace(/\/$/, "") || "/");
  React.useEffect(() => {
    const handle = () => setPathname(window.location.pathname.replace(/\/$/, "") || "/");
    window.addEventListener("popstate", handle);
    return () => window.removeEventListener("popstate", handle);
  }, []);
  React.useEffect(() => {
    window.requestAnimationFrame(() => {
      const heading = document.querySelector("[data-page-heading]");
      if (heading && pathname !== "/") heading.focus({ preventScroll: true });
    });
  }, [pathname]);
  return <>
    <Seo pathname={pathname} />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Header pathname={pathname} />
    <main id="main-content">{getPage(pathname)}</main>
    <Footer />
    <MobileActions />
    <CookieConsent />
  </>;
}
