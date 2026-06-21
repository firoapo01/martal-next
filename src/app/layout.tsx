import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "مرتال - عدسات لاصقة",
  description: "متجر مرتال للعدسات اللاصقة في مصر",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} antialiased`}>
      <body className="min-h-screen bg-white font-[family-name:var(--font-cairo)]">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
