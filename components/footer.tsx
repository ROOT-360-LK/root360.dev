import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Facebook,
  ArrowRight
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const footerLinks = {
  services: [
    { name: "Cloud Infrastructure", href: "#services" },
    { name: "AI & Machine Learning", href: "#services" },
    { name: "Custom Development", href: "#services" },
    { name: "Cybersecurity", href: "#services" },
    { name: "Data Analytics", href: "#services" },
    { name: "Digital Transformation", href: "#services" },
  ],
  industries: [
    { name: "Healthcare", href: "#industries" },
    { name: "Financial Services", href: "#industries" },
    { name: "Manufacturing", href: "#industries" },
    { name: "Retail & E-commerce", href: "#industries" },
    { name: "Education", href: "#industries" },
    { name: "Government", href: "#industries" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Careers", href: "#careers" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
    { name: "Partners", href: "#partners" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Service", href: "#terms" },
    { name: "Cookie Policy", href: "#cookies" },
    { name: "Security", href: "#security" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "GitHub", icon: Github, href: "https://github.com" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
];

export default function Footer() {
  return (
    <footer className="bg-zinc-900 dark:bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-zinc-400">
                Subscribe to our newsletter for the latest tech insights and updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500 min-w-[250px]"
              />
              <Button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center space-x-1 mb-6">
              <span className="text-2xl font-bold">ROOT</span>
              <span className="text-2xl font-bold text-green-500">360</span>
              <sup className="text-green-500 text-xs">™</sup>
            </a>
            <p className="text-zinc-400 mb-6 leading-relaxed">
              Your trusted partner for digital transformation. We deliver innovative 
              technology solutions that drive growth, efficiency, and competitive advantage.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:info@root360.dev" 
                className="flex items-center text-zinc-400 hover:text-green-400 transition-colors"
              >
                <Mail className="h-4 w-4 mr-3" />
                info@root360.dev
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center text-zinc-400 hover:text-green-400 transition-colors"
              >
                <Phone className="h-4 w-4 mr-3" />
                +1 (555) 123-4567
              </a>
              <div className="flex items-start text-zinc-400">
                <MapPin className="h-4 w-4 mr-3 mt-0.5 shrink-0" />
                <span>123 Tech Boulevard<br />Silicon Valley, CA 94025</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 hover:bg-green-500 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-zinc-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-white mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-zinc-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-zinc-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-zinc-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-zinc-400 text-sm">
              © {new Date().getFullYear()} ROOT 360™. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-zinc-500 text-sm">
                Certified Partner:
              </span>
              <div className="flex items-center space-x-4 text-zinc-400 text-xs">
                <span>AWS</span>
                <span>•</span>
                <span>Azure</span>
                <span>•</span>
                <span>Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
