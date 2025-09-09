import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Componente do Menu Mobile usando Portal
  const MobileMenu = () => (
    <div className="lg:hidden">
      {/* Backdrop único com fundo branco uniforme e       className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md" */}
      <div 
        className="fixed inset-0 bg-white/80 backdrop-blur-sm"
        style={{ zIndex: 9999 }}
        onClick={closeMenu}
      ></div>
      
      {/* Menu Sidebar */}
      <div 
        className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl"
        style={{ zIndex: 10000 }}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Header do Menu - SEM LOGO */}
          <div className="flex items-center justify-end">
            <button
              onClick={closeMenu}
              className="text-gray-900 hover:text-primary transition-colors p-2 rounded-md hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6">
            <a 
              href="/agendamento" 
              onClick={closeMenu}
              className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 border-b border-gray-100"
            >
              Funcionalidades
            </a>
            <a 
              href="/agendamento" 
              onClick={closeMenu}
              className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 border-b border-gray-100"
            >
              Preços
            </a>
            <a 
              href="/agendamento" 
              onClick={closeMenu}
              className="text-xl font-medium text-gray-800 hover:text-primary transition-colors py-3 border-b border-gray-100"
            >
              Depoimentos
            </a>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 pt-6">
            <Button 
              variant="outline" 
              className="justify-center text-gray-800 border-gray-300 hover:bg-gray-50 w-full py-3 text-lg"
              asChild
            >
              <a href="/agendamento">Entrar</a>
            </Button>
            <Button
              className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-3 text-lg font-medium"
              asChild
            >
              <a
                href="/agendamento"
                onClick={closeMenu}
              >
                Começar Grátis
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/45 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <a href="/" aria-label="Ir para a página inicial">
            <img 
              src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/689bc310d757ed4339084bce.png" 
              alt="Upscale Logo" 
              className="h-8 w-auto cursor-pointer" 
            />
          </a>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
            Depoimentos
          </a>
        </nav>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" className="hidden lg:inline-flex" asChild>
            <a href="/agendamento">Entrar</a>
          </Button>
          {/* Menu hambúrguer - visível apenas no mobile/tablet */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-900 hover:text-primary transition-colors p-3 rounded-md hover:bg-accent hover:text-accent-foreground"
          >
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
            <span className="sr-only">Menu</span>
          </button>
          {/* Botão CTA - visível apenas no desktop */}
          <Button
            className="hidden lg:inline-flex bg-[#1B1A1A] hover:bg-[#1B1A1A]/90 text-white"
            asChild
          >
            <a href="/agendamento">Começar Grátis</a>
          </Button>
        </div>
      </div>
      
      {/* Renderizar menu via Portal diretamente no body */}
      {isMenuOpen && createPortal(<MobileMenu />, document.body)}
    </header>
  );
};

export default Header;