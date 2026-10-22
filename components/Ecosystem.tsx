import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { chainstreets_logo, chainstreets_symbol, videpay_mark, videpay_otter } from "@/utils/images";

const videpayFeatures = [
  "Settlement in seconds",
  "No wallet connection required",
  "Non-custodial by design",
  "Programmable money",
];

const chainStreetsFeatures = ["Plays in your browser", "An original, fictional world"];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-heading text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95] lg:col-span-7">
            Built by Videlabs
          </h2>
          <p className="max-w-[32rem] text-lg leading-relaxed text-haze lg:col-span-5">
            Videlabs is the parent company of Videpay and Chain Streets: one moves money on-chain,
            the other is a city that runs on its own chain.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Videpay, in its own indigo and Bricolage voice */}
          <a
            href="https://videpay.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[36rem] flex-col overflow-hidden rounded-[28px] bg-videpay-deep p-7 ring-1 ring-white/10 transition-shadow hover:ring-videpay-electric/60 sm:p-10"
          >
            <div className="relative flex items-center justify-between gap-4">
              <span className="flex items-center gap-2.5">
                <Image src={videpay_mark} alt="" className="size-8" />
                <span className="font-videpay text-2xl font-semibold tracking-[-0.02em]">Videpay</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white">
                videpay.io
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </div>

            {/* Videpay's otter: it keeps buyer and merchant linked until a payment settles. */}
            <Image
              src={videpay_otter}
              alt=""
              sizes="(min-width: 640px) 16rem, 52vw"
              className="pointer-events-none mt-6 ml-auto w-[52%] max-w-[16rem] transition-transform duration-500 ease-out-quart group-hover:-translate-y-1.5"
            />

            <div className="relative mt-auto pt-8">
              <p className="text-sm text-[#9db0f7]">On-chain payment infrastructure</p>
              <h3 className="mt-3 max-w-[16ch] font-videpay font-semibold text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.02] tracking-[-0.03em]">
                <span className="block">Any wallet.</span>
                <span className="block">Any exchange.</span>
                <span className="block">One settlement.</span>
              </h3>
              <p className="mt-5 max-w-[30rem] leading-relaxed text-white/75">
                The non-custodial payment layer for businesses that run on blockchain money — checkout,
                subscriptions, escrow, and payouts that settle straight to your wallet in seconds.
              </p>
              <ul className="mt-7 grid gap-x-6 gap-y-2.5 text-sm text-white/85 sm:grid-cols-2">
                {videpayFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={15} className="shrink-0 text-videpay-electric" aria-hidden />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </a>

          {/* Chain Streets, on its solid ink ground as its brand rules require */}
          <a
            href="https://chainstreets.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-[36rem] flex-col overflow-hidden rounded-[28px] bg-streets-ink p-7 ring-1 ring-white/10 transition-shadow hover:ring-streets-teal/60 sm:p-10"
          >
            <Image
              src={chainstreets_symbol}
              alt=""
              className="pointer-events-none absolute top-24 right-8 w-[26%] max-w-36 transition-transform duration-500 ease-out-quart group-hover:-translate-y-1.5 sm:right-10"
            />

            <div className="relative flex items-center justify-between gap-4">
              <Image src={chainstreets_logo} alt="Chain Streets" className="h-6 w-auto sm:h-7" />
              <span className="flex items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white">
                chainstreets.io
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </div>

            <div className="relative mt-auto max-w-[30rem] pt-56 sm:pt-48">
              <p className="inline-flex items-center gap-2 rounded-full bg-streets-yellow/12 px-3 py-1 text-sm text-streets-yellow">
                <span className="size-1.5 rounded-full bg-streets-yellow" aria-hidden />
                Coming soon
              </p>
              <h3 className="mt-4 font-streets font-semibold text-[clamp(2.2rem,3.8vw,3.25rem)] uppercase leading-none tracking-[0.01em]">
                Live the chain.
              </h3>
              <p className="mt-5 leading-relaxed text-white/75">
                A life sim and city builder in Hashport, a bright harbour city of the future that runs on its own
                chain. Work, build, trade, make friends and vote your way up.
              </p>
              <ul className="mt-7 flex flex-wrap gap-2 text-sm">
                {chainStreetsFeatures.map((feature) => (
                  <li key={feature} className="rounded-full border border-streets-teal/40 px-3 py-1 text-streets-teal">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
