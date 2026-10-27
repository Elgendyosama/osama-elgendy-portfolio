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
} from "lucide-react";

export default function AdminDashboardPage() {
  const [leads, setLeads] = useState<AuditLeadItem[]>([]);
  const [visitorCount, setVisitorCount] = useState<number>(1420);

  useEffect(() => {
    setLeads(getLeads());
    setVisitorCount(getVisitCount());
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
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-rose-500/10 text-rose-400 border border-rose-500/20">
            New Lead
          </span>
        );
      case "review":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
            In Review
          </span>
        );
      case "contacted":
        return (
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-growth-500/10 text-growth-400 border border-growth-500/20">
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
          <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Executive SEO Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Real-time analytics, incoming client audit requests, and portfolio controls.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/admin/leads"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-cyan-600 shadow-glow hover:opacity-95 transition-all"
          >
            <Users className="w-4 h-4" />
            <span>Manage All Leads ({totalLeads})</span>
          </Link>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Visitors */}
        <div className="rounded-2xl p-5 bg-[#090e1c] border border-white/10 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Total Unique Visitors</span>
            <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            {visitorCount.toLocaleString()}
          </div>
          <p className="text-[11px] text-growth-400 font-medium mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>+24.5% organic traffic trend</span>
          </p>
        </div>

        {/* Audit Inquiries */}
        <div className="rounded-2xl p-5 bg-[#090e1c] border border-cyan-500/30 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Total Audit Requests</span>
            <div className="w-8 h-8 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            {totalLeads}
          </div>
          <p className="text-[11px] text-cyan-400 font-medium mt-1">
            {newLeadsCount} pending review
          </p>
        </div>

        {/* Conversion Rate */}
        <div className="rounded-2xl p-5 bg-[#090e1c] border border-white/10 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Lead Conversion Rate</span>
            <div className="w-8 h-8 rounded-lg bg-growth-500/10 flex items-center justify-center text-growth-400">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            {conversionRate}%
          </div>
          <p className="text-[11px] text-growth-400 font-medium mt-1">
            High-converting intent
          </p>
        </div>

        {/* Client Quality Score */}
        <div className="rounded-2xl p-5 bg-[#090e1c] border border-white/10 shadow-lg">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-semibold">Average Store Traffic</span>
            <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
            50K - 200K
          </div>
          <p className="text-[11px] text-purple-300 font-medium mt-1">
            Middle East & KSA Retailers
          </p>
        </div>
      </div>

      {/* Quick Actions Shortcuts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link
          href="/admin/content"
          className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-[#0a1224] border border-white/10 hover:border-cyan-500/40 transition-all flex items-center justify-between group shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <FileEdit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                Content & Services CMS
              </h3>
              <p className="text-xs text-slate-400">
                Update Hero, Metrics, SEO Services, and GSC Case Studies.
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
        </Link>

        <Link
          href="/admin/seo"
          className="p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 to-[#0a1224] border border-white/10 hover:border-growth-500/40 transition-all flex items-center justify-between group shadow-lg"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-growth-500/10 flex items-center justify-center text-growth-400">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white group-hover:text-growth-300 transition-colors">
                Global SEO & Tracking
              </h3>
              <p className="text-xs text-slate-400">
                Inject GSC verification tags, GTM containers, and OG settings.
              </p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-growth-400 group-hover:translate-x-1 transition-all" />
        </Link>
      </div>

      {/* Recent Incoming Leads (CRM Preview) */}
      <div className="rounded-3xl p-6 bg-[#090e1c] border border-white/10 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white font-heading">
              Recent Audit & SEO Inquiries
            </h2>
            <p className="text-xs text-slate-400">
              Incoming client requests from Salla, Zid, and corporate domains.
            </p>
          </div>
          <Link
            href="/admin/leads"
            className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {leads.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No audit requests received yet.
          </div>
        ) : (
          <div className="divide-y divide-white/5 overflow-x-auto">
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
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.02] px-2 rounded-xl transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{lead.name}</span>
                      {getStatusBadge(lead.status)}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <a
                        href={lead.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:underline flex items-center gap-1"
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-growth-600 hover:bg-growth-500 transition-colors shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`mailto:${lead.email}?subject=SEO%20Audit%20Review%20for%20${encodeURIComponent(
                        lead.websiteUrl
                      )}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
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
                      className="text-xs bg-slate-900 border border-white/10 rounded-lg px-2 py-1 text-slate-300 focus:outline-none"
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
