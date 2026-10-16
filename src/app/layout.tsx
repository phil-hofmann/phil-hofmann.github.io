import React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";

// Components
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { assetPath } from "@/lib/paths";

export const metadata: Metadata = {
  title: "Phil Hofmann",
  description: "Personal website of Phil Hofmann",
  icons: {
    icon: assetPath("/favicon.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex-1 bg-gray-100">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
