export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  type: 'casa' | 'lote';
  category: 'venda' | 'aluguel';
  location: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  image: string;
  images?: string[];
  features?: string[];
}
