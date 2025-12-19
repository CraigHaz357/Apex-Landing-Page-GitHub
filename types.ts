
export interface SeoConfig {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

export interface AppearanceConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: 'Inter' | 'Serif' | 'Sans';
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  headerSticky: boolean;
}

export interface SectionContent {
  id: string;
  type: string;
  title: string;
  subtitle?: string;
  body?: string;
  image?: string;
  enabled: boolean;
  order: number;
  ctaText?: string;
  ctaLink?: string;
  items?: Array<{
    id: string;
    title: string;
    description: string;
    icon?: string;
  }>;
}

export interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  status: 'new' | 'viewed' | 'archived';
}

export interface SiteData {
  companyName: string;
  seo: SeoConfig;
  appearance: AppearanceConfig;
  sections: SectionContent[];
  contactInfo: {
    address: string;
    email: string;
    phone: string;
    social: {
      linkedin: string;
      facebook: string;
      twitter: string;
    };
  };
}

export type AppState = {
  data: SiteData;
  leads: ContactLead[];
};
