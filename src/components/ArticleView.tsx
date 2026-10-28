"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/types";
import { Language } from "@/lib/translations";
import {
  getArticleBySlug,
  getRelatedArticles,
  extractTableOfContents,
} from "@/lib/articles";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { TableOfContents } from "@/components/TableOfContents";
import { ArticleFAQAccordion } from "@/components/ArticleFAQAccordion";
import { ArticleAuthorCard } from "@/components/ArticleAuthorCard";
import { ArticleShareBar } from "@/components/ArticleShareBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  Clock,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Tag,
  Target,
  RefreshCw,
  AlertCircle,
  BookOpen,
} from "lucide-react";

interface ArticleViewProps {
  initialArticle?: Article | null;
  slug: string;
  lang: Language;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  initialArticle,
  slug,
  lang,
}) => {
  const isAr = lang === "ar";
  const [article, setArticle] = useState<Article | null>(initialArticle || null);
  const [loading, setLoading] = useState(!initialArticle);

  useEffect(() => {
    if (!article) {
      const found = getArticleBySlug(slug, lang);
      if (found) {
        setArticle(found);
      }
      setLoading(false);
    }
  }, [article, slug, lang]);

  if (loading) {
    return (
      <div
        dir={isAr ? "rtl" : "ltr"}
        className={`min-h-screen bg-[#060913] text-slate-100 ${
          isAr ? "font-arabic" : "font-sans"
        } flex items-center justify-center`}
      >
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs text-slate-400">
            {isAr ? "جاري تحميل المقال..." : "Loading Article..."}
          </p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div
        dir={isAr ? "rtl" : "ltr"}
        className={`min-h-screen bg-[#060913] text-slate-100 ${
          isAr ? "font-arabic" : "font-sans"
        }`}
      >
        <Navbar lang={lang} />
        <main className="pt-36 pb-24 text-center">
          <div className="max-w-md mx-auto px-4 space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-black font-heading text-white">
              {isAr ? "المقال غير موجود أو تم نقله" : "Article Not Found"}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              {isAr
                ? "عذراً، لم نتمكن من العثور على المقال المطلوب. قد يكون الرابط خاطئاً أو تم تعديل الرابط الدائم."
                : "The requested article could not be located. It might have been moved or removed."}
            </p>
            <div className="pt-2">
              <Link
                href={isAr ? "/ar/blog" : "/blog"}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-cyan-600 shadow-glow"
              >
                <BookOpen className="w-4 h-4" />
                <span>{isAr ? "العودة إلى دليل المقالات" : "Browse All Articles"}</span>
              </Link>
            </div>
          </div>
        </main>
        <Footer lang={lang} />
      </div>
    );
  }

  const tocItems = extractTableOfContents(article.content);
  const relatedArticles = getRelatedArticles(article.slug, article.category, 3, lang);
  const canonicalUrl = isAr
    ? `https://osamaelgendy.com/ar/blog/${encodeURIComponent(article.slug)}`
    : `https://osamaelgendy.com/blog/${article.slug}`;

  const basePrefix = isAr ? "/ar" : "";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#060913] text-slate-100 ${
        isAr ? "font-arabic" : "font-sans"
      } selection:bg-cyan-500 selection:text-black`}
    >
      {/* Global Navbar without event handler props */}
      <Navbar lang={lang} />

      {/* Main Single Article Wrapper */}
      <main className="pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label={isAr ? "مسار التصفح" : "Breadcrumb"} className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <li>
                <Link
                  href={isAr ? "/ar" : "/"}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {isAr ? "الرئيسية" : "Home"}
                </Link>
              </li>
              <li>
                <ChevronRight className={`w-3.5 h-3.5 text-slate-600 ${isAr ? "rotate-180" : ""}`} />
              </li>
              <li>
                <Link
                  href={`${basePrefix}/blog`}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {isAr ? "المدونة" : "Blog"}
                </Link>
              </li>
              <li>
                <ChevronRight className={`w-3.5 h-3.5 text-slate-600 ${isAr ? "rotate-180" : ""}`} />
              </li>
              <li className="text-slate-300">{article.category}</li>
              <li>
                <ChevronRight className={`w-3.5 h-3.5 text-slate-600 ${isAr ? "rotate-180" : ""}`} />
              </li>
              <li
                className="text-cyan-400 font-semibold truncate max-w-xs sm:max-w-md"
                aria-current="page"
              >
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Article Header & Meta Section */}
          <header className="max-w-4xl space-y-5 mb-10 text-start">
            {/* Meta tags top bar */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-400/30">
                {article.category}
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <time dateTime={article.publishedAt}>
                  {isAr ? "تاريخ النشر: " : "Published: "}
                  {new Date(article.publishedAt).toLocaleDateString(
                    isAr ? "ar-SA" : "en-US",
                    {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }
                  )}
                </time>
              </span>

              {article.updatedAt && (
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <RefreshCw className="w-3 h-3 text-cyan-400" />
                  <span>
                    {isAr ? "آخر تحديث: " : "Updated: "}
                    {new Date(article.updatedAt).toLocaleDateString(
                      isAr ? "ar-SA" : "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </span>
                </span>
              )}

              {article.readTime && (
                <span className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{article.readTime}</span>
                </span>
              )}
            </div>

            {/* Main Title (H1) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            {/* Excerpt Lead Paragraph */}
            <p
              className={`text-slate-300 text-base sm:text-lg lg:text-xl leading-relaxed font-normal py-1 ${
                isAr ? "border-r-2 border-cyan-500/40 pr-4" : "border-l-2 border-cyan-500/40 pl-4"
              }`}
            >
              {article.excerpt}
            </p>

            {/* Focus Keyword & Author Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-cyan-400/30 p-0.5 bg-[#060913]">
                  <Image
                    src="/images/osama-elgendy.jpg"
                    alt={isAr ? "أسامة الجندي" : "Osama Elgendy"}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">
                    {isAr ? "أسامة الجندي" : "Osama Elgendy"}
                  </div>
                  <div className="text-[11px] text-cyan-400 font-medium">
                    {isAr
                      ? "قائد فريق السيو وخبير سيو المتاجر"
                      : "SEO Team Leader & E-Commerce SEO Specialist"}
                  </div>
                </div>
              </div>

              {article.focusKeyword && (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
                  <Target className="w-3.5 h-3.5 text-growth-400" />
                  <span className="text-slate-400">
                    {isAr ? "الكلمة المستهدفة:" : "Focus:"}
                  </span>
                  <strong className="text-white">{article.focusKeyword}</strong>
                </div>
              )}
            </div>
          </header>

          {/* Featured Hero Image */}
          <div className="relative aspect-[16/9] w-full max-h-[520px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl mb-12 bg-[#090e1c]">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-40" />
          </div>

          {/* Two-Column Grid: Content & Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-start">
            {/* Primary Content Column */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Body Markdown Renderer */}
              <div className="prose-container">
                <MarkdownRenderer content={article.content} />
              </div>

              {/* Social Share & Progress Bar */}
              <ArticleShareBar title={article.title} url={canonicalUrl} lang={lang} />

              {/* Tags Cloud */}
              {article.tags && article.tags.length > 0 && (
                <div className="pt-6 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-400 flex items-center gap-1 mr-2">
                    <Tag className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{isAr ? "الوسوم:" : "Tags:"}</span>
                  </span>
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg bg-slate-900 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Dynamic FAQ Accordion Section */}
              {article.faqItems && article.faqItems.length > 0 && (
                <ArticleFAQAccordion faqItems={article.faqItems} lang={lang} />
              )}

              {/* Author Bio Card with Audits & WhatsApp CTAs */}
              <ArticleAuthorCard lang={lang} />
            </div>

            {/* Sidebar Column (Desktop Sticky) */}
            <aside className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 space-y-6">
                {/* Table of Contents */}
                {tocItems.length > 0 && <TableOfContents items={tocItems} lang={lang} />}

                {/* Free Audit Card */}
                <div className="rounded-2xl p-6 bg-gradient-to-br from-[#0a1224] to-[#070b16] border border-cyan-500/25 shadow-xl space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <h3 className="text-base font-heading font-extrabold text-white">
                      {isAr
                        ? "هل تحتاج إلى فحص سيو تقني شامل؟"
                        : "Need a Technical SEO Audit?"}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      {isAr
                        ? "كشف أخطاء الأرشفة، مؤشرات سرعة Core Web Vitals، واستخراج الكلمات المربحة لمتجرك."
                        : "Identify indexing bottlenecks, Core Web Vitals issues, and keyword expansion opportunities."}
                    </p>
                  </div>
                  <Link
                    href={`${basePrefix}/book`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 shadow-glow hover:opacity-95 transition-all"
                  >
                    <span>{isAr ? "احجز فحص سيو مجاني" : "Book Free Audit"}</span>
                    <ArrowRight className={`w-3.5 h-3.5 ${isAr ? "rotate-180" : ""}`} />
                  </Link>
                </div>

                {/* Article Info Card */}
                <div className="rounded-2xl p-5 bg-[#090e1c] border border-white/10 text-xs space-y-3">
                  <div className="font-bold text-slate-200 border-b border-white/10 pb-2">
                    {isAr ? "بيانات المقال" : "Article Summary"}
                  </div>
                  <div className="flex justify-between py-1 text-slate-400">
                    <span>{isAr ? "التصنيف" : "Category"}</span>
                    <strong className="text-cyan-400">{article.category}</strong>
                  </div>
                  <div className="flex justify-between py-1 text-slate-400">
                    <span>{isAr ? "وقت القراءة المقدر" : "Estimated Read"}</span>
                    <strong className="text-white">
                      {article.readTime || (isAr ? "7 دقائق" : "7 min")}
                    </strong>
                  </div>
                  <div className="flex justify-between py-1 text-slate-400">
                    <span>{isAr ? "الكلمة المفتاحية" : "Focus Keyword"}</span>
                    <strong className="text-slate-200">{article.focusKeyword}</strong>
                  </div>
                  <div className="flex justify-between py-1 text-slate-400">
                    <span>{isAr ? "حالة الفهرسة" : "Indexed Status"}</span>
                    <span className="text-growth-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-growth-400 animate-pulse" />
                      {isAr ? "مؤرشف ونشط في SERP" : "Live & Indexable"}
                    </span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <section
              className="mt-24 pt-12 border-t border-white/10 text-start"
              aria-labelledby="related-heading"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                    {isAr ? "تابع القراءة" : "Keep Reading"}
                  </span>
                  <h2
                    id="related-heading"
                    className="text-2xl sm:text-3xl font-heading font-extrabold text-white"
                  >
                    {isAr
                      ? "مقالات واستراتيجيات سيو ذات صلة"
                      : "Related SEO Architecture Guides"}
                  </h2>
                </div>
                <Link
                  href={`${basePrefix}/blog`}
                  className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>{isAr ? "عرض جميع المقالات" : "View All Articles"}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isAr ? "rotate-180" : ""}`} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((rel) => (
                  <article
                    key={rel.id}
                    className="group rounded-2xl bg-[#090e1c] border border-white/10 hover:border-cyan-500/30 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1"
                  >
                    <Link
                      href={`${basePrefix}/blog/${rel.slug}`}
                      className="relative aspect-[16/9] w-full block overflow-hidden bg-[#060913]"
                    >
                      <Image
                        src={rel.featuredImage}
                        alt={rel.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-2.5 left-2.5">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#060913]/90 text-cyan-300 border border-cyan-400/30">
                          {rel.category}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                      <h3 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                        <Link href={`${basePrefix}/blog/${rel.slug}`}>
                          {rel.title}
                        </Link>
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {rel.excerpt}
                      </p>
                      <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                        <span>{rel.readTime || (isAr ? "6 دقائق" : "6 min")}</span>
                        <Link
                          href={`${basePrefix}/blog/${rel.slug}`}
                          className="font-bold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1"
                        >
                          <span>{isAr ? "قراءة المقال" : "Read"}</span>
                          <ArrowRight className={`w-3 h-3 ${isAr ? "rotate-180" : ""}`} />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />
    </div>
  );
};

