"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { translations, Language } from "@/lib/translations";
import { Globe, Menu, X, ShieldCheck, Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface NavbarProps {
  lang?: Language;
  onToggleLang?: () => void;
  onOpenAudit?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenAudit }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isAr = lang ? lang === "ar" : pathname.startsWith("/ar");
  const activeLang: Language = isAr ? "ar" : "en";
  const t = translations[activeLang];

  const basePrefix = isAr ? "/ar" : "";
  const isHome = pathname === "/" || pathname === "/ar";

  // Compute alternate language target path
  const targetSwitchUrl = isAr
    ? pathname.replace(/^\/ar(\/|$)/, "/") || "/"
    : `/ar${pathname === "/" ? "" : pathname}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: isHome ? "#solutions" : `${basePrefix}/#solutions`, label: t.nav.solutions },
    { href: isHome ? "#results" : `${basePrefix}/#results`, label: t.nav.results },
    { href: isHome ? "#platforms" : `${basePrefix}/#platforms`, label: t.nav.platforms },
    { href: isHome ? "#experience" : `${basePrefix}/#experience`, label: t.nav.experience },
    { href: isHome ? "#roadmap" : `${basePrefix}/#roadmap`, label: t.nav.roadmap },
    { href: isHome ? "#testimonials" : `${basePrefix}/#testimonials`, label: t.nav.testimonials },
    { href: `${basePrefix}/blog`, label: t.nav.blog },
  ];

  const handleLanguageSwitch = () => {
    const nextLang: Language = isAr ? "en" : "ar";
    if (typeof window !== "undefined") {
      localStorage.setItem("osama_portfolio_lang", nextLang);
    }
    if (onToggleLang) {
      onToggleLang();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm"
          : "bg-white/60 backdrop-blur-sm py-4 border-b border-slate-200/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link href={isAr ? "/ar" : "/"} className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-white border border-slate-200 p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Osama Elgendy Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-slate-900 text-base tracking-tight group-hover:text-brand-600 transition-colors">
                  {isAr ? "أسامة الجندي" : "Osama Elgendy"}
                </span>
                <ShieldCheck className="w-4 h-4 text-brand-500" />
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                {isAr ? "قائد فريق السيو والمتاجر" : "SEO Team Leader & E-Com"}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-white/90 p-1.5 rounded-full border border-slate-200 shadow-sm backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-600 hover:text-brand-600 hover:bg-slate-100 rounded-full transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* WhatsApp Quick Link */}
            <a
              href="https://wa.me/201005647312"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#22a344] border border-emerald-200/80 transition-all shadow-sm"
              title="Chat on WhatsApp (+20 100 564 7312)"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>

            {/* Seamless Language Switcher Link */}
            <Link
              href={targetSwitchUrl}
              onClick={handleLanguageSwitch}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200/80 text-xs font-semibold text-slate-700 border border-slate-200 transition-colors"
              title={isAr ? "Switch to English" : "التبديل إلى العربية"}
              hrefLang={isAr ? "en" : "ar"}
            >
              <Globe className="w-3.5 h-3.5 text-brand-500" />
              <span>{t.nav.languageToggle}</span>
            </Link>

            {/* Audit CTA Button */}
            <Link
              href={`${basePrefix}/book`}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs xl:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-growth-500 hover:from-brand-700 hover:to-growth-600 transition-all shadow-glow hover:shadow-glow-emerald hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 text-emerald-100 animate-pulse" />
              <span>{t.nav.bookAudit}</span>
            </Link>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="https://wa.me/201005647312"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-50 text-[#22a344] border border-emerald-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4" />
            </a>
            <Link
              href={targetSwitchUrl}
              onClick={handleLanguageSwitch}
              className="p-2 rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 border border-slate-200"
              title={isAr ? "Switch to English" : "التبديل إلى العربية"}
            >
              <Globe className="w-4 h-4 text-brand-500" />
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 mt-3 space-y-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-200">
            <Link
              href={`${basePrefix}/book`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-growth-500 shadow-glow"
            >
              <Sparkles className="w-4 h-4 text-emerald-100" />
              <span>{t.nav.bookAudit}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
