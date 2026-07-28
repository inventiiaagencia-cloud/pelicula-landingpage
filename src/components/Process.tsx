import React from "react";
import { PROCESS_STEPS } from "@/data/content";

export const Process: React.FC = () => {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-[#171A1D] border-t border-[#24292E]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#78939D] font-medium">
            Atendimento Técnico
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F2ED]">
            O processo do diagnóstico à instalação.
          </h2>
          <p className="text-[#F4F2ED]/70 font-light text-base">
            Garantia de ponta a ponta para que o resultado estético e funcional atenda rigorosamente ao projeto arquitetônico.
          </p>
        </div>

        {/* Minimalist 4-Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-[#24292E] z-0" />

          {PROCESS_STEPS.map((item) => (
            <div key={item.step} className="relative z-10 space-y-6 group">
              
              {/* Step Badge */}
              <div className="w-14 h-14 rounded-full bg-[#0B0D0F] border border-[#A88B5D]/50 text-[#A88B5D] flex items-center justify-center font-serif text-xl group-hover:bg-[#A88B5D] group-hover:text-[#0B0D0F] transition-all duration-300 shadow-md">
                {item.step}
              </div>

              {/* Step Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-serif text-[#F4F2ED] group-hover:text-[#A88B5D] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F4F2ED]/70 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};