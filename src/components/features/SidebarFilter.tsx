import { Checkbox } from "@/components/ui/checkbox";

export default function SidebarFilter() {
  return (
    <aside className="w-full md:w-64 flex-shrink-0 space-y-12">
      <section>
        <h3 className="font-headline text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Categories
        </h3>
        <ul className="space-y-4">
          <li>
            <a
              className="text-sm font-medium hover:text-primary transition-colors"
              href="#"
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Minimalist Essentials
            </a>
          </li>
          <li>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Outerwear
            </a>
          </li>
          <li>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Accessories
            </a>
          </li>
          <li>
            <a
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              href="#"
            >
              Footwear
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="font-headline text-xs uppercase tracking-widest text-muted-foreground mb-6">
          Price Range
        </h3>
        <div className="space-y-4">
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox className="rounded-none border-border text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground">
              $0 — $100
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox className="rounded-none border-border text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white" />
            <span className="text-sm text-muted-foreground group-hover:text-foreground">
              $100 — $500
            </span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer group">
            <Checkbox
              defaultChecked
              className="rounded-none border-border text-primary data-[state=checked]:bg-primary data-[state=checked]:text-white"
            />
            <span className="text-sm text-muted-foreground group-hover:text-foreground">
              $500+
            </span>
          </label>
        </div>
      </section>
    </aside>
  );
}
