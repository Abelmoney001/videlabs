import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrilliantIdeas from "@/components/BrilliantIdeas";
import Ecosystem from "@/components/Ecosystem";
import FeaturedProjects from "@/components/FeaturedProjects";
import BlockchainArchitecture from "@/components/BlockchainArchitecture";
import CrackedFounders from "@/components/CrackedFounders";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen overflow-x-clip">
        <Hero />
        <BrilliantIdeas />
        <Ecosystem />
        <FeaturedProjects />
        <BlockchainArchitecture />
        <CrackedFounders />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
