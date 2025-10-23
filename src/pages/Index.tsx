import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyModal } from "@/components/PropertyModal";
import { LoginModal } from "@/components/LoginModal";
import { LoadingScreen } from "@/components/LoadingScreen";
import { PropertyFilters } from "@/components/PropertyFilters";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import { properties } from "@/data/properties";
import { Search, Home as HomeIcon, TrendingUp, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleLoginSuccess = () => {
    navigate("/admin");
  };

  const filteredProperties = properties.filter((property) => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = typeFilter === "all" || property.type === typeFilter;
    const matchesCategory = categoryFilter === "all" || property.category === categoryFilter;
    
    let matchesPrice = true;
    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      matchesPrice = property.price >= min && property.price <= max;
    }

    return matchesSearch && matchesType && matchesCategory && matchesPrice;
  });

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      {/* Hero Section */}
      <section
        className="relative h-[600px] flex items-center justify-center text-white"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Encontre Seu Lar em Paragominas
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            As melhores casas e lotes da região com as melhores condições
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
            onClick={() => document.getElementById("properties")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Search className="mr-2 h-5 w-5" />
            Ver Imóveis Disponíveis
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 animate-slide-up">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <HomeIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Imóveis Selecionados</h3>
            <p className="text-muted-foreground">
              Os melhores imóveis de Paragominas cuidadosamente selecionados
            </p>
          </div>

          <div className="text-center p-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Melhores Preços</h3>
            <p className="text-muted-foreground">
              Condições especiais e preços competitivos para você
            </p>
          </div>

          <div className="text-center p-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Segurança e Confiança</h3>
            <p className="text-muted-foreground">
              Documentação regular e processo transparente
            </p>
          </div>
        </div>
      </section>

      {/* Properties Section */}
      <section id="properties" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Imóveis em Destaque</h2>
          <p className="text-xl text-muted-foreground">
            Encontre o imóvel perfeito para você
          </p>
        </div>

        <PropertyFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          typeFilter={typeFilter}
          onTypeFilterChange={setTypeFilter}
          categoryFilter={categoryFilter}
          onCategoryFilterChange={setCategoryFilter}
          priceFilter={priceFilter}
          onPriceFilterChange={setPriceFilter}
        />

        {filteredProperties.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              Nenhum imóvel encontrado com os filtros selecionados.
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
      </section>

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

export default Index;
