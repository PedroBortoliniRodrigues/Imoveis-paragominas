import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyModal } from "@/components/PropertyModal";
import { LoginModal } from "@/components/LoginModal";
import { Property } from "@/types/property";
import { properties } from "@/data/properties";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const Favoritos = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [favorites, setFavorites] = useState<Property[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const favoriteIds = JSON.parse(localStorage.getItem("favorites") || "[]");
    const favoriteProperties = properties.filter((p) => favoriteIds.includes(p.id));
    setFavorites(favoriteProperties);
  }, []);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleLoginSuccess = () => {
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 w-16 h-16 rounded-full mb-4">
            <Heart className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Meus Favoritos</h1>
          <p className="text-xl text-muted-foreground">
            Imóveis que você salvou para ver depois
          </p>
        </div>

        {favorites.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">
              Você ainda não tem imóveis favoritos.
            </p>
            <p className="text-muted-foreground">
              Navegue pelos imóveis e clique no ícone de coração para salvá-los aqui.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favorites.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />

      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Favoritos;
