"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { translations, Language } from "@/lib/translations";
import { addLead } from "@/lib/store";
import {
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Globe,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Zap,
  Search,
  Bot,
  Layers,
  Clock,
  Award,
  ChevronDown,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

function BookingContent() {
  const searchParams = useSearchParams();
  const serviceParam = searchParams.get("service") || "";

  const [lang, setLang] = useState<Language>("ar");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [platform, setPlatform] = useState("Salla (سلة)");
  const [monthlyTraffic, setMonthlyTraffic] = useState("5K - 20K");
  const [primaryGoal, setPrimaryGoal] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("osama_portfolio_lang") as Language;
    if (savedLang === "ar" || savedLang === "en") {
      setLang(savedLang);
    }
  }, []);

  const t = translations[lang];
  const isAr = lang === "ar";

  useEffect(() => {
    if (serviceParam) {
      setPrimaryGoal(serviceParam);
    } else if (t.modal.goals.length > 0) {
      setPrimaryGoal(t.modal.goals[0]);
    }
  }, [serviceParam, lang]);

  const handleToggleLang = () => {
    const nextLang: Language = lang === "en" ? "ar" : "en";
    setLang(nextLang);
    localStorage.setItem("osama_portfolio_lang", nextLang);
  };

  const platforms = [
    { id: "salla", labelAr: "سلة (Salla)", labelEn: "Salla" },
    { id: "zid", labelAr: "زد (Zid)", labelEn: "Zid" },
    { id: "shopify", labelAr: "شوبيفاي (Shopify)", labelEn: "Shopify" },
    { id: "wordpress", labelAr: "ووردبريس / ووكومرس", labelEn: "WordPress / WooCommerce" },
    { id: "magento", labelAr: "ماجنتو (Magento)", labelEn: "Magento" },
    { id: "custom", labelAr: "برمجة خاصة / أخرى", labelEn: "Custom / Other" },
  ];

  const trafficRanges = isAr
    ? [
        "متجر جديد (أقل من 1,000 زائر)",
        "1,000 - 5,000 زائر شهرياً",
        "5,000 - 20,000 زائر شهرياً",
        "20,000 - 100,000 زائر شهرياً",
        "أكثر من 100,000 زائر شهرياً",
      ]
    : [
        "New Website (< 1K visits)",
        "1K - 5K visits / month",
        "5K - 20K visits / month",
        "20K - 100K visits / month",
        "100K+ visits / month",
      ];

  const cleanPhone = "201005647312";
  const directWhatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    isAr
      ? "مرحباً أستاذ أسامة، أرغب في حجز فحص سيو واستشارة مجانية لموقعي/متجري."
      : "Hello Osama, I'd like to book a free SEO audit and consultation for my website/store."
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!websiteUrl || !name || !email || !whatsapp) return;

    setSubmitting(true);

    setTimeout(() => {
      const fullNotes = `[المنصة: ${platform}] ${message}`.trim();
      addLead({
        websiteUrl,
        name,
        email,
        whatsapp,
        monthlyTraffic,
        primaryGoal,
        message: fullNotes,
      });

      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const leadFollowupWhatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    isAr
      ? `مرحباً أستاذ أسامة، لقد أرسلت طلب فحص سيو عبر الموقع لمتجري: ${websiteUrl}، اسمي: ${name}. هدفي الأساسي: ${primaryGoal}.`
      : `Hello Osama! I just submitted an SEO audit request for my domain: ${websiteUrl}, My name is ${name}. Primary goal: ${primaryGoal}.`
  )}`;

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      className={`min-h-screen bg-[#060913] text-slate-100 ${
        isAr ? "font-arabic" : "font-sans"
      } selection:bg-cyan-500 selection:text-black relative overflow-hidden`}
    >
      {/* Ambient background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-cyan-600/20 via-brand-600/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[600px] -right-40 w-[600px] h-[600px] bg-growth-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-20 -left-40 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#060913]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Back Link */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white transition-all shadow-sm"
            >
              {isAr ? (
                <>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                  <span>الرجوع للرئيسية</span>
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4 text-cyan-400" />
                  <span>Back to Home</span>
                </>
              )}
            </Link>

            <Link href="/" className="hidden sm:flex flex-col text-start">
              <span className="text-base font-black text-white font-heading tracking-tight">
                Osama Elgendy
              </span>
              <span className="text-[11px] text-cyan-400 font-medium">
                {isAr ? "قائد فريق السيو وسيو المتاجر" : "SEO Team Leader & E-Com Specialist"}
              </span>
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-growth-400 bg-growth-950/40 hover:bg-growth-900/60 border border-growth-500/30 transition-all"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <bdi dir="ltr" className="font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>+20 100 564 7312</bdi>
            </a>

            <button
              onClick={handleToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-white/10 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{isAr ? "English" : "العربية"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 relative z-10">
        {/* Header Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-300">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>
              {isAr
                ? "فحص سيو تقني مجاني 100% • بدون أي التزام • سرية تامة"
                : "100% Free SEO & Technical Audit • No Obligation • Strictly Confidential"}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight leading-tight">
            {isAr ? (
              <>
                احجز فحص واستشارة السيو <br />
                <span className="bg-gradient-to-r from-cyan-400 via-brand-400 to-growth-400 bg-clip-text text-transparent">
                  لموقعك أو متجرك الإلكتروني
                </span>
              </>
            ) : (
              <>
                Book Your Free SEO Audit & <br />
                <span className="bg-gradient-to-r from-cyan-400 via-brand-400 to-growth-400 bg-clip-text text-transparent">
                  E-Commerce Growth Consultation
                </span>
              </>
            )}
          </h1>

          <p className="text-sm sm:text-base text-slate-300/85 leading-relaxed">
            {isAr
              ? "تحليل شامل ودقيق لأخطاء الزحف التقنية، مؤشرات سرعة Core Web Vitals للجوال، فجوات الكلمات المفتاحية للمنافسين، وهندسة تصدر محركات الذكاء الاصطناعي (GEO / AEO) لزيادة مبيعاتك وأرباحك."
              : "In-depth diagnostic of your technical crawl health, Core Web Vitals, competitor keyword gaps, and AI Search Engine Optimization (GEO/AEO) tailored to multiply your organic sales."}
          </p>
        </div>

        {/* Form and Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Booking Form (7 Cols on desktop) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-b from-slate-900/90 via-[#0a1020] to-slate-950/90 border border-cyan-500/25 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="py-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-20 h-20 rounded-full bg-growth-500/20 border-2 border-growth-500/50 flex items-center justify-center mx-auto text-growth-400 shadow-glow-emerald">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                      {isAr ? "تم استلام طلب الفحص بنجاح!" : "Audit Request Received Successfully!"}
                    </h2>
                    <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
                      {isAr
                        ? `شكراً لك يا ${name}! سأقوم بمراجعة مؤشرات موقعك وإعداد تقرير الفحص الأولي والتواصل معك عبر الواتساب في غضون 24 ساعة.`
                        : `Thank you, ${name}! Osama Elgendy will personally analyze your domain metrics and reach out via WhatsApp within 24 hours.`}
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="rounded-2xl bg-white/5 border border-white/10 p-5 text-start space-y-2 max-w-md mx-auto text-xs sm:text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isAr ? "الموقع:" : "Website:"}</span>
                      <span className="font-semibold text-cyan-300 dir-ltr">{websiteUrl}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isAr ? "الهدف:" : "Goal:"}</span>
                      <span className="font-semibold text-slate-200">{primaryGoal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{isAr ? "الواتساب:" : "WhatsApp:"}</span>
                      <bdi dir="ltr" className="font-semibold text-growth-300 font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>{whatsapp}</bdi>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                    <a
                      href={leadFollowupWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-growth-600 hover:bg-growth-500 shadow-glow-emerald transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>{isAr ? "متابعة الطلب فوراً عبر واتساب" : "Chat Directly on WhatsApp"}</span>
                    </a>

                    <Link
                      href="/"
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      {isAr ? "الرجوع للصفحة الرئيسية" : "Back to Home"}
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-8">
                    <h2 className="text-2xl font-black text-white font-heading">
                      {isAr ? "بيانات فحص موقعك" : "Your Domain & Project Details"}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1">
                      {isAr
                        ? "أدخل بيانات موقعك وسأقوم بإجراء فحص يدوي دقيق وإرسال التقرير إليك."
                        : "Enter your domain metrics for an expert manual inspection and actionable roadmap."}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Website URL */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {isAr ? "رابط الموقع أو المتجر الإلكتروني" : "Website or Store URL"}{" "}
                        <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Globe className={`w-4 h-4 text-slate-500 absolute ${isAr ? "right-3.5" : "left-3.5"} top-3.5`} />
                        <input
                          type="url"
                          required
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          placeholder="https://yourstore.com"
                          className={`w-full ${
                            isAr ? "pr-10 pl-4" : "pl-10 pr-4"
                          } py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all dir-ltr`}
                        />
                      </div>
                    </div>

                    {/* Name & Email Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-2">
                          {isAr ? "الاسم الكريم" : "Your Full Name"}{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <User className={`w-4 h-4 text-slate-500 absolute ${isAr ? "right-3.5" : "left-3.5"} top-3.5`} />
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder={isAr ? "مثال: سلطان الحربي" : "e.g. Sultan Al-Harbi"}
                            className={`w-full ${
                              isAr ? "pr-10 pl-4" : "pl-10 pr-4"
                            } py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all`}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-2">
                          {isAr ? "البريد الإلكتروني للعمل" : "Business Email"}{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <div className="relative">
                          <Mail className={`w-4 h-4 text-slate-500 absolute ${isAr ? "right-3.5" : "left-3.5"} top-3.5`} />
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="name@company.com"
                            className={`w-full ${
                              isAr ? "pr-10 pl-4" : "pl-10 pr-4"
                            } py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all dir-ltr`}
                          />
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {isAr ? "رقم الواتساب (مع مفتاح الدولة)" : "WhatsApp / Phone (with country code)"}{" "}
                        <span className="text-rose-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className={`w-4 h-4 text-slate-500 absolute ${isAr ? "right-3.5" : "left-3.5"} top-3.5`} />
                        <input
                          type="tel"
                          required
                          value={whatsapp}
                          onChange={(e) => setWhatsapp(e.target.value)}
                          placeholder="+966 50 123 4567 / +20 100 564 7312"
                          className={`w-full ${
                            isAr ? "pr-10 pl-4" : "pl-10 pr-4"
                          } py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all dir-ltr`}
                        />
                      </div>
                    </div>

                    {/* Platform Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {isAr ? "منصة المتجر أو الموقع" : "Store or CMS Platform"}
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {platforms.map((p) => {
                          const label = isAr ? p.labelAr : p.labelEn;
                          const selected = platform === label;
                          return (
                            <button
                              type="button"
                              key={p.id}
                              onClick={() => setPlatform(label)}
                              className={`py-2 px-3 rounded-xl text-xs font-semibold text-center border transition-all ${
                                selected
                                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-sm"
                                  : "bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:bg-slate-800"
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Traffic & Primary Goal */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-2">
                          {isAr ? "متوسط الزيارات الشهرية" : "Monthly Organic Traffic"}
                        </label>
                        <select
                          value={monthlyTraffic}
                          onChange={(e) => setMonthlyTraffic(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                        >
                          {trafficRanges.map((range) => (
                            <option key={range} value={range} className="bg-slate-900 text-white">
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-2">
                          {isAr ? "الهدف الأساسي من الفحص" : "Primary SEO Goal"}
                        </label>
                        <select
                          value={primaryGoal}
                          onChange={(e) => setPrimaryGoal(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-all"
                        >
                          {t.modal.goals.map((goal) => (
                            <option key={goal} value={goal} className="bg-slate-900 text-white">
                              {goal}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message / Challenges */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-2">
                        {isAr
                          ? "ملاحظات إضافية أو تحديات تواجهها حالياً (اختياري)"
                          : "Project Scope & Specific Challenges (Optional)"}
                      </label>
                      <textarea
                        rows={3}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={
                          isAr
                            ? "أخبرني عن أهدافك، أو المشاكل التقنية في Search Console، أو أي ملاحظات تريد التركيز عليها..."
                            : "Tell me about your current revenue goals, indexing issues, or specific targets..."
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-all"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-brand-600 via-cyan-600 to-growth-600 hover:opacity-95 shadow-glow hover:shadow-glow-emerald transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {submitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{isAr ? "جاري تسجيل طلب الفحص..." : "Submitting Your Request..."}</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-5 h-5 text-cyan-200 animate-pulse" />
                            <span>{isAr ? "تأكيد طلب الفحص المجاني والاستشارة" : "Confirm Free Audit & Growth Session"}</span>
                            {isAr ? (
                              <ArrowLeft className="w-4 h-4 text-white" />
                            ) : (
                              <ArrowRight className="w-4 h-4 text-white" />
                            )}
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 pt-2 text-xs text-slate-400 text-center">
                      <ShieldCheck className="w-4 h-4 text-growth-400 shrink-0" />
                      <span>
                        {isAr
                          ? "بياناتك في سرية تامة 100% • الرد يتم مباشرة من أسامة الجندي خلال أقل من 24 ساعة"
                          : "100% Confidential • Osama Elgendy responds personally within 24 hours"}
                      </span>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar / Value Props (5 Cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            {/* What's Included Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0b1226] to-[#080d1c] border border-white/10 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {isAr ? "ما الذي يشمله هذا الفحص المجاني؟" : "What This Free Audit Delivers"}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {isAr ? "تقرير احترافي يكشف الفرص الضائعة" : "Actionable Intelligence for Rapid Growth"}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Search className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {isAr ? "فحص السيو التقني (Deep Technical Crawl)" : "Deep Technical Crawl"}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {isAr
                        ? "كشف أخطاء 404، وسلاسل التوجيهات 301، ومشاكل ملفات robots.txt و sitemap وفهرسة الصفحات."
                        : "Detect crawl errors, redirect loops, sitemap discrepancies, and indexation blockers."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <TrendingUp className="w-4 h-4 text-growth-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {isAr ? "تحليل فجوات الكلمات المفتاحية للمنافسين" : "Competitor Keyword Gaps"}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {isAr
                        ? "تحديد الكلمات التجارية الأكثر ربحية في السعودية والخليج التي يتصدر فيها منافسوك وتفقدها أنت."
                        : "Uncover high-intent transactional queries your regional competitors dominate."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Bot className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {isAr ? "جاهزية محركات الذكاء الاصطناعي (GEO / AEO)" : "AI Search Engine Optimization (GEO)"}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {isAr
                        ? "تقييم قابلية ترشيح موقعك ومنتجاتك داخل إجابات ChatGPT، Perplexity، و Google AI Overviews."
                        : "Benchmark how effectively your brand citations appear in generative AI responses."}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/5">
                  <Layers className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-white">
                      {isAr ? "سرعة المتجر ومؤشرات Core Web Vitals" : "Core Web Vitals & Mobile Speed"}
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {isAr
                        ? "قياس دقيق لسرعة LCP و INP و CLS على الهواتف الذكية لمنع تسرب العملاء وزيادة التحويلات."
                        : "Evaluate real mobile performance to eliminate cart abandonment and lift conversions."}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Fast Track Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-growth-950/40 via-[#0a1820] to-[#08121a] border border-growth-500/30 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-bold text-growth-400 mb-2">
                <Clock className="w-4 h-4" />
                <span>{isAr ? "تفضل التواصل الفوري السريع؟" : "Prefer Immediate Direct Chat?"}</span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">
                {isAr ? "تواصل مباشرة مع أسامة على واتساب" : "Chat Directly with Osama"}
              </h3>
              <p className="text-xs text-slate-300/80 mb-5 leading-relaxed">
                {isAr
                  ? "إذا كان لديك متجر قائم وتريد مناقشة أرقام المبيعات أو مشكلة عاجلة في أرشفة جوجل، يمكنك مراسلتي فوراً."
                  : "Have an urgent drop in Search Console or want to discuss store scaling immediately? Send a direct message."}
              </p>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl font-bold text-sm text-white bg-growth-600 hover:bg-growth-500 shadow-glow-emerald transition-all"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span className="inline-flex items-center gap-1.5">
                  <span>{isAr ? "فتح محادثة واتساب" : "Open WhatsApp"}</span>
                  <bdi dir="ltr" className="font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>(+20 100 564 7312)</bdi>
                </span>
              </a>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl font-black text-cyan-400 font-heading">120+</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{isAr ? "موقع تم تحسينه" : "Sites Optimized"}</p>
              </div>
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl font-black text-growth-400 font-heading">50+</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{isAr ? "متجر سلة وزد وشوبيفاي" : "E-Com Stores"}</p>
              </div>
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl font-black text-purple-400 font-heading">6+</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{isAr ? "سنوات خبرة قيادية" : "Years Experience"}</p>
              </div>
              <div className="rounded-2xl p-4 bg-white/[0.02] border border-white/5 text-center">
                <span className="text-2xl font-black text-amber-400 font-heading">100%</span>
                <p className="text-[11px] text-slate-400 mt-0.5">{isAr ? "استراتيجيات وايت هات" : "White-hat SEO"}</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-white/5 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Osama Elgendy. {t.footer.legal}</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition-colors">
              {isAr ? "الصفحة الرئيسية" : "Home"}
            </Link>
            <span>•</span>
            <a
              href="mailto:osamasalehelgendy@gmail.com"
              className="hover:text-cyan-400 transition-colors"
            >
              osamasalehelgendy@gmail.com
            </a>
            <span>•</span>
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-growth-400 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
              <bdi dir="ltr" className="font-sans" style={{ direction: "ltr", unicodeBidi: "isolate" }}>+20 100 564 7312</bdi>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#060913] flex items-center justify-center text-cyan-400">
          <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
