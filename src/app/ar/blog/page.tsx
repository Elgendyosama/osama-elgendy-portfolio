"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuditModal } from "@/components/AuditModal";
import { getAllArticles } from "@/lib/articles";
import { Article } from "@/lib/types";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  BookOpen,
  Tag,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

export default function ArabicBlogArchivePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    // Load published Arabic articles
    const all = getAllArticles().filter(
      (a) => a.isPublished && a.lang === "ar"
    );
    setArticles(all);
  }, []);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category).filter(Boolean)));
    return ["الكل", ...cats];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((art) => {
      const matchesCategory =
        selectedCategory === "الكل" || art.category === selectedCategory;
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

  const featuredArticle = filteredArticles[0] || null;
  const regularArticles = filteredArticles.slice(1);

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#060913] text-slate-100 font-arabic selection:bg-cyan-500 selection:text-black"
    >
      {/* Global Navbar */}
      <Navbar
        lang="ar"
        onOpenAudit={() => setIsAuditModalOpen(true)}
      />

      {/* Main Content */}
      <main className="pt-28 pb-20 text-start">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs Navigation */}
          <nav aria-label="مسار التصفح" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-medium text-slate-400">
              <li>
                <Link href="/ar" className="hover:text-cyan-400 transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 rotate-180" />
              </li>
              <li className="text-cyan-400 font-semibold" aria-current="page">
                دليل مقالات واستراتيجيات السيو
              </li>
            </ol>
          </nav>

          {/* Hero Header Section */}
          <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 mb-14 bg-gradient-to-br from-[#0c1326] via-[#090e1c] to-[#060913] border border-cyan-500/20 shadow-2xl overflow-hidden">
            {/* Ambient Lighting Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                <span>دليل السيو التقني ومضاعفة أرباح المتاجر</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                أحدث استراتيجيات السيو التقني وتصدر محركات الذكاء الاصطناعي
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                مقالات متعمقة ودراسات حالة عملية من واقع إدارة السيو لأكثر من 120 موقعاً و50 متجراً في السعودية والخليج العربي. من تهيئة Next.js وسرعة Core Web Vitals إلى تصدر ملخصات Google AI Overviews.
              </p>

              {/* Search Bar Input */}
              <div className="pt-2">
                <div className="relative max-w-xl">
                  <Search className="w-4 h-4 text-cyan-400 absolute right-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="ابحث في المقالات، الاستراتيجيات، الكلمات المفتاحية..."
                    className="w-full pr-11 pl-4 py-3 rounded-2xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 shadow-inner transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-2 py-1 rounded-md bg-white/5"
                    >
                      مسح
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-glow"
                    : "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Empty Search Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-20 rounded-3xl bg-[#090e1c] border border-white/10 p-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">لم يتم العثور على مقالات مطابقة</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto">
                لا توجد مقالات تطابق بحثك حالياً. جرّب كلمات بحثية مختلفة أو اختر تصنيفاً آخر.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("الكل");
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
              >
                عرض كل المقالات
              </button>
            </div>
          )}

          {/* Featured Article Card */}
          {featuredArticle && (
            <div className="mb-14">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-4 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>المقال المميز الأكثر قراءة</span>
              </div>

              <article className="group rounded-3xl bg-gradient-to-br from-[#0c1326] to-[#080d1a] border border-cyan-500/30 shadow-2xl overflow-hidden hover:border-cyan-400/60 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
                  {/* Article Image Container */}
                  <Link
                    href={`/ar/blog/${featuredArticle.slug}`}
                    className="lg:col-span-6 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-cyan-400/40 transition-colors block"
                  >
                    <Image
                      src={featuredArticle.featuredImage}
                      alt={featuredArticle.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#060913]/90 text-cyan-300 border border-cyan-400/30 backdrop-blur-md">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </Link>

                  {/* Article Content Info */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        <span>
                          {new Date(featuredArticle.publishedAt).toLocaleDateString("ar-SA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{featuredArticle.readTime || "7 دقائق قراءة"}</span>
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-black text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      <Link href={`/ar/blog/${featuredArticle.slug}`}>
                        {featuredArticle.title}
                      </Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {featuredArticle.excerpt}
                    </p>

                    {/* Tags */}
                    {featuredArticle.tags && featuredArticle.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {featuredArticle.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-slate-900 border border-white/5 text-[11px] text-slate-400"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="pt-3">
                      <Link
                        href={`/ar/blog/${featuredArticle.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 shadow-glow hover:opacity-95 transition-all"
                      >
                        <span>قراءة المقال بالكامل</span>
                        <ArrowRight className="w-4 h-4 rotate-180" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* Regular Articles Grid */}
          {regularArticles.length > 0 && (
            <div className="space-y-6">
              <h2 className="text-xl font-heading font-black text-white border-b border-white/10 pb-3">
                جميع المقالات والدراسات ({filteredArticles.length})
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {regularArticles.map((art) => (
                  <article
                    key={art.id}
                    className="group rounded-3xl bg-[#090e1c] border border-white/10 hover:border-cyan-500/40 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                  >
                    {/* Featured Image Thumbnail */}
                    <Link
                      href={`/ar/blog/${art.slug}`}
                      className="relative aspect-[16/10] w-full block overflow-hidden bg-[#060913]"
                    >
                      <Image
                        src={art.featuredImage}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#060913]/90 text-cyan-300 border border-cyan-400/30">
                          {art.category}
                        </span>
                      </div>
                    </Link>

                    {/* Card Content */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center gap-2 text-[11px] text-slate-500">
                          <Calendar className="w-3 h-3" />
                          <span>
                            {new Date(art.publishedAt).toLocaleDateString("ar-SA", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{art.readTime || "6 دقائق"}</span>
                        </div>

                        <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-2 leading-snug">
                          <Link href={`/ar/blog/${art.slug}`}>{art.title}</Link>
                        </h3>

                        <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                          {art.excerpt}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-slate-400">
                          <Tag className="w-3 h-3 text-cyan-400" />
                          <span className="truncate max-w-[140px]">
                            {art.tags?.[0] || art.category}
                          </span>
                        </div>

                        <Link
                          href={`/ar/blog/${art.slug}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors"
                        >
                          <span>قراءة</span>
                          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Global Footer */}
      <Footer lang="ar" />

      {/* Audit Booking Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        lang="ar"
      />
    </div>
  );
}

