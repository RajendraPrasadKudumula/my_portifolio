import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://YOUR-DOMAIN.vercel.app"),

  title: {
    default: "Rajendra Prasad Kudumula | Senior Software Engineer",
    template: "%s | Rajendra Prasad Kudumula",
  },

  description:
    "Senior Software Engineer specializing in Node.js, TypeScript, NestJS, PostgreSQL, AWS and AI-powered applications. Building scalable backend and full-stack systems.",

  keywords: [
    "Rajendra Prasad Kudumula",
    "Senior Software Engineer",
    "Full Stack Developer",
    "Backend Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "AWS",
    "AI Engineer",
    "LLM",
    "RAG",
  ],

  authors: [
    {
      name: "Rajendra Prasad Kudumula",
    },
  ],

  creator: "Rajendra Prasad Kudumula",

  openGraph: {
    type: "website",
    title: "Rajendra Prasad Kudumula | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in Node.js, TypeScript, NestJS, PostgreSQL, AWS and AI-powered applications.",
    siteName: "Rajendra Prasad Kudumula",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rajendra Prasad Kudumula — Senior Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rajendra Prasad Kudumula | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in scalable backend systems, full-stack applications and AI engineering.",
    images: ["/og-image.png"],
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}