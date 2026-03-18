import RegisterForm from "@/components/features/RegisterForm";
import AuthLayout from "@/components/layout/AuthLayout";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Join ShopStyle to unlock an exclusive curation of modern fashion and essential lifestyle products.",
};

export default function RegistrationPage() {
  const heroOverlay = (
    <div className="absolute inset-0 p-12 flex flex-col justify-between z-20">
      <div className="max-w-md mt-auto">
        <h1 className="font-headline text-[3.5rem] leading-none text-white mb-6 font-extrabold tracking-tighter">
          Define Your <br />
          Signature.
        </h1>
        <p className="text-white font-body leading-relaxed opacity-90">
          Join an exclusive community of curators and tastemakers. Experience
          fashion through a lens of intentionality and minimalist luxury.
        </p>
        <div className="mt-12 flex gap-4 items-center">
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
              <Image
                className="object-cover"
                fill
                alt="User avatar 1"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIEaVzzLVJHTldm75QfNmcvH2qXljharAQa67li6-HfiWw6XCJyDG4aSBQ0RJVRbkymfbsuFhMtDYioi3_fOK6r_E7-NdW_RI5U2K45D9J_O_k18qZPcjrYGjBVF9-3mLjS8E_Y0B_KDqWHbzC1Zi0dkMb-dgHdoSBC9Neh5AxYY54cEA8jZP-u3FD9xvTKSYOysO9A97_Y9tHMG6mLvVSDPz_qDt6WMJin6_M6dlpcUGNcNcarw6WtvwO_tuIfa10K_r0KOsRHGQ"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
              <Image
                className="object-cover"
                fill
                alt="User avatar 2"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_irzq3lq0D2YxrnEznjBYWe49DZHLMQEUtaemFLug_Rnu132M2MEqqRSSzlOd4TB76C-Pv0uAkJO69zPqefdH1pZcU52Py0zBTN62kGSI9smnHtZwZ72YJceSpHZ5xk22PEyHpCYbojjPtCRPZkILMGq0UaXZGIF7VxYDv-hhzhckq1l2oomNa1-IdTZNC1_t07bS2YaWr6xtf-k7U0ETfygUn-KRnN9R4bQejqA4qH-Hv3WXH8EWUTJVf6rXK4tV5-RMXpzzdxY"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-secondary flex items-center justify-center">
              <span className="text-[10px] font-bold text-foreground">
                12k+
              </span>
            </div>
          </div>
          <span className="text-sm text-white/80 font-medium">
            Curators already joined
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Enter your details to begin your journey."
      heroImageAlt="High-end fashion editorial"
      heroImageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDm9O1hn8LStkAS5uvx4oG2Hv_U8wtMnagyttbE53ImkXmE1T-qh37EzHzT6uOH2FJcMwW4IiJDBW8Qg5Pzj-CDeOMgp5FMcgL-j0SYpTVTmcmI6dAZ1vtV3Etnc-2732BKLmpj_mZbtNQPFbPH8BCvydKRe8V1MV3JzLh_D0RiWo5saDSs_-ThjQi8Yc7bI7JC6z7ZuGrAp_wjw3MondZjSz6pigDsw-1-pXAhHntgTM5MbumCft7HNpVVOKxGV3AFz0rCKXLwadw"
      heroOverlay={heroOverlay}
    >
      <RegisterForm />

      <p className="text-center text-muted-foreground text-sm pt-4">
        Already a member?
        <Link
          href="/login"
          className="text-primary font-bold hover:underline ml-1"
        >
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
