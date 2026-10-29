"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

export const WhatsAppWidget: React.FC = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isAr, setIsAr] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateLang = () => {
      const savedLang = localStorage.getItem("osama_portfolio_lang");
      setIsAr(savedLang !== "en");
    };
    updateLang();
    window.addEventListener("storage", updateLang);
    return () => window.removeEventListener("storage", updateLang);
  }, []);

  // Don't render on admin or login pages
  if (!mounted || pathname?.startsWith("/admin") || pathname?.startsWith("/login")) {
    return null;
  }

  const cleanPhone = "201005647312";
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    isAr
      ? "مرحباً أستاذ أسامة، أرغب في استشارة سيو سريعة لموقعي/متجري."
      : "Hello Osama, I'd like a quick SEO consultation for my website/store."
  )}`;

  return (
    <aside
      aria-label="WhatsApp Support"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none"
    >
      {/* Tooltip / Prompt Badge */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/95 border border-slate-200 text-xs font-semibold text-slate-800 shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          isHovered
            ? "opacity-100 translate-x-0 scale-100"
            : "opacity-90 translate-x-1"
        }`}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
        </span>
        <span>
          {isAr ? "تواصل مباشرة عبر واتساب" : "Chat on WhatsApp"}
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {/* Radar ping ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />

        <WhatsAppIcon className="w-8 h-8 text-white relative z-10 drop-shadow-sm" />
      </a>
    </aside>
  );
};
