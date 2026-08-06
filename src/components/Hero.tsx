import React from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const Hero: React.FC = () => {
  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.querySelector("#solucoes");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0D0F]">
      {/* Background Cinematic High-Res Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop"
          alt="Residência de alto padrão com grandes áreas em vidro e películas de controle solar"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          loading="eager"
        />
        {/* Dark Vignette and Gradient Overlays for Architectural Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/60 to-[#0B0D0F]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0F]/90 via-transparent to-[#0B0D0F]/40" />
      </div>

      {/* Hero Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-16 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Subheader Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#171A1D]/80 backdrop-blur-md border border-[#A88B5D]/40 text-[#A88B5D] text-xs uppercase tracking-[0.25em] font-medium rounded-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A88B5D]"></span>
            <span>Películas Arquitetônicas de Alta Performance</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-normal leading-[1.08] tracking-tight text-[#F4F2ED]">
            Controle a luz. <br />
            <span className="italic font-light text-[#A88B5D]">Preserve</span> a arquitetura.
          </h1>

          {/* Short Subtitle */}
          <p className="text-base sm:text-lg text-[#F4F2ED]/80 font-light leading-relaxed max-w-2xl">
            Películas arquitetônicas para residências, escritórios e fachadas que buscam conforto, privacidade, proteção e sofisticação.
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={() => openWhatsApp("Olá! Vi o site de vocês e gostaria de tirar umas dúvidas e solicitar um orçamento.")}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#A88B5D] text-[#0B0D0F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#bfa272] transition-all duration-300 rounded-sm group shadow-lg shadow-[#A88B5D]/10"
            >
              <span>Solicitar avaliação</span>
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <a
              href="#solucoes"
              onClick={scrollToSolutions}
              className="inline-flex items-center justify-center px-8 py-4 border border-[#F4F2ED]/30 text-[#F4F2ED] font-medium text-xs uppercase tracking-[0.2em] hover:border-[#F4F2ED] hover:bg-[#F4F2ED]/5 transition-all duration-300 rounded-sm"
            >
              Conhecer soluções
            </a>
          </div>
        </div>
      </div>

      {/* Discrete Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
        <a
          href="#apresentacao"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#apresentacao")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center text-xs uppercase tracking-widest text-[#F4F2ED]/60 hover:text-[#A88B5D] transition-colors"
        >
          <span className="mb-1 text-[10px]">Rolar</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#A88B5D]" />
        </a>
      </div>
    </section>
  );
};