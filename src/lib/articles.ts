import { Article } from "./types";
import { initialArticles, slugify, calculateReadTime } from "./articles-data";

export { slugify, calculateReadTime };

export function getAllArticles(): Article[] {
  // Safe execution: returns initialArticles on server, or localStorage if in browser
  if (typeof window !== "undefined") {
    try {
      const saved = localStorage.getItem("osama_seo_articles_v1");
      if (saved) {
        const parsed: Article[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge with initialArticles: any initial articles not in parsed are included
          const parsedIds = new Set(parsed.map((a) => a.id));
          const missingInitial = initialArticles.filter((a) => !parsedIds.has(a.id));
          return [...parsed, ...missingInitial];
        }
      }
    } catch {
      // Fallback to default
    }
  }
  return initialArticles;
}

export function getPublishedArticles(lang?: "en" | "ar"): Article[] {
  const all = getAllArticles().filter((art) => art.isPublished);
  if (!lang) return all;
  return all.filter((art) => (art.lang || "en") === lang);
}

export function getArticlesByLanguage(lang: "en" | "ar"): Article[] {
  return getPublishedArticles(lang);
}

export function getArticleBySlug(slug: string, lang?: "en" | "ar"): Article | undefined {
  if (!slug) return undefined;
  const decodedSlug = decodeURIComponent(slug).toLowerCase().trim();
  const rawSlug = slug.toLowerCase().trim();
  const articles = getAllArticles();

  return articles.find((art) => {
    const artDecoded = decodeURIComponent(art.slug).toLowerCase().trim();
    const artRaw = art.slug.toLowerCase().trim();

    const matches =
      artRaw === rawSlug ||
      artDecoded === decodedSlug ||
      artRaw === decodedSlug ||
      artDecoded === rawSlug;

    if (!matches) return false;
    if (lang && (art.lang || "en") !== lang) return false;
    return true;
  });
}

export function getRelatedArticles(
  currentSlug: string,
  category?: string,
  limit: number = 2,
  lang?: "en" | "ar"
): Article[] {
  const decodedCurrent = decodeURIComponent(currentSlug).toLowerCase().trim();
  const allPublished = getPublishedArticles(lang).filter(
    (a) =>
      a.slug !== currentSlug &&
      decodeURIComponent(a.slug).toLowerCase().trim() !== decodedCurrent
  );

  if (!category) return allPublished.slice(0, limit);

  const sameCategory = allPublished.filter((a) => a.category === category);
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }
  const otherCategories = allPublished.filter((a) => a.category !== category);
  return [...sameCategory, ...otherCategories].slice(0, limit);
}

export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export function extractTableOfContents(markdown: string): TableOfContentsItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const items: TableOfContentsItem[] = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const rawText = match[2].trim();
    // Clean markdown formatting if any
    const text = rawText.replace(/[*_`]/g, "");
    const id = slugify(text) || `heading-${items.length + 1}`;
    items.push({ id, text, level });
  }

  return items;
}
