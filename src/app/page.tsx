"use client";

import React, { useState, useEffect } from "react";
import { Language } from "@/lib/translations";
import { recordVisit } from "@/lib/store";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MetricsCounter } from "@/components/MetricsCounter";
import { SolutionsGrid } from "@/components/SolutionsGrid";
import { SearchConsoleShowcase } from "@/components/SearchConsoleShowcase";
import { PlatformChips } from "@/components/PlatformChips";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Certifications } from "@/components/Certifications";
import { AuditRoadmap } from "@/components/AuditRoadmap";
import { WhyChooseMe } from "@/components/WhyChooseMe";
import { ClientsTestimonials } from "@/components/ClientsTestimonials";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { AuditModal } from "@/components/AuditModal";

export default function HomePage() {
  const [lang, setLang] = useState<Language>("en");
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Record client visit for admin analytics
    recordVisit();

    // Check saved language preference if any
    const savedLang = localStorage.getItem("osama_portfolio_lang") as Language;
    if (savedLang === "ar" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const handleToggleLang = () => {
    const nextLang: Language = lang === "en" ? "ar" : "en";
    setLang(nextLang);
    localStorage.setItem("osama_portfolio_lang", nextLang);
  };

  const handleOpenAudit = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsAuditModalOpen(true);
  };

  const isAr = lang === "ar";

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#060913] text-slate-100 ${
        isAr ? "font-arabic" : "font-sans"
      } selection:bg-cyan-500 selection:text-black`}
    >
      {/* Navbar with language toggle & audit modal trigger */}
      <Navbar
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Main Public Content */}
      <main>
        {/* Hero Section */}
        <Hero lang={lang} onOpenAudit={() => handleOpenAudit()} />

        {/* Impact Metrics Counters */}
        <MetricsCounter lang={lang} />

        {/* 7 Core SEO Solutions Grid */}
        <SolutionsGrid
          lang={lang}
          onSelectService={(serviceName) => handleOpenAudit(serviceName)}
        />

        {/* Real Google Search Console Case Studies & Interactive Charts */}
        <SearchConsoleShowcase lang={lang} />

        {/* Platforms (Salla, Zid, Shopify) & SEO Tools */}
        <PlatformChips lang={lang} />

        {/* Career Experience Timeline */}
        <ExperienceTimeline lang={lang} />

        {/* Semrush Academy & Advanced SEO Certifications */}
        <Certifications lang={lang} />

        {/* 8-Step Site Audit Roadmap */}
        <AuditRoadmap lang={lang} />

        {/* Why Choose Osama Elgendy */}
        <WhyChooseMe lang={lang} />

        {/* Verified Regional Clients & Testimonials */}
        <ClientsTestimonials lang={lang} />

        {/* High-Converting CTA Contact Section */}
        <ContactSection
          lang={lang}
          onOpenAudit={() => handleOpenAudit()}
        />
      </main>

      {/* Footer (Strictly with NO public admin links) */}
      <Footer lang={lang} />

      {/* Lead Generation & Free Audit Intake Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        lang={lang}
        preselectedService={preselectedService}
      />
    </div>
  );
}
