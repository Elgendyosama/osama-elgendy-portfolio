"use client";

import React from "react";
import Link from "next/link";
import { translations, Language } from "@/lib/translations";
import {
  Mail,
  Phone,
  MessageSquare,
  Globe2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface ContactSectionProps {
  lang: Language;
  onOpenAudit?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang, onOpenAudit }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  const email = "osamasalehelgendy@gmail.com";
  const phone = "+20 100 564 7312";
  const cleanPhone = "201005647312";
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "Hello Osama, I would like to consult with you regarding SEO and E-Commerce growth for my website."
  )}`;

  return (
    <section id="contact" className="relative py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-brand-600/20 via-cyan-500/15 to-growth-500/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-gradient-to-b from-slate-900/90 via-[#0a1020] to-slate-950/90 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
                <Sparkles className="w-4 h-4" />
                <span>{isAr ? "جاهز لنقل موقعك للقمة؟" : "Ready to Dominate Your SERP Market?"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
                {isAr ? (
                  <>
                    دعنا نعمل معاً <br />
                    <span className="text-gradient-cyan">لنضاعف مبيعاتك وأرباحك</span>
                  </>
                ) : (
                  <>
                    Let&apos;s Work Together to <br />
                    <span className="text-gradient-cyan">Scale Your Organic Revenue</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                {isAr
                  ? "سواء كنت تدير متجراً على سلة أو زد أو شوبيفاي، أو شركة تطمح لصدارة الكلمات التنافسية في السعودية ومصر، سأقوم بتحليل موقعك ووضع خطة عمل متكاملة."
                  : "Whether you operate a high-volume store on Salla, Zid, or Shopify, or an enterprise scaling B2B leads across Saudi Arabia and the Middle East, let's engineer your organic growth engine."}
              </p>

              {/* Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition-all text-xs sm:text-sm text-slate-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-slate-400">Direct Email</p>
                    <p className="font-bold truncate text-white">{email}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-growth-400/40 hover:bg-white/10 transition-all text-xs sm:text-sm text-slate-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-growth-500/10 flex items-center justify-center text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">WhatsApp / Call</p>
                    <p className="font-bold text-white">
                      <bdi dir="ltr" className="inline-block font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>
                        {phone}
                      </bdi>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Card: Instant Action */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#0f172a] to-[#090e1c] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-xl text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center mx-auto text-white shadow-glow">
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white font-heading">
                  {isAr ? "احصل على فحص سيو مجاني شامل" : "Claim Your Free Strategic SEO Audit"}
                </h3>
                <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                  {isAr
                    ? "تقرير تشخيصي مخصص يكشف الثغرات التقنية وفرص المبيعات الضائعة في متجرك."
                    : "Receive a deep-dive diagnostic of crawl bugs, CWV speed, and high-margin keyword gaps."}
                </p>
              </div>

              <Link
                href="/book"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 hover:opacity-95 shadow-glow hover:shadow-glow-emerald transition-all"
              >
                <span>{t.hero.ctaAudit}</span>
                <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-growth-400" />
                <span>{isAr ? "خصوصية تامة واستجابة خلال 24 ساعة" : "100% Confidential • Fast 24h Response"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
