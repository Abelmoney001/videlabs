import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { terms } from "@/utils/legal";

export const metadata: Metadata = {
    title: "Videlabs | Terms of Use",
    description: "The terms that apply when you use the Videlabs website.",
};

export default function TermsPage() {
    return <LegalPage doc={terms} />;
}
