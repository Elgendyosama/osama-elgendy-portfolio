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

export default function HomePage() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Record client visit for admin analytics
    recordVisit();
    if (typeof window !== "undefined") {
      localStorage.setItem("osama_portfolio_lang", "en");
    }
  }, []);

  const handleOpenAudit = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setIsAuditModalOpen(true);
  };

  return (
    <div
      dir="ltr"
      className="min-h-screen bg-[#060913] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black"
    >
      {/* Navbar with language toggle & audit modal trigger */}
      <Navbar
        lang="en"
        onOpenAudit={() => handleOpenAudit()}
      />

      {/* Main Public Content */}
      <main>
        {/* Hero Section */}
        <Hero lang="en" onOpenAudit={() => handleOpenAudit()} />

        {/* Impact Metrics Counters */}
        <MetricsCounter lang="en" />

        {/* 7 Core SEO Solutions Grid */}
        <SolutionsGrid
          lang="en"
          onSelectService={(serviceName) => handleOpenAudit(serviceName)}
        />

        {/* Real Google Search Console Case Studies & Interactive Charts */}
        <SearchConsoleShowcase lang="en" />

        {/* Platforms (Salla, Zid, Shopify) & SEO Tools */}
        <PlatformChips lang="en" />

        {/* Career Experience Timeline */}
        <ExperienceTimeline lang="en" />

        {/* Semrush Academy & Advanced SEO Certifications */}
        <Certifications lang="en" />

        {/* 8-Step Site Audit Roadmap */}
        <AuditRoadmap lang="en" />

        {/* Why Choose Osama Elgendy */}
        <WhyChooseMe lang="en" />

        {/* Verified Regional Clients & Testimonials */}
        <ClientsTestimonials lang="en" />

        {/* High-Converting CTA Contact Section */}
        <ContactSection
          lang="en"
          onOpenAudit={() => handleOpenAudit()}
        />
      </main>

      {/* Global Footer */}
      <Footer lang="en" />

      {/* Interactive Audit Booking Lead Modal */}
      <AuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        lang="en"
        preselectedService={preselectedService}
      />
    </div>
  );
}
