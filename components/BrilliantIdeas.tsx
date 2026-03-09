import Image from "next/image";
import { brilliant_idea } from "@/utils/images";
import GradientButton from "./GradientButton";
import Link from "next/link";

export default function BrilliantIdeas() {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="font-heading text-3xl md:text-6xl font-black mb-6 leading-[1.15] tracking-tight">
            BRILLIANT
            <br className="hidden md:block" />
            IDEAS, ONCHAIN
            <br className="hidden md:block" />
            TOMORROW
          </h2>
          <p className="text-gray-300 text-sm md:text-lg leading-relaxed font-light mb-8 max-w-md">
            Videlabs is a hub for builders creating the next wave of decentralized technology.
            From blockchain infrastructure to intelligent on-chain systems, we are shaping the future of Web3.
          </p>

          <Link href="#contact">
            <GradientButton className="h-full py-2.5" />
          </Link>
        </div>

        {/* Right Content - Stats and Image */}
        <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-8 relative w-full">
          {/* Stats */}
          {/* <div className="flex flex-row sm:flex-col gap-8 sm:gap-16 sm:absolute sm:left-0 sm:z-10 bg-[#070514]/80 p-4 rounded-xl backdrop-blur-sm">
            <div>
              <h3 className="font-heading text-2xl font-black mb-1">95%</h3>
              <p className="text-xs text-gray-400">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl font-black mb-1">70%</h3>
              <p className="text-xs text-gray-400">Cost Savings</p>
            </div>
          </div> */}

          {/* Main graphic */}
          <div className="relative w-full max-w-[600px] aspect-square ml-auto">
            <Image
              src={brilliant_idea}
              alt="Brilliant Ideas Videlabs logo graphic"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
