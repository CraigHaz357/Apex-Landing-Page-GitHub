
import { SiteData } from './types';

export const INITIAL_SITE_DATA: SiteData = {
  companyName: "Apex Note Capital",
  seo: {
    title: "Apex Note Capital | Real Estate & Financial Note Buying Services",
    description: "Sell your mortgage notes for top dollar. Apex Note Capital offers fast, professional, and transparent liquidity solutions for private notes.",
    keywords: "mortgage notes, sell notes, private mortgage, real estate notes, cash for notes",
    ogImage: "https://picsum.photos/1200/630"
  },
  appearance: {
    primaryColor: "#0f172a", // Slate 900
    secondaryColor: "#1e293b", // Slate 800
    accentColor: "#94a3b8", // Slate 400
    fontFamily: "Sans",
    borderRadius: "md",
    headerSticky: true
  },
  contactInfo: {
    address: "",
    email: "ApexNoteCapital@mail.com",
    phone: "800-369-0250",
    social: {
      linkedin: "",
      facebook: "",
      twitter: ""
    }
  },
  sections: [
    {
      id: "hero",
      type: "hero",
      title: "Liquidity for Your Private Real Estate Notes",
      subtitle: "Get a fair market offer for your mortgage notes, deeds of trust, and land contracts. Fast closing, professional service, and zero hidden fees.",
      ctaText: "Get My Free Quote",
      ctaLink: "/contact",
      image: "https://picsum.photos/1600/900?grayscale",
      enabled: true,
      order: 0
    },
    {
      id: "value-prop",
      type: "features",
      title: "Why Partner With Apex Note Capital?",
      subtitle: "Experience and integrity in every transaction.",
      enabled: true,
      order: 1,
      items: [
        { id: "1", title: "Maximized Value", description: "Our sophisticated pricing models ensure you get the highest possible market value for your notes.", icon: "CheckCircle" },
        { id: "2", title: "Fast Funding", description: "We streamline the due diligence process to get cash in your hands in as little as 15 business days.", icon: "Clock" },
        { id: "3", title: "Flexible Terms", description: "Whether you want to sell a whole note or just a portion, we customize solutions to fit your needs.", icon: "Shield" }
      ]
    },
    {
      id: "services",
      type: "grid",
      title: "Our Note Buying Specialties",
      subtitle: "We specialize in a wide range of financial instruments across the United States.",
      enabled: true,
      order: 2,
      items: [
        { id: "s1", title: "Residential Mortgage Notes", description: "Selling notes secured by single-family homes, condos, and multi-family properties." },
        { id: "s2", title: "Commercial Real Estate Notes", description: "We buy notes secured by office buildings, retail spaces, and industrial complexes." },
        { id: "s3", title: "Partial Note Purchases", description: "Keep your long-term income while getting the immediate cash you need today." },
        { id: "s4", title: "Business Notes", description: "Selling notes generated from the sale of a private business entity." }
      ]
    },
    {
      id: "how-it-works",
      type: "steps",
      title: "Our Simple 4-Step Process",
      subtitle: "From initial quote to funding, we make it effortless.",
      enabled: true,
      order: 3,
      items: [
        { id: "st1", title: "Submit Information", description: "Provide basic details about your note via our secure online form or a quick phone call." },
        { id: "st2", title: "Professional Appraisal", description: "Our underwriters review the documentation and provide a formal, no-obligation offer within 48 hours." },
        { id: "st3", title: "Due Diligence", description: "We handle the title work, appraisals, and legal reviews at our expense." },
        { id: "st4", title: "Closing & Funding", description: "Funds are wired directly to your account upon final document execution." }
      ]
    }
  ]
};
