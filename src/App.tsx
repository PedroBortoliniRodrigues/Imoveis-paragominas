import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Casas from "./pages/Casas";
import Lotes from "./pages/Lotes";
import Comprar from "./pages/Comprar";
import Vender from "./pages/Vender";
import Contato from "./pages/Contato";
import Favoritos from "./pages/Favoritos";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/casas" element={<Casas />} />
          <Route path="/lotes" element={<Lotes />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/vender" element={<Vender />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
