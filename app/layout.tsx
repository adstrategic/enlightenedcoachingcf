import type { Metadata } from "next";
import { Marcellus, PT_Serif, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { LanguageProvider } from "@/components/language-context";
import { siteConfig } from "@/lib/config";
import { seo } from "@/lib/seo";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: seo.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.coach, url: siteConfig.url }],
  creator: siteConfig.coach,
  publisher: siteConfig.name,
  category: "Life coaching",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "es-US": siteConfig.url,
      "en-US": siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: seo.locale,
    alternateLocale: [seo.alternateLocale],
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  other: {
    "geo.region": "US-FL",
    "geo.placename": "Miami",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${ptSerif.variable} ${marcellus.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
