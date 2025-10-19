// Root layout: imports fonts, global styles, and sets site-wide metadata
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { data } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(data.siteUrl || "https://coffee.elixflare.com"),
  title: {
    default: `${data.cafeInfo.name} · Coffee & Pastries`,
    template: `%s · ${data.cafeInfo.name}`,
  },
  description: "Premium coffee, pastries, and a cozy digital menu—scan & sip.",
  openGraph: {
    title: `${data.cafeInfo.name} · Coffee & Pastries`,
    description:
      "Premium coffee, pastries, and a cozy digital menu—scan & sip.",
    url: "/",
    siteName: data.cafeInfo.name,
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${data.cafeInfo.name} · Coffee & Pastries`,
    description:
      "Premium coffee, pastries, and a cozy digital menu—scan & sip.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/icons/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icons/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <JsonLd />
      </body>
    </html>
  );
}
