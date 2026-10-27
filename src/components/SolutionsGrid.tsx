"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { translations, Language } from "@/lib/translations";
import { getServices } from "@/lib/store";
import { ServiceItem } from "@/lib/types";
import {
  Wrench,
  ShoppingBag,
  Cpu,
  FileText,
  Link2,
  Target,
  MapPin,
  CheckCircle,
  ArrowRight,
  Layers,
  Sparkles,
} from "lucide-react";

interface SolutionsGridProps {
  lang: Language;
  onSelectService?: (serviceName: string) => void;
}

export const SolutionsGrid: React.FC<SolutionsGridProps> = ({ lang, onSelectService }) => {
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const isAr = lang === "ar";
  const t = translations[lang];

  useEffect(() => {
    setServices(getServices());
  }, []);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Wrench":
        return <Wrench className="w-6 h-6 text-cyan-400" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-emerald-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-brand-400" />;
      case "Link2":
        return <Link2 className="w-6 h-6 text-indigo-400" />;
      case "Target":
        return <Target className="w-6 h-6 text-rose-400" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-400" />;
    }
  };

  const categories = [
    { id: "All", label: isAr ? "جميع الخدمات" : "All Solutions" },
    { id: "Technical", label: isAr ? "سيو تقني" : "Technical SEO" },
    { id: "E-commerce", label: isAr ? "المتاجر الإلكترونية" : "E-Commerce" },
    { id: "Growth", label: isAr ? "النمو والروابط" : "Growth & Links" },
    { id: "AI & Next-Gen", label: isAr ? "سيو الذكاء الاصطناعي" : "AI & Next-Gen" },
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  return (
    <section id="solutions" className="relative py-24 bg-[#060913] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.solutions.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            {t.solutions.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            {t.solutions.subheading}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-glow"
                  : "bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className={`relative rounded-3xl p-6 bg-gradient-to-b from-slate-900/90 to-[#0b101f] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl ${
                service.category === "AI & Next-Gen"
                  ? "border-purple-500/30 md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              {/* Top Row: Icon + Metric Tag */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {service.metricsHighlight}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {isAr ? service.titleAr : service.title}
                </h3>

                {/* Service Summary */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-300/80 leading-relaxed">
                  {isAr ? service.summaryAr : service.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 pt-4 border-t border-white/5 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    {t.solutions.viewDeliverables}
                  </p>
                  {(isAr ? service.deliverablesAr : service.deliverables).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-growth-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <Link
                  href={`/book?service=${encodeURIComponent(isAr ? service.titleAr : service.title)}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-200 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all group-hover:bg-cyan-500/10"
                >
                  <span>{t.solutions.requestService}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isAr ? "rotate-180" : ""}`} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
