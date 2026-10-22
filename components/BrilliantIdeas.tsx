import GradientButton from "./GradientButton";

export default function BrilliantIdeas() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="shell grid gap-10 lg:grid-cols-12 lg:items-end">
        <h2 className="font-heading text-[clamp(2.4rem,6vw,5.5rem)] leading-[0.95] lg:col-span-7">
          Brilliant ideas,
          <br />
          onchain tomorrow
        </h2>

        <div className="lg:col-span-5 lg:pb-2">
          <p className="max-w-[30rem] text-lg leading-relaxed text-haze md:text-xl md:leading-relaxed">
            Videlabs is a hub for builders creating the next wave of decentralized technology.
            From blockchain infrastructure to intelligent on-chain systems, we are shaping the future of Web3.
          </p>
          <GradientButton href="#contact" variant="outline" className="mt-8" />
        </div>
      </div>
    </section>
  );
}
