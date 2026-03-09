import Image from "next/image";
import { base, bitcoin, bnb, ethereum, polygon, solana } from "@/utils/images";

export default function LogoMarquee() {
  const logos = [
    { src: ethereum, alt: "Ethereum Logo" },
    { src: base, alt: "Base Logo" },
    { src: bitcoin, alt: "Bitcoin Logo" },
    { src: bnb, alt: "BNB Logo" },
    { src: polygon, alt: "Polygon Logo" },
    { src: solana, alt: "Solana Logo" },
  ];

  // Duplicate the logos array so that the marquee loops seamlessly
  const doubledLogos = [...logos, ...logos];

  return (
    <section className="bg-black py-8 overflow-hidden flex">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] items-center">
        {doubledLogos.map((logo, i) => (
          <div
            key={i}
            className="shrink-0 flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer mx-12 lg:mx-24"
          >
            <div className="relative h-12 w-auto flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
