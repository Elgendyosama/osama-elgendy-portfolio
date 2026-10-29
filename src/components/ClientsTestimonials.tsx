"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import { clientLogos, testimonials } from "@/lib/store";
import { Star, Quote, Building2, CheckCircle2, Sparkles } from "lucide-react";

interface ClientsTestimonialsProps {
  lang: Language;
}

export const ClientsTestimonials: React.FC<ClientsTestimonialsProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  return (
    <section id="testimonials" className="relative py-24 bg-[#f8fafc] border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Client Logos Grid (from page 8) */}
        <div className="mb-16">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 font-bold mb-6">
            {isAr ? "شركات ومتاجر وثقت بخبراتنا الإقليمية" : "Trusted by Regional Brands Across KSA, UAE & Egypt"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 bg-white border border-slate-200 hover:border-brand-500/40 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:shadow-md shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 h-4 text-brand-600" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                  {client.name}
                </h4>
                <span className="text-[10px] text-slate-500 mt-0.5">{client.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="relative rounded-3xl p-7 bg-white border border-slate-200 hover:border-brand-500/40 transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Rating stars & Impact badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                    {testi.results}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{isAr ? testi.quoteAr : testi.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-growth-500 flex items-center justify-center font-heading font-black text-white text-sm shadow-sm">
                  {testi.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{testi.clientName}</h4>
                  <p className="text-xs text-slate-500">
                    {testi.role} • {testi.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
