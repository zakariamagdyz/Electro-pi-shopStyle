import Link from "next/link";

export default function BottomNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 glass-nav border-t border-border/10 px-4 py-3 md:hidden flex justify-between items-center z-50">
      <Link scroll href="/" className="flex flex-col items-center gap-1">
        <span
          className="material-symbols-outlined text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          home
        </span>
        <span className="text-[10px] uppercase tracking-tighter font-bold text-primary">
          Home
        </span>
      </Link>
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <span className="material-symbols-outlined">search</span>
        <span className="text-[10px] uppercase tracking-tighter">
          Categories
        </span>
      </button>
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <span className="material-symbols-outlined">favorite</span>
        <span className="text-[10px] uppercase tracking-tighter">Wishlist</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-muted-foreground">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span className="text-[10px] uppercase tracking-tighter">Cart</span>
      </button>
    </nav>
  );
}
