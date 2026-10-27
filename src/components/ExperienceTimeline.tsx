"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import { experiences } from "@/lib/store";
import { Briefcase, Calendar, CheckCircle2, Building, Award } from "lucide-react";

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  return (
    <section id="experience" className="relative py-24 bg-[#080d1a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-950/60 border border-brand-500/20 text-xs font-semibold text-brand-300 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            {t.experience.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            {t.experience.subheading}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 md:border-l-0 md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-brand-500 md:before:via-cyan-500 md:before:to-growth-500 pl-6 md:pl-0 space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row items-center ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Center Connector Dot on Desktop */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#060913] border-4 border-cyan-400 items-center justify-center shadow-glow z-20">
                  <span className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Left/Right Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] ${
                    isEven ? "md:pl-0 md:text-end" : "md:pr-0 md:text-start"
                  }`}
                >
                  <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-900/90 to-[#0b1020] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl group hover:-translate-y-1">
                    {/* Header: Period & Role */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-300">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-xs text-slate-400 font-mono">{exp.location}</span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                      {isAr ? exp.roleAr : exp.role}
                    </h3>

                    {/* Company Name */}
                    <p className="text-sm font-semibold text-brand-400 mt-1 flex items-center gap-1.5 justify-start md:inline-flex">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300/90 mt-3 leading-relaxed">
                      {isAr ? exp.descriptionAr : exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-4 border-t border-white/5 space-y-2 text-start">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-growth-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
