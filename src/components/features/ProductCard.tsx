import { ProductCardProps } from "@/types";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  slug,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  price,
}: ProductCardProps) {
  return (
    <Link href={`/product/${slug}`} className="group cursor-pointer block">
      <div className="aspect-4/5 bg-accent mb-6 overflow-hidden relative rounded">
        <Image
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          alt={imageAlt}
          src={imageSrc}
        />
        <button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 opacity-0 group-hover:opacity-100 transition-opacity rounded">
          <span className="material-symbols-outlined text-sm">
            <Plus />
          </span>
        </button>
      </div>
      <div className="space-y-1">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-muted-foreground text-xs mb-2">{subtitle}</p>
        <p className="font-headline text-lg">{price}</p>
      </div>
    </Link>
  );
}
