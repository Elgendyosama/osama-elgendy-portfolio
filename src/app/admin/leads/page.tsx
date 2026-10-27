"use client";

import React, { useState, useEffect } from "react";
import { getLeads, updateLeadStatus, deleteLead } from "@/lib/store";
import { AuditLeadItem } from "@/lib/types";
import {
  Users,
  Search,
  MessageSquare,
  Mail,
  Trash2,
  ExternalLink,
  Filter,
  CheckCircle2,
  Calendar,
  Globe,
} from "lucide-react";

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<AuditLeadItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  useEffect(() => {
    setLeads(getLeads());
  }, []);

  const handleStatusUpdate = (id: string, status: "new" | "review" | "contacted") => {
    updateLeadStatus(id, status);
    setLeads(getLeads());
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this lead?")) {
      deleteLead(id);
      setLeads(getLeads());
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.websiteUrl.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.whatsapp.includes(searchTerm);

    const matchesStatus =
      statusFilter === "all" ? true : lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
            Leads & Audit Inquiries CRM
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage incoming prospects, track review statuses, and execute direct outreach.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-white/5">
          Total Recorded Inquiries: <span className="text-white font-bold">{leads.length}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by name, site, email, WhatsApp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-white text-xs sm:text-sm focus:border-cyan-400 focus:outline-none"
          />
        </div>

        {/* Status Filter Buttons */}
        <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
          {["all", "new", "review", "contacted"].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                statusFilter === st
                  ? "bg-cyan-500 text-black font-bold shadow-sm"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/5"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-3xl border border-white/10 bg-[#090e1c] shadow-2xl overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="p-12 text-center text-slate-400 text-sm">
            No leads match your current search criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead className="bg-[#0e1428] text-slate-400 uppercase text-[11px] tracking-wider border-b border-white/10">
                <tr>
                  <th className="py-3.5 px-4 text-start">Prospect & Store</th>
                  <th className="py-3.5 px-4 text-start">Contact Info</th>
                  <th className="py-3.5 px-4 text-start">Traffic & Goal</th>
                  <th className="py-3.5 px-4 text-start">Status</th>
                  <th className="py-3.5 px-4 text-start">Date</th>
                  <th className="py-3.5 px-4 text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((lead) => {
                  const cleanPhone = lead.whatsapp.replace(/[^0-9]/g, "");
                  const whatsappMsg = encodeURIComponent(
                    `Hello ${lead.name}, this is Osama Elgendy (SEO Team Leader & E-Commerce SEO Specialist). I received your audit request for ${lead.websiteUrl} and would like to share our findings and growth recommendations with you.`
                  );
                  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${whatsappMsg}`;
                  const emailUrl = `mailto:${lead.email}?subject=SEO%20Audit%20Review%20for%20${encodeURIComponent(
                    lead.websiteUrl
                  )}&body=Hello%20${encodeURIComponent(
                    lead.name
                  )},%0D%0A%0D%0AThank%20you%20for%20reaching%20out.%20Here%20is%20our%20initial%20assessment%20for%20${encodeURIComponent(
                    lead.websiteUrl
                  )}...`;

                  return (
                    <tr
                      key={lead.id}
                      className="hover:bg-white/[0.02] transition-colors"
                    >
                      {/* Name & URL */}
                      <td className="py-4 px-4">
                        <div className="font-bold text-white text-sm">
                          {lead.name}
                        </div>
                        <a
                          href={lead.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:underline flex items-center gap-1 text-xs mt-0.5"
                        >
                          <Globe className="w-3 h-3" />
                          <span className="truncate max-w-[200px]">
                            {lead.websiteUrl}
                          </span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      </td>

                      {/* Contact Channels */}
                      <td className="py-4 px-4 space-y-0.5">
                        <div className="text-slate-300 font-mono text-xs">
                          {lead.whatsapp}
                        </div>
                        <div className="text-slate-400 text-xs truncate max-w-[180px]">
                          {lead.email}
                        </div>
                      </td>

                      {/* Traffic & Primary Goal */}
                      <td className="py-4 px-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-1">
                          Traffic: {lead.monthlyTraffic}
                        </span>
                        <div className="text-xs text-slate-300 line-clamp-1 max-w-[220px]">
                          {lead.primaryGoal}
                        </div>
                      </td>

                      {/* Status Selector */}
                      <td className="py-4 px-4">
                        <select
                          value={lead.status}
                          onChange={(e) =>
                            handleStatusUpdate(
                              lead.id,
                              e.target.value as "new" | "review" | "contacted"
                            )
                          }
                          className={`text-xs font-bold rounded-lg px-2.5 py-1.5 border focus:outline-none ${
                            lead.status === "new"
                              ? "bg-rose-500/10 text-rose-300 border-rose-500/30"
                              : lead.status === "review"
                              ? "bg-amber-500/10 text-amber-300 border-amber-500/30"
                              : "bg-growth-500/10 text-growth-300 border-growth-500/30"
                          }`}
                        >
                          <option value="new" className="bg-[#0e1428] text-white">
                            New Lead
                          </option>
                          <option value="review" className="bg-[#0e1428] text-white">
                            In Review
                          </option>
                          <option value="contacted" className="bg-[#0e1428] text-white">
                            Contacted
                          </option>
                        </select>
                      </td>

                      {/* Created Date */}
                      <td className="py-4 px-4 text-xs text-slate-400 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-4 text-end">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-growth-600 hover:bg-growth-500 text-white transition-colors"
                            title="Reply directly on WhatsApp"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={emailUrl}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                            title="Send email inquiry"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>

                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="p-2 rounded-lg bg-slate-800 hover:bg-rose-900/60 text-slate-400 hover:text-rose-300 transition-colors"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
