import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import clsx from "clsx";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const roboto = Roboto({ weight:"400", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Grupo V&B",
  description: "Venta de materiales de construccion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(roboto.className, "flex flex-col items-center min-h-screen text-concretewhite" )}>
        <NavBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
