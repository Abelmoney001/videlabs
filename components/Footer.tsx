import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { mark, wordmark } from "@/utils/images";

const columns = [
    {
        title: "Ecosystem",
        links: [
            { href: "https://videpay.io", label: "Videpay" },
            { href: "https://chainstreets.io", label: "Chain Streets" },
        ],
    },
    {
        title: "Lab",
        links: [
            { href: "#about", label: "About Us" },
            { href: "#services", label: "Services" },
            { href: "#podcast", label: "Podcast" },
            { href: "#faq", label: "FAQ" },
        ],
    },
    {
        title: "Connect",
        links: [
            { href: "https://x.com/Videlabs?s=20", label: "X (Twitter)" },
            { href: "mailto:hi@videlabs.io", label: "hi@videlabs.io" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t border-line pt-16 pb-10">
            <div className="shell">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                            aria-label="Videlabs home"
                        >
                            <Image
                                src={mark}
                                alt=""
                                width={44}
                                height={44}
                                className="size-11"
                            />
                            <Image
                                src={wordmark}
                                alt=""
                                className="h-3.5 w-auto"
                            />
                        </Link>
                        <p className="mt-6 max-w-[22rem] text-haze">
                            Ideas. Architecture. Decentralized Systems.
                        </p>
                    </div>

                    <nav
                        aria-label="Footer"
                        className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7"
                    >
                        {columns.map((column) => (
                            <div key={column.title}>
                                <p className="text-sm text-dim">
                                    {column.title}
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {column.links.map((link) => {
                                        const external =
                                            link.href.startsWith("http");
                                        return (
                                            <li key={link.href}>
                                                <a
                                                    href={link.href}
                                                    {...(external
                                                        ? {
                                                              target: "_blank",
                                                              rel: "noopener noreferrer",
                                                          }
                                                        : {})}
                                                    className="inline-flex items-center gap-1 text-paper/85 transition-colors hover:text-paper"
                                                >
                                                    {link.label}
                                                    {external && (
                                                        <ArrowUpRight
                                                            size={14}
                                                            className="text-dim"
                                                            aria-hidden
                                                        />
                                                    )}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>

                <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 text-sm text-dim sm:flex-row sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Videlabs. All rights
                        reserved.
                    </p>
                    <p>Parent company of Videpay and Chain Streets.</p>
                </div>
            </div>
        </footer>
    );
}
