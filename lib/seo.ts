import { siteConfig } from "./config";

export const seo = {
  title:
    "Life Coach Espiritual en Miami | Enlightened Coaching — Claudia Forero",
  titleEn:
    "Spiritual Life Coach in Miami | Enlightened Coaching — Claudia Forero",
  description:
    "Claudia Forero, life coach espiritual certificada en Miami. Crea tu plan de vida para equilibrar familia, trabajo, espiritualidad e intereses. Agenda tu sesión.",
  descriptionEn:
    "Claudia Forero, certified spiritual life coach in Miami. Build a life plan to balance family, work, spirituality, and your passions. Book your session.",
  keywords: [
    "life coach Miami",
    "coaching espiritual Miami",
    "life coach espiritual",
    "Claudia Forero",
    "Enlightened Coaching",
    "spiritual life coach Miami",
    "coach de vida Miami",
    "life coach hispano Miami",
    "coaching personal Miami",
    "life script coaching",
  ],
  locale: "es_US",
  alternateLocale: "en_US",
  ogImageAlt:
    "Enlightened Coaching — Claudia Forero. To reach your goals / Para alcanzar sus metas",
} as const;

export function buildJsonLd() {
  const logoUrl = `${siteConfig.url}/images/brand-banner.jpg`;
  const imageUrl = `${siteConfig.url}/images/claudia-forero-portrait.jpg`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: seo.description,
        inLanguage: ["es", "en"],
        publisher: { "@id": `${siteConfig.url}/#business` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${siteConfig.url}/#business`,
        name: siteConfig.name,
        url: siteConfig.url,
        image: [logoUrl, imageUrl],
        logo: logoUrl,
        description: seo.description,
        telephone: "+17862776582",
        email: siteConfig.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Miami",
          addressRegion: "FL",
          addressCountry: "US",
        },
        areaServed: [
          { "@type": "City", name: "Miami" },
          { "@type": "State", name: "Florida" },
          { "@type": "Country", name: "US" },
        ],
        availableLanguage: ["Spanish", "English"],
        founder: { "@id": `${siteConfig.url}/#claudia` },
        employee: { "@id": `${siteConfig.url}/#claudia` },
        sameAs: [siteConfig.blogUrl, siteConfig.whatsappHref],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+17862776582",
            contactType: "customer service",
            areaServed: "US",
            availableLanguage: ["Spanish", "English"],
          },
        ],
      },
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#claudia`,
        name: siteConfig.coach,
        jobTitle: "Life Coach espiritual certificada",
        worksFor: { "@id": `${siteConfig.url}/#business` },
        image: imageUrl,
        url: siteConfig.url,
        email: siteConfig.email,
        telephone: "+17862776582",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Miami",
          addressRegion: "FL",
          addressCountry: "US",
        },
        knowsLanguage: ["es", "en"],
        sameAs: [siteConfig.blogUrl],
      },
    ],
  };
}
