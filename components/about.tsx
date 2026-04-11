import { Badge } from "./ui/badge";
import { Target, Eye, Award, Users, Globe2, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We push boundaries and embrace emerging technologies to deliver cutting-edge solutions.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our engagements.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as true partners, ensuring shared success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We are committed to delivering the highest quality in everything we do.",
  },
];

const stats = [
  { value: "5+", label: "Years of Excellence", icon: Award },
  { value: "10+", label: "Projects Delivered", icon: Target },
  { value: "2+", label: "Global Clients", icon: Globe2 },
  { value: "10+", label: "Expert Team Members", icon: Users },
];

export default function About() {
  return (
    <section id="about" className="px-4 py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <Badge className="mb-4" variant="outline">
            About ROOT 360
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            Empowering Digital Transformation
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            For over 5 years, ROOT 360 has been at the forefront of technology innovation, 
            helping businesses worldwide navigate their digital transformation journey with 
            confidence and success.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2 mb-16">
          <div className="relative p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <div className="absolute -top-5 left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                <Target className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 className="mt-4 mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
              Our Mission
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To empower organizations with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage. We believe in building long-term partnerships 
              that deliver measurable business outcomes and transform the way companies operate 
              in the digital age.
            </p>
          </div>

          <div className="relative p-8 rounded-2xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700">
            <div className="absolute -top-5 left-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                <Eye className="h-5 w-5 text-white" />
              </div>
            </div>
            <h3 className="mt-4 mb-4 text-2xl font-bold text-zinc-900 dark:text-white">
              Our Vision
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              To be the most trusted global technology partner, recognized for our expertise, 
              innovation, and unwavering commitment to client success. We envision a future 
              where every organization, regardless of size, has access to world-class 
              technology solutions.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3 text-green-500" />
              <div className="text-3xl font-bold text-green-500 md:text-4xl mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-zinc-900 dark:text-white md:text-3xl mb-4">
            Our Core Values
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            These principles guide everything we do and define who we are as a company.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-white dark:bg-zinc-800 shadow-lg border border-zinc-200 dark:border-zinc-700 transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/30 mb-4 group-hover:bg-green-500 transition-colors">
                <value.icon className="h-6 w-6 text-green-600 dark:text-green-400 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                {value.title}
              </h4>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
