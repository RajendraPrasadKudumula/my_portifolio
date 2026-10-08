import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050811",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Rajendra Prasad Kudumula | Senior Full Stack & Backend Engineer (Node.js, NestJS, AWS, AI)",
  description:
    "Senior Software Engineer with 4+ years of experience in Node.js, NestJS, TypeScript, React, PostgreSQL, AWS, and AI Engineering. Proven track record building enterprise healthcare & AdTech systems.",
  keywords: [
    "Rajendra Prasad Kudumula",
    "Senior Software Engineer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "AWS S3 SQS",
    "Snowflake",
    "Microservices",
    "REST APIs",
    "AI Engineer",
    "LLM RAG",
    "Bengaluru Software Engineer",
    "Happiest Minds",
  ],
  authors: [{ name: "Rajendra Prasad Kudumula" }],
  creator: "Rajendra Prasad Kudumula",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Rajendra Prasad Kudumula | Senior Software Engineer (Full Stack & AI)",
    description:
      "Senior Software Engineer with 4+ years building high-throughput microservices, scalable backend platforms, and AI-powered systems.",
    siteName: "Rajendra Prasad Kudumula Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajendra Prasad Kudumula | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Node.js, NestJS, TypeScript, React, PostgreSQL, AWS, and AI Engineering.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}>
      <body className="min-h-screen bg-[#050811] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}