import type { Metadata } from "next";
import "./globals.css";

import { Providers } from "@/components/providers/Providers";
import { Toaster } from "@/components/ui/sonner";
import { inter, interLabel, manrope } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    template: "%s | ShopStyle",
    default: "ShopStyle - Modern E-Commerce storefront",
  },
  description: "Curating timeless pieces for the modern aesthetic. Discover premium products with a seamless shopping experience.",
  keywords: ["e-commerce", "fashion", "modern", "shopstyle", "premium products"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} ${interLabel.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
