import React from "react";
import { ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const FinalCTA: React.FC = () => {
  return (
    <section id="contato" className="relative py-28 sm:py-36 bg-[#0B0D0F] overflow-hidden">
      {/* Background Photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
          alt="Fachada moderna em pele de vidro para edifícios de alto padrão"
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0B0D0F]/90 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-[#0B0D0F]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
        <span className="text-xs uppercase tracking-[0.3em] text-[#A88B5D] font-semibold">
          Solicite uma Avaliação Sem Compromisso
        </span>

        <h2 className="text-4xl sm:text-6xl font-serif text-[#F4F2ED] leading-tight">
          Seu vidro pode fazer mais pelo ambiente.
        </h2>

        <p className="text-base sm:text-lg text-[#F4F2ED]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Envie fotos do local e receba uma orientação inicial personalizada com recomendação de películas para o seu projeto.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => openWhatsApp("Olá! Gostaria de enviar umas fotos do meu espaço para vocês me passarem um orçamento sem compromisso.")}
            className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#A88B5D] text-[#0B0D0F] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#bfa272] transition-all duration-300 rounded-sm group shadow-xl shadow-[#A88B5D]/10"
          >
            <span>Falar pelo WhatsApp</span>
            <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};