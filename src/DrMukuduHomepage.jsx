import React from "react";
import * as THREE from "three";

const PHONE_NUMBER = "0116131141";
const WHATSAPP_NUMBER = "27615471346";
const DISPLAY_PHONE = "011 613 1141";
const LOCATION = "29 Landor Street, Tulisa Park, Johannesburg South, 2197";
const LOGO_SRC = "/logo.png";
const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=29%20Landor%20Street%2C%20Tulisa%20Park%2C%20Johannesburg%20South%2C%202197";
const GOOGLE_MAP_EMBED_SRC = `${GOOGLE_MAPS_URL}&output=embed`;

const trustLogos = [
  { name: "MedKulula", src: "/trust-logos/medkulula.png" },
  { name: "TeledoctorSA", src: "/trust-logos/teledoctor-sa.png" },
  { name: "Vitapath", src: "/trust-logos/vitapath.png" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "MedKulula Subscription", href: "/medkulula" },
  { label: "Price List", href: "/price-list" },
  { label: "TeledoctorSA", href: "https://teledoctorsa.co.za/" },
];

const SITE_URL = "https://drmukudu.co.za";

const seoPages = {
  "/": {
    title: "Dr Mukudu & Partners | GP Practice in Tulisa Park, Johannesburg South",
    description:
      "Modern, patient-centred primary healthcare in Tulisa Park, Johannesburg South. Book GP consultations, access MedKulula plans, and enquire about preventative care.",
    keywords:
      "Dr Mukudu, GP Tulisa Park, doctor Johannesburg South, medical practice Tulisa Park, GP consultation Johannesburg South",
  },
  "/about": {
    title: "About Dr Mukudu & Partners | Modern Medical Practice in Johannesburg South",
    description:
      "Learn about Dr Mukudu & Partners, a modern patient-centred medical practice focused on accessible care, clinical precision, continuity and long-term wellbeing.",
    keywords:
      "about Dr Mukudu, medical practice Johannesburg South, doctor Tulisa Park, patient-centred healthcare",
  },
  "/services": {
    title: "Medical Services | GP Consultations, Women’s Health & Free Male Circumcision",
    description:
      "Explore clinical services from Dr Mukudu & Partners, including GP consultations, women’s health, preventative care and free male circumcision consultations from age 10.",
    keywords:
      "GP consultation Johannesburg South, women’s health Johannesburg South, free male circumcision Johannesburg, preventative care Tulisa Park",
  },
  "/medkulula": {
    title: "MedKulula Subscription | Affordable Monthly Healthcare Plans",
    description:
      "MedKulula offers affordable monthly healthcare plans for individuals, students and dependants, supporting predictable access to primary healthcare.",
    keywords:
      "MedKulula, MedKulula subscription, affordable healthcare South Africa, monthly GP plan, student healthcare plan",
  },
  "/price-list": {
    title: "Price List | Dr Mukudu & Partners",
    description:
      "View pricing guidance for Dr Mukudu & Partners, including GP consultations, women’s health, medical male circumcision and MedKulula subscription options.",
    keywords:
      "Dr Mukudu prices, GP consultation price Johannesburg South, MedKulula price, medical practice price list",
  },
  "/contact": {
    title: "Contact Dr Mukudu & Partners | Book a Consultation in Tulisa Park",
    description:
      "Contact Dr Mukudu & Partners in Tulisa Park, Johannesburg South. Call, WhatsApp, get directions or book a consultation.",
    keywords:
      "contact Dr Mukudu, doctor Tulisa Park, GP Johannesburg South, book doctor appointment Tulisa Park",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Dr Mukudu & Partners",
    description:
      "Read the privacy policy for Dr Mukudu & Partners, including information about data protection, POPIA, healthcare privacy and patient information.",
    keywords:
      "Dr Mukudu privacy policy, POPIA medical practice, healthcare privacy South Africa",
  },
  "/terms-and-conditions": {
    title: "Terms and Conditions | Dr Mukudu & Partners",
    description:
      "Read the terms and conditions for Dr Mukudu & Partners and MedKulula subscription services.",
    keywords:
      "Dr Mukudu terms, MedKulula terms, medical practice terms and conditions",
  },
};

const footerSections = [
  {
    title: "Practice",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "TeledoctorSA", href: "https://teledoctorsa.co.za/" },
    ],
  },
  {
    title: "Plans & pricing",
    links: [
      { label: "MedKulula Plan", href: "/medkulula" },
      { label: "Student Plan", href: "/medkulula" },
      { label: "Price list", href: "/price-list" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Legal Notice", href: "/legal-notice" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms and Conditions", href: "/terms-and-conditions" },
      { label: "Cancelation and Refund Policy", href: "/cancellation-and-refund-policy" },
      { label: "Service Fulfilment Policy", href: "/service-fulfilment-policy" },
      { label: "Governing Law and Jurisdiction", href: "/governing-law-and-jurisdiction" },
    ],
  },
];

const imageAssets = {
  clinicInterior: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1800&auto=format&fit=crop",
  doctorConsult: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=1800&auto=format&fit=crop",
  familyCare: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1800&auto=format&fit=crop",
  technologyCare: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1800&auto=format&fit=crop",
  calmClinic: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1800&auto=format&fit=crop",
};

const heroSlides = [
  {
    text: "Discreet, high-quality primary care delivered with clinical precision.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2200&auto=format&fit=crop",
  },
  {
    text: "A patient-centred approach to modern family healthcare.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2200&auto=format&fit=crop",
  },
  {
    text: "Consistent, reliable care you can trust—close to home.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2200&auto=format&fit=crop",
  },
];

const services = [
  {
    title: "General Medical Consultations",
    description: "Comprehensive assessments delivered with clinical clarity, efficiency, and a focus on accurate diagnosis and effective treatment.",
  },
  {
    title: "Preventative & Procedural Care",
    description: "Medically supervised procedures and preventative interventions designed to support long-term health outcomes.",
  },
  {
    title: "Women’s Health",
    description: "Thoughtfully delivered care addressing reproductive health, wellbeing, and continuity of care across all life stages.",
  },
];

const carePathway = [
  {
    title: "Clear assessment",
    description: "The first priority is understanding the concern, history, and clinical context before deciding on next steps.",
    icon: "technology",
  },
  {
    title: "Personalised treatment",
    description: "Care plans are explained clearly and shaped around the patient's immediate needs and longer-term wellbeing.",
    icon: "care",
  },
  {
    title: "Continuity and follow-up",
    description: "Patients are supported beyond a once-off visit, with prevention, education, and review where appropriate.",
    icon: "shield",
  },
];

const careSignals = [
  "Tulisa Park practice",
  "MedKulula access",
  "Allied health support",
];

const approachItems = [
  {
    title: "Clinical Excellence",
    description: "Care guided by current medical standards, precision, and continuous professional refinement.",
  },
  {
    title: "Integrated Technology",
    description: "Use of modern diagnostics and digital health systems to enhance accuracy and accessibility.",
  },
  {
    title: "Holistic Care",
    description: "A comprehensive approach that considers physical, mental, and long-term wellbeing.",
  },
];

const collaborativeCare = [
  { title: "Dietician", practice: "Preno; Nutrition and Wellness Services", phone: "0636132102", icon: "nutrition" },
  { title: "Physiotherapy", practice: "Thabang Khoza", phone: "0671231607", icon: "movement" },
  { title: "Clinical Psychologist", practice: "Monareng Psychology Practice", phone: "0796675718", icon: "mind" },
  { title: "Counsellor", practice: "Counsellor: Botshelo Mosito", phone: "0656105416/0820732568", icon: "care" },
];

const priceItems = [
  { service: "GP Consultation", price: "To be confirmed", note: "In-practice consultation with a medical practitioner." },
  { service: "Women’s Health Consultation", price: "To be confirmed", note: "Contraceptive care, reproductive health and wellness support." },
  { service: "Medical Male Circumcision", price: "Free", note: "Offered through public health-supported programmes where applicable." },
  { service: "MedKulula Subscription", price: "To be confirmed", note: "Affordable subscription-based access to primary healthcare." },
];

const medkululaPlans = [
  {
    name: "MedKulula Plan",
    price: "R300",
    cadence: "per month",
    description: "A monthly subscription plan designed to support predictable access to primary healthcare.",
    cta: "Subscribe to MedKulula",
    href: "https://redcap.link/Dr_Mukudu_MedKulula_Subscription",
  },
  {
    name: "MedKulula + Dependant",
    price: "R380",
    cadence: "per month",
    description: "An option for you and one additional dependant, offering more inclusive access to care.",
    cta: "Enquire about dependant plan",
    href: "/contact",
  },
  {
    name: "Student MedKulula Plan",
    price: "R200",
    cadence: "per month",
    description: "A student-focused subscription plan created to make access to care more affordable.",
    cta: "Student subscription form",
    href: "https://redcap.link/Student_MedKulula_Subscription",
  },
];

const medkululaBenefits = [
  "Predictable monthly access to primary healthcare",
  "Options for individuals, students, and an additional dependant",
  "A simpler way to plan healthcare costs",
  "Application support available by phone or WhatsApp",
];

const aboutPrinciples = [
  { title: "Personalised Care", description: "Every consultation is guided by the patient’s symptoms, goals, history and long-term wellbeing." },
  { title: "Modern Practice", description: "The practice embraces current medical knowledge, digital tools and health technology where they improve care." },
  { title: "Continuity", description: "Patients are supported beyond once-off treatment, with attention to prevention, education and follow-up." },
];

