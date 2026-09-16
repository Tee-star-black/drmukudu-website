from pathlib import Path

path = Path("src/DrMukuduHomepage.jsx")
text = path.read_text(encoding="utf-8")

old_service_items = '''const serviceNavItems = [
  { label: "All services", href: "/services", index: "00" },
  { label: "General medical consultations", href: "/services#general-medical-consultations", index: "01" },
  { label: "Preventative & procedural care", href: "/services#preventative-procedural-care", index: "02" },
  { label: "Women’s health", href: "/services#womens-health", index: "03" },
  { label: "Free male circumcision", href: "/free-male-circumcision", index: "04" },
];'''

new_service_items = '''const serviceNavItems = [
  {
    label: "All services",
    href: "/services",
    index: "00",
    icon: "overview",
    description: "Explore the full clinical offering and patient pathways.",
  },
  {
    label: "General medical consultations",
    href: "/services#general-medical-consultations",
    index: "01",
    icon: "consultation",
    description: "Check-ups, acute illness, chronic monitoring and follow-up.",
  },
  {
    label: "Preventative & procedural care",
    href: "/services#preventative-procedural-care",
    index: "02",
    icon: "prevention",
    description: "Screening, minor procedures, immunisations and structured aftercare.",
  },
  {
    label: "Women’s health",
    href: "/services#womens-health",
    index: "03",
    icon: "womens-health",
    description: "Screening, reproductive, maternal and hormonal health support.",
  },
  {
    label: "Free male circumcision",
    href: "/free-male-circumcision",
    index: "04",
    icon: "male-health",
    description: "Free VMMC consultation, procedure guidance and follow-up care.",
  },
];'''

if old_service_items not in text:
    raise SystemExit("serviceNavItems block not found")
text = text.replace(old_service_items, new_service_items, 1)

icon_component = r'''
function ServiceMenuIcon({ name, size = 24, className = "" }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.55",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
  };

  const icons = {
    overview: (
      <svg {...props}>
        <path d="M4 5.5h6v5H4z" />
        <path d="M14 5.5h6v5h-6z" />
        <path d="M4 14h6v4.5H4z" />
        <path d="M14 14h6v4.5h-6z" />
        <path d="M7 8h0.01M17 8h0.01M7 16.2h0.01M17 16.2h0.01" />
      </svg>
    ),
    consultation: (
      <svg {...props}>
        <path d="M7 3v5a5 5 0 0 0 10 0V3" />
        <path d="M5 3h4M15 3h4" />
        <path d="M12 13v2.5a4.5 4.5 0 0 0 9 0v-1" />
        <circle cx="20" cy="12.5" r="1.5" />
      </svg>
    ),
    prevention: (
      <svg {...props}>
        <path d="M12 3 5.5 5.6v5.8c0 4.2 2.6 7.5 6.5 9.6 3.9-2.1 6.5-5.4 6.5-9.6V5.6L12 3Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    "womens-health": (
      <svg {...props}>
        <circle cx="11" cy="9" r="5" />
        <path d="M11 14v7M8 18h6" />
        <path d="M15.5 5.5 18 3M17 3h1v1" />
      </svg>
    ),
    "male-health": (
      <svg {...props}>
        <circle cx="9.5" cy="13.5" r="4.5" />
        <path d="m13 10 6-6M15 4h4v4" />
        <path d="m7.8 13.7 1.2 1.2 2.4-2.7" />
      </svg>
    ),
  };

  return icons[name] || icons.overview;
}
'''

if "function ServiceMenuIcon(" not in text:
    marker = "function Header() {"
    if marker not in text:
        raise SystemExit("Header marker not found")
    text = text.replace(marker, icon_component + "\n" + marker, 1)

start_marker = '''            if (isServices) {
'''
end_marker = '''            return (
              <AppLink
'''
start = text.find(start_marker)
if start == -1:
    raise SystemExit("desktop services block start not found")
end = text.find(end_marker, start)
if end == -1:
    raise SystemExit("desktop services block end not found")

