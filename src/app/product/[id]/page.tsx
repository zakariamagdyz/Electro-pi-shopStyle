import ProductCard from "@/components/features/ProductCard";
import BottomNavigation from "@/components/layout/BottomNavigation";
import Footer from "@/components/layout/Footer";
import TopNavigation from "@/components/layout/TopNavigation";
import Link from "next/link";
import Image from "next/image";

export default function ProductDetailsPage() {
  const relatedProducts = [
    {
      id: "1",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCrEDFhMBb2rL7dOqEDleMQ3S3FgTaJsu0XkNMzpC00-Id7OfVD7MbOThZuWU4CkhGE8SEa_zgG992EllIsyeW3biCYATIy3bMOPQN0bXoX2xKQ4BD53HYWurzqxo_VymqNNFayecIFD__PpJUFgaODasfmL9gEaqIRbFOhEwK_4rKKbBR9HrGwK23jmvsWaVKWHBHVrCFDA76QT2prRlkLP8txnVfb6gSz3lwNotRFMNmMxDVP300XbfQcYAj4HSRqiNtDmwF1glI",
      imageAlt: "Merino Mock Neck",
      title: "Merino Mock Neck",
      subtitle: "Oatmeal",
      price: "$145.00",
    },
    {
      id: "2",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBO-elbkEye0bqU4eNYCRRX6GehdfJYqZ5a1ScL4oHevgLwOf6uxDVyeBY0IpFdQNF7fXQLsNcFkVAdmgR_X5nbOEbjxw_dDF5Bvlp0jFA0Xnp657nFsy1Li1lqVFLqx4TDwddTZ5zK25En2baoPp2EsitdNPSNoFx4Ho64pr4bS4zZ2CrYz9PCWYFsCkT7vVJ2C6ffykf_LABYNvMbXxEaNOvl1V_3sYzne6xgp_8NskUENDcv1iVG5S0HfpE5fm8qHYBFylqs5vA",
      imageAlt: "Wide Leg Trouser",
      title: "Wide Leg Trouser",
      subtitle: "Midnight",
      price: "$210.00",
    },
    {
      id: "3",
      imageSrc:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC__A5AqLWLmAZitkJpl1BP6vlZNy5AA5fgtjTYaPnCv8dPQNO7DqWscZ9sFoXELg3Zf6xJIdCl_EjqwCBXx8bGOCrUBCLxJ-VgpWudYiLEZW0nEEVLFsHNrJo-KVri6utY1g1NNNtcF6-V9KnKB50OKqC0TSWaYbqRPRo7xzwlPWD2BoRSFm4Oh0bKkKm-2MCvPAURXikTT-kRhnqVbpfCOGbsp41CxsF6eQvafopHNVXV3M04Lp_e72gmO5StURR6SJwi7eHDssM",
      imageAlt: "Structured Boot",
      title: "Structured Boot",
      subtitle: "Onyx",
      price: "$350.00",
    },
  ];

  return (
    <div className="bg-background text-foreground antialiased min-h-screen bg-secondary-l">
      <TopNavigation />

      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 lg:py-16">
        {/* Breadcrumb / Back Navigation */}
        <div className="mb-12">
          <Link
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            href="/"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            <span className="font-label font-medium text-sm">
              Back to Products
            </span>
            <div className="h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300"></div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Pane: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative aspect-[4/5] w-full bg-accent rounded-lg overflow-hidden group">
              <Image
                fill
                alt="Main product view"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1z1OXC_dbIt7Gbu76jNjSlZb_jusq5aissz0fhOdlKey9VJTFPwcrtxd68FNT07jUo8iEdgrsUaPk0AgXqt3nuOkWhiXQm4MWUSLBKlmVFMnPgYSFJBLv2D082vsdY-pPORLtiVl6AJojCCSIyOwEEiknhrouYNiQdzYBP0pXnNuBArTQjEhTLdYxj8R4Ap8yiv6cL1qQ5RdtDo3r8-YyRIeRuQ-5-XPfV_iNHeo5YHgSyXZhVovLkMTEfrVNafbDSqEHH_EnBLU"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  fill
                  alt="Thumbnail 1"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFrCb9Wi-JFyGB_SdXgsgUnOuKJmwjXcN3PWSAfbZZgXULpt57BHZ6Hf2iD9qHDnKQrM1fk-nrsZAed0hxEY6nXAk-OTs78mns4XSBBWnAnSfLMU8J6-IKwsMjZe5t0gYCPrkZgk1tKg35w_IrJYKhzKAhOHs8ZkwVFYfC6-HcFAwTmTzyymTsk06fWHaS-biKHrsIUtcnvyDZVt1HysBTc8ApF8zVRQT25TggRR5BNszvV3d_J3VXplqNiEgyeD1aL5N56SRgIOw"
                />
              </div>
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  fill
                  alt="Thumbnail 2"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFZcuW8u_0xoahL8cZfhNCj_k77rC8ZVYFYvRXui0Mf6FwYjA1IyVUUsmQkvvGDB1rlPLT6X4sk9myBt1-QXT82AsRQbw7A6bhisaqd_i_CbxK-FjCUlMTgTy1eoSaEzuIAvCIlMuMkINfDu8hIQnKnXLJX0YLP6g5hsQQwGsK_evzGebq-MMcMCqxTvHAwxUpzSmYk1aePp9_h7rAYY-iYU_9BcW4_FkkBKC_uxey2VzKnUNX8sZ4ovIpRm5TEiofZQF3blYW9k0"
                />
              </div>
              <div className="relative aspect-square bg-secondary rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                <Image
                  fill
                  alt="Thumbnail 3"
                  className="object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFYA9DckOtygWr_sIGUDghiwZOKfkRwrqjS4NtU6uLNegQcmpNEnuskJu_mpLHlxZrcsSLtaK1Ek8HwIDPXSjDnYoUiHm3pGKyHNyOG6aJQzblPg-cljAvo_jdLT-a4crWcWHVDd8vRjYlCeA9UTOeIag2_d2Eyqo9gYwWBKbcBDJ58fr7UwEXFjp85ym0SMpedoapWfxlT-69FP4f9p-CeNRo1Yqkx-kI1SWduB8np0jOM87ptRMWkPyhbovYLX9Lk5Kih-C-uyM"
                />
              </div>
              <div className="aspect-square bg-accent rounded-lg flex items-center justify-center text-muted-foreground font-headline font-bold text-xl">
                +3
              </div>
            </div>
          </div>

          {/* Right Pane: Product Details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-secondary text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-full">
                Essentials
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-headline font-extrabold text-foreground mb-6 leading-[1.1]">
              Minimalist Sculpted Wool Overcoat
            </h1>
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-body font-light text-foreground">
                $420.00
              </span>
              <span className="text-muted-foreground line-through text-lg opacity-50">
                $580.00
              </span>
            </div>
            <div className="h-[1px] w-full bg-border/20 mb-8"></div>
            <div className="space-y-6 mb-12">
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                A definitive study in form and function. This sculpted overcoat
                is crafted from ethically sourced virgin wool, featuring a clean
                hidden-button placket and exaggerated structural lapels.
                Designed for the modern curator who values quiet luxury.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    check_circle
                  </span>
                  <span>100% Virgin Italian Wool</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    check_circle
                  </span>
                  <span>Sustainably Manufactured in Milan</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="material-symbols-outlined text-[18px] text-tertiary">
                    check_circle
                  </span>
                  <span>Lifetime Repair Warranty</span>
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
                  <button className="py-3 text-xs font-semibold border border-border/30 hover:bg-secondary transition-colors rounded">
                    XS
                  </button>
                  <button className="py-3 text-xs font-semibold bg-primary text-white rounded">
                    S
                  </button>
                  <button className="py-3 text-xs font-semibold border border-border/30 hover:bg-secondary transition-colors rounded">
                    M
                  </button>
                  <button className="py-3 text-xs font-semibold border border-border/30 hover:bg-secondary transition-colors rounded">
                    L
                  </button>
                </div>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="flex flex-col gap-4">
              <button className="btn-gradient text-white py-5 px-8 rounded font-headline font-bold text-lg tracking-wide custom-shadow active:scale-[0.98] transition-all">
                Add to Cart
              </button>
              <button className="flex items-center justify-center gap-2 py-4 px-8 border border-border/40 hover:bg-accent transition-colors rounded font-label text-sm font-semibold">
                <span className="material-symbols-outlined text-[20px]">
                  favorite
                </span>
                Add to Wishlist
              </button>
            </div>

            {/* Shipping / Returns Info */}
            <div className="mt-12 p-6 bg-white rounded-xl border border-border/10">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary">
                  local_shipping
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground mb-1">
                    Complimentary Shipping
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Arrives in 3-5 business days. Returns accepted within 30
                    days of delivery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Curated Carousel (Editorial Section) */}
        <section className="mt-24 lg:mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-tertiary mb-2 block">
                Curation
              </span>
              <h2 className="text-3xl lg:text-4xl font-headline font-extrabold">
                Style With
              </h2>
            </div>
            <div className="text-4xl font-headline font-light text-tertiary opacity-30">
              01 / 05
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p, i) => (
              <ProductCard key={`${p.id}-${i}`} {...p} isEditorial />
            ))}
          </div>
        </section>
      </main>

      <BottomNavigation />
      <Footer />
    </div>
  );
}
