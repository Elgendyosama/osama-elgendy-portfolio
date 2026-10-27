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
} from "lucide-react";

export default function AdminSeoSettingsPage() {
  const [config, setConfig] = useState<SiteConfig>(getSiteConfig());
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    setConfig(getSiteConfig());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveSiteConfig(config);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Global Technical SEO Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Configure site-wide meta tags, verification IDs, and schema structures.
          </p>
        </div>

        {savedNotice && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-growth-500/20 text-growth-300 border border-growth-500/40 text-xs font-bold animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-growth-400" />
            <span>SEO configurations updated successfully!</span>
          </div>
        )}
      </div>

      {/* SEO Form */}
      <form onSubmit={handleSave} className="rounded-3xl p-6 sm:p-8 bg-[#090e1c] border border-white/10 shadow-xl space-y-6">
        <div className="space-y-5">
          {/* SERP Preview Simulator */}
          <div className="p-4 rounded-2xl bg-[#060913] border border-white/5 space-y-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
              Google Search Result Snippet Simulation
            </span>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">
                  G
                </span>
                <span className="text-slate-300">https://osamaelgendy.com</span>
              </div>
              <h3 className="text-base sm:text-lg font-medium text-cyan-400 hover:underline cursor-pointer">
                {config.metaTitle || "Osama Elgendy | SEO Team Leader & E-Commerce SEO Specialist"}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 line-clamp-2">
                {config.metaDescription || "Senior SEO Team Leader scaling organic traffic..."}
              </p>
            </div>
          </div>

          {/* Meta Title */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-300">
                Global Meta Title
              </label>
              <span className={`text-[11px] font-mono ${config.metaTitle.length > 60 ? "text-amber-400" : "text-slate-400"}`}>
                {config.metaTitle.length}/60 chars
              </span>
            </div>
            <input
              type="text"
              required
              value={config.metaTitle}
              onChange={(e) => setConfig({ ...config, metaTitle: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Meta Description */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-300">
                Global Meta Description
              </label>
              <span className={`text-[11px] font-mono ${config.metaDescription.length > 160 ? "text-amber-400" : "text-slate-400"}`}>
                {config.metaDescription.length}/160 chars
              </span>
            </div>
            <textarea
              rows={3}
              required
              value={config.metaDescription}
              onChange={(e) => setConfig({ ...config, metaDescription: e.target.value })}
              className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
            />
          </div>

          {/* Social OG Image URL */}
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              OpenGraph (OG) Social Banner Path
            </label>
            <input
              type="text"
              value={config.ogImage}
              onChange={(e) => setConfig({ ...config, ogImage: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none font-mono"
            />
          </div>

          {/* Verification & Analytics IDs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Google Search Console Verification Tag
              </label>
              <input
                type="text"
                placeholder="google-site-verification=..."
                value={config.gscVerificationId}
                onChange={(e) => setConfig({ ...config, gscVerificationId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Google Tag Manager (GTM) Container ID
              </label>
              <input
                type="text"
                placeholder="GTM-XXXXXXX"
                value={config.gtmId}
                onChange={(e) => setConfig({ ...config, gtmId: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none font-mono"
              />
            </div>
          </div>

          {/* Structured Data & Schema.org Status */}
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/5 space-y-3">
            <h4 className="text-xs font-bold text-slate-300 flex items-center gap-2">
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Active Schema.org JSON-LD Entities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">schema:Person</span>
                <span className="text-growth-400 font-bold">Active</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">schema:WebSite</span>
                <span className="text-growth-400 font-bold">Active</span>
              </div>
              <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">schema:ProfessionalService</span>
                <span className="text-growth-400 font-bold">Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t border-white/10">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-brand-600 to-cyan-600 shadow-glow hover:opacity-95"
          >
            <Save className="w-4 h-4" />
            <span>Save Technical SEO Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
}
