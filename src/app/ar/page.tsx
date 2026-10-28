"use client";

import React, { useState, useEffect } from "react";
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

export default function ArabicHomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Record client visit for admin analytics
    recordVisit();
    if (typeof window !== "undefined") {
      localStorage.setItem("osama_portfolio_lang", "ar");
    }
  }, []);

  const handleOpenAudit = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsAuditModalOpen(true);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen bg-[#060913] text-slate-100 font-arabic selection:bg-cyan-500 selection:text-black"
    >
      {/* Navbar with language toggle & audit modal trigger */}
      <Navbar
        lang="ar"
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Main Public Content */}
      <main>
        {/* Hero Section */}
        <Hero lang="ar" onOpenAudit={() => handleOpenAudit()} />

        {/* Impact Metrics Counters */}
        <MetricsCounter lang="ar" />

        {/* 7 Core SEO Solutions Grid */}
        <SolutionsGrid
          lang="ar"
          onSelectService={(serviceName) => handleOpenAudit(serviceName)}
        />

        {/* Real Google Search Console Case Studies & Interactive Charts */}
        <SearchConsoleShowcase lang="ar" />

        {/* Platforms (Salla, Zid, Shopify) & SEO Tools */}
        <PlatformChips lang="ar" />

        {/* Career Experience Timeline */}
        <ExperienceTimeline lang="ar" />

        {/* Semrush Academy & Advanced SEO Certifications */}
        <Certifications lang="ar" />

        {/* 8-Step Site Audit Roadmap */}
        <AuditRoadmap lang="ar" />

        {/* Why Choose Osama Elgendy */}
        <WhyChooseMe lang="ar" />

        {/* Verified Regional Clients & Testimonials */}
        <ClientsTestimonials lang="ar" />

        {/* High-Converting CTA Contact Section */}
        <ContactSection
          lang="ar"
          onOpenAudit={() => handleOpenAudit()}
        />
      </main>

      {/* Global Footer */}
      <Footer lang="ar" />

      {/* Interactive Audit Booking Lead Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        lang="ar"
        preselectedService={preselectedService}
      />
    </div>
  );
}

