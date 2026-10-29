"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuditModal } from "@/components/AuditModal";
import { getAllArticles } from "@/lib/articles";
import { Article } from "@/lib/types";
import { Language } from "@/lib/translations";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Tag,
  Flame,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function BlogArchivePage() {
  const [lang, setLang] = useState<Language>("en");
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Load published English articles
    const all = getAllArticles().filter(
      (a) => a.isPublished && (a.lang || "en") === "en"
    );
    setArticles(all);
    setLang("en");
  }, []);

  const handleToggleLang = () => {
    const nextLang: Language = lang === "en" ? "ar" : "en";
    setLang(nextLang);
    localStorage.setItem("osama_portfolio_lang", nextLang);
  };

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category).filter(Boolean)));
    return ["All", ...cats];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory =
        selectedCategory === "All" || art.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        art.title.toLowerCase().includes(query) ||
        art.excerpt.toLowerCase().includes(query) ||
        art.tags.some((t) => t.toLowerCase().includes(query)) ||
        art.focusKeyword.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [articles, selectedCategory, searchQuery]);

  const isAr = lang === "ar";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#f8fafc] text-slate-900 ${
        isAr ? "font-arabic" : "font-sans"
      } selection:bg-brand-500 selection:text-white`}
    >
      {/* Global Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Main Content */}
      <main className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <li>
                <Link href="/" className="hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </li>
              <li className="text-brand-700 font-semibold" aria-current="page">
                Articles & Blog
              </li>
            </ol>
          </nav>

          {/* Hero Header Section */}
          <header className="max-w-4xl space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5 text-brand-600 animate-pulse" />
              <span>Technical SEO & AI Search Architecture</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-900 leading-tight">
              Actionable SEO Insights,{" "}
              <span className="text-brand-600">
                Data Engineering
              </span>{" "}
              & AI Search Blueprints
            </h1>

            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl">
              In-depth architectural guides on Next.js Technical SEO, Core Web Vitals optimization, regional GCC e-commerce revenue growth (Salla, Zid, Shopify), and Generative Engine Optimization (GEO).
            </p>
          </header>

          {/* Search Bar & Category Filters */}
          <section className="mb-12 space-y-6" aria-label="Filter articles">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-lg">
                <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  id="article-search"
                  type="text"
                  placeholder="Search articles by title, keyword, or tech..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Counter Indicator */}
              <div className="text-xs text-slate-500 flex items-center gap-2 self-end md:self-auto">
                <BookOpen className="w-4 h-4 text-brand-600" />
                <span>
                  Showing <strong className="text-slate-900">{filteredArticles.length}</strong> of{" "}
                  {articles.length} articles
                </span>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {categories.map((category) => {
                const isSelected = selectedCategory === category;
                const count =
                  category === "All"
                    ? articles.length
                    : articles.filter((a) => a.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                        : "bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200"
                    }`}
                  >
                    <span>{category}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article, idx) => (
                <article
                  key={article.id}
                  className="group rounded-3xl bg-white border border-slate-200 hover:border-brand-500/40 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl"
                >
                  {/* Featured Image Link */}
                  <Link
                    href={`/blog/${article.slug}`}
                    className="relative aspect-[16/9] w-full overflow-hidden block bg-slate-100"
                  >
                    <Image
                      src={article.featuredImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={idx === 0}
                    />

                    {/* Category Badge Overlay */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/95 text-brand-700 border border-brand-200 backdrop-blur-md shadow-sm">
                        {article.category}
                      </span>
                    </div>

                    {/* Views or Read Time */}
                    {article.readTime && (
                      <div className="absolute bottom-3 right-3.5 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-sm text-[11px] text-slate-700 font-medium border border-slate-200/80 shadow-sm">
                        <Clock className="w-3 h-3 text-brand-600" />
                        <span>{article.readTime}</span>
                      </div>
                    )}
                  </Link>

                  {/* Article Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      {/* Publish Date */}
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          <time dateTime={article.publishedAt}>
                            {new Date(article.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </time>
                        </span>
                        {article.views && (
                          <span className="flex items-center gap-1 text-slate-500">
                            <Flame className="w-3 h-3 text-amber-500" />
                            <span>{article.views.toLocaleString()} reads</span>
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="font-heading font-bold text-lg sm:text-xl text-slate-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs text-slate-500">By Osama Elgendy</span>
                        <Link
                          href={`/blog/${article.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-brand-600 group-hover:text-brand-700 group-hover:translate-x-0.5 transition-all"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-20 px-4 rounded-3xl bg-white border border-slate-200 max-w-lg mx-auto space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">
                No matching articles found
              </h3>
              <p className="text-xs text-slate-600">
                We couldn&apos;t find any articles matching &ldquo;{searchQuery}&rdquo;. Try
                adjusting your search query or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Bottom Free Audit CTA Banner */}
          <section className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-brand-50 via-slate-50 to-brand-50/50 border border-brand-200 shadow-md relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-100 text-brand-800 border border-brand-200">
                Enterprise & E-Commerce SEO
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-slate-900 leading-tight">
                Ready to Turn Search Engines into Your Primary Revenue Channel?
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Book a comprehensive technical SEO audit with Osama Elgendy. Uncover crawl blockers, Core Web Vitals bottlenecks, taxonomy gaps, and high-converting keyword targets.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all hover:scale-105"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>Claim Free Technical Audit</span>
                </Link>
                <a
                  href="https://wa.me/201005647312"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-[#22a344] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />

      {/* Audit Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
