import AuthLayout from "@/components/layout/AuthLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  const heroOverlay = (
    <div className="absolute bottom-12 left-12 right-12 text-white">
      <p className="font-headline text-[2.5rem] leading-[2.75rem] font-bold tracking-tight mb-2">
        The Digital Curator
      </p>
      <p className="font-body text-sm opacity-90 leading-relaxed max-w-xs">
        Experience a curated selection of contemporary essentials designed for
        the discerning individual.
      </p>
    </div>
  );

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Please enter your details to access your account."
      heroImageAlt="Modern man in minimalist high-end knitwear"
      heroImageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9O1hn8LStkAS5uvx4oG2Hv_U8wtMnagyttbE53ImkXmE1T-qh37EzHzT6uOH2FJcMwW4IiJDBW8Qg5Pzj-CDeOMgp5FMcgL-j0SYpTVTmcmI6dAZ1vtV3Etnc-2732BKLmpj_mZbtNQPFbPH8BCvydKRe8V1MV3JzLh_D0RiWo5saDSs_-ThjQi8Yc7bI7JC6z7ZuGrAp_wjw3MondZjSz6pigDsw-1-pXAhHntgTM5MbumCft7HNpVVOKxGV3AFz0rCKXLwadw"
      heroOverlay={heroOverlay}
    >
      <form className="space-y-8">
        <div className="space-y-2 group input-container">
          <Label
            htmlFor="email"
            className="block font-label text-sm text-muted-foreground font-normal"
          >
            Username
          </Label>
          <div className="relative">
            <Input id="email" placeholder="Username" type="text" />
            <div className="input-underline"></div>
          </div>
        </div>

        <div className="space-y-2 group input-container">
          <div className="flex justify-between items-center">
            <Label
              htmlFor="password"
              className="block font-label text-sm text-muted-foreground font-normal"
            >
              Password
            </Label>
            <Link
              className="font-label text-xs text-primary hover:underline transition-all"
              href="#"
            >
              Forgot Password
            </Link>
          </div>
          <div className="relative">
            <Input id="password" placeholder="••••••••" type="password" />
            <div className="input-underline"></div>
          </div>
        </div>

        <div className="pt-4 space-y-6">
          <button
            className="w-full btn-gradient py-5 text-white font-label font-medium rounded-lg transition-all hover:opacity-95 active:scale-[0.98] soft-shadow"
            type="button"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="mt-12 text-center">
        <p className="font-body text-sm text-muted-foreground">
          Don&apos;t have an account?
          <Link
            className="text-foreground font-semibold hover:text-primary transition-colors ml-1 underline decoration-primary/30 underline-offset-4"
            href="/register"
          >
            Create an Account
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}
