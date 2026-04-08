import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { NavbarSticky } from "@/components/blocks/NavbarSticky";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DHL Logistics — Express Shipping, Freight & Supply Chain",
  description:
    "Modern DHL logistics website blueprint featuring an animated gradient hero, services, integrations, pricing toggle, testimonials, FAQ, and a client-side contact form.",
  metadataBase: new URL("https://example.com"),
  applicationName: "DHL Logistics",
  category: "business",
  alternates: { canonical: "/" },
  openGraph: {
    title: "DHL Logistics — Express Shipping, Freight & Supply Chain",
    description:
      "Fast, reliable shipping and logistics—globally connected. Express delivery, freight, and supply chain solutions with real-time visibility.",
    type: "website",
    url: "/",
    siteName: "DHL Logistics",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <NavbarSticky logo="DHL" navItems={navItems} ctaLabel="Get a quote" ctaHref="/pricing" />

        <main className="flex-1">{children}</main>

        <FooterMultiColumn
          brand="DHL Logistics"
          description="Fast, reliable shipping and logistics—globally connected. Demo website blueprint; no backend services connected."
          columns={[
            {
              title: "Services",
              links: [
                { label: "Express Shipping", href: "/services" },
                { label: "Freight Forwarding", href: "/services" },
                { label: "Warehousing", href: "/services" },
                { label: "Supply Chain", href: "/services" },
              ],
            },
            {
              title: "Company",
              links: [
                { label: "About", href: "/about" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Get updates",
              links: [{ label: "Newsletter (CTA on Home)", href: "/#cta" }],
            },
          ]}
          copyright="© 2026 DHL Logistics"
        />
      </body>
    </html>
  );
}