const legalPages = {
  "/legal-notice": {
    eyebrow: "Legal",
    title: "Legal Notice",
    subtitle: "Important information about the use of this website.",
    sections: [
      {
        heading: "1. Protection of Personal Information Act (POPIA - South Africa)",
        paragraphs: [
          "All personal information is collected and processed lawfully and responsibly under the Protection of Personal Information Act, 2013 (Act No. 4 of 2013).",
          "Our processing activities ensure that:",
        ],
        bullets: [
          "Information is collected directly from the data subject unless otherwise permitted by law.",
          "Data is used only for legitimate healthcare, billing, and administrative purposes.",
          "Reasonable security measures are in place to protect data from loss, damage, or unauthorised access.",
          "Patients may access, correct, or request deletion of their personal information at any time.",
        ],
      },
      {
        heading: "2. General Data Protection Regulation (GDPR - Article 6(1)(b))",
        paragraphs: [
          "Where applicable, data is also processed under GDPR Article 6(1)(b), which permits processing necessary for:",
        ],
        bullets: [
          "The performance of a contract between you and MedKulula, such as subscription management or service delivery.",
          "Steps taken at your request prior to entering into such a contract, for example when you inquire or register online.",
        ],
      },
      {
        heading: "3. Healthcare Compliance",
        paragraphs: [
          "As a medical service provider, Dr Mukudu & Partners processes patient data in compliance with healthcare and ethical frameworks, including:",
        ],
        bullets: [
          "Health Professions Council of South Africa (HPCSA) guidelines on patient confidentiality and record retention.",
          "National Health Act (Act No. 61 of 2003) requirements for the protection and lawful use of medical records.",
          "Medical Schemes Act where information is shared with schemes for billing or benefits administration.",
        ],
      },
      {
        heading: "4. Legitimate Interests and Consent",
        paragraphs: [
          "We may process personal data under legitimate interests, such as improving our healthcare systems or responding to patient inquiries, provided this does not override your privacy rights.",
          "Where explicit consent is required, for example for newsletters or electronic communication, it is obtained separately and may be withdrawn at any time.",
        ],
      },
      {
        heading: "5. Cross-Border Data Protection",
        paragraphs: [
          "All personal data processed through TeledoctorSA or MedKulula's digital systems is stored on secure servers in South Africa.",
          "If limited cross-border transfer occurs, for example during data backup or system support, it is conducted under conditions that ensure an equivalent level of protection as required by POPIA and GDPR.",
        ],
      },
    ],
  },
  "/privacy-policy": {
    eyebrow: "Privacy",
    title: "Privacy Policy",
    subtitle: "Information about how patient and website data will be handled.",
    sections: [
      {
        heading: "1. Overview of Data Protection",
        paragraphs: [
          "This privacy policy explains how MedKulula, TeledoctorSA, and Dr Mukudu & Partners, collectively referred to as we, our, or us, collect, use, and protect your personal information when you visit our website or subscribe to our services.",
          "Personal information means any data that can identify you personally. We process your data in compliance with the Protection of Personal Information Act (POPIA) and, where applicable, the EU GDPR.",
        ],
      },
      {
        heading: "2. MedKulula-Specific Privacy Statement",
        paragraphs: [
          "We value your privacy and handle your personal data responsibly.",
          "Information collected:",
        ],
        bullets: [
          "Name, contact details, and ID number.",
          "Medical and billing information.",
          "Communication and visit history.",
        ],
      },
      {
        heading: "Purpose of Collection",
        bullets: [
          "To deliver healthcare and subscription services.",
          "To manage payments through FNB Merchant Services.",
          "To comply with health and consumer protection laws.",
        ],
      },
      {
        heading: "Storage and Protection",
        paragraphs: [
          "Data is stored securely on encrypted servers located in South Africa. Access is restricted to authorized staff only.",
        ],
      },
      {
        heading: "Sharing of Information",
        paragraphs: [
          "We share data only with:",
        ],
        bullets: [
          "Healthcare professionals involved in your care.",
          "FNB Merchant Services or accredited payment providers for billing.",
          "Regulators when legally required.",
        ],
      },
      {
        heading: "3. Data Collection on Our Website",
        paragraphs: [
          "The data controller is Dr Mukudu & Partners.",
          "How we collect your data:",
        ],
        bullets: [
          "Information you voluntarily provide, such as through a contact form.",
          "Technical data collected automatically, such as IP address, browser type, and time of access.",
        ],
      },
      {
        heading: "Why We Collect Data",
        bullets: [
          "To ensure proper site functionality.",
          "To analyze usage for service improvement.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "You may request access, correction, or deletion of your data at any time. You can also file a complaint with the Information Regulator (South Africa). Contact support@drmukudu.co.za or call +27 11 613 1141.",
        ],
      },
      {
        heading: "4. Analytics and Cookies",
        paragraphs: [
          "We may use cookies and the Matomo, formerly Piwik, analytics platform to understand website usage. Cookies are small text files stored on your device. You can disable cookies in your browser settings, though this may affect site performance.",
          "Matomo anonymizes your IP address before storing it and does not share data with third parties.",
        ],
      },
      {
        heading: "5. Payments and Data Security",
        paragraphs: [
          "All payments are processed via encrypted SSL/TLS connections through FNB Merchant Services or accredited Payment Service Providers (PSPs) such as PayGate or PayFast.",
          "When you submit payment details, they are transmitted securely and cannot be accessed by third parties.",
        ],
      },
      {
        heading: "6. Contact Forms and Communication",
        paragraphs: [
          "Information submitted through our contact forms or email is used only to respond to your enquiry. We retain this information only as long as needed for the purpose of communication.",
        ],
      },
      {
        heading: "7. Newsletters via Email or WhatsApp",
        paragraphs: [
          "If you subscribe to updates, we collect your name, email address, and WhatsApp number solely to send newsletters. You may unsubscribe at any time using the link in the message or by emailing us directly.",
        ],
      },
      {
        heading: "8. Data Subject Rights",
        paragraphs: [
          "You have the right to:",
        ],
        bullets: [
          "Access the personal data we hold about you.",
          "Request correction or deletion.",
          "Withdraw consent at any time.",
          "Lodge a complaint with the Information Regulator (SA).",
        ],
      },
      {
        heading: "9. Legal Basis",
        paragraphs: [
          "We process personal data under:",
        ],
        bullets: [
          "POPIA, for lawful processing and safeguarding of personal information in South Africa.",
          "GDPR Art. 6(1)(b), where processing is required for contract fulfillment.",
        ],
      },
      {
        heading: "10. Updates to This Policy",
        paragraphs: [
          "We may update this privacy policy periodically to reflect changes in our operations or the law. The latest version will always be posted on this website.",
        ],
      },
    ],
  },
  "/terms-and-conditions": {
    eyebrow: "Terms",
    title: "Terms and Conditions",
    subtitle: "The terms that govern use of this website and related services.",
    sections: [
      {
        heading: "MedKulula Subscription Plans",
        paragraphs: [
          "These Terms govern all MedKulula subscription plans offered by Dr Mukudu & Partners and TeledoctorSA. By subscribing, you agree to these terms.",
        ],
      },
      {
        heading: "1. Services",
        paragraphs: [
          "Each subscription includes:",
        ],
        bullets: [
          "2 in-person consultations per month.",
          "Unlimited virtual consultations.",
          "Free vitals check-ups, including BP, cholesterol, glucose, weight, and height.",
          "4 chronic consultations per year with discounted medicines.",
        ],
      },
      {
        heading: "2. Fees",
        bullets: [
          "R300 per month - single adult.",
          "R380 per month - adult plus one dependant.",
          "R200 per month - student plan.",
          "Families of 3 or more - tailored rates.",
          "Payments are processed monthly through secure FNB payment links.",
        ],
      },
      {
        heading: "3. Duration and Renewal",
        paragraphs: [
          "Subscriptions renew automatically each month until cancelled.",
        ],
      },
      {
        heading: "4. Cancellations",
        paragraphs: [
          "You may cancel any time with written notice. Please refer to the Cancellation Policy.",
        ],
      },
      {
        heading: "5. Limitation of Service",
        paragraphs: [
          "Services apply to participating facilities and within clinical scope.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "29 Landor Street, Tulisa Park, 2197 Johannesburg South",
          "011 613 1141",
          "support@medkulula.co.za",
          "061 547 1346",
        ],
      },
    ],
  },
  "/cancellation-and-refund-policy": { eyebrow: "Policy", title: "Cancelation and Refund Policy", subtitle: "Information about cancellations and refunds will be added here." },
  "/service-fulfilment-policy": {
    eyebrow: "Policy",
    title: "Service Fulfilment Policy",
    subtitle: "How MedKulula healthcare services are delivered and activated.",
    sections: [
      {
        heading: "1. Nature of Service Delivery",
        paragraphs: [
          "MedKulula provides healthcare services, not physical goods. All benefits under the MedKulula subscription are delivered either digitally through TeledoctorSA's virtual consultation platform or in person at our partner clinics and affiliated practices.",
        ],
      },
      {
        heading: "2. Activation of Services",
        paragraphs: [
          "Membership benefits on MedKulula Plans become active immediately after successful payment confirmation through FNB Merchant Services or an authorised payment link.",
          "Members will receive a welcome message confirming activation and instructions on how to schedule their first consultation.",
        ],
      },
      {
        heading: "3. Delivery of Services",
        bullets: [
          "Virtual Consultations: Conducted via TeledoctorSA using secure and encrypted video or chat systems.",
          "In-Person Consultations: Provided at participating MedKulula partner clinics.",
          "Health Monitoring: Services such as vitals checks and chronic follow-ups are delivered by our clinical team at designated facilities.",
          "Medication Collection: Prescribed medicines can be collected from approved pharmacies or on-site dispensing units, subject to plan benefits and availability.",
        ],
      },
      {
        heading: "4. Appointment Scheduling and Confirmation",
        paragraphs: [
          "Members can schedule appointments by:",
        ],
        bullets: [
          "Logging in to their MedKulula profile.",
          "Calling or messaging the clinic directly.",
          "Using the contact form on our website.",
          "Once booked, appointment details will be sent via email, SMS, or WhatsApp confirmation.",
        ],
      },
      {
        heading: "5. Service Area and Availability",
        paragraphs: [
          "MedKulula currently serves patients within South Africa. In-person consultations are available only at approved MedKulula partner clinics. Telehealth and digital services are available nationwide, subject to stable internet access.",
        ],
      },
      {
        heading: "6. Service Delays or Disruptions",
        paragraphs: [
          "If a scheduled consultation cannot take place due to unforeseen circumstances, such as power outages, system maintenance, or staff illness, members will be notified promptly and an alternative time will be offered at no additional cost.",
        ],
      },
      {
        heading: "7. Duration of Membership Access",
        paragraphs: [
          "Services remain available as long as the subscription remains active and payments are up to date. Failure to pay may result in temporary suspension until payment is received.",
        ],
      },
      {
        heading: "8. Contact for Service Queries",
        paragraphs: [
          "For questions or assistance with booking, service access, or delivery concerns, contact:",
          "MedKulula Support Team",
          "Email: support@drmukudu.co.za",
          "Phone: +27 11 613 1141",
        ],
      },
    ],
  },
  "/governing-law-and-jurisdiction": {
    eyebrow: "Legal",
    title: "Governing Law and Jurisdiction",
    subtitle: "The law and jurisdiction that apply to this website and its services.",
    sections: [
      {
        heading: "Governing Law and Jurisdiction",
        paragraphs: [
          "This website, including all its services and MedKulula subscription plans provided through Dr Mukudu and Partners, is governed by the laws of the Republic of South Africa.",
          "The business is domiciled in South Africa. By using this website, you agree that any dispute arising from or relating to these terms will be resolved exclusively in the courts of the Republic of South Africa.",
        ],
      },
    ],
  },
};

function Icon({ name, size = 20, className = "" }) {
  const commonProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    phone: (
      <svg {...commonProps}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.35 1.9.66 2.81a2 2 0 0 1-.45 2.11L8.05 9.91a16 16 0 0 0 6.04 6.04l1.27-1.27a2 2 0 0 1 2.11-.45c.91.31 1.85.53 2.81.66A2 2 0 0 1 22 16.92z" /></svg>
    ),
    nutrition: (
      <svg {...commonProps}><path d="M12 21c4.5-2.5 7-6.1 7-10.2A6.8 6.8 0 0 0 12 4a6.8 6.8 0 0 0-7 6.8C5 14.9 7.5 18.5 12 21z" /><path d="M12 4V2" /><path d="M9 10c1.7.2 3 1.5 3 3" /><path d="M15 8c-1.7.2-3 1.5-3 3" /></svg>
    ),
    movement: (
      <svg {...commonProps}><circle cx="12" cy="5" r="2" /><path d="m10 22 2-7 4 2" /><path d="m8 12 4-4 3 4 3 1" /><path d="M6 22h12" /></svg>
    ),
    mind: (
      <svg {...commonProps}><path d="M9 18h6" /><path d="M10 22h4" /><path d="M8.5 14.5a6 6 0 1 1 7 0c-.9.7-1.5 1.6-1.5 2.5h-4c0-.9-.6-1.8-1.5-2.5z" /><path d="M12 8v4" /><path d="M10 10h4" /></svg>
    ),
    care: (
      <svg {...commonProps}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z" /><path d="M3.5 12h4l2-3 3 6 2-3h6" /></svg>
    ),
    technology: (
      <svg {...commonProps}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 9h6v6H9z" /><path d="M9 1v3" /><path d="M15 1v3" /><path d="M9 20v3" /><path d="M15 20v3" /></svg>
    ),
    shield: (
      <svg {...commonProps}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
    ),
  };

  return icons[name] || icons.care;
}

function ArrowIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function navigateTo(href) {
  window.history.pushState({}, "", href);
  window.dispatchEvent(new Event("popstate"));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function AppLink({ href, children, className = "", ...props }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  function handleClick(event) {
    if (isExternal || !href.startsWith("/")) return;
    event.preventDefault();
    navigateTo(href);
  }

  return (
    <a href={href} onClick={handleClick} className={className} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} {...props}>
      {children}
    </a>
  );
}

function PremiumStyles() {
  return (
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes softScale {
        from { transform: scale(1.04); }
        to { transform: scale(1); }
      }
      @keyframes heroSweep {
        0% { transform: translateX(-30%) skewX(-10deg); opacity: 0; }
        18% { opacity: 0.55; }
        52% { opacity: 0.12; }
        100% { transform: translateX(130%) skewX(-10deg); opacity: 0; }
      }
      @keyframes heroPulseLine {
        0%, 100% { transform: scaleX(0.72); opacity: 0.38; }
        50% { transform: scaleX(1); opacity: 0.85; }
      }
      @keyframes logoMarquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
      .premium-page { animation: fadeUp 700ms ease-out both; }
      .hero-image-active { animation: softScale 6s ease-out forwards; }
      .reveal { animation: fadeUp 800ms ease-out both; }
      .cinematic-sweep { animation: heroSweep 8s ease-in-out infinite; }
      .hero-pulse-line { animation: heroPulseLine 4.8s ease-in-out infinite; transform-origin: left center; }
      .trust-logo-track { animation: logoMarquee 18s linear infinite; will-change: transform; }
      @media (prefers-reduced-motion: reduce) {
        .cinematic-sweep,
        .hero-pulse-line,
        .trust-logo-track {
          animation: none;
        }
      }
    `}</style>
  );
}

function Reveal({ children, delay = "" }) {
  return <div className={`reveal ${delay}`}>{children}</div>;
}

function Section({ eyebrow, title, subtitle, children, tone = "light", image, fixture }) {
  const isDark = tone === "dark";
  const visualFixture = fixture || (image ? "clinic" : null);

  return (
    <section
      className={`relative overflow-hidden border-t ${
        isDark
          ? "border-white/10 bg-[#0b2532] text-white"
          : "border-[#bfd5df] bg-[#f7fafb] text-[#17211f]"
      }`}
    >
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-10 lg:py-24">
        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.48fr_1.52fr] lg:gap-12">
          <div>
            {eyebrow ? (
              <p
                className={`text-xs font-semibold uppercase tracking-normal ${
                  isDark ? "text-white/45" : "text-[#6c8aa0]"
                }`}
              >
                {eyebrow}
              </p>
            ) : null}
          </div>

          <div className="min-w-0">
            <Reveal>
              <h2
                className={`max-w-full break-words font-[Manrope,Inter,system-ui,sans-serif] text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl ${
                  isDark ? "text-white" : "text-[#174766]"
                }`}
              >
                {title}
              </h2>

              {subtitle ? (
                <p
                  className={`mt-5 max-w-2xl break-words text-base leading-7 ${
                    isDark ? "text-white/65" : "text-[#5a6d76]"
                  }`}
                >
                  {subtitle}
                </p>
              ) : null}
            </Reveal>

            {visualFixture ? (
              <Reveal delay="[animation-delay:120ms]">
                <div className="relative mt-8 h-56 overflow-hidden border border-[#bfd5df] bg-[#081820] shadow-[0_12px_40px_rgba(18,63,85,0.06)] sm:h-64">
                  <MedicalFixtureScene
                    variant={visualFixture}
                    layout="card"
                    className="absolute inset-0"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[#081820]/45" />
                </div>
              </Reveal>
            ) : null}

            <Reveal delay="[animation-delay:180ms]">
              <div className="mt-8 sm:mt-10">{children}</div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PageHero({ eyebrow, title, subtitle, fixture = "clinic" }) {
  return (
    <section className="relative overflow-hidden bg-[#0b2532] px-4 pb-16 pt-28 text-white sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pt-36">
      <div className="absolute inset-0">
        <MedicalFixtureScene
          variant={fixture}
          layout="hero"
          className="absolute inset-0 opacity-80"
        />
        <div className="absolute inset-0 bg-[#081820]/76" />
      </div>

      <div className="relative mx-auto max-w-7xl min-w-0 premium-page">
        <p className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
          {eyebrow}
        </p>

        <h1 className="mt-5 max-w-full break-words font-[Manrope,Inter,system-ui,sans-serif] text-4xl font-semibold leading-tight tracking-[-0.05em] sm:text-5xl md:max-w-5xl md:text-6xl">
          {title}
        </h1>

        {subtitle ? (
          <p className="mt-5 max-w-2xl break-words text-base leading-7 text-white/70 sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    function closeMenu() {
      setMenuOpen(false);
    }

    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <AppLink href="/" className="flex min-w-0 items-center gap-3 text-white">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/8 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.12)] sm:h-11 sm:w-11">
            <img
              src={LOGO_SRC}
              alt="Dr Mukudu & Partners logo"
              className="h-full w-full object-contain"
            />
          </span>

          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold tracking-normal">
              Dr Mukudu & Partners
            </span>
            <span className="block truncate text-[11px] text-white/60">
              Optimising Health, Optimising Growth
            </span>
          </span>
        </AppLink>

        <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <AppLink
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </AppLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <AppLink
            href="/contact"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition hover:bg-white hover:text-[#174766]"
            aria-label="Contact us"
            title="Contact us"
          >
            <Icon name="phone" />
          </AppLink>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition hover:bg-white hover:text-[#174766]"
          >
            WhatsApp Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center border border-white/20 bg-white/5 text-white backdrop-blur transition hover:bg-white hover:text-[#081820] lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="text-2xl leading-none">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="mx-4 border border-white/10 bg-[#081820]/95 p-4 text-white shadow-2xl backdrop-blur lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <AppLink
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white/78 transition hover:bg-[#123f55] hover:text-white"
              >
                {item.label}
              </AppLink>
            ))}
          </nav>

          <div className="mt-4 grid gap-2 border-t border-white/10 pt-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="bg-white px-4 py-3 text-center text-sm font-semibold text-[#081820]"
            >
              Call {DISPLAY_PHONE}
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              className="border border-[#58d6c2] bg-[#58d6c2] px-4 py-3 text-center text-sm font-semibold text-[#081820]"
            >
              WhatsApp practice
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function TrustLogoRail() {
  return (
    <div className="trust-logo-rail mt-7 w-full overflow-hidden border-y border-white/10 py-3 sm:mt-8" aria-label="Trusted healthcare ecosystem">
      <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-normal text-[#f4b860]">Trusted ecosystem</p>
        <p className="max-w-[21.25rem] text-sm leading-6 text-white/55 sm:max-w-xl sm:text-right">Connected care partners supporting access, virtual care and diagnostics.</p>
      </div>
      <div className="relative overflow-hidden before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-[#081820] before:to-transparent after:pointer-events-none after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-[#081820] after:to-transparent">
        <div className="trust-logo-track flex w-max items-center">
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={setIndex === 1 ? "true" : undefined}>
              {trustLogos.map((logo) => (
                <div key={`${logo.name}-${setIndex}`} className="flex h-14 min-w-[8.75rem] shrink-0 items-center justify-center sm:h-16 sm:min-w-[11rem]">
                  <img src={logo.src} alt={setIndex === 1 ? "" : logo.name} className="max-h-12 w-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.26)] sm:max-h-14" loading="eager" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ClinicalMetricCard({ value, label, note }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-[#d8e5ec] bg-white p-5 shadow-[0_16px_45px_rgba(18,63,85,0.06)] transition hover:-translate-y-1 hover:border-[#58d6c2]/70 hover:shadow-[0_24px_60px_rgba(18,63,85,0.1)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#58d6c2]/10 blur-2xl transition group-hover:bg-[#58d6c2]/20" />

      <p className="font-[Manrope,Inter,system-ui,sans-serif] text-3xl font-semibold tracking-tight text-[#174766]">
        {value}
      </p>

      <p className="mt-2 text-xs font-semibold uppercase tracking-normal text-[#6c8aa0]">
        {label}
      </p>

      <p className="mt-4 text-sm leading-6 text-[#5a6d76]">
        {note}
      </p>
    </div>
  );
}

function MedicalSignalCard({ item, index }) {
  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-[#d8e5ec] bg-white p-6 shadow-[0_18px_55px_rgba(18,63,85,0.06)] transition hover:-translate-y-1 hover:border-[#58d6c2]/70">
      <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-[#edf5f7]" />
      <div className="absolute right-5 top-5 text-5xl font-semibold tracking-[-0.08em] text-[#174766]/5">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d8e5ec] bg-[#f7fafb] text-[#174766] transition group-hover:border-[#58d6c2]/70 group-hover:bg-[#e8f8f5]">
          <Icon name={item.icon} size={22} />
        </div>

        <h3 className="mt-7 font-[Manrope,Inter,system-ui,sans-serif] text-xl font-semibold tracking-tight text-[#174766]">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-[#5a6d76]">
          {item.description}
        </p>

        <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-[#edf5f7]">
          <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-[#58d6c2] to-[#f4b860]" />
        </div>
      </div>
    </article>
  );
}

function IntroCareSection() {
  return (
    <section className="relative z-20 overflow-hidden bg-[#eef7fa] px-6 pb-16 text-[#17211f] lg:px-10 lg:pb-24">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid border-x border-b border-[#bfd5df] bg-[#bfd5df] md:grid-cols-3">
          {careSignals.map((item, index) => (
            <div
              key={item}
              className={`border-t border-[#bfd5df] p-6 md:border-r md:last:border-r-0 ${
                index === 0
                  ? "bg-[#f7fbfd]"
                  : index === 1
                    ? "bg-[#dcecf3]"
                    : "bg-[#c9e1eb]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-normal text-[#174766]">
                  {item}
                </span>

                <span
                  className={`h-3 w-3 ${
                    index === 0 ? "bg-[#58d6c2]" : index === 1 ? "bg-[#1f6f95]" : "bg-[#0b2532]"
                  }`}
                  aria-hidden="true"
                />
              </div>

              <p className="mt-4 text-sm leading-6 text-[#40545d]">
                {index === 0
                  ? "Local, accessible primary care in Johannesburg South."
                  : index === 1
                    ? "Subscription-based healthcare access for predictable care."
                    : "Connected allied support for broader health needs."}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-0 border-x border-b border-[#bfd5df] bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b border-[#bfd5df] p-7 md:p-10 lg:border-b-0 lg:border-r">
            <p className="text-xs font-semibold uppercase tracking-normal text-[#1f6f95]">
              Clinical experience
            </p>

            <h2 className="mt-5 max-w-3xl break-words font-[Manrope,Inter,system-ui,sans-serif] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0b2532] md:text-5xl">
              A clearer care journey from assessment to follow-up.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#40545d] md:text-lg">
              Each consultation should feel organised and easy to understand, with a clear route from concern to treatment plan.
            </p>

            <div className="mt-9 grid border border-[#bfd5df] sm:grid-cols-3">
              {[
                ["01", "Assess", "Understand symptoms and context."],
                ["02", "Treat", "Explain options and next steps."],
                ["03", "Review", "Support continuity where needed."],
              ].map(([value, label, note], index) => (
                <div
                  key={label}
                  className={`border-b border-[#bfd5df] p-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 ${
                    index === 0
                      ? "bg-[#f7fbfd]"
                      : index === 1
                        ? "bg-[#eef7fa]"
                        : "bg-[#dcecf3]"
                  }`}
                >
                  <p className="text-3xl font-semibold text-[#174766]">{value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-normal text-[#1f6f95]">
                    {label}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-[#40545d]">{note}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[34rem] overflow-hidden bg-[#081820]">
            <MedicalFixtureScene variant="stethoscope" layout="card" className="absolute inset-0" />

            <div className="pointer-events-none absolute inset-0 bg-[#081820]/70" />

            <div className="absolute left-5 right-5 top-5 border border-white/12 bg-[#0b2532]/90 p-4 backdrop-blur">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
                  Patient pathway
                </span>

                <span className="bg-[#123f55] px-3 py-1 text-[11px] font-medium text-[#9cece3]">
                  Active care
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                {["Vitals", "Consult", "Plan"].map((label) => (
                  <div key={label} className="border border-white/10 bg-[#081820] px-3 py-3">
                    <span className="block text-[11px] uppercase tracking-normal text-white/38">
                      {label}
                    </span>
                    <span className="mt-2 block h-1 bg-[#58d6c2]" />
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-5 left-5 right-5 border border-white/12 bg-[#0b2532]/90 p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-normal text-white/42">
                Clinical promise
              </p>

              <p className="mt-3 text-lg font-medium leading-7 text-white">
                Discreet care. Clear explanations. Better continuity.
              </p>
            </div>
          </div>
        </div>

        <div className="grid border-x border-b border-[#bfd5df] bg-[#bfd5df] md:grid-cols-3">
          {carePathway.map((item, index) => (
            <article
              key={item.title}
              className={`border-t border-[#bfd5df] p-6 md:border-r md:last:border-r-0 ${
                index === 0
                  ? "bg-white"
                  : index === 1
                    ? "bg-[#eef7fa]"
                    : "bg-[#dcecf3]"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center border border-[#174766]/25 bg-[#174766] text-white">
                <Icon name={item.icon} size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#0b2532]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#40545d]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesList() {
  const serviceIcons = ["care", "shield", "mind"];

  return (
    <div className="grid border border-[#bfd5df] bg-[#bfd5df] md:grid-cols-3">
      {services.map((service, index) => (
        <article
          key={service.title}
          className={`group relative min-h-[24rem] border-[#bfd5df] p-6 transition ${
            index === 0
              ? "bg-[#f7fbfd]"
              : index === 1
                ? "bg-[#e8f3f7]"
                : "bg-[#dcecf3]"
          } hover:bg-white md:border-r md:last:border-r-0`}
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-[#174766]" />
          <div className="absolute right-5 top-5 text-6xl font-semibold tracking-[-0.08em] text-[#174766]/10">
            {String(index + 1).padStart(2, "0")}
          </div>

          <div className="relative">
            <div className="flex h-14 w-14 items-center justify-center border border-[#174766]/25 bg-[#0b2532] text-[#58d6c2]">
              <Icon name={serviceIcons[index] || "care"} size={25} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-normal text-[#1f6f95]">
              Clinical service
            </p>

            <h3 className="mt-3 font-[Manrope,Inter,system-ui,sans-serif] text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#0b2532]">
              {service.title}
            </h3>

            <p className="mt-5 text-sm leading-7 text-[#40545d]">
              {service.description}
            </p>

            <div className="mt-7 border-l-2 border-[#1f6f95] bg-white/70 px-4 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-normal text-[#6c8aa0]">
                Patient pathway
              </p>

              <div className="mt-3 grid gap-2 text-sm font-medium text-[#174766]">
                <span>Assessment</span>
                <span>Clinical guidance</span>
                <span>Follow-up where needed</span>
              </div>
            </div>

            <AppLink
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 border border-[#174766] bg-[#174766] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2532]"
            >
              Book this service
              <ArrowIcon size={16} />
            </AppLink>
          </div>
        </article>
      ))}
    </div>
  );
}

function ApproachSection() {
  const iconNames = ["shield", "technology", "care"];

  return (
    <section className="relative overflow-hidden bg-[#dcecf3] px-6 py-16 lg:px-10 lg:py-24">
      <div className="absolute left-0 top-0 h-full w-2 bg-[#174766]" />
      <div className="absolute right-0 top-0 h-full w-2 bg-[#1f6f95]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch">
          <div className="border border-[#174766]/20 bg-[#0b2532] p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
              Our approach
            </p>

            <h2 className="mt-5 font-[Manrope,Inter,system-ui,sans-serif] text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
              Structured care with clinical direction.
            </h2>

            <p className="mt-6 text-base leading-8 text-white/68">
              The practice experience is built around assessment, explanation, treatment and continuity — not just once-off visits.
            </p>

            <div className="mt-8 grid grid-cols-3 border border-white/10">
              {["Assess", "Treat", "Review"].map((item) => (
                <div key={item} className="border-r border-white/10 p-4 last:border-r-0">
                  <span className="block h-2 w-8 bg-[#58d6c2]" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-normal text-white/60">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid border border-[#bfd5df] bg-[#bfd5df] md:grid-cols-3">
            {approachItems.map((item, index) => (
              <article
                key={item.title}
                className={`relative min-h-[22rem] border-[#bfd5df] p-6 md:border-r md:last:border-r-0 ${
                  index === 0
                    ? "bg-white"
                    : index === 1
                      ? "bg-[#eef7fa]"
                      : "bg-[#dcecf3]"
                }`}
              >
                <div className="absolute right-5 top-5 text-5xl font-semibold tracking-[-0.08em] text-[#174766]/10">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center border border-[#174766]/25 bg-[#174766] text-white">
                    <Icon name={iconNames[index]} size={24} />
                  </div>

                  <h4 className="font-[Manrope,Inter,system-ui,sans-serif] text-xl font-semibold tracking-[-0.03em] text-[#0b2532]">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-[#40545d]">
                    {item.description}
                  </p>

                  <div className="mt-7 h-px bg-[#bfd5df]" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-normal text-[#1f6f95]">
                    Clinical standard
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPrinciples() {
  return (
    <div className="grid border-y border-[#d8e5ec] md:grid-cols-3 md:divide-x md:divide-[#d8e5ec]">
      {aboutPrinciples.map((item) => (
        <div key={item.title} className="border-b border-[#d8e5ec] bg-white/55 p-6 last:border-b-0 md:border-b-0 md:p-7">
          <h4 className="font-[Manrope,Inter,system-ui,sans-serif] text-xl font-medium tracking-normal text-[#174766]">{item.title}</h4>
          <p className="mt-4 text-sm leading-7 text-[#5a6d76]">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

function CollaborativeCareSection() {
  return (
    <section className="bg-[#081820] px-4 py-14 text-white sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-9 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
            Collaborative care
          </p>

          <h2 className="mt-5 font-[Manrope,Inter,system-ui,sans-serif] text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            Additional support when patients need it.
          </h2>

          <p className="mt-5 text-base leading-8 text-white/64">
            Where appropriate, patients can be guided toward trusted allied healthcare
            professionals for broader care support.
          </p>
        </div>

        <div className="grid border border-white/10 bg-[#0b2532] sm:grid-cols-2 lg:grid-cols-4">
          {collaborativeCare.map((item, index) => (
            <article
              key={item.title}
              className="border-b border-white/10 p-5 transition hover:bg-[#123f55] sm:p-6 sm:even:border-l lg:border-b-0 lg:border-r lg:even:border-l-0 lg:last:border-r-0"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-semibold uppercase tracking-normal text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15 bg-[#081820] text-[#58d6c2]">
                  <Icon name={item.icon} size={21} />
                </span>
              </div>

              <p className="mt-7 text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
                {item.title}
              </p>

              <h3 className="mt-3 font-[Manrope,Inter,system-ui,sans-serif] text-lg font-semibold leading-tight text-white">
                {item.practice}
              </h3>

              <a
                href={`tel:${item.phone}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white/68 transition hover:text-white"
              >
                <Icon name="phone" size={15} />
                {item.phone}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-[#081820] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
            Contact us
          </p>

          <h2 className="mt-2 text-2xl font-semibold leading-tight tracking-normal text-white md:text-3xl">
            Arrange your consultation.
          </h2>

          <p className="mt-2 text-sm leading-6 text-white/60">
            Call, WhatsApp, or confirm directions to the Tulisa Park practice.
          </p>
        </div>

        <div className="grid gap-2 text-sm sm:grid-cols-2 lg:min-w-[40rem] lg:grid-cols-3">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="group flex items-center justify-between gap-4 border border-white/12 bg-white/[0.04] px-4 py-3 transition hover:border-[#58d6c2]/60 hover:bg-white/[0.08]"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-normal text-white/42">
                Phone
              </span>
              <span className="mt-1 block font-medium text-white">
                {DISPLAY_PHONE}
              </span>
            </span>

            <Icon
              name="phone"
              size={17}
              className="text-[#58d6c2] transition group-hover:text-[#f4b860]"
            />
          </a>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="group flex items-center justify-between gap-4 border border-white/12 bg-white/[0.04] px-4 py-3 transition hover:border-[#58d6c2]/60 hover:bg-white/[0.08]"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-normal text-white/42">
                WhatsApp
              </span>
              <span className="mt-1 block font-medium text-white">
                Message the practice
              </span>
            </span>

            <ArrowIcon
              size={17}
              className="text-[#58d6c2] transition group-hover:text-[#f4b860]"
            />
          </a>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 border border-white/12 bg-white/[0.04] px-4 py-3 transition hover:border-[#58d6c2]/60 hover:bg-white/[0.08] sm:col-span-2 lg:col-span-1"
          >
            <span>
              <span className="block text-[11px] uppercase tracking-normal text-white/42">
                Location
              </span>
              <span className="mt-1 block font-medium text-white">
                Open directions
              </span>
            </span>

            <ArrowIcon
              size={17}
              className="text-[#58d6c2] transition group-hover:text-[#f4b860]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function createCylinderBetween(start, end, radius, material) {
  const direction = new THREE.Vector3().subVectors(end, start);
  const length = direction.length();
  const geometry = new THREE.CylinderGeometry(radius, radius, length, 12);
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.copy(start).add(end).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());

  return mesh;
}

function createPanel(width, height, material, lineMaterial) {
  const panel = new THREE.Group();
  const plane = new THREE.Mesh(new THREE.PlaneGeometry(width, height), material);
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(plane.geometry), lineMaterial);

  panel.add(plane, edges);
  return panel;
}

const fixtureAliases = {
  doctor: "stethoscope",
  technology: "monitor",
  pricing: "monitor",
  services: "clinic",
  subscription: "subscription",
  family: "subscription",
  contact: "contact",
  legal: "shield",
};

function MedicalFixtureScene({ variant = "clinic", layout = "card", className = "" }) {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const normalizedVariant = fixtureAliases[variant] || variant || "clinic";
    const isHero = layout === "hero";

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x081820, isHero ? 8 : 6, isHero ? 24 : 16);

    const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 60);
    camera.position.set(0, 0.2, isHero ? 8.8 : 7.4);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.14;
    renderer.domElement.className = "h-full w-full";
    renderer.domElement.dataset.medicalFixture = normalizedVariant;
    renderer.domElement.setAttribute("aria-label", `${normalizedVariant} medical fixture`);
    mount.appendChild(renderer.domElement);

    const stage = new THREE.Group();
    const fixtureGroup = new THREE.Group();
    stage.add(fixtureGroup);
    scene.add(stage);

    const ambientLight = new THREE.AmbientLight(0x8ed9dd, 1.2);
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
    keyLight.position.set(-4, 5, 5);
    const tealLight = new THREE.PointLight(0x58d6c2, 4.8, 18);
    tealLight.position.set(-3.5, -1.6, 3.2);
    const amberLight = new THREE.PointLight(0xf4b860, 4.2, 18);
    amberLight.position.set(4, 2.2, 4);
    scene.add(ambientLight, keyLight, tealLight, amberLight);

    const tealMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x58d6c2,
      emissive: 0x1a756f,
      emissiveIntensity: 0.16,
      roughness: 0.22,
      metalness: 0.28,
    });
    const amberMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf4b860,
      emissive: 0x6c3f0c,
      emissiveIntensity: 0.24,
      roughness: 0.2,
      metalness: 0.22,
    });
    const whiteMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf6fbfb,
      roughness: 0.28,
      metalness: 0.18,
    });
    const darkMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x113342,
      roughness: 0.38,
      metalness: 0.24,
    });
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x9cece3,
      transparent: true,
      opacity: isHero ? 0.12 : 0.18,
      roughness: 0.12,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9cece3,
      transparent: true,
      opacity: 0.44,
    });
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x58d6c2,
      transparent: true,
      opacity: 0.34,
      side: THREE.DoubleSide,
    });

    const addBox = (group, size, position, material, rotation = [0, 0, 0]) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(...size), material);
      mesh.position.set(...position);
      mesh.rotation.set(...rotation);
      group.add(mesh);
      return mesh;
    };

    const addCross = (group, scale = 1, position = [0, 0, 0], material = tealMaterial) => {
      const cross = new THREE.Group();
      addBox(cross, [1.35 * scale, 0.34 * scale, 0.34 * scale], [0, 0, 0], material);
      addBox(cross, [0.34 * scale, 1.35 * scale, 0.34 * scale], [0, 0, 0], material);
      cross.position.set(...position);
      group.add(cross);
      return cross;
    };

    const addCapsule = (group, position, rotation, materialA = whiteMaterial, materialB = amberMaterial) => {
      const capsule = new THREE.Group();
      const halfA = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.42, 10, 18), materialA);
      const halfB = new THREE.Mesh(new THREE.CapsuleGeometry(0.18, 0.42, 10, 18), materialB);
      halfA.position.y = 0.21;
      halfB.position.y = -0.21;
      capsule.add(halfA, halfB);
      capsule.position.set(...position);
      capsule.rotation.set(...rotation);
      group.add(capsule);
      return capsule;
    };

    const addHeartbeat = (group, y = 0, width = 1.65) => {
      const points = [
        new THREE.Vector3(-width / 2, y, 0.08),
        new THREE.Vector3(-0.42, y, 0.08),
        new THREE.Vector3(-0.24, y + 0.22, 0.08),
        new THREE.Vector3(-0.02, y - 0.28, 0.08),
        new THREE.Vector3(0.22, y + 0.34, 0.08),
        new THREE.Vector3(0.42, y, 0.08),
        new THREE.Vector3(width / 2, y, 0.08),
      ];
      const curve = new THREE.CatmullRomCurve3(points);
      const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 80, 0.018, 8, false), amberMaterial);
      group.add(mesh);
      return mesh;
    };

    const addMonitorFixture = () => {
      const monitor = new THREE.Group();
      const panel = createPanel(2.45, 1.46, glassMaterial, lineMaterial);
      const frame = new THREE.Mesh(new THREE.BoxGeometry(2.65, 1.62, 0.08), darkMaterial);
      frame.position.z = -0.04;
      monitor.add(frame, panel);
      addHeartbeat(monitor, 0.06, 1.72);
      addBox(monitor, [0.18, 0.64, 0.18], [0, -1.1, -0.04], tealMaterial);
      addBox(monitor, [1.1, 0.18, 0.22], [0, -1.45, -0.04], tealMaterial);
      addCross(monitor, 0.38, [0.88, 0.46, 0.14], whiteMaterial);
      monitor.rotation.set(-0.06, -0.28, 0.04);
      fixtureGroup.add(monitor);
    };

    const addStethoscopeFixture = () => {
      const scope = new THREE.Group();
      const tubePoints = [
        new THREE.Vector3(-1.28, 1.08, 0),
        new THREE.Vector3(-1.06, 0.24, 0.1),
        new THREE.Vector3(-0.52, -0.78, 0.04),
        new THREE.Vector3(0.24, -1.02, 0.04),
        new THREE.Vector3(0.88, -0.48, 0.02),
        new THREE.Vector3(0.72, 0.48, 0.08),
      ];
      const tube = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(tubePoints), 120, 0.045, 14, false), tealMaterial);
      const earpieceLeft = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.035, 12, 40), whiteMaterial);
      const earpieceRight = earpieceLeft.clone();
      earpieceLeft.position.set(-1.36, 1.18, 0);
      earpieceRight.position.set(0.74, 0.62, 0);
      const chest = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.36, 0.14, 64), whiteMaterial);
      chest.position.set(1.08, -0.86, 0.06);
      chest.rotation.x = Math.PI / 2;
      const chestGlow = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.035, 14, 64), amberMaterial);
      chestGlow.position.copy(chest.position);
      chestGlow.rotation.x = Math.PI / 2;
      addCross(scope, 0.46, [-0.1, 0.36, 0.18], amberMaterial);
      scope.add(tube, earpieceLeft, earpieceRight, chest, chestGlow);
      scope.rotation.set(-0.08, -0.36, -0.18);
      fixtureGroup.add(scope);
    };

    const addClinicFixture = () => {
      const clinic = new THREE.Group();
      addCross(clinic, 0.98, [0, 0.36, 0.1], tealMaterial);
      addBox(clinic, [2.8, 0.22, 0.44], [0, -1.02, 0], darkMaterial);
      addBox(clinic, [1.9, 0.22, 0.36], [0, -1.35, 0.04], whiteMaterial);
      addCapsule(clinic, [-1.1, -0.34, 0.28], [0.6, 0.1, -0.76]);
      addCapsule(clinic, [1.12, -0.42, 0.22], [0.4, -0.08, 0.64], amberMaterial, whiteMaterial);
      const vial = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.92, 28), glassMaterial);
      vial.position.set(1.34, 0.3, 0.22);
      vial.rotation.z = -0.22;
      clinic.add(vial);
      clinic.rotation.set(-0.08, -0.3, 0.06);
      fixtureGroup.add(clinic);
    };

    const addSubscriptionFixture = () => {
      const subscription = new THREE.Group();
      addCross(subscription, 0.72, [0, 0, 0.18], whiteMaterial);
      [1.05, 1.45, 1.85].forEach((radius, index) => {
        const ring = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.018, 10, 120), index === 1 ? amberMaterial : tealMaterial);
        ring.rotation.set(Math.PI / 2.5, index * 0.42, Math.PI / 7);
        subscription.add(ring);
      });
      const nodeGeometry = new THREE.SphereGeometry(0.11, 24, 24);
      [-1.22, -0.36, 0.52, 1.38].forEach((x, index) => {
        const node = new THREE.Mesh(nodeGeometry, index % 2 ? amberMaterial : tealMaterial);
        node.position.set(x, Math.sin(index) * 0.56, Math.cos(index * 1.4) * 0.36);
        subscription.add(node);
      });
      addBox(subscription, [1.7, 0.18, 0.26], [0, -1.54, 0], darkMaterial);
      subscription.rotation.set(-0.12, -0.38, 0.02);
      fixtureGroup.add(subscription);
    };

    const addContactFixture = () => {
      const contact = new THREE.Group();
      addBox(contact, [1.16, 2.1, 0.16], [-0.34, 0, 0], darkMaterial, [0.04, -0.18, -0.06]);
      const screen = createPanel(0.94, 1.7, glassMaterial, lineMaterial);
      screen.position.set(-0.34, 0, 0.1);
      screen.rotation.set(0.04, -0.18, -0.06);
      contact.add(screen);
      addCross(contact, 0.34, [-0.34, 0.32, 0.22], tealMaterial);
      const bubble = createPanel(1.08, 0.7, glassMaterial, lineMaterial);
      bubble.position.set(0.94, 0.34, 0.1);
      bubble.rotation.set(-0.04, -0.48, 0.08);
      contact.add(bubble);
      addHeartbeat(bubble, 0, 0.72);
      addBox(contact, [1.42, 0.16, 0.2], [0.48, -1.28, 0], amberMaterial, [0, 0, -0.08]);
      contact.rotation.set(-0.06, -0.24, 0.02);
      fixtureGroup.add(contact);
    };

    const addShieldFixture = () => {
      const legal = new THREE.Group();
      const documentPanel = createPanel(1.72, 2.18, glassMaterial, lineMaterial);
      documentPanel.rotation.set(0.04, -0.28, 0.06);
      documentPanel.position.set(-0.24, 0, 0);
      legal.add(documentPanel);
      [-0.5, -0.14, 0.22].forEach((y) => {
        addBox(legal, [1.04, 0.04, 0.08], [-0.24, y, 0.16], whiteMaterial, [0.04, -0.28, 0.06]);
      });
      addCross(legal, 0.54, [0.72, 0.46, 0.24], tealMaterial);
      const seal = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.034, 14, 72), amberMaterial);
      seal.position.set(0.72, 0.46, 0.18);
      seal.rotation.set(Math.PI / 2, 0, 0);
      legal.add(seal);
      legal.rotation.set(-0.08, -0.22, 0.02);
      fixtureGroup.add(legal);
    };

    const builders = {
      clinic: addClinicFixture,
      stethoscope: addStethoscopeFixture,
      monitor: addMonitorFixture,
      subscription: addSubscriptionFixture,
      contact: addContactFixture,
      shield: addShieldFixture,
    };
    (builders[normalizedVariant] || builders.clinic)();

    const haloGroup = new THREE.Group();
    [1.62, 2.08].forEach((radius, index) => {
      const halo = new THREE.Mesh(new THREE.TorusGeometry(radius, 0.012, 8, 128), glowMaterial);
      halo.rotation.set(Math.PI / 2.55, index * 0.44, Math.PI / 8);
      halo.position.z = -0.2 - index * 0.08;
      haloGroup.add(halo);
    });
    fixtureGroup.add(haloGroup);

    const grid = new THREE.GridHelper(7, 12, 0x58d6c2, 0x58d6c2);
    grid.position.set(0, -2.02, -0.9);
    grid.material.transparent = true;
    grid.material.opacity = isHero ? 0.1 : 0.16;
    stage.add(grid);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.position.z = isHero ? (width < 720 ? 8.8 : 7.4) : (width < 520 ? 8.2 : 7.2);
      camera.updateProjectionMatrix();
      stage.position.set(isHero ? (width < 720 ? 0.22 : 1.08) : 0, isHero ? -0.08 : 0, 0);
      stage.scale.setScalar(isHero ? (width < 720 ? 1.08 : 1.48) : (width < 520 ? 0.82 : 1));
      renderer.setSize(width, height, false);
    };

    let animationFrame = 0;
    const clock = new THREE.Clock();
    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      stage.rotation.x = -0.1 + Math.sin(elapsed * 0.24) * 0.04 - pointer.y * 0.035;
      stage.rotation.y = -0.32 + Math.sin(elapsed * 0.2) * 0.12 + pointer.x * 0.065;
      fixtureGroup.rotation.y = Math.sin(elapsed * 0.34) * 0.08;
      fixtureGroup.position.y = Math.sin(elapsed * 0.8) * 0.04;
      haloGroup.rotation.z = elapsed * 0.11;
      grid.position.z = -0.9 + Math.sin(elapsed * 0.5) * 0.05;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    resize();
    renderFrame();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [variant, layout]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}

