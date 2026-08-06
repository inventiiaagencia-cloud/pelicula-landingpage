export const COMPANY_INFO = {
  name: "Lumina",
  fullName: "Lumina Películas Arquitetônicas",
  phone: "5511962816186",
  formattedPhone: "(11) 96281-6186",
  email: "contato@luminarchitectural.com.br",
  instagram: "@lumina.peliculas",
  location: "São Paulo, SP e Região Metropolitana",
  defaultMessage: "Olá! Conheci a empresa pelo site e gostaria de solicitar uma avaliação para instalação de película arquitetônica.",
};

export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || COMPANY_INFO.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${COMPANY_INFO.phone}?text=${encodedMessage}`;
}

export function openWhatsApp(customMessage?: string): void {
  window.open(getWhatsAppLink(customMessage), "_blank", "noopener,noreferrer");
}