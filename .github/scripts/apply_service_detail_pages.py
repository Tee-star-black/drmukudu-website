from pathlib import Path

path = Path("src/DrMukuduHomepage.jsx")
text = path.read_text(encoding="utf-8")

old_services = '''const services = [
  {
    title: "General Medical Consultations",
    description: "Routine check-ups, acute illness care, chronic condition monitoring and preventative risk assessments, supported by clear treatment and follow-up planning.",
  },
  {
    title: "Preventative & Procedural Care",
    description: "Health screenings, selected minor clinical procedures, immunisations and preventative health audits delivered through a structured safety-first pathway.",
  },
  {
    title: "Women’s Health",
    description: "Cervical and breast screening, reproductive and family-planning care, maternal support, and guidance through hormonal and menopausal health needs.",
  },
];'''

new_services = '''const services = [
  {
    title: "General Medical Consultations",
    description: "Routine check-ups, acute illness care, chronic condition monitoring and preventative risk assessments, supported by clear treatment and follow-up planning.",
    href: "/services/general-medical-consultations",
  },
  {
    title: "Preventative & Procedural Care",
    description: "Health screenings, selected minor clinical procedures, immunisations and preventative health audits delivered through a structured safety-first pathway.",
    href: "/services/preventative-procedural-care",
  },
  {
    title: "Women’s Health",
    description: "Cervical and breast screening, reproductive and family-planning care, maternal support, and guidance through hormonal and menopausal health needs.",
    href: "/services/womens-health",
  },
];'''

if old_services not in text:
    raise SystemExit("services block not found")
text = text.replace(old_services, new_services, 1)

mega_menu_replacements = {
    'href: "/services#general-medical-consultations"': 'href: "/services/general-medical-consultations"',
    'href: "/services#preventative-procedural-care"': 'href: "/services/preventative-procedural-care"',
    'href: "/services#womens-health"': 'href: "/services/womens-health"',
}
for old, new in mega_menu_replacements.items():
    if old not in text:
        raise SystemExit(f"mega menu target not found: {old}")
    text = text.replace(old, new, 1)

services_list_start = text.find("function ServicesList()")
if services_list_start == -1:
    raise SystemExit("ServicesList start not found")
services_list_end = text.find("\nfunction ", services_list_start + 1)
if services_list_end == -1:
    raise SystemExit("ServicesList end not found")
services_list_block = text[services_list_start:services_list_end]
if 'Book this service' not in services_list_block or 'href="/contact"' not in services_list_block:
    raise SystemExit("ServicesList CTA not found")
services_list_block = services_list_block.replace('href="/contact"', 'href={service.href}', 1)
services_list_block = services_list_block.replace('Book this service', 'Find out more', 1)
text = text[:services_list_start] + services_list_block + text[services_list_end:]

seo_marker = '''  "/free-male-circumcision": {'''
seo_entries = '''  "/services/general-medical-consultations": {
    title: "General Medical Consultations | Dr Mukudu & Partners",
    description:
      "Learn about general medical consultations at Dr Mukudu & Partners, including routine check-ups, acute illness care, chronic monitoring, prevention and follow-up.",
    keywords:
      "general medical consultation Johannesburg South, GP consultation Tulisa Park, chronic condition monitoring, routine check-up",
  },
  "/services/preventative-procedural-care": {
    title: "Preventative & Procedural Care | Dr Mukudu & Partners",
    description:
      "Explore preventative screening, selected minor procedures, immunisations and structured aftercare at Dr Mukudu & Partners.",
    keywords:
      "preventative care Johannesburg South, health screening Tulisa Park, wound care, minor procedures, immunisation",
  },
  "/services/womens-health": {
    title: "Women’s Health Services | Dr Mukudu & Partners",
    description:
      "Explore women’s health services at Dr Mukudu & Partners, including screening, contraception support, maternal care and hormonal health consultations.",
    keywords:
      "women's health Johannesburg South, Pap smear Tulisa Park, contraception consultation, maternal wellness, hormonal health",
  },
'''
if '"/services/general-medical-consultations": {' not in text:
    if seo_marker not in text:
        raise SystemExit("SEO insertion marker not found")
    text = text.replace(seo_marker, seo_entries + seo_marker, 1)

