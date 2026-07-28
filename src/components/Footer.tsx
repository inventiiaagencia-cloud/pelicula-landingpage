import React, { useState } from "react";
import { COMPANY_INFO } from "@/lib/whatsapp";
import { Phone, Mail, Instagram, MapPin, X } from "lucide-react";

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <footer className="bg-[#08090A] border-t border-[#171A1D] text-[#F4F2ED]/70 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl font-semibold text-[#F4F2ED] uppercase tracking-wider block">
              {COMPANY_INFO.fullName}
            </span>
            <p className="text-xs text-[#F4F2ED]/60 font-light max-w-sm leading-relaxed">
              Especialistas em instalação técnica de películas arquitetônicas de alta performance para residências de alto padrão, edifícios e ambientes corporativos.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#78939D] pt-2">
              <MapPin className="w-4 h-4 text-[#A88B5D]" />
              <span>{COMPANY_INFO.location}</span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F4F2ED] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#F4F2ED]/70">
              <li><a href="#solucoes" className="hover:text-[#A88B5D] transition-colors">Soluções</a></li>
              <li><a href="#aplicacoes" className="hover:text-[#A88B5D] transition-colors">Aplicações</a></li>
              <li><a href="#projetos" className="hover:text-[#A88B5D] transition-colors">Projetos</a></li>
              <li><a href="#processo" className="hover:text-[#A88B5D] transition-colors">Processo</a></li>
              <li><a href="#contato" className="hover:text-[#A88B5D] transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#F4F2ED] font-semibold">
              Contato Direto
            </h4>
            <ul className="space-y-3 text-xs text-[#F4F2ED]/80 font-light">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#A88B5D]" />
                <span>{COMPANY_INFO.formattedPhone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A88B5D]" />
                <span>{COMPANY_INFO.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Instagram className="w-4 h-4 text-[#A88B5D]" />
                <span>{COMPANY_INFO.instagram}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-[#171A1D] flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F2ED]/50 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os direitos reservados.</p>
          <button
            onClick={() => setPrivacyOpen(true)}
            className="hover:text-[#A88B5D] transition-colors underline underline-offset-4"
          >
            Política de Privacidade
          </button>
        </div>

      </div>

      {/* Privacy Modal */}
      {privacyOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#171A1D] border border-[#24292E] p-8 max-w-lg w-full rounded-xs relative text-[#F4F2ED] space-y-4">
            <button
              onClick={() => setPrivacyOpen(false)}
              className="absolute top-4 right-4 text-[#F4F2ED]/60 hover:text-[#F4F2ED]"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-serif text-[#F4F2ED]">Política de Privacidade</h3>
            <p className="text-xs text-[#F4F2ED]/70 leading-relaxed font-light">
              Os dados de contato enviados através dos nossos canais de comunicação são utilizados exclusivamente para o atendimento de solicitações de orçamentos e agendamentos técnicos. Não compartilhamos informações com terceiros.
            </p>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setPrivacyOpen(false)}
                className="px-4 py-2 bg-[#A88B5D] text-[#0B0D0F] text-xs font-bold uppercase tracking-wider rounded-xs"
              >
                Compreendi
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};