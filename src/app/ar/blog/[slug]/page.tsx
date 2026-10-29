import React from "react";
import type { Metadata } from "next";
import {
  getAllInitialArticles,
  getInitialArticleBySlug,
} from "@/lib/articles-data";
import { ArticleView } from "@/components/ArticleView";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllInitialArticles().filter((a) => a.lang === "ar");
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = getInitialArticleBySlug(decodedSlug, "ar");

  if (!article) {
    return {
      title: "المقال غير موجود | أسامة الجندي",
    };
  }

  const title = article.metaTitle || `${article.title} | أسامة الجندي`;
  const description = article.metaDescription || article.excerpt;
  const canonicalUrl = `https://osama-elgendy-portfolio.vercel.app/ar/blog/${encodeURIComponent(article.slug)}`;
  const alternateSlug = article.alternateSlug || article.slug;
  const ogImageUrl = article.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://osama-elgendy-portfolio.vercel.app${article.featuredImage}`;

  return {
    title,
    description,
    keywords: [article.focusKeyword, ...article.tags],
    authors: [{ name: "أسامة الجندي", url: "https://osama-elgendy-portfolio.vercel.app" }],
    creator: "أسامة الجندي",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://osama-elgendy-portfolio.vercel.app/blog/${alternateSlug}`,
        ar: canonicalUrl,
        "x-default": `https://osama-elgendy-portfolio.vercel.app/blog/${alternateSlug}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: "موقع أسامة الجندي",
      locale: "ar_SA",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: ["https://osama-elgendy-portfolio.vercel.app"],
      tags: article.tags,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
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
  };
}

export default async function ArabicArticleSinglePage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = getInitialArticleBySlug(decodedSlug, "ar");

  const canonicalUrl = `https://osama-elgendy-portfolio.vercel.app/ar/blog/${encodeURIComponent(slug)}`;
  const fullFeaturedImage = article?.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://osama-elgendy-portfolio.vercel.app${article?.featuredImage || "/images/nextjs-technical-seo.jpg"}`;

  // 1. JSON-LD BlogPosting / TechArticle Schema (Arabic)
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: article.title,
        description: article.metaDescription || article.excerpt,
        image: [fullFeaturedImage],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        inLanguage: "ar",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        author: {
          "@type": "Person",
          name: "أسامة الجندي",
          jobTitle: "قائد فريق السيو وخبير سيو المتاجر الإلكترونية",
          url: "https://osama-elgendy-portfolio.vercel.app",
        },
        publisher: {
          "@type": "Organization",
          name: "استشارات أسامة الجندي للسيو",
          url: "https://osama-elgendy-portfolio.vercel.app",
          logo: {
            "@type": "ImageObject",
            url: "https://osama-elgendy-portfolio.vercel.app/images/og-banner.jpg",
          },
        },
        keywords: article.tags.join(", "),
        articleSection: article.category,
      }
    : null;

  // 2. JSON-LD BreadcrumbList Schema (Arabic)
  const breadcrumbSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "الرئيسية",
            item: "https://osama-elgendy-portfolio.vercel.app/ar",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "المدونة",
            item: "https://osama-elgendy-portfolio.vercel.app/ar/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.category,
            item: `https://osama-elgendy-portfolio.vercel.app/ar/blog?category=${encodeURIComponent(
              article.category
            )}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: article.title,
            item: canonicalUrl,
          },
        ],
      }
    : null;

  // 3. JSON-LD FAQPage Schema (if FAQ items exist)
  const faqSchema =
    article?.faqItems && article.faqItems.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqItems.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <ArticleView initialArticle={article} slug={slug} lang="ar" />
    </>
  );
}

