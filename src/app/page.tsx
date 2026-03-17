import LoadingState from "@/components/features/LoadingState";
import ProductCard from "@/components/features/ProductCard";
import SidebarFilter from "@/components/features/SidebarFilter";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Footer from "@/components/layout/Footer";
import TopNavigation from "@/components/layout/TopNavigation";

export default function Home() {
  const products = [
    {
      id: "1",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1z1OXC_dbIt7Gbu76jNjSlZb_jusq5aissz0fhOdlKey9VJTFPwcrtxd68FNT07jUo8iEdgrsUaPk0AgXqt3nuOkWhiXQm4MWUSLBKlmVFMnPgYSFJBLv2D082vsdY-pPORLtiVl6AJojCCSIyOwEEiknhrouYNiQdzYBP0pXnNuBArTQjEhTLdYxj8R4Ap8yiv6cL1qQ5RdtDo3r8-YyRIeRuQ-5-XPfV_iNHeo5YHgSyXZhVovLkMTEfrVNafbDSqEHH_EnBLU",
      imageAlt: "Structured Wool Coat",
      title: "Structured Wool Coat",
      subtitle: "Dark Ash",
      price: "$420.00",
    },
    {
      id: "2",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrEDFhMBb2rL7dOqEDleMQ3S3FgTaJsu0XkNMzpC00-Id7OfVD7MbOThZuWU4CkhGE8SEa_zgG992EllIsyeW3biCYATIy3bMOPQN0bXoX2xKQ4BD53HYWurzqxo_VymqNNFayecIFD__PpJUFgaODasfmL9gEaqIRbFOhEwK_4rKKbBR9HrGwK23jmvsWaVKWHBHVrCFDA76QT2prRlkLP8txnVfb6gSz3lwNotRFMNmMxDVP300XbfQcYAj4HSRqiNtDmwF1glI",
      imageAlt: "Merino Mock Neck",
      title: "Merino Mock Neck",
      subtitle: "Oatmeal",
      price: "$145.00",
    },
    {
      id: "3",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBO-elbkEye0bqU4eNYCRRX6GehdfJYqZ5a1ScL4oHevgLwOf6uxDVyeBY0IpFdQNF7fXQLsNcFkVAdmgR_X5nbOEbjxw_dDF5Bvlp0jFA0Xnp657nFsy1Li1lqVFLqx4TDwddTZ5zK25En2baoPp2EsitdNPSNoFx4Ho64pr4bS4zZ2CrYz9PCWYFsCkT7vVJ2C6ffykf_LABYNvMbXxEaNOvl1V_3sYzne6xgp_8NskUENDcv1iVG5S0HfpE5fm8qHYBFylqs5vA",
      imageAlt: "Wide Leg Trouser",
      title: "Wide Leg Trouser",
      subtitle: "Midnight",
      price: "$210.00",
    },
    // Adding duplicates to fill out the 12 item grid like original
    {
      id: "4",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA1z1OXC_dbIt7Gbu76jNjSlZb_jusq5aissz0fhOdlKey9VJTFPwcrtxd68FNT07jUo8iEdgrsUaPk0AgXqt3nuOkWhiXQm4MWUSLBKlmVFMnPgYSFJBLv2D082vsdY-pPORLtiVl6AJojCCSIyOwEEiknhrouYNiQdzYBP0pXnNuBArTQjEhTLdYxj8R4Ap8yiv6cL1qQ5RdtDo3r8-YyRIeRuQ-5-XPfV_iNHeo5YHgSyXZhVovLkMTEfrVNafbDSqEHH_EnBLU",
      imageAlt: "Structured Wool Coat",
      title: "Structured Wool Coat",
      subtitle: "Dark Ash",
      price: "$420.00",
    },
    {
      id: "5",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrEDFhMBb2rL7dOqEDleMQ3S3FgTaJsu0XkNMzpC00-Id7OfVD7MbOThZuWU4CkhGE8SEa_zgG992EllIsyeW3biCYATIy3bMOPQN0bXoX2xKQ4BD53HYWurzqxo_VymqNNFayecIFD__PpJUFgaODasfmL9gEaqIRbFOhEwK_4rKKbBR9HrGwK23jmvsWaVKWHBHVrCFDA76QT2prRlkLP8txnVfb6gSz3lwNotRFMNmMxDVP300XbfQcYAj4HSRqiNtDmwF1glI",
      imageAlt: "Merino Mock Neck",
      title: "Merino Mock Neck",
      subtitle: "Oatmeal",
      price: "$145.00",
    },
    {
      id: "6",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBO-elbkEye0bqU4eNYCRRX6GehdfJYqZ5a1ScL4oHevgLwOf6uxDVyeBY0IpFdQNF7fXQLsNcFkVAdmgR_X5nbOEbjxw_dDF5Bvlp0jFA0Xnp657nFsy1Li1lqVFLqx4TDwddTZ5zK25En2baoPp2EsitdNPSNoFx4Ho64pr4bS4zZ2CrYz9PCWYFsCkT7vVJ2C6ffykf_LABYNvMbXxEaNOvl1V_3sYzne6xgp_8NskUENDcv1iVG5S0HfpE5fm8qHYBFylqs5vA",
      imageAlt: "Wide Leg Trouser",
      title: "Wide Leg Trouser",
      subtitle: "Midnight",
      price: "$210.00",
    },
  ];

  return (
    <div className="bg-background text-foreground antialiased min-h-screen">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        <header className="mb-12 lg:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-4xl lg:text-6xl font-headline font-extrabold tracking-tight text-foreground mb-2">
              The Collection
            </h1>
            <p className="text-muted-foreground font-body text-sm lg:text-base max-w-md">
              A curated selection of intentional pieces designed for the modern
              aesthetic.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-label text-muted-foreground">
            <span>24 Items</span>
            <div className="h-4 w-[1px] bg-border"></div>
            <button className="flex items-center gap-2 hover:text-foreground transition-colors">
              Sort by: Recommended
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          <SidebarFilter />

          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {products.map((product, i) => (
                <ProductCard key={`${product.id}-${i}`} {...product} />
              ))}

              <LoadingState />
            </div>

            <div className="mt-24 text-center">
              <button className="btn-gradient text-white py-4 px-12 rounded font-headline font-bold tracking-widest text-sm  custom-shadow active:scale-[0.98] transition-all">
                Load More
              </button>
            </div>
          </div>
        </div>
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
