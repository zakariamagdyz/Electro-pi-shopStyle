import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  price: string;
  isEditorial?: boolean;
}

export default function ProductCard({
  id,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  price,
  isEditorial = false,
}: ProductCardProps) {
  if (isEditorial) {
    return (
      <Link
        href={`/product/${id}`}
        className="bg-white p-4 rounded-lg custom-shadow group cursor-pointer block"
      >
        <div className="relative aspect-[3/4] overflow-hidden mb-6 rounded">
          <Image
            alt={imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            src={imageSrc}
          />
        </div>
        <h3 className="font-headline font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground font-body mt-1">
          {price}
        </p>
      </Link>
    );
  }

  return (
    <Link href={`/product/${id}`} className="group cursor-pointer block">
      <div className="aspect-[4/5] bg-accent mb-6 overflow-hidden relative rounded">
        <Image
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          alt={imageAlt}
          src={imageSrc}
        />
        <button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-md p-3 opacity-0 group-hover:opacity-100 transition-opacity rounded">
          <span className="material-symbols-outlined text-sm">add</span>
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
