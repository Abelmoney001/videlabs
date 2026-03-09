import Image from "next/image";
import { app_maintenance, blockchain_architecture, blockchain_dev, business_consulting, custom_software_dev } from "@/utils/images";

export default function BlockchainArchitecture() {
  const cards = [
    {
      title: "Custom Software Development",
      description:
        "Identifying the core problems decentralized systems can solve and defining the right blockchain architecture to address them.",
      icon: custom_software_dev,
    },
    {
      title: "Business Consulting",
      description:
        "Transforming innovative concepts into practical blockchain designs, from protocol logic to smart contract frameworks.",
      icon: business_consulting,
    },
    {
      title: "Blockchain Development Services",
      description:
        "Integrating solutions within the broader decentralized ecosystem, enabling interoperability across networks and applications.",
      icon: blockchain_dev,
    },
    {
      title: "Application Maintenance & Support",
      description:
        "Solving complex technical challenges to build secure, scalable, and efficient blockchain infrastructures.",
      icon: app_maintenance,
    },
  ];

  return (
    <section className="relative bg-black text-white md:py-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen flex flex-col justify-center" id="about">
      {/* Background Graphic */}
      <div className="absolute right-[-10%] sm:right-0 bottom-40 w-[90%] max-w-[810px] aspect-square z-0 opacity-60 mix-blend-screen pointer-events-none">
        <Image
          src={blockchain_architecture}
          alt="Abstract 3D sphere shapes background graphic"
          fill
          className="object-contain object-bottom-right scale-125 translate-y-20 translate-x-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Header Text */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-400 mb-6 uppercase">
            SOLUTION FOR EVERY FACTOR
          </p>
          <h2 className="uppercase font-heading text-3xl md:text-5xl lg:text-[60px] font-black leading-[1.15] tracking-tight">
            Designing and
            <br />
            implementing custom blockchain
            <br />
            architectures.
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/5 flex flex-col gap-9 min-h-[320px] shadow-2xl transition-transform hover:-translate-y-2 duration-300"
            >
              <div>
                <div className="mb-6 bg-white/5 border border-white/10 rounded-full h-12 w-12 flex items-center justify-center">
                  <Image src={card.icon} alt={card.title} width={24} height={24} />
                </div>
                {/* <p className="text-xl font-normal mb-4 text-gray-100 leading-tight">
                  {card.title}
                </p> */}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed mt-5">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
