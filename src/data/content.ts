export interface ProjectItem {
  id: string;
  title: string;
  category: "Casas" | "Apartamentos" | "Escritórios" | "Fachadas" | "Privacidade" | "Decorativas";
  image: string;
  description: string;
  location?: string;
}

export interface SolutionItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
}

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "controle-solar",
    number: "01",
    title: "Controle Solar",
    subtitle: "Conforto térmico com máxima luminosidade natural",
    description: "Tecnologia de rejeição infravermelha de alta precisão que reduz significativamente o calor excessivo e elimina os raios UV sem escurecer os ambientes ou alterar a estética da fachada.",
    image: "/controle-solar.png",
    features: [
      "Redução expressiva da sensação térmica",
      "Proteção de móveis, obras de arte e pisos contra desbotamento",
      "Filtragem inteligente do brilho e ofuscamento",
      "Manutenção da transparência e visibilidade externa"
    ]
  },
  {
    id: "privacidade",
    number: "02",
    title: "Privacidade",
    subtitle: "Proteção visual e sofisticação arquitetônica",
    description: "Soluções jateadas, translúcidas, neutras ou refletivas projetadas para criar resguardo em salas de reunião, dormitórios, varandas e banheiros, sem bloquear a transição agradável de luz.",
    image: "/privacidade.png",
    features: [
      "Bloqueio de visibilidade indesejada de fora para dentro",
      "Opções com transparência unidirecional ou efeito fosco",
      "Acabamentos minimalistas que integram à decoração",
      "Ideal para divisórias de vidro e panos de vidro expostos"
    ]
  },
  {
    id: "seguranca",
    number: "03",
    title: "Segurança",
    subtitle: "Resistência estrutural para vidros expostos",
    description: "Películas de retenção de fragmentos fabricadas com poliéster de alta densidade. Em caso de impacto ou quebra acidental, mantêm os cacos unidos à película, prevenindo acidentes severos.",
    image: "/seguranca.png",
    features: [
      "Retenção efetiva dos estilhaços em caso de quebra",
      "Proteção reforçada para portas de sacada e guarda-corpos",
      "Transparência óptica imperceptível a olho nu",
      "Maior tranquilidade para famílias com crianças e animais"
    ]
  },
  {
    id: "design",
    number: "04",
    title: "Design & Decoração",
    subtitle: "Texturas e geometria para arquitetura de interiores",
    description: "Elementos visuais personalizados para divisórias de escritórios, clínicas e residências contemporâneas. Trazem ritmo, identidade de marca e elegância sutil às superfícies envidraçadas.",
    image: "/design-decoracao.png",
    features: [
      "Efeitos jateados padronizados ou customizados",
      "Linhas e geometrias minimalistas sob medida",
      "Valorização de ambientes corporativos e comerciais",
      "Aplicação rápida com acabamento livre de bolhas"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Residência com fachada envidraçada",
    category: "Casas",
    image: "/residencia-fachada-envidracada.png",
    description: "Aplicação de película de alta tecnologia com alta rejeição de calor e tom neutro, preservando a transparência e a integração com o jardim.",
    location: "Alphaville, SP"
  },
  {
    id: "proj-2",
    title: "Apartamento com controle solar",
    category: "Apartamentos",
    image: "/apartamento-controle-solar.png",
    description: "Solução em grande varanda envidraçada voltada para o poente. Redução de 78% do calor sem alterar a vista panorâmica da cidade.",
    location: "Jardins, SP"
  },
  {
    id: "proj-3",
    title: "Escritório com divisórias jateadas",
    category: "Escritórios",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
    description: "Instalação de película decorativa efeito jateado em salas de reunião executivas, garantindo privacidade para apresentações.",
    location: "Faria Lima, SP"
  },
  {
    id: "proj-4",
    title: "Fachada corporativa com acabamento neutro",
    category: "Fachadas",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    description: "Tratamento completo da pele de vidro de edifício sede corporativo. Otimização de energia do ar condicionado e uniformidade estética.",
    location: "Vila Olímpia, SP"
  },
  {
    id: "proj-5",
    title: "Suíte master com filtro de privacidade",
    category: "Privacidade",
    image: "/suite-master-privacidade.png",
    description: "Película inteligente refletiva suave para janelas piso-teto de dormitório principal, bloqueando a visão da vizinhança durante o dia.",
    location: "Alto de Pinheiros, SP"
  },
  {
    id: "proj-6",
    title: "Clínica médica com película decorativa",
    category: "Decorativas",
    image: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=1200&auto=format&fit=crop",
    description: "Detalhamento estético em vidros de consultórios e recepção, aliando assepsia, facilidade de limpeza e acolhimento dos pacientes.",
    location: "Moema, SP"
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Entendimento da necessidade",
    description: "Mapeamento das particularidades do projeto: incidência solar, necessidade de privacidade, proteção de móveis ou estética."
  },
  {
    step: "02",
    title: "Avaliação do ambiente",
    description: "Análise técnica do tipo de vidro, orientação solar da estrutura e medição precisa de cada vão envidraçado."
  },
  {
    step: "03",
    title: "Recomendação da película",
    description: "Apresentação das amostras físicas e especificações ópticas mais adequadas ao conceito arquitetônico do imóvel."
  },
  {
    step: "04",
    title: "Instalação profissional",
    description: "Execução limpa, ágil e especializada por técnicos certificados, com total proteção do piso e mobiliário do local."
  }
];