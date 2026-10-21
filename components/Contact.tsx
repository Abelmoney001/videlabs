"use client";

import { useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { x } from "@/utils/images";
import GradientButton from "./GradientButton";

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

const fieldClass =
  "h-12 w-full rounded-xl bg-night/70 px-4 text-paper ring-1 ring-line transition-shadow placeholder:text-dim hover:ring-white/25 focus:outline-none focus:ring-2 focus:ring-spectrum-aqua/70";

const labelClass = "mb-2 block text-sm text-haze";

function toggle(list: string[], value: string) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

function ChipGroup({
  legend,
  options,
  selected,
  onToggle,
}: {
  legend: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-4 text-base font-medium text-paper">{legend}</legend>
      <div className="flex flex-wrap gap-2.5">
        {options.map((option) => {
          const active = selected.includes(option);
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => onToggle(option)}
              className={`inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm transition-colors duration-200 ${
                active
                  ? "bg-paper font-medium text-night"
                  : "text-haze ring-1 ring-line hover:text-paper hover:ring-white/30"
              }`}
            >
              {active && <Check size={15} aria-hidden />}
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function Contact() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<string>("");

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="shell">
        <div className="overflow-hidden rounded-[32px] bg-pupil ring-1 ring-line">
          <div className="h-[3px] bg-(image:--spectrum)" aria-hidden />

          <div className="p-6 py-10 sm:p-10 lg:p-16">
            <div className="flex flex-col gap-10 border-b border-line pb-12 lg:flex-row lg:items-end lg:justify-between">
              <h2 className="font-heading text-[clamp(2.2rem,5vw,4.25rem)] leading-[0.95]">
                We&apos;d love to
                <br />
                hear from you
              </h2>

              <dl className="flex flex-wrap gap-x-14 gap-y-8 lg:pb-1.5">
                <div>
                  <dt className="text-sm text-dim">Send Us An Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href="mailto:contact@videlabs.io"
                      className="text-lg text-paper underline decoration-line underline-offset-4 transition-colors hover:decoration-paper"
                    >
                      contact@videlabs.io
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-dim">Follow Us</dt>
                  <dd className="mt-1.5">
                    <a
                      href="https://x.com/Videlabs?s=20"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Videlabs on X"
                      className="inline-flex size-10 items-center justify-center rounded-full ring-1 ring-line transition hover:bg-white/[0.06] hover:ring-white/30"
                    >
                      <Image src={x} alt="" width={16} height={16} />
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <form
              className="space-y-12 pt-12"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                data.append("projectTypes", selectedTypes.join(", "));
                data.append("services", selectedServices.join(", "));
                setStatus("LOADING");
                try {
                  const response = await fetch("https://formspree.io/f/mdawabpa", {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  });
                  if (response.ok) {
                    setStatus("SUCCESS");
                    form.reset();
                    setSelectedTypes([]);
                    setSelectedServices([]);
                  } else {
                    setStatus("ERROR");
                  }
                } catch {
                  setStatus("ERROR");
                }
              }}
            >
              <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
                <ChipGroup
                  legend="Your Project's Type"
                  options={projectTypes}
                  selected={selectedTypes}
                  onToggle={(value) => setSelectedTypes((prev) => toggle(prev, value))}
                />
                <ChipGroup
                  legend="Services You Need"
                  options={services}
                  selected={selectedServices}
                  onToggle={(value) => setSelectedServices((prev) => toggle(prev, value))}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Full Name
                  </label>
                  <input id="contact-name" type="text" name="name" autoComplete="name" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email Address
                  </label>
                  <input id="contact-email" type="email" name="email" autoComplete="email" required className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-x" className={labelClass}>
                    X (Twitter) Username
                  </label>
                  <input id="contact-x" type="text" name="x_username" placeholder="@" className={fieldClass} />
                </div>
                <div>
                  <label htmlFor="contact-org" className={labelClass}>
                    Organization
                  </label>
                  <input id="contact-org" type="text" name="organization" autoComplete="organization" className={fieldClass} />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-message" className={labelClass}>
                    Write About Your Idea
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    className={`${fieldClass} h-auto resize-y py-3 leading-relaxed`}
                  ></textarea>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <GradientButton
                  type="submit"
                  disabled={status === "LOADING"}
                  showIcon={status !== "LOADING"}
                  showArrow={status !== "LOADING"}
                  className="h-12 self-start px-7"
                >
                  {status === "LOADING" ? "Sending..." : "Send Message"}
                </GradientButton>
                <p role="status" aria-live="polite" className="text-sm">
                  {status === "SUCCESS" && (
                    <span className="text-spectrum-green">Thanks for reaching out! We will get back to you shortly.</span>
                  )}
                  {status === "ERROR" && (
                    <span className="text-spectrum-rose">
                      Oops! There was a problem submitting your form. Please try again.
                    </span>
                  )}
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
