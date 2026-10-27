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
      <div className="min-h-screen bg-[#060913] flex items-center justify-center text-slate-400">
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
      href: "/admin/seo",
      label: "Global SEO Settings",
      icon: <Settings className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <div className="md:hidden bg-[#090e1c] border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center font-bold text-xs text-white">
            OE
          </div>
          <span className="font-heading font-bold text-sm text-white">
            Admin CMS
          </span>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-lg bg-slate-800 text-slate-300 border border-white/10"
        >
          {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#090e1c] border-r border-white/10 p-5 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 ${
          mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="flex items-center gap-3 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center font-heading font-black text-white text-base shadow-glow">
              OE
            </div>
            <div>
              <h2 className="font-heading font-bold text-sm text-white flex items-center gap-1.5">
                <span>Osama Elgendy</span>
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
              </h2>
              <span className="text-[11px] text-slate-400">SEO Management CMS</span>
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
                      ? "bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-glow"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
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
        <div className="pt-6 border-t border-white/10 space-y-2">
          {/* View Live Site */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between w-full px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800 border border-white/5 transition-all"
          >
            <span className="flex items-center gap-2">
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              View Public Site
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
              Live
            </span>
          </Link>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-all"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Canvas */}
      <main className="flex-1 min-w-0 bg-[#060913] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
