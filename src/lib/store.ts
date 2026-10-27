"use client";

import {
  SiteConfig,
  MetricItem,
  ServiceItem,
  CaseStudyItem,
  AuditLeadItem,
  ExperienceItem,
  CertificateItem,
  AuditStep,
  TestimonialItem,
} from "./types";

export const initialSiteConfig: SiteConfig = {
  name: "Osama Elgendy",
  role: "SEO Team Leader & E-Commerce SEO Specialist",
  location: "Egypt & Middle East (Saudi Arabia / UAE Focus)",
  email: "osamasalehelgendy@gmail.com",
  whatsapp: "+201005647312",
  phone: "+20 100 564 7312",
  yearsOfExperience: "6+ Years",
  metaTitle: "Osama Elgendy | SEO Team Leader & E-Commerce SEO Specialist",
  metaDescription:
    "Senior SEO Team Leader & E-Commerce SEO Specialist with 6+ years scaling organic traffic and revenue for 120+ sites and 50+ stores in Saudi Arabia & Middle East. Proven Technical SEO, GEO/AEO, and GSC growth.",
  ogImage: "/images/og-banner.jpg",
  gscVerificationId: "google-site-verification-osama-elgendy-verified",
  gtmId: "GTM-OSAMASEO",
  heroHeadline: "SEO Team Leader & E-Commerce SEO Specialist",
  heroSubheadline:
    "Engineering high-revenue organic search engines for 120+ businesses across Saudi Arabia and the Middle East through Deep Technical SEO, High-Converting E-Commerce Strategy, and Next-Gen AI Search (GEO / AEO).",
  aboutText:
    "SEO Expert and E-commerce SEO Expert with 6+ Years of Experience specializing in SEO Audits, Digital Marketing, On-Page and Off-Page Optimization, Link-Building Campaigns, and Keyword Optimization. Strong understanding of SEO Algorithms, Ranking Factors, and advanced SEO Strategies focused on improving organic traffic, search visibility, and conversion rates.\n\nExperienced in managing and optimizing E-commerce Stores across Saudi Arabia and the Middle East, with hands-on expertise in WordPress SEO, Magento SEO, Shopify, Salla, and Zid platforms. Skilled in enhancing store performance, user experience, and technical SEO to increase online sales and business growth.\n\nGrowing expertise in AI-powered search technologies including AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization). Passionate about leveraging AI and modern SEO techniques to adapt to the future of search engines.\n\nExperienced in using SEO and Analytics tools including GA4, Google Search Console, GTM, Looker Studio, Semrush, Ahrefs, Moz, and SE Ranking.",
};

export const initialMetrics: MetricItem[] = [
  {
    id: "m-1",
    label: "Sites Optimized",
    labelAr: "موقع إلكتروني تم تحسينه",
    value: 120,
    suffix: "+",
    description: "Multi-industry corporate & content websites",
    descriptionAr: "مواقع شركات وتجارة في مختلف القطاعات",
    trend: "+35% YoY",
  },
  {
    id: "m-2",
    label: "E-Commerce Stores",
    labelAr: "متجر إلكتروني ناجح",
    value: 50,
    suffix: "+",
    description: "Salla, Zid, Shopify, WooCommerce & Magento",
    descriptionAr: "سلة، زد، شوبيفاي، ووكومرس، وماجنتو",
    trend: "+148% sales",
  },
  {
    id: "m-3",
    label: "Top 1-3 Keywords",
    labelAr: "كلمة مفتاحية بالصفحة الأولى",
    value: 400,
    suffix: "+",
    description: "Dominating high-commercial buyer intent queries",
    descriptionAr: "تصدر نتائج البحث لكلمات ذات نية شراء عالية",
    trend: "Top SERP",
  },
  {
    id: "m-4",
    label: "Quality Backlinks",
    labelAr: "باكلينك قوي وعالي الجودة",
    value: 50000,
    prefix: "",
    suffix: "+",
    description: "White-hat contextual high-authority link profiles",
    descriptionAr: "بناء روابط سياقية آمنة ذات موثوقية عالية",
    trend: "100% White-hat",
  },
  {
    id: "m-5",
    label: "Leads Generated",
    labelAr: "عميل محتمل تم توليده",
    value: 600000,
    suffix: "+",
    description: "Direct B2B and consumer qualified inquiries",
    descriptionAr: "توليد عملاء محتملين مؤهلين للشراء والتعاقد",
    trend: "High conversion",
  },
  {
    id: "m-6",
    label: "Direct Store Sales",
    labelAr: "طلب بيع مباشر للمتاجر",
    value: 5000,
    suffix: "+",
    description: "Tracked organic purchase conversions",
    descriptionAr: "مبيعات موثقة من حركة البحث المجاني",
    trend: "Direct ROI",
  },
  {
    id: "m-7",
    label: "Satisfied Clients",
    labelAr: "عميل راضٍ ومستمر",
    value: 200,
    suffix: "+",
    description: "Long-term regional partnerships and retention",
    descriptionAr: "شراكات طويلة الأمد في مصر والخليج العربي",
    trend: "98% Retention",
  },
];

