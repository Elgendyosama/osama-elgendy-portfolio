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
    <section className="my-12 pt-8 border-t border-slate-200" aria-labelledby="faq-section-heading">
      <div className="flex items-center gap-2.5 mb-2">
        <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-brand-50 text-brand-600 border border-brand-200">
          <HelpCircle className="w-4 h-4" />
        </div>
        <span className="text-xs uppercase font-mono font-bold tracking-wider text-brand-700">
          {isAr ? "الأسئلة الشائعة والأجوبة" : "Frequently Asked Questions"}
        </span>
      </div>

      <h2
        id="faq-section-heading"
        className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mb-6"
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
                  ? "bg-white border-brand-400 shadow-md ring-1 ring-brand-300/40"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full p-5 text-start flex items-center justify-between gap-4 transition-colors"
              >
                <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                  {item.question}
                </span>
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-brand-50 text-brand-600 border border-brand-200" : "bg-slate-100 border border-slate-200 text-slate-500"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in">
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
