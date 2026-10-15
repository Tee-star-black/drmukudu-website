import React from "react";
import "./patient-access-controls.css";

const PATIENT_APP_URL = "https://patient.drmukudu.co.za/install";
const CONSENT_KEY = "drmukudu_cookie_consent_v2";
const ANALYTICS_ID = "G-21WWHMKVBT";

function enableOptionalAnalytics() {
  if (window.__drMukuduAnalyticsLoaded) return;

  window.__drMukuduAnalyticsLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  window.gtag("config", ANALYTICS_ID, { anonymize_ip: true });

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + ANALYTICS_ID;
  document.head.appendChild(script);
}

function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function saveConsent(choice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Keep the controls usable in browsers that block local storage.
  }
}

/**
 * Shared patient utilities, independent of whichever page design is active.
 * Analytics is deliberately not loaded until a visitor opts in.
 */
export default function PatientAccessControls() {
  const [isConsentOpen, setIsConsentOpen] = React.useState(false);

  React.useEffect(() => {
    const previousChoice = readConsent();
    if (previousChoice === "accepted") {
      enableOptionalAnalytics();
    } else if (previousChoice !== "rejected") {
      setIsConsentOpen(true);
    }
  }, []);

  function selectConsent(choice) {
    saveConsent(choice);
    setIsConsentOpen(false);
    if (choice === "accepted") enableOptionalAnalytics();
  }

  return (
    <>
      <a
        className="drm-patient-app-desktop"
        href={PATIENT_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get the Dr Mukudu patient app"
      >
        <svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <path d="M10 6h4M12 18h.01" />
        </svg>
        Get Patient App
        <span aria-hidden="true">↗</span>
      </a>

      {isConsentOpen ? (
        <section
          className="drm-cookie-banner"
          role="dialog"
          aria-label="Cookie preferences"
          aria-describedby="drm-cookie-description"
        >
          <div>
            <h2>Your privacy matters</h2>
            <p id="drm-cookie-description">
              We use essential storage to remember your choice. Optional analytics
              helps us improve the website and only loads with your permission.{" "}
              <a href="/cookie-policy">Read our Cookie Policy</a>.
            </p>
          </div>
          <div className="drm-cookie-actions">
            <button type="button" onClick={() => selectConsent("rejected")}>
              Reject optional
            </button>
            <button
              type="button"
              className="drm-cookie-accept"
              onClick={() => selectConsent("accepted")}
            >
              Accept analytics
            </button>
          </div>
        </section>
      ) : (
        <button
          type="button"
          className="drm-cookie-settings"
          onClick={() => setIsConsentOpen(true)}
          aria-label="Change cookie preferences"
        >
          Cookie settings
        </button>
      )}
    </>
  );
}