export const initialServices: ServiceItem[] = [
  {
    id: "s-1",
    title: "Deep Technical SEO & Core Web Vitals",
    titleAr: "سيو تقني متقدم وتحسين سرعة الموقع",
    iconName: "Wrench",
    category: "Technical",
    summary:
      "Eliminating crawl bottlenecks, JavaScript rendering traps, indexing anomalies, and rendering lightning-fast Core Web Vitals (LCP, INP, CLS) that Google rewards with top positions.",
    summaryAr:
      "حل مشاكل الزحف والفهرسة، كود جافاسكريبت، وهيكلة الروابط وسرعة مؤشرات الويب الأساسية Core Web Vitals.",
    deliverables: [
      "Full Screaming Frog & Log File architecture audit",
      "Core Web Vitals optimization (LCP < 2.0s, INP < 150ms)",
      "Robots.txt, XML Sitemaps, and Canonical tags governance",
      "Advanced Schema.org (Product, Organization, FAQ, Article)",
      "HTTP status code & 301 redirection chain eradication",
    ],
    deliverablesAr: [
      "فحص شامل لملفات السجل و Screaming Frog",
      "تحسين مؤشرات الويب الأساسية LCP, INP, CLS",
      "إدارة ملفات Robots.txt و Sitemaps و Canonical",
      "بناء بيانات Schema.org المنظمة للمنتجات والخدمات",
      "معالجة أخطاء التوجيه وروابط 404",
    ],
    metricsHighlight: "Avg. +65% Crawl Efficiency",
  },
  {
    id: "s-2",
    title: "E-Commerce Search Engine Optimization",
    titleAr: "سيو المتاجر الإلكترونية (سلة، زد، شوبيفاي، ماجنتو)",
    iconName: "ShoppingBag",
    category: "E-commerce",
    summary:
      "Tailored strategies for Salla, Zid, Shopify, WooCommerce, and Magento stores across Saudi Arabia & GCC to capture high-value transaction searches and surge checkout revenue.",
    summaryAr:
      "استراتيجيات متخصصة لمتاجر سلة، زد، شوبيفاي، ووكومرس وماجنتو في السعودية والخليج لتصدر كلمات الشراء وزيادة المبيعات.",
    deliverables: [
      "Category SILO structure & faceted navigation optimization",
      "Automated product schema with price & stock availability",
      "Internal linking architecture designed for high-margin SKUs",
      "Combating duplicate content in filtering and pagination",
      "Cart abandonment & product page conversion rate synergy",
    ],
    deliverablesAr: [
      "هيكلة أقسام المتجر وفلاتر المنتجات بحرفية",
      "سكيما المنتجات بالأسعار وحالة التوفر في المخزون",
      "بناء روابط داخلية ذكية لترقية المنتجات الأعلى ربحية",
      "حل مشكلات المحتوى المكرر والتنقل بين الصفحات",
      "تحسين معدل التحويل بمحاذاة تجربة الشراء",
    ],
    metricsHighlight: "50+ Stores Scaled in KSA & UAE",
  },
  {
    id: "s-3",
    title: "AI Search, GEO & Answer Engine Optimization (AEO)",
    titleAr: "سيو الذكاء الاصطناعي ومحركات الإجابة (GEO / AEO)",
    iconName: "Cpu",
    category: "AI & Next-Gen",
    summary:
      "Positioning your brand as the cited authority in Google AI Overviews, ChatGPT Search, Perplexity, and Microsoft Copilot with structured entities and authoritative information gain.",
    summaryAr:
      "تصدر ملخصات الذكاء الاصطناعي في Google Gemini AI Overviews ومحركات ChatGPT و Perplexity و Copilot.",
    deliverables: [
      "Entity-based semantic SEO & Knowledge Graph alignment",
      "Optimizing for direct quotation in generative engines",
      "Zero-click search capture through concise answer blocks",
      "Information Gain optimization over commodity AI content",
      "Brand citation building across AI reference training datasets",
    ],
    deliverablesAr: [
      "ضبط الكيانات الدلالية Semantic Entities و Knowledge Graph",
      "تهيئة المحتوى للاقتباس المباشر في إجابات الذكاء الاصطناعي",
      "تصدر نتائج الإجابة الفورية Zero-Click Searches",
      "صناعة محتوى ذو قيمة مضافة حقيقية تفوق النصوص المولدة",
      "بناء إشارات الثقة والمراجع للعلامة التجارية",
    ],
    metricsHighlight: "Cited in Top AI Overviews",
  },
  {
    id: "s-4",
    title: "On-Page SEO & Content Intent Mapping",
    titleAr: "تحسين السيو الداخلي وهندسة المحتوى",
    iconName: "FileText",
    category: "Growth",
    summary:
      "Transforming site content into high-ranking topical clusters that satisfy user intent completely, boost dwell time, and maximize organic CTR with irresistible SERP headlines.",
    summaryAr:
      "تحويل محتوى الموقع إلى مجموعات موضوعية متماسكة تحقق نية البحث للمستخدم وترفع النقر والظهور.",
    deliverables: [
      "Topical authority clusters & parent/child page mapping",
      "High-CTR Title Tag & Meta Description copywriting",
      "Semantic keyword insertion (LSI, synonyms, intent tags)",
      "Image SEO: WebP conversion, descriptive alt text, responsive sizes",
      "Content decay revitalizations for lost ranking keywords",
    ],
    deliverablesAr: [
      "بناء المجموعات الموضوعية Topical Authority",
      "كتابة عناوين وأوصاف بحث جذابة ترفع معدل النقر CTR",
      "توزيع الكلمات المفتاحية ومرادفاتها بدون حشو",
      "تحسين الصور ونصوص Alt وأحجامها",
      "تحديث المحتوى القديم واستعادة الصدارة للكلمات المتراجعة",
    ],
    metricsHighlight: "400+ First Page Rankings",
  },
  {
    id: "s-5",
    title: "Off-Page SEO & Authoritative Link Building",
    titleAr: "السيو الخارجي وبناء الروابط الخلفية القوية",
    iconName: "Link2",
    category: "Growth",
    summary:
      "Building clean, editorial, contextual backlinks from high DA/DR industry publications that safely boost domain trust without triggering Google algorithmic spam penalties.",
    summaryAr:
      "بناء باكلينك سياقي قوي من مواقع موثوقة وعالية السلطة ترفع قوة الدومين بأمان تام ومطابقة إرشادات جوجل.",
    deliverables: [
      "Competitor backlink gap analysis & acquisition targets",
      "Digital PR & niche editorial guest mentions",
      "Anchor text diversification to maintain 100% natural ratios",
      "Toxic backlink audits & Google Disavow management",
      "Brand mention reclamation and unlinked citation building",
    ],
    deliverablesAr: [
      "تحليل فجوات الروابط للمنافسين واقتناص أفضل الفرص",
      "علاقات رقمية ومقالات ضيف في كبرى المواقع المتخصصة",
      "تنويع نصوص الروابط Anchor Text بمعدلات طبيعية",
      "فحص الروابط الضارة والتنصل منها عبر Disavow Tool",
      "تحويل الإشارات غير المربوطة لروابط نشطة",
    ],
    metricsHighlight: "50,000+ Backlinks Safely Built",
  },
  {
    id: "s-6",
    title: "High-Ticket Lead Generation & B2B SEO",
    titleAr: "سيو توليد العملاء والشركات B2B",
    iconName: "Target",
    category: "Growth",
    summary:
      "Targeting laser-focused commercial intent keywords that put your services in front of ready-to-buy corporate clients, driving over 600,000 qualified inquiries.",
    summaryAr:
      "استهداف الكلمات ذات القيمة التجارية العالية لجذب صناع القرار وتوليد عملاء محتملين جاهزين للتعاقد.",
    deliverables: [
      "Commercial & transactional keyword mapping for decision makers",
      "Landing page conversion optimization & friction reduction",
      "Call-to-Action placement & lead magnet integration",
      "Lead attribution tracking via Google Analytics 4 & GTM",
      "Sales funnel alignment with marketing qualified leads (MQLs)",
    ],
    deliverablesAr: [
      "تحديد الكلمات المستهدفة لصناع القرار والشركات",
      "تحسين صفحات الهبوط ومعدلات تحويل الزوار لعملاء",
      "توزيع أزرار الحجز والتواصل ومسارات الإقناع",
      "تتبع دقيق لمصادر العملاء عبر GA4 و Tag Manager",
      "تأهيل العملاء المحتملين قبل وصولهم لفريق المبيعات",
    ],
    metricsHighlight: "600K+ Qualified Inquiries",
  },
  {
    id: "s-7",
    title: "Local SEO & Multi-Location Dominance",
    titleAr: "السيو المحلي وتصدر خرائط جوجل",
    iconName: "MapPin",
    category: "Technical",
    summary:
      "Securing the Google Local 3-Pack and dominating local searches across cities in Saudi Arabia, Egypt, and the Gulf with complete NAP consistency and verified citations.",
    summaryAr:
      "تصدر الحزمة الثلاثية الأولى في خرائط جوجل والبحث المحلي في مدن المملكة ومصر والخليج.",
    deliverables: [
      "Google Business Profile (GBP) complete optimization",
      "Local citation building across regional directories",
      "Review generation strategy & sentiment management",
      "Localized landing pages for multi-branch enterprises",
      "Bing Places and Apple Maps listing synchronization",
    ],
    deliverablesAr: [
      "تحسين وتوثيق الحساب في Google Business Profile",
      "تسجيل النشاط في الأدلة المحلية المعتمدة والخرائط",
      "استراتيجية جمع التقييمات الإيجابية والرد عليها",
      "صفحات هبوط محلية مخصصة لكل فرع ومدينة",
      "مزامنة الحسابات مع Bing Places و Apple Maps",
    ],
    metricsHighlight: "Top 3 Local Pack Positions",
  },
];

