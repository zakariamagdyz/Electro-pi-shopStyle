"use client";

import { useAuthStore } from "@/store/authStore";
import { LayoutGrid, LogOut, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function TopNavigation() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      logout();
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <nav className="glass-nav sticky top-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8 md:gap-12">
        <Link scroll href="/">
          <span className="font-headline text-2xl font-extrabold tracking-tight text-foreground">
            ShopStyle
          </span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <Link
          scroll
          href="/"
          className="flex items-center gap-2 hover:opacity-70 transition-opacity text-foreground"
        >
          <span className="material-symbols-outlined">
            <LayoutGrid />
          </span>
        </Link>
        <button className="flex items-center gap-2 hover:opacity-70 transition-opacity text-foreground mr-4">
          <span className="material-symbols-outlined">
            <ShoppingCart />
          </span>
        </button>

        {mounted ? (
          isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <span className="font-label text-sm font-semibold hidden sm:inline-block">
                Hello, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-xs font-semibold hover:text-red-500 transition-colors"
                title="Logout"
              >
                <LogOut />{" "}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4 text-sm font-semibold font-label">
              <Link
                scroll
                href="/login"
                className="hover:text-primary transition-colors"
              >
                Login
              </Link>
              <Link
                scroll
                href="/register"
                className="bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 transition-colors hidden sm:block"
              >
                Register
              </Link>
            </div>
          )
        ) : (
          <div className="w-24 h-8 bg-muted animate-pulse rounded-full"></div>
        )}
      </div>
    </nav>
  );
}
