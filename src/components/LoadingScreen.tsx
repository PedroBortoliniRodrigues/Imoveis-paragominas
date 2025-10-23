import { Home } from "lucide-react";

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center animate-scale-in">
        <div className="inline-block mb-6">
          <div className="bg-primary p-6 rounded-2xl animate-pulse">
            <Home className="h-16 w-16 text-primary-foreground" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Imóveis Paragominas</h2>
        <p className="text-muted-foreground">Carregando...</p>
      </div>
    </div>
  );
};
