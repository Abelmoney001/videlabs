import Image from "next/image";
import { hero_bg } from "@/utils/images";
import { ArrowUpRight } from "lucide-react";
import GradientButton from "./GradientButton";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20 bg-background text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full">
        <Image
          src={hero_bg}
          alt="Glowing purple background swoop"
          fill
          className="object-cover w-full object-center md:object-contain relative top-20 md:top-32 -scale-y-100"
          quality={100}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[800px] mt-10 md:mt-1">
        <h1 className="font-heading text-[40px] md:text-[60px] lg:text-[76px] font-black leading-[1.05] tracking-tight mb-6">
          BUILDING THE
          <br />
          FOUNDATION WEB3
        </h1>

        <p className="text-base md:text-lg text-gray-200 max-w-[600px] mb-10 leading-relaxed font-light">
          VIDELABS is an R&D lab building next-generation infrastructure,
          protocols, and developer tools for a decentralized future.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          {/* <div className="rounded-full p-px bg-[linear-gradient(to_right,#FEC924,#FE5163)] transition-shadow cursor-pointer">
            <button className="bg-[linear-gradient(to_right,#9910D7,#007AD3)] h-full w-full px-8 py-3.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all">
              Explore Our Work
            </button>
          </div> */}
          <GradientButton children="Explore Our Work" showIcon={false} />

          <div className="rounded-full p-px bg-[linear-gradient(to_right,#FFE500,#2EC64F,#3A6CFD,#FF28B7)] transition-shadow cursor-pointer">
            <button className="group bg-black relative flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-colors h-full w-full">
              Contact Us
              <ArrowUpRight
                color="#fff"
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
