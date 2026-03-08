import { discord, link, telegram, x } from "@/utils/images";
import GradientButton from "./GradientButton";
import Image from "next/image";

export default function Contact() {
  const projectTypes = [
    "Blockchain Wallet",
    "NFT Marketplace",
    "Decentralized Exchange",
    "Smart Contract Platform",
    "Cryptography",
  ];

  const services = [
    "Smart Contracts",
    "Decentralized Finance",
    "Tokenomics",
    "NFTs",
    "Blockchain Governance",
    "Cryptographic Security",
    "Distributed Ledger Technology",
    "Initial Coin Offerings",
  ];

  return (
    <section className="bg-black md:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white/5 rounded-[40px] p-4 py-8 md:py-16 md:p-16 border border-white/10 shadow-2xl">
        {/* Header Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight max-w-xl">
            WE'D LOVE TO
            <br />
            HEAR FROM YOU
          </h2>

          <div className="flex gap-12 lg:gap-24">
            <div>
              <p className="text-xs text-gray-500 mb-1">Send Us An Email</p>
              <a
                href="mailto:info@videlabs.com"
                className="text-sm text-gray-200 hover:text-white transition-colors"
              >
                info@videlabs.com
              </a>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-2">Follow Us</p>
              <div className="flex bg-transparent border border-white/10 rounded-md">
                {/* Social Icons Placeholders */}
                {[x, telegram, discord, link].map((platform, i) => (
                  <button
                    key={i}
                    className={`${i === platform.length - 1 ? "border-none" : "border-r border-white/10"} px-2 w-8 h-8 flex items-center justify-center text-xs text-gray-400 hover:text-white hover:border-white/30 transition-all`}
                  >
                    <Image src={platform} alt="Social Icon" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-12">
          {/* Tags Selection Area */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Project Types */}
            <div className="flex-1">
              <h3 className="text-sm text-white font-medium mb-4">
                Your Project's Type
              </h3>
              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-px bg-[linear-gradient(to_right,#9910D7,#007AD3, 0.1)]"
                  >
                    <button
                      type="button"
                      className="w-full h-full px-4 py-2 rounded-lg bg-[linear-gradient(to_right,rgba(153,16,215,0.1),rgba(0,122,211,0.1))] text-xs text-white hover:bg-[linear-gradient(to_right,rgba(153,16,215,0.2),rgba(0,122,211,0.2))] transition-all font-medium backdrop-blur-sm"
                    >
                      {type}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="flex-1">
              <h3 className="text-sm text-white font-medium mb-4">
                Services You Need
              </h3>
              <div className="flex flex-wrap gap-3">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-px bg-[linear-gradient(to_right,#FEC924,#FE5163, 0.9)]"
                  >
                    <button
                      type="button"
                      className="w-full h-full px-4 py-2 rounded-lg bg-[linear-gradient(to_right,rgba(254,201,36,0.05),rgba(254,81,99,0.05))] text-xs text-white hover:bg-[linear-gradient(to_right,rgba(254,201,36,0.15),rgba(254,81,99,0.15))] transition-all font-medium backdrop-blur-sm"
                    >
                      {service}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-8">
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                placeholder=" "
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                placeholder=" "
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                placeholder=" "
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
                Organization
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                placeholder=" "
              />
            </div>
          </div>

          <div className="space-y-2 pt-4">
            <label className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">
              Write About Your Idea
            </label>
            <textarea
              rows={3}
              className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder=" "
            ></textarea>
          </div>

          <div className="pt-8">
            <GradientButton
              children="Send Message"
              showIcon={false}
              showArrow={true}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
