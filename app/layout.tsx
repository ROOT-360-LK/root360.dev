import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/seo-config";
import { MainPageJsonLd } from "@/components/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const viewport: Viewport = {
//   themeColor: [
//     { media: "(prefers-color-scheme: light)", color: "#ffffff" },
//     { media: "(prefers-color-scheme: dark)", color: "#000000" },
//   ],
//   width: "device-width",
//   initialScale: 1,
//   maximumScale: 5,
// };

export const metadata: Metadata = {
  title: {
    default: siteConfig.name + " | Enterprise Software Solutions & Digital Transformation",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  category: siteConfig.category,
  
  // Metadata base URL
  metadataBase: new URL(siteConfig.url),
  
  // Alternate languages (add more as needed)
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name + " | Enterprise Software Solutions",
    description: "360° Complete Software Solutions for Modern Businesses. Cloud infrastructure, AI/ML, cybersecurity, and digital transformation.",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name + " - Enterprise Software Solutions",
        type: "image/png",
      },
    ],
  },
  
  // Twitter Card metadata
  // twitter: {
  //   card: "summary_large_image",
  //   site: siteConfig.social.twitter,
  //   creator: siteConfig.social.twitter,
  //   title: siteConfig.name + " | Enterprise Software Solutions",
  //   description: "360° Complete Software Solutions for Modern Businesses",
  //   images: [siteConfig.ogImage],
  // },
  
  // Robots directives
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Icons and manifest
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  
  // App-specific metadata
  applicationName: siteConfig.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.shortName,
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  
  // Verification for search engines (add your verification codes)
  verification: {
    google: "JUae_zgC4jIXY_HMi85FZwHq0JoCnqarY25wG5MvuCg"
    // yandex: "your-yandex-verification-code", // Replace with actual code
    // yahoo: "your-yahoo-verification-code",
    // other: {
    //   "bing-site-verification": "your-bing-verification-code",
    // },
  },
  
  // Other metadata
  // other: {
  //   "msapplication-TileColor": "#000000",
  //   "msapplication-config": "/browserconfig.xml",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <MainPageJsonLd />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
