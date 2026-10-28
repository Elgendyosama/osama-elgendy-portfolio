export interface SiteConfig {
  name: string;
  role: string;
  location: string;
  email: string;
  whatsapp: string;
  phone: string;
  yearsOfExperience: string;
  metaTitle: string;
  metaDescription: string;
  metaTitleAr?: string;
  metaDescriptionAr?: string;
  ogImage: string;
  gscVerificationId: string;
  gtmId: string;
  heroHeadline: string;
  heroHeadlineAr?: string;
  heroSubheadline: string;
  heroSubheadlineAr?: string;
  aboutText: string;
  aboutTextAr?: string;
}

export interface MetricItem {
  id: string;
  label: string;
  labelAr: string;
  value: number;
  suffix: string;
  prefix?: string;
  description: string;
  descriptionAr: string;
  trend: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleAr: string;
  iconName: string;
  category: "Technical" | "E-commerce" | "Growth" | "AI & Next-Gen";
  summary: string;
  summaryAr: string;
  deliverables: string[];
  deliverablesAr: string[];
  metricsHighlight: string;
}

export interface CaseStudyItem {
  id: string;
  clientName: string;
  clientNameAr: string;
  industry: string;
  industryAr: string;
  platform: string;
  period: string;
  clicks: string;
  impressions: string;
  ctr: string;
  avgPosition: string;
  growth: string;
  summary: string;
  summaryAr: string;
  chartData: { date: string; clicks: number; impressions: number }[];
}

export interface AuditLeadItem {
  id: string;
  websiteUrl: string;
  name: string;
  email: string;
  whatsapp: string;
  monthlyTraffic: string;
  primaryGoal: string;
  message?: string;
  createdAt: string;
  status: "new" | "review" | "contacted";
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  roleAr: string;
  period: string;
  location: string;
  description: string;
  descriptionAr: string;
  highlights: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  instructor?: string;
  recipient: string;
  verificationBadge: string;
  skillsCovered: string[];
}

export interface AuditStep {
  step: number;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  keyCheckpoints: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  company: string;
  role: string;
  quote: string;
  quoteAr: string;
  rating: number;
  results: string;
}

export interface ArticleFAQItem {
  id?: string;
  question: string;
  answer: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or HTML
  featuredImage: string;
  category: "Technical SEO" | "E-commerce SEO" | "AI SEO / GEO" | "Case Studies" | string;
  tags: string[];
  publishedAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
  isPublished: boolean;
  readTime?: string;
  views?: number;
  lang?: "en" | "ar";
  alternateSlug?: string;
  // Dedicated SEO Fields
  metaTitle: string;
  metaDescription: string;
  canonicalUrl?: string;
  focusKeyword: string;
  faqItems: ArticleFAQItem[];
}

