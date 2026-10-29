"use client";

import React, { useState, useEffect } from "react";
import { getSiteConfig, saveSiteConfig } from "@/lib/store";
import { SiteConfig } from "@/lib/types";
import {
  Settings,
  Save,
  CheckCircle,
  Search,
  Globe,
  Tag,
  Code,
  ShieldCheck,
  Languages,
  Eye,
  CheckCircle2,
} from "lucide-react";

export default function AdminSeoSettingsPage() {
  const [config, setConfig] = useState<SiteConfig>(getSiteConfig());
  const [savedNotice, setSavedNotice] = useState(false);
  const [activeTab, setActiveTab] = useState<"en" | "ar">("en");

  useEffect(() => {
    setConfig(getSiteConfig());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSiteConfig(config);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const enTitleLength = config.metaTitle?.length || 0;
  const enDescLength = config.metaDescription?.length || 0;
  const arTitleLength = config.metaTitleAr?.length || 0;
  const arDescLength = config.metaDescriptionAr?.length || 0;

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-200 font-mono uppercase">
              SEO Engine
            </span>
            <span className="text-xs text-slate-500">Multilingual Metadata & Hreflang</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading mt-1">
            Global Technical SEO Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Configure site-wide metadata, canonicals, hreflang alternates, and verification tags for both English and Arabic locales.
          </p>
        </div>

        {savedNotice && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-brand-600" />
            <span>SEO configurations updated successfully!</span>
          </div>
        )}
      </div>

      {/* Language Switcher Tabs */}
      <div className="flex items-center gap-2 bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm w-fit">
        <button
          type="button"
          onClick={() => setActiveTab("en")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === "en"
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          <span>🇬🇧 English Global SEO (/)</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("ar")}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === "ar"
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
          }`}
        >
          <span>🇸🇦 Arabic Global SEO (/ar)</span>
        </button>
      </div>

      {/* SEO Form */}
      <form
        onSubmit={handleSave}
        className="rounded-3xl p-6 sm:p-8 bg-white border border-slate-200 shadow-sm space-y-8"
      >
        {/* ENGLISH TAB */}
        {activeTab === "en" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-600" />
                <span>English Global SEO Configuration (Root Domain /)</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">Canonical: https://osamaelgendy.com</span>
            </div>

            {/* SERP Preview Simulator (English) */}
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-brand-600" />
                <span>Google.com SERP Snippet Preview (English)</span>
              </span>
              <div className="space-y-1 p-3.5 rounded-xl bg-white border border-slate-200 text-left shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px] font-bold">
                    OE
                  </span>
                  <span className="text-slate-600 font-mono text-[11px]">https://osamaelgendy.com</span>
                </div>
                <h4 className="text-base sm:text-lg font-medium text-brand-700 hover:underline cursor-pointer">
                  {config.metaTitle || "Osama Elgendy | SEO Team Leader & E-Commerce SEO Specialist"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                  {config.metaDescription || "Senior SEO Team Leader scaling organic traffic..."}
                </p>
              </div>
            </div>

            {/* Meta Title */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Global Meta Title (EN)
                </label>
                <span
                  className={`text-[11px] font-mono ${
                    enTitleLength > 60 ? "text-amber-600 font-bold" : "text-slate-500"
                  }`}
                >
                  {enTitleLength} / 60 chars
                </span>
              </div>
              <input
                type="text"
                required
                value={config.metaTitle}
                onChange={(e) => setConfig({ ...config, metaTitle: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>

            {/* Meta Description */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  Global Meta Description (EN)
                </label>
                <span
                  className={`text-[11px] font-mono ${
                    enDescLength > 160 ? "text-amber-600 font-bold" : "text-slate-500"
                  }`}
                >
                  {enDescLength} / 160 chars
                </span>
              </div>
              <textarea
                rows={3}
                required
                value={config.metaDescription}
                onChange={(e) => setConfig({ ...config, metaDescription: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none leading-relaxed"
              />
            </div>

            {/* Hero Headlines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Hero Headline (EN)
                </label>
                <input
                  type="text"
                  value={config.heroHeadline}
                  onChange={(e) => setConfig({ ...config, heroHeadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Hero Subheadline (EN)
                </label>
                <input
                  type="text"
                  value={config.heroSubheadline}
                  onChange={(e) => setConfig({ ...config, heroSubheadline: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* ARABIC TAB */}
        {activeTab === "ar" && (
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-600" />
                <span>إعدادات السيو العالمية للغة العربية (المسار /ar)</span>
              </h3>
              <span className="text-xs text-slate-500 font-mono">Canonical: https://osamaelgendy.com/ar</span>
            </div>

            {/* SERP Preview Simulator (Arabic) */}
            <div className="p-4 rounded-2xl bg-[#f8fafc] border border-slate-200 space-y-2">
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-brand-600" />
                <span>معاينة نتائج بحث جوجل السعودية Google.com.sa (بالعربية)</span>
              </span>
              <div dir="rtl" className="space-y-1 p-3.5 rounded-xl bg-white border border-slate-200 text-start font-arabic shadow-sm">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center text-[10px] font-bold">
                    OE
                  </span>
                  <span className="text-slate-600 font-mono text-[11px]">https://osamaelgendy.com/ar</span>
                </div>
                <h4 className="text-base sm:text-lg font-medium text-brand-700 hover:underline cursor-pointer">
                  {config.metaTitleAr || "أسامة الجندي | قائد فريق السيو وخبير سيو المتاجر الإلكترونية"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-2">
                  {config.metaDescriptionAr ||
                    "قائد فريق سيو وخبير سيو متاجر سلة وزد وشوبيفاي في السعودية والخليج..."}
                </p>
              </div>
            </div>

            {/* Meta Title (AR) */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  عنوان السيو العام بالعربية (Global Meta Title AR)
                </label>
                <span
                  className={`text-[11px] font-mono ${
                    arTitleLength > 60 ? "text-amber-600 font-bold" : "text-slate-500"
                  }`}
                >
                  {arTitleLength} / 60 chars
                </span>
              </div>
              <input
                type="text"
                required
                dir="rtl"
                value={config.metaTitleAr || ""}
                onChange={(e) => setConfig({ ...config, metaTitleAr: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none font-arabic"
              />
            </div>

            {/* Meta Description (AR) */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-slate-700">
                  الوصف التعريفي العام بالعربية (Global Meta Description AR)
                </label>
                <span
                  className={`text-[11px] font-mono ${
                    arDescLength > 160 ? "text-amber-600 font-bold" : "text-slate-500"
                  }`}
                >
                  {arDescLength} / 160 chars
                </span>
              </div>
              <textarea
                rows={3}
                required
                dir="rtl"
                value={config.metaDescriptionAr || ""}
                onChange={(e) => setConfig({ ...config, metaDescriptionAr: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none leading-relaxed font-arabic"
              />
            </div>

            {/* Hero Headlines (AR) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  العنوان الرئيسي بالواجهة (Hero Headline AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={config.heroHeadlineAr || ""}
                  onChange={(e) => setConfig({ ...config, heroHeadlineAr: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none font-arabic"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  العنوان الفرعي بالواجهة (Hero Subheadline AR)
                </label>
                <input
                  type="text"
                  dir="rtl"
                  value={config.heroSubheadlineAr || ""}
                  onChange={(e) => setConfig({ ...config, heroSubheadlineAr: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none font-arabic"
                />
              </div>
            </div>
          </div>
        )}

        {/* SHARED TECHNICAL & TRACKING CONFIGURATIONS */}
        <div className="pt-6 border-t border-slate-200 space-y-5">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-brand-600" />
            <span>Shared Technical & Verification Assets</span>
          </h4>

          {/* Social OG Image URL */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              OpenGraph (OG) Social Banner Path
            </label>
            <input
              type="text"
              value={config.ogImage}
              onChange={(e) => setConfig({ ...config, ogImage: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none font-mono"
            />
          </div>

          {/* Verification & Analytics IDs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Google Search Console Verification Tag
              </label>
              <input
                type="text"
                placeholder="google-site-verification=..."
                value={config.gscVerificationId}
                onChange={(e) => setConfig({ ...config, gscVerificationId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Google Tag Manager (GTM) Container ID
              </label>
              <input
                type="text"
                placeholder="GTM-XXXXXXX"
                value={config.gtmId}
                onChange={(e) => setConfig({ ...config, gtmId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none font-mono"
              />
            </div>
          </div>

          {/* Hreflang Status Card */}
          <div className="p-4 rounded-2xl bg-brand-50/50 border border-brand-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-brand-800">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>International SEO Hreflang Architecture Active:</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] text-slate-700">
              <div className="p-2 rounded-lg bg-white border border-brand-200 shadow-sm">
                hreflang=&quot;en&quot; → /
              </div>
              <div className="p-2 rounded-lg bg-white border border-brand-200 shadow-sm">
                hreflang=&quot;ar&quot; → /ar
              </div>
              <div className="p-2 rounded-lg bg-white border border-brand-200 shadow-sm">
                hreflang=&quot;x-default&quot; → /
              </div>
            </div>
          </div>

          {/* Active Schema Status */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold text-slate-700 flex items-center gap-2">
              <Code className="w-4 h-4 text-brand-600" />
              <span>Active Schema.org JSON-LD Entities</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <span className="text-slate-700 font-mono text-[11px]">schema:Person</span>
                <span className="text-brand-600 font-bold">Active</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <span className="text-slate-700 font-mono text-[11px]">schema:ProfessionalService</span>
                <span className="text-brand-600 font-bold">Active</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <span className="text-slate-700 font-mono text-[11px]">schema:TechArticle</span>
                <span className="text-brand-600 font-bold">Active</span>
              </div>
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-between">
                <span className="text-slate-700 font-mono text-[11px]">schema:FAQPage</span>
                <span className="text-brand-600 font-bold">Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-slate-200">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-colors"
          >
            <Save className="w-4 h-4" />
            <span>Save Technical SEO Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
