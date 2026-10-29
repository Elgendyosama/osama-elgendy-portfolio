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
    <section id="experience" className="relative py-24 bg-[#f8fafc] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.experience.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            {t.experience.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            {t.experience.subheading}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-300 md:border-l-0 md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-1/2 md:before:-translate-x-1/2 md:before:w-0.5 md:before:bg-gradient-to-b md:before:from-brand-300 md:before:via-brand-500 md:before:to-brand-600 pl-6 md:pl-0 space-y-12">
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
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-600 items-center justify-center shadow-md z-20">
                  <span className="w-2 h-2 rounded-full bg-brand-600" />
                </div>

                {/* Left/Right Content Card */}
                <div
                  className={`w-full md:w-[calc(50%-40px)] ${
                    isEven ? "md:pl-0 md:text-end" : "md:pr-0 md:text-start"
                  }`}
                >
                  <div className="rounded-3xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-brand-500/50 transition-all duration-300 shadow-sm hover:shadow-xl group hover:-translate-y-1">
                    {/* Header: Period & Role */}
                    <div
                      className={`flex flex-wrap items-center gap-2 mb-3 ${
                        isEven ? "md:justify-end" : "md:justify-start"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-bold text-brand-700">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="text-xs text-slate-500 font-mono">{exp.location}</span>
                    </div>

                    {/* Role Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-brand-600 transition-colors">
                      {isAr ? exp.roleAr : exp.role}
                    </h3>

                    {/* Company Name */}
                    <p className="text-sm font-semibold text-brand-700 mt-1 flex items-center gap-1.5 justify-start md:inline-flex">
                      <Building className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                      {isAr ? exp.descriptionAr : exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-start">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
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
