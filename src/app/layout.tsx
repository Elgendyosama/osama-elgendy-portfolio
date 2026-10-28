import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { LanguageHtmlHandler } from "@/components/LanguageHtmlHandler";

// Modern typography system font stack with Arabic typography support


export const metadata: Metadata = {
  metadataBase: new URL("https://osamaelgendy.com"),
  title: "Osama Elgendy | SEO Team Leader & E-Commerce SEO Specialist",
  description:
    "Senior SEO Team Leader & E-Commerce SEO Specialist with 6+ years scaling organic traffic and revenue for 120+ sites and 50+ stores in Saudi Arabia & Middle East. Proven Technical SEO, GEO/AEO, and GSC growth.",
  keywords: [
    "Osama Elgendy",
    "SEO Team Leader",
    "E-Commerce SEO Specialist",
    "Saudi Arabia SEO Expert",
    "Salla SEO",
    "Zid SEO",
    "Shopify SEO",
    "Technical SEO Audit",
    "Core Web Vitals",
    "Generative Engine Optimization",
    "GEO",
    "AEO",
    "Google Search Console Expert",
    "خبير سيو متاجر سلة وزد",
    "قائد فريق السيو أسامة الجندي",
  ],
  authors: [{ name: "Osama Elgendy", url: "https://osamaelgendy.com" }],
  creator: "Osama Elgendy",
  alternates: {
    canonical: "https://osamaelgendy.com",
    languages: {
      en: "https://osamaelgendy.com",
      ar: "https://osamaelgendy.com/ar",
      "x-default": "https://osamaelgendy.com",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "ar_EG"],
    url: "https://osamaelgendy.com",
    title: "Osama Elgendy | SEO Team Leader & E-Commerce SEO Specialist",
    description:
      "Proven organic growth for 120+ websites & 50+ stores. Technical SEO, E-Commerce revenue scaling, and AI Search Optimization.",
    siteName: "Osama Elgendy Portfolio",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Osama Elgendy - SEO Team Leader & E-Commerce SEO Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Elgendy | SEO Team Leader & E-Commerce SEO Specialist",
    description:
      "Proven organic growth for 120+ websites & 50+ stores. Technical SEO, E-Commerce revenue scaling, and AI Search Optimization.",
    images: ["/images/og-banner.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-osama-elgendy-verified",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const pathname = headerList.get("x-pathname") || "";
  const isAr = pathname.startsWith("/ar");

  const jsonLdPerson = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Osama Elgendy",
    alternateName: ["Osama Saleh", "Osama Saleh Hussine"],
    jobTitle: "SEO Team Leader & E-Commerce SEO Specialist",
    description:
      "Senior SEO Team Leader & E-Commerce SEO Specialist with 6+ years scaling organic traffic and revenue for 120+ sites and 50+ stores in Saudi Arabia & Middle East.",
    email: "osamasalehelgendy@gmail.com",
    telephone: "+201005647312",
    image: "https://osamaelgendy.com/images/osama-elgendy.jpg",
    nationality: "Egyptian",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Semrush Academy",
      },
    ],
    knowsAbout: [
      "Technical SEO",
      "E-Commerce SEO",
      "Core Web Vitals",
      "Google Search Console",
      "Salla SEO",
      "Zid SEO",
      "Shopify SEO",
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Link Building",
      "Google Analytics 4",
      "Semrush",
      "Ahrefs",
      "Screaming Frog",
    ],
  };

  const jsonLdService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Osama Elgendy - SEO Team Leader & E-Commerce SEO Services",
    image: "https://osamaelgendy.com/images/og-banner.jpg",
    url: "https://osamaelgendy.com",
    telephone: "+201005647312",
    email: "osamasalehelgendy@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "EG",
    },
    areaServed: [
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Egypt" },
      { "@type": "AdministrativeArea", name: "Middle East" },
    ],
    serviceType: [
      "Deep Technical SEO Audits",
      "E-Commerce SEO Optimization",
      "Generative Engine Optimization (GEO)",
      "Core Web Vitals Engineering",
      "Link Building & Digital PR",
    ],
  };

  return (
    <html
      lang={isAr ? "ar" : "en"}
      dir={isAr ? "rtl" : "ltr"}
      className="dark scroll-smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body
        className={`bg-[#060913] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-black antialiased ${
          isAr ? "font-arabic" : "font-sans"
        }`}
      >
        <LanguageHtmlHandler />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
