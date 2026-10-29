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
  const canonicalUrl = `https://osama-elgendy-portfolio.vercel.app/blog/${article.slug}`;
  const alternateSlug = article.alternateSlug || article.slug;
  const ogImageUrl = article.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://osama-elgendy-portfolio.vercel.app${article.featuredImage}`;

  return {
    title,
    description,
    keywords: [article.focusKeyword, ...article.tags],
    authors: [{ name: "Osama Elgendy", url: "https://osama-elgendy-portfolio.vercel.app" }],
    creator: "Osama Elgendy",
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `https://osama-elgendy-portfolio.vercel.app/blog/${article.slug}`,
        ar: `https://osama-elgendy-portfolio.vercel.app/ar/blog/${encodeURIComponent(alternateSlug)}`,
        "x-default": `https://osama-elgendy-portfolio.vercel.app/blog/${article.slug}`,
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

export default async function ArticleSinglePage({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const article = getInitialArticleBySlug(decodedSlug, "en");

  const canonicalUrl = `https://osama-elgendy-portfolio.vercel.app/blog/${slug}`;
  const fullFeaturedImage = article?.featuredImage.startsWith("http")
    ? article.featuredImage
    : `https://osama-elgendy-portfolio.vercel.app${article?.featuredImage || "/images/nextjs-technical-seo.jpg"}`;

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
          url: "https://osama-elgendy-portfolio.vercel.app",
        },
        publisher: {
          "@type": "Organization",
          name: "Osama Elgendy SEO Consultancy",
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
            item: "https://osama-elgendy-portfolio.vercel.app",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://osama-elgendy-portfolio.vercel.app/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.category,
            item: `https://osama-elgendy-portfolio.vercel.app/blog?category=${encodeURIComponent(
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
