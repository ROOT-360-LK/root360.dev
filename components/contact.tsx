"use client";

import { useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Mail,
  Phone,
  Linkedin,
  Clock,
  Send,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Building2,
  User,
  AtSign,
} from "lucide-react";

const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "info@root360.dev",
      href: "mailto:info@root360.dev",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+94 (70) 388 6215",
      href: "tel:+94703886215",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "+94 (76) 664 3492",
      href: "https://wa.me/94766643492",
    },
    {
      icon: Linkedin,
      title: "Linked In",
      value: "Linkedin.com/company/root360",
      href: "https://linkedin.com/company/root360",
    },
  ];

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xreqzbrj";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          organization: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  

  return (
    <section id="contact" className="px-4 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            Get In Touch
          </Badge>
          <h2 className="mb-4 text-4xl font-bold text-zinc-900 dark:text-white md:text-5xl">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">
            Ready to transform your business with technology? Reach out to us
            and let&apos;s discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-linear-to-br from-green-500 to-emerald-600 text-white">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-green-100 mb-8">
                Fill out the form and our team will get back to you within 24
                hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start space-x-4 group hover:bg-white/10 p-2 rounded-lg transition-colors -ml-2"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/20">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-green-100">
                        {item.title}
                      </div>
                      <div className="text-white">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Business Hours</span>
                </div>
                <p className="text-green-100 text-sm">
                  Monday - Friday: 9:00 AM - 6:00 PM (GMT+5:30)
                  <br />
                  Weekend: By appointment only
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30 mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    Your message has been received. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Name */}
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center"
                      >
                        <User className="h-4 w-4 mr-2 text-zinc-400" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center"
                      >
                        <AtSign className="h-4 w-4 mr-2 text-zinc-400" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        autoComplete="email"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Organization */}
                    <div className="space-y-2">
                      <label
                        htmlFor="organization"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center"
                      >
                        <Building2 className="h-4 w-4 mr-2 text-zinc-400" />
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your Company Name"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Phone (WhatsApp) */}
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center"
                      >
                        <Phone className="h-4 w-4 mr-2 text-zinc-400" />
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBeforeInput={(e) => {
                          if (e.data && !/[0-9+\s\-\(\)]/.test(e.data)) {
                            e.preventDefault();
                          }
                        }}
                        autoComplete="tel-national"
                        placeholder="+94 70 388 6215"
                        className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-zinc-700 dark:text-zinc-300 flex items-center"
                    >
                      <MessageSquare className="h-4 w-4 mr-2 text-zinc-400" />
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, requirements, or any questions you have..."
                      className="w-full px-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-zinc-500 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="#" className="underline hover:text-green-500">
                      Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="underline hover:text-green-500">
                      Terms of Service
                    </a>
                    .
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
