"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import { auditRoadmapSteps } from "@/lib/store";
import { Compass, CheckCircle2, ArrowRight } from "lucide-react";

interface AuditRoadmapProps {
  lang: Language;
}

export const AuditRoadmap: React.FC<AuditRoadmapProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  return (
    <section id="roadmap" className="relative py-24 bg-[#080d1a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>{t.roadmap.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            {t.roadmap.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            {t.roadmap.subheading}
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {auditRoadmapSteps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-2xl p-6 bg-gradient-to-b from-slate-900/90 to-[#0b1020] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg flex flex-col justify-between"
            >
              <div>
                {/* Step Number Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center font-heading font-black text-sm text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    0{step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {t.roadmap.step} {step.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-lg font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                  {isAr ? step.titleAr : step.title}
                </h3>

                {/* Step Description */}
                <p className="mt-2 text-xs text-slate-300/80 leading-relaxed">
                  {isAr ? step.descriptionAr : step.description}
                </p>
              </div>

              {/* Checkpoints */}
              <div className="mt-5 pt-4 border-t border-white/5 space-y-1.5">
                {step.keyCheckpoints.map((cp, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-growth-400 shrink-0" />
                    <span>{cp}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
