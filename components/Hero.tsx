import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { chainstreets_logo, videpay_mark } from "@/utils/images";
import GradientButton from "./GradientButton";
import HeroEye from "./HeroEye";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-18">
      <div className="pointer-events-none absolute -z-10 top-16 -right-[22%] w-[100%] max-w-[600px] sm:-right-[12%] sm:max-w-[680px] lg:top-1/2 lg:-right-[6%] lg:w-[64vw] lg:max-w-[1040px] lg:-translate-y-[52%]">
        <HeroEye className="aspect-square w-full" />
      </div>

      <div className="shell flex min-h-[calc(100svh-4.5rem-4.75rem)] flex-col justify-end pt-[min(92vw,24rem)] pb-14 sm:pt-[min(66vw,28rem)] lg:justify-center lg:py-20">
        <h1 className="font-heading text-[clamp(2.6rem,6.4vw,6.25rem)] leading-[0.94] tracking-[-0.005em]">
          <span className="hero-line block type-outline" style={{ animationDelay: "450ms" }}>
            Ideas.
          </span>
          <span className="hero-line block type-hatch" style={{ animationDelay: "600ms" }}>
            Architecture.
          </span>
          <span className="hero-line block max-w-[11ch]" style={{ animationDelay: "750ms" }}>
            Decentralized Systems.
          </span>
        </h1>

        <p
          className="hero-fade mt-8 max-w-[33rem] text-base leading-relaxed text-haze sm:text-lg"
          style={{ animationDelay: "1000ms" }}
        >
          VIDELABS is a RESEARCH AND DEVELOPMENT Lab building next-generation
          infrastructure, protocols, and developer tools on-chain.
        </p>

        <div className="hero-fade mt-10 flex flex-wrap gap-3" style={{ animationDelay: "1100ms" }}>
          <GradientButton href="#contact" showIcon={false} showArrow className="h-12 px-7">
            Contact Us
          </GradientButton>
          <GradientButton href="#ecosystem" variant="outline" showIcon={false} className="h-12 px-7">
            Explore Our Work
          </GradientButton>
        </div>
      </div>

      <div className="border-t border-line bg-night/70 backdrop-blur-sm">
        <div className="shell flex min-h-19 flex-wrap items-center gap-x-10 gap-y-3 py-5">
          <p className="text-sm text-dim">Parent company of</p>
          <ul className="flex flex-wrap items-center gap-x-10 gap-y-3">
            <li>
              <a
                href="https://videpay.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 text-paper/90 transition-colors hover:text-paper"
              >
                <Image src={videpay_mark} alt="" className="size-6" />
                <span className="font-videpay text-lg font-semibold tracking-[-0.02em]">Videpay</span>
                <ArrowUpRight size={15} aria-hidden className="text-dim transition-colors group-hover:text-paper" />
              </a>
            </li>
            <li>
              <a
                href="https://chainstreets.io"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 opacity-90 transition-opacity hover:opacity-100"
              >
                <Image src={chainstreets_logo} alt="Chain Streets" className="h-5 w-auto" />
                <ArrowUpRight size={15} aria-hidden className="text-dim transition-colors group-hover:text-paper" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
