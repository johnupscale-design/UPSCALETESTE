import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  // Removido o estado do modal

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Upscale
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
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

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a
              href="https://links.upscale.vu/widget/survey/oxeRZfpDcbB0zapaYqHl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Começar Grátis
            </a>
          </Button>
        </div>
      </div>
      {/* Modal removido, formulário abre em nova aba */}
    </header>
  );
};

export default Header;