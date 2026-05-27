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
  title: "Metamersist | Smart Technology, Real Impact",
  description:
    "Purpose-driven AI-powered software solutions empowering farmers, cooperatives, and agri-businesses across India. Transforming agriculture through technology.",
  keywords: [
    "agritech",
    "agriculture technology",
    "farmer tools",
    "livestock management",
    "AI for agriculture",
    "India agritech",
  ],
  authors: [{ name: "Metamersist Technologies Pvt. Ltd." }],
  openGraph: {
    title: "Metamersist | Smart Technology, Real Impact",
    description:
      "Purpose-driven AI-powered software solutions empowering farmers, cooperatives, and agri-businesses across India.",
    type: "website",
    locale: "en_IN",
    siteName: "Metamersist",
  },
  twitter: {
    card: "summary_large_image",
    title: "Metamersist | Smart Technology, Real Impact",
    description:
      "Purpose-driven AI-powered software solutions empowering farmers, cooperatives, and agri-businesses across India.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
