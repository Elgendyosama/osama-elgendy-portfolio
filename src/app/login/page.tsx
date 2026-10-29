"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkIsAuthenticated, setAdminSession } from "@/lib/store";
import { ShieldCheck, Lock, User, ArrowRight, AlertCircle, KeyRound, Sparkles } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // If already logged in, redirect to admin immediately
    if (checkIsAuthenticated()) {
      router.push("/admin");
    }
  }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      // Validate credentials (accepts osama or admin)
      const validUser = username.trim().toLowerCase() === "osama" || username.trim().toLowerCase() === "admin";
      const validPass = password === "elgendy_seo_2026" || password === "admin123" || password === "osama2026";

      if (validUser && validPass) {
        setAdminSession(true);
        router.push("/admin");
      } else {
        setError("Invalid credentials. Please verify your username and password.");
        setLoading(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative w-full max-w-md rounded-3xl p-8 bg-white border border-slate-200 shadow-xl z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-brand-600 flex items-center justify-center mx-auto text-white shadow-md shadow-brand-600/20 mb-4">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-black text-slate-900 font-heading">
            Admin CMS Portal
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Restricted access • Osama Elgendy Portfolio Management
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-2.5 text-xs text-rose-700 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="osama or admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:border-brand-500 focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-600/20 transition-all disabled:opacity-50"
            >
              <span>{loading ? "Authenticating..." : "Access Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Demo Credentials Quick Fill Helper */}
        <div className="mt-8 pt-6 border-t border-slate-100 text-center">
          <div className="p-3 rounded-xl bg-brand-50 border border-brand-200 text-[11px] text-brand-800 space-y-1">
            <p className="font-bold flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" /> Demo Login Credentials:
            </p>
            <p className="font-mono text-slate-600">
              Username: <span className="text-slate-900 font-bold">osama</span> | Password: <span className="text-slate-900 font-bold">elgendy_seo_2026</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setUsername("osama");
                setPassword("elgendy_seo_2026");
              }}
              className="text-[10px] text-brand-700 underline hover:text-brand-800 font-semibold mt-1"
            >
              Click to Auto-fill Demo Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
