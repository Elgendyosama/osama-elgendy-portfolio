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
    <div className="min-h-screen bg-[#060913] flex items-center justify-center p-4 relative overflow-hidden bg-radial-gradient">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative w-full max-w-md rounded-3xl p-8 bg-gradient-to-b from-slate-900/90 to-[#090e1c] border border-cyan-500/30 shadow-2xl z-10">
        {/* Brand Header */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-600 to-cyan-500 flex items-center justify-center mx-auto text-white shadow-glow mb-4">
            <Lock className="w-7 h-7 text-white" />
          </div>
          <h1 className="text-2xl font-black text-white font-heading">
            Admin CMS Portal
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Restricted access • Osama Elgendy Portfolio Management
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center gap-2.5 text-xs text-rose-300 animate-in fade-in">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Username
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="text"
                required
                placeholder="osama or admin"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <KeyRound className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
              <input
                type="password"
                required
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-white text-sm focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 hover:opacity-95 shadow-glow hover:shadow-glow-emerald transition-all disabled:opacity-50"
            >
              <span>{loading ? "Authenticating..." : "Access Dashboard"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* Demo Credentials Quick Fill Helper */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-[11px] text-cyan-300 space-y-1">
            <p className="font-bold flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> Demo Login Credentials:
            </p>
            <p className="font-mono text-slate-300">
              Username: <span className="text-white font-bold">osama</span> | Password: <span className="text-white font-bold">elgendy_seo_2026</span>
            </p>
            <button
              type="button"
              onClick={() => {
                setUsername("osama");
                setPassword("elgendy_seo_2026");
              }}
              className="text-[10px] text-cyan-400 underline hover:text-cyan-300 font-semibold mt-1"
            >
              Click to Auto-fill Demo Credentials
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
