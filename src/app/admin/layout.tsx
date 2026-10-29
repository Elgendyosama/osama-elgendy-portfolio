"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { checkIsAuthenticated, setAdminSession } from "@/lib/store";
import {
  LayoutDashboard,
  Users,
  FileEdit,
  Settings,
  ExternalLink,
  LogOut,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!checkIsAuthenticated()) {
      router.push("/login");
    }
  }, [router]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center text-slate-500">
        Loading CMS Console...
      </div>
    );
  }

  const handleLogout = () => {
    setAdminSession(false);
    router.push("/login");
  };

  const navLinks = [
    {
      href: "/admin",
      label: "Overview & Analytics",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      href: "/admin/leads",
      label: "Leads & Audit CRM",
      icon: <Users className="w-4 h-4" />,
    },
    {
      href: "/admin/content",
      label: "Content Management",
      icon: <FileEdit className="w-4 h-4" />,
    },
    {
      href: "/admin/articles",
      label: "Articles & Blog CMS",
      icon: <BookOpen className="w-4 h-4" />,
    },
    {
      href: "/admin/seo",
      label: "Global SEO Settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center font-bold text-xs text-white">
            OE
          </div>
          <span className="font-heading font-bold text-sm text-slate-900">
            Admin CMS
          </span>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
        >
          {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 p-5 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-slate-200">
            <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center font-heading font-black text-white text-base shadow-sm">
              OE
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <span>Osama Elgendy</span>
                <ShieldCheck className="w-4 h-4 text-brand-600" />
              </h2>
              <span className="text-[11px] text-slate-500">SEO Management CMS</span>
            </div>
          </div>

          {/* Nav List */}
          <nav className="mt-6 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-brand-600 text-white shadow-md shadow-brand-600/20"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer Controls */}
        <div className="pt-6 border-t border-slate-200 space-y-2">
          {/* View Live Site */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between w-full px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-all"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-brand-600" />
              View Public Site
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-brand-50 text-brand-700 font-bold border border-brand-200">
              Live
            </span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-700 hover:text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Canvas */}
      <main className="flex-1 min-w-0 bg-[#f8fafc] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
