import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Introduction } from "@/components/Introduction";
import { Solutions } from "@/components/Solutions";
import { Applications } from "@/components/Applications";
import { Projects } from "@/components/Projects";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[#F4F2ED] selection:bg-[#A88B5D] selection:text-[#0B0D0F] font-sans">
      {/* Navigation Header */}
      <Header />

      {/* Main Sections */}
      <main>
        <Hero />
        <Introduction />
        <Solutions />
        <Applications />
        <Projects />
        <Process />
        <FinalCTA />
      </main>

      {/* Footer & Floating Actions */}
      <Footer />
      <WhatsAppButton />
      <MadeWithDyad />
    </div>
  );
};

export default Index;