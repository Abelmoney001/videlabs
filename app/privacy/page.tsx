import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/utils/legal";

export const metadata: Metadata = {
    title: "Videlabs | Privacy Policy",
    description: "What data the Videlabs website collects, why, and your rights.",
};

export default function PrivacyPage() {
    return <LegalPage doc={privacy} />;
}
