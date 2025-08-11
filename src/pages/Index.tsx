import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
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
      
      {/* ===== 3. SEÇÃO DE DETALHAMENTO DAS FUNCIONALIDADES ===== */}
      {/* Smart Website, Inteligência Artificial e Agilidade Máxima */}
      <FeaturesSection />
      
      {/* ===== 4. SEÇÃO DE DEPOIMENTOS ===== */}
      {/* Carrossel de depoimentos de clientes */}
      <TestimonialsSection />
      
      {/* ===== 5. SEÇÃO DE PLANOS E PREÇOS ===== */}
      {/* Três cartões de planos (Gratuito, Pro, Enterprise) */}
      <PricingSection />
      
      {/* ===== 6. SEÇÃO DE CTA FINAL ===== */}
      {/* Chamada para ação de fechamento */}
      <CtaSection />
      
      {/* ===== 7. RODAPÉ ===== */}
      {/* Informações da empresa, links e contato */}
      <Footer />
    </div>
  );
};

export default Index;