desktop_block = r'''            if (isServices) {
              const featuredServices = serviceNavItems.filter((service) => service.index !== "00");

              return (
                <div key={item.label} className="group relative">
                  <AppLink
                    href={item.href}
                    className={`relative inline-flex items-center gap-1.5 whitespace-nowrap py-2 text-[12.5px] font-medium tracking-[0.005em] transition-colors ${
                      pathname === "/services" ? "text-white" : "text-white/62 hover:text-white"
                    }`}
                    aria-haspopup="true"
                  >
                    <span>Services</span>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="mt-px transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                    >
                      <path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span
                      className={`absolute inset-x-0 -bottom-[3px] h-px origin-left bg-[#58d6c2] transition-transform duration-300 ${
                        pathname === "/services" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100"
                      }`}
                      aria-hidden="true"
                    />
                  </AppLink>

                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[46rem] -translate-x-[43%] pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden border-t border-white/12 bg-[#081820]/98 shadow-[0_30px_80px_rgba(0,0,0,0.36)] backdrop-blur-2xl">
                      <div className="grid grid-cols-[0.78fr_1.72fr]">
                        <div className="relative border-r border-white/[0.08] p-7">
                          <div className="absolute right-0 top-0 h-24 w-px bg-[#58d6c2]/55" aria-hidden="true" />
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#58d6c2]">
                            Clinical services
                          </p>
                          <h3 className="mt-4 max-w-[13rem] text-xl font-semibold leading-tight tracking-[-0.03em] text-white">
                            Care organised around real patient needs.
                          </h3>
                          <p className="mt-4 max-w-[15rem] text-[12px] leading-5 text-white/48">
                            Consultations, prevention, procedures and focused programmes with clear clinical pathways.
                          </p>
                          <AppLink
                            href="/services"
                            className="mt-7 inline-flex items-center gap-2 text-[12px] font-semibold text-white transition hover:text-[#76e0cf]"
                          >
                            View all services
                            <span className="text-[#58d6c2]">→</span>
                          </AppLink>

                          <div className="mt-7 flex items-center gap-2 border-t border-white/[0.08] pt-5 text-[10px] uppercase tracking-[0.12em] text-white/30">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#58d6c2]" />
                            Patient-centred care
                          </div>
                        </div>

                        <div className="grid grid-cols-2">
                          {featuredServices.map((service, serviceIndex) => (
                            <AppLink
                              key={service.label}
                              href={service.href}
                              className={`group/service relative min-h-[9.5rem] p-6 transition-colors hover:bg-white/[0.035] ${
                                serviceIndex % 2 === 0 ? "border-r border-white/[0.08]" : ""
                              } ${serviceIndex < 2 ? "border-b border-white/[0.08]" : ""}`}
                            >
                              <div className="flex items-start justify-between gap-4">
                                <ServiceMenuIcon
                                  name={service.icon}
                                  size={25}
                                  className={`transition-colors ${
                                    service.icon === "male-health"
                                      ? "text-[#76e0cf]"
                                      : "text-white/58 group-hover/service:text-[#76e0cf]"
                                  }`}
                                />
                                <span className="text-[10px] font-medium text-white/20">
                                  {service.index}
                                </span>
                              </div>

                              <div className="mt-5 pr-4">
                                <h4 className={`text-[13px] font-semibold leading-5 transition-colors ${
                                  service.icon === "male-health"
                                    ? "text-[#76e0cf] group-hover/service:text-white"
                                    : "text-white/82 group-hover/service:text-white"
                                }`}>
                                  {service.label}
                                </h4>
                                <p className="mt-2 text-[11px] leading-[1.55] text-white/40 transition-colors group-hover/service:text-white/55">
                                  {service.description}
                                </p>
                              </div>

                              <span className="absolute bottom-5 right-5 -translate-x-1 text-[14px] text-white/18 opacity-0 transition-all group-hover/service:translate-x-0 group-hover/service:text-[#58d6c2] group-hover/service:opacity-100">
                                →
                              </span>
                            </AppLink>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/[0.08] px-7 py-3.5 text-[10px] text-white/28">
                        <span>Dr Mukudu & Partners · Johannesburg South</span>
                        <span className="text-white/36">Assessment · Treatment · Follow-up</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

'''
text = text[:start] + desktop_block + text[end:]

mobile_start_marker = '''                if (isServices) {
'''
mobile_end_marker = '''                return (
                  <AppLink
'''
mobile_root = text.find('aria-label="Mobile navigation"')
mobile_start = text.find(mobile_start_marker, mobile_root)
if mobile_start == -1:
    raise SystemExit("mobile services block start not found")
mobile_end = text.find(mobile_end_marker, mobile_start)
if mobile_end == -1:
    raise SystemExit("mobile services block end not found")

mobile_block = r'''                if (isServices) {
                  return (
                    <details key={item.label} className="group/services border-b border-white/[0.07]" open={pathname === "/services" ? true : undefined}>
                      <summary className={`flex cursor-pointer list-none items-center justify-between py-3.5 text-sm transition-colors [&::-webkit-details-marker]:hidden ${
                        pathname === "/services" ? "text-white" : "text-white/68"
                      }`}>
                        <span className="flex items-center gap-2.5">
                          <ServiceMenuIcon name="overview" size={17} className="text-[#58d6c2]" />
                          Services
                        </span>
                        <span className="text-white/30 transition-transform duration-200 group-open/services:rotate-180">⌄</span>
                      </summary>

                      <div className="pb-3 pl-1">
                        {serviceNavItems.map((service) => (
                          <AppLink
                            key={service.label}
                            href={service.href}
                            onClick={() => setMenuOpen(false)}
                            className="group/mobile-service flex items-start gap-3 border-t border-white/[0.06] py-3.5"
                          >
                            <ServiceMenuIcon
                              name={service.icon}
                              size={19}
                              className={`mt-0.5 shrink-0 ${
                                service.icon === "male-health" ? "text-[#76e0cf]" : "text-white/42"
                              }`}
                            />
                            <span className="min-w-0">
                              <span className={`block text-[13px] font-medium ${
                                service.icon === "male-health" ? "text-[#76e0cf]" : "text-white/72"
                              }`}>
                                {service.label}
                              </span>
                              <span className="mt-1 block text-[11px] leading-4 text-white/34">
                                {service.description}
                              </span>
                            </span>
                            <span className="ml-auto pt-0.5 text-white/20 transition group-hover/mobile-service:text-[#58d6c2]">
                              →
                            </span>
                          </AppLink>
                        ))}
                      </div>
                    </details>
                  );
                }

'''
text = text[:mobile_start] + mobile_block + text[mobile_end:]

path.write_text(text, encoding="utf-8")
