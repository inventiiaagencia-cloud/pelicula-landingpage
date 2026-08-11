import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY_INFO } from "@/lib/whatsapp";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy: React.FC = () => {
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
            <ShieldCheck className="w-4 h-4" />
            <span>Transparência e Segurança</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-normal text-[#F4F2ED]">
            Política de Privacidade
          </h1>
          <p className="text-xs text-[#78939D] tracking-wider uppercase">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>
        </div>

        <div className="space-y-8 text-[#F4F2ED]/80 font-light text-sm sm:text-base leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">1. Coleta de Informações</h2>
            <p>
              A <strong>{COMPANY_INFO.fullName}</strong> respeita a sua privacidade. Coletamos apenas as informações estritamente necessárias quando você entra em contato conosco por e-mail ou WhatsApp para solicitações de orçamentos, agendamento de visitas técnicas ou esclarecimento de dúvidas.
            </p>
            <p>
              Os dados coletados podem incluir: nome, telefone/WhatsApp, e-mail e endereço do local da instalação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">2. Uso das Informações</h2>
            <p>Suas informações são utilizadas exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 text-[#F4F2ED]/70">
              <li>Elaborar e enviar orçamentos personalizados;</li>
              <li>Agendar medições técnicas e instalações;</li>
              <li>Emitir notas fiscais e relatórios de garantia do serviço;</li>
              <li>Manter suporte pós-venda relativo às películas aplicadas.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">3. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins de marketing. Seus dados só serão compartilhados quando estritamente necessário para cumprimento de obrigações legais ou fiscais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">4. Proteção e Retenção dos Dados</h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger suas informações contra acessos não autorizados, perdas ou alterações. Mantemos seus dados de contato apenas pelo período necessário para prestação da garantia e histórico de serviços prestados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F4F2ED]">5. Seus Direitos (LGPD)</h2>
            <p>
              Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem o direito de solicitar o acesso, correção, atualização ou exclusão de seus dados pessoais dos nossos registros a qualquer momento.
            </p>
          </section>

          <section className="space-y-3 border-t border-[#24292E] pt-6">
            <h2 className="text-xl font-serif text-[#F4F2ED]">6. Contato do Encarregado</h2>
            <p>
              Para dúvidas sobre esta política ou para exercer seus direitos de privacidade, entre em contato diretamente pelo e-mail:{" "}
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#A88B5D] underline hover:text-[#F4F2ED]">
                {COMPANY_INFO.email}
              </a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;