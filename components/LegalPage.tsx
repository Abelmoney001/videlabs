import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocument } from "@/utils/legal";

export default function LegalPage({ doc }: { doc: LegalDocument }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-18">
                <article className="shell py-16 md:py-24">
                    <div className="max-w-[46rem]">
                        <p className="text-sm text-dim">
                            Last updated {doc.updated}
                        </p>
                        <h1 className="mt-4 font-heading text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95]">
                            {doc.title}
                        </h1>
                        <p className="mt-6 text-lg leading-relaxed text-haze">
                            {doc.intro}
                        </p>

                        <div className="mt-12 space-y-10">
                            {doc.sections.map((section) => (
                                <section key={section.heading}>
                                    <h2 className="font-sans text-xl font-semibold text-paper">
                                        {section.heading}
                                    </h2>
                                    <div className="mt-4 space-y-4 leading-relaxed text-haze">
                                        {section.blocks.map((block, i) =>
                                            block.kind === "p" ? (
                                                <p key={i}>{block.text}</p>
                                            ) : (
                                                <ul
                                                    key={i}
                                                    className="list-disc space-y-2 pl-5 marker:text-dim"
                                                >
                                                    {block.items.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            ),
                                        )}
                                    </div>
                                </section>
                            ))}
                        </div>

                        <p className="mt-16 border-t border-line pt-8 text-sm text-dim">
                            See also:{" "}
                            <Link href="/terms" className="text-paper/85 underline underline-offset-4 hover:text-paper">
                                Terms of Use
                            </Link>{" "}
                            ·{" "}
                            <Link href="/privacy" className="text-paper/85 underline underline-offset-4 hover:text-paper">
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </article>
            </main>
            <Footer />
        </>
    );
}
