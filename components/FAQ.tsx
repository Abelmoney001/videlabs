"use client";

import { useState } from "react";
import GradientButton from "./GradientButton";

export default function FAQ() {
  const faqs = [
    { num: "02", question: "What is blockchain development?" },
    {
      num: "03",
      question: "How long does it take to develop a blockchain solution?",
    },
    { num: "04", question: "What programming languages are commonly used?" },
    {
      num: "05",
      question: "What are the costs associated with blockchain development?",
    },
    { num: "06", question: "How secure is blockchain technology?" },
    {
      num: "07",
      question: "What are the key challenges in blockchain development?",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        {/* Left Column - Heading */}
        <div className="flex-1 max-w-xl">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-black leading-[1.1] tracking-tight mb-8">
            GOT
            <br className="hidden md:block" />
            QUESTIONS?
            <br className="hidden md:block" />
            WE'VE GOT
            <br className="hidden md:block" />
            ANSWERS!
          </h2>
          {/* <button className="flex items-center gap-2 bg-linear-to-r from-primary to-secondary px-6 py-2.5 rounded-full text-sm font-semibold hover:brightness-110 transition-all w-max shadow-[0_0_15px_rgba(147,51,234,0.3)]">
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
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
            Learn More
          </button> */}
          <GradientButton children="Learn More" showIcon={false} faq />
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
                <p className="text-sm text-gray-400 pl-12">
                  This is a placeholder answer for the question. In a real
                  application, you would populate this with the actual content
                  related to the FAQ item.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
