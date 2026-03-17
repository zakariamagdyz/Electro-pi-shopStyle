import Link from "next/link";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function TopNavigation() {
  return (
    <nav className="glass-nav sticky top-0 z-50 px-6 lg:px-12 py-4 flex items-center justify-between">
      <div className="flex items-center gap-8 md:gap-12">
        <Link href="/">
          <span className="font-headline text-2xl font-extrabold tracking-tight text-foreground">
            ShopStyle
          </span>
        </Link>
        <div className="hidden md:flex relative items-center group input-container">
          <span className="material-symbols-outlined absolute left-3 text-muted-foreground z-10 text-[20px]">
            search
          </span>
          <Input
            className="bg-accent border-none pl-10 pr-4 py-2 w-64 text-sm focus-visible:ring-0 rounded-none placeholder:text-muted-foreground/50 shadow-none"
            placeholder="Search curated collection..."
            type="text"
          />
          <div className="input-focus-line absolute inset-0 pointer-events-none"></div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 hover:opacity-70 transition-opacity text-foreground">
          <span className="material-symbols-outlined">shopping_cart</span>
        </button>
        <div className="flex items-center justify-center h-8 w-8 rounded-full overflow-hidden bg-muted cursor-pointer hover:opacity-80 transition-opacity">
          <Image
            alt="User profile"
            className="w-full h-full object-cover"
            width={32}
            height={32}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCda9KoyvLW6zE56hrC57s3exS7dmclqRpAXWuT_yxJS0GuSORBqEE3JKYKLpFtMTV81jjs46qAM4UXMLuVGQlwZCeb9Ibtg1BkyLuZyz86Rlq8QHALwkuMkf7F2T1thGpMhajUQADYb0nKt-WJ6vGDI6KHjt6WU8D639OTr2EfEJkAxNxX7ZyXr31-7sRHGTxGduzzynvLEfzIMHsHQvIvhLSKft-m0T_Oy4SQrueZFEyaP5jPBZpAnjpMMvZyYLrAecnYPEQTM4U"
          />
        </div>
      </div>
    </nav>
  );
}
