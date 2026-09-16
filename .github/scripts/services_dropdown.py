from pathlib import Path
import re

path = Path("src/DrMukuduHomepage.jsx")
text = path.read_text(encoding="utf-8")

nav_anchor = '''const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Free Male Circumcisions", href: "/free-male-circumcision", emphasis: true },
  { label: "MedKulula Subscription", href: "/medkulula" },
  { label: "Price List", href: "/price-list" },
  { label: "TeledoctorSA", href: "https://teledoctorsa.co.za/" },
];
'''
service_nav = nav_anchor + '''
const serviceNavItems = [
  { label: "All services", href: "/services", index: "00" },
  { label: "General medical consultations", href: "/services#general-medical-consultations", index: "01" },
  { label: "Preventative & procedural care", href: "/services#preventative-procedural-care", index: "02" },
  { label: "Women’s health", href: "/services#womens-health", index: "03" },
  { label: "Free male circumcision", href: "/free-male-circumcision", index: "04" },
];
'''
if nav_anchor not in text:
    raise SystemExit("navItems anchor not found")
text = text.replace(nav_anchor, service_nav, 1)

navigate_old = '''function navigateTo(href) {
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
'''
navigate_new = '''function navigateTo(href) {
  const hashIndex = href.indexOf("#");
  const targetId = hashIndex >= 0 ? href.slice(hashIndex + 1) : "";

  window.history.pushState({}, "", href);
  window.dispatchEvent(new Event("popstate"));

  if (targetId) {
    window.setTimeout(() => {
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
    return;
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function AppLink({ href, children, className = "", onClick, ...props }) {
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  function handleClick(event) {
    onClick?.(event);
    if (event.defaultPrevented || isExternal || !href.startsWith("/")) return;

    event.preventDefault();
    navigateTo(href);
  }

  return (
    <a href={href} onClick={handleClick} className={className} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined} {...props}>
      {children}
    </a>
  );
}
'''
if navigate_old not in text:
    raise SystemExit("navigate/AppLink anchor not found")
text = text.replace(navigate_old, navigate_new, 1)

