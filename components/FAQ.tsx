"use client";

import { useState } from "react";
import GradientButton from "./GradientButton";

export default function FAQ() {
  const faqs = [
    {
      num: "01",
      question: "What does Videlabs focus on?",
      answer:
        "Videlabs focuses on designing and building blockchain infrastructure, decentralized applications, and multichain systems that power modern digital ecosystems.",
    },
    {
      num: "02",
      question: "What types of blockchain solutions do you build?",
      answer:
        "Our work includes smart contract systems, decentralized applications (dApps), multichain integrations, and custom blockchain architectures designed for scalable and secure on-chain interactions.",
    },
    {
      num: "03",
      question: "What makes Videlabs different?",
      answer:
        "Our approach focuses on practical architecture and real-world usability, combining technical design, protocol thinking, and product-level implementation.",
    },
    {
      num: "04",
      question: "Do you build complete products or just infrastructure?",
      answer:
        "Both. We design the core architecture while also developing the applications, integrations, and systems that bring decentralized ideas to life.",
    },
    {
      num: "05",
      question: "How do you ensure security in blockchain systems?",
      answer:
        "Security is addressed through careful architecture design, secure smart contract development practices, thorough testing, and adherence to industry best practices.",
    },
    {
      num: "06",
      question: "What kind of projects benefit from blockchain architecture?",
      answer:
        "Projects that require transparency, trustless interactions, tokenization, decentralized coordination, or multichain liquidity often benefit from blockchain-based systems.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column - Heading */}
        <div className="flex-1 max-w-xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.1] tracking-tight mb-8">
            GOT {" "}
            <br className="hidden md:block" />
            QUESTIONS? {" "}
            <br className="hidden md:block" />
            WE'VE GOT {" "}
            <br className="hidden md:block" />
            ANSWERS! {" "}
          </h2>
          {/* <GradientButton children="Learn More" showIcon={false} faq /> */}
        </div>

        {/* Right Column - Accordion */}
        <div className="flex-1 flex flex-col">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-white/10 py-6 cursor-pointer group hover:border-primary/50 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                  <span className="text-gray-500 font-mono text-sm">
                    {faq.num}
                  </span>
                  <p className="text-sm md:text-base text-gray-200 group-hover:text-white font-normal transition-colors">
                    {faq.question}
                  </p>
                </div>
                <div
                  className={`text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* Optional answer expansion area */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-400 md:text-base md:leading-relaxed pl-12 pr-4 pb-2">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
