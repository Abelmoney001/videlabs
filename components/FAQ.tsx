"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      question: "What does Videlabs focus on?",
      answer:
        "Videlabs focuses on designing and building blockchain infrastructure, decentralized applications, and multichain systems that power modern digital ecosystems.",
    },
    {
      question: "What types of blockchain solutions do you build?",
      answer:
        "Our work includes smart contract systems, decentralized applications (dApps), multichain integrations, and custom blockchain architectures designed for scalable and secure on-chain interactions.",
    },
    {
      question: "What makes Videlabs different?",
      answer:
        "Our approach focuses on practical architecture and real-world usability, combining technical design, protocol thinking, and product-level implementation.",
    },
    {
      question: "Do you build complete products or just infrastructure?",
      answer:
        "Both. We design the core architecture while also developing the applications, integrations, and systems that bring decentralized ideas to life.",
    },
    {
      question: "How do you ensure security in blockchain systems?",
      answer:
        "Security is addressed through careful architecture design, secure smart contract development practices, thorough testing, and adherence to industry best practices.",
    },
    {
      question: "What kind of projects benefit from blockchain architecture?",
      answer:
        "Projects that require transparency, trustless interactions, tokenization, decentralized coordination, or multichain liquidity often benefit from blockchain-based systems.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95] lg:sticky lg:top-28">
            Got questions?
            <br />
            We&apos;ve got answers!
          </h2>
        </div>

        <ul className="border-t border-line lg:col-span-7">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            return (
              <li key={faq.question} className="border-b border-line">
                <h3 className="font-sans">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left text-lg text-paper md:text-xl"
                  >
                    <span className="transition-colors group-hover:text-white">{faq.question}</span>
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ring-1 transition duration-300 ease-out-quart ${
                        open ? "rotate-45 bg-paper text-night ring-paper" : "text-haze ring-line group-hover:ring-haze"
                      }`}
                      aria-hidden
                    >
                      <Plus size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out-quart ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden" inert={!open}>
                    <p className="max-w-[38rem] pb-7 pr-12 leading-relaxed text-haze">{faq.answer}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
