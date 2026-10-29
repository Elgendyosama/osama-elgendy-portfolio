"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Language } from "@/lib/translations";
import { ShieldCheck, Award, Sparkles, ExternalLink } from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface ArticleAuthorCardProps {
  lang?: Language;
}

export const ArticleAuthorCard: React.FC<ArticleAuthorCardProps> = ({ lang = "en" }) => {
  const isAr = lang === "ar";

  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden text-start">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
        {/* Author Avatar */}
        <div className="relative shrink-0">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-brand-300 p-1 bg-white shadow-sm">
            <Image
              src="/images/osama-elgendy.jpg"
              alt={isAr ? "أسامة الجندي - قائد فريق السيو" : "Osama Elgendy - SEO Team Leader"}
              width={96}
              height={96}
              className="w-full h-full object-cover rounded-xl"
              priority
            />
          </div>
          <div
            className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-brand-600 border-2 border-white flex items-center justify-center text-white shadow-sm"
            title={isAr ? "خبير سيو معتمد" : "Verified Expert"}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

        {/* Bio & Credentials */}
        <div className="space-y-2 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900">
              {isAr ? "أسامة الجندي" : "Osama Elgendy"}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-200 flex items-center gap-1">
              <Award className="w-3 h-3 text-brand-600" />
              <span>{isAr ? "معتمد من Semrush Academy" : "Semrush Certified"}</span>
            </span>
          </div>

          <p className="text-xs sm:text-sm font-medium text-brand-700">
            {isAr
              ? "قائد فريق السيو وخبير سيو المتاجر الإلكترونية • خبرة أكثر من 6 سنوات"
              : "SEO Team Leader & E-Commerce SEO Specialist • 6+ Years Experience"}
          </p>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            {isAr
              ? "مهندس واستشاري سيو تقني قام بتحسين أكثر من 120 موقعاً ومضاعفة مبيعات 50+ متجراً في السعودية والإمارات والخليج العربي. متخصص في الفحوصات التقنية الدقيقة، وسيو الذكاء الاصطناعي (GEO/AEO)، وسرعة Core Web Vitals وهندسة التصنيفات ذات التحويل العالي."
              : "Technical SEO architect with 120+ optimized client sites and 50+ scaled e-commerce stores across Saudi Arabia, the UAE, and the GCC. Specialized in Deep Technical SEO audits, Generative Engine Optimization (GEO/AEO), Core Web Vitals engineering, and high-converting search architectures."}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href={isAr ? "/ar/book" : "/book"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-white" />
              <span>{isAr ? "احجز استشارة سيو مجانية" : "Book Free Consultation"}</span>
            </Link>
            <a
              href="https://wa.me/201005647312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#22a344] bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>{isAr ? "واتساب مباشر" : "Direct WhatsApp"}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
