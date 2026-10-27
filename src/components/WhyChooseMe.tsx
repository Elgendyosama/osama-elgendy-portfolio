"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import {
  TrendingUp,
  Cpu,
  Trophy,
  Sparkles,
  Sliders,
  Globe2,
  CheckCircle,
  ShieldCheck,
} from "lucide-react";

interface WhyChooseMeProps {
  lang: Language;
}

export const WhyChooseMe: React.FC<WhyChooseMeProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  const pillars = [
    {
      icon: <TrendingUp className="w-6 h-6 text-growth-400" />,
      title: "Results-Driven Approach",
      titleAr: "منهجية ترتكز على نمو الأعمال والأرباح",
      desc: "I don't just aim for vanity impressions; I focus on driving high-intent commercial traffic that converts directly into paying customers and business scale.",
      descAr: "لا نركز على مجرد أرقام وهمية، بل نوجه الزيارات ذات النية الشرائية العالية لتتحول مباشرة لمبيعات وعقود حقيقية.",
    },
    {
      icon: <Cpu className="w-6 h-6 text-cyan-400" />,
      title: "Technical Strategic Mastery",
      titleAr: "خبرة تقنية وبرمجية عميقة",
      desc: "From Core Web Vitals to server log audits, faceted indexing control, and JavaScript hydration, websites are engineered for peak search engine crawlability.",
      descAr: "من تحسين سرعة مؤشرات الويب الأساسية وحتى سجلات الخوادم وفهرسة الفلاتر، نضمن معمارية موقع مثالية لعناكب البحث.",
    },
    {
      icon: <Trophy className="w-6 h-6 text-amber-400" />,
      title: "Proven Track Record",
      titleAr: "سجل نجاح موثق ومعتمد",
      desc: "Demonstrated history with 120+ optimized platforms, 50+ scaled stores in Saudi Arabia & UAE, and 400+ first-page ranking commercial keywords.",
      descAr: "سجل إنجازات يضم أكثر من 120 موقعاً و 50 متجراً بالسعودية والخليج و 400+ كلمة متصدرة بالصفحة الأولى.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: "Ahead of AI & Algorithm Trends",
      titleAr: "مواكبة سيو الذكاء الاصطناعي والتحديثات",
      desc: "Pioneering Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) for ChatGPT, Perplexity, and Google Gemini AI Overviews.",
      descAr: "رواد في سيو الذكاء الاصطناعي وتهيئة المواقع للاقتباس المباشر في ChatGPT و Google Gemini AI Overviews.",
    },
    {
      icon: <Sliders className="w-6 h-6 text-brand-400" />,
      title: "Bespoke Custom Strategies",
      titleAr: "استراتيجيات مخصصة لكل قطاع",
      desc: "No cookie-cutter templates. Every business gets a tailored roadmap matching target customer demographics, regional competitors, and market nuances.",
      descAr: "لا نستخدم قوالب جاهزة؛ بل نضع خطة نمو فريدة تدرس طبيعة جمهورك ومنافسيك وتفاصيل السوق الخليجي والمصري.",
    },
    {
      icon: <Globe2 className="w-6 h-6 text-emerald-400" />,
      title: "Google & Bing Webmaster Dual Authority",
      titleAr: "إتقان أدوات Google و Bing Webmaster",
      desc: "Optimizing for both Google and Microsoft Bing engines to unlock additional high-converting traffic from Copilot and desktop enterprise searches.",
      descAr: "تحسين المواقع لمحركي بحث جوجل وبينج معاً للاستفادة من زيارات Microsoft Copilot والبحث المكتبي للشركات.",
    },
  ];

  return (
    <section className="relative py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-growth-950/60 border border-growth-500/20 text-xs font-semibold text-growth-300 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{t.whyChoose.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            {t.whyChoose.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            {t.whyChoose.subheading}
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl p-7 bg-gradient-to-b from-slate-900/80 to-[#0a0f1e] border border-white/10 hover:border-growth-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white font-heading group-hover:text-growth-300 transition-colors">
                {isAr ? item.titleAr : item.title}
              </h3>

              <p className="mt-2.5 text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                {isAr ? item.descAr : item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Impact Quote Banner */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-brand-900/40 via-cyan-900/30 to-growth-900/40 border border-cyan-500/30 text-center relative overflow-hidden">
          <p className="text-base sm:text-xl font-bold text-white max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? "«مع خبرتي، لن يحصل متجرك أو موقعك على مجرد ترتيب أعلى، بل سيتضاعف نموه، ويجذب العملاء المستهدفين، ويحقق استدامة طويلة الأمد.»"
              : "“With my expertise, your business won’t just rank higher—it will grow, attract the right audience, and achieve long-term market dominance!”"}
          </p>
          <p className="mt-2 text-xs sm:text-sm font-semibold text-cyan-400">
            — Osama Elgendy, SEO Team Leader & E-Commerce SEO Specialist
          </p>
        </div>
      </div>
    </section>
  );
};
