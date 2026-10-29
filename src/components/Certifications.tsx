"use client";

import React from "react";
import { translations, Language } from "@/lib/translations";
import { certificates } from "@/lib/store";
import { Award, CheckCircle, ExternalLink, ShieldCheck, UserCheck } from "lucide-react";

interface CertificationsProps {
  lang: Language;
}

export const Certifications: React.FC<CertificationsProps> = ({ lang }) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  return (
    <section className="relative py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.certs.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            {t.certs.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            {t.certs.subheading}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 hover:border-brand-500/50 transition-all duration-300 group hover:-translate-y-1 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Issuer Logo & Verification Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 font-bold text-sm">
                      SA
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-orange-600">
                        {cert.issuer}
                      </h4>
                      <p className="text-[11px] text-slate-500">Official Certificate</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Course Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-heading group-hover:text-brand-600 transition-colors">
                  {cert.title}
                </h3>

                {/* Recipient & Instructor Details */}
                <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Awarded to:</span>
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-brand-600" />
                      {cert.recipient}
                    </span>
                  </div>
                  {cert.instructor && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">Instructor:</span>
                      <span className="font-semibold text-slate-800">{cert.instructor}</span>
                    </div>
                  )}
                </div>

                {/* Skills Mastered */}
                <div className="mt-5 space-y-2">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Competencies & Methodologies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/80"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential Seal */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{cert.verificationBadge}</span>
                <span className="text-brand-600 group-hover:underline flex items-center gap-1 font-semibold">
                  Semrush ID Verified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
