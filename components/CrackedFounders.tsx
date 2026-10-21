import Image from "next/image";
import { the_cracked } from "@/utils/images";
import GradientButton from "./GradientButton";

export default function CrackedFounders() {
  return (
    <section id="podcast" className="py-20 md:py-28">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Show artwork, framed in the same spectrum edge as the Videlabs mark */}
        <div className="spectrum-edge rounded-[32px] [--edge:3px] lg:col-span-6">
          <div className="relative m-[3px] aspect-square overflow-hidden rounded-[29px] bg-pupil">
            <Image
              src={the_cracked}
              alt="The Cracked Founders Show artwork: a studio microphone, earbuds and a phone showing a waveform"
              fill
              sizes="(min-width: 1024px) 560px, 90vw"
              className="object-contain p-[9%]"
            />
          </div>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-sm text-haze">Podcast</p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,4.6vw,4rem)] leading-[0.95]">
            The Cracked Founders Show by Videlabs
          </h2>
          <p className="mt-6 max-w-[30rem] text-lg leading-relaxed text-haze">
            Raw, unfiltered conversations with builders exploring the journey of creating, building, and scaling
            ideas and products in the evolving technology landscape.
          </p>
          <GradientButton showIcon={false} showArrow className="mt-9 h-12 px-7">
            Start Listening
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
