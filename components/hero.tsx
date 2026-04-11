import { ArrowRight, Sparkles, Play, CheckCircle } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const highlights = [
  "5+ Years of Excellence",
  "10+ Projects Delivered",
  "100% Client Satisfaction",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 pt-32">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-green-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-green-950/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <Badge
          className="mb-6 px-4 py-2 text-sm font-medium"
          variant="secondary"
        >
          <Sparkles className="mr-2 h-4 w-4" />
          Next-Generation Software Solutions
        </Badge>

        <h1 className="mb-6 bg-linear-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-5xl font-bold tracking-tight text-transparent dark:from-white dark:via-zinc-200 dark:to-white md:text-7xl lg:text-8xl">
          ROOT
          <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent border-0 antialiased">
            {" "}
            360
          </span>
          <sup className="text-emerald-500 top-[-1.5em] text-xl md:text-2xl lg:text-3xl">
            ™
          </sup>
        </h1>

        <p className="mx-auto mb-4 max-w-3xl text-xl text-zinc-600 font-semibold dark:text-zinc-400 md:text-2xl lg:text-3xl">
          360° Complete Software Solutions for Modern Businesses
        </p>

        <p className="mx-auto mb-8 max-w-3xl text-base text-zinc-500 dark:text-zinc-500 md:text-lg">
          From concept to deployment, we deliver cutting-edge technology
          solutions that drive innovation, scalability, and success in the
          digital age. Partner with us to transform your business.
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
              <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
              {highlight}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="group bg-linear-to-r from-green-500 to-emerald-600 text-lg hover:from-green-600 hover:to-emerald-700 h-14 px-8"
            asChild
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="text-lg h-14 px-8 group" asChild>
            <a href="#case-studies">
              <Play className="mr-2 h-5 w-5 group-hover:text-green-500 transition-colors" />
              View Our Work
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl font-bold text-green-500 md:text-4xl">
              10+
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Projects Delivered
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl font-bold text-green-500 md:text-4xl">
              100%
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Client Satisfaction
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl font-bold text-green-500 md:text-4xl">
              24/7
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Support Available
            </div>
          </div>
          <div className="p-4 rounded-xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-800/50">
            <div className="text-3xl font-bold text-green-500 md:text-4xl">
              5+
            </div>
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Years Experience
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-400 dark:border-zinc-600 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-zinc-400 dark:bg-zinc-600 rounded-full" />
        </div>
      </div>
    </section>
  );
}
