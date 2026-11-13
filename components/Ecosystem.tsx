import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import {
  chainstreets_logo,
  chainstreets_symbol,
  unipus_mark,
  unipus_mascot,
  videpay_mark,
  videpay_otter,
} from "@/utils/images";

const videpayFeatures = [
  "Settlement in seconds",
  "No wallet connection required",
  "Non-custodial by design",
  "Programmable money",
];

const chainStreetsFeatures = ["Plays in your browser", "An original, fictional world"];

const unipusFeatures = ["Reputation before launch", "A holding cap on every buyer", "Creator Club", "On Base"];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="border-t border-line py-20 md:py-28">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <h2 className="font-heading text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95] lg:col-span-7">
            Built by Videlabs
          </h2>
          <p className="max-w-[32rem] text-lg leading-relaxed text-haze lg:col-span-5">
            Videlabs is the parent company of Videpay, Chain Streets and Unipus: one moves money on-chain,
            one is a city that runs on its own chain, and one is where that city&apos;s creators launch fan
            tokens. All three are coming soon.
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
              <p className="inline-flex items-center gap-2 rounded-full bg-videpay-electric/15 px-3 py-1 text-sm text-[#9db0f7]">
                <span className="size-1.5 rounded-full bg-[#9db0f7]" aria-hidden />
                Coming soon
              </p>
              <p className="mt-4 text-sm text-[#9db0f7]">On-chain payment infrastructure</p>
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

          {/* Unipus, on its night ground with its iris and orchid, and the mascot used as drawn */}
          <a
            href="https://unipus.io"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col overflow-hidden rounded-[28px] bg-unipus-night p-7 ring-1 ring-white/10 transition-shadow hover:ring-unipus-iris/60 sm:p-10 lg:col-span-2"
          >
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_90%_at_85%_40%,color-mix(in_srgb,var(--color-unipus-iris)_28%,transparent),transparent_70%)]"
              aria-hidden
            />

            <div className="relative flex items-center justify-between gap-4">
              <span className="flex items-center gap-2">
                <Image src={unipus_mark} alt="" className="size-9" />
                <span className="font-unipus text-2xl font-semibold tracking-[-0.02em]">Unipus</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm text-white/70 transition-colors group-hover:text-white">
                unipus.io
                <ArrowUpRight size={16} aria-hidden />
              </span>
            </div>

            <div className="relative mt-10 grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="inline-flex items-center gap-2 rounded-full bg-unipus-orchid/15 px-3 py-1 text-sm text-unipus-orchid">
                  <span className="size-1.5 rounded-full bg-unipus-orchid" aria-hidden />
                  Coming soon
                </p>
                <p className="mt-4 text-sm text-unipus-lavender">Fan tokens and a Creator Club</p>
                <h3 className="mt-3 font-unipus font-extrabold text-[clamp(2.1rem,3.8vw,3.25rem)] leading-[0.98] tracking-[-0.03em]">
                  <span className="block">One person.</span>
                  <span className="block">One identity.</span>
                  <span className="block">No whales.</span>
                </h3>
                <p className="mt-5 max-w-[34rem] leading-relaxed text-white/75">
                  Where creators and communities from Chain Streets launch fan tokens their fans can trust. Every
                  buyer is one verified person, every holding is capped, and only players with reputation from the
                  game can launch. Beside it, a Creator Club where social creators do tasks for points.
                </p>
                <ul className="mt-7 flex flex-wrap gap-2 text-sm">
                  {unipusFeatures.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full border border-unipus-iris/50 px-3 py-1 text-unipus-lavender"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-[34rem] text-xs leading-relaxed text-white/50">
                  18+, and only where the law allows. Tokens are risky and can lose all their value. Nothing here
                  is financial advice.
                </p>
              </div>
              <Image
                src={unipus_mascot}
                alt=""
                sizes="(min-width: 1024px) 22rem, 60vw"
                className="pointer-events-none mx-auto w-[60%] max-w-[22rem] transition-transform duration-500 ease-out-quart group-hover:-translate-y-1.5 lg:col-span-5 lg:w-full"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
