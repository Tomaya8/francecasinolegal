import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FranceCasinoLegal - Casinos en Ligne Légaux France",
    template: "%s | FranceCasinoLegal",
  },
  description:
    "Découvrez les casinos en ligne légaux et fiables pour les joueurs français. Guides, bonus, régulations ANJ et comparatifs 2026.",
  metadataBase: new URL("https://francecasinolegal.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "FranceCasinoLegal",
    title: "FranceCasinoLegal - Casinos en Ligne Légaux France",
    description:
      "Découvrez les casinos en ligne légaux et fiables pour les joueurs français. Guides, bonus, régulations ANJ et comparatifs 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FranceCasinoLegal - Casinos en Ligne Légaux France",
    description:
      "Découvrez les casinos en ligne légaux et fiables pour les joueurs français. Guides, bonus, régulations ANJ et comparatifs 2026.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