export const initialCaseStudies: CaseStudyItem[] = [
  {
    id: "cs-1",
    clientName: "Leading E-Commerce Retailer (KSA)",
    clientNameAr: "متجر تجزئة كبرى في السعودية",
    industry: "E-Commerce & Retail",
    industryAr: "تجارة إلكترونية وتجزئة",
    platform: "Salla (سلة)",
    period: "28 Days Performance",
    clicks: "40.9K",
    impressions: "450.6K",
    ctr: "11.0%",
    avgPosition: "7.2",
    growth: "+185% Impressions",
    summary:
      "Overhauled faceted navigation, product schema, and high-commercial Arabic keywords. Generated 40,900 organic clicks and 450,600 impressions with an impressive 11% CTR within 28 days.",
    summaryAr:
      "إعادة هيكلة فلاتر المنتجات، سكيما المتجر، واستهداف الكلمات التجارية. حصد المتجر 40.9 ألف نقرة و450.6 ألف ظهور بنسبة نقر 11% في 28 يوماً فقط.",
    chartData: [
      { date: "Day 1", clicks: 820, impressions: 8400 },
      { date: "Day 5", clicks: 1100, impressions: 11500 },
      { date: "Day 10", clicks: 1350, impressions: 14200 },
      { date: "Day 15", clicks: 1540, impressions: 16800 },
      { date: "Day 20", clicks: 1720, impressions: 18900 },
      { date: "Day 25", clicks: 1890, impressions: 21400 },
      { date: "Day 28", clicks: 2050, impressions: 23100 },
    ],
  },
  {
    id: "cs-2",
    clientName: "Fashion & Lifestyle Store",
    clientNameAr: "متجر أزياء ومنتجات عناية",
    industry: "Fashion & Beauty",
    industryAr: "أزياء ومستحضرات تجميل",
    platform: "Zid (زد)",
    period: "Last 3 Months vs Previous 3 Months",
    clicks: "10.3K (vs 4.15K)",
    impressions: "144K (vs 47.8K)",
    ctr: "7.1%",
    avgPosition: "6.9",
    growth: "+148% Click Surge",
    summary:
      "Massive quarterly scaling through collection page SILOing and Core Web Vitals speed optimization, elevating organic clicks from 4.15K to 10.3K (+148%) and impressions from 47.8K to 144K (+201%).",
    summaryAr:
      "قفزة نوعية ربع سنوية بمضاعفة النقرات من 4.15 ألف إلى 10.3 ألف (+148%) والظهور من 47.8 ألف إلى 144 ألف (+201%) عبر تنظيم الفئات وتحسين السرعة.",
    chartData: [
      { date: "Month 1", clicks: 2400, impressions: 32000 },
      { date: "Month 2", clicks: 3600, impressions: 49000 },
      { date: "Month 3", clicks: 4300, impressions: 63000 },
    ],
  },
  {
    id: "cs-3",
    clientName: "B2B Medical & Industrial Supplier",
    clientNameAr: "مورد معدات طبية وصناعية كبرى",
    industry: "B2B Medical & Equipment",
    industryAr: "معدات طبية وصناعية B2B",
    platform: "WordPress / WooCommerce",
    period: "Last 6 Months vs Previous 6 Months",
    clicks: "13.9K (from 0 baseline)",
    impressions: "184K (from 0 baseline)",
    ctr: "7.6%",
    avgPosition: "7.2",
    growth: "Infinite (+100% New Traffic)",
    summary:
      "Took brand new corporate web entity from zero search presence to 13.9K qualified organic clicks and 184K impressions with zero paid ad budget, generating hundreds of high-ticket B2B RFQs.",
    summaryAr:
      "بناء وجود رقمي من الصفر التام لموقع جديد كلياً ليحقق 13.9 ألف نقرة مجانية و184 ألف ظهور، وتوليد مئات طلبات عروض الأسعار للشركات.",
    chartData: [
      { date: "Month 1", clicks: 320, impressions: 5200 },
      { date: "Month 2", clicks: 1200, impressions: 16500 },
      { date: "Month 3", clicks: 2400, impressions: 31000 },
      { date: "Month 4", clicks: 2900, impressions: 39000 },
      { date: "Month 5", clicks: 3300, impressions: 44000 },
      { date: "Month 6", clicks: 3780, impressions: 48300 },
    ],
  },
  {
    id: "cs-4",
    clientName: "Electronics & Tech E-Commerce",
    clientNameAr: "متجر إلكترونيات وأجهزة ذكية",
    industry: "Consumer Electronics",
    industryAr: "أجهزة ذكية وإلكترونيات",
    platform: "Shopify",
    period: "3 Months Growth",
    clicks: "8.91K",
    impressions: "249K",
    ctr: "3.6%",
    avgPosition: "10.3",
    growth: "+112% Organic Inflow",
    summary:
      "Resolved severe canonical loops, duplicate SKU variants, and created rich product comparison guides. Drove 8.91K high-intent electronics buyers and 249K impressions.",
    summaryAr:
      "حل مشاكل الروابط الكانونيكال وموديلات المنتجات المتكررة، وبناء مقارنات شراء قوية جذبت 8.91 ألف مشتري جاهز و249 ألف ظهور.",
    chartData: [
      { date: "Week 1", clicks: 450, impressions: 12000 },
      { date: "Week 4", clicks: 1500, impressions: 45000 },
      { date: "Week 8", clicks: 2900, impressions: 84000 },
      { date: "Week 12", clicks: 4060, impressions: 108000 },
    ],
  },
];

export const initialLeads: AuditLeadItem[] = [
  {
    id: "lead-1",
    websiteUrl: "https://saudi-trend-store.com",
    name: "Abdulrahman Al-Qahtani",
    email: "abdulrahman@saudi-trend-store.com",
    whatsapp: "+966501234567",
    monthlyTraffic: "10K - 50K",
    primaryGoal: "Recover from recent drop & scale revenue on Salla",
    message: "Our organic traffic dropped after recent theme update. We need an urgent technical audit.",
    createdAt: "2026-10-26T14:32:00Z",
    status: "new",
  },
  {
    id: "lead-2",
    websiteUrl: "https://riyadh-realestate-group.sa",
    name: "Eng. Fahad Al-Otaibi",
    email: "fahad@riyadh-realestate.sa",
    whatsapp: "+966559876543",
    monthlyTraffic: "50K - 200K",
    primaryGoal: "Dominate Local SEO & Google Business Profile across Riyadh",
    message: "Looking for SEO Team Leader to consult on our commercial developments portals.",
    createdAt: "2026-10-25T09:15:00Z",
    status: "review",
  },
  {
    id: "lead-3",
    websiteUrl: "https://cairo-logistics-hub.com",
    name: "Tarek Mansour",
    email: "tarek.mansour@logistics-hub.com",
    whatsapp: "+201123456789",
    monthlyTraffic: "5K - 10K",
    primaryGoal: "Lead Generation SEO for corporate freight contracts",
    message: "We need B2B high-intent keywords ranking in Egypt and Saudi Arabia.",
    createdAt: "2026-10-23T18:40:00Z",
    status: "contacted",
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Be Clever Agency",
    role: "SEO Team Leader",
    roleAr: "قائد فريق السيو (SEO Team Leader)",
    period: "2025 - Present",
    location: "Middle East / Remote",
    description:
      "Spearheading the SEO department, directing advanced technical audits, international search architecture, AI GEO strategies, and mentoring a high-performing team of SEO specialists.",
    descriptionAr:
      "قيادة قسم السيو وإدارة الاستراتيجيات التقنية وتحسين محركات الذكاء الاصطناعي وإدارة فريق عمل من متخصصي السيو.",
    highlights: [
      "Overseeing enterprise organic campaigns across Saudi Arabia, UAE, and Egypt",
      "Pioneering Generative Engine Optimization (GEO) protocols for client brands",
      "Implemented automated crawl anomaly detection and KPI reporting pipelines",
    ],
  },
  {
    id: "exp-2",
    company: "3Hand (ثري هاند)",
    role: "SEO Team Leader",
    roleAr: "قائد فريق السيو (SEO Team Leader)",
    period: "2024 - 2025",
    location: "Egypt & Saudi Arabia",
    description:
      "Led multifaceted SEO projects for major clients, streamlined cross-functional workflows between development and content teams, and engineered scalable link-building frameworks.",
    descriptionAr:
      "إدارة مشاريع السيو لعملاء كبار وتنسيق العمل مع فرق البرمجة والمحتوى وبناء استراتيجيات روابط خلفية مستدامة.",
    highlights: [
      "Supervised technical execution for 30+ regional e-commerce stores on Salla & Zid",
      "Achieved average 120% organic traffic growth within 6-month cycles",
      "Established standard operating procedures for penalty prevention and Core Web Vitals",
    ],
  },
  {
    id: "exp-3",
    company: "Castle Digital",
    role: "E-Commerce SEO Specialist",
    roleAr: "أخصائي سيو المتاجر الإلكترونية",
    period: "2023 - 2024",
    location: "Saudi Arabia Market Focus",
    description:
      "Specialized in optimizing high-volume e-commerce catalogs on Shopify, Magento, and WooCommerce, boosting checkout conversions and outranking international competitors.",
    descriptionAr:
      "تخصص دقيق في تحسين متاجر شوبيفاي، ماجنتو، وووكومرس ومضاعفة المبيعات والتفوق على المنافسين في السوق السعودي.",
    highlights: [
      "Optimized 25,000+ product SKUs with dynamic structured data and intent-matching filters",
      "Drove over 5,000 verified direct organic sales",
      "Integrated Google Merchant Center and organic shopping graph feeds",
    ],
  },
  {
    id: "exp-4",
    company: "Free Techno",
    role: "SEO Specialist",
    roleAr: "أخصائي سيو وتحسين محركات البحث",
    period: "2019 - 2023",
    location: "Egypt",
    description:
      "Executed end-to-end on-page and off-page optimization, keyword clustering, link outreach, and Google Search Console performance diagnostics for over 50 clients.",
    descriptionAr:
      "تنفيذ استراتيجيات السيو الداخلي والخارجي وبناء الروابط وفحص أداء Search Console لأكثر من 50 عميلاً.",
    highlights: [
      "Ranked over 250 competitive keywords on the first page of Google SERP",
      "Conducted 80+ comprehensive site health and technical audits",
      "Earned multiple Semrush Academy technical certifications",
    ],
  },
];

export const certificates: CertificateItem[] = [
  {
    id: "cert-1",
    title: "Technical SEO Course with Bastian Grimm",
    issuer: "Semrush Academy",
    instructor: "Bastian Grimm (Global Technical SEO Expert)",
    recipient: "Osama Elgendy",
    verificationBadge: "Semrush Verified Credential",
    skillsCovered: [
      "Server Log Analysis",
      "Crawl Budget Optimization",
      "JavaScript Rendering & Hydration",
      "International Hreflang Architecture",
    ],
  },
  {
    id: "cert-2",
    title: "Backlink Management Course with Greg Gifford",
    issuer: "Semrush Academy",
    instructor: "Greg Gifford (Link Building Authority)",
    recipient: "Osama Elgendy",
    verificationBadge: "Semrush Verified Credential",
    skillsCovered: [
      "High-Authority Link Acquisition",
      "Anchor Text Ratio Balancing",
      "Competitor Link Intersect Analysis",
      "Disavow & Penalty Recovery",
    ],
  },
  {
    id: "cert-3",
    title: "Mastering YouTube Search Trends & Video SEO",
    issuer: "Semrush Academy",
    instructor: "Semrush Video Search Guild",
    recipient: "Osama Elgendy",
    verificationBadge: "Semrush Verified Credential",
    skillsCovered: [
      "Video Schema Markup",
      "YouTube Algorithm Optimization",
      "Video SERP Carousels",
      "Audience Retention Triggers",
    ],
  },
  {
    id: "cert-4",
    title: "Advanced SEO Professional Certification",
    issuer: "Google & Digital Search Academy",
    recipient: "Osama Saleh Hussine (Osama Elgendy)",
    verificationBadge: "Industry Certified Specialist",
    skillsCovered: [
      "Search Engine Algorithms & Core Updates",
      "Google Search Console Diagnostics",
      "Google Analytics 4 E-Commerce Events",
      "Conversion Rate Optimization (CRO)",
    ],
  },
];

