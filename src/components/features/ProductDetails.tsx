"use client";

import { useProductBySlug } from "@/hooks/useProducts";
import { useAuthStore } from "@/store/authStore";
import {
  BadgeCheck,
  HeartPlus,
  LoaderCircle,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import ErrorState from "./ErrorState";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";

function getCleanImageString(imageStrings: string[]): string[] {
  if (!imageStrings || imageStrings.length === 0)
    return ["https://via.placeholder.com/640x480"];
  return imageStrings.map((img) => {
    let clean = img;
    if (clean.startsWith('["')) {
      try {
        const parsed = JSON.parse(clean);
        clean = Array.isArray(parsed) ? parsed[0] : parsed;
      } catch {
        // ignore
      }
    }
    return clean;
  });
}

export default function ProductDetails({ slug }: { slug: string }) {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  // Workaround react hook limitation
  useEffect(() => {
    const timeoutId = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timeoutId);
  }, []);
  const {
    data: product,
    isLoading,
    isError,
    error,
    refetch,
  } = useProductBySlug(slug);

  if (isLoading && !product) return <ProductDetailsSkeleton />;

  if (isError && !product)
    return (
      <ErrorState
        message={
          error?.message ||
          "Unable to retrieve the products catalog. Please try again."
        }
        onRetry={() => refetch()}
        className="col-span-full"
      />
    );

  if (!product) return null;

  const images = getCleanImageString(product.images);
  const mainImage = images[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
      {/* Left Pane: Image Gallery */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        <div className="relative aspect-4/5 w-full bg-accent rounded-lg overflow-hidden group">
          <Image
            fill
            alt={product.title}
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            src={mainImage}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.slice(0, 3).map((img, idx) => (
            <div
              key={idx}
              className="relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
            >
              <Image
                fill
                alt={`${product.title} thumbnail ${idx + 1}`}
                className="object-cover"
                src={img}
                sizes="15vw"
              />
            </div>
          ))}
          {images.length > 3 && (
            <div className="aspect-square bg-accent rounded-lg flex items-center justify-center text-muted-foreground font-headline font-bold text-xl">
              +{images.length - 3}
            </div>
          )}
        </div>
      </div>

      {/* Right Pane: Product Details */}
      <div className="lg:col-span-5 flex flex-col">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-full">
            {product.category.name}
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-foreground mb-6 leading-[1.1]">
          {product.title}
        </h1>
        <div className="flex items-baseline gap-4 mb-8">
          <span className="text-3xl font-body font-light text-foreground">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-muted-foreground line-through text-lg opacity-50">
            ${(product.price * 1.3).toFixed(2)}
          </span>
        </div>
        <div className="h-px w-full bg-border/20 mb-8"></div>
        <div className="space-y-6 mb-12">
          <p className="text-base font-body text-muted-foreground leading-relaxed">
            {product.description}
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-foreground">
              <span className=" text-[18px] text-tertiary">
                <BadgeCheck />
              </span>
              <span>100% Authentic Product</span>
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground">
              <span className=" text-[18px] text-tertiary">
                <BadgeCheck />
              </span>
              <span>Sustainably Handled</span>
            </li>
          </ul>
        </div>

        {/* Product Selectors */}
        <div className="grid grid-cols-1 gap-8 mb-12">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Select Color
            </label>
            <div className="flex gap-4">
              <button className="w-8 h-8 rounded-full ring-2 ring-primary ring-offset-2 bg-border"></button>
              <button className="w-8 h-8 rounded-full bg-primary hover:ring-2 hover:ring-border hover:ring-offset-2 transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-muted hover:ring-2 hover:ring-border hover:ring-offset-2 transition-all"></button>
            </div>
          </div>
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Select Size
            </label>
            <div className="grid grid-cols-4 gap-2">
              <button className="py-3 text-xs font-semibold border border-border hover:bg-secondary transition-colors rounded">
                XS
              </button>
              <button className="py-3 text-xs font-semibold border border-border hover:bg-secondary transition-colors rounded">
                S
              </button>
              <button className="py-3 text-xs font-semibold border border-border hover:bg-secondary transition-colors rounded">
                M
              </button>
              <button className="py-3 text-xs font-semibold border border-border hover:bg-secondary transition-colors rounded">
                L
              </button>
            </div>
          </div>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col gap-4 transition-all duration-300">
          {mounted ? (
            isAuthenticated ? (
              <button
                onClick={() => {
                  setIsAdding(true);
                  setTimeout(() => {
                    setIsAdding(false);
                    toast.success("Added to cart successfully!");
                  }, 600);
                }}
                disabled={isAdding}
                className="btn-gradient text-white py-5 px-8 rounded font-headline font-bold text-lg tracking-wide custom-shadow active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {isAdding ? (
                  <span className=" animate-spin mr-2 text-[20px]">
                    <LoaderCircle />
                  </span>
                ) : (
                  <span className=" mr-2 text-[20px]">
                    <ShoppingCart />
                  </span>
                )}
                {isAdding ? "Adding..." : "Add to Cart"}
              </button>
            ) : (
              <button
                onClick={() => {
                  const loginUrl = new URL("/login", window.location.href);
                  loginUrl.searchParams.set(
                    "callbackUrl",
                    window.location.pathname,
                  );
                  router.push(loginUrl.toString());
                }}
                className="bg-neutral-900 text-white py-5 px-8 rounded font-headline font-bold text-lg tracking-wide custom-shadow active:scale-[0.98] transition-all hover:bg-neutral-800"
              >
                Login to Purchase
              </button>
            )
          ) : (
            // Skeleton loader for button to prevent hydration shift
            <div className="w-full h-[68px] bg-accent animate-pulse rounded"></div>
          )}

          {mounted ? (
            isAuthenticated && (
              <button className="flex items-center justify-center gap-2 py-4 px-8 border border-border hover:bg-accent transition-colors rounded font-label text-sm font-semibold">
                <span className=" text-[20px]">
                  <HeartPlus />
                </span>
                Add to Wishlist
              </button>
            )
          ) : (
            <div className="w-full h-[68px] bg-accent animate-pulse rounded"></div>
          )}
        </div>

        {/* Shipping / Returns Info */}
        <div className="mt-12 p-6 bg-white rounded-xl border border-border/10">
          <div className="flex gap-4 items-start">
            <Truck />
            <div>
              <p className="text-sm font-bold text-foreground mb-1">
                Complimentary Shipping
              </p>
              <p className="text-xs text-muted-foreground">
                Arrives in 3-5 business days. Returns accepted within 30 days of
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
