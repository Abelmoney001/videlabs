import Image from "next/image";
import { the_cracked } from "@/utils/images";
import GradientButton from "./GradientButton";

export default function CrackedFounders() {
  return (
    <section className="bg-black text-white md:py-24 px-6 md:px-12 lg:px-24" id="podcast">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Left Content */}
        <div className="flex-1 max-w-xl">
          <h2 className="font-heading text-3xl md:text-5xl lg:text-[60px] font-black mb-6 leading-[1.1] tracking-tight">
            THE CRACKED {" "}
            <br className="hidden md:block" />
            FOUNDERS SHOW BY {" "}
            <br className="hidden md:block" />
            VIDELABS
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light mb-8 max-w-lg">
            Raw, unfiltered conversations with builders exploring the journey of creating, building, and scaling ideas and products in the evolving technology landscape.
          </p>
          <GradientButton children="Start Listening" showIcon={false} showArrow={true} />
        </div>

        {/* Right Content - Graphic */}
        <div className="flex-1 relative w-full flex justify-center lg:justify-end items-center min-h-[400px]">
          <div className="relative w-full max-w-[500px] aspect-4/3">
            <Image
              src={the_cracked}
              alt="The Cracked Founders Show Graphic showing a microphone and glowing smartphone"
              fill
              className="object-contain lg:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
