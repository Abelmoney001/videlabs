import Image from "next/image";
import { chat } from "@/utils/images";
import { ArrowUpRight, BookText } from "lucide-react";

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  wrapperClassName?: string;
  showIcon?: boolean;
  showArrow?: boolean;
  faq?: boolean;
}

export default function GradientButton({
  children = "Get In Touch",
  className = "h-11",
  wrapperClassName = "",
  showIcon = true,
  showArrow = false,
  faq = false,
  ...props
}: GradientButtonProps) {
  return (
    <div
      className={`w-max rounded-full p-px bg-[linear-gradient(to_right,#FEC924,#FE5163)] transition-shadow cursor-pointer ${wrapperClassName}`}
    >
      <button
        className={`flex items-center justify-center gap-2 bg-[linear-gradient(to_right,#9910D7,#007AD3)] w-full px-6 rounded-full text-sm font-medium hover:brightness-110 transition-all ${className}`}
        {...props}
      >
        {showIcon && <Image src={chat} alt="Chat" width={18} height={18} />}
        {faq && <BookText color="#fff"
            size={18} />}
        {children}
        {showArrow && (
          <ArrowUpRight
            color="#fff"
            size={18}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        )}
      </button>
    </div>
  );
}
