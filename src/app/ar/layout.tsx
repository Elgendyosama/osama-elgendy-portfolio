import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "متخصص سيو في السعودية | اسامة الجندي",
  description:
    "قائد فريق سيو وخبير سيو متاجر سلة، زد، شوبيفاي، وماجنتو بخبرة 6+ سنوات. تحسين أكثر من 120 موقعاً و50 متجراً في السعودية والخليج، وتصدر نتائج البحث ومحركات الذكاء الاصطناعي GEO.",
  keywords: [
    "أسامة الجندي",
    "متخصص سيو في السعودية | اسامة الجندي",
    "خبير سيو المتاجر الإلكترونية",
    "سيو سلة",
    "سيو زد",
    "سيو شوبيفاي",
    "فحص سيو تقني شامل",
    "مؤشرات أداء الويب Core Web Vitals",
    "سيو الذكاء الاصطناعي GEO",
    "خبير Search Console",
    "سيو المتاجر السعودية",
  ],
  alternates: {
    canonical: "https://osama-elgendy-portfolio.vercel.app/ar",
    languages: {
      en: "https://osama-elgendy-portfolio.vercel.app",
      ar: "https://osama-elgendy-portfolio.vercel.app/ar",
      "x-default": "https://osama-elgendy-portfolio.vercel.app",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://osama-elgendy-portfolio.vercel.app/ar",
    title: "متخصص سيو في السعودية | اسامة الجندي",
    description:
      "مضاعفة مبيعات وأرباح محركات البحث للشركات والمتاجر في السعودية والخليج العربي عبر السيو التقني المتقدم، وهندسة متاجر سلة وزد وشوبيفاي، وتصدر محركات الذكاء الاصطناعي (GEO / AEO).",
    siteName: "موقع أسامة الجندي",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "أسامة الجندي - قائد فريق السيو وخبير سيو المتاجر الإلكترونية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "متخصص سيو في السعودية | اسامة الجندي",
    description:
      "مضاعفة مبيعات وأرباح محركات البحث للشركات والمتاجر في السعودية والخليج العربي عبر السيو التقني المتقدم وسيو سلة وزد.",
    images: ["/images/og-banner.jpg"],
  },
};

export default function ArabicRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

