"use client";

import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import { platformList, toolsList } from "@/lib/store";
import { Layers, CheckCircle2, Cpu, Sparkles, Database, Laptop, Search, Globe } from "lucide-react";

interface PlatformChipsProps {
  lang: Language;
}

export const PlatformChips: React.FC<PlatformChipsProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<"platforms" | "tools">("platforms");
  const isAr = lang === "ar";
  const t = translations[lang];

  return (
    <section id="platforms" className="relative py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.platforms.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            {t.platforms.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            {t.platforms.subheading}
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-slate-100 border border-slate-200 flex items-center gap-1">
            <button
              onClick={() => setActiveTab("platforms")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "platforms"
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span>{t.platforms.platformsTab}</span>
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === "tools"
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Search className="w-4 h-4" />
              <span>{t.platforms.toolsTab}</span>
            </button>
          </div>
        </div>

        {/* Platforms Grid View */}
        {activeTab === "platforms" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in">
            {platformList.map((platform, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl p-5 bg-white border border-slate-200 hover:border-brand-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                      {platform.badge}
                    </span>
                    <span className="text-[11px] font-semibold text-brand-700">
                      {platform.level}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-heading group-hover:text-brand-600 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">{platform.category}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-500">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  <span>Technical & E-Commerce Integration</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SEO Tools Grid View */}
        {activeTab === "tools" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 animate-in fade-in">
            {toolsList.map((tool, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl p-5 bg-white border border-slate-200 hover:border-brand-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                      {tool.type}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-heading group-hover:text-brand-600 transition-colors">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-snug">{tool.usage}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
