import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyModal } from "@/components/PropertyModal";
import { LoginModal } from "@/components/LoginModal";
import { PropertyFilters } from "@/components/PropertyFilters";
import { Property } from "@/types/property";
import { properties } from "@/data/properties";
import { useNavigate } from "react-router-dom";

const Comprar = () => {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const navigate = useNavigate();

  const vendas = properties.filter((p) => p.category === "venda");

  const filteredProperties = vendas.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === "all" || property.type === typeFilter;
    
    let matchesPrice = true;
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      matchesPrice = property.price >= min && property.price <= max;
    }

    return matchesSearch && matchesType && matchesPrice;
  });

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
          <h1 className="text-4xl font-bold mb-4">Imóveis à Venda</h1>
          <p className="text-xl text-muted-foreground">
            Realize o sonho da casa própria em Paragominas
          </p>
        </div>

        <PropertyFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          categoryFilter="venda"
          onCategoryFilterChange={() => {}}
          priceFilter={priceFilter}
          onPriceFilterChange={setPriceFilter}
        />

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nenhum imóvel à venda encontrado com os filtros selecionados.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
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

export default Comprar;
