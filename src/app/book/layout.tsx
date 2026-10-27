import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "احجز فحص واستشارة سيو مجانية لموقعك | أسامة الجندي | Book Free SEO Audit",
  description:
    "احجز فحص سيو مجاني شامل واستشارة متخصصة لمتجرك أو موقعك مع أسامة الجندي. كشف الأخطاء التقنية، سرعة Core Web Vitals، فجوات الكلمات المفتاحية، وتصدر محركات الذكاء الاصطناعي GEO.",
  alternates: {
    canonical: "https://osamaelgendy.com/book",
  },
  openGraph: {
    title: "احجز فحص واستشارة سيو مجانية لموقعك | أسامة الجندي",
    description:
      "احصل على فحص سيو تقني شامل وخطة عمل لزيادة مبيعات وزيارات متجرك أو موقعك في السعودية والخليج.",
    url: "https://osamaelgendy.com/book",
    siteName: "Osama Elgendy Portfolio",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Book Free SEO Audit - Osama Elgendy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "احجز فحص واستشارة سيو مجانية | أسامة الجندي",
    description:
      "احصل على فحص سيو تقني شامل وخطة عمل لزيادة مبيعات وزيارات متجرك أو موقعك.",
    images: ["/images/og-banner.jpg"],
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
