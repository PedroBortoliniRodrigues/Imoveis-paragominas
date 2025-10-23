import { Property } from "@/types/property";
import house1 from "@/assets/house1.jpg";
import house2 from "@/assets/house2.jpg";
import house3 from "@/assets/house3.jpg";
import lot1 from "@/assets/lot1.jpg";

export const properties: Property[] = [
  {
    id: "1",
    title: "Casa Moderna no Centro",
    description: "Linda casa moderna com acabamento de primeira qualidade. Localizada no centro de Paragominas, próxima a escolas, supermercados e comércio em geral.",
    price: 450000,
    type: "casa",
    category: "venda",
    location: "Centro, Paragominas-PA",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    image: house1,
    images: [house1],
    features: [
      "Garagem para 2 carros",
      "Área de churrasqueira",
      "Quintal amplo",
      "Cozinha planejada",
      "Suíte master"
    ]
  },
  {
    id: "2",
    title: "Casa Familiar Aconchegante",
    description: "Casa perfeita para família, com espaços bem distribuídos e jardim. Bairro tranquilo e seguro.",
    price: 2500,
    type: "casa",
    category: "aluguel",
    location: "Promissão II, Paragominas-PA",
    bedrooms: 4,
    bathrooms: 3,
    area: 200,
    image: house2,
    images: [house2],
    features: [
      "4 quartos",
      "Área de lazer",
      "Garagem coberta",
      "Próximo a escolas"
    ]
  },
  {
    id: "3",
    title: "Mansão de Luxo com Piscina",
    description: "Imóvel de alto padrão com acabamento luxuoso, piscina, área gourmet completa e paisagismo impecável.",
    price: 980000,
    type: "casa",
    category: "venda",
    location: "Angelim, Paragominas-PA",
    bedrooms: 5,
    bathrooms: 4,
    area: 350,
    image: house3,
    images: [house3],
    features: [
      "Piscina",
      "Área gourmet",
      "5 suítes",
      "Closet",
      "Sistema de segurança",
      "Energia solar"
    ]
  },
  {
    id: "4",
    title: "Lote Comercial Bem Localizado",
    description: "Excelente lote comercial em ponto estratégico de Paragominas. Ideal para investimento.",
    price: 280000,
    type: "lote",
    category: "venda",
    location: "Promissão I, Paragominas-PA",
    area: 450,
    image: lot1,
    images: [lot1],
    features: [
      "Esquina",
      "Documentação regular",
      "Infraestrutura completa",
      "Alto fluxo de veículos"
    ]
  },
  {
    id: "5",
    title: "Casa Econômica para Família",
    description: "Casa simples e funcional, perfeita para quem está começando. Bom estado de conservação.",
    price: 1800,
    type: "casa",
    category: "aluguel",
    location: "Célio Miranda, Paragominas-PA",
    bedrooms: 2,
    bathrooms: 1,
    area: 85,
    image: house1,
    images: [house1],
    features: [
      "2 quartos",
      "Garagem",
      "Quintal pequeno"
    ]
  },
  {
    id: "6",
    title: "Lote Residencial Pronto para Construir",
    description: "Terreno plano e limpo, pronto para construção. Bairro em desenvolvimento.",
    price: 150000,
    type: "lote",
    category: "venda",
    location: "Nova Conquista, Paragominas-PA",
    area: 300,
    image: lot1,
    images: [lot1],
    features: [
      "Plano",
      "Esquina",
      "Água e luz disponíveis"
    ]
  }
];