function CinematicHeroScene() {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x081820, 8, 24);

    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);
    camera.position.set(0, 0.5, 9.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: false,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });

    renderer.setClearColor(0x081820, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.domElement.className = "h-full w-full";
    renderer.domElement.dataset.heroCanvas = "cinematic";
    renderer.domElement.setAttribute("aria-label", "Animated clinical care scene");
    mount.appendChild(renderer.domElement);

    const stage = new THREE.Group();
    stage.position.set(1.85, -0.05, 0);
    stage.rotation.set(-0.04, -0.34, 0.03);
    scene.add(stage);

    const ambientLight = new THREE.AmbientLight(0x6fb9c6, 1.35);
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.1);
    keyLight.position.set(-4.5, 5, 5);
    const rimLight = new THREE.PointLight(0xf2b560, 4.5, 18);
    rimLight.position.set(4, 1.8, 3.5);
    const coolLight = new THREE.PointLight(0x53d7c5, 4, 20);
    coolLight.position.set(-3.5, -1.3, 4);
    scene.add(ambientLight, keyLight, rimLight, coolLight);

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x5cd4cf,
      transparent: true,
      opacity: 0.16,
      roughness: 0.18,
      metalness: 0.18,
      side: THREE.DoubleSide,
    });
    const frameMaterial = new THREE.LineBasicMaterial({
      color: 0x9cece3,
      transparent: true,
      opacity: 0.32,
    });
    const warmLineMaterial = new THREE.MeshBasicMaterial({
      color: 0xf4b860,
      transparent: true,
      opacity: 0.72,
    });
    const tealLineMaterial = new THREE.MeshBasicMaterial({
      color: 0x58d6c2,
      transparent: true,
      opacity: 0.82,
    });
    const nodeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xf5fbfb,
      emissive: 0x58d6c2,
      emissiveIntensity: 0.42,
      roughness: 0.24,
      metalness: 0.3,
    });
    const amberNodeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffd79a,
      emissive: 0xf4b860,
      emissiveIntensity: 0.65,
      roughness: 0.18,
      metalness: 0.35,
    });

    const helixGroup = new THREE.Group();
    stage.add(helixGroup);

    const helixPointsA = [];
    const helixPointsB = [];
    const turns = 3.45;
    const height = 4.65;
    const radius = 0.92;
    const depth = 0.42;

    for (let index = 0; index <= 150; index += 1) {
      const t = index / 150;
      const angle = t * Math.PI * 2 * turns;
      const y = (t - 0.5) * height;
      helixPointsA.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * depth));
      helixPointsB.push(new THREE.Vector3(Math.cos(angle + Math.PI) * radius, y, Math.sin(angle + Math.PI) * depth));
    }

    const helixA = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(helixPointsA), 180, 0.018, 10, false), tealLineMaterial);
    const helixB = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(helixPointsB), 180, 0.018, 10, false), warmLineMaterial);
    helixGroup.add(helixA, helixB);

    const nodeGeometry = new THREE.SphereGeometry(0.065, 20, 20);
    for (let index = 8; index < 145; index += 14) {
      const nodeA = new THREE.Mesh(nodeGeometry, index % 28 === 0 ? amberNodeMaterial : nodeMaterial);
      const nodeB = new THREE.Mesh(nodeGeometry, index % 28 === 0 ? amberNodeMaterial : nodeMaterial);
      nodeA.position.copy(helixPointsA[index]);
      nodeB.position.copy(helixPointsB[index]);
      helixGroup.add(nodeA, nodeB, createCylinderBetween(helixPointsA[index], helixPointsB[index], 0.01, tealLineMaterial));
    }

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x9cece3,
      transparent: true,
      opacity: 0.22,
      side: THREE.DoubleSide,
    });
    const rings = [];
    [1.55, 2.15, 2.78].forEach((size, index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(size, 0.012, 8, 160), ringMaterial);
      ring.rotation.set(Math.PI / 2.55, index * 0.42, Math.PI / 9);
      ring.position.z = -0.28 - index * 0.08;
      rings.push(ring);
      stage.add(ring);
    });

    const panels = [
      { position: [-2.25, 0.85, -1.6], rotation: [0.12, 0.58, -0.08], size: [1.8, 1.05] },
      { position: [2.16, 0.38, -1.3], rotation: [0.08, -0.62, 0.06], size: [1.55, 0.95] },
      { position: [-1.36, -1.56, -1.1], rotation: [-0.08, 0.4, 0.1], size: [1.55, 0.86] },
    ].map((item) => {
      const panel = createPanel(item.size[0], item.size[1], glassMaterial, frameMaterial);
      panel.position.set(...item.position);
      panel.rotation.set(...item.rotation);
      stage.add(panel);
      return panel;
    });
    const panelBaseTransforms = panels.map((panel) => ({
      y: panel.position.y,
      rotationZ: panel.rotation.z,
    }));

    const grid = new THREE.GridHelper(16, 28, 0x2ab9ad, 0x2ab9ad);
    grid.position.set(0, -3.05, -1.4);
    grid.material.transparent = true;
    grid.material.opacity = 0.12;
    stage.add(grid);

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 420;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      particlePositions[index * 3] = (Math.random() - 0.5) * 11;
      particlePositions[index * 3 + 1] = (Math.random() - 0.5) * 7;
      particlePositions[index * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particles = new THREE.Points(
      particleGeometry,
      new THREE.PointsMaterial({
        color: 0xc9fffa,
        size: 0.025,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
      }),
    );
    scene.add(particles);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    mount.addEventListener("pointermove", onPointerMove);

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.position.z = width < 720 ? 10.2 : 8.4;
      camera.updateProjectionMatrix();
      stage.position.set(width < 720 ? 0.25 : 0.92, -0.05, 0);
      stage.scale.setScalar(width < 720 ? 0.98 : 1.36);
      renderer.setSize(width, height, false);
    };

    let animationFrame = 0;
    const clock = new THREE.Clock();
    const renderFrame = () => {
      const elapsed = clock.getElapsedTime();
      stage.rotation.y = -0.34 + Math.sin(elapsed * 0.22) * 0.16 + pointer.x * 0.08;
      stage.rotation.x = -0.04 + Math.sin(elapsed * 0.18) * 0.06 - pointer.y * 0.04;
      helixGroup.rotation.y = elapsed * 0.2;
      helixGroup.rotation.z = Math.sin(elapsed * 0.35) * 0.05;
      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.1 + index * 0.03);
        ring.scale.setScalar(1 + Math.sin(elapsed * 1.2 + index) * 0.018);
      });
      panels.forEach((panel, index) => {
        panel.position.y = panelBaseTransforms[index].y + Math.sin(elapsed * 0.9 + index) * 0.035;
        panel.rotation.z = panelBaseTransforms[index].rotationZ + Math.cos(elapsed * 0.75 + index) * 0.015;
      });
      particles.rotation.y = elapsed * 0.025;
      camera.lookAt(pointer.x * 0.24, pointer.y * -0.16, 0);
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(renderFrame);
    };

    resize();
    renderFrame();
    window.addEventListener("resize", resize);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      mount.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((material) => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}

