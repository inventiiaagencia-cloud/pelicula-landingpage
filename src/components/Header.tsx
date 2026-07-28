import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO, openWhatsApp } from "@/lib/whatsapp";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Soluções", href: "#solucoes" },
    { name: "Aplicações", href: "#aplicacoes" },
    { name: "Projetos", href: "#projetos" },
    { name: "Processo", href: "#processo" },
    { name: "Contato", href: "#contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0B0D0E]/90 backdrop-blur-md border-b border-[#24292E] py-4 shadow-2xl"
          : "bg-gradient-to-b from-black/80 via-black/30 to-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-wider text-[#F4F2ED] uppercase">
            {COMPANY_INFO.name}
          </span>
          <span className="h-2 w-2 rounded-full bg-[#A88B5D] group-hover:scale-125 transition-transform"></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest text-[#F4F2ED]/80 font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#A88B5D] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#A88B5D] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => openWhatsApp()}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-widest font-semibold border border-[#A88B5D] text-[#F4F2ED] hover:bg-[#A88B5D] hover:text-[#0B0D0F] transition-all duration-300 rounded-sm group"
          >
            <span>Solicitar orçamento</span>
            <ArrowUpRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#F4F2ED] p-2 hover:text-[#A88B5D] transition-colors focus:outline-none"
          aria-label="Abrir Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-[#0B0D0F] z-40 md:hidden flex flex-col justify-between px-8 py-12 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto top-[70px]" : "opacity-0 pointer-events-none top-[70px]"
        }`}
      >
        <div className="flex flex-col space-y-6 text-lg font-serif tracking-wider uppercase pt-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#F4F2ED]/90 hover:text-[#A88B5D] border-b border-[#24292E] pb-3 transition-colors flex justify-between items-center"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-[#A88B5D]" />
            </a>
          ))}
        </div>

        <div className="space-y-4 pt-8 border-t border-[#24292E]">
          <p className="text-xs uppercase tracking-widest text-[#78939D]">
            {COMPANY_INFO.location}
          </p>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openWhatsApp();
            }}
            className="w-full py-3 text-xs uppercase tracking-widest font-bold bg-[#A88B5D] text-[#0B0D0F] hover:bg-[#bfa272] transition-colors rounded-sm"
          >
            Solicitar Orçamento via WhatsApp
          </button>
        </div>
      </div>
    </header>
  );
};