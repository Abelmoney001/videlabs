import Image from "next/image";
import Link from "next/link";
import { chat } from "@/utils/images";
import { ArrowUpRight } from "lucide-react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  showArrow?: boolean;
  /** Renders a link instead of a button. External URLs open in a new tab. */
  href?: string;
  /** "solid" is the filled paper pill; "outline" carries the spectrum on its edge. */
  variant?: "solid" | "outline";
}

export default function GradientButton({
  children = "Get In Touch",
  className = "",
  showIcon = true,
  showArrow = false,
  href,
  variant = "solid",
  ...props
}: GradientButtonProps) {
  const content = (
    <>
      {showIcon && <Image src={chat} alt="" width={16} height={16} className={variant === "solid" ? "invert" : ""} />}
      {children}
      {showArrow && (
        <ArrowUpRight
          size={18}
          aria-hidden
          className="transition-transform duration-300 ease-out-quart group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  );

  const surface =
    variant === "solid"
      ? "bg-paper text-night hover:bg-white"
      : "spectrum-edge text-paper hover:bg-white/[0.06]";

  const innerClass = `group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60 ${surface} ${className}`;

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <Link
        href={href}
        className={innerClass}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return (
    <button className={innerClass} {...props}>
      {content}
    </button>
  );
}
