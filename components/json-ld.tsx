import { siteConfig } from "@/lib/seo-config";

interface OrganizationJsonLdProps {
  type?: "Organization" | "Corporation" | "LocalBusiness";
}

export function OrganizationJsonLd({ type = "Organization" }: OrganizationJsonLdProps = {}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon-512x512.png`,
    image: siteConfig.ogImage,
    foundingDate: siteConfig.business.foundingDate,
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: siteConfig.business.numberOfEmployees,
    },
    areaServed: siteConfig.business.areaServed,
    priceRange: siteConfig.business.priceRange,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.github,
      siteConfig.social.facebook,
    ].filter(Boolean),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon-512x512.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface ServiceJsonLdProps {
  services: {
    name: string;
    description: string;
  }[];
}

export function ServiceJsonLd({ services }: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ROOT 360 Services",
    description: "Enterprise software solutions and digital transformation services",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface BreadcrumbJsonLdProps {
  items: {
    name: string;
    url: string;
  }[];
}

export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

interface FAQJsonLdProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export function FAQJsonLd({ faqs }: FAQJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Combined JSON-LD for the main page
export function MainPageJsonLd() {
  const services = [
    { name: "Cloud Infrastructure", description: "AWS, Azure, Google Cloud - Scalable cloud solutions" },
    { name: "AI & Machine Learning", description: "OpenAI, Vertex AI, SageMaker - AI-powered solutions" },
    { name: "Cybersecurity", description: "Enterprise security, endpoint protection, identity management" },
    { name: "Data Analytics", description: "Snowflake, Databricks, Power BI - Business intelligence" },
    { name: "Digital Transformation", description: "End-to-end digital transformation services" },
    { name: "SaaS Applications", description: "CRM, ERP, collaboration tools implementation" },
  ];

  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <ServiceJsonLd services={services} />
    </>
  );
}
