import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* ===== 1. SEÇÃO DE INTRODUÇÃO (HERO) ===== */}
      {/* Título, proposta de valor, CTA e números de credibilidade */}
      <HeroSection />
      
      {/* ===== 2. SEÇÃO DE PROBLEMA E SOLUÇÃO ===== */}
      {/* Apresentação do problema e três pilares de solução */}
      <ProblemSolutionSection />
      
      {/* ===== 3. SEÇÃO DE PROCESSO - COMO FUNCIONA ===== */}
      {/* Passos simples do processo de criação */}
      <ProcessSteps />
      
      {/* ===== 4. SEÇÃO DE DETALHAMENTO DAS FUNCIONALIDADES ===== */}
      {/* Smart Website, Inteligência Artificial e Agilidade Máxima */}
      <FeaturesSection />
      
      {/* ===== 5. SEÇÃO DE DEPOIMENTOS ===== */}
      {/* Carrossel de depoimentos de clientes */}
      <TestimonialsSection />
      
      {/* ===== 6. SEÇÃO DE PLANOS E PREÇOS ===== */}
      {/* Três cartões de planos (Gratuito, Pro, Enterprise) */}
      <PricingSection />

      {/* ===== 7. SEÇÃO DE CTA FINAL ===== */}
      {/* Chamada para ação de fechamento */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Dê o próximo passo para o sucesso do seu negócio
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            É fácil, rápido e você pode começar agora. Sem compromisso.
          </p>
          <button className="px-12 py-4 text-lg bg-secondary text-secondary-foreground rounded-md font-bold hover:bg-secondary/80 transition-all">
            Comece Agora de Graça
          </button>
        </div>
      </section>

      {/* ===== 8. RODAPÉ ===== */}
      {/* Informações da empresa, links e contato */}
      <Footer />
    </div>
  );
};

export default Index;
