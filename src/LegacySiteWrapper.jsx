import React from "react";
import { createPortal } from "react-dom";
import DrMukuduHomepage from "./DrMukuduHomepage";
import "./legacy-enhancements.css";

const WHATSAPP_NUMBER = "27615471346";
const PATIENT_APP = "https://patient.drmukudu.co.za/install";

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function CompactSubscription() {
  return (
    <section className="legacy-subscription-mini" aria-labelledby="home-medkulula-title">
      <div className="legacy-subscription-mini__inner">
        <div className="legacy-subscription-mini__copy">
          <p className="legacy-subscription-mini__eyebrow">Optional subscription care</p>
          <h2 id="home-medkulula-title">MedKulula</h2>
          <p>
            For patients who prefer predictable monthly access to primary healthcare. The plan remains available without taking focus away from the practice&apos;s core clinical services.
          </p>
        </div>

        <div className="legacy-subscription-mini__plans" aria-label="MedKulula monthly options">
          <span><strong>R300</strong> Individual</span>
          <span><strong>R380</strong> + Dependant</span>
          <span><strong>R200</strong> Student</span>
        </div>

        <a className="legacy-subscription-mini__link" href="/medkulula">
          View subscription options <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  );
}

const serviceBookingMessages = {
  "/services/general-medical-consultations": "Good day, Dr Mukudu & Partners. I would like to arrange a general medical consultation.",
  "/services/preventative-procedural-care": "Good day, Dr Mukudu & Partners. I would like to arrange a preventative or procedural care consultation.",
  "/services/womens-health": "Good day, Dr Mukudu & Partners. I would like to arrange a women's health consultation.",
};

export default function LegacySiteWrapper() {
  const [subscriptionMount, setSubscriptionMount] = React.useState(null);

  React.useEffect(() => {
    let frame = 0;

    const applyEnhancements = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
        const sections = Array.from(document.querySelectorAll("section"));
        const oldSubscription = sections.find((section) => {
          const text = section.textContent || "";
          return text.includes("Subscription care") && text.includes("MedKulula Subscription");
        });

        if (pathname === "/") {
          if (oldSubscription) {
            oldSubscription.style.display = "none";
            oldSubscription.setAttribute("aria-hidden", "true");
          }

          const footer = document.querySelector("footer");
          if (footer?.parentNode) {
            let mount = document.getElementById("legacy-home-subscription-mount");
            if (!mount) {
              mount = document.createElement("div");
              mount.id = "legacy-home-subscription-mount";
              footer.parentNode.insertBefore(mount, footer);
            }
            setSubscriptionMount((current) => (current === mount ? current : mount));
          }

          const bookingLinks = Array.from(document.querySelectorAll("a")).filter((link) =>
            /book appointment/i.test(link.textContent || ""),
          );
          bookingLinks.forEach((link) => {
            link.href = whatsappUrl("Good day, Dr Mukudu & Partners. I would like to make an appointment enquiry.");
            link.target = "_blank";
            link.rel = "noopener noreferrer";
          });
        } else {
          if (oldSubscription) {
            oldSubscription.style.display = "";
            oldSubscription.removeAttribute("aria-hidden");
          }
          const mount = document.getElementById("legacy-home-subscription-mount");
          if (mount) mount.remove();
          setSubscriptionMount(null);
        }

        const bookingMessage = serviceBookingMessages[pathname];
        if (bookingMessage) {
          Array.from(document.querySelectorAll("a")).forEach((link) => {
            if (/arrange a consultation/i.test(link.textContent || "")) {
              link.href = whatsappUrl(bookingMessage);
              link.target = "_blank";
              link.rel = "noopener noreferrer";
            }
          });
        }

        const mobileActionBar = Array.from(document.querySelectorAll("div.fixed")).find((node) =>
          node.className.includes("bottom-0"),
        );
        if (mobileActionBar) {
          const directionsLink = Array.from(mobileActionBar.querySelectorAll("a")).find((link) =>
            /^directions$/i.test((link.textContent || "").trim()),
          );
          if (directionsLink) {
            directionsLink.href = PATIENT_APP;
            directionsLink.textContent = "Patient App";
            directionsLink.target = "_blank";
            directionsLink.rel = "noopener noreferrer";
          }
        }
      });
    };

    const root = document.getElementById("root");
    const observer = new MutationObserver(applyEnhancements);
    if (root) observer.observe(root, { childList: true, subtree: true });

    window.addEventListener("popstate", applyEnhancements);
    applyEnhancements();

    return () => {
      observer.disconnect();
      window.removeEventListener("popstate", applyEnhancements);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <DrMukuduHomepage />
      {subscriptionMount ? createPortal(<CompactSubscription />, subscriptionMount) : null}
    </>
  );
}
