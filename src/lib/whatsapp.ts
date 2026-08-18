export const COMPANY_INFO = {
  name: "Lumina",
  fullName: "Lumina Películas Arquitetônicas",
  phone: "5511962816186",
  formattedPhone: "(11) 96281-6186",
  email: "contato@luminaprotectivefilm.com.br",
  location: "São Paulo, SP e Região Metropolitana",
  defaultMessage: "Olá! Vi o site de vocês e gostaria de solicitar um orçamento.",
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export function trackConversion(): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: "AW-18384485193/VQZhCLzJ2-McEMn2s75E",
    });
  }
}

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || COMPANY_INFO.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodedMessage}`;
}

export function openWhatsApp(customMessage?: string): void {
  trackConversion();
  window.open(getWhatsAppLink(customMessage), "_blank", "noopener,noreferrer");
}