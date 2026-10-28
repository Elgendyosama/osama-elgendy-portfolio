import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Blog & Technical Architecture Guides | Osama Elgendy",
  description:
    "Actionable technical SEO guides, Next.js optimization playbooks, E-Commerce revenue frameworks (Salla, Zid, Shopify), and Generative Engine Optimization (GEO/AEO) by Osama Elgendy.",
  alternates: {
    canonical: "https://osamaelgendy.com/blog",
    languages: {
      en: "https://osamaelgendy.com/blog",
      ar: "https://osamaelgendy.com/ar/blog",
      "x-default": "https://osamaelgendy.com/blog",
    },
  },
  openGraph: {
    title: "SEO Blog & Technical Architecture Guides | Osama Elgendy",
    description:
      "Actionable technical SEO guides, Next.js optimization playbooks, E-Commerce revenue frameworks (Salla, Zid, Shopify), and Generative Engine Optimization (GEO/AEO).",
    url: "https://osamaelgendy.com/blog",
    siteName: "Osama Elgendy Portfolio",
    type: "website",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Osama Elgendy SEO & Technical Architecture Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Blog & Technical Architecture Guides | Osama Elgendy",
    description:
      "Actionable technical SEO guides, Next.js optimization playbooks, E-Commerce revenue frameworks, and GEO/AEO insights.",
    images: ["/images/og-banner.jpg"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
