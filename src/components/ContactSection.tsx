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
    <section id="contact" className="relative py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 lg:p-16 bg-[#f8fafc] border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>{isAr ? "جاهز لنقل موقعك للقمة؟" : "Ready to Dominate Your SERP Market?"}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight leading-tight">
                {isAr ? (
                  <>
                    دعنا نعمل معاً <br />
                    <span className="text-brand-600">لنضاعف مبيعاتك وأرباحك</span>
                  </>
                ) : (
                  <>
                    Let&apos;s Work Together to <br />
                    <span className="text-brand-600">Scale Your Organic Revenue</span>
                  </>
                )}
              </h2>

              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                {isAr
                  ? "سواء كنت تدير متجراً على سلة أو زد أو شوبيفاي، أو شركة تطمح لصدارة الكلمات التنافسية في السعودية ومصر، سأقوم بتحليل موقعك ووضع خطة عمل متكاملة."
                  : "Whether you operate a high-volume store on Salla, Zid, or Shopify, or an enterprise scaling B2B leads across Saudi Arabia and the Middle East, let's engineer your organic growth engine."}
              </p>

              {/* Direct Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all text-xs sm:text-sm text-slate-800 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[11px] text-slate-500">Direct Email</p>
                    <p className="font-bold truncate text-slate-900">{email}</p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-brand-500/50 hover:shadow-md transition-all text-xs sm:text-sm text-slate-800 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-brand-600 shrink-0">
                    <WhatsAppIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-500">WhatsApp / Call</p>
                    <p className="font-bold text-slate-900">
                      <bdi dir="ltr" className="inline-block font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>
                        {phone}
                      </bdi>
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Card: Instant Action */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl text-center space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center mx-auto text-white shadow-md shadow-brand-600/25">
                <Sparkles className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading">
                  {isAr ? "احصل على فحص سيو مجاني شامل" : "Claim Your Free Strategic SEO Audit"}
                </h3>
                <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                  {isAr
                    ? "تقرير تشخيصي مخصص يكشف الثغرات التقنية وفرص المبيعات الضائعة في متجرك."
                    : "Receive a deep-dive diagnostic of crawl bugs, CWV speed, and high-margin keyword gaps."}
                </p>
              </div>

              <Link
                href="/book"
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all"
              >
                <span>{t.hero.ctaAudit}</span>
                <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
              </Link>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-brand-600" />
                <span>{isAr ? "خصوصية تامة واستجابة خلال 24 ساعة" : "100% Confidential • Fast 24h Response"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
