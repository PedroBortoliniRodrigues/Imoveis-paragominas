import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Search } from "lucide-react";

interface PropertyFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  typeFilter: string;
  onTypeFilterChange: (value: string) => void;
  categoryFilter: string;
  onCategoryFilterChange: (value: string) => void;
  priceFilter: string;
  onPriceFilterChange: (value: string) => void;
}

export const PropertyFilters = ({
  searchTerm,
  onSearchChange,
  typeFilter,
  onTypeFilterChange,
  categoryFilter,
  onCategoryFilterChange,
  priceFilter,
  onPriceFilterChange,
}: PropertyFiltersProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-lg border border-border mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Busca */}
        <div className="space-y-2">
          <Label htmlFor="search">Buscar</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Localização, bairro..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Tipo */}
        <div className="space-y-2">
          <Label htmlFor="type">Tipo</Label>
          <Select value={typeFilter} onValueChange={onTypeFilterChange}>
            <SelectTrigger id="type">
              <SelectValue placeholder="Todos os tipos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os tipos</SelectItem>
              <SelectItem value="casa">Casa</SelectItem>
              <SelectItem value="lote">Lote</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Categoria */}
        <div className="space-y-2">
          <Label htmlFor="category">Negociação</Label>
          <Select value={categoryFilter} onValueChange={onCategoryFilterChange}>
            <SelectTrigger id="category">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="venda">Venda</SelectItem>
              <SelectItem value="aluguel">Aluguel</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Preço */}
        <div className="space-y-2">
          <Label htmlFor="price">Faixa de Preço</Label>
          <Select value={priceFilter} onValueChange={onPriceFilterChange}>
            <SelectTrigger id="price">
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="0-100000">Até R$ 100.000</SelectItem>
              <SelectItem value="100000-300000">R$ 100.000 - R$ 300.000</SelectItem>
              <SelectItem value="300000-500000">R$ 300.000 - R$ 500.000</SelectItem>
              <SelectItem value="500000-999999999">Acima de R$ 500.000</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
