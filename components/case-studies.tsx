import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "./ui/button";

const caseStudies = [
  {
    industry: "Healthcare",
    title: "Digital Transformation for Regional Hospital Network",
    client: "MedCare Health Systems",
    description: "Implemented a comprehensive EHR integration and telemedicine platform serving 50+ facilities.",
    image: "/case-studies/healthcare.jpg",
    results: [
      { icon: TrendingUp, value: "40%", label: "Efficiency Increase" },
      { icon: Clock, value: "60%", label: "Reduced Wait Times" },
      { icon: Users, value: "100K+", label: "Patients Served" },
    ],
    technologies: ["Azure", "React", "Node.js", "FHIR"],
    color: "from-red-500 to-rose-600",
  },
  {
    industry: "Financial Services",
    title: "AI-Powered Fraud Detection System",
    client: "SecureBank International",
    description: "Built a real-time fraud detection platform processing millions of transactions daily with 99.9% accuracy.",
    image: "/case-studies/finance.jpg",
    results: [
      { icon: DollarSign, value: "$50M", label: "Fraud Prevented" },
      { icon: Zap, value: "< 100ms", label: "Detection Time" },
      { icon: BarChart3, value: "99.9%", label: "Accuracy Rate" },
    ],
    technologies: ["AWS", "Python", "TensorFlow", "Kafka"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    industry: "Retail",
    title: "Omnichannel E-commerce Platform",
    client: "GlobalRetail Corp",
    description: "Developed a unified commerce platform integrating online, mobile, and in-store experiences.",
    image: "/case-studies/retail.jpg",
    results: [
      { icon: TrendingUp, value: "150%", label: "Revenue Growth" },
      { icon: Users, value: "5M+", label: "Active Users" },
      { icon: Clock, value: "3x", label: "Faster Checkout" },
    ],
    technologies: ["Next.js", "Shopify", "Stripe", "Algolia"],
    color: "from-purple-500 to-violet-600",
  },
];

const clientLogos = [
  { name: "TechCorp", logo: "TechCorp" },
  { name: "GlobalBank", logo: "GlobalBank" },
  { name: "HealthPlus", logo: "HealthPlus" },
  { name: "RetailMax", logo: "RetailMax" },
  { name: "InnovateCo", logo: "InnovateCo" },
  { name: "DataFlow", logo: "DataFlow" },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            Success Stories
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            Delivering Real Results
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            See how we&apos;ve helped organizations like yours achieve transformational outcomes 
            through innovative technology solutions.
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {caseStudies.map((study, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1"
            >
              {/* Header with gradient */}
              <div className={`h-32 bg-gradient-to-r ${study.color} relative`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    {study.industry}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl leading-tight">
                  {study.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  Client: {study.client}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {study.description}
                </p>
                
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 py-4 border-y border-zinc-200 dark:border-zinc-700">
                  {study.results.map((result, rIndex) => (
                    <div key={rIndex} className="text-center">
                      <result.icon className="h-5 w-5 mx-auto mb-1 text-green-500" />
                      <div className="text-lg font-bold text-zinc-900 dark:text-white">
                        {result.value}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, tIndex) => (
                    <Badge key={tIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trusted By Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
            Trusted by Industry Leaders
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            Join 200+ companies that trust ROOT 360 for their technology needs
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 px-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800/50">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-zinc-400 dark:text-zinc-600 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
            >
              {client.logo}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="#contact">
              Discuss Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
