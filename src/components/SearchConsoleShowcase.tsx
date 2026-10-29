"use client";

import React, { useState, useEffect } from "react";
import { translations, Language } from "@/lib/translations";
import { getCaseStudies } from "@/lib/store";
import { CaseStudyItem } from "@/lib/types";
import {
  TrendingUp,
  Search,
  ExternalLink,
  ShieldCheck,
  CheckSquare,
  BarChart2,
  Calendar,
  Filter,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface SearchConsoleShowcaseProps {
  lang: Language;
}

export const SearchConsoleShowcase: React.FC<SearchConsoleShowcaseProps> = ({ lang }) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudyItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredPoint, setHoveredPoint] = useState<{ date: string; clicks: number; impressions: number } | null>(null);

  const isAr = lang === "ar";
  const t = translations[lang];

  useEffect(() => {
    setCaseStudies(getCaseStudies());
  }, []);

  if (caseStudies.length === 0) return null;

  const currentCase = caseStudies[selectedIndex] || caseStudies[0];

  // Calculate SVG curve coordinates dynamically from chartData
  const maxClicks = Math.max(...currentCase.chartData.map((d) => d.clicks)) * 1.15;
  const maxImpressions = Math.max(...currentCase.chartData.map((d) => d.impressions)) * 1.15;

  const chartWidth = 720;
  const chartHeight = 220;
  const paddingX = 40;
  const paddingY = 20;

  const getPoints = (isClicks: boolean) => {
    const dataLen = currentCase.chartData.length;
    return currentCase.chartData.map((d, i) => {
      const x = paddingX + (i / (dataLen - 1)) * (chartWidth - paddingX * 2);
      const val = isClicks ? d.clicks : d.impressions;
      const maxVal = isClicks ? maxClicks : maxImpressions;
      const y = chartHeight - paddingY - (val / (maxVal || 1)) * (chartHeight - paddingY * 2);
      return { x, y, data: d };
    });
  };

  const clicksPoints = getPoints(true);
  const impressionsPoints = getPoints(false);

  const createSmoothPath = (pts: { x: number; y: number }[]) => {
    if (pts.length === 0) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      const cpX1 = p0.x + (p1.x - p0.x) / 2;
      const cpY1 = p0.y;
      const cpX2 = p0.x + (p1.x - p0.x) / 2;
      const cpY2 = p1.y;
      d += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${p1.x} ${p1.y}`;
    }
    return d;
  };

  const clicksPath = createSmoothPath(clicksPoints);
  const impressionsPath = createSmoothPath(impressionsPoints);

  return (
    <section id="results" className="relative py-24 bg-[#f8fafc] border-t border-slate-200/80 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700 mb-3">
            <BarChart2 className="w-3.5 h-3.5 text-brand-600" />
            <span>{t.gsc.headingBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            {t.gsc.heading}
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-normal">
            {t.gsc.subheading}
          </p>
        </div>

        {/* Case Study Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {caseStudies.map((cs, index) => (
            <button
              key={cs.id}
              onClick={() => {
                setSelectedIndex(index);
                setHoveredPoint(null);
              }}
              className={`p-3.5 rounded-2xl text-start transition-all duration-300 border ${
                selectedIndex === index
                  ? "bg-white border-brand-500 shadow-md ring-1 ring-brand-500"
                  : "bg-white/80 border-slate-200 hover:border-brand-300 hover:bg-white text-slate-700 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase font-bold text-slate-500">
                  {cs.platform}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200">
                  {cs.growth}
                </span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-1">
                {isAr ? cs.clientNameAr : cs.clientName}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">{cs.period}</p>
            </button>
          ))}
        </div>

        {/* Interactive Google Search Console Mock Window */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
          {/* GSC App Bar */}
          <div className="bg-slate-50/90 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            {/* Left: Google Search Console Logo & Domain */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                {/* Google Colors icon */}
                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white border border-slate-200 shadow-sm">
                  <span className="font-bold text-xs text-brand-600">G</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 tracking-wide">
                      Google Search Console
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-50 text-brand-700 border border-brand-200 font-medium">
                      Performance
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono">
                    {currentCase.platform} • {isAr ? currentCase.industryAr : currentCase.industry}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Verified Account & Date Filter Badge */}
            <div className="flex items-center gap-2.5">
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-500" />
                <span>osamasalehelgendy@gmail.com</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm">
                <Calendar className="w-3.5 h-3.5 text-brand-600" />
                <span>{currentCase.period}</span>
              </div>
            </div>
          </div>

          {/* Metric Metric Tabs (Exact GSC Styling) */}
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              {/* Total Clicks Card (Brand Green) */}
              <div className="rounded-2xl p-4 bg-brand-50/60 border-2 border-brand-400/80 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-brand-800 mb-1">
                  <div className="flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-brand-600" />
                    <span>{t.gsc.totalClicks}</span>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {currentCase.clicks}
                </div>
                <div className="text-[11px] text-brand-700 font-medium mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{currentCase.growth}</span>
                </div>
              </div>

              {/* Total Impressions Card (Silver / Slate) */}
              <div className="rounded-2xl p-4 bg-slate-50 border-2 border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                  <div className="flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.gsc.totalImpressions}</span>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {currentCase.impressions}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  Verified organic search impressions
                </div>
              </div>

              {/* Average CTR Card */}
              <div className="rounded-2xl p-4 bg-slate-50 border-2 border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                  <div className="flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.gsc.avgCtr}</span>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {currentCase.ctr}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  High-intent commercial search
                </div>
              </div>

              {/* Average Position Card */}
              <div className="rounded-2xl p-4 bg-slate-50 border-2 border-slate-200 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                  <div className="flex items-center gap-1.5">
                    <CheckSquare className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.gsc.avgPosition}</span>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                  {currentCase.avgPosition}
                </div>
                <div className="text-[11px] text-slate-500 font-medium mt-1">
                  Top of First Page Rankings
                </div>
              </div>
            </div>

            {/* Interactive SVG Chart Canvas */}
            <div className="relative rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-6 overflow-hidden">
              {/* Legend */}
              <div className="flex items-center justify-between gap-4 mb-4 text-xs font-medium">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5 text-brand-700 font-semibold">
                    <span className="w-3 h-1 bg-brand-600 rounded-full" />
                    Clicks Trend
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-600 font-semibold">
                    <span className="w-3 h-1 bg-slate-400 rounded-full" />
                    Impressions Trend
                  </span>
                </div>
                {hoveredPoint && (
                  <div className="flex items-center gap-3 bg-white px-3 py-1 rounded-lg border border-slate-200 text-slate-800 shadow-sm">
                    <span className="text-slate-500">{hoveredPoint.date}:</span>
                    <span className="text-brand-600 font-bold">{hoveredPoint.clicks.toLocaleString()} clicks</span>
                    <span className="text-slate-600 font-bold">{hoveredPoint.impressions.toLocaleString()} imp.</span>
                  </div>
                )}
              </div>

              {/* Chart SVG */}
              <div className="w-full overflow-x-auto">
                <svg
                  viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                  className="w-full h-48 sm:h-64"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="clicksGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22a344" stopOpacity="0.30" />
                      <stop offset="100%" stopColor="#22a344" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="impGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#b0b5b9" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#b0b5b9" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Horizontal grid lines */}
                  {[0.25, 0.5, 0.75, 1].map((pct, i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={chartHeight * pct - paddingY}
                      x2={chartWidth}
                      y2={chartHeight * pct - paddingY}
                      stroke="rgba(0,0,0,0.06)"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* Impressions Fill and Curve */}
                  <path
                    d={`${impressionsPath} L ${chartWidth - paddingX} ${chartHeight - paddingY} L ${paddingX} ${chartHeight - paddingY} Z`}
                    fill="url(#impGrad)"
                  />
                  <path
                    d={impressionsPath}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Clicks Fill and Curve */}
                  <path
                    d={`${clicksPath} L ${chartWidth - paddingX} ${chartHeight - paddingY} L ${paddingX} ${chartHeight - paddingY} Z`}
                    fill="url(#clicksGrad)"
                  />
                  <path
                    d={clicksPath}
                    fill="none"
                    stroke="#22a344"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />

                  {/* Interactive Points */}
                  {clicksPoints.map((pt, i) => (
                    <g key={i}>
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r="5"
                        fill="#ffffff"
                        stroke="#22a344"
                        strokeWidth="2.5"
                        className="cursor-pointer hover:r-7 transition-all"
                        onMouseEnter={() => setHoveredPoint(pt.data)}
                      />
                    </g>
                  ))}
                </svg>
              </div>

              {/* Bottom Summary Explanation */}
              <div className="mt-4 pt-4 border-t border-slate-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed max-w-3xl">
                  <span className="font-bold text-brand-700">
                    {isAr ? "تحليل الاستراتيجية المطبقة: " : "Strategy Applied: "}
                  </span>
                  {isAr ? currentCase.summaryAr : currentCase.summary}
                </p>

                <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-50 border border-brand-200 text-xs font-semibold text-brand-700">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t.gsc.verifiedGoogleAccount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
