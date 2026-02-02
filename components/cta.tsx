import { Button } from "./ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
    return (
        <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-linear-to-r from-green-500 to-emerald-600 p-12 text-center shadow-2xl">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-xl text-green-50">
            Let&apos;s build something extraordinary together. Get started with
            a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg group" asChild>
              <a href="#contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-white text-white hover:bg-white hover:text-green-600" asChild>
              <a href="tel:+94703886215">
                <Phone className="mr-2 h-5 w-5" />
                Call us Now
              </a>
            </Button>
          </div>
        </div>
      </section>
    )
}
