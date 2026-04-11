import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, TrendingUp, Clock, DollarSign, Users, Zap } from "lucide-react";
import { Button } from "./ui/button";

const caseStudies = [
  {
    industry: "Healthcare",
    title: "AI Transformation for DNA Councilng",
    client: "DNA Longevity, UAE",
    description: "Implemented a comprehensive EHR integration and AI summarizations for counceling and automated meetings scheduling",
    image: "/case-studies/healthcare.jpg",
    results: [
      { icon: TrendingUp, value: "50%", label: "Efficiency Increase" },
      { icon: Clock, value: "60%", label: "Reduced Wait Times" },
      { icon: Users, value: "20k+", label: "Patients Served" },
    ],
    technologies: ["Vercel", "React", "NextJs", "PostgreSQL", "Redis", "OpenAI API"],
    color: "from-red-500 to-rose-600",
  },
  {
    industry: "Talent Acquisition",
    title: "Job Portal & Recruitment Platform",
    client: "EPR Consultancy",
    description: "Developed a comprehensive job portal where candidates apply for positions and companies post job openings to find qualified talent seamlessly.",
    image: "/case-studies/talent.jpg",
    results: [
      { icon: Users, value: "15k+", label: "Job Candidates" },
      { icon: Zap, value: "85%", label: "Placement Rate" },
      { icon: DollarSign, value: "500+", label: "Active Positions" },
    ],
    technologies: ["React", "Next.js", "Railway", "Postgres", "Onepay"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    industry: "Marketing",
    title: "ERP System with Facebook Ad Integration",
    client: "GlobalRetail Corp",
    description: "Developed an integrated ERP system with real-time Facebook ad campaign management and performance analytics.",
    image: "/case-studies/marketing.jpg",
    results: [
      { icon: TrendingUp, value: "280%", label: "ROI Improvement" },
      { icon: Users, value: "500k+", label: "Ad Impressions" },
      { icon: DollarSign, value: "45%", label: "Cost Reduction" },
    ],
    technologies: ["React", "Next.js", "Facebook API", "PostgreSQL", "Redis", "Railway"],
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
              <div className={`h-32 bg-linear-to-r ${study.color} relative`}>
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
