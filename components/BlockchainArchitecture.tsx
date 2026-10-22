import Image from "next/image";
import { app_maintenance, blockchain_dev, business_consulting, custom_software_dev } from "@/utils/images";

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
    <section id="services" className="py-20 md:py-28">
      <div className="shell">
        <div className="max-w-4xl">
          <p className="text-sm text-haze">Solution for every factor</p>
          <h2 className="mt-4 font-heading text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95]">
            Designing and implementing custom blockchain architectures.
          </h2>
        </div>

        <ul className="mt-14 border-t border-line md:mt-20">
          {cards.map((card) => (
            <li
              key={card.title}
              className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-start md:gap-8 md:py-10"
            >
              <div className="flex items-center gap-4 md:col-span-6 lg:col-span-5">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-pupil ring-1 ring-line">
                  <Image src={card.icon} alt="" width={22} height={22} />
                </span>
                <h3 className="font-sans text-xl font-medium tracking-[-0.01em] md:text-2xl">{card.title}</h3>
              </div>
              <p className="max-w-[36rem] leading-relaxed text-haze md:col-span-6 md:pt-2.5 lg:col-span-6 lg:col-start-7">
                {card.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
