import { Badge } from "./ui/badge";
import { 
  Rocket, 
  HeadphonesIcon, 
  Users, 
  ShieldCheck, 
  Award, 
  Globe2, 
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";

const differentiators = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "15+ years of delivering successful projects across diverse industries with certified professionals.",
    highlight: "10+ Projects Delivered",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Experienced professionals who become an extension of your team, ensuring seamless collaboration.",
    highlight: "10+ Expert Team Members",
  },
  {
    icon: Rocket,
    title: "Agile Delivery",
    description: "Fast time-to-market with our proven agile methodologies and iterative development approach.",
    highlight: "2x Faster Delivery",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Enterprise-grade security with SOC 2 compliance, regular audits, and best-in-class practices.",
    highlight: "OWASP Standards Compliance",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock support with dedicated account managers and rapid response times.",
    highlight: "< 1h Response Time",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Serving clients worldwide with teams across multiple time zones for continuous delivery.",
    highlight: "Clients in 5+ Countries",
  },
];

const processSteps = [
  { step: "01", title: "Discovery", description: "We analyze your needs, goals, and challenges" },
  { step: "02", title: "Strategy", description: "We design a tailored solution roadmap" },
  { step: "03", title: "Development", description: "Agile development with regular updates" },
  { step: "04", title: "Delivery", description: "Thorough testing and seamless deployment" },
  { step: "05", title: "Support", description: "Ongoing maintenance and optimization" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="px-4 py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4" variant="outline">
            Why ROOT 360
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            Your Trusted Technology Partner
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            We don&apos;t just build software – we build lasting partnerships that drive your 
            business forward with measurable results.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-start space-x-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-green-500 to-emerald-600">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Our Process */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl mb-4">
            Our Proven Process
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A structured approach that ensures transparency, quality, and timely delivery.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-linear-to-r from-green-500 to-emerald-600 hidden lg:block" />
          
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map((item, index) => (
              <div key={index} className="relative text-center">
                <div className="relative z-10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-r from-green-500 to-emerald-600 text-white font-bold text-xl shadow-lg">
                  {item.step}
                </div>
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 group"
            asChild
          >
            <a href="#contact">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
