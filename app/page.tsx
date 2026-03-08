import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrilliantIdeas from "@/components/BrilliantIdeas";
import LogoMarquee from "@/components/LogoMarquee";
import FeaturedProjects from "@/components/FeaturedProjects";
import CrackedFounders from "@/components/CrackedFounders";
import BlockchainArchitecture from "@/components/BlockchainArchitecture";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-sans selection:bg-primary/30 pb-24">
      <Navbar />
      <Hero />
      <BrilliantIdeas />
      <LogoMarquee />
      <FeaturedProjects />
      <CrackedFounders />
      <BlockchainArchitecture />
      <FAQ />
      <Contact />
    </main>
  );
}
