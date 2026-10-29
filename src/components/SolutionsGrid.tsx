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
        return <Wrench className="w-6 h-6 text-brand-600" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-brand-600" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-brand-600" />;
      case "FileText":
        return <FileText className="w-6 h-6 text-brand-600" />;
      case "Link2":
        return <Link2 className="w-6 h-6 text-brand-600" />;
      case "Target":
        return <Target className="w-6 h-6 text-brand-600" />;
      case "MapPin":
        return <MapPin className="w-6 h-6 text-brand-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-brand-600" />;
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
    <section id="solutions" className="relative py-24 bg-white overflow-hidden border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.solutions.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            {t.solutions.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
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
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/60"
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
              className={`relative rounded-3xl p-6 bg-white border border-slate-200 hover:border-brand-500/50 hover:shadow-xl shadow-sm transition-all duration-300 flex flex-col justify-between group ${
                service.category === "AI & Next-Gen"
                  ? "border-brand-300 md:col-span-2 lg:col-span-1 shadow-md"
                  : ""
              }`}
            >
              {/* Top Row: Icon + Metric Tag */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                    {service.metricsHighlight}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-brand-600 transition-colors">
                  {isAr ? service.titleAr : service.title}
                </h3>

                {/* Service Summary */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isAr ? service.summaryAr : service.summary}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    {t.solutions.viewDeliverables}
                  </p>
                  {(isAr ? service.deliverablesAr : service.deliverables).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={`/book?service=${encodeURIComponent(isAr ? service.titleAr : service.title)}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-slate-50 hover:bg-brand-50 hover:text-brand-700 border border-slate-200 hover:border-brand-300 transition-all"
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
