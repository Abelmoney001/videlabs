import Image from "next/image";
import Link from "next/link";
import { logo } from "@/utils/images";
import GradientButton from "./GradientButton";

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full flex items-center justify-between px-6 md:px-12 lg:px-24 py-2 z-50 text-white font-sans bg-background">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src={logo}
            alt="Videlabs Logo"
            width={60}
            height={20}
            className="object-contain"
            priority
          />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-10 text-sm font-medium">
        <Link href="#about" className="hover:text-gray-300 transition-colors">
          About Us
        </Link>
        <Link
          href="#partners"
          className="hover:text-gray-300 transition-colors"
        >
          Partners
        </Link>
        <Link
          href="#projects"
          className="hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
      </div>

      <GradientButton />
    </nav>
  );
}
