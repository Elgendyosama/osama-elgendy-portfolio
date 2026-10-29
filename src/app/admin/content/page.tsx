"use client";

import React, { useState, useEffect } from "react";
import {
  getSiteConfig,
  saveSiteConfig,
  getMetrics,
  saveMetrics,
  getServices,
  saveServices,
  getCaseStudies,
  saveCaseStudies,
} from "@/lib/store";
import { SiteConfig, MetricItem, ServiceItem, CaseStudyItem } from "@/lib/types";
import {
  FileEdit,
  Save,
  CheckCircle,
  Plus,
  Trash2,
  TrendingUp,
  Layers,
  Sparkles,
} from "lucide-react";

export default function AdminContentPage() {
  const [activeTab, setActiveTab] = useState<"hero" | "metrics" | "services" | "cases">("hero");
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(getSiteConfig());
  const [metrics, setMetrics] = useState<MetricItem[]>([]);
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>([]);
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    setSiteConfig(getSiteConfig());
    setMetrics(getMetrics());
    setServices(getServices());
    setCaseStudies(getCaseStudies());
  }, []);

  const triggerSaveNotice = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  // 1. Save Hero & Bio
  const handleSaveHero = (e: React.FormEvent) => {
    e.preventDefault();
    saveSiteConfig(siteConfig);
    triggerSaveNotice();
  };

  // 2. Save Metrics
  const handleSaveMetrics = (e: React.FormEvent) => {
    e.preventDefault();
    saveMetrics(metrics);
    triggerSaveNotice();
  };

  const handleMetricChange = (index: number, field: keyof MetricItem, value: any) => {
    const updated = [...metrics];
    updated[index] = { ...updated[index], [field]: value };
    setMetrics(updated);
  };

  // 3. Save Services
  const handleSaveServices = (e: React.FormEvent) => {
    e.preventDefault();
    saveServices(services);
    triggerSaveNotice();
  };

  const handleAddService = () => {
    const newService: ServiceItem = {
      id: "s-" + Date.now(),
      title: "New Advanced SEO Service",
      titleAr: "خدمة سيو متقدمة جديدة",
      iconName: "Sparkles",
      category: "Technical",
      summary: "Custom engineered high-impact organic search optimization service.",
      summaryAr: "خدمة تحسين محركات بحث مخصصة وموجهة لزيادة العائد.",
      deliverables: ["Deliverable 1", "Deliverable 2", "Deliverable 3"],
      deliverablesAr: ["المخرج الأول", "المخرج الثاني", "المخرج الثالث"],
      metricsHighlight: "High Impact ROI",
    };
    setServices([...services, newService]);
  };

  const handleDeleteService = (id: string) => {
    if (confirm("Delete this service?")) {
      const updated = services.filter((s) => s.id !== id);
      setServices(updated);
      saveServices(updated);
      triggerSaveNotice();
    }
  };

  // 4. Save Cases
  const handleSaveCases = (e: React.FormEvent) => {
    e.preventDefault();
    saveCaseStudies(caseStudies);
    triggerSaveNotice();
  };

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Content & Data CMS
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Edit live portfolio text, adjust key metrics, and manage SEO case studies.
          </p>
        </div>

        {savedNotice && (
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold animate-in fade-in">
            <CheckCircle className="w-4 h-4 text-brand-600" />
            <span>Changes successfully saved to live database!</span>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab("hero")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "hero"
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          Hero & Bio
        </button>
        <button
          onClick={() => setActiveTab("metrics")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "metrics"
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          Metrics & Stats
        </button>
        <button
          onClick={() => setActiveTab("services")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "services"
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          SEO Solutions ({services.length})
        </button>
        <button
          onClick={() => setActiveTab("cases")}
          className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "cases"
              ? "bg-brand-600 text-white shadow-sm"
              : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
          }`}
        >
          GSC Case Studies ({caseStudies.length})
        </button>
      </div>

      {/* TAB 1: HERO & BIO */}
      {activeTab === "hero" && (
        <form onSubmit={handleSaveHero} className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                value={siteConfig.name}
                onChange={(e) => setSiteConfig({ ...siteConfig, name: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Professional Role Title
              </label>
              <input
                type="text"
                value={siteConfig.role}
                onChange={(e) => setSiteConfig({ ...siteConfig, role: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Years of Experience
              </label>
              <input
                type="text"
                value={siteConfig.yearsOfExperience}
                onChange={(e) => setSiteConfig({ ...siteConfig, yearsOfExperience: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Target Regional Markets
              </label>
              <input
                type="text"
                value={siteConfig.location}
                onChange={(e) => setSiteConfig({ ...siteConfig, location: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Hero Punchy Subheadline
              </label>
              <textarea
                rows={3}
                value={siteConfig.heroSubheadline}
                onChange={(e) => setSiteConfig({ ...siteConfig, heroSubheadline: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                About Me Bio (Exact Text from Portfolio)
              </label>
              <textarea
                rows={6}
                value={siteConfig.aboutText}
                onChange={(e) => setSiteConfig({ ...siteConfig, aboutText: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:bg-white focus:outline-none leading-relaxed"
              />
            </div>
          </div>

          <div className="flex justify-end pt-3 border-t border-slate-200">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Hero & Bio Changes</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 2: METRICS */}
      {activeTab === "metrics" && (
        <form onSubmit={handleSaveMetrics} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.map((m, idx) => (
              <div
                key={m.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-700">Metric #{idx + 1}</span>
                  <input
                    type="text"
                    value={m.trend}
                    onChange={(e) => handleMetricChange(idx, "trend", e.target.value)}
                    placeholder="Trend tag"
                    className="text-xs bg-brand-50 px-2 py-1 rounded border border-brand-200 text-brand-700 w-28 text-end font-semibold"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Number Value</label>
                    <input
                      type="number"
                      value={m.value}
                      onChange={(e) => handleMetricChange(idx, "value", parseInt(e.target.value) || 0)}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:border-brand-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Suffix (+ / K)</label>
                    <input
                      type="text"
                      value={m.suffix}
                      onChange={(e) => handleMetricChange(idx, "suffix", e.target.value)}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">Label (English)</label>
                  <input
                    type="text"
                    value={m.label}
                    onChange={(e) => handleMetricChange(idx, "label", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-slate-600 mb-1">Label (Arabic)</label>
                  <input
                    type="text"
                    value={m.labelAr}
                    onChange={(e) => handleMetricChange(idx, "labelAr", e.target.value)}
                    className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs text-end font-arabic focus:border-brand-500 focus:bg-white"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Metric Numbers</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 3: SERVICES */}
      {activeTab === "services" && (
        <form onSubmit={handleSaveServices} className="space-y-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-xs text-slate-600">
              Manage all 7 core SEO service offerings and their deliverables.
            </p>
            <button
              type="button"
              onClick={handleAddService}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Service</span>
            </button>
          </div>

          <div className="space-y-4">
            {services.map((srv, idx) => (
              <div
                key={srv.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-700">Service #{idx + 1}</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteService(srv.id)}
                    className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Delete</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Title (EN)</label>
                    <input
                      type="text"
                      value={srv.title}
                      onChange={(e) => {
                        const copy = [...services];
                        copy[idx].title = e.target.value;
                        setServices(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Title (AR)</label>
                    <input
                      type="text"
                      value={srv.titleAr}
                      onChange={(e) => {
                        const copy = [...services];
                        copy[idx].titleAr = e.target.value;
                        setServices(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs text-end font-arabic focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Category</label>
                    <select
                      value={srv.category}
                      onChange={(e) => {
                        const copy = [...services];
                        copy[idx].category = e.target.value as any;
                        setServices(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                    >
                      <option value="Technical">Technical</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Growth">Growth</option>
                      <option value="AI & Next-Gen">AI & Next-Gen</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Highlight Badge</label>
                    <input
                      type="text"
                      value={srv.metricsHighlight}
                      onChange={(e) => {
                        const copy = [...services];
                        copy[idx].metricsHighlight = e.target.value;
                        setServices(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-slate-600 mb-1">Summary (EN)</label>
                    <textarea
                      rows={2}
                      value={srv.summary}
                      onChange={(e) => {
                        const copy = [...services];
                        copy[idx].summary = e.target.value;
                        setServices(copy);
                      }}
                      className="w-full p-2 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Services</span>
            </button>
          </div>
        </form>
      )}

      {/* TAB 4: CASE STUDIES */}
      {activeTab === "cases" && (
        <form onSubmit={handleSaveCases} className="space-y-4">
          <div className="space-y-4">
            {caseStudies.map((cs, idx) => (
              <div
                key={cs.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3"
              >
                <span className="text-xs font-bold text-brand-700">Case Study #{idx + 1}</span>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Client/Store</label>
                    <input
                      type="text"
                      value={cs.clientName}
                      onChange={(e) => {
                        const copy = [...caseStudies];
                        copy[idx].clientName = e.target.value;
                        setCaseStudies(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs font-bold focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Platform</label>
                    <input
                      type="text"
                      value={cs.platform}
                      onChange={(e) => {
                        const copy = [...caseStudies];
                        copy[idx].platform = e.target.value;
                        setCaseStudies(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Period</label>
                    <input
                      type="text"
                      value={cs.period}
                      onChange={(e) => {
                        const copy = [...caseStudies];
                        copy[idx].period = e.target.value;
                        setCaseStudies(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Clicks</label>
                    <input
                      type="text"
                      value={cs.clicks}
                      onChange={(e) => {
                        const copy = [...caseStudies];
                        copy[idx].clicks = e.target.value;
                        setCaseStudies(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Impressions</label>
                    <input
                      type="text"
                      value={cs.impressions}
                      onChange={(e) => {
                        const copy = [...caseStudies];
                        copy[idx].impressions = e.target.value;
                        setCaseStudies(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono focus:border-brand-500 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-600 mb-1">Growth %</label>
                    <input
                      type="text"
                      value={cs.growth}
                      onChange={(e) => {
                        const copy = [...caseStudies];
                        copy[idx].growth = e.target.value;
                        setCaseStudies(copy);
                      }}
                      className="w-full px-2.5 py-1.5 rounded bg-slate-50 border border-slate-200 text-slate-900 text-xs text-brand-700 font-bold focus:border-brand-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-3">
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save Case Studies</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
