import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { LoginModal } from "@/components/LoginModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Home, DollarSign, TrendingUp, Shield, Send } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const Vender = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    propertyCategory: "",
    location: "",
    price: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.propertyType) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      console.log("Anúncio enviado:", formData);
      toast.success("Solicitação enviada com sucesso! Entraremos em contato em breve para avaliar seu imóvel.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        propertyType: "",
        propertyCategory: "",
        location: "",
        price: "",
        description: "",
      });
      setLoading(false);
    }, 1000);
  };

  const handleLoginSuccess = () => {
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onLoginClick={() => setIsLoginModalOpen(true)} />

      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Anuncie seu Imóvel</h1>
          <p className="text-xl text-muted-foreground">
            Venda ou alugue seu imóvel com quem entende de Paragominas
          </p>
        </div>

        {/* Vantagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Home className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Divulgação Ampla</h3>
            <p className="text-sm text-muted-foreground">
              Seu imóvel será visto por milhares de interessados
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Melhor Preço</h3>
            <p className="text-sm text-muted-foreground">
              Avaliação profissional para o melhor valor
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold mb-2">Processo Seguro</h3>
            <p className="text-sm text-muted-foreground">
              Acompanhamento completo da negociação
            </p>
          </div>
        </div>

        {/* Formulário */}
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg border border-border">
          <h2 className="text-2xl font-bold mb-6">Dados do Imóvel</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Seu Nome *</Label>
                <Input
                  id="name"
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone *</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(91) 98765-4321"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="propertyType">Tipo de Imóvel *</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => setFormData({ ...formData, propertyType: value })}
                  required
                >
                  <SelectTrigger id="propertyType">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="casa">Casa</SelectItem>
                    <SelectItem value="lote">Lote</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="propertyCategory">Negociação *</Label>
                <Select
                  value={formData.propertyCategory}
                  onValueChange={(value) => setFormData({ ...formData, propertyCategory: value })}
                  required
                >
                  <SelectTrigger id="propertyCategory">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="venda">Venda</SelectItem>
                    <SelectItem value="aluguel">Aluguel</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Localização</Label>
              <Input
                id="location"
                placeholder="Bairro, rua..."
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price">Valor Desejado</Label>
              <Input
                id="price"
                placeholder="R$ 0,00"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descrição do Imóvel</Label>
              <Textarea
                id="description"
                placeholder="Conte mais sobre o imóvel..."
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full btn-primary" disabled={loading}>
              <Send className="h-4 w-4 mr-2" />
              {loading ? "Enviando..." : "Solicitar Avaliação"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Após o envio, nossa equipe entrará em contato para agendar uma visita e fazer a avaliação do imóvel.
            </p>
          </form>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Vender;
