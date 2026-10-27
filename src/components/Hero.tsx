"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import {
  ArrowRight,
  TrendingUp,
  Download,
  Search,
  CheckCircle2,
  Sparkles,
  BarChart3,
  Award,
  Globe2,
} from "lucide-react";

interface HeroProps {
  lang: Language;
  onOpenAudit?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenAudit }) => {
  const t = translations[lang];
  const isAr = lang === "ar";

  const handleDownloadPdf = () => {
    // Generate and download Osama Elgendy portfolio PDF summary or open in new tab
    const pdfUrl = "/osama-elgendy-portfolio.pdf";
    window.open(pdfUrl, "_blank");
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background ambient decorative glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute top-40 right-1/4 w-96 h-96 bg-growth-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-subtle" />
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-start space-y-6">
            {/* Top Verification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-brand-500/30 text-xs sm:text-sm font-semibold text-slate-200 shadow-glow">
              <span className="flex h-2 w-2 rounded-full bg-growth-400 animate-ping" />
              <span className="text-cyan-400 font-bold">Google & Semrush Certified</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-300">{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              {isAr ? (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                    أسامة الجندي
                  </span>{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-gradient-cyan">SEO Team Leader</span> &{" "}
                  <span className="text-gradient-growth">E-Commerce Specialist</span>
                </>
              ) : (
                <>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                    Osama Elgendy
                  </span>{" "}
                  <br className="hidden sm:inline" />
                  <span className="text-gradient-cyan">SEO Team Leader</span> &{" "}
                  <span className="text-gradient-growth">E-Commerce SEO Specialist</span>
                </>
              )}
            </h1>

            {/* Subheadline with high converting authority */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              {t.hero.subheadline}
            </p>

            {/* Key Value Prop Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full max-w-xl text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-slate-900/40 border border-white/5 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-growth-400 shrink-0" />
                <span>Deep Technical SEO & Core Web Vitals</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-white/5 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Salla, Zid, Shopify & WooCommerce Growth</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-white/5 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                <span>AI Search (GEO / AEO) & Copilot Citations</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-white/5 px-3 py-2 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-growth-400 shrink-0" />
                <span>Google Search Console Verified Results</span>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              {/* Primary: Book Free Audit */}
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 hover:opacity-95 shadow-glow hover:shadow-glow-emerald transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-200" />
                <span>{t.hero.ctaAudit}</span>
                <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
              </Link>

              {/* Secondary: View GSC Case Studies */}
              <a
                href="#results"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-white/10 hover:border-cyan-400/40 transition-all"
              >
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>{t.hero.ctaCases}</span>
              </a>

              {/* Tertiary: Download Portfolio PDF */}
              <button
                onClick={handleDownloadPdf}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-transparent hover:bg-white/5 border border-white/10 transition-colors"
                title="Download verified portfolio documentation"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>{t.hero.ctaDownload}</span>
              </button>
            </div>

            {/* Fast Stats Highlight under CTAs */}
            <div className="pt-4 border-t border-white/10 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center sm:text-start">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-heading">120+</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statWebsites}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">50+</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statStores}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-growth-400 font-heading">600K+</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statLeads}</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-400 font-heading">50K+</p>
                <p className="text-xs text-slate-400 font-medium">{t.hero.statBacklinks}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Live Interactive Stats Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Outer circular gradient glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-600/30 via-cyan-500/20 to-growth-500/30 blur-2xl opacity-60" />

            {/* Card Container */}
            <div className="relative w-full max-w-md rounded-3xl p-1 bg-gradient-to-b from-cyan-500/30 via-white/10 to-growth-500/20 shadow-glow-card">
              <div className="relative rounded-[22px] overflow-hidden bg-[#0a0f1e] p-3 sm:p-4">
                {/* Photo of Osama Elgendy */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-inner">
                  <Image
                    src="/images/osama-elgendy.jpg"
                    alt="Osama Elgendy - SEO Team Leader & E-Commerce SEO Specialist"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/60 to-transparent" />

                  {/* Active Status Badge on Image */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-growth-500/40 text-xs font-semibold text-white">
                    <span className="w-2 h-2 rounded-full bg-growth-400 animate-pulse" />
                    <span>Available for Projects</span>
                  </div>

                  {/* Saudi Arabia & MENA Focus Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-xs font-medium text-slate-200">
                    <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>KSA & MENA</span>
                  </div>
                </div>

                {/* Floating GSC Performance Mini Card (Bottom Left) */}
                <div className="mt-3 bg-slate-900/90 border border-cyan-500/30 rounded-xl p-3 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-medium">GSC Verified Surge</p>
                      <p className="text-sm font-bold text-white flex items-center gap-1">
                        +148% Clicks <span className="text-[10px] text-growth-400">(Last Quarter)</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-end">
                    <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-growth-500/20 text-growth-400 border border-growth-500/30">
                      Top 1-3 SERP
                    </span>
                  </div>
                </div>

                {/* Second Floating Mini Badge: Semrush Certified */}
                <div className="mt-2 bg-slate-900/60 border border-white/10 rounded-xl px-3 py-2 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    Bastian Grimm Certified Technical SEO
                  </span>
                  <span className="text-cyan-400 font-semibold">Semrush Academy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
