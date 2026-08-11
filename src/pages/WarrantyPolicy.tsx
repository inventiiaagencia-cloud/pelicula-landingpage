import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY_INFO, openWhatsApp } from "@/lib/whatsapp";
import { ArrowLeft, ShieldCheck, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

const WarrantyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[#F4F2ED] font-sans flex flex-col justify-between">
      <Header />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-6 sm:px-8 flex-grow">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#A88B5D] hover:text-[#F4F2ED] transition-colors mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para o início</span>
        </Link>

        <div className="space-y-4 mb-12 border-b border-[#24292E] pb-8">
          <div className="inline-flex items-center gap-2 text-[#A88B5D] text-xs uppercase tracking-widest font-semibold">
            <RefreshCw className="w-4 h-4" />
            <span>Qualidade & Compromisso</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#F4F2ED]">
            Garantia, Cancelamento e Devolução
          </h1>
          <p className="text-xs text-[#78939D] tracking-wider uppercase">
            Termos aplicáveis aos serviços de aplicação de películas arquitetônicas
          </p>
        </div>

        <div className="space-y-8 text-[#F4F2ED]/80 font-light text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">1. Garantia dos Serviços e Materiais</h2>
            <p>
              Todas as películas aplicadas pela <strong>{COMPANY_INFO.fullName}</strong> possuem garantia de fábrica contra descolamento, formação de bolhas oriundas de falha de adesão, desbotamento prematuro e delaminação.
            </p>
            <p>
              O prazo específico da garantia é detalhado na proposta comercial de cada projeto, variando de acordo com a linha de película selecionada (controle solar, segurança, jateada ou decorativa).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">2. Cobertura da Garantia</h2>
            <p>A garantia cobre substituição de material e refazimento do serviço sem custo adicional para o cliente nos seguintes cenários:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#F4F2ED]/70">
              <li>Defeitos de fabricação no lote da película;</li>
              <li>Descolamento ou bolhas provenientes de falha na aplicação técnica;</li>
              <li>Mudança anormal de cor ou desbotamento no período de vigência.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">3. Exclusões de Garantia</h2>
            <p>A garantia não cobrirá danos decorrentes de:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#F4F2ED]/70">
              <li>Uso de produtos abrasivos, solventes ou ferramentas pontiagudas na limpeza dos vidros;</li>
              <li>Limpeza realizada antes do período de cura total da película (indicado na entrega);</li>
              <li>Vandalismo, choques mecânicos, trincas térmicas no vidro ou acidentes;</li>
              <li>Alterações realizadas por terceiros no vidro ou na esquadria.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">4. Cancelamento do Agendamento e Reembolso</h2>
            <p>
              Por se tratar de um serviço personalizado com bobinas e películas cortadas sob medida para cada vão de vidro do imóvel:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#F4F2ED]/70">
              <li>
                <strong>Cancelamento antes do corte do material:</strong> O cliente pode solicitar o cancelamento do serviço com até 48 horas de antecedência da data agendada sem custo adicional.
              </li>
              <li>
                <strong>Cancelamento após o fracionamento do material sob medida:</strong> Caso a película já tenha sido cortada exclusivamente para as dimensões do seu imóvel, será cobrado apenas o custo do insumo descartado.
              </li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-[#24292E] pt-6">
            <h2 className="text-xl font-serif text-[#F4F2ED]">5. Como Solicitar Suporte ou Acionar a Garantia</h2>
            <p>
              Caso perceba qualquer inconformidade na película ou precise tirar dúvidas sobre a manutenção, entre em contato direto pelo nosso canal oficial de atendimento:
            </p>
            <div className="pt-2">
              <button
                onClick={() => openWhatsApp("Olá! Preciso tirar uma dúvida sobre garantia/suporte do meu projeto.")}
                className="px-6 py-3 bg-[#A88B5D] text-[#0B0D0F] font-bold text-xs uppercase tracking-widest hover:bg-[#bfa272] transition-colors rounded-xs inline-flex items-center gap-2"
              >
                <span>Acionar Suporte via WhatsApp</span>
              </button>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WarrantyPolicy;