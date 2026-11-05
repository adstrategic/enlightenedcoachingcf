export const siteConfig = {
  name: "Enlightened Coaching",
  coach: "Claudia Forero",
  phone: "786-277-6582",
  phoneHref: "tel:+17862776582",
  /** Opens WhatsApp chat (E.164 without +): https://wa.me/<country><number> */
  whatsappHref: "https://wa.me/17862776582",
  email: "info@enlightenedcoachingcf.com",
  emailHref: "mailto:info@enlightenedcoachingcf.com",
  url: "https://www.enlightenedcoachingcf.com",
  blogUrl: "https://enlightenedcoachingcf.substack.com/archive",
  calUrl:
    process.env.NEXT_PUBLIC_CAL_URL ??
    "https://cal.com/adstrategic-mml9qb/30min",
} as const;
