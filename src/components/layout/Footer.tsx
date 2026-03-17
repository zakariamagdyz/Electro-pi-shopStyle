import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-24 pb-32 px-6 mt-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 text-center md:text-left">
          <span className="font-headline text-2xl font-extrabold tracking-tight block mb-6">
            ShopStyle
          </span>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed mx-auto md:mx-0">
            Curating timeless pieces for the modern aesthetic. Our mission is to
            simplify luxury through intentional design and sustainable
            craftsmanship.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-headline text-xs uppercase tracking-widest text-foreground mb-6">
            Support
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <Link className="hover:text-foreground transition-colors" href="#">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition-colors" href="#">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition-colors" href="#">
                Size Guide
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h4 className="font-headline text-xs uppercase tracking-widest text-foreground mb-6">
            Connect
          </h4>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>
              <Link className="hover:text-foreground transition-colors" href="#">
                Instagram
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition-colors" href="#">
                Newsletter
              </Link>
            </li>
            <li>
              <Link className="hover:text-foreground transition-colors" href="#">
                Journal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
