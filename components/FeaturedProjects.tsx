import Image from "next/image";
import { base, bitcoin, bnb, cross_chain, ethereum, polygon, solana } from "@/utils/images";

const chains = [
  // Ethereum and Base ship dark artwork, so they are shown as white silhouettes.
  { src: ethereum, alt: "Ethereum", silhouette: true },
  { src: base, alt: "Base", silhouette: true },
  { src: bitcoin, alt: "Bitcoin" },
  { src: bnb, alt: "BNB Chain" },
  { src: polygon, alt: "Polygon" },
  { src: solana, alt: "Solana" },
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="shell">
        <div className="overflow-hidden rounded-[28px] bg-pupil ring-1 ring-line">
          <div className="grid items-center gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-6 lg:p-16">
            <div>
              <p className="text-sm text-haze">Featured Projects</p>
              <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95]">
                Multichain
                <br />
                Development Lab
              </h2>
              <p className="mt-6 max-w-[28rem] text-lg leading-relaxed text-haze">
                Developing tools and integrations that enable seamless interaction across multiple blockchain
                ecosystems.
              </p>
            </div>

            <div className="relative mx-auto aspect-[511/488] w-full max-w-[460px]">
              <Image
                src={cross_chain}
                alt="Cross-chain protocol diagram: the Videlabs mark linked to Bitcoin, Ethereum, Solana, Polygon, BNB Chain and other networks"
                fill
                sizes="(min-width: 1024px) 460px, 90vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="border-t border-line px-7 py-8 sm:px-10 lg:px-16">
            <p className="text-sm text-dim">Chains we build on</p>
            <ul className="mt-5 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
              {chains.map((chain) => (
                <li key={chain.alt} className="flex h-10 items-center">
                  <Image
                    src={chain.src}
                    alt={chain.alt}
                    className={`h-full w-auto max-w-full object-contain object-left opacity-70 transition duration-300 hover:opacity-100 ${
                      chain.silhouette
                        ? "brightness-0 invert"
                        : "mix-blend-screen grayscale brightness-[1.8] hover:grayscale-0 hover:brightness-100"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