export const auditRoadmapSteps: AuditStep[] = [
  {
    step: 1,
    title: "Deep Technical SEO Audit",
    titleAr: "الفحص التقني العميق للموقع",
    description:
      "Scrutinizing indexing health, canonical integrity, Core Web Vitals, mobile UX, robots directives, and rendering bottlenecks.",
    descriptionAr:
      "فحص شامل للفهرسة، الروابط الكانونيكال، مؤشرات الويب، وسرعة استجابة السيرفر وملاءمة الجوال.",
    keyCheckpoints: ["Crawl Depth & Orphan Pages", "HTTP Status 3xx/4xx/5xx", "Schema Validation", "CWV LCP/INP/CLS"],
  },
  {
    step: 2,
    title: "Competitor SERP Intersect",
    titleAr: "تحليل المنافسين وفجوة الصدارة",
    description:
      "Dissecting top-ranking rivals in Saudi Arabia and the Middle East to expose their keyword gaps, backlink profiles, and content strategies.",
    descriptionAr:
      "تحليل المنافسين المتصدرين في السوق لاكتشاف فجوات الكلمات المفتاحية ومصادر الروابط وأسرار تفوقهم.",
    keyCheckpoints: ["Keyword Gap Analysis", "Backlink Intersect", "Content Length & Structure", "SERP Feature Domination"],
  },
  {
    step: 3,
    title: "Commercial Keyword Research",
    titleAr: "بحث الكلمات المفتاحية ذات نية الشراء",
    description:
      "Uncovering high-converting, low-competition commercial keywords that ready-to-buy customers use in Google and AI searches.",
    descriptionAr:
      "استخراج الكلمات البحثية المربحة وذات النية الشرائية العالية التي تحقق أعلى عائد استثمار.",
    keyCheckpoints: ["Search Intent Mapping (Buyer/Info)", "Search Volume & Trend Velocity", "Long-tail Opportunities", "AI Question Patterns"],
  },
  {
    step: 4,
    title: "On-Page SEO & Content Strategy",
    titleAr: "تحسين السيو الداخلي وهندسة المحتوى",
    description:
      "Optimizing title tags, meta descriptions, header structures (H1-H6), internal linking SILOs, and keyword density for topical authority.",
    descriptionAr:
      "ضبط العناوين الرئيسية والفرعية، وسرعة الصفحة، وشبكة الروابط الداخلية وترتيب الأولويات.",
    keyCheckpoints: ["Click-Through Rate (CTR) Hooks", "SILO Internal Link Architecture", "Topical Depth & Entities", "Image Alt & Modern Formats"],
  },
  {
    step: 5,
    title: "Off-Page & Authority Link Audit",
    titleAr: "فحص الروابط الخلفية وموثوقية الدومين",
    description:
      "Evaluating toxic links, anchor text over-optimization risk, domain authority velocity, and constructing safe, scalable outreach campaigns.",
    descriptionAr:
      "تنظيف الروابط الضارة، فحص نسب الكلمات المربوطة، وتصميم خطة بناء روابط قوية وآمنة.",
    keyCheckpoints: ["Spam Score & Toxic Link Isolation", "Anchor Text Distribution", "Domain Rating & Trust Flow", "Digital PR Outreach Targets"],
  },
  {
    step: 6,
    title: "User Experience (UX) & Conversion Rate",
    titleAr: "تجربة المستخدم وتحسين معدل التحويل (CRO)",
    description:
      "Ensuring landing pages retain visitors, deliver lightning speed, minimize bounce rate, and lead seamlessly to purchases or inquiries.",
    descriptionAr:
      "ضمان بقاء الزائر بالموقع وتسهيل عملية الطلب أو التواصل دون عوائق برمجية أو تصميمية.",
    keyCheckpoints: ["Mobile Navigation Simplicity", "Checkout Friction Elimination", "CTA Visibility & Clarity", "Dwell Time & Scroll Depth"],
  },
  {
    step: 7,
    title: "SEO Security, Spam & Penalty Audit",
    titleAr: "الأمان، مكافحة السبام وتجنب العقوبات",
    description:
      "Verifying SSL certificates, preventing negative SEO injection attacks, cloaking detection, and safeguarding against Google Core Algorithm penalties.",
    descriptionAr:
      "التأكد من شهادات الأمان وحماية الموقع من هجمات السيو السلبي والامتثال لتحديثات جوجل الدورية.",
    keyCheckpoints: ["SSL / HTTPS Integrity", "Malicious Injected URLs Check", "Algorithmic Drop Assessment", "Google Manual Actions Status"],
  },
  {
    step: 8,
    title: "Action Plan & ROI Reporting Roadmap",
    titleAr: "خطة العمل التنفيذية وجدول النتائج",
    description:
      "Delivering an actionable, prioritized roadmap broken down into immediate quick wins, medium-term sprints, and long-term search supremacy.",
    descriptionAr:
      "تسليم جدول عمل تنفيذي زمني مقسم لأولويات فورية ونتائج سريعة وخطة صدارة مستمرة.",
    keyCheckpoints: ["Quick-Win Prioritization Matrix", "Developer-Ready Task Specs", "Looker Studio Custom Dashboard", "Monthly Revenue KPI Milestones"],
  },
];

