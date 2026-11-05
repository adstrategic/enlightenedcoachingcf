export type Locale = "es" | "en";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    areas: string;
    purpose: string;
    sessions: string;
    about: string;
    blog: string;
    contact: string;
    cta: string;
  };
  hero: {
    brand: string;
    tagline: string;
    support: string;
    cta: string;
  };
  testimonial: {
    title: string;
    quote: string;
    recommend: string;
    closing: string;
  };
  areas: {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
    vipassana: string;
  };
  purpose: {
    title: string;
    intro: string;
    promise: string;
    statsTitle: string;
    rows: { action: string; probability: string }[];
  };
  sessions: {
    title: string;
    body: string;
    cta: string;
  };
  about: {
    title: string;
    welcome: string;
    bio: string;
    trajectory: string;
    closing: string;
  };
  booking: {
    title: string;
    body: string;
    iframeTitle: string;
  };
  contact: {
    title: string;
    ready: string;
    phone: string;
    email: string;
  };
  footer: {
    stay: string;
    questions: string;
    rights: string;
  };
};
