"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { mark, wordmark } from "@/utils/images";
import GradientButton from "./GradientButton";

const links = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#podcast", label: "Podcast" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-night/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-18 items-center justify-between gap-6" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" aria-label="Videlabs home">
          <Image src={mark} alt="" width={36} height={36} priority className="size-9" />
          <Image src={wordmark} alt="" className="h-3 w-auto" />
        </Link>

        <ul className="hidden items-center gap-1 text-sm text-haze lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="rounded-full px-3.5 py-2 transition-colors hover:bg-white/[0.06] hover:text-paper">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <span className="hidden sm:block">
            <GradientButton href="#contact" />
          </span>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full text-paper hover:bg-white/[0.06] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" hidden={!open} className="border-t border-line lg:hidden">
        <ul className="shell flex flex-col py-3">
          {links.map((link) => (
            <li key={link.href} className="border-b border-line">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-paper"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-5 pb-3 sm:hidden" onClick={() => setOpen(false)}>
            <GradientButton href="#contact" className="w-full" />
          </li>
        </ul>
      </div>
    </header>
  );
}