header = r'''function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const pathname = window.location.pathname;

  React.useEffect(() => {
    function closeMenu() {
      setMenuOpen(false);
    }

    window.addEventListener("popstate", closeMenu);
    return () => window.removeEventListener("popstate", closeMenu);
  }, []);

  const desktopItems = navItems.map((item) => ({
    ...item,
    displayLabel:
      item.label === "MedKulula Subscription"
        ? "MedKulula"
        : item.label === "TeledoctorSA"
          ? "TDSA"
          : item.label === "Free Male Circumcisions"
            ? "Free Circumcision"
            : item.label,
  }));

  return (
    <header className="absolute left-0 right-0 top-0 z-50 border-b border-white/[0.08] bg-[#081820]/42 backdrop-blur-lg">
      <div className="mx-auto flex min-h-[76px] max-w-[94rem] items-center px-4 sm:px-6 lg:px-8 xl:px-10">
        <AppLink href="/" className="flex min-w-0 shrink-0 items-center gap-3 text-white">
          <img
            src={LOGO_SRC}
            alt="Dr Mukudu & Partners logo"
            className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
          />

          <span className="hidden sm:block">
            <span className="block whitespace-nowrap text-[13px] font-semibold tracking-[0.01em] text-white">
              Dr Mukudu & Partners
            </span>
            <span className="mt-0.5 hidden whitespace-nowrap text-[10px] tracking-[0.02em] text-white/42 2xl:block">
              Optimising Health, Optimising Growth
            </span>
          </span>
        </AppLink>

        <nav className="ml-auto hidden items-center gap-5 xl:flex" aria-label="Main navigation">
          {desktopItems.map((item) => {
            const isActive = pathname === item.href;
            const isCircumcision = item.label === "Free Male Circumcisions";
            const isExternal = item.href.startsWith("http");
            const isServices = item.label === "Services";

            if (isServices) {
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

                  <div className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[21rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100">
                    <div className="border-t border-white/12 bg-[#081820]/98 px-5 py-2 shadow-[0_22px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                      <div className="flex items-center justify-between border-b border-white/[0.08] py-3">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/34">
                          Clinical services
                        </span>
                        <span className="text-[10px] text-[#58d6c2]">Dr Mukudu & Partners</span>
                      </div>

                      {serviceNavItems.map((service) => (
                        <AppLink
                          key={service.label}
                          href={service.href}
                          className="group/service flex items-center gap-4 border-b border-white/[0.07] py-3.5 last:border-b-0"
                        >
                          <span className="w-5 shrink-0 text-[10px] font-medium text-white/28 transition group-hover/service:text-[#58d6c2]">
                            {service.index}
                          </span>
                          <span className={`text-[13px] transition-colors ${
                            service.label === "Free male circumcision"
                              ? "font-medium text-[#76e0cf] group-hover/service:text-white"
                              : "text-white/68 group-hover/service:text-white"
                          }`}>
                            {service.label}
                          </span>
                          <span className="ml-auto -translate-x-1 text-white/18 opacity-0 transition-all group-hover/service:translate-x-0 group-hover/service:text-white/55 group-hover/service:opacity-100">
                            →
                          </span>
                        </AppLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <AppLink
                key={item.label}
                href={item.href}
                className={`group relative inline-flex items-center gap-1.5 whitespace-nowrap py-2 text-[12.5px] font-medium tracking-[0.005em] transition-colors ${
                  isCircumcision
                    ? "text-[#76e0cf] hover:text-white"
                    : isActive
                      ? "text-white"
                      : "text-white/62 hover:text-white"
                }`}
              >
                {isCircumcision ? (
                  <span className="h-1.5 w-1.5 rounded-full bg-[#58d6c2]" aria-hidden="true" />
                ) : null}
                <span>{item.displayLabel}</span>
                {isExternal ? <span className="text-[10px] text-white/34">↗</span> : null}
                <span
                  className={`absolute inset-x-0 -bottom-[3px] h-px origin-left bg-[#58d6c2] transition-transform duration-300 ${
                    isActive || isCircumcision ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </AppLink>
            );
          })}

          <span className="h-4 w-px bg-white/12" aria-hidden="true" />

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            className="group inline-flex items-center gap-2 whitespace-nowrap py-2 text-[12.5px] font-medium text-white/66 transition-colors hover:text-white"
          >
            <Icon name="phone" size={14} className="text-[#58d6c2]" />
            <span>WhatsApp</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center text-white/85 transition hover:text-white xl:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-px w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-px w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-white/[0.08] bg-[#081820]/96 px-4 py-5 text-white backdrop-blur-xl sm:px-6 xl:hidden">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Mobile navigation">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                const isCircumcision = item.label === "Free Male Circumcisions";
                const isExternal = item.href.startsWith("http");
                const isServices = item.label === "Services";

                if (isServices) {
                  return (
                    <details key={item.label} className="group/services border-b border-white/[0.07]" open={pathname === "/services" ? true : undefined}>
                      <summary className={`flex cursor-pointer list-none items-center justify-between py-3.5 text-sm transition-colors [&::-webkit-details-marker]:hidden ${
                        pathname === "/services" ? "text-white" : "text-white/68"
                      }`}>
                        <span>Services</span>
                        <span className="text-white/30 transition-transform duration-200 group-open/services:rotate-180">⌄</span>
                      </summary>

                      <div className="pb-3 pl-4">
                        {serviceNavItems.map((service) => (
                          <AppLink
                            key={service.label}
                            href={service.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center gap-3 border-t border-white/[0.06] py-3 text-[13px] ${
                              service.label === "Free male circumcision"
                                ? "font-medium text-[#76e0cf]"
                                : "text-white/58 hover:text-white"
                            }`}
                          >
                            <span className="w-5 text-[10px] text-white/25">{service.index}</span>
                            <span>{service.label}</span>
                          </AppLink>
                        ))}
                      </div>
                    </details>
                  );
                }

                return (
                  <AppLink
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`group flex items-center justify-between py-3.5 text-sm transition-colors ${
                      index < navItems.length - 1 ? "border-b border-white/[0.07]" : ""
                    } ${
                      isCircumcision
                        ? "font-semibold text-[#76e0cf]"
                        : isActive
                          ? "text-white"
                          : "text-white/68 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      {isCircumcision ? <span className="h-1.5 w-1.5 rounded-full bg-[#58d6c2]" /> : null}
                      {item.label}
                    </span>
                    <span className="text-white/28 transition group-hover:text-white/55">
                      {isExternal ? "↗" : "→"}
                    </span>
                  </AppLink>
                );
              })}
            </nav>

            <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
              <a href={`tel:${PHONE_NUMBER}`} className="text-sm font-medium text-white/72 transition hover:text-white">
                {DISPLAY_PHONE}
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-[#76e0cf]">
                <Icon name="phone" size={15} className="text-[#58d6c2]" />
                WhatsApp practice
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}'''

pattern = r'function Header\(\) \{.*?\n\}\n\nfunction TrustLogoRail\(\) \{'
replacement = header + '\n\nfunction TrustLogoRail() {'
text, count = re.subn(pattern, replacement, text, count=1, flags=re.S)
if count != 1:
    raise SystemExit("Header replacement failed")

start = text.index("function ServicesPage()")
end = text.index("function FreeMaleCircumcisionPage()")
services_block = text[start:end]

general_open = '<section className="border-t border-[#bfd5df] bg-white px-6 py-16 lg:px-10 lg:py-24">'
procedure_open = '<section className="border-t border-[#bfd5df] bg-[#eef7fa] px-6 py-16 lg:px-10 lg:py-24">'

if services_block.count(general_open) < 2:
    raise SystemExit("Expected two white service sections")
if procedure_open not in services_block:
    raise SystemExit("Preventative section anchor not found")

services_block = services_block.replace(
    general_open,
    '<section id="general-medical-consultations" className="scroll-mt-24 border-t border-[#bfd5df] bg-white px-6 py-16 lg:px-10 lg:py-24">',
    1,
)
services_block = services_block.replace(
    procedure_open,
    '<section id="preventative-procedural-care" className="scroll-mt-24 border-t border-[#bfd5df] bg-[#eef7fa] px-6 py-16 lg:px-10 lg:py-24">',
    1,
)
services_block = services_block.replace(
    general_open,
    '<section id="womens-health" className="scroll-mt-24 border-t border-[#bfd5df] bg-white px-6 py-16 lg:px-10 lg:py-24">',
    1,
)

text = text[:start] + services_block + text[end:]
path.write_text(text, encoding="utf-8")
