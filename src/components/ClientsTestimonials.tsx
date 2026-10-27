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
    <section id="testimonials" className="relative py-24 bg-[#080d1a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.testimonials.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            {t.testimonials.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            {t.testimonials.subheading}
          </p>
        </div>

        {/* Client Logos Grid (from page 8) */}
        <div className="mb-16">
          <p className="text-center text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
            {isAr ? "شركات ومتاجر وثقت بخبراتنا الإقليمية" : "Trusted by Regional Brands Across KSA, UAE & Egypt"}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-4 bg-slate-900/60 border border-white/5 hover:border-cyan-500/30 flex flex-col items-center justify-center text-center group transition-all duration-300 hover:bg-slate-900"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {client.name}
                </h4>
                <span className="text-[10px] text-slate-400 mt-0.5">{client.category}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testi) => (
            <div
              key={testi.id}
              className="relative rounded-3xl p-7 bg-gradient-to-b from-slate-900/90 to-[#0b1020] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Rating stars & Impact badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-growth-500/10 text-growth-400 border border-growth-500/20">
                    {testi.results}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{isAr ? testi.quoteAr : testi.quote}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center font-heading font-black text-white text-sm">
                  {testi.clientName.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{testi.clientName}</h4>
                  <p className="text-xs text-slate-400">
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
