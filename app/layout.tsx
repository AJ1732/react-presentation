import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { foundersGrotesk, foundersGroteskCondensed } from "@/assets/fonts";
import { cn } from "@/lib/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://react.ejemeniboi.com"),
  title: "Modern React Architecture",
  description:
    "A presentation on modern React architecture covering Server Components, Server Actions, streaming SSR, the React Compiler, Next.js App Router, and production-ready frontend decision making.",
  applicationName: "Modern React Architecture",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "React",
    "Next.js",
    "Server Components",
    "Server Actions",
    "Streaming SSR",
    "React Compiler",
    "Frontend Architecture",
    "Web Performance",
  ],
  openGraph: {
    url: "https://react.ejemeniboi.com",
    title: "Modern React Architecture",
    description:
      "A presentation on modern React architecture covering Server Components, Server Actions, streaming SSR, the React Compiler, Next.js App Router, and production-ready frontend decision making.",
    type: "website",
    images: [
      {
        url: "https://cdn.sanity.io/media-libraries/mlu3DBU0QaKb/images/containers/3E8fHUILCJbzwK4DlOaA4pOhMqk/modern-react-architecture.png",
        width: 1200,
        height: 630,
        alt: "Modern React Architecture presentation cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern React Architecture",
    description:
      "A presentation on modern React architecture covering Server Components, Server Actions, streaming SSR, the React Compiler, Next.js App Router, and production-ready frontend decision making.",
    images: [
      "https://cdn.sanity.io/media-libraries/mlu3DBU0QaKb/images/containers/3E8fHUILCJbzwK4DlOaA4pOhMqk/modern-react-architecture.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        `h-full antialiased`,
        geistSans.variable,
        geistMono.variable,
        foundersGrotesk.variable,
        foundersGroteskCondensed.variable,
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
