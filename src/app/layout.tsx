import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import clsx from "clsx";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const roboto = Roboto({ weight:"400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "PHES",
  description: "Ventas de immuebles y servicios immobiliarios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, "flex flex-col items-center min-h-screen text-concretewhite" )}>
      <div className="pointer-events-none fixed inset-0 -z-40 h-full w-full bg-[url('/textures/backgroundBricks.webp')] opacity-20 mix-blend-soft-light"></div>  
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
