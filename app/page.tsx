import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Globe,
  Smartphone,
  Zap,
  Shield,
  Users,
  Database,
  Cloud,
  Rocket,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-50 font-sans dark:from-black dark:via-zinc-950 dark:to-black">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-green-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-green-950/20" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 text-center">
          <Badge
            className="mb-6 px-4 py-2 text-sm font-medium"
            variant="secondary"
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Next-Generation Software Solutions
          </Badge>

          <h1 className="mb-6 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-6xl font-bold tracking-tight text-transparent dark:from-white dark:via-zinc-200 dark:to-white md:text-8xl">
            ROOT
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent border-0 antialiased">
              {" "}
              360
            </span>
            <sup className="text-emerald-500 top-[-1.5em] text-2xl md:text-3xl">
              ™
            </sup>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-xl text-zinc-600 dark:text-zinc-400 md:text-2xl">
            360° Complete Software Solutions for Modern Businesses
          </p>

          <p className="mx-auto mb-8 max-w-3xl text-base text-zinc-500 dark:text-zinc-500">
            From concept to deployment, we deliver cutting-edge technology
            solutions that drive innovation, scalability, and success in the
            digital age.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-lg hover:from-green-600 hover:to-emerald-700"
            >
              <a href="mailto:info@root360.dev?subject=Schedule a Call&body=Dear Sales Team,%0D%0A%0D%0AI hope this email finds you well.%0D%0A%0D%0AMy name is [Your Full Name], and I am [Your Position, e.g., Head of Operations] at [Your Company Name], a [brief description, e.g., 75-person SaaS company in the fintech space].%0D%0A%0D%0AWe are actively evaluating solutions to [specific need, e.g., modernize our customer support and workflow automation]. After reviewing your platform, I believe [Company/Product Name] could be a strong fit for our team.%0D%0A%0D%0AI’d like to schedule a brief 15–20 minute discovery call to:%0D%0A• Better understand your key features and capabilities%0D%0A• Discuss how your solution aligns with our current challenges%0D%0A• Explore pricing and next steps%0D%0A%0D%0AAre you or a member of your team available for a quick call next week? Please feel free to suggest a few time slots that work best, or you can book directly on my calendar here: [Insert Calendly/link to scheduling tool, if you have one].%0D%0A%0D%0AThank you, and I look forward to speaking soon.%0D%0A%0D%0ABest regards,%0D%0A[Your Full Name]%0D%0A[Your Position]%0D%0A[Your Company Name]%0D%0A[Your Phone Number]%0D%0A[Your Email Address]">Start Your Project</a>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="text-3xl font-bold text-green-500 md:text-4xl">
                500+
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 md:text-4xl">
                98%
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Client Satisfaction
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 md:text-4xl">
                24/7
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Support Available
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 md:text-4xl">
                15+
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Years Experience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4" variant="outline">
              Our Expertise
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
              Comprehensive Software Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              Full-spectrum technology solutions designed to elevate your
              business
            </p>
          </div>

          <Tabs defaultValue="development" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 lg:grid-cols-4">
              <TabsTrigger value="development">Development</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
            </TabsList>

            <TabsContent value="development" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Code2 className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Custom Development</CardTitle>
                    <CardDescription>
                      Bespoke software solutions tailored to your unique
                      business requirements
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Full-stack development
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        API integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Legacy system modernization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Globe className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Web Applications</CardTitle>
                    <CardDescription>
                      Progressive web apps built with modern frameworks and best
                      practices
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        React, Next.js, Vue.js
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Responsive design
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        SEO optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Smartphone className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Mobile Solutions</CardTitle>
                    <CardDescription>
                      Native and cross-platform mobile applications for iOS and
                      Android
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        React Native, Flutter
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        App Store deployment
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Offline functionality
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Cloud className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Cloud Infrastructure</CardTitle>
                    <CardDescription>
                      Scalable cloud solutions on AWS, Azure, and Google Cloud
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Cloud migration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Auto-scaling setup
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Cost optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Database className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Database Solutions</CardTitle>
                    <CardDescription>
                      Robust database architecture and optimization
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        SQL & NoSQL databases
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Data migration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Performance tuning
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Shield className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Security & Compliance</CardTitle>
                    <CardDescription>
                      Enterprise-grade security measures and compliance
                      standards
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Security audits
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        GDPR compliance
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Penetration testing
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="consulting" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Users className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Strategy Consulting</CardTitle>
                    <CardDescription>
                      Expert guidance for digital transformation and technology
                      roadmaps
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Technology assessment
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Architecture planning
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Process optimization
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Zap className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Performance Optimization</CardTitle>
                    <CardDescription>
                      Lightning-fast applications with exceptional user
                      experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Load testing
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Code optimization
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        CDN configuration
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <TrendingUp className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Growth Strategy</CardTitle>
                    <CardDescription>
                      Scale your business with data-driven insights and
                      solutions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Analytics integration
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Market analysis
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        KPI tracking
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="support" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Rocket className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>24/7 Support</CardTitle>
                    <CardDescription>
                      Round-the-clock technical support for your peace of mind
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Incident management
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Priority response
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Proactive monitoring
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Users className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Training & Onboarding</CardTitle>
                    <CardDescription>
                      Comprehensive training programs for your team
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Custom workshops
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Documentation
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Video tutorials
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="transition-all hover:shadow-lg">
                  <CardHeader>
                    <Shield className="mb-2 h-10 w-10 text-green-500" />
                    <CardTitle>Maintenance & Updates</CardTitle>
                    <CardDescription>
                      Regular updates and maintenance to keep systems running
                      smoothly
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Security patches
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Feature updates
                      </li>
                      <li className="flex items-center">
                        <CheckCircle2 className="mr-2 h-4 w-4 text-green-500" />
                        Bug fixes
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Separator className="mx-auto w-11/12" />

      {/* Technology Stack */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <Badge className="mb-4" variant="outline">
              Technology Stack
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white">
              Cutting-Edge Technologies
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
              We leverage the latest and most reliable technologies to build
              your solutions
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Frontend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Next.js</Badge>
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Backend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">.NET</Badge>
                <Badge variant="secondary">Java</Badge>
                <Badge variant="secondary">Go</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Database</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Redis</Badge>
                <Badge variant="secondary">MySQL</Badge>
                <Badge variant="secondary">Elasticsearch</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DevOps</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="secondary">Docker</Badge>
                <Badge variant="secondary">Kubernetes</Badge>
                <Badge variant="secondary">AWS</Badge>
                <Badge variant="secondary">Azure</Badge>
                <Badge variant="secondary">CI/CD</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="mx-auto w-11/12" />

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 p-12 text-center shadow-2xl">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 text-xl text-green-50">
            Let&apos;s build something extraordinary together. Get started with
            a free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-lg" asChild>
              <a href="mailto:info@root360.dev?subject=Business Inquiry&body=Dear Sales Team,%0D%0A%0D%0AI hope this email finds you well.%0D%0A%0D%0AMy name is [Your Name], and I am [Your Position] at [Your Company Name].%0D%0A%0D%0AWe are exploring software solutions to [your need]. I was impressed by your [specific product/feature].%0D%0A%0D%0ACould you please share:%0D%0A• Key features%0D%0A• Pricing details%0D%0A• Demo/trial options%0D%0A%0D%0AI'd appreciate a quick call or more information.%0D%0A%0D%0AThank you,%0D%0A[Your Name]%0D%0A[Your Position]%0D%0A[Your Company]%0D%0A[Phone]%0D%0A[Email]">
                Contact Us Today
              </a>
            </Button>
            <Button size="lg" variant="outline" className="text-lg" asChild>
              <a href="mailto:info@root360.dev?subject=Schedule a Call&body=Dear Sales Team,%0D%0A%0D%0AI hope this email finds you well.%0D%0A%0D%0AMy name is [Your Full Name], and I am [Your Position, e.g., Head of Operations] at [Your Company Name], a [brief description, e.g., 75-person SaaS company in the fintech space].%0D%0A%0D%0AWe are actively evaluating solutions to [specific need, e.g., modernize our customer support and workflow automation]. After reviewing your platform, I believe [Company/Product Name] could be a strong fit for our team.%0D%0A%0D%0AI’d like to schedule a brief 15–20 minute discovery call to:%0D%0A• Better understand your key features and capabilities%0D%0A• Discuss how your solution aligns with our current challenges%0D%0A• Explore pricing and next steps%0D%0A%0D%0AAre you or a member of your team available for a quick call next week? Please feel free to suggest a few time slots that work best, or you can book directly on my calendar here: [Insert Calendly/link to scheduling tool, if you have one].%0D%0A%0D%0AThank you, and I look forward to speaking soon.%0D%0A%0D%0ABest regards,%0D%0A[Your Full Name]%0D%0A[Your Position]%0D%0A[Your Company Name]%0D%0A[Your Phone Number]%0D%0A[Your Email Address]">
                Schedule a Call
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
