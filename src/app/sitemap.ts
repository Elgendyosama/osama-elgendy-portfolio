import { MetadataRoute } from "next";
import { getAllInitialArticles } from "@/lib/articles-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://osamaelgendy.com";
  const publishedArticles = getAllInitialArticles().filter((a) => a.isPublished);

  const articleEntries: MetadataRoute.Sitemap = publishedArticles.map((article) => {
    const isAr = article.lang === "ar";
    const path = isAr
      ? `/ar/blog/${encodeURIComponent(article.slug)}`
      : `/blog/${article.slug}`;

    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(article.updatedAt || article.publishedAt),
      changeFrequency: "weekly",
      priority: 0.8,
    };
  });

  return [
    // English Root & Core Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Arabic Root & Core Pages
    {
      url: `${baseUrl}/ar`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/ar/book`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ar/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...articleEntries,
  ];
}
