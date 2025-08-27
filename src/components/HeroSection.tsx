import { Button } from "@/components/ui/button";
import { Play, Star, Users, Calendar, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    /* ===== SEÇÃO DE INTRODUÇÃO (HERO) ===== */
    /* Contém: Título principal, proposta de valor, CTA e números de credibilidade */
    <section className="relative min-h-screen pt-8 md:pt-20 lg:pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(168, 85, 247, 0.2) 2px, transparent 0)', backgroundSize: '50px 50px' }}></div>
      </div>
      
      {/* Background Image - Mobile Only */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 z-0 md:hidden">
        <img
          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/689ec6ed5bdfcf322dcf75bf.png"
          alt="Background decorativo mobile"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Background Image - Desktop Only */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-2/3 z-10 hidden md:block">
        <img
          src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/689c0b954687e12cd0831299.png"
          alt="Background decorativo desktop"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlay para transição suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-background/20 to-background/80"></div>
      </div>
      
      {/* Gradiente de transição estendido */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-3/4 z-5 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent via-transparent to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-20">
          {/* Conteúdo Principal - Título, Proposta de Valor e CTA */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[38px] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Onde sua marca é a{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                única progagonista.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-8 max-w-sm sm:max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
              Assuma em um só lugar o controle da sua aquisição de clientes, da sua reputação online e do relacionamento com sua bae.
            </p>

            {/* Animated Container - Altura do container liquid glass na sessão (no mobile, esse -mb-0 aumentar aproxima do botão)  */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 -mb-2 sm:mb-12">
              <Button size="lg" className="bg-[#1B1A1A] hover:bg-[#1B1A1A]/90 text-white px-4 sm:px-8 py-6 sm:py-4 text-base sm:text-lg">
                Comece Grátis Agora
              </Button>
              {/* Espaçamento extra abaixo do botão para mobile */}
              <div className="block sm:hidden" style={{ height: '16px' }}></div>
            </div>
          </div>
          
          {/* Animated Container - Hero Section */}
          <div className="flex-1 lg:flex-[1.5] xl:flex-[2] relative z-20">
            <div className="animated-container lg:scale-125 xl:scale-150">
              <div className="media-container">
                <div className="frontpage-image">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/689b8e0ed47b90f01a6b8ad5.png" 
                    alt="Front Page" 
                  />
                </div>
                <div className="video-overlay">
                  <video autoPlay muted loop playsInline controls={false}>
                    <source 
                      src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/689b8e09d757ed584cffcab2.mp4" 
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
              
              {/* <div className="floating-icon icon-1"><i className="fa-solid fa-brain"></i></div> */}
              <div className="floating-icon icon-2"><i className="fa-solid fa-chart-line"></i></div>
              <div className="floating-icon icon-3"><i className="fa-solid fa-handshake"></i></div>
              <div className="floating-icon icon-4"><i className="fa-solid fa-robot"></i></div>
              <div className="floating-icon icon-5"><i className="fa-solid fa-briefcase"></i></div>
              <div className="floating-icon icon-6"><i className="fa-solid fa-microchip"></i></div>
              <div className="floating-icon icon-7"><i className="fa-solid fa-users"></i></div>
            </div>
          </div>
        </div>
        
        {/* Números de Credibilidade - Prova Social */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center pb-20 sm:pb-20 -mt-24 sm:pt-4 lg:pt-32 lg:pb-8">
          <div className="px-2">
            <div className="flex items-center justify-center mb-1 sm:mb-2">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 lg:w-12 lg:h-12 text-white mr-1 sm:mr-2 lg:mr-4" />
              <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white">1M+</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-white lg:text-white leading-tight">Agendamentos</p>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center mb-1 sm:mb-2">
              <Calendar className="w-4 sm:w-5 h-4 sm:h-5 lg:w-12 lg:h-12 text-white mr-1 sm:mr-2 lg:mr-4" />
              <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white">1B+</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-white lg:text-white leading-tight">Agendamentos</p>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center mb-1 sm:mb-2">
              <TrendingUp className="w-4 sm:w-5 h-4 sm:h-5 lg:w-12 lg:h-12 text-white mr-1 sm:mr-2 lg:mr-4" />
              <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white">450k+</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-white lg:text-white leading-tight">Profissionais</p>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center mb-1 sm:mb-2">
              <Star className="w-4 sm:w-5 h-4 sm:h-5 lg:w-12 lg:h-12 text-white mr-1 sm:mr-2 lg:mr-4" />
              <span className="text-xl sm:text-2xl lg:text-5xl font-bold text-white">4.8</span>
            </div>
            <p className="text-xs sm:text-sm lg:text-lg text-white lg:text-white leading-tight">Avaliação média</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
