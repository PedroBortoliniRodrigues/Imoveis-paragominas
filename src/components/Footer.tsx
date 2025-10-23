import { Home, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary p-2 rounded-lg">
                <Home className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">Imóveis Paragominas</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Encontre o imóvel dos seus sonhos em Paragominas. Casas e lotes com as melhores condições.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary smooth-transition">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/casas" className="text-muted-foreground hover:text-primary smooth-transition">
                  Casas
                </Link>
              </li>
              <li>
                <Link to="/lotes" className="text-muted-foreground hover:text-primary smooth-transition">
                  Lotes
                </Link>
              </li>
              <li>
                <Link to="/vender" className="text-muted-foreground hover:text-primary smooth-transition">
                  Anunciar Imóvel
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>(91) 98765-4321</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>contato@imoveisparagominas.com.br</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Home className="h-4 w-4 text-primary" />
                <span>Paragominas, PA</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-secondary p-2 rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary p-2 rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-secondary p-2 rounded-lg hover:bg-primary hover:text-primary-foreground smooth-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Imóveis Paragominas. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Feito com ❤️ em Paragominas - PA
          </p>
        </div>
      </div>
    </footer>
  );
};
