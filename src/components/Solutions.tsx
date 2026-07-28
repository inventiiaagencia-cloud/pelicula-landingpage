import React from "react";
import { SOLUTIONS_DATA } from "@/data/content";
import { Check, ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const Solutions: React.FC = () => {
  return (
    <section id="solucoes" className="py-24 sm:py-32 bg-[#0B0D0F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-20 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-[#A88B5D] font-medium">
            Nossas Soluções
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-normal text-[#F4F2ED]">
            Quatro abordagens para o seu projeto em vidro.
          </h2>
          <p className="text-[#F4F2ED]/70 text-base font-light">
            Soluções sob medida desenvolvidas especificamente para o desempenho térmico, visual e protetivo de estruturas residenciais e comerciais.
          </p>
        </div>

        {/* 4 Large Editorial Solutions List */}
        <div className="space-y-24 sm:space-y-32">
          {SOLUTIONS_DATA.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={solution.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xs border border-[#24292E] bg-[#171A1D] group">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F]/80 via-transparent to-transparent opacity-60" />
                    
                    {/* Corner Number Badge */}
                    <div className="absolute top-6 left-6 px-3 py-1 bg-[#0B0D0F]/80 backdrop-blur-md border border-[#24292E] text-[#A88B5D] font-serif text-lg">
                      {solution.number}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#78939D]">
                      {solution.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-serif text-[#F4F2ED]">
                      {solution.title}
                    </h3>
                  </div>

                  <p className="text-[#F4F2ED]/80 font-light text-base sm:text-lg leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Key Features List */}
                  <ul className="space-y-3 pt-2">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#F4F2ED]/90 font-light">
                        <span className="mt-1 p-0.5 rounded-full bg-[#A88B5D]/20 text-[#A88B5D]">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <button
                      onClick={() => openWhatsApp(`Olá! Gostaria de mais informações sobre a solução de ${solution.title}.`)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F4F2ED] border-b border-[#A88B5D] pb-1 hover:text-[#A88B5D] transition-colors font-medium group"
                    >
                      <span>Consultar solução de {solution.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#A88B5D]" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};