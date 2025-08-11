import { Button } from "@/components/ui/button";
import { Play, Star, Users, Calendar, TrendingUp } from "lucide-react";
import dashboardImage from "@/assets/dashboard-hero.jpg";

const HeroSection = () => {
  return (
    /* ===== SEÇÃO DE INTRODUÇÃO (HERO) ===== */
    /* Contém: Título principal, proposta de valor, CTA e números de credibilidade */
    <section className="relative min-h-screen pt-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(168, 85, 247, 0.2) 2px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
          {/* Conteúdo Principal - Título, Proposta de Valor e CTA */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme a gestão do seu negócio e{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                conquiste mais clientes
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Uma plataforma completa para agendamento inteligente, gestão de clientes e marketing, 
              com um smart website personalizado para sua marca.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Comece Grátis Agora
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                <Play className="w-5 h-5 mr-2" />
                Veja as Funcionalidades
              </Button>
            </div>

            {/* Números de Credibilidade - Prova Social */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">130k+</span>
                </div>
                <p className="text-sm text-muted-foreground">Empresas parceiras</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  <span className="text-2xl font-bold">1B+</span>
                </div>
                <p className="text-sm text-muted-foreground">Agendamentos</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-5 h-5 text-primary mr-2" />
                  <span className="text-2xl font-bold">450k+</span>
                </div>
                <p className="text-sm text-muted-foreground">Profissionais</p>
              </div>
              <div>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-accent mr-2" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <p className="text-sm text-muted-foreground">Avaliação média</p>
              </div>
            </div>
          </div>
          
          {/* Imagem de Destaque do Dashboard */}
          <div className="flex-1 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={dashboardImage}
                alt="Dashboard da Upscale mostrando interface de agendamento"
                className="relative rounded-2xl shadow-2xl w-full h-auto max-w-3xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;