import React from "react";
import { COMPANY_INFO } from "@/lib/whatsapp";
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
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
              <li><a href="/#solucoes" className="hover:text-[#A88B5D] transition-colors">Soluções</a></li>
              <li><a href="/#aplicacoes" className="hover:text-[#A88B5D] transition-colors">Aplicações</a></li>
              <li><a href="/#projetos" className="hover:text-[#A88B5D] transition-colors">Projetos</a></li>
              <li><a href="/#processo" className="hover:text-[#A88B5D] transition-colors">Processo</a></li>
              <li><a href="/#contato" className="hover:text-[#A88B5D] transition-colors">Contato</a></li>
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
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#A88B5D] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Sub-footer */}
        <div className="pt-8 border-t border-[#171A1D] flex flex-col sm:flex-row items-center justify-between text-xs text-[#F4F2ED]/50 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.fullName}. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <Link
              to="/politica-de-privacidade"
              className="hover:text-[#A88B5D] transition-colors underline underline-offset-4"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/politica-de-devolucao-e-garantia"
              className="hover:text-[#A88B5D] transition-colors underline underline-offset-4"
            >
              Garantia e Devolução
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
</dyad-footer>