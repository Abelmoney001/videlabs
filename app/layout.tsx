import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { supabase } from "@/utils/supabase";

export const dynamic = "force-dynamic";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Videlabs",
  description: "Building the foundation of Web3",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Fetch remote opacity from Supabase
  let opacity = 1; // Default to 100%
  try {
    const { data, error } = await supabase
      .from("site_config")
      .select("value")
      .eq("key", "website_opacity")
      .single();

    if (!error && data && typeof data.value === "number") {
      opacity = data.value / 100;
    }
  } catch (err) {
    console.error("Failed to fetch opacity config:", err);
  }

  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`} style={{ opacity }}>
        {children}
      </body>
    </html>
  );
}
