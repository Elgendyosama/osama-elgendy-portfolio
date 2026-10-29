"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getLeads, getVisitCount, updateLeadStatus } from "@/lib/store";
import { AuditLeadItem } from "@/lib/types";
import {
  Users,
  Eye,
  TrendingUp,
  Percent,
  MessageSquare,
  Mail,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  FileEdit,
  Settings,
  BookOpen,
} from "lucide-react";
import { getArticles } from "@/lib/store";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<AuditLeadItem[]>([]);
  const [visitorCount, setVisitorCount] = useState<number>(1420);
  const [articlesCount, setArticlesCount] = useState<number>(0);

  useEffect(() => {
    setLeads(getLeads());
    setVisitorCount(getVisitCount());
    setArticlesCount(getArticles().length);
  }, []);

  const totalLeads = leads.length;
  const newLeadsCount = leads.filter((l) => l.status === "new").length;
  const conversionRate =
    visitorCount > 0 ? ((totalLeads / visitorCount) * 100).toFixed(1) : "0.0";

  const handleStatusChange = (id: string, status: "new" | "review" | "contacted") => {
    updateLeadStatus(id, status);
    setLeads(getLeads());
  };

  const getStatusBadge = (status: AuditLeadItem["status"]) => {
    switch (status) {
      case "new":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
            New Lead
          </span>
        );
      case "review":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
            In Review
          </span>
        );
      case "contacted":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200">
            Contacted
          </span>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Welcome Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Executive SEO Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Real-time analytics, incoming client audit requests, and portfolio controls.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/articles"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 transition-all shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-brand-600" />
            <span>Articles ({articlesCount})</span>
          </Link>
          <Link
            href="/admin/leads"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all"
          >
            <Users className="w-4 h-4" />
            <span>Manage All Leads ({totalLeads})</span>
          </Link>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Visitors */}
        <div className="rounded-2xl p-5 bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Total Unique Visitors</span>
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            {visitorCount.toLocaleString()}
          </div>
          <p className="text-[11px] text-brand-700 font-medium mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+24.5% organic traffic trend</span>
          </p>
        </div>

        {/* Audit Inquiries */}
        <div className="rounded-2xl p-5 bg-white border border-brand-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Total Audit Requests</span>
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            {totalLeads}
          </div>
          <p className="text-[11px] text-brand-700 font-medium mt-1">
            {newLeadsCount} pending review
          </p>
        </div>

        {/* Conversion Rate */}
        <div className="rounded-2xl p-5 bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Lead Conversion Rate</span>
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            {conversionRate}%
          </div>
          <p className="text-[11px] text-brand-700 font-medium mt-1">
            High-converting intent
          </p>
        </div>

        {/* Client Quality Score */}
        <div className="rounded-2xl p-5 bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold">Average Store Traffic</span>
            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            50K - 200K
          </div>
          <p className="text-[11px] text-slate-500 font-medium mt-1">
            Middle East & KSA Retailers
          </p>
        </div>
      </div>

      {/* Quick Actions Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link
          href="/admin/articles"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                Articles & Blog CMS
              </h3>
              <p className="text-xs text-slate-500">
                Write, publish & optimize technical SEO guides.
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/admin/content"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
              <FileEdit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                Content & Services CMS
              </h3>
              <p className="text-xs text-slate-500">
                Update Hero, Metrics, SEO Services, and GSC Case Studies.
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/admin/seo"
          className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-brand-500/50 shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors">
                Global SEO & Tracking
              </h3>
              <p className="text-xs text-slate-500">
                Inject GSC verification tags, GTM containers, and OG settings.
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Recent Incoming Leads (CRM Preview) */}
      <div className="rounded-3xl p-6 bg-white border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900 font-heading">
              Recent Audit & SEO Inquiries
            </h2>
            <p className="text-xs text-slate-500">
              Incoming client requests from Salla, Zid, and corporate domains.
            </p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {leads.length === 0 ? (
          <div className="p-8 text-center text-slate-500 text-xs">
            No audit requests received yet.
          </div>
        ) : (
          <div className="divide-y divide-slate-100 overflow-x-auto">
            {leads.slice(0, 5).map((lead) => {
              const whatsappReplyUrl = `https://wa.me/${lead.whatsapp.replace(
                /[^0-9]/g,
                ""
              )}?text=${encodeURIComponent(
                `Hello ${lead.name}, this is Osama Elgendy (SEO Team Leader). I reviewed your audit request for ${lead.websiteUrl} and would love to share our technical findings with you.`
              )}`;

              return (
                <div
                  key={lead.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-slate-50/60 px-2 rounded-xl transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900">{lead.name}</span>
                      {getStatusBadge(lead.status)}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                      <a
                        href={lead.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-600 hover:underline flex items-center gap-1 font-medium"
                      >
                        <span>{lead.websiteUrl}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <span>•</span>
                      <span>Traffic: {lead.monthlyTraffic}</span>
                      <span>•</span>
                      <span>Goal: {lead.primaryGoal}</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex items-center gap-2">
                    <a
                      href={whatsappReplyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#22a344] hover:bg-[#1e913d] transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${lead.email}?subject=SEO%20Audit%20Review%20for%20${encodeURIComponent(
                        lead.websiteUrl
                      )}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email</span>
                    </a>

                    <select
                      value={lead.status}
                      onChange={(e) =>
                        handleStatusChange(
                          lead.id,
                          e.target.value as "new" | "review" | "contacted"
                        )
                      }
                      className="text-xs bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-slate-700 focus:outline-none"
                    >
                      <option value="new">New</option>
                      <option value="review">Review</option>
                      <option value="contacted">Contacted</option>
                    </select>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