service_pages = r'''
const clinicalServicePageContent = {
  general: {
    eyebrow: "General medical consultations",
    title: "General medical care with a clear plan from first concern to follow-up.",
    subtitle: "Primary care for routine health needs, non-emergency illness, chronic monitoring and prevention, organised around assessment, explanation and continuity.",
    fixture: "stethoscope",
    icon: "consultation",
    image: serviceImages.consultation,
    imageAlt: "Dr Mukudu & Partners general medical consultation service",
    introTitle: "A consultation designed to make the next step clear.",
    intro: "General medical consultations bring routine care, assessment of common non-emergency concerns, chronic-condition review and preventative health planning into one structured clinical visit. The focus is on understanding the concern, examining what is clinically relevant, explaining the plan and arranging follow-up where needed.",
    coverageTitle: "What this service can include",
    coverage: [
      ["Routine check-ups", "Physical check-ups, wellness reviews and appropriate health screening based on the consultation."],
      ["Acute illness care", "Assessment and management of common non-emergency symptoms and short-term health concerns."],
      ["Chronic monitoring", "Ongoing review of conditions such as hypertension, diabetes and cholesterol, including treatment progress and follow-up planning."],
      ["Preventative care", "Risk assessment, health education and practical guidance aimed at supporting longer-term wellbeing."],
    ],
    journey: [
      ["01", "Initial assessment", "Review your medical history, current concern, relevant medicines and vital signs."],
      ["02", "Clinical evaluation", "A focused examination helps determine the appropriate investigations, treatment or referral pathway."],
      ["03", "Care plan", "The clinician explains the findings, treatment options, prescriptions, investigations or referrals where appropriate."],
      ["04", "Follow-up", "Ongoing review is arranged when symptoms, results or chronic-care needs require continued monitoring."],
    ],
    prepare: [
      "Bring a list of current medicines and supplements where possible.",
      "Bring relevant previous results, reports or referral letters if they relate to the concern.",
      "Make a note of symptoms, when they started and anything that makes them better or worse.",
      "Have your medical-aid or payment information available if applicable.",
    ],
    note: "If symptoms are severe, rapidly worsening or potentially life-threatening, use the appropriate emergency service rather than waiting for a routine consultation.",
  },
  prevention: {
    eyebrow: "Preventative & procedural care",
    title: "Screening, selected procedures and prevention with structured aftercare.",
    subtitle: "A practical clinical pathway for prevention, health checks, selected minor procedures and follow-up when monitoring is needed.",
    fixture: "shield",
    icon: "prevention",
    image: serviceImages.procedures,
    imageAlt: "Dr Mukudu & Partners preventative and procedural care service",
    introTitle: "Prevention and procedures should feel organised, not improvised.",
    intro: "This service brings together preventative screening and selected in-practice procedures. Each visit starts with an assessment to confirm what is appropriate, followed by the relevant screening or intervention, clear aftercare guidance and review when clinically indicated.",
    coverageTitle: "What this service can include",
    coverage: [
      ["Health screening", "Blood pressure, glucose, cholesterol and cardiovascular risk checks where clinically appropriate."],
      ["Wound & suture care", "Selected wound dressing changes, wound review and suture removal after an appropriate assessment."],
      ["Selected minor procedures", "Minor in-practice procedures, including selected biopsies, when suitable for the practice setting and clinician assessment."],
      ["Immunisation support", "Seasonal flu, travel and routine booster vaccination support subject to clinical suitability and availability."],
      ["Preventative health review", "Structured review of risk factors, screening needs and practical prevention priorities."],
    ],
    journey: [
      ["01", "Pre-assessment", "Confirm the reason for the visit, relevant history, medicines, allergies and whether the service is appropriate."],
      ["02", "Screening or procedure", "The agreed screening or procedure is completed using the appropriate clinical process."],
      ["03", "Aftercare", "You receive clear instructions on wound care, expected recovery, medication or next steps where relevant."],
      ["04", "Review", "Follow-up is arranged when healing, results or preventative findings need further clinical review."],
    ],
    prepare: [
      "Tell the practice what screening or procedure you are requesting when making the appointment.",
      "Bring relevant referral notes, prior results or procedure information if another clinician was involved.",
      "Share current medicines, allergies and any blood-thinning treatment with the clinician.",
      "Ask the practice in advance if a specific vaccine, dressing or procedure needs availability confirmation.",
    ],
    note: "Specific procedures, vaccines and screenings depend on clinical suitability, available stock or equipment and the clinician’s assessment. The practice will advise if referral to another service is more appropriate.",
  },
  womensHealth: {
    eyebrow: "Women’s health",
    title: "Discreet women’s healthcare across screening, reproductive and hormonal needs.",
    subtitle: "Private, structured consultations that connect screening, reproductive health, maternal support and hormonal wellbeing with clear follow-up or referral pathways.",
    fixture: "clinic",
    icon: "womens-health",
    image: serviceImages.womensHealth,
    imageAlt: "Dr Mukudu & Partners women’s health service",
    introTitle: "A private consultation built around your stage of health and your concerns.",
    intro: "Women’s health consultations begin with a focused history and discussion of the reason for the visit. Examination, screening, treatment or referral is then tailored to the clinical need, with clear explanations and follow-up planning.",
    coverageTitle: "What this service can include",
    coverage: [
      ["Cervical screening", "Pap smears, HPV-related screening discussions and follow-up planning where appropriate."],
      ["Contraception & reproductive care", "Contraception counselling, prescription support and selected device insertion or removal following assessment."],
      ["Maternal wellness", "Routine antenatal, post-natal and maternal wellbeing support within the practice’s scope of care."],
      ["Hormonal health", "Consultations for concerns related to PMS, PCOS, menopause and other hormonal symptoms."],
      ["Breast health", "Clinical breast examination and referral pathways for further imaging or specialist assessment where indicated."],
    ],
    journey: [
      ["01", "Private history", "Discuss symptoms, cycle or reproductive history, screening history, medicines and your goals for the consultation."],
      ["02", "Examination or screening", "Complete the clinically appropriate examination, screening or assessment with your consent."],
      ["03", "Clinical plan", "Review treatment, contraception, investigations, health guidance or referral options relevant to the findings."],
      ["04", "Follow-up", "Arrange review of symptoms, results, treatment response or referral progress where needed."],
    ],
    prepare: [
      "Bring previous screening or laboratory results if they are relevant to the visit.",
      "Have a list of current medicines, contraception and supplements where possible.",
      "Note the date of your last menstrual period if relevant to the concern.",
      "Write down questions or symptoms you want to make sure are discussed during the consultation.",
    ],
    note: "The timing and type of screening, investigations or referral depend on your age, history, symptoms, previous results and the clinician’s assessment.",
  },
};

function ClinicalServiceDetailPage({ service }) {
  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        subtitle={service.subtitle}
        fixture={service.fixture}
      />

      <section className="border-t border-[#bfd5df] bg-white px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <AppLink href="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1f6f95] transition hover:text-[#0b2532]">
            <span>←</span>
            Back to all services
          </AppLink>

          <div className="mt-7 grid border border-[#bfd5df] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="relative min-h-[24rem] overflow-hidden bg-[#081820] lg:min-h-full">
              <img src={service.image} alt={service.imageAlt} className="absolute inset-0 h-full w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-[#081820]/26" />
              <div className="absolute bottom-0 left-0 flex items-center gap-3 border-t border-r border-white/15 bg-[#081820]/88 px-5 py-4 text-white">
                <ServiceMenuIcon name={service.icon} size={23} className="text-[#76e0cf]" />
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">Clinical service</span>
              </div>
            </div>

            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f6f95]">Service overview</p>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0b2532] md:text-5xl">
                {service.introTitle}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#40545d]">
                {service.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <AppLink href="/contact" className="inline-flex items-center justify-center gap-2 border border-[#174766] bg-[#174766] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2532]">
                  Arrange a consultation
                  <ArrowIcon size={16} />
                </AppLink>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex items-center justify-center gap-2 border border-[#bfd5df] px-6 py-3 text-sm font-semibold text-[#174766] transition hover:border-[#174766]">
                  <Icon name="phone" size={15} />
                  WhatsApp practice
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Clinical scope" title={service.coverageTitle} subtitle="The exact assessment and care plan depend on the reason for your visit and the clinician’s findings.">
        <div className="grid border border-[#bfd5df] bg-[#bfd5df] md:grid-cols-2">
          {service.coverage.map(([title, detail], index) => (
            <article key={title} className={`bg-white p-6 md:p-7 ${index % 2 === 0 ? "md:border-r md:border-[#bfd5df]" : ""} ${index < service.coverage.length - 2 ? "border-b border-[#bfd5df]" : ""}`}>
              <div className="flex items-start gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-[#bfd5df] bg-[#eef7fa] text-[11px] font-semibold text-[#1f6f95]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0b2532]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#5a6d76]">{detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <section className="border-t border-[#bfd5df] bg-[#eef7fa] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1f6f95]">Patient journey</p>
          <div className="mt-5 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#0b2532] md:text-5xl">What to expect from the visit.</h2>
            <p className="max-w-md text-sm leading-7 text-[#5a6d76]">A structured pathway helps keep the consultation understandable from assessment through to follow-up.</p>
          </div>

          <div className="mt-10 grid border border-[#bfd5df] bg-white md:grid-cols-2 lg:grid-cols-4">
            {service.journey.map(([number, title, detail]) => (
              <article key={title} className="border-b border-[#bfd5df] p-6 md:border-r lg:border-b-0 lg:last:border-r-0">
                <p className="text-sm font-semibold text-[#1f6f95]">{number}</p>
                <h3 className="mt-4 text-xl font-semibold text-[#0b2532]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5a6d76]">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Section eyebrow="Before your visit" title="A little preparation can make the consultation more useful.">
        <div className="grid border border-[#bfd5df] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="bg-white p-7 md:p-9">
            <div className="grid gap-0 border border-[#bfd5df]">
              {service.prepare.map((item, index) => (
                <div key={item} className="grid grid-cols-[3.4rem_1fr] border-b border-[#bfd5df] last:border-b-0">
                  <div className="flex items-center justify-center bg-[#eef7fa] text-xs font-semibold text-[#1f6f95]">{String(index + 1).padStart(2, "0")}</div>
                  <p className="p-4 text-sm leading-7 text-[#40545d]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="bg-[#0b2532] p-7 text-white md:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#58d6c2]">Clinical note</p>
            <p className="mt-5 text-base leading-8 text-white/70">{service.note}</p>
            <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-7 text-white/48">
              Questions before booking can be discussed with the practice by phone or WhatsApp.
            </div>
          </aside>
        </div>
      </Section>

      <section className="border-t border-white/10 bg-[#081820] px-6 py-14 text-white lg:px-10 lg:py-18">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#58d6c2]">Next step</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">Ready to discuss this service with the practice?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <AppLink href="/contact" className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 text-sm font-semibold text-[#081820] transition hover:bg-[#eef7fa]">
              Book appointment
              <ArrowIcon size={16} />
            </AppLink>
            <AppLink href="/services" className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#58d6c2]">
              View all services
            </AppLink>
          </div>
        </div>
      </section>
    </>
  );
}

function GeneralMedicalConsultationsPage() {
  return <ClinicalServiceDetailPage service={clinicalServicePageContent.general} />;
}

function PreventativeProceduralCarePage() {
  return <ClinicalServiceDetailPage service={clinicalServicePageContent.prevention} />;
}

function WomensHealthPage() {
  return <ClinicalServiceDetailPage service={clinicalServicePageContent.womensHealth} />;
}

'''

page_marker = "function FreeMaleCircumcisionPage() {"
if "function ClinicalServiceDetailPage(" not in text:
    if page_marker not in text:
        raise SystemExit("service page insertion marker not found")
    text = text.replace(page_marker, service_pages + page_marker, 1)

route_marker = '''    "/": <HomePage />,
    "/about": <AboutPage />,    "/services": <ServicesPage />,
  "/free-male-circumcision": <FreeMaleCircumcisionPage />,'''
route_replacement = '''    "/": <HomePage />,
    "/about": <AboutPage />,    "/services": <ServicesPage />,
    "/services/general-medical-consultations": <GeneralMedicalConsultationsPage />,
    "/services/preventative-procedural-care": <PreventativeProceduralCarePage />,
    "/services/womens-health": <WomensHealthPage />,
  "/free-male-circumcision": <FreeMaleCircumcisionPage />,'''
if route_marker not in text:
    raise SystemExit("route marker not found")
text = text.replace(route_marker, route_replacement, 1)

path.write_text(text, encoding="utf-8")
print("Applied service detail pages")
