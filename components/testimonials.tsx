import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechCorp Inc.",
    content: "ROOT 360 transformed our cloud infrastructure. Their expertise in AWS and Azure helped us reduce costs by 40% while significantly improving performance and reliability. The team's dedication to our success was evident throughout the project.",
    rating: 5,
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    position: "VP of Engineering",
    company: "DataFlow Systems",
    content: "The AI/ML solutions provided by ROOT 360 have been game-changing for our business. Their team brought deep expertise and worked seamlessly with our developers to implement a predictive analytics platform that exceeded our expectations.",
    rating: 5,
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    position: "CISO",
    company: "SecureBank",
    content: "Outstanding cybersecurity services. ROOT 360's MDR and cloud security solutions give us peace of mind in today's threat landscape. Their 24/7 monitoring and rapid incident response have been invaluable to our organization.",
    rating: 5,
    initials: "ER",
  },
  {
    name: "David Park",
    position: "CEO",
    company: "RetailMax",
    content: "ROOT 360 delivered our e-commerce platform on time and on budget. The solution has helped us achieve 150% revenue growth. Their agile approach and transparent communication made the entire process smooth and efficient.",
    rating: 5,
    initials: "DP",
  },
  {
    name: "Amanda Foster",
    position: "Director of IT",
    company: "HealthCare Plus",
    content: "Working with ROOT 360 on our EHR integration project was a fantastic experience. They understood the complexity of healthcare regulations and delivered a HIPAA-compliant solution that our staff loves using.",
    rating: 5,
    initials: "AF",
  },
  {
    name: "Robert Kim",
    position: "CIO",
    company: "Global Manufacturing Co.",
    content: "ROOT 360's IoT and Industry 4.0 solutions have revolutionized our factory operations. We've seen a 35% improvement in efficiency and predictive maintenance has reduced our downtime significantly.",
    rating: 5,
    initials: "RK",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-4 py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            Testimonials
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Don&apos;t just take our word for it – hear from the leaders who have 
            partnered with us to achieve their technology goals.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-green-500/20 absolute top-4 right-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Author */}
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12 border-2 border-green-500">
                    <AvatarFallback className="bg-linear-to-r from-green-500 to-emerald-600 text-white font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-zinc-500">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-linear-to-r from-green-500 to-emerald-600 text-white">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
            <div className="text-green-100 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">4.9/5</div>
            <div className="text-green-100 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">95%</div>
            <div className="text-green-100 text-sm">Client Retention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-1">200+</div>
            <div className="text-green-100 text-sm">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
}
