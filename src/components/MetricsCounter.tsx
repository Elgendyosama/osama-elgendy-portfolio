"use client";

import React, { useEffect, useState, useRef } from "react";
import { translations, Language } from "@/lib/translations";
import { getMetrics } from "@/lib/store";
import { MetricItem } from "@/lib/types";
import {
  Globe,
  ShoppingBag,
  Target,
  Link2,
  Users,
  ShoppingCart,
  Smile,
  TrendingUp,
  Award,
} from "lucide-react";

interface MetricsCounterProps {
  lang: Language;
}

export const MetricsCounter: React.FC<MetricsCounterProps> = ({ lang }) => {
  const [metrics, setMetrics] = useState<MetricItem[]>([]);
  const isAr = lang === "ar";
  const t = translations[lang];

  useEffect(() => {
    setMetrics(getMetrics());
  }, []);

  const getMetricIcon = (id: string) => {
    switch (id) {
      case "m-1":
        return <Globe className="w-5 h-5 text-brand-600" />;
      case "m-2":
        return <ShoppingBag className="w-5 h-5 text-amber-600" />;
      case "m-3":
        return <Target className="w-5 h-5 text-brand-600" />;
      case "m-4":
        return <Link2 className="w-5 h-5 text-slate-700" />;
      case "m-5":
        return <Users className="w-5 h-5 text-brand-600" />;
      case "m-6":
        return <ShoppingCart className="w-5 h-5 text-rose-600" />;
      case "m-7":
        return <Smile className="w-5 h-5 text-emerald-600" />;
      default:
        return <Award className="w-5 h-5 text-brand-600" />;
    }
  };

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <section className="relative py-16 bg-[#f8fafc] border-y border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>{t.metrics.headingBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 font-heading tracking-tight">
            {t.metrics.heading}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            {t.metrics.subheading}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xl:gap-5">
          {metrics.map((item, index) => (
            <div
              key={item.id}
              className={`relative rounded-2xl p-5 bg-white border border-slate-200/80 hover:border-brand-500/50 hover:shadow-xl shadow-sm transition-all duration-300 hover:-translate-y-1 group ${
                index === 0 ? "sm:col-span-2 lg:col-span-1 border-brand-300 shadow-md" : ""
              }`}
            >
              {/* Top Row: Icon + Trend Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getMetricIcon(item.id)}
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                  {item.trend}
                </span>
              </div>

              {/* Number Value */}
              <div className="flex items-baseline gap-1">
                {item.prefix && <span className="text-xl font-bold text-slate-500">{item.prefix}</span>}
                <span className="text-3xl sm:text-4xl font-black font-heading text-slate-900 tracking-tight group-hover:text-brand-600 transition-colors">
                  {formatNumber(item.value)}
                </span>
                <span className="text-2xl font-black text-brand-600 font-heading">{item.suffix}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-2">
                {isAr ? item.labelAr : item.label}
              </h3>
              <p className="text-xs text-slate-600 mt-1 line-clamp-2">
                {isAr ? item.descriptionAr : item.description}
              </p>

              {/* Bottom decorative line */}
              <div className="absolute inset-x-5 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/20 to-transparent group-hover:via-brand-500 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
