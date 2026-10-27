"use client";

import React, { useState } from "react";
import { translations, Language } from "@/lib/translations";
import { addLead } from "@/lib/store";
import {
  X,
  Sparkles,
  Send,
  CheckCircle2,
  Globe,
  Mail,
  Phone,
  User,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedService?: string;
}

export const AuditModal: React.FC<AuditModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedService,
}) => {
  const isAr = lang === "ar";
  const t = translations[lang];

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [monthlyTraffic, setMonthlyTraffic] = useState("5K - 20K");
  const [primaryGoal, setPrimaryGoal] = useState(
    preselectedService || t.modal.goals[0]
  );
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !name || !email || !whatsapp) return;

    setSubmitting(true);

    setTimeout(() => {
      addLead({
        websiteUrl,
        name,
        email,
        whatsapp,
        monthlyTraffic,
        primaryGoal,
        message,
      });

      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const cleanPhone = "201005647312";
  const whatsappMsg = encodeURIComponent(
    `Hello Osama! I'd like to discuss an SEO Audit for my website: ${websiteUrl || "my store"}. My name is ${name || "Client"}.`
  );
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMsg}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#090e1c] border border-cyan-500/30 shadow-2xl p-6 sm:p-8 my-8 text-start overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-growth-500/20 border-2 border-growth-500/40 flex items-center justify-center mx-auto text-growth-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {t.modal.successTitle}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              {t.modal.successMessage}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-growth-600 hover:bg-growth-500 shadow-glow-emerald transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.modal.directWhatsApp}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Confidential & No-Obligation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                {t.modal.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300/80 mt-1.5 leading-relaxed">
                {t.modal.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Website URL */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.websiteUrl} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="url"
                      required
                      placeholder={t.modal.websitePlaceholder}
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.fullName} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder={t.modal.fullNamePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.email} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder={t.modal.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.whatsapp} <span className="text-rose-400">*</span>
                  </label>
                  <div className="relative">
                    <WhatsAppIcon className="w-4 h-4 text-[#25D366] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      dir="ltr"
                      required
                      placeholder={t.modal.whatsappPlaceholder}
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors dir-ltr"
                    />
                  </div>
                </div>

                {/* Monthly Traffic */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.monthlyTraffic}
                  </label>
                  <select
                    value={monthlyTraffic}
                    onChange={(e) => setMonthlyTraffic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    <option value="Under 5K">Under 5,000 / month</option>
                    <option value="5K - 20K">5,000 - 20,000 / month</option>
                    <option value="20K - 100K">20,000 - 100,000 / month</option>
                    <option value="100K - 500K">100,000 - 500,000 / month</option>
                    <option value="500K+">500,000+ / month (Enterprise)</option>
                  </select>
                </div>

                {/* Primary Growth Goal */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.goal}
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  >
                    {t.modal.goals.map((g, i) => (
                      <option key={i} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes / Challenges */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">
                    {t.modal.notes}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.modal.notesPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 hover:opacity-95 shadow-glow hover:shadow-glow-emerald transition-all disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? t.modal.submitting : t.modal.submit}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
