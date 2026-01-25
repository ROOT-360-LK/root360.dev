import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROOT 360™ | Enterprise Software Solutions & Digital Transformation",
  description: "ROOT 360 delivers cutting-edge software solutions including cloud infrastructure, AI/ML, cybersecurity, and digital transformation services for modern businesses worldwide.",
  keywords: ["software development", "digital transformation", "cloud solutions", "AI", "machine learning", "cybersecurity", "enterprise software"],
  openGraph: {
    title: "ROOT 360™ | Enterprise Software Solutions",
    description: "360° Complete Software Solutions for Modern Businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
