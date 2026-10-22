import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Chakra_Petch, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  display: "swap",
});

// Subsidiary brand faces, used only inside their ecosystem panels.
const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Videlabs | Ideas. Architecture. Decentralized Systems.",
  description: "VIDELABS is a RESEARCH AND DEVELOPMENT Lab building next-generation infrastructure, protocols, and developer tools on-chain. Parent company of Videpay and Chain Streets.",
  openGraph: {
    title: "Videlabs | Ideas. Architecture. Decentralized Systems.",
    description: "A research and development lab building next-generation infrastructure, protocols, and developer tools on-chain. Parent company of Videpay and Chain Streets.",
    siteName: "Videlabs",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#01031a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variables live on <html> so the theme's :root tokens can resolve them.
    <html lang="en" className={`${schibsted.variable} ${bricolage.variable} ${chakra.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
