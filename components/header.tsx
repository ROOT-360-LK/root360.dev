"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";

const services = [
  { title: "Cloud Infrastructure", href: "#services", description: "AWS, Azure, GCP solutions" },
  { title: "AI & Machine Learning", href: "#services", description: "Intelligent automation" },
  { title: "Custom Development", href: "#services", description: "Bespoke software solutions" },
  { title: "Cybersecurity", href: "#services", description: "Enterprise security" },
  { title: "Data Analytics", href: "#services", description: "Business intelligence" },
  { title: "Digital Transformation", href: "#services", description: "End-to-end modernization" },
];

const industries = [
  { title: "Healthcare", href: "#industries", description: "HIPAA compliant solutions" },
  { title: "Financial Services", href: "#industries", description: "Secure fintech platforms" },
  { title: "Manufacturing", href: "#industries", description: "Industry 4.0 solutions" },
  { title: "Retail & E-commerce", href: "#industries", description: "Omnichannel experiences" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-1">
            <span className="text-2xl font-bold text-zinc-900 dark:text-white lg:text-3xl">
              ROOT
            </span>
            <span className="text-2xl font-bold text-green-500 lg:text-3xl">360</span>
            <sup className="text-green-500 text-xs">™</sup>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Industries</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      {industries.map((industry) => (
                        <li key={industry.title}>
                          <NavigationMenuLink asChild>
                            <a
                              href={industry.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              <div className="text-sm font-medium leading-none">{industry.title}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {industry.description}
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#case-studies"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    Case Studies
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                  >
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Button
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              asChild
            >
              <a href="#contact">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 pb-6">
            <nav className="flex flex-col space-y-4 pt-4">
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-zinc-500">Services</div>
                {services.map((service) => (
                  <a
                    key={service.title}
                    href={service.href}
                    className="block px-6 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
              <div className="space-y-2">
                <div className="px-4 py-2 text-sm font-semibold text-zinc-500">Industries</div>
                {industries.map((industry) => (
                  <a
                    key={industry.title}
                    href={industry.href}
                    className="block px-6 py-2 text-sm hover:bg-accent"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {industry.title}
                  </a>
                ))}
              </div>
              <a href="#about" className="px-4 py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </a>
              <a href="#case-studies" className="px-4 py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Case Studies
              </a>
              <a href="#contact" className="px-4 py-2 text-sm font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </a>
              <div className="px-4 pt-4">
                <Button
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get Started</a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
