export const WHATSAPP_NUMBER = "27000000000";
export const DISPLAY_PHONE = "[Insert Number]";
export const LOCATION = "Tulisa Park, Johannesburg";

export const heroSlides = [
  {
    text: "Private medical care with clarity, discretion and compassion.",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2200&auto=format&fit=crop",
  },
  {
    text: "Patient-centred healthcare for individuals and families.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2200&auto=format&fit=crop",
  },
  {
    text: "Reliable clinical care, close to home.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=2200&auto=format&fit=crop",
  },
];

export const services = [
  {
    title: "GP Consultation",
    description:
      "Comprehensive consultations delivered with efficiency, clinical precision, and up-to-date medical knowledge.",
  },
  {
    title: "Medical Male Circumcision",
    description:
      "Safe, medically supervised procedures supporting preventative health and long-term wellbeing.",
  },
  {
    title: "Women's Health",
    description:
      "Thoughtful, patient-centred care addressing reproductive health and overall wellbeing at every stage of life.",
  },
];

export const approachItems = [
  {
    title: "Technology",
    description: "Advanced diagnostics and digital health tools.",
  },
  {
    title: "Growth",
    description: "Continuous professional development and learning.",
  },
  {
    title: "Holistic Care",
    description: "Supporting physical, mental and emotional wellbeing.",
  },
];

export const collaborativeCare = [
  "Dietician",
  "Physiotherapy",
  "Clinical Psychologist - Monareng Moropa Psychology Practice",
];

export function validateHomepageContent() {
  return {
    hasThreeHeroSlides: heroSlides.length === 3,
    hasHeroImages: heroSlides.every((slide) => Boolean(slide.image)),
    hasHeroText: heroSlides.every((slide) => Boolean(slide.text)),
    hasThreeServices: services.length === 3,
    hasThreeApproachItems: approachItems.length === 3,
    hasCollaborativeCare: collaborativeCare.length === 3,
    hasLocation: LOCATION.includes("Tulisa Park"),
    hasPhonePlaceholder: DISPLAY_PHONE.includes("Insert Number"),
  };
}
