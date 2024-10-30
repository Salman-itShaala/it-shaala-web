import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNav } from "./components/ui/floating-navbar";
import Footer from "./components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "IT Shaala: Best IT Training Institute in Pune",
  description: "IT Shaala is the Best IT Training Institute In Pune in data analysis, machine learning, and data visualization with 100% placement at affordable prices.",
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
        <FloatingNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
