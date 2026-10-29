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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-white border border-slate-200 shadow-2xl p-6 sm:p-8 my-8 text-start overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-brand-50 border-2 border-brand-200 flex items-center justify-center mx-auto text-brand-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              {t.modal.successTitle}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto leading-relaxed">
              {t.modal.successMessage}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#22a344] hover:bg-[#1e913d] shadow-md transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>{t.modal.directWhatsApp}</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                {t.modal.close}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>100% Confidential & No-Obligation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                {t.modal.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                {t.modal.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Website URL */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.websiteUrl} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="url"
                      required
                      placeholder={t.modal.websitePlaceholder}
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.fullName} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      required
                      placeholder={t.modal.fullNamePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.email} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder={t.modal.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.whatsapp} <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <WhatsAppIcon className="w-4 h-4 text-[#22a344] absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      dir="ltr"
                      required
                      placeholder={t.modal.whatsappPlaceholder}
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors dir-ltr"
                    />
                  </div>
                </div>

                {/* Monthly Traffic */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.monthlyTraffic}
                  </label>
                  <select
                    value={monthlyTraffic}
                    onChange={(e) => setMonthlyTraffic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.goal}
                  </label>
                  <select
                    value={primaryGoal}
                    onChange={(e) => setPrimaryGoal(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
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
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    {t.modal.notes}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.modal.notesPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all disabled:opacity-50"
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
