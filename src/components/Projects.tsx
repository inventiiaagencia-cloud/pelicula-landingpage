import React, { useState } from "react";
import { PROJECTS_DATA, ProjectItem } from "@/data/content";
import { X, MapPin, ZoomIn, ArrowUpRight } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Todas");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ["Todas", "Casas", "Apartamentos", "Escritórios", "Fachadas", "Privacidade", "Decorativas"];

  const filteredProjects = activeCategory === "Todas"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projetos" className="py-24 sm:py-32 bg-[#0B0D0F]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B5D] font-medium">
              Portfólio Recente
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-[#F4F2ED]">
              Arquitetura em destaque.
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 rounded-xs ${
                  activeCategory === cat
                    ? "bg-[#A88B5D] text-[#0B0D0F] font-bold"
                    : "bg-[#171A1D] text-[#F4F2ED]/70 hover:text-[#F4F2ED] hover:bg-[#24292E]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#171A1D] border border-[#24292E] overflow-hidden rounded-xs transition-all duration-500 hover:border-[#A88B5D]/50 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0D0F]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0F] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Zoom Icon Overlay */}
                <div className="absolute top-4 right-4 p-2 bg-[#0B0D0F]/70 backdrop-blur-md rounded-full text-[#F4F2ED] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4 text-[#A88B5D]" />
                </div>

                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0B0D0F]/80 backdrop-blur-md text-[10px] uppercase tracking-widest text-[#A88B5D] border border-[#24292E]">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-[#F4F2ED] group-hover:text-[#A88B5D] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#F4F2ED]/70 mt-2 font-light line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {project.location && (
                  <div className="flex items-center text-[11px] text-[#78939D] tracking-wider uppercase gap-1.5 pt-2 border-t border-[#24292E]">
                    <MapPin className="w-3.5 h-3.5 text-[#A88B5D]" />
                    <span>{project.location}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative max-w-4xl w-full bg-[#171A1D] border border-[#24292E] rounded-xs overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 bg-[#0B0D0F]/80 text-[#F4F2ED] hover:text-[#A88B5D] rounded-full backdrop-blur-md transition-colors"
              aria-label="Fechar galeria"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-[#0B0D0F]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Modal Details */}
            <div className="p-6 sm:p-8 space-y-4 overflow-y-auto">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#24292E] pb-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#A88B5D] font-medium">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#F4F2ED] mt-1">
                    {selectedProject.title}
                  </h3>
                </div>
                {selectedProject.location && (
                  <div className="flex items-center text-xs text-[#78939D] uppercase tracking-wider gap-1.5">
                    <MapPin className="w-4 h-4 text-[#A88B5D]" />
                    <span>{selectedProject.location}</span>
                  </div>
                )}
              </div>

              <p className="text-[#F4F2ED]/80 font-light text-sm sm:text-base leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => {
                    openWhatsApp(`Olá! Gostei muito da foto do projeto "${selectedProject.title}" que vi no site e queria fazer algo parecido.`);
                    setSelectedProject(null);
                  }}
                  className="px-6 py-3 bg-[#A88B5D] text-[#0B0D0F] font-semibold text-xs uppercase tracking-widest hover:bg-[#bfa272] transition-colors rounded-xs flex items-center gap-2"
                >
                  <span>Solicitar algo parecido</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};