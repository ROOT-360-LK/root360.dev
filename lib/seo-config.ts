export const SITE_URL = "https://root360.dev";

export const siteConfig = {
  name: "ROOT 360™",
  shortName: "ROOT 360",
  description: "ROOT 360 delivers cutting-edge software solutions including cloud infrastructure, AI/ML, cybersecurity, and digital transformation services for modern businesses worldwide. contact us by email: info@root360.dev | phone: +94 (70) 388-6215 | whatsapp: +94 (76) 664-3492",
  url: SITE_URL,
  ogImage: `${SITE_URL}/logo.png`,
  keywords: [
    "software development",
    "digital transformation",
    "cloud solutions",
    "AI solutions",
    "machine learning",
    "cybersecurity",
    "enterprise software",
    "cloud infrastructure",
    "SaaS applications",
    "data analytics",
    "DevOps",
    "IT consulting",
    "AWS",
    "Azure",
    "Google Cloud",
    "Kubernetes",
    "serverless",
    "business intelligence",
  ],
  authors: [
    {
      name: "ROOT 360",
      url: SITE_URL,
    },
  ],
  creator: "ROOT 360",
  publisher: "ROOT 360",
  category: "Technology",
  locale: "en_US",
//   themeColor: "#000000",
//   backgroundColor: "#ffffff",
  
  // Social media links (update with actual links)
  social: {
    facebook: "https://facebook.com/root360lk",
    linkedin: "https://linkedin.com/company/root360",
    github: "https://github.com/root360lk",
  },
  
  contact: {
    email: "info@root360.io",
    phone: "+94 70 388 6215",
    address: {
      street: "Kalubila",
      city: "Colombo",
      state: "Western Province",
      zip: "10350",
      country: "Sri Lanka",
    },
  },
  
  // Business information for JSON-LD
  business: {
    type: "SoftwareApplication" as const,
    foundingDate: "2020",
    numberOfEmployees: "50-200",
    areaServed: "Worldwide",
    priceRange: "$$$",
  },
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: "ROOT 360™ | Enterprise Software Solutions & Digital Transformation",
    description: "360° Complete Software Solutions for Modern Businesses. Cloud infrastructure, AI/ML, cybersecurity, and digital transformation services worldwide.",
  },
  services: {
    title: "Our Services | ROOT 360™",
    description: "Comprehensive software services including cloud infrastructure, SaaS applications, AI/ML solutions, data analytics, and cybersecurity.",
  },
  about: {
    title: "About Us | ROOT 360™",
    description: "Learn about ROOT 360's mission to deliver cutting-edge enterprise software solutions and digital transformation services.",
  },
  contact: {
    title: "Contact Us | ROOT 360™",
    description: "Get in touch with ROOT 360 for enterprise software solutions, digital transformation, and IT consulting services.",
  },
};