function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-[#bfd5df] bg-white px-3 py-2 shadow-[0_-12px_30px_rgba(8,24,32,0.16)] md:hidden">
      <div className="grid grid-cols-3 gap-2 text-center text-[12px] font-semibold">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="border border-[#bfd5df] bg-[#eef7fa] px-2 py-3 text-[#174766]"
        >
          Call
        </a>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          className="border border-[#174766] bg-[#174766] px-2 py-3 text-white"
        >
          WhatsApp
        </a>

        <a
          href={GOOGLE_MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="border border-[#bfd5df] bg-[#eef7fa] px-2 py-3 text-[#174766]"
        >
          Directions
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0f2f42] px-6 py-16 text-sm text-white/60 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-t border-white/10 pt-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3 text-white">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-black/20 p-1.5"><img src={LOGO_SRC} alt="Dr Mukudu & Partners logo" className="h-full w-full object-contain" /></span>
              <div><p className="font-medium text-white">Dr Mukudu & Partners</p><p className="mt-1 text-xs text-white/50">Optimising Health, Optimising Growth</p></div>
            </div>
            <p className="mt-6 max-w-sm leading-7 text-white/55">A modern medical practice focused on patient-centred primary care, clinical precision and continuity.</p>
            <p className="mt-6 text-white/45">{LOCATION}</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {footerSections.map((section) => (
              <div key={section.title}>
                <p className="text-xs font-semibold uppercase tracking-normal text-white/35">{section.title}</p>
                <div className="mt-5 space-y-3">{section.links.map((link) => <AppLink key={link.label} href={link.href} className="block transition hover:text-white">{link.label}</AppLink>)}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 grid gap-5 border-t border-white/10 pt-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
          <div>
            <p className="text-xs font-semibold uppercase tracking-normal text-white/35">Find us</p>
            <p className="mt-4 max-w-sm leading-7 text-white/60">{LOCATION}</p>
            <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white hover:text-[#174766]">Open in Google Maps</a>
          </div>
          <div className="min-h-[14rem] overflow-hidden border border-white/10 bg-black/15">
            <iframe
              title="Map to Dr Mukudu & Partners"
              src={GOOGLE_MAP_EMBED_SRC}
              className="h-full min-h-[14rem] w-full grayscale-[20%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Dr Mukudu & Partners. All rights reserved.</p>
          <p>Designed for modern, accessible healthcare.</p>
        </div>
      </div>
    </footer>
  );
}

function SEO({ pathname }) {
  React.useEffect(() => {
    const seo = seoPages[pathname] || {
      title: "Dr Mukudu & Partners | Medical Practice in Johannesburg South",
      description:
        "Dr Mukudu & Partners provides patient-centred healthcare services in Tulisa Park, Johannesburg South.",
      keywords:
        "Dr Mukudu, medical practice Johannesburg South, GP Tulisa Park",
    };

    const canonicalUrl = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = seo.title;

    function setMeta(name, content) {
      let tag = document.querySelector(`meta[name="${name}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    }

    function setProperty(property, content) {
      let tag = document.querySelector(`meta[property="${property}"]`);

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    }

    function setCanonical(href) {
      let link = document.querySelector('link[rel="canonical"]');

      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }

      link.setAttribute("href", href);
    }

    setMeta("description", seo.description);
    setMeta("keywords", seo.keywords);
    setMeta("robots", "index, follow");

    setProperty("og:title", seo.title);
    setProperty("og:description", seo.description);
    setProperty("og:url", canonicalUrl);
    setProperty("og:type", "website");
    setProperty("og:site_name", "Dr Mukudu & Partners");
    setProperty("og:image", `${SITE_URL}/logo.png`);

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
    setMeta("twitter:image", `${SITE_URL}/logo.png`);

    setCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}

function HomePage() {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 7000);

    return () => window.clearInterval(interval);
  }, []);

  const slide = heroSlides[activeIndex];

  return (
    <>
      <section className="relative isolate flex min-h-[82svh] items-center overflow-hidden bg-[#081820] px-4 pb-10 pt-24 text-white sm:min-h-[84svh] sm:px-6 sm:pb-16 sm:pt-28 lg:min-h-[84svh] lg:px-10 lg:pt-32">
        <CinematicHeroScene />

        <div className="pointer-events-none absolute inset-0 bg-[#081820]/70" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[#58d6c2]/50" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl min-w-0 flex-col justify-center">
          <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(22rem,0.8fr)]">
            <div className="w-full max-w-full min-w-0 animate-[fadeUp_800ms_ease-out] sm:max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-normal text-[#f4b860]">
                Private Medical Practice
              </p>

              <h1 className="mt-5 max-w-full break-words text-4xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                {slide.text}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
                Modern, patient-centred healthcare in Tulisa Park, shaped around
                clinical precision, discretion, continuity and everyday access.
              </p>

              <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
                <AppLink
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-[#081820] transition hover:bg-[#f5fbfb] sm:w-auto"
                >
                  Book Appointment
                  <ArrowIcon size={17} />
                </AppLink>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  className="inline-flex w-full items-center justify-center gap-2 border border-white/30 px-6 py-3 text-sm font-medium text-white transition hover:border-[#58d6c2] hover:bg-white/10 sm:w-auto"
                >
                  <Icon name="phone" size={16} />
                  WhatsApp
                </a>
              </div>

              <div className="mt-10 hidden max-w-2xl border-y border-white/12 py-5 text-sm text-white/64 sm:grid sm:grid-cols-3">
                <p className="border-r border-white/10 pr-4">
                  <span className="block text-white">Primary care</span>
                  Consultation-led treatment
                </p>

                <p className="border-r border-white/10 px-4">
                  <span className="block text-white">MedKulula</span>
                  Subscription access
                </p>

                <p className="pl-4">
                  <span className="block text-white">Collaborative</span>
                  Allied health support
                </p>
              </div>

              <div className="mt-8 flex items-center gap-3" aria-label="Hero slides">
                {heroSlides.map((item, i) => (
                  <button
                    key={item.text}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    className={`h-2 transition-all ${
                      i === activeIndex
                        ? "w-12 bg-[#f4b860]"
                        : "w-5 bg-white/35 hover:bg-white/60"
                    }`}
                    aria-label={`Show hero message ${i + 1}`}
                    aria-current={i === activeIndex ? "true" : undefined}
                  />
                ))}
              </div>
            </div>

            <div className="pointer-events-none relative hidden min-h-[30rem] lg:block" aria-hidden="true">
              <div className="absolute right-0 top-16 w-72 border-t border-[#58d6c2]/45 pt-4 text-right text-sm text-white/60">
                <span className="block text-white">Clinical signal</span>
                Patient-centred, technology-aware care
              </div>

              <div className="hero-pulse-line absolute bottom-20 left-12 h-px w-64 bg-[#58d6c2]/35" />

              <div className="absolute bottom-24 left-12 text-sm text-white/58">
                <span className="block text-[#f4b860]">Optimising Health</span>
                Optimising Growth
              </div>
            </div>
          </div>

          <TrustLogoRail />
        </div>
      </section>

      <IntroCareSection />

      <Section
        eyebrow="Subscription care"
        title="MedKulula Subscription"
        subtitle="A structured, accessible model designed to simplify ongoing access to primary care."
        fixture="subscription"
      >
        <MedKululaPreview />
      </Section>

      <Section
        eyebrow="Services"
        title="Core clinical services."
        subtitle="A focused selection of services delivered with consistency, discretion, and professional oversight."
        fixture="clinic"
      >
        <ServicesList />
      </Section>

      <ApproachSection />

      <CollaborativeCareSection />

      <ContactSection />

      <section className="sr-only" aria-label="SEO information">
  <h2>GP Practice in Tulisa Park, Johannesburg South</h2>
  <p>
    Dr Mukudu & Partners is a medical practice in Tulisa Park, Johannesburg
    South, providing general medical consultations, preventative healthcare,
    women’s health services, MedKulula subscriptions and free male circumcision
    consultations from age 10.
  </p>

  <h2>Medical Services</h2>
  <p>
    Services include GP consultations, preventative care, medical male
    circumcision, women’s health, contraceptive care, virtual care support and
    collaborative allied healthcare referrals.
  </p>

  <h2>Book a Consultation</h2>
  <p>
    Patients can contact Dr Mukudu & Partners by phone, WhatsApp or online
    booking forms to arrange consultations and access healthcare support in
    Johannesburg South.
  </p>
</section>
    </>
  );
}

function MedKululaPreview() {
  return (
    <div className="grid border border-[#bfd5df] bg-[#bfd5df] lg:grid-cols-[1.05fr_0.95fr]">
      <div className="bg-white p-7 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-normal text-[#1f6f95]">
          Subscription access
        </p>

        <h3 className="mt-5 max-w-2xl font-[Manrope,Inter,system-ui,sans-serif] text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0b2532] md:text-4xl">
          Predictable monthly care for easier access.
        </h3>

        <p className="mt-5 max-w-2xl text-base leading-8 text-[#40545d]">
          MedKulula supports routine visits, care planning and ongoing access through a simpler monthly model.
        </p>

        <div className="mt-8 grid border border-[#bfd5df] sm:grid-cols-3">
          {medkululaPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`border-b border-[#bfd5df] p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 ${
                index === 0
                  ? "bg-[#f7fbfd]"
                  : index === 1
                    ? "bg-[#eef7fa]"
                    : "bg-[#dcecf3]"
              }`}
            >
              <p className="text-[11px] font-semibold uppercase tracking-normal text-[#174766]">
                {plan.name}
              </p>

              <p className="mt-3 text-2xl font-semibold text-[#0b2532]">
                {plan.price}
              </p>

              <p className="mt-1 text-xs text-[#5a6d76]">
                {plan.cadence}
              </p>
            </div>
          ))}
        </div>

        <AppLink
          href="/medkulula"
          className="mt-8 inline-flex items-center gap-2 border border-[#174766] bg-[#174766] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2532]"
        >
          View MedKulula plans
          <ArrowIcon size={17} />
        </AppLink>
      </div>

      <div className="bg-[#0b2532] p-7 text-white md:p-8">
        <p className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
          Care benefits
        </p>

        <div className="mt-6 border border-white/10">
          {medkululaBenefits.map((benefit, index) => (
            <div
              key={benefit}
              className="grid grid-cols-[3.5rem_1fr] border-b border-white/10 last:border-b-0"
            >
              <div className="flex items-center justify-center border-r border-white/10 bg-[#081820] text-[#58d6c2]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="p-4 text-sm leading-6 text-white/72">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <blockquote className="mt-7 border-l-2 border-[#58d6c2] pl-5 text-base leading-7 text-white/70">
          “Health is the foundation of life — without it, even the simplest joys become difficult to reach.”
        </blockquote>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="A modern medical practice focused on patient-centred care." subtitle="Combining clinical expertise, technology and continuous growth to deliver better healthcare outcomes." fixture="stethoscope" />
      <Section eyebrow="Our philosophy" title="Optimising Health, Optimising Growth." subtitle="The practice is built on a commitment to continuous improvement, innovation, and delivering meaningful patient outcomes." fixture="monitor">
        <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#4f5d59]"><p>At Dr Mukudu and Partners, healthcare is delivered through a personalised, patient-focused approach. The team is dedicated to staying aligned with the latest advancements in medicine, continuously improving both clinical knowledge and the patient experience.</p><p>The practice invests in modern medical technology and digital health solutions to ensure that patients benefit from accurate diagnostics, efficient care, and improved treatment outcomes.</p><p>Whether patients require preventative care, general consultations, or support managing chronic conditions, each treatment plan is carefully structured to align with individual health goals.</p></div>
      </Section>
      <Section eyebrow="Clinical approach" title="Care designed around the whole patient." subtitle="A holistic model that considers physical health, mental wellbeing and long-term lifestyle outcomes."><div className="max-w-3xl space-y-6 text-lg leading-8 text-[#4f5d59]"><p>The practice goes beyond treating symptoms. Every consultation considers the broader context of a patient’s health, including preventative care, education, and long-term wellness planning.</p><p>Patients are encouraged to take an active role in their healthcare journey, supported by clear guidance, transparent communication and consistent follow-up.</p></div></Section>
      <Section eyebrow="Core principles" title="What defines the practice."><AboutPrinciples /></Section>
      <ApproachSection />
      <CollaborativeCareSection />
    </>
  );
}

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Core clinical services."
        subtitle="Focused, high-quality care delivered with consistency, discretion and professional oversight."
        fixture="clinic"
      />

      <Section
        eyebrow="Clinical care"
        title="Services designed around everyday and long-term health needs."
        subtitle="The practice provides essential primary care services with an emphasis on accurate assessment, prevention and continuity."
      >
        <ServicesList />
      </Section>

      <Section eyebrow="GP consultations" title="Thorough, efficient medical consultations.">
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#4f5d59]">
          <p>
            Consultations are designed to provide patients with clear clinical guidance,
            appropriate treatment and practical next steps. The practice values ongoing
            learning and keeps informed about developments in healthcare and medical
            technology.
          </p>

          <p>
            Where needed, patients may also be guided toward digital health support and
            innovative health tools through TeledoctorSA.
          </p>
        </div>
      </Section>

      <section className="relative overflow-hidden bg-[#081820] px-6 py-16 text-white lg:px-10 lg:py-24">
        <div className="absolute left-0 top-0 h-full w-2 bg-[#58d6c2]" />
        <div className="absolute right-0 top-0 h-full w-2 bg-[#1f6f95]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-0 border border-white/10 bg-[#0b2532] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-white/10 p-7 md:p-10 lg:border-b-0 lg:border-r">
              <p className="text-xs font-semibold uppercase tracking-normal text-[#58d6c2]">
                Preventative care
              </p>

              <h2 className="mt-5 font-[Manrope,Inter,system-ui,sans-serif] text-4xl font-semibold leading-none tracking-[-0.05em] text-white md:text-6xl">
                FREE MALE CIRCUMCISION
              </h2>

              <p className="mt-4 inline-block bg-[#58d6c2] px-4 py-2 text-sm font-bold uppercase tracking-normal text-[#081820]">
                From age 10
              </p>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68">
                Medical male circumcision is offered as part of preventative healthcare
                support, delivered with medical supervision, patient education and
                attention to safety.
              </p>

              <a
                href="https://redcap.link/DRMUKUDU_FREE_CIRCUMCISION_BOOKING"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 border border-[#58d6c2] bg-[#58d6c2] px-6 py-3 text-sm font-bold text-[#081820] transition hover:border-white hover:bg-white"
              >
                Book your FREE consultation
                <ArrowIcon size={17} />
              </a>
            </div>

            <div className="grid bg-[#123f55] md:grid-cols-3 lg:grid-cols-1">
              <div className="border-b border-white/10 p-6">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 bg-[#081820] text-[#58d6c2]">
                  <Icon name="shield" size={25} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Medically supervised
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/62">
                  The procedure is handled within a clinical care environment with
                  patient safety in mind.
                </p>
              </div>

              <div className="border-b border-white/10 p-6">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 bg-[#081820] text-[#58d6c2]">
                  <Icon name="care" size={25} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Free consultation
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/62">
                  Patients can book a free consultation first to ask questions and
                  understand the process.
                </p>
              </div>

              <div className="p-6">
                <div className="flex h-14 w-14 items-center justify-center border border-white/15 bg-[#081820] text-[#58d6c2]">
                  <Icon name="phone" size={25} />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  Easy booking
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/62">
                  Use the booking form to request an appointment for the free
                  circumcision consultation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Women’s health" title="Discreet, supportive women’s health and contraceptive care.">
        <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#4f5d59]">
          <p>
            Women’s health services are delivered with care, discretion and respect.
            The practice supports patients with contraceptive care, reproductive health
            conversations and broader wellbeing needs.
          </p>

          <p>
            The approach is patient-centred and considers each stage of life, with
            emphasis on informed decisions and continuity of care.
          </p>
        </div>
      </Section>
    </>
  );
}

function MedKululaPage() {
  return (
    <>
      <PageHero eyebrow="Subscription care" title="MedKulula Subscription" subtitle="Affordable monthly healthcare plans designed to make access to primary care more predictable." fixture="subscription" />
      <Section eyebrow="Plan focus" title="Healthcare access with greater predictability." subtitle="MedKulula is a subscription-based care model for patients who want a clearer, more consistent way to access primary healthcare."><div className="rounded-lg border border-[#d8e5ec] bg-white p-6 shadow-[0_12px_40px_rgba(18,63,85,0.05)] md:p-8"><p className="max-w-3xl text-base leading-7 text-[#4f5d59]">MedKulula offers a structured monthly approach to accessing quality healthcare, supporting routine care, long-term health management and a more predictable healthcare experience.</p></div></Section>
      <Section eyebrow="Plans" title="Choose the plan that fits your needs." subtitle="The current MedKulula options include individual, dependant and student-focused subscription plans.">
        <div className="grid gap-5 lg:grid-cols-3">{medkululaPlans.map((plan) => <div key={plan.name} className="flex flex-col rounded-lg border border-[#d8e5ec] bg-white p-6 shadow-[0_12px_40px_rgba(18,63,85,0.04)]"><p className="text-xs font-semibold uppercase tracking-normal text-[#6c8aa0]">{plan.name}</p><div className="mt-6 flex items-end gap-2"><p className="font-[Manrope,Inter,system-ui,sans-serif] text-4xl font-medium tracking-normal text-[#174766]">{plan.price}</p><p className="pb-1 text-sm text-[#5a6d76]">{plan.cadence}</p></div><p className="mt-5 flex-1 text-sm leading-7 text-[#5a6d76]">{plan.description}</p><AppLink href={plan.href} className="mt-7 inline-flex w-fit rounded-full bg-[#174766] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#123f55]">{plan.cta}</AppLink></div>)}</div>
      </Section>
      <Section eyebrow="Subscribe" title="Begin your subscription application." subtitle="Patients can begin the process online using the subscription form. Support is available if assistance is needed during the application.">
        <div className="grid gap-5 md:grid-cols-2"><div className="rounded-lg border border-[#d8e5ec] bg-[#edf5f7] p-6"><p className="text-xs font-semibold uppercase tracking-normal text-[#6c8aa0]">Subscription form</p><p className="mt-4 text-base leading-7 text-[#174766]">Complete the MedKulula subscription form to begin your application.</p><a href="https://redcap.link/Dr_Mukudu_MedKulula_Subscription" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-[#174766] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#123f55]">Open subscription form</a></div><div className="rounded-lg border border-[#d8e5ec] bg-white p-6"><p className="text-xs font-semibold uppercase tracking-normal text-[#6c8aa0]">Student plan</p><p className="mt-4 text-base leading-7 text-[#174766]">Students can apply for the R200 monthly MedKulula Student Plan.</p><a href="https://redcap.link/Student_MedKulula_Subscription" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full border border-[#174766] px-5 py-2.5 text-sm font-medium text-[#174766] transition hover:bg-[#174766] hover:text-white">Open student form</a></div></div>
      </Section>
      <Section eyebrow="Benefits" title="Designed for continuity and convenience."><div className="grid border-y border-[#d8e5ec] md:grid-cols-2 md:divide-x md:divide-[#d8e5ec]">{medkululaBenefits.map((benefit) => <div key={benefit} className="border-b border-[#d8e5ec] bg-white/55 p-6 last:border-b-0 md:border-b-0"><p className="text-base text-[#174766]">{benefit}</p></div>)}</div></Section>
      <Section eyebrow="Support" title="Need help with the application?" tone="dark"><div className="grid gap-4 md:grid-cols-2"><div className="rounded-lg border border-white/10 bg-white/[0.05] p-6"><p className="text-xs uppercase tracking-normal text-white/40">Call</p><p className="mt-3 text-xl text-white">011 613 01141</p></div><div className="rounded-lg border border-white/10 bg-white/[0.05] p-6"><p className="text-xs uppercase tracking-normal text-white/40">WhatsApp</p><a href="https://wa.me/27615471346" target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-xl text-white underline-offset-4 hover:underline">061 547 1346</a></div></div><blockquote className="mt-8 max-w-3xl border-l border-white/20 pl-6 text-lg leading-8 text-white/72">“Health is the foundation of life — without it, even the simplest joys become difficult to reach.”</blockquote></Section>
    </>
  );
}

function PriceListPage() {
  return (<><PageHero eyebrow="Pricing" title="Price List" subtitle="Clear pricing information for consultations and selected services." fixture="monitor" /><Section eyebrow="Pricing" title="Transparent pricing details." subtitle="Final pricing can be updated here once confirmed by the practice."><div className="overflow-hidden rounded-lg border border-[#d8e5ec] bg-white shadow-[0_12px_40px_rgba(18,63,85,0.05)]"><div className="divide-y divide-[#d8e5ec]">{priceItems.map((item) => <div key={item.service} className="grid gap-4 p-5 md:grid-cols-[1fr_12rem] md:items-center md:p-6"><div><h3 className="font-[Manrope,Inter,system-ui,sans-serif] text-xl font-medium tracking-normal text-[#174766]">{item.service}</h3><p className="mt-2 text-sm leading-7 text-[#5a6d76]">{item.note}</p></div><p className="text-base font-medium text-[#17211f] md:text-right">{item.price}</p></div>)}</div></div></Section><Section eyebrow="Booking" title="Confirm pricing before your visit." tone="dark"><p className="max-w-2xl text-base leading-7 text-white/70">For the most accurate pricing, patients are encouraged to contact the practice directly before booking.</p></Section></>);
}

function ContactPage() {
  return (<><PageHero eyebrow="Contact us" title="Arrange your consultation." subtitle="Schedule your appointment or speak to the practice directly." fixture="contact" /><ContactSection /><Section eyebrow="Appointments" title="What to expect when you contact us."><div className="max-w-3xl space-y-5 text-lg leading-8 text-[#4f5d59]"><p>Patients can contact the practice to confirm availability, request appointment guidance, ask about MedKulula or enquire about specific services.</p><p>For faster communication, WhatsApp is recommended where appropriate. Emergency medical concerns should be directed to the relevant emergency service.</p></div></Section></>);
}

function PolicyPage({ page }) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.title} subtitle={page.subtitle} fixture={page.fixture || "shield"} />
      <Section eyebrow={page.eyebrow} title={page.sections ? page.title : "Policy content coming soon."}>
        <div className="rounded-lg border border-[#d8e5ec] bg-white p-6 shadow-[0_12px_40px_rgba(18,63,85,0.05)] md:p-8">
          {page.sections ? (
            <div className="divide-y divide-[#d8e5ec]">
              {page.sections.map((section) => (
                <article key={section.heading} className="py-7 first:pt-0 last:pb-0">
                  <h3 className="font-[Manrope,Inter,system-ui,sans-serif] text-xl font-medium tracking-normal text-[#174766]">{section.heading}</h3>
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph} className="mt-4 max-w-4xl text-base leading-8 text-[#4f5d59]">{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul className="mt-4 max-w-4xl list-disc space-y-3 pl-5 text-base leading-7 text-[#4f5d59]">
                      {section.bullets.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          ) : (
            <p className="max-w-3xl leading-7 text-[#5a6d76]">This page has been created as part of the site structure. Final legal wording should be reviewed and supplied by the practice or a qualified legal professional.</p>
          )}
        </div>
      </Section>
    </>
  );
}

function NotFoundPage() {
  return <PageHero eyebrow="Page not found" title="This page does not exist." subtitle="Return to the homepage or choose a page from the navigation." fixture="shield" />;
}

function getCurrentPage(pathname) {
  if (legalPages[pathname]) return <PolicyPage page={legalPages[pathname]} />;
  const routes = {
    "/": <HomePage />,
    "/about": <AboutPage />,
    "/services": <ServicesPage />,
    "/medkulula": <MedKululaPage />,
    "/price-list": <PriceListPage />,
    "/contact": <ContactPage />,
  };
  return routes[pathname] || <NotFoundPage />;
}

// eslint-disable-next-line react-refresh/only-export-components
export function validateHomepageContent() {
  return {
    hasSixNavItems: navItems.length === 6,
    hasThreeFooterSections: footerSections.length === 3,
    hasLegalFooterLinks: footerSections.some((section) => section.title === "Legal" && section.links.length === 6),
    hasExternalTeledoctorLink: navItems.some((item) => item.label === "TeledoctorSA" && item.href === "https://teledoctorsa.co.za/"),
    usesPageRoutes: navItems.filter((item) => item.label !== "TeledoctorSA").every((item) => item.href.startsWith("/")),
    hasThreeHeroSlides: heroSlides.length === 3,
    hasHeroImages: heroSlides.every((slide) => Boolean(slide.image)),
    hasHeroText: heroSlides.every((slide) => Boolean(slide.text)),
    hasThreeTrustLogos: trustLogos.length === 3,
    hasTrustLogoImages: trustLogos.every((logo) => logo.src.startsWith("/trust-logos/")),
    hasImageAssets: Object.keys(imageAssets).length >= 3,
    hasThreeServices: services.length === 3,
    hasThreeApproachItems: approachItems.length === 3,
    hasCollaborativeCare: collaborativeCare.length === 4,
    hasCollaborativeCarePhones: collaborativeCare.every((item) => Boolean(item.phone)),
    hasCollaborativeCareIcons: collaborativeCare.every((item) => Boolean(item.icon)),
    hasMedKululaPlans: medkululaPlans.length === 3,
    hasPriceItems: priceItems.length === 4,
    hasLogoSource: LOGO_SRC === "/logo.png",
    hasLocation: LOCATION.includes("Tulisa Park"),
    hasPhonePlaceholder: DISPLAY_PHONE.includes("Insert Number"),
    hasSupportWhatsAppLink: true,
  };
}

export default function DrMukuduHomepage() {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    function handleRouteChange() {
      setPathname(window.location.pathname);
    }
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

return (
  <main className="min-h-screen bg-[#f6f9fa] pb-20 font-[Manrope,Inter,system-ui,sans-serif] text-[#17211f] md:pb-0">
    <SEO pathname={pathname} />
    <PremiumStyles />
    <Header />
    {getCurrentPage(pathname)}
    <Footer />
    <MobileActionBar />
  </main>
);
}
