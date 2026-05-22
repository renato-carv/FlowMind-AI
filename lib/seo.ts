import type { Metadata } from "next";
import { SITE } from "./utils";

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  keywords: [
    "FlowMind",
    "FlowMind AI",
    "automação com IA",
    "orquestração de agentes",
    "workflow automation",
    "agentes de IA",
    "produtividade",
    "integrações",
    "low-code IA",
  ],
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    creator: "@flowmindai",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/apple-icon.png",
  },
};

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    sameAs: ["https://www.linkedin.com/company/flowmind-ai", "https://twitter.com/flowmindai"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: SITE.email,
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
  };
}

export function productJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: SITE.name,
    description: SITE.description,
    brand: { "@type": "Brand", name: SITE.name },
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "BRL",
      lowPrice: "0",
      highPrice: "1490",
      offerCount: "3",
      url: `${SITE.url}/#planos`,
    },
  };
}
