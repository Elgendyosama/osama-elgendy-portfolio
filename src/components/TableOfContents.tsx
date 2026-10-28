"use client";

import React, { useEffect, useState } from "react";
import { TableOfContentsItem } from "@/lib/articles";
import { Language } from "@/lib/translations";
import { AlignLeft, ChevronRight } from "lucide-react";

interface TableOfContentsProps {
  items: TableOfContentsItem[];
  lang?: Language;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items, lang = "en" }) => {
  const [activeId, setActiveId] = useState<string>("");
  const isAr = lang === "ar";

  useEffect(() => {
    if (items.length === 0) return;

    const handleScroll = () => {
      const headingElements = items
        .map((item) => document.getElementById(item.id))
        .filter(Boolean) as HTMLElement[];

      const scrollPosition = window.scrollY + 120;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveId(el.id);
          return;
        }
      }

      if (headingElements.length > 0 && window.scrollY < headingElements[0].offsetTop) {
        setActiveId(headingElements[0].id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="rounded-2xl p-5 bg-[#090e1c] border border-white/10 shadow-xl">
      <div className="flex items-center gap-2 pb-3.5 mb-3.5 border-b border-white/10 text-white font-heading font-bold text-sm tracking-wide">
        <AlignLeft className="w-4 h-4 text-cyan-400" />
        <span>{isAr ? "فهرس محتويات المقال" : "Table of Contents"}</span>
      </div>

      <nav aria-label={isAr ? "فهرس المحتويات" : "Table of contents"}>
        <ul className="space-y-2 text-xs">
          {items.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li
                key={item.id}
                className={`${item.level === 3 ? (isAr ? "pr-3" : "pl-3") : ""}`}
              >
                <a
                  href={`#${item.id}`}
                  className={`flex items-start gap-1.5 py-1 px-2 rounded-lg transition-colors leading-snug ${
                    isActive
                      ? "bg-cyan-500/10 text-cyan-400 font-semibold"
                      : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                >
                  <ChevronRight
                    className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-transform ${
                      isActive ? "text-cyan-400 translate-x-0.5" : "text-slate-600"
                    } ${isAr ? "rotate-180" : ""}`}
                  />
                  <span>{item.text}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};
