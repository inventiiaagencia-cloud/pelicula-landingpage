import React from "react";
import { ArrowRight } from "lucide-react";

export const Introduction: React.FC = () => {
  const scrollToSolutions = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector("#solucoes")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="apresentacao" className="py-24 sm:py-32 bg-[#0B0D0F] border-b border-[#171A1D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Large Hero Photography Frame */}
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden rounded-xs border border-[#24292E] bg-[#171A1D]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop"
                alt="Ambiente residencial sofisticado com janelas amplas e luz filtrada"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/60 via-transparent to-transparent opacity-80" />
            </div>

            {/* Architectural accent details */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-[#A88B5D]/40 pointer-events-none hidden sm:block"></div>
          </div>

          {/* Editorial Content Frame */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#78939D] font-medium">
                Conceito & Filosofia
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight text-[#F4F2ED]">
                Conforto que você sente. Tecnologia que quase não aparece.
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#F4F2ED]/70 font-light leading-relaxed">
              Grandes áreas de vidro valorizam a arquitetura, mas podem aumentar o calor, o ofuscamento e a exposição do ambiente. A película correta melhora o conforto sem comprometer a beleza do espaço.
            </p>

            <div className="pt-2">
              <a
                href="#solucoes"
                onClick={scrollToSolutions}
                className="inline-flex items-center gap-3 text-sm uppercase tracking-widest text-[#A88B5D] hover:text-[#F4F2ED] transition-colors font-semibold group"
              >
                <span>Entenda como funciona</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-[#A88B5D] group-hover:text-[#F4F2ED]" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};