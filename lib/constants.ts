import { Cloud, Database, Brain, Shield, Code, Users, Building2, Sparkles, Store, Server } from "lucide-react";

export const services = {
  cloudInfrastructure: [
    {
      id: "cloud-1",
      title: "Compute, Storage & Networking",
      description: "AWS EC2, Azure Virtual Machines, Google Compute Engine - Scalable infrastructure solutions",
      icon: Server,
      technologies: ["AWS EC2", "Azure VMs", "Google Compute Engine"]
    },
    {
      id: "cloud-2",
      title: "Serverless Computing",
      description: "AWS Lambda, Azure Functions - Event-driven, scalable compute services",
      icon: Cloud,
      technologies: ["AWS Lambda", "Azure Functions", "Google Cloud Functions"]
    },
    {
      id: "cloud-3",
      title: "Container Orchestration",
      description: "Kubernetes services: GKE, AKS, EKS - Container management at scale",
      icon: Code,
      technologies: ["Google GKE", "Azure AKS", "AWS EKS"]
    },
    {
      id: "cloud-4",
      title: "Cloud Databases & Data Lakes",
      description: "Snowflake, Google BigQuery, Azure Synapse - Modern data platforms",
      icon: Database,
      technologies: ["Snowflake", "BigQuery", "Azure Synapse"]
    }
  ],

  saasApplications: [
    {
      id: "saas-1",
      title: "CRM Solutions",
      description: "Salesforce, Microsoft Dynamics 365, HubSpot - Customer relationship management",
      icon: Users,
      technologies: ["Salesforce", "Dynamics 365", "HubSpot"]
    },
    {
      id: "saas-2",
      title: "ERP & Finance",
      description: "SAP S/4HANA Cloud, Oracle NetSuite, Workday - Enterprise resource planning",
      icon: Building2,
      technologies: ["SAP S/4HANA", "NetSuite", "Workday"]
    },
    {
      id: "saas-3",
      title: "Collaboration & Productivity",
      description: "Microsoft 365, Google Workspace, Slack - Team collaboration tools",
      icon: Users,
      technologies: ["Microsoft 365", "Google Workspace", "Slack"]
    },
    {
      id: "saas-4",
      title: "HR & Payroll",
      description: "Workday, ADP, BambooHR - Human resources management",
      icon: Users,
      technologies: ["Workday", "ADP", "BambooHR"]
    },
    {
      id: "saas-5",
      title: "Marketing Automation",
      description: "Adobe Experience Cloud, Marketo - Marketing campaign management",
      icon: Sparkles,
      technologies: ["Adobe Experience Cloud", "Marketo"]
    }
  ],

  aiMachineLearning: [
    {
      id: "ai-1",
      title: "Pre-trained AI Models & APIs",
      description: "OpenAI via Azure, Google Vertex AI, AWS SageMaker - Ready-to-use AI solutions",
      icon: Brain,
      badge: "Popular",
      technologies: ["OpenAI", "Vertex AI", "SageMaker"]
    },
    {
      id: "ai-2",
      title: "MLOps Platforms",
      description: "Databricks, SageMaker, Vertex AI - Machine learning operations",
      icon: Brain,
      technologies: ["Databricks", "SageMaker", "Vertex AI"]
    },
    {
      id: "ai-3",
      title: "Generative AI Platforms",
      description: "Anthropic Claude on AWS Bedrock, Google Gemini, Microsoft Copilot Studio",
      icon: Sparkles,
      badge: "2025 Hot",
      technologies: ["Claude", "Gemini", "Copilot Studio"]
    },
    {
      id: "ai-4",
      title: "Computer Vision & Speech",
      description: "Computer vision, speech-to-text, translation services - Multimodal AI",
      icon: Brain,
      technologies: ["Azure Cognitive", "Google Cloud AI", "AWS Rekognition"]
    }
  ],

  dataAnalytics: [
    {
      id: "data-1",
      title: "Data Warehouses & Lakes",
      description: "Snowflake, Databricks Lakehouse, BigQuery - Modern data storage",
      icon: Database,
      technologies: ["Snowflake", "Databricks", "BigQuery"]
    },
    {
      id: "data-2",
      title: "Business Intelligence & Visualization",
      description: "Tableau, Power BI, Looker - Data visualization and reporting",
      icon: Database,
      technologies: ["Tableau", "Power BI", "Looker"]
    },
    {
      id: "data-3",
      title: "Real-time Streaming",
      description: "Kafka as a service, AWS Kinesis, Azure Event Hubs - Stream processing",
      icon: Database,
      technologies: ["Kafka", "Kinesis", "Event Hubs"]
    },
    {
      id: "data-4",
      title: "Data Governance & Catalog",
      description: "Alation, Collibra, Informatica - Data management and compliance",
      icon: Shield,
      technologies: ["Alation", "Collibra", "Informatica"]
    }
  ],

  cybersecurity: [
    {
      id: "security-1",
      title: "Endpoint Protection & XDR",
      description: "CrowdStrike Falcon, Microsoft Defender, Palo Alto Cortex - Advanced threat protection",
      icon: Shield,
      badge: "Critical",
      technologies: ["CrowdStrike", "Defender", "Cortex"]
    },
    {
      id: "security-2",
      title: "Identity & Access Management",
      description: "Okta, Ping Identity, Microsoft Entra ID - Secure identity solutions",
      icon: Shield,
      technologies: ["Okta", "Ping Identity", "Entra ID"]
    },
    {
      id: "security-3",
      title: "Cloud Security Posture Management",
      description: "Wiz, Prisma Cloud, Orca - Cloud security monitoring",
      icon: Shield,
      technologies: ["Wiz", "Prisma Cloud", "Orca"]
    },
    {
      id: "security-4",
      title: "Managed Detection and Response (MDR)",
      description: "24/7 threat detection and response services - Proactive security",
      icon: Shield,
      technologies: ["MDR Services", "SIEM", "SOC"]
    }
  ],

  developerTools: [
    {
      id: "dev-1",
      title: "Low-code/No-code Platforms",
      description: "Microsoft Power Platform, OutSystems, Mendix - Rapid application development",
      icon: Code,
      technologies: ["Power Platform", "OutSystems", "Mendix"]
    },
    {
      id: "dev-2",
      title: "CI/CD & DevOps",
      description: "GitHub Actions, GitLab, CircleCI - Continuous integration and deployment",
      icon: Code,
      technologies: ["GitHub Actions", "GitLab", "CircleCI"]
    },
    {
      id: "dev-3",
      title: "API Management",
      description: "Apigee, MuleSoft, Kong - API gateway and management",
      icon: Code,
      technologies: ["Apigee", "MuleSoft", "Kong"]
    }
  ],

  managedServices: [
    {
      id: "managed-1",
      title: "Consulting & Digital Transformation",
      description: "Strategic advisory services for digital transformation initiatives",
      icon: Users,
      technologies: ["Strategy", "Consulting", "Advisory"]
    },
    {
      id: "managed-2",
      title: "Implementation & Integration",
      description: "End-to-end implementation and system integration services",
      icon: Code,
      technologies: ["Integration", "Migration", "Deployment"]
    },
    {
      id: "managed-3",
      title: "Managed Services & Outsourcing",
      description: "Complete IT infrastructure management and outsourcing solutions",
      icon: Server,
      technologies: ["24/7 Support", "Infrastructure Management", "Outsourcing"]
    },
    {
      id: "managed-4",
      title: "Customer Success & Support",
      description: "Premium 24/7 support with dedicated technical account managers",
      icon: Users,
      technologies: ["Support", "Training", "Account Management"]
    },
    {
      id: "managed-5",
      title: "Training & Certification",
      description: "Comprehensive training programs and certification courses",
      icon: Users,
      technologies: ["Training", "Certification", "Workshops"]
    }
  ],

  industrySolutions: [
    {
      id: "industry-1",
      title: "Healthcare Solutions",
      description: "Epic on Google Cloud, Cerner/Oracle Health, Microsoft Cloud for Healthcare",
      icon: Building2,
      technologies: ["Epic", "Cerner", "MS Healthcare Cloud"]
    },
    {
      id: "industry-2",
      title: "Financial Services",
      description: "Temenos, nCino, Thought Machine - Banking and finance platforms",
      icon: Building2,
      technologies: ["Temenos", "nCino", "Thought Machine"]
    },
    {
      id: "industry-3",
      title: "Retail Solutions",
      description: "Adobe Commerce + Experience Cloud, Salesforce Commerce Cloud",
      icon: Store,
      technologies: ["Adobe Commerce", "Salesforce Commerce"]
    },
    {
      id: "industry-4",
      title: "Manufacturing & IoT",
      description: "PTC ThingWorx, Siemens MindSphere - Industrial IoT platforms",
      icon: Building2,
      technologies: ["ThingWorx", "MindSphere", "IoT"]
    }
  ],

  emergingServices: [
    {
      id: "emerging-1",
      title: "Quantum Computing as a Service",
      description: "AWS Braket, Azure Quantum, Google Quantum AI - Next-gen computing",
      icon: Sparkles,
      badge: "2025 Hot",
      technologies: ["AWS Braket", "Azure Quantum", "Google Quantum"]
    },
    {
      id: "emerging-2",
      title: "Sovereign Cloud Offerings",
      description: "For governments and regulated industries - Compliant cloud solutions",
      icon: Shield,
      technologies: ["Sovereign Cloud", "Compliance", "Government"]
    },
    {
      id: "emerging-3",
      title: "Sustainability & Carbon Tracking",
      description: "Environmental impact monitoring and carbon footprint reduction platforms",
      icon: Sparkles,
      badge: "ESG",
      technologies: ["Carbon Tracking", "Sustainability", "ESG"]
    },
    {
      id: "emerging-4",
      title: "Edge Computing Platforms",
      description: "Distributed computing at the edge for low-latency applications",
      icon: Server,
      technologies: ["Edge Computing", "5G", "IoT Edge"]
    },
    {
      id: "emerging-5",
      title: "Blockchain/Distributed Ledger",
      description: "Blockchain and DLT services for secure, transparent transactions",
      icon: Database,
      technologies: ["Blockchain", "DLT", "Smart Contracts"]
    }
  ],

  marketplace: [
    {
      id: "marketplace-1",
      title: "App Marketplaces",
      description: "Salesforce AppExchange, Microsoft AppSource, AWS Marketplace",
      icon: Store,
      technologies: ["AppExchange", "AppSource", "AWS Marketplace"]
    },
    {
      id: "marketplace-2",
      title: "Partner Consulting Networks",
      description: "Extensive network of certified consulting partners worldwide",
      icon: Users,
      technologies: ["Partner Network", "Consulting", "Integration"]
    },
    {
      id: "marketplace-3",
      title: "Startup Accelerator Programs",
      description: "Incubator and accelerator programs for innovative startups",
      icon: Sparkles,
      technologies: ["Accelerator", "Incubator", "Startup"]
    },
    {
      id: "marketplace-4",
      title: "ISV Enablement Programs",
      description: "Independent software vendor enablement and partnership programs",
      icon: Code,
      technologies: ["ISV", "Partnership", "Enablement"]
    }
  ]
};

export const allServices = [
  { id: "cloud", title: "Cloud Platforms & Infrastructure", description: "Scalable IaaS/PaaS solutions", icon: Cloud, href: "/services/cloud-infrastructure" },
  { id: "saas", title: "SaaS Applications", description: "Enterprise software solutions", icon: Building2, href: "/services/saas-applications" },
  { id: "ai", title: "AI & Machine Learning", description: "Advanced AI and ML services", icon: Brain, href: "/services/ai-ml" },
  { id: "data", title: "Data & Analytics", description: "Modern data platforms", icon: Database, href: "/services/data-analytics" },
  { id: "security", title: "Cybersecurity Services", description: "Comprehensive security solutions", icon: Shield, href: "/services/cybersecurity" },
  { id: "dev", title: "Developer Tools", description: "Modern development platforms", icon: Code, href: "/services/developer-tools" },
  { id: "managed", title: "Professional & Managed Services", description: "Expert consulting and support", icon: Users, href: "/services/managed-services" },
  { id: "industry", title: "Industry Solutions", description: "Vertical-specific platforms", icon: Building2, href: "/services/industry-solutions" },
  { id: "emerging", title: "Emerging Services", description: "Next-gen technologies", icon: Sparkles, href: "/services/emerging-services" },
  { id: "marketplace", title: "Ecosystem & Marketplace", description: "Partner networks and marketplaces", icon: Store, href: "/services/marketplace" }
];

export const companyInfo = {
  name: "ROOT 360",
  tagline: "Empowering Digital Transformation",
  description: "Leading software solutions provider specializing in cloud infrastructure, AI/ML, cybersecurity, and enterprise digital transformation.",
  email: "contact@root360.com",
  phone: "+94 (70) 388-6215",
  address: "Colombo, Sri Lanka",
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechCorp Inc.",
    company: "TechCorp",
    content: "ROOT 360 transformed our cloud infrastructure. Their expertise in AWS and Azure helped us reduce costs by 40% while improving performance.",
    rating: 5,
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "VP of Engineering, DataFlow Systems",
    company: "DataFlow",
    content: "The AI/ML solutions provided by ROOT 360 have been game-changing for our business. Their team is knowledgeable and responsive.",
    rating: 5,
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "CISO, SecureBank",
    company: "SecureBank",
    content: "Outstanding cybersecurity services. ROOT 360's MDR and cloud security solutions give us peace of mind in today's threat landscape.",
    rating: 5,
    image: "/testimonials/emily.jpg"
  }
];