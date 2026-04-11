import { Badge } from "./ui/badge";
import { Award, ShieldCheck, CheckCircle2 } from "lucide-react";

const partners = [
  { name: "AWS", tier: "Advanced Partner", logo: "AWS" },
  { name: "Microsoft", tier: "Gold Partner", logo: "Microsoft" },
  { name: "GCP", tier: "Premier Partner", logo: "GCP" },
  { name: "Salesforce", tier: "Consulting Partner", logo: "Salesforce" },
  { name: "Oracle", tier: "Gold Partner", logo: "Oracle" },
  { name: "SAP", tier: "Silver Partner", logo: "SAP" },
];

const certifications = [
  { name: "ISO 27001", description: "Information Security Management" },
  { name: "SOC 2 Type II", description: "Security & Compliance" },
  { name: "GDPR Compliant", description: "Data Protection" },
  { name: "HIPAA Compliant", description: "Healthcare Data Security" },
];

const expertise = [
  { category: "Cloud & Infrastructure", items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"] },
  { category: "Development", items: ["React", "Next.js", "Node.js", "Python", ".NET", "Java"] },
  { category: "Data & AI", items: ["TensorFlow", "PyTorch", "Snowflake", "Databricks", "Power BI", "Tableau"] },
  { category: "Enterprise", items: ["Salesforce", "SAP", "Oracle", "ServiceNow", "Workday", "Microsoft 365"] },
];

export default function Partners() {
  return (
    <section id="partners" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4" variant="outline">
            Partners & Certifications
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            Trusted Technology Partnerships
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            We maintain strategic partnerships with leading technology providers to deliver 
            best-in-class solutions for our clients.
          </p>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-2xl font-bold text-zinc-700 dark:text-zinc-300 mb-2">
                  {partner.logo}
                </div>
                <span className="text-xs text-green-600 dark:text-green-400 font-medium text-center">
                  {partner.tier}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center justify-center gap-2">
              <ShieldCheck className="h-6 w-6 text-green-500" />
              Security & Compliance Certifications
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-linear-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20"
              >
                <Award className="h-8 w-8 text-green-500 shrink-0" />
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-white text-sm">
                    {cert.name}
                  </div>
                  <div className="text-xs text-zinc-500">
                    {cert.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Expertise */}
        <div className="bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
              Technology Expertise
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
              Our team holds certifications across 100+ technologies
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {expertise.map((category, index) => (
              <div key={index}>
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-3 flex items-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, itemIndex) => (
                    <Badge key={itemIndex} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
