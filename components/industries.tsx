import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  Building2, 
  HeartPulse, 
  Landmark, 
  Factory, 
  ShoppingCart, 
  Plane, 
  GraduationCap, 
  Zap,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "./ui/button";

const industries = [
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description: "Transform patient care with HIPAA-compliant solutions, EHR integrations, and AI-powered diagnostics.",
    solutions: ["EHR/EMR Integration", "Telemedicine Platforms", "Clinical Analytics", "Patient Portals"],
    color: "from-red-500 to-rose-600",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Secure, compliant fintech solutions for banking, insurance, and investment management.",
    solutions: ["Core Banking Systems", "Fraud Detection", "Regulatory Compliance", "Digital Payments"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industry 4.0 solutions for smart factories, supply chain optimization, and predictive maintenance.",
    solutions: ["IoT & Sensors", "Predictive Maintenance", "Supply Chain", "Quality Control"],
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description: "Omnichannel retail experiences with personalization, inventory management, and analytics.",
    solutions: ["E-commerce Platforms", "Inventory Management", "Customer Analytics", "POS Systems"],
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Plane,
    title: "Travel & Hospitality",
    description: "End-to-end solutions for booking systems, guest experiences, and operational efficiency.",
    solutions: ["Booking Engines", "Revenue Management", "Guest Experience", "Loyalty Programs"],
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Digital learning platforms, student management systems, and educational analytics.",
    solutions: ["LMS Platforms", "Student Information", "Virtual Classrooms", "Assessment Tools"],
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description: "Smart grid solutions, renewable energy management, and utility optimization.",
    solutions: ["Smart Grid", "Asset Management", "Energy Analytics", "SCADA Systems"],
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: Building2,
    title: "Government & Public Sector",
    description: "Secure, scalable solutions for digital government services and citizen engagement.",
    solutions: ["Citizen Portals", "Document Management", "E-Governance", "Public Safety"],
    color: "from-slate-500 to-zinc-600",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            Industry Expertise
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            Solutions for Every Industry
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            We bring deep domain expertise and proven solutions tailored to the unique 
            challenges and opportunities in your industry.
          </p>
        </div>

        {/* Industry Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
              <CardHeader>
                <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-r ${industry.color} mb-3`}>
                  <industry.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">{industry.title}</CardTitle>
                <CardDescription className="text-sm">
                  {industry.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {industry.solutions.map((solution, sIndex) => (
                    <li key={sIndex} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-green-500 shrink-0" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Don&apos;t see your industry? We have experience across many more sectors.
          </p>
          <Button variant="outline" className="group" asChild>
            <a href="#contact">
              Discuss Your Industry
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
