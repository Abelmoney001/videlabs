import Image from "next/image";
import { cross_chain } from "@/utils/images";
import GradientButton from "./GradientButton";

export default function FeaturedProjects() {
  return (
    <section className="bg-black py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto bg-white/5 rounded-[40px] border border-white/5 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden relative shadow-2xl">
        {/* Left Content */}
        <div className="flex-1 relative z-10 max-w-md">
          <p className="text-xs font-semibold tracking-widest text-gray-400 mb-4 uppercase">
            Featured Projects
          </p>
          <h2 className="font-heading text-3xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-white uppercase">
            Multichain
            <br />
            Development Lab
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
            Developing tools and integrations that enable seamless interaction across multiple blockchain ecosystems.
          </p>
          
          {/* <GradientButton children="Lead More" showIcon={false} showArrow={true} /> */}
        </div>

        {/* Right Content - Circle Graphic */}
        <div className="flex-1 relative w-full flex justify-center items-center min-h-[300px]">
          <div className="relative w-full max-w-[500px] aspect-square">
            <Image
              src={cross_chain}
              alt="Cross Chain Link Protocol Graphic"
              fill
              className="object-contain scale-110 md:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
