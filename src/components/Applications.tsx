import React from "react";
import { ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const Applications: React.FC = () => {
  return (
    <section id="aplicacoes" className="py-24 sm:py-32 bg-[#171A1D] border-y border-[#24292E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Title */}
        <div className="max-w-xl mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-[#78939D] font-medium">
            Áreas de Atuação
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F4F2ED]">
            Projetado para onde você vive e trabalha.
          </h2>
        </div>

        {/* 2 Large Photographic Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Panel 1: Residencial */}
          <div className="relative group overflow-hidden rounded-xs border border-[#24292E] bg-[#0B0D0F] min-h-[460px] sm:min-h-[520px] flex flex-col justify-end p-8 sm:p-12">
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
              alt="Aplicação de película em residências e apartamentos de luxo"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/60 to-transparent" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#A88B5D] font-semibold">
                Ambientes Privativos
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F2ED]">
                Residencial
              </h3>
              <p className="text-[#F4F2ED]/80 font-light text-sm sm:text-base leading-relaxed max-w-md">
                Casas, apartamentos, salas de estar, quartos, varandas gourmet e áreas de convivência com máxima proteção solar e conforto térmico.
              </p>
              
              <div className="pt-2">
                <button
                  onClick={() => openWhatsApp("Olá! Cliquei no setor 'Áreas de Atuação - Residencial' e gostaria de avaliar meu projeto.")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0D0F]/80 backdrop-blur-md border border-[#A88B5D] text-[#F4F2ED] text-xs uppercase tracking-widest hover:bg-[#A88B5D] hover:text-[#0B0D0F] transition-all duration-300 rounded-sm font-semibold group"
                >
                  <span>Avaliar projeto residencial</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Panel 2: Corporativo */}
          <div className="relative group overflow-hidden rounded-xs border border-[#24292E] bg-[#0B0D0F] min-h-[460px] sm:min-h-[520px] flex flex-col justify-end p-8 sm:p-12">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop"
              alt="Aplicação corporativa de película em escritórios e clínicas"
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-[#0B0D0F]/60 to-transparent" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] text-[#78939D] font-semibold">
                Espaços Profissionais
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F2ED]">
                Corporativo
              </h3>
              <p className="text-[#F4F2ED]/80 font-light text-sm sm:text-base leading-relaxed max-w-md">
                Escritórios, clínicas, lojas, salas de reunião e fachadas comerciais que exigem eficiência energética e privacidade corporativa.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => openWhatsApp("Olá! Cliquei no setor 'Áreas de Atuação - Corporativo' e gostaria de uma cotação para minha empresa.")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B0D0F]/80 backdrop-blur-md border border-[#78939D] text-[#F4F2ED] text-xs uppercase tracking-widest hover:bg-[#78939D] hover:text-[#0B0D0F] transition-all duration-300 rounded-sm font-semibold group"
                >
                  <span>Avaliar projeto corporativo</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};