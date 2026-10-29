import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "مدونة السيو وهندسة محركات البحث | أسامة الجندي",
  description:
    "مقالات وأدلة عملية في السيو التقني، ومضاعفة مبيعات متاجر سلة وزد وشوبيفاي في السعودية والخليج، وتصدر محركات بحث الذكاء الاصطناعي (GEO و AEO).",
  alternates: {
    canonical: "https://osama-elgendy-portfolio.vercel.app/ar/blog",
    languages: {
      en: "https://osama-elgendy-portfolio.vercel.app/blog",
      ar: "https://osama-elgendy-portfolio.vercel.app/ar/blog",
      "x-default": "https://osama-elgendy-portfolio.vercel.app/blog",
    },
  },
  openGraph: {
    title: "مدونة السيو وهندسة محركات البحث | أسامة الجندي",
    description:
      "مقالات وأدلة عملية في السيو التقني، ومضاعفة مبيعات متاجر سلة وزد وشوبيفاي في السعودية والخليج، وتصدر محركات بحث الذكاء الاصطناعي (GEO و AEO).",
    url: "https://osama-elgendy-portfolio.vercel.app/ar/blog",
    siteName: "Osama Elgendy Portfolio",
    type: "website",
    locale: "ar_SA",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "مدونة أسامة الجندي للسيو واستراتيجيات التجارة الإلكترونية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مدونة السيو وهندسة محركات البحث | أسامة الجندي",
    description:
      "مقالات وأدلة عملية في السيو التقني، وسيو سلة وزد وشوبيفاي، وتصدر محركات بحث الذكاء الاصطناعي.",
    images: ["/images/og-banner.jpg"],
  },
};

export default function ArabicBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

