"use client";

import React, { useState } from "react";
import { ArticleFAQItem } from "@/lib/types";
import { Language } from "@/lib/translations";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

interface ArticleFAQAccordionProps {
  faqItems: ArticleFAQItem[];
  lang?: Language;
}

export const ArticleFAQAccordion: React.FC<ArticleFAQAccordionProps> = ({
  faqItems,
  lang = "en",
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // Open first item by default
  const isAr = lang === "ar";

  if (!faqItems || faqItems.length === 0) return null;

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="my-12 pt-8 border-t border-white/10" aria-labelledby="faq-section-heading">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          <HelpCircle className="w-4 h-4" />
        </div>
        <span className="text-xs uppercase font-mono font-bold tracking-wider text-cyan-400">
          {isAr ? "الأسئلة الشائعة والأجوبة" : "Frequently Asked Questions"}
        </span>
      </div>

      <h2
        id="faq-section-heading"
        className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-6"
      >
        {isAr ? "إيضاحات تقنية وإجابات متخصصة" : "Technical Clarifications & SEO Insights"}
      </h2>

      <div className="space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={item.id || index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "bg-[#090e1c] border-cyan-500/30 shadow-lg shadow-cyan-500/5"
                  : "bg-[#070b16]/70 border-white/10 hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full p-5 text-start flex items-center justify-between gap-4 transition-colors"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-white">
                  {item.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-cyan-500/20 text-cyan-400 border-cyan-500/40" : "text-slate-400"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
