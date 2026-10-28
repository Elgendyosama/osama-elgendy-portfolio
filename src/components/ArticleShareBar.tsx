"use client";

import React, { useEffect, useState } from "react";
import { Language } from "@/lib/translations";
import { Share2, Check, Copy, Twitter, Linkedin } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface ArticleShareBarProps {
  title: string;
  url: string;
  lang?: Language;
}

export const ArticleShareBar: React.FC<ArticleShareBarProps> = ({ title, url, lang = "en" }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const isAr = lang === "ar";

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareTwitter = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;

  const shareLinkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  const shareWhatsApp = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`;

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-transparent z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-brand-500 via-cyan-400 to-growth-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating / Sticky Share Toolbar */}
      <aside
        aria-label={isAr ? "مشاركة المقال" : "Share article"}
        className="flex items-center gap-2 p-2 rounded-2xl bg-[#090e1c]/90 border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <span className="text-[11px] font-bold text-slate-400 px-2 flex items-center gap-1.5">
          <Share2 className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">{isAr ? "مشاركة:" : "Share:"}</span>
        </span>

        {/* WhatsApp */}
        <a
          href={shareWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-growth-950/40 hover:bg-growth-900/70 text-[#25D366] border border-growth-500/30 transition-colors"
          title={isAr ? "مشاركة عبر واتساب" : "Share on WhatsApp"}
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon className="w-3.5 h-3.5" />
        </a>

        {/* X / Twitter */}
        <a
          href={shareTwitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
          title={isAr ? "مشاركة على X" : "Share on X"}
          aria-label="Share on X"
        >
          <Twitter className="w-3.5 h-3.5" />
        </a>

        {/* LinkedIn */}
        <a
          href={shareLinkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-[#0a66c2]/10 hover:bg-[#0a66c2]/20 text-[#38bdf8] border border-[#0a66c2]/30 transition-colors"
          title={isAr ? "مشاركة على LinkedIn" : "Share on LinkedIn"}
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-3.5 h-3.5" />
        </a>

        {/* Copy Link */}
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 border border-white/10 transition-colors"
          title={isAr ? "نسخ رابط المقال" : "Copy link"}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-growth-400" />
              <span className="text-growth-400 text-[11px]">{isAr ? "تم النسخ!" : "Copied!"}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[11px]">{isAr ? "نسخ الرابط" : "Copy"}</span>
            </>
          )}
        </button>
      </aside>
    </>
  );
};
