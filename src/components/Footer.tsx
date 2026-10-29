"use client";

import React from "react";
import Image from "next/image";
import { translations, Language } from "@/lib/translations";
import { ShieldCheck, Mail, Phone, MapPin, Globe, ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white border-t border-slate-200 pt-16 pb-12 overflow-hidden text-start">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Bio & Persona */}
          <div className="space-y-4 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center p-1 shadow-sm shrink-0">
                <Image
                  src="/logo.png"
                  alt="Osama Elgendy Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-heading font-extrabold text-slate-900 text-lg block">
                  Osama Elgendy
                </span>
                <span className="text-xs text-brand-600 font-semibold">
                  SEO Team Leader & E-Commerce SEO Specialist
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-lg">
              {t.footer.aboutSummary}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
              <span>{t.footer.locationTag}</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600">
              <li>
                <a href={isAr ? "/ar/#solutions" : "/#solutions"} className="hover:text-brand-600 transition-colors">
                  {t.nav.solutions}
                </a>
              </li>
              <li>
                <a href={isAr ? "/ar/#results" : "/#results"} className="hover:text-brand-600 transition-colors">
                  {t.nav.results}
                </a>
              </li>
              <li>
                <a href={isAr ? "/ar/#platforms" : "/#platforms"} className="hover:text-brand-600 transition-colors">
                  {t.nav.platforms}
                </a>
              </li>
              <li>
                <a href={isAr ? "/ar/#experience" : "/#experience"} className="hover:text-brand-600 transition-colors">
                  {t.nav.experience}
                </a>
              </li>
              <li>
                <a href={isAr ? "/ar/#roadmap" : "/#roadmap"} className="hover:text-brand-600 transition-colors">
                  {t.nav.roadmap}
                </a>
              </li>
              <li>
                <a href={isAr ? "/ar/blog" : "/blog"} className="hover:text-brand-600 transition-colors">
                  {t.nav.blog}
                </a>
              </li>
              <li>
                <a href={isAr ? "/ar/book" : "/book"} className="hover:text-brand-600 transition-colors">
                  {t.nav.bookAudit}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-heading">
              Direct Inquiries
            </h4>
            <div className="space-y-2 text-xs text-slate-700">
              <a
                href="mailto:osamasalehelgendy@gmail.com"
                className="flex items-center gap-2 hover:text-brand-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <span>osamasalehelgendy@gmail.com</span>
              </a>
              <a
                href="https://wa.me/201005647312"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-brand-600 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#22a344] shrink-0" />
                <bdi dir="ltr" className="inline-block font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>+20 100 564 7312</bdi>
              </a>
              <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                <span>Verified Semrush & GSC Technical Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Osama Elgendy. {t.footer.legal}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-200 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