export const clientLogos = [
  { name: "Anabin", domain: "anabin.com", category: "Education & Compliance" },
  { name: "Wakpeq (واكب)", domain: "wakpeq.com", category: "Fintech & Services" },
  { name: "Smart Creative Agency", domain: "smart-agency.com", category: "Digital Marketing" },
  { name: "Moray", domain: "moray.sa", category: "Retail & E-commerce" },
  { name: "Emailat (إيميلات)", domain: "emailat.com", category: "Enterprise Communication" },
  { name: "Castle", domain: "castle.sa", category: "Real Estate & Commercial" },
  { name: "Tiba Wood", domain: "tibawood.com", category: "Manufacturing & Interior" },
  { name: "3Hand (ثري هاند)", domain: "3hand.net", category: "Software & Technology" },
  { name: "Sol Design", domain: "soldesign.ae", category: "Architecture & Luxury" },
];

export const platformList = [
  { name: "WordPress", category: "CMS", level: "Expert", badge: "WP SEO" },
  { name: "WooCommerce", category: "E-Commerce", level: "Expert", badge: "WooCommerce" },
  { name: "Salla (سلة)", category: "E-Commerce (KSA)", level: "Specialist", badge: "Salla Partner" },
  { name: "Zid (زد)", category: "E-Commerce (KSA)", level: "Specialist", badge: "Zid Growth" },
  { name: "Shopify", category: "E-Commerce", level: "Advanced", badge: "Shopify SEO" },
  { name: "Magento (Adobe)", category: "Enterprise E-Com", level: "Advanced", badge: "Magento 2" },
  { name: "PHP / Laravel", category: "Custom Apps", level: "Technical", badge: "Frameworks" },
  { name: "Elementor", category: "Page Builder", level: "Master", badge: "Design SEO" },
];

export const toolsList = [
  { name: "Google Search Console", type: "Core SERP", usage: "Daily Performance Diagnostics" },
  { name: "Google Analytics 4 (GA4)", type: "Analytics", usage: "E-Commerce Purchase Tracking" },
  { name: "Google Tag Manager (GTM)", type: "Tracking", usage: "Advanced Event Architecture" },
  { name: "Semrush", type: "Intelligence", usage: "Competitive Gap & Keyword Tracking" },
  { name: "Ahrefs", type: "Backlinks", usage: "Deep Link Intersect & Anchor Health" },
  { name: "Screaming Frog", type: "Technical Spider", usage: "Full Site Architecture Crawling" },
  { name: "Bing Webmaster Tools", type: "Search Engine", usage: "Bing & Copilot AI Indexing" },
  { name: "Looker Studio", type: "Reporting", usage: "Real-time Executive Dashboards" },
  { name: "GTmetrix & PageSpeed", type: "Speed", usage: "Core Web Vitals Engineering" },
  { name: "Rank Math & Yoast", type: "CMS Plugins", usage: "Structured Data Implementation" },
  { name: "Moz & Majestic", type: "Authority", usage: "Trust Flow & Spam Scoring" },
  { name: "Ubersuggest", type: "Research", usage: "Regional Keyword Brainstorming" },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    clientName: "Sultan Al-Harbi",
    company: "Saudi Trend E-Commerce (KSA)",
    role: "Managing Director",
    quote:
      "Osama turned our Salla store into an organic sales machine. In less than 3 months, our organic clicks jumped by over 180% and our reliance on paid ads dropped by half. A true SEO leader with unmatched technical depth.",
    quoteAr:
      "أسامة نقل متجرنا على سلة لمستوى آخر تماماً. خلال أقل من 3 أشهر تضاعفت مبيعاتنا المجانية بنسبة 180% وانخفض اعتمادنا على الإعلانات الممولة للنصف. قائد حقيقي وخبير متمكن.",
    rating: 5,
    results: "+180% Organic Revenue",
  },
  {
    id: "t-2",
    clientName: "Eng. Yasser Mostafa",
    company: "Tiba Wood Manufacturing",
    role: "CEO & Founder",
    quote:
      "Working with Osama was the best marketing decision we made. We went from being invisible on Google to holding position #1 for all high-value manufacturing and export terms. The leads coming in are massive contracts.",
    quoteAr:
      "التعاون مع أسامة الجندي كان أفضل قرار تسويقي اتخذناه. تحولنا من عدم الظهور على جوجل إلى احتلال المركز الأول لكبرى كلمات التصنيع والتصدير، وتلقينا عقود توريد ضخمة.",
    rating: 5,
    results: "#1 Google Rankings for 35+ Terms",
  },
  {
    id: "t-3",
    clientName: "Mona Al-Khatib",
    company: "Sol Design & Architecture (UAE)",
    role: "Head of Marketing",
    quote:
      "Osama's mastery of both Google Search Console and the new AI Search engines (GEO/AEO) gave us an unfair advantage in Dubai and Riyadh. Highly communicative, strategic, and hyper-focused on real business ROI.",
    quoteAr:
      "خبرة أسامة في Search Console وسيو محركات الذكاء الاصطناعي منحتنا تفوقاً كبيراً على المنافسين في الرياض ودبي. شخصية محترفة ومتابعة دورية وتركيز دقيق على عائد الاستثمار.",
    rating: 5,
    results: "+320% Qualified Inquiries",
  },
];

