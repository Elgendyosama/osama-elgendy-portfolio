import { Article } from "./types";

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}\s-]/gu, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

export const initialArticles: Article[] = [
  {
    id: "art-1",
    slug: "mastering-technical-seo-nextjs",
    title: "Mastering Technical SEO for Next.js: Core Web Vitals, SSR & Schema Architecture",
    excerpt:
      "A deep dive into engineering Next.js App Router applications for enterprise crawlability, perfect Lighthouse scores, dynamic JSON-LD injection, and automated Open Graph generation.",
    featuredImage: "/images/nextjs-technical-seo.jpg",
    category: "Technical SEO",
    tags: ["Next.js", "Technical SEO", "Core Web Vitals", "SSR", "Structured Data"],
    publishedAt: "2026-03-15T09:00:00.000Z",
    updatedAt: "2026-04-10T14:30:00.000Z",
    isPublished: true,
    lang: "en",
    alternateSlug: "dalil-technical-seo-nextjs",
    readTime: "7 min read",
    views: 1840,
    metaTitle: "Mastering Technical SEO for Next.js App Router | Osama Elgendy",
    metaDescription:
      "Comprehensive technical SEO guide for Next.js: maximize crawl budget, sub-second LCP & CLS optimization, dynamic Schema.org JSON-LD, and SSR rendering patterns.",
    canonicalUrl: "https://osamaelgendy.com/blog/mastering-technical-seo-nextjs",
    focusKeyword: "Technical SEO for Next.js",
    faqItems: [
      {
        id: "faq-1-1",
        question: "Why is Next.js App Router superior for Technical SEO compared to traditional SPAs?",
        answer:
          "Next.js App Router utilizes React Server Components (RSC) to stream HTML directly from the edge/server. Search engine crawlers (Googlebot, Bingbot) receive complete semantic HTML without relying on fragile JavaScript execution queues or hydration timeouts.",
      },
      {
        id: "faq-1-2",
        question: "How do you achieve 99+ Core Web Vitals scores on heavy Next.js applications?",
        answer:
          "Key techniques include optimizing the Largest Contentful Paint (LCP) by prioritizing hero images with Next.js next/image priority attribute, eliminating Cumulative Layout Shift (CLS) through explicit aspect ratios, and minimizing Total Blocking Time (TBT) using Server Components to reduce client-side JavaScript bundle sizes.",
      },
      {
        id: "faq-1-3",
        question: "What is the best way to handle dynamic JSON-LD in Next.js?",
        answer:
          "Inject Schema.org objects directly as script tags with type='application/ld+json' inside Server Components. This guarantees crawlers see the structured data on the initial server response before any client execution.",
      },
    ],
    content: `## The Evolution of JavaScript SEO and the Next.js Advantage

Modern search engines have made tremendous strides in rendering client-side JavaScript. However, relying on **Google's Web Rendering Service (WRS)** introduces latency, crawl budget exhaustion, and ranking volatility. In fast-paced enterprise environments and high-competition niches, server-rendered and statically generated pages remain the undisputed gold standard.

With Next.js App Router and React Server Components (RSC), we bridge the gap between rich user interactivity and instant search engine indexability.

---

### 1. Eliminating the Rendering Queue with React Server Components

When Googlebot visits a pure Single Page Application (SPA), it first receives a virtually empty HTML shell. The page is placed into a second-wave rendering queue until computing resources are available.

\`\`\`tsx
// Next.js App Router: Static & Dynamic Server Component
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductData(params.slug);

  return (
    <article className="max-w-4xl mx-auto py-12">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Search bots receive this fully formed HTML immediately */}
    </article>
  );
}
\`\`\`

By rendering markup on the server, every heading, paragraph, internal link, and structured data entity is immediately visible in the initial HTTP 200 payload.

---

### 2. Core Web Vitals Optimization in Next.js

Google's Page Experience signals directly impact rankings and organic click-through rates. Here is how we engineer sub-second performance:

1. **Largest Contentful Paint (LCP < 1.2s)**:
   - Use \`next/image\` with \`priority={true}\` and explicit \`sizes\` for hero banners.
   - Self-host web fonts via \`next/font\` to eliminate layout shifts and external DNS handshakes.
   - Deploy edge caching using Next.js Incremental Static Regeneration (ISR).

2. **Cumulative Layout Shift (CLS = 0.00)**:
   - Reserve space for responsive ad units and asynchronous UI blocks.
   - Avoid injecting client-rendered banners above the fold without CSS min-height placeholders.

3. **Interaction to Next Paint (INP < 150ms)**:
   - Offload heavy analytics and third-party trackers to Web Workers or schedule them using \`next/script\` with strategy \`lazyOnload\`.
   - Break large React state updates into transitions using \`startTransition\`.

---

### 3. Dynamic Schema.org JSON-LD Architecture

Enterprise SEO requires programmatic structured data. Rather than relying on client-side plugins, we output strongly typed Schema markup directly in the App Router:

\`\`\`tsx
export function ArticleJsonLd({ article }: { article: Article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: "Osama Elgendy",
      url: "https://osamaelgendy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Osama Elgendy SEO Consultancy",
      url: "https://osamaelgendy.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
\`\`\`

---

### 4. Enterprise Sitemap and Dynamic Canonical Strategy

Maintaining 100% crawl accuracy across localized pages and dynamic catalogs requires strict canonical hierarchy.

- Always set absolute canonical URLs using \`metadataBase\` in \`layout.tsx\`.
- Split massive sitemaps into index sitemaps when exceeding 50,000 URLs.
- Automate \`lastmod\` timestamps strictly reflecting genuine content updates to signal high freshness to search engine algorithms.

By implementing this architecture, Next.js sites maintain dominant SERP positioning, lightning crawl velocities, and top-tier user conversion rates.`,
  },
  {
    id: "art-2",
    slug: "ecommerce-seo-strategies-organic-revenue",
    title: "E-commerce SEO Strategies that Drive Organic Revenue: From Salla & Zid to Shopify Scale",
    excerpt:
      "Actionable technical and commercial SEO playbook to scale regional e-commerce revenue in Saudi Arabia and the Middle East across Salla, Zid, Shopify, and WooCommerce.",
    featuredImage: "/images/ecommerce-seo-strategy.jpg",
    category: "E-commerce SEO",
    tags: ["E-commerce", "Salla SEO", "Zid SEO", "Shopify", "Conversion Rate", "GCC SEO"],
    publishedAt: "2026-03-22T10:00:00.000Z",
    updatedAt: "2026-04-12T11:15:00.000Z",
    isPublished: true,
    lang: "en",
    alternateSlug: "istratijiyat-ecommerce-seo-saudi",
    readTime: "8 min read",
    views: 2410,
    metaTitle: "E-Commerce SEO Strategies That Scale Revenue | Osama Elgendy",
    metaDescription:
      "Learn how to scale e-commerce organic sales in Saudi Arabia and the Gulf across Salla, Zid, and Shopify with technical taxonomy, faceted navigation, and schema.",
    canonicalUrl: "https://osamaelgendy.com/blog/ecommerce-seo-strategies-organic-revenue",
    focusKeyword: "E-commerce SEO Strategies",
    faqItems: [
      {
        id: "faq-2-1",
        question: "How do you optimize regional platforms like Salla and Zid for SEO?",
        answer:
          "For Salla and Zid stores, the highest leverage comes from optimizing parent/child category taxonomies, creating unique Arabic product descriptions with high-intent commercial keywords, adding Product and Offer structured data, and optimizing store speed through WebP asset compression and custom CSS streamlining.",
      },
      {
        id: "faq-2-2",
        question: "How should faceted navigation and filters be handled to prevent duplicate content?",
        answer:
          "Implement canonical tags pointing back to the primary category URL for parameter-driven filters (e.g., sort=price, color=red). Only index high-demand facet combinations (e.g., /category/running-shoes) that possess dedicated search volume and unique titles.",
      },
      {
        id: "faq-2-3",
        question: "What is the role of Merchant Center and Product Schema in organic visibility?",
        answer:
          "Product Schema with valid price, priceCurrency, availability, aggregateRating, and review fields enables rich snippet badges (stars, in stock, price drops) in Google Search, boosting CTR by 25-40% and feeding directly into Google Free Listings.",
      },
    ],
    content: `## Transforming Organic Traffic into Verifiable Store Revenue

In e-commerce SEO, vanity traffic metrics mean nothing without transactions. Scaling regional stores across the Kingdom of Saudi Arabia, the UAE, and the GCC requires a rigorous focus on commercial buyer intent, catalog architecture, and technical integrity across platforms like **Salla, Zid, Shopify, and Magento**.

Having managed SEO across 50+ regional stores, here is the proven framework that turns search engines into your most lucrative customer acquisition channel.

---

### 1. High-Intent Taxonomy Architecture (Hub & Spoke Model)

Most e-commerce stores fail because their product catalog structure is flat. A high-converting taxonomy organizes inventory into semantic clusters:

- **Tier 1 (Main Hub)**: High volume, competitive category (e.g., \`/abaya-collection\`)
- **Tier 2 (Sub-Hub)**: Intent-specific subcategories (e.g., \`/abaya-collection/casual-black\`)
- **Tier 3 (Spoke)**: Individual SKU product pages with contextual breadcrumbs

\`\`\`text
Homepage
 └── Women's Perfumes (Main Category)
      ├── Arabian Oud Blends (Subcategory / Facet)
      │    └── Royal Amber EDP 100ml (Product Page)
      └── French Floral Fragrances
\`\`\`

Every subcategory page must feature a curated H1, localized commercial copy (150-250 words), and dynamic filter links that pass internal PageRank downward to high-margin products.

---

### 2. Solving Faceted Navigation & Crawl Bloat

Faceted navigation (filters for size, color, brand, price) is both a blessing for user UX and a major hazard for SEO if left unmanaged:

- **The Problem**: A catalog of 500 products can generate 50,000 parameter URLs, diluting crawl budget and causing indexation bloat.
- **The Solution**:
  1. Add \`rel="canonical"\` referencing the clean parent category.
  2. Implement \`robots.txt\` disallow rules for query parameters like \`?sort=\`, \`?dir=\`, and session trackers.
  3. Pre-render static landing pages ONLY for combinations with verified organic search demand (e.g., *"Men's White Linen Shirts in Riyadh"*).

---

### 3. Product Schema & Google Merchant Center Integration

Enriching your SERP listings with real-time stock and pricing directly increases click-through rates. The essential JSON-LD specification includes:

\`\`\`json
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "Luxury Oud Wood Fragrance 100ml",
  "image": ["https://store.example/images/oud-100ml.jpg"],
  "description": "Premium aged Cambodian Oud oil extracted with natural essence.",
  "sku": "OUD-100-SA",
  "brand": {
    "@type": "Brand",
    "name": "Al-Arabiya Perfumes"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://store.example/product/oud-100ml",
    "priceCurrency": "SAR",
    "price": "450.00",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  }
}
\`\`\`

---

### 4. Arabic Localization and Dialectal Search Targeting

For stores operating in Saudi Arabia and the Gulf, keyword strategy must bridge **Modern Standard Arabic (فصحى)** and **regional Saudi dialects (اللهجة السعودية)**:

- Standard: *أفضل هواتف ذكية مخفضة*
- Regional / Conversational: *عروض جوالات رخيصة وأصلية بالرياض*

Optimizing product page titles, alt texts, and FAQs for local intent captures bottom-of-funnel buyers at the precise moment they are ready to purchase.`,
  },
  {
    id: "art-3",
    slug: "optimizing-for-ai-search-geo-aeo",
    title: "Optimizing for AI Search: The Rise of Generative Engine Optimization (GEO & AEO)",
    excerpt:
      "How to position your brand as the primary cited authority in Google AI Overviews, Perplexity, and ChatGPT with Answer Engine Optimization strategies.",
    featuredImage: "/images/ai-search-geo-optimization.jpg",
    category: "AI SEO / GEO",
    tags: ["GEO", "AEO", "AI Overviews", "Perplexity", "Knowledge Graph", "Future SEO"],
    publishedAt: "2026-04-01T08:30:00.000Z",
    updatedAt: "2026-04-18T16:00:00.000Z",
    isPublished: true,
    lang: "en",
    alternateSlug: "tahsin-muharikat-al-dhaka-al-istinaei-geo",
    readTime: "9 min read",
    views: 3120,
    metaTitle: "Generative Engine Optimization (GEO & AEO) Guide | Osama Elgendy",
    metaDescription:
      "Master AI search ranking: how to optimize for Google AI Overviews, ChatGPT, and Perplexity using semantic entities, citation architecture, and structured data.",
    canonicalUrl: "https://osamaelgendy.com/blog/optimizing-for-ai-search-geo-aeo",
    focusKeyword: "Generative Engine Optimization GEO",
    faqItems: [
      {
        id: "faq-3-1",
        question: "What is the difference between traditional SEO and Generative Engine Optimization (GEO)?",
        answer:
          "Traditional SEO focuses on earning top blue link positions on Search Engine Results Pages (SERPs) through keywords and backlinks. GEO focuses on structuring content and semantic authority so Large Language Models (LLMs) cite and quote your brand inside synthesized AI Overviews.",
      },
      {
        id: "faq-3-2",
        question: "How do LLMs and Answer Engines choose which sources to cite?",
        answer:
          "LLMs prioritize sources that display clear semantic entities, concise direct definitions in opening paragraphs, verifiable statistical proof, verified author credentials (E-E-A-T), and structured schema that connects facts cleanly to the Knowledge Graph.",
      },
      {
        id: "faq-3-3",
        question: "Will AI Search replace traditional organic search traffic?",
        answer:
          "AI Search will absorb superficial, informational queries (zero-click searches). However, for complex comparisons, high-ticket services, and commercial e-commerce transactions, being the primary cited authority in AI Overviews delivers significantly higher-converting traffic.",
      },
    ],
    content: `## The Next Frontier: From 10 Blue Links to Synthesized AI Answers

Search behavior is experiencing the most significant paradigm shift since the inception of Google. With the rollout of **Google AI Overviews (formerly SGE)**, **Perplexity AI**, and conversational agents like **ChatGPT Search**, users increasingly consume synthesized answers directly at the top of the screen.

To maintain organic dominance, digital leaders must evolve from traditional keyword optimization to **Generative Engine Optimization (GEO)** and **Answer Engine Optimization (AEO)**.

---

### 1. The Anatomy of an AI-Citational Answer

When an LLM generates a response to a complex query, it executes Retrieval-Augmented Generation (RAG). It scrapes top-ranking candidate documents, embeds their text into vector space, and selects high-relevance chunks to synthesize the answer.

To ensure your content is selected:

1. **Answer-First Inverted Pyramid**:
   State the definitive answer in the first 40-60 words of each section under an H2 or H3 heading.
2. **Explicit Fact Densification**:
   Include concrete numbers, benchmark statistics, percentage metrics, and named entities. LLMs favor authoritative data points over generic fluff.
3. **Structured Bullet Summaries**:
   Organize multi-step processes into clean markdown lists or tables that can be easily parsed by AI crawlers.

---

### 2. Semantic Entity Engineering & Knowledge Graphs

Search engines no longer match strings; they map entities. An entity is a singular, well-defined concept or person (e.g., *Osama Elgendy*, *Technical SEO*, *Saudi Arabia*).

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "Person",
    "name": "Osama Elgendy",
    "jobTitle": "SEO Team Leader & E-Commerce SEO Specialist",
    "sameAs": [
      "https://www.linkedin.com/in/osamasalehelgendy/",
      "https://github.com/Elgendyosama"
    ],
    "knowsAbout": [
      "Generative Engine Optimization (GEO)",
      "Technical SEO Auditing",
      "Core Web Vitals Optimization"
    ]
  }
}
\`\`\`

By embedding unambiguous linked-data references (\`sameAs\`, \`knowsAbout\`, \`alumniOf\`), you anchor your website directly into Google's Knowledge Graph.

---

### 3. The 4 Pillars of GEO Optimization

1. **Information Gain Score**:
   Provide unique data, first-party case studies, or proprietary frameworks that do not exist elsewhere on the web. Duplicate answers are filtered out by LLM deduplication algorithms.
2. **Authoritative E-E-A-T Signaling**:
   Display verified author biographies, industry certifications (such as Semrush Academy), and real client search console screenshots.
3. **Clean Semantic Markup**:
   Use semantic HTML5 elements (\`<main>\`, \`<article>\`, \`<section>\`, \`<header>\`, \`<table>\`) without obfuscating JavaScript hydration barriers.
4. **Natural Language Question Formats**:
   Align headings with natural voice and conversational search phrasing used in conversational prompts.

---

### 4. Preparing Your Brand for the Future of Search

Organizations that invest today in semantic authority, clean technical performance, and structured entity graphs will not merely survive the AI search revolution—they will capture the lion's share of high-intent, high-value organic conversions.`,
  },
  {
    id: "art-4",
    slug: "dalil-technical-seo-nextjs",
    title: "دليل السيو التقني لتطبيقات Next.js: تحسين Core Web Vitals ومحركات البحث وSchema.org",
    excerpt:
      "دليل عملي متقدم لتهيئة تطبيقات Next.js App Router للأرشفة الفورية وتصدر محركات البحث، مع ضبط مؤشرات أداء الويب الأساسية وحقن البيانات المنظمة برمجياً.",
    featuredImage: "/images/nextjs-technical-seo.jpg",
    category: "Technical SEO",
    tags: ["Next.js", "السيو التقني", "Core Web Vitals", "SSR", "البيانات المنظمة"],
    publishedAt: "2026-03-15T09:00:00.000Z",
    updatedAt: "2026-04-10T14:30:00.000Z",
    isPublished: true,
    lang: "ar",
    alternateSlug: "mastering-technical-seo-nextjs",
    readTime: "7 دقائق قراءة",
    views: 1950,
    metaTitle: "دليل السيو التقني لتطبيقات Next.js App Router | أسامة الجندي",
    metaDescription:
      "دليل شامل في السيو التقني لتطبيقات Next.js: مضاعفة ميزانية الزحف، تحسين سرعة LCP وCLS لأقل من ثانية، وحقن Schema.org JSON-LD عبر مكونات الخادم.",
    canonicalUrl: "https://osamaelgendy.com/ar/blog/dalil-technical-seo-nextjs",
    focusKeyword: "السيو التقني لتطبيقات Next.js",
    faqItems: [
      {
        id: "faq-4-1",
        question: "لماذا يتفوق Next.js App Router في السيو التقني مقارنة بتطبيقات SPA التقليدية؟",
        answer:
          "يعتمد Next.js App Router على مكونات الخادم React Server Components (RSC) لبث كود HTML جاهز وكامل مباشرة من الخادم. تستلم عناكب محركات البحث (مثل Googlebot) محتوى دلالي كامل دون الحاجة للانتظار في طوابير معالجة الجافاسكريبت.",
      },
      {
        id: "faq-4-2",
        question: "كيف تحقق علامة 99+ في مؤشرات أداء الويب الأساسية Core Web Vitals مع Next.js؟",
        answer:
          "عبر تحسين LCP بإعطاء صور الواجهة الرئيسية أولوية التحميل عبر next/image مع خاصية priority، ومنع تحولات التخطيط التراكمية CLS بتحديد أبعاد ثابتة للعناصر، وتقليص حجم كود الجافاسكريبت المرسل للمتصفح بالاعتماد على Server Components.",
      },
      {
        id: "faq-4-3",
        question: "ما هي أفضل طريقة لتطبيق البيانات المنظمة Schema.org في Next.js؟",
        answer:
          "حقن كائنات Schema.org مباشرة داخل وسوم script بنوع application/ld+json داخل Server Components، مما يضمن وصولها لعناكب جوجل في أول استجابة HTTP 200.",
      },
    ],
    content: `## تطور سيو الجافاسكريبت وتفوق Next.js App Router

قطعت محركات البحث وعلى رأسها جوجل شوطاً كبيراً في فهرسة صفحات الجافاسكريبت من جانب العميل (Client-Side Rendering). ومع ذلك، فإن الاعتماد على خدمة معالجة الويب في جوجل **Google Web Rendering Service (WRS)** يؤدي حتماً إلى تأخير الأرشفة، واستنزاف ميزانية الزحف (Crawl Budget)، وتذبذب الترتيب في الكلمات التنافسية.

في بيئات الأعمال والمتاجر الكبرى، تظل الصفحات المجهزة من الخادم (Server-Side Rendered) والمولدة مسبقاً (SSG) هي المعيار الذهبي المطلق.

---

### 1. إلغاء طوابير الرندر عبر React Server Components (RSC)

عندما تزور عناكب جوجل تطبيق SPA تقليدي، تتلقى صفحة HTML شبه فارغة وتضع الصفحة في طابور معالجة ثانٍ قد يستغرق أياماً.

مع Next.js App Router، يتم تجهيز كامل النصوص والعناوين والروابط الداخلية والبيانات المنظمة على الخادم قبل إرسالها، فتظهر فوراً في أول استجابة للزائر ومحركات البحث.

\`\`\`tsx
// صفحة منتج مبنية بـ Server Component في Next.js
export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductData(params.slug);

  return (
    <article className="max-w-4xl mx-auto py-12">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* عناكب البحث تستلم هذا الكود مكتملاً فورياً */}
    </article>
  );
}
\`\`\`

---

### 2. هندسة مؤشرات أداء الويب Core Web Vitals بسرعة فائقة

تؤثر مؤشرات تجربة الصفحة مباشرة على تصنيفات الكلمات ومعدل النقر العضوي (CTR):

1. **أكبر رسم للمحتوى الظاهر (LCP < 1.2s)**:
   - استخدام مكون \`next/image\` مع تفعيل خاصية \`priority={true}\` لبانرات الصفحة الأولى.
   - استضافة الخطوط محلياً عبر \`next/font\` لمنع تأخر استدعاء الخطوط وتغير شكل النصوص.
   - تفعيل التخزين المؤقت المتقدم عبر تقنية التحديث الدوري (Incremental Static Regeneration - ISR).

2. **الاستقرار البصري وتفادي التحولات التراكمية (CLS = 0.00)**:
   - تخصيص مساحات محددة بالبكسل للبانرات الإعلانية ومربعات التحميل غير المتزامنة.
   - تجنب إدراج عناصر تفاعلية أعلى الصفحة دون مساحات حجز مسبقة في CSS.

---

### 3. بنية البيانات المنظمة الديناميكية Schema.org JSON-LD

يتطلب السيو المؤسسي تطبيقاً برمجياً دقيقاً للبيانات المنظمة. بدلاً من الاعتماد على إضافات خارجية، نولد أكواد Schema الموثقة مباشرة في App Router:

\`\`\`tsx
export function ArticleJsonLd({ article }: { article: Article }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    inLanguage: "ar",
    author: {
      "@type": "Person",
      name: "أسامة الجندي",
      url: "https://osamaelgendy.com",
    },
    publisher: {
      "@type": "Organization",
      name: "استشارات أسامة الجندي للسيو",
      url: "https://osamaelgendy.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
\`\`\`

---

### 4. خريطة الموقع الدولية وسياسات الكانونيكال المتوافقة مع hreflang

للحفاظ على دقة الزحف بنسبة 100% بين النسخ الإنجليزية والعربية:
- استخدم دائماً روابط كانونيكال مطلقة مع وسوم \`hreflang\` التبادلية.
- حدّث وسوم \`lastmod\` في sitemap تلقائياً لتعكس التعديلات الحقيقية على المحتوى، مما يمنح محركات البحث إشارة واضحة لحداثة المقال.`,
  },
  {
    id: "art-5",
    slug: "istratijiyat-ecommerce-seo-saudi",
    title: "استراتيجيات سيو المتاجر الإلكترونية في السعودية: مضاعفة المبيعات عبر سلة وزد وشوبيفاي",
    excerpt:
      "دليل عملي واستراتيجي لتحويل محركات البحث إلى قناة البيع الأعلى ربحية لمتاجر التجزئة في السعودية والخليج العربي عبر منصات سلة، زد، شوبيفاي وماجنتو.",
    featuredImage: "/images/ecommerce-seo-strategy.jpg",
    category: "E-commerce SEO",
    tags: ["سيو المتاجر", "سلة", "زد", "شوبيفاي", "معدل التحويل", "السعودية والخليج"],
    publishedAt: "2026-03-22T10:00:00.000Z",
    updatedAt: "2026-04-12T11:15:00.000Z",
    isPublished: true,
    lang: "ar",
    alternateSlug: "ecommerce-seo-strategies-organic-revenue",
    readTime: "8 دقائق قراءة",
    views: 2630,
    metaTitle: "استراتيجيات سيو المتاجر الإلكترونية لزيادة المبيعات | أسامة الجندي",
    metaDescription:
      "تعلم كيف تضاعف مبيعات متجرك في السعودية والخليج عبر سلة وزد وشوبيفاي بهندسة التصنيفات، فلاتر البحث، والبيانات المنظمة لمنتجاتك.",
    canonicalUrl: "https://osamaelgendy.com/ar/blog/istratijiyat-ecommerce-seo-saudi",
    focusKeyword: "سيو المتاجر الإلكترونية السعودية",
    faqItems: [
      {
        id: "faq-5-1",
        question: "كيف يتم تحسين سيو متاجر سلة وزد لتتصدر نتائج البحث الأولى؟",
        answer:
          "أهم نقاط القوة لمتاجر سلة وزد تكمن في ضبط الهيكل الهرمي للتصنيفات، كتابة نصوص وصفية فريدة ذات نية شرائية عالية، إضافة بيانات المنتج المنظمة Product Schema، وضغط الصور بصيغة WebP الحديثة لتحقيق أعلى سرعة تصفح على الجوال.",
      },
      {
        id: "faq-5-2",
        question: "كيف نتعامل مع فلاتر المنتجات لمنع هدر ميزانية الزحف ومشاكل المحتوى المكرر؟",
        answer:
          "عبر توجيه رابط الكانونيكال canonical لجميع روابط الفلاتر المتغيرة نحو رابط التصنيف الرئيسي، مع إنشاء صفحات هبوط مخصصة ومفهرسة فقط للتركيبات ذات الحجم البحثي المؤكد في السوق السعودي.",
      },
      {
        id: "faq-5-3",
        question: "ما هو دور وسوم Product Schema و Merchant Center في مبيعات المتجر؟",
        answer:
          "تتيح وسوم Product Schema إبراز تقييمات النجوم، والأسعار بالريال السعودي، وتوفر المخزون مباشرة في نتائج البحث، مما يرفع معدل النقر (CTR) بنسبة تتجاوز 35% ويؤهل المنتجات للظهور في القوائم المجانية لـ Google Shopping.",
      },
    ],
    content: `## تحويل الزيارات المجانية إلى طلبات شراء حقيقية موثقة

في سيو المتاجر الإلكترونية، لا قيمة للأرقام المجردة ما لم تتحول إلى سلات شراء مكتملة وعائد استثمار حقيقي (ROI). يتطلب توسيع المتاجر في السوق السعودي والخليج فهماً عميقاً لسلوك المستهلك المحلي، وطبيعة مصطلحات البحث التجارية، والبنية البرمجية لمنصات التجارة مثل **سلة (Salla)، زد (Zid)، شوبيفاي (Shopify) وماجنتو (Magento)**.

بعد إدارة السيو لأكثر من 50 متجراً ناجحاً في المملكة، إليك الإطار الاستراتيجي المعتمد لمضاعفة مبيعات البحث المجاني.

---

### 1. بنية التصنيفات الهرمية (نموذج Hub & Spoke)

تفشل معظم المتاجر بسبب الهيكل السطحي والمسطح للمنتجات. البنية الاحترافية تقسم المتجر إلى تجمعات دلالية مدروسة:

- **المستوى الأول (Hub الرئيسي)**: تصنيف واسع ذو حجم بحث ضخم (مثال: \`/perfumes\`)
- **المستوى الثاني (Sub-Hub)**: تصنيفات فرعية ذات نية شرائية محددة (مثال: \`/perfumes/oud-oil\`)
- **المستوى الثالث (Spoke)**: صفحات المنتجات الفردية مع مسار تتبع متصل (Breadcrumbs)

\`\`\`text
الرئيسية
 └── عطور شرقية (تصنيف رئيسي)
      ├── دهن العود الكمبودي (تصنيف فرعي مستهدف)
      │    └── دهن عود ملكي معتق 100 مل (صفحة المنتج)
      └── عطور فرنسية فاخرة
\`\`\`

---

### 2. إدارة فلاتر المنتجات (Faceted Navigation) وحماية ميزانية الزحف

تعتبر فلاتر المقاس، اللون، العلامة التجارية والسعر ضرورية لتجربة العميل، لكنها قد تتحول إلى كارثة سيو إذا لم تُضبط بدقة:
- المتجر الذي يضم 500 منتج قد يولد أكثر من 30,000 رابط بالمتغيرات (Parameters).
- الحل يكمن في توجيه وسوم \`rel="canonical"\` نحو التصنيف الأب دائماً.
- حظر فهرسة الروابط ذات المتغيرات المؤقتة في ملف \`robots.txt\`.

---

### 3. الاستهداف المحلي الدقيق والموازنة بين الفصحى واللهجة السعودية

في السعودية والخليج، تبحث شريحة واسعة من العملاء بعبارات دارجة ومحلية إلى جانب العربية الفصحى:
- بحث فصحى: *أفضل ساعات يد رجالية أصلية*
- بحث محلي متداول: *عروض ساعات فخمة ورخيصة بالرياض توصيل سريع*

إن إدراج هذه المرادفات والأسئلة الشائعة في صفحات المنتجات والتصنيفات يجذب العميل الجاهز للشراء في اللحظة المناسبة تماماً.`,
  },
  {
    id: "art-6",
    slug: "tahsin-muharikat-al-dhaka-al-istinaei-geo",
    title: "تصدر محركات بحث الذكاء الاصطناعي (GEO و AEO): الدليل الشامل لـ Google AI Overviews و Perplexity",
    excerpt:
      "كيف تؤهل موقعك وعلامتك التجارية لتكون المصدر الأول والمستشهد به في ملخصات Google AI Overviews و Perplexity و ChatGPT عبر استراتيجيات هندسة الكيانات الدلالية.",
    featuredImage: "/images/ai-search-geo-optimization.jpg",
    category: "AI SEO / GEO",
    tags: ["GEO", "AEO", "Google AI Overviews", "Perplexity", "سيو الذكاء الاصطناعي", "الكيانات الدلالية"],
    publishedAt: "2026-04-01T08:30:00.000Z",
    updatedAt: "2026-04-18T16:00:00.000Z",
    isPublished: true,
    lang: "ar",
    alternateSlug: "optimizing-for-ai-search-geo-aeo",
    readTime: "9 دقائق قراءة",
    views: 3340,
    metaTitle: "دليل تحسين محركات الذكاء الاصطناعي (GEO و AEO) | أسامة الجندي",
    metaDescription:
      "تعرف على قواعد السيو الجديد: كيف تتصدر ملخصات Google AI Overviews وتصبح المصدر المعتمد لروبوتات الذكاء الاصطناعي عبر بناء الكيانات ومخطط المعرفة.",
    canonicalUrl: "https://osamaelgendy.com/ar/blog/tahsin-muharikat-al-dhaka-al-istinaei-geo",
    focusKeyword: "سيو الذكاء الاصطناعي GEO و AEO",
    faqItems: [
      {
        id: "faq-6-1",
        question: "ما هو الفرق بين السيو التقليدي وسيو محركات الذكاء الاصطناعي (GEO)؟",
        answer:
          "يركز السيو التقليدي على احتلال الروابط العشرة الزرقاء الأولى عبر الكلمات المفتاحية والروابط الخارجية. بينما يركز GEO على هيكلة المحتوى دلالياً لتفهمه نماذج الذكاء الاصطناعي وتقتبس موقعك كمرجع موثوق داخل ملخصات الإجابة الذكية.",
      },
      {
        id: "faq-6-2",
        question: "كيف تختار نماذج اللغة (LLMs) المصادر التي تستشهد بها في إجاباتها؟",
        answer:
          "تفضل النماذج المحتوى الذي يقدم إجابات مباشرة ومحددة في بداية الفقرات، ويحتوي على أرقام وإحصائيات موثقة، ويملك إشارات خبرة قوية (E-E-A-T)، ويرتبط بمخطط المعرفة Knowledge Graph عبر البيانات المنظمة.",
      },
      {
        id: "faq-6-3",
        question: "هل سيلغي بحث الذكاء الاصطناعي زيارات المواقع الإلكترونية؟",
        answer:
          "سيستحوذ الذكاء الاصطناعي على عمليات البحث السريعة والبسيطة (Zero-click). لكن في القرارات الشرائية، والاستشارات المتخصصة، والمقارنات التجارية، فإن ظهور موقعك كمصدر رئيسي في AI Overviews يجلب عملاء أعلى استعداداً للتحويل والتعاقد.",
      },
    ],
    content: `## العصر الجديد: من الروابط الزرقاء إلى الإجابات الذكية التوليدية

يمر سلوك البحث بأكبر تحول تاريخي منذ انطلاق جوجل. مع توسع ميزة **Google AI Overviews** وظهور محركات بحث توليدية متقدمة مثل **Perplexity AI** و **ChatGPT Search**، بات المستخدمون يفضلون الحصول على إجابة مختصرة وذكية في أعلى الشاشة مباشرة.

للحفاظ على مكانتك في الصدارة، يتعين على الشركات الانتقال من السيو القائم على مطابقة الكلمات إلى **تحسين محركات التوليد (Generative Engine Optimization - GEO)** و **تحسين محركات الإجابة (Answer Engine Optimization - AEO)**.

---

### 1. البنية الدلالية للمحتوى المؤهل للاستشهاد الذكي

عندما يولد نموذج الذكاء الاصطناعي إجابة لسؤال معقد، فإنه ينفذ تقنية التوليد المعزز بالاسترجاع (RAG). حيث يحلل الصفحات الأعلى مصداقية، ويحول نصوصها لمتجهات دلالية، ثم يختار المقاطع الأكثر دقة لتضمينها في الإجابة.

لكي يتم اختيار مقالك:
1. **قاعدة الهرم المقلوب في الإجابة**:
   قدّم الإجابة المباشرة والصريحة في أول 40 إلى 60 كلمة أسفل كل عنوان H2 أو H3.
2. **كثافة الحقائق والأرقام**:
   أورد نسباً مئوية وبيانات إحصائية واضحة؛ فنماذج اللغة تبحث عن الأدلة الرياضية والتأكيدات الموثقة وتبتعد عن الحشو الإنشائي.
3. **الجداول والقوائم المهيكلة**:
   نظم الخطوات والبيانات في جداول HTML دلالية أو قوائم نقطية تسهل قراءتها بواسطة خوارزميات الاستخلاص.

---

### 2. هندسة الكيانات ومخطط المعرفة (Knowledge Graph)

لم تعد محركات البحث تقارن الحروف فقط، بل تفهم "الكيانات" (Entities) وعلاقاتها. الكيان هو مفهوم محدد وفريد مثل (*أسامة الجندي*، *السيو التقني*، *المملكة العربية السعودية*).

ربط موقعك بمخطط المعرفة يضمن إدراك محركات الذكاء الاصطناعي لهويتك وخبراتك بدقة متناهية.

---

### 3. أعمدة نجاح استراتيجية GEO الأربعة

1. **معدل القيمة الإضافية (Information Gain)**:
   قدّم أرقاماً ودراسات حالة حصرية لم تُنشر من قبل، فالنماذج تستبعد الإجابات المكررة.
2. **إشارات الموثوقية والخبرة (E-E-A-T)**:
   أبرز السيرة الذاتية لكاتب المقال، وشهاداته المعتمدة، وسجل إنجازاته العملية الموثقة.
3. **بنية HTML دلالية نظيفة**:
   استخدم وسوم HTML5 القياسية دون حواجز جافاسكريبت معقدة تعيق استخراج البيانات.
4. **صياغة الأسئلة بأسلوب المحادثة الطبيعي**:
   صمّم العناوين لتطابق الطريقة التلقائية التي يطرح بها المستخدم أسئلته على أدوات الذكاء الاصطناعي.`,
  },
];

export function getAllInitialArticles(): Article[] {
  return initialArticles;
}

export function getInitialArticleBySlug(slug: string, lang?: "en" | "ar"): Article | undefined {
  if (!slug) return undefined;
  const decodedSlug = decodeURIComponent(slug).toLowerCase().trim();
  const rawSlug = slug.toLowerCase().trim();

  return initialArticles.find((art) => {
    const artDecoded = decodeURIComponent(art.slug).toLowerCase().trim();
    const artRaw = art.slug.toLowerCase().trim();

    const matches =
      artRaw === rawSlug ||
      artDecoded === decodedSlug ||
      artRaw === decodedSlug ||
      artDecoded === rawSlug;

    if (!matches) return false;
    if (lang && art.lang && art.lang !== lang) return false;
    return true;
  });
}
