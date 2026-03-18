import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AuthLayoutProps {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  heroImageSrc: string;
  heroImageAlt: string;
  heroOverlay: React.ReactNode;
  children: React.ReactNode;
  footerLinks?: { label: string; href: string }[];
}

export default function AuthLayout({
  title,
  subtitle,
  children,
  heroImageSrc,
  heroImageAlt,
  heroOverlay,
  footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}: AuthLayoutProps) {
  return (
    <div className="font-body selection:bg-secondary selection:text-foreground overflow-hidden min-h-screen">
      {/* Linear Process Header (Simplified Brand Presence) */}
      <header className="fixed top-0 left-0 w-full p-8 flex justify-center lg:justify-start z-50">
        <Link
          className="font-headline text-2xl tracking-tight text-foreground"
          href="/"
        >
          Lumière Commerce
        </Link>
      </header>

      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        {/* Artistic Canvas (Visual Side) */}
        <section className="hidden lg:flex items-center justify-center bg-accent p-24 relative overflow-hidden">
          <div className="relative w-full h-full max-w-xl aspect-3/4 overflow-hidden rounded-lg soft-shadow z-10">
            <Image
              alt={heroImageAlt}
              className="object-cover"
              fill
              src={heroImageSrc}
            />
            <div className="absolute inset-0 bg-linear-to-t from-on-background/40 to-transparent"></div>
            {heroOverlay}
          </div>
        </section>

        {/* Focus Canvas (Form Side) */}
        <section className="flex flex-col items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative">
          <div className="w-full max-w-md">
            <div className="mb-12 text-center lg:text-left">
              <h1 className="font-headline text-4xl mb-4 tracking-tight text-foreground font-bold">
                {title}
              </h1>
              <p className="text-muted-foreground font-body">{subtitle}</p>
            </div>

            {children}
          </div>

          <footer className="absolute bottom-8 left-0 right-0 px-12 hidden lg:flex justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground w-full max-w-2xl mx-auto">
            <span>© 2026 ShopStyle Inc. All rights reserved.</span>
            <div className="flex gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  className="hover:text-primary transition-colors"
                  href={link.href}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </footer>
        </section>
      </main>

      {/* Decorative Element (Asymmetric Breathing Room) */}
      <div className="fixed top-1/2 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[120px] -z-10"></div>
    </div>
  );
}