// Helper functions for persistent Client Storage (Simulated Database / CRM)
const STORAGE_KEYS = {
  SITE_CONFIG: "osama_seo_config_v1",
  METRICS: "osama_seo_metrics_v1",
  SERVICES: "osama_seo_services_v1",
  CASE_STUDIES: "osama_seo_cases_v1",
  LEADS: "osama_seo_leads_v1",
  AUTH: "osama_admin_auth_session",
  VISITS: "osama_seo_visit_count",
};

export const getSiteConfig = (): SiteConfig => {
  if (typeof window === "undefined") return initialSiteConfig;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SITE_CONFIG);
    return saved ? JSON.parse(saved) : initialSiteConfig;
  } catch {
    return initialSiteConfig;
  }
};

export const saveSiteConfig = (config: SiteConfig): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.SITE_CONFIG, JSON.stringify(config));
};

export const getMetrics = (): MetricItem[] => {
  if (typeof window === "undefined") return initialMetrics;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.METRICS);
    return saved ? JSON.parse(saved) : initialMetrics;
  } catch {
    return initialMetrics;
  }
};

export const saveMetrics = (metrics: MetricItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.METRICS, JSON.stringify(metrics));
};

export const getServices = (): ServiceItem[] => {
  if (typeof window === "undefined") return initialServices;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
    return saved ? JSON.parse(saved) : initialServices;
  } catch {
    return initialServices;
  }
};

export const saveServices = (services: ServiceItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
};

export const getCaseStudies = (): CaseStudyItem[] => {
  if (typeof window === "undefined") return initialCaseStudies;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CASE_STUDIES);
    return saved ? JSON.parse(saved) : initialCaseStudies;
  } catch {
    return initialCaseStudies;
  }
};

export const saveCaseStudies = (cases: CaseStudyItem[]): void => {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEYS.CASE_STUDIES, JSON.stringify(cases));
};

export const getLeads = (): AuditLeadItem[] => {
  if (typeof window === "undefined") return initialLeads;
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
    return saved ? JSON.parse(saved) : initialLeads;
  } catch {
    return initialLeads;
  }
};

export const addLead = (lead: Omit<AuditLeadItem, "id" | "createdAt" | "status">): AuditLeadItem => {
  const currentLeads = getLeads();
  const newLead: AuditLeadItem = {
    ...lead,
    id: "lead-" + Date.now(),
    createdAt: new Date().toISOString(),
    status: "new",
  };
  const updated = [newLead, ...currentLeads];
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  }
  return newLead;
};

export const updateLeadStatus = (id: string, status: "new" | "review" | "contacted"): void => {
  const currentLeads = getLeads();
  const updated = currentLeads.map((l) => (l.id === id ? { ...l, status } : l));
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  }
};

export const deleteLead = (id: string): void => {
  const currentLeads = getLeads();
  const updated = currentLeads.filter((l) => l.id !== id);
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(updated));
  }
};

// Analytics visits counter
export const recordVisit = (): number => {
  if (typeof window === "undefined") return 1420;
  try {
    const current = parseInt(localStorage.getItem(STORAGE_KEYS.VISITS) || "1420", 10);
    const updated = current + 1;
    localStorage.setItem(STORAGE_KEYS.VISITS, updated.toString());
    return updated;
  } catch {
    return 1420;
  }
};

export const getVisitCount = (): number => {
  if (typeof window === "undefined") return 1420;
  try {
    return parseInt(localStorage.getItem(STORAGE_KEYS.VISITS) || "1420", 10);
  } catch {
    return 1420;
  }
};

// Authentication state for hidden admin panel
export const checkIsAuthenticated = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === "authenticated_osama_secure";
  } catch {
    return false;
  }
};

export const setAdminSession = (isValid: boolean): void => {
  if (typeof window === "undefined") return;
  if (isValid) {
    localStorage.setItem(STORAGE_KEYS.AUTH, "authenticated_osama_secure");
  } else {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  }
};
