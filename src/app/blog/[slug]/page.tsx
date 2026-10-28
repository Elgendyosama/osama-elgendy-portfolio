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
  const articles = getAllInitialArticles().filter(
    (a) => (a.lang || "en") === "en"
  );
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = getInitialArticleBySlug(decodedSlug, "en");

  if (!article) {
    return {
      title: "Article Not Found | Osama Elgendy",
    };
  }

  const title = article.metaTitle || `${article.title} | Osama Elgendy`;
  const description = article.metaDescription || article.excerpt;
  const canonicalUrl = `https://osamaelgendy.com/blog/${article.slug}`;
  const alternateSlug = article.alternateSlug || article.slug;
  const ogImageUrl = article.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://osamaelgendy.com${article.featuredImage}`;

  return {
    title,
    description,
    keywords: [article.focusKeyword, ...article.tags],
    authors: [{ name: "Osama Elgendy", url: "https://osamaelgendy.com" }],
    creator: "Osama Elgendy",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://osamaelgendy.com/blog/${article.slug}`,
        ar: `https://osamaelgendy.com/ar/blog/${encodeURIComponent(alternateSlug)}`,
        "x-default": `https://osamaelgendy.com/blog/${article.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: "Osama Elgendy Portfolio",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: ["https://osamaelgendy.com"],
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

export default async function ArticleSinglePage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = getInitialArticleBySlug(decodedSlug, "en");

  const canonicalUrl = `https://osamaelgendy.com/blog/${slug}`;
  const fullFeaturedImage = article?.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://osamaelgendy.com${article?.featuredImage || "/images/nextjs-technical-seo.jpg"}`;

  // 1. JSON-LD BlogPosting / TechArticle Schema
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        headline: article.title,
        description: article.metaDescription || article.excerpt,
        image: [fullFeaturedImage],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt || article.publishedAt,
        inLanguage: "en",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": canonicalUrl,
        },
        author: {
          "@type": "Person",
          name: "Osama Elgendy",
          jobTitle: "SEO Team Leader & E-Commerce SEO Specialist",
          url: "https://osamaelgendy.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Osama Elgendy SEO Consultancy",
          url: "https://osamaelgendy.com",
          logo: {
            "@type": "ImageObject",
            url: "https://osamaelgendy.com/images/og-banner.jpg",
          },
        },
        keywords: article.tags.join(", "),
        articleSection: article.category,
      }
    : null;

  // 2. JSON-LD BreadcrumbList Schema
  const breadcrumbSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://osamaelgendy.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://osamaelgendy.com/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.category,
            item: `https://osamaelgendy.com/blog?category=${encodeURIComponent(
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

      <ArticleView initialArticle={article} slug={slug} lang="en" />
    </>
  );
}
