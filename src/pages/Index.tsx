import CtaSection from "@/components/CtaSection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSteps from "@/components/ProcessSteps";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";

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
      <CtaSection />

      {/* ===== 8. FAQ ===== */}
      {/* Perguntas Frequentes logo abaixo do CTA */}
      <FaqSection />


      {/* ===== 9. RODAPÉ ===== */}
      {/* Informações da empresa, links e contato */}
      <Footer />
    </div>
  );
};

export default Index;
