import React from "react";
import { openWhatsApp } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => openWhatsApp("Olá! Estava navegando pelo site e cliquei no botão flutuante para tirar algumas dúvidas pelo WhatsApp.")}
        className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 group border border-white/20"
        aria-label="Atendimento por WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-semibold text-white">
          Falar no WhatsApp
        </span>
      </button>
    </div>
  );
};