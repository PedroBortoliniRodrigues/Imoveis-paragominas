import { Property } from "@/types/property";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MapPin, Bed, Bath, Maximize, MessageCircle, Check } from "lucide-react";

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export const PropertyModal = ({ property, isOpen, onClose }: PropertyModalProps) => {
  if (!property) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleContact = () => {
    const phone = "5591987654321";
    const message = `Olá! Tenho interesse no imóvel: ${property.title} - ${formatPrice(property.price)}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{property.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Imagem Principal */}
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className="bg-primary text-primary-foreground">
                {property.category === "venda" ? "Venda" : "Aluguel"}
              </Badge>
              <Badge variant="secondary">
                {property.type === "casa" ? "Casa" : "Lote"}
              </Badge>
            </div>
          </div>

          {/* Preço e Localização */}
          <div>
            <p className="text-3xl font-bold text-primary mb-2">
              {formatPrice(property.price)}
              {property.category === "aluguel" && (
                <span className="text-lg text-muted-foreground">/mês</span>
              )}
            </p>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{property.location}</span>
            </div>
          </div>

          {/* Características */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
            {property.bedrooms && (
              <div className="text-center">
                <Bed className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-semibold">{property.bedrooms}</p>
                <p className="text-sm text-muted-foreground">Quartos</p>
              </div>
            )}
            {property.bathrooms && (
              <div className="text-center">
                <Bath className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="font-semibold">{property.bathrooms}</p>
                <p className="text-sm text-muted-foreground">Banheiros</p>
              </div>
            )}
            <div className="text-center">
              <Maximize className="h-6 w-6 mx-auto mb-2 text-primary" />
              <p className="font-semibold">{property.area}m²</p>
              <p className="text-sm text-muted-foreground">Área</p>
            </div>
          </div>

          {/* Descrição */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Descrição</h3>
            <p className="text-muted-foreground leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Características Adicionais */}
          {property.features && property.features.length > 0 && (
            <div>
              <h3 className="font-semibold text-lg mb-3">Características</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botão de Contato */}
          <Button
            onClick={handleContact}
            className="w-full btn-primary text-lg py-6"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            Fale com o Corretor
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
