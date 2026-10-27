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
    <section className="relative py-24 bg-[#060913] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/20 text-xs font-semibold text-amber-300 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>{t.certs.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            {t.certs.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-normal">
            {t.certs.subheading}
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/90 via-[#0d1326] to-slate-950/80 border border-white/10 hover:border-amber-400/40 transition-all duration-300 group hover:-translate-y-1 shadow-2xl flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Issuer Logo & Verification Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
                      SA
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-orange-400">
                        {cert.issuer}
                      </h4>
                      <p className="text-[11px] text-slate-400">Official Certificate</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-growth-500/10 text-growth-400 border border-growth-500/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                {/* Certificate Course Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading group-hover:text-amber-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Recipient & Instructor Details */}
                <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/5 space-y-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Awarded to:</span>
                    <span className="font-bold text-white flex items-center gap-1">
                      <UserCheck className="w-3.5 h-3.5 text-cyan-400" />
                      {cert.recipient}
                    </span>
                  </div>
                  {cert.instructor && (
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Instructor:</span>
                      <span className="font-semibold text-slate-200">{cert.instructor}</span>
                    </div>
                  )}
                </div>

                {/* Skills Mastered */}
                <div className="mt-5 space-y-2">
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Competencies & Methodologies:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsCovered.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Credential Seal */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                <span>{cert.verificationBadge}</span>
                <span className="text-cyan-400 group-hover:underline flex items-center gap-1">
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
