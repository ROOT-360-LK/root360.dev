import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Industries from "@/components/industries";
import WhyChooseUs from "@/components/why-choose-us";
import TechStack from "@/components/tech-stack";
import CaseStudies from "@/components/case-studies";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-50 via-white to-zinc-50 font-sans dark:from-black dark:via-zinc-950 dark:to-black">
      <Header />
      
      <Hero />
      
      <About />

      <Services />

      <Separator className="mx-auto w-11/12" />

      <Industries />

      <WhyChooseUs />

      <Separator className="mx-auto w-11/12" />

      <TechStack />

      <Separator className="mx-auto w-11/12" />

      <CaseStudies />

      <Testimonials />

      <Contact />

      <CTA />
      
      <Footer />
    </div>
  );
}
