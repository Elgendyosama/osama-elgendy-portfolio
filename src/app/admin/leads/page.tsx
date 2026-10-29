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
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
            Leads & Audit Inquiries CRM
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage incoming prospects, track review statuses, and execute direct outreach.
          </p>
        </div>

        <div className="text-xs text-slate-600 font-mono bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
          Total Recorded Inquiries: <span className="text-slate-900 font-bold">{leads.length}</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        {/* Search Input */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by name, site, email, WhatsApp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-900 text-xs sm:text-sm focus:border-brand-500 focus:outline-none shadow-sm placeholder:text-slate-400"
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
                  ? "bg-brand-600 text-white font-bold shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Leads Table */}
      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        {filteredLeads.length === 0 ? (
          <div className="p-12 text-center text-slate-500 text-sm">
            No leads match your current search criteria.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-600 uppercase text-[11px] tracking-wider border-b border-slate-200 font-bold">
                <tr>
                  <th className="py-3.5 px-4 text-start">Prospect & Store</th>
                  <th className="py-3.5 px-4 text-start">Contact Info</th>
                  <th className="py-3.5 px-4 text-start">Traffic & Goal</th>
                  <th className="py-3.5 px-4 text-start">Status</th>
                  <th className="py-3.5 px-4 text-start">Date</th>
                  <th className="py-3.5 px-4 text-end">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
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
                      className="hover:bg-slate-50/60 transition-colors"
                    >
                      {/* Name & URL */}
                      <td className="py-4 px-4">
                        <div className="font-bold text-slate-900 text-sm">
                          {lead.name}
                        </div>
                        <a
                          href={lead.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-600 hover:underline flex items-center gap-1 text-xs mt-0.5 font-medium"
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
                        <div className="text-slate-800 font-mono text-xs">
                          {lead.whatsapp}
                        </div>
                        <div className="text-slate-500 text-xs truncate max-w-[180px]">
                          {lead.email}
                        </div>
                      </td>

                      {/* Traffic & Primary Goal */}
                      <td className="py-4 px-4">
                        <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-1">
                          Traffic: {lead.monthlyTraffic}
                        </span>
                        <div className="text-xs text-slate-700 line-clamp-1 max-w-[220px]">
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
                              ? "bg-rose-50 text-rose-700 border-rose-200"
                              : lead.status === "review"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-brand-50 text-brand-700 border-brand-200"
                          }`}
                        >
                          <option value="new">New Lead</option>
                          <option value="review">In Review</option>
                          <option value="contacted">Contacted</option>
                        </select>
                      </td>

                      {/* Created Date */}
                      <td className="py-4 px-4 text-xs text-slate-500 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString()}
                      </td>

                      {/* Action Buttons */}
                      <td className="py-4 px-4 text-end">
                        <div className="flex items-center justify-end gap-1.5">
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-[#22a344] hover:bg-[#1e913d] text-white transition-colors shadow-sm"
                            title="Reply directly on WhatsApp"
                          >
                            <MessageSquare className="w-3.5 h-3.5" />
                          </a>

                          <a
                            href={emailUrl}
                            className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
                            title="Send email inquiry"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </a>

                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="p-2 rounded-lg bg-slate-100 hover:bg-rose-100 text-slate-500 hover:text-rose-700 transition-colors border border-slate-200"
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
