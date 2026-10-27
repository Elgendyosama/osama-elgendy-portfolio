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
  ogImage: string;
  gscVerificationId: string;
  gtmId: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutText: string;
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
