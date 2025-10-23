import { Property } from "@/types/property";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, MapPin, Bed, Bath, Maximize, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard = ({ property, onViewDetails }: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(property.id));
  }, [property.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter((id: string) => id !== property.id);
      toast.success("Removido dos favoritos");
    } else {
      newFavorites = [...favorites, property.id];
      toast.success("Adicionado aos favoritos");
    }
    
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <Card className="overflow-hidden group card-hover animate-fade-in">
      <div className="relative overflow-hidden">
        <Carousel className="w-full">
          <CarouselContent>
            {property.images.map((image, index) => (
              <CarouselItem key={index}>
                <img
                  src={image}
                  alt={`${property.title} - Imagem ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          <Badge className="bg-primary text-primary-foreground">
            {property.category === "venda" ? "Venda" : "Aluguel"}
          </Badge>
          <Badge variant="secondary">
            {property.type === "casa" ? "Casa" : "Lote"}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFavorite}
          className={`absolute top-4 right-4 bg-white/90 hover:bg-white z-10 ${
            isFavorite ? "text-red-500" : "text-gray-600"
          }`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
        </Button>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{property.title}</h3>
        
        <div className="flex items-center text-muted-foreground text-sm mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          {property.bedrooms && (
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>{property.bathrooms}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Maximize className="h-4 w-4" />
            <span>{property.area}m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-2xl font-bold text-primary">
              {formatPrice(property.price)}
            </p>
            {property.category === "aluguel" && (
              <p className="text-xs text-muted-foreground">por mês</p>
            )}
          </div>
          <Button onClick={() => onViewDetails(property)} className="btn-primary">
            <Eye className="h-4 w-4 mr-2" />
            Ver Detalhes
          </Button>
        </div>
      </div>
    </Card>
  );
};
