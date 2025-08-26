import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    /* ===== SEÇÃO DE PLANOS E PREÇOS ===== */
    /* Contém: Três cartões de planos (Gratuito, Pro, Enterprise) */
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Escolha o plano ideal para o seu{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              crescimento
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comece grátis, sem cartão de crédito, e faça um upgrade quando precisar.
          </p>
        </div>

        {/* Grade de Cartões de Planos */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* PLANO Pro (Mais Popular) */}
          <div className="bg-gradient-to-br from-primary to-accent p-[2px] rounded-2xl relative">
            <div className="bg-card p-8 rounded-2xl h-full">
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-sm font-medium">
                  MAIS POPULAR
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Plano Pro</h3>
              <p className="text-muted-foreground mb-6">Ideal para salões que estão crescendo</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$ 29</span>
                <span className="text-muted-foreground">/mês por colaborador</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Todas do Plano Gratuito
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Múltiplos Calendários
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Chatbot com IA
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Relatórios Avançados
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Suporte Prioritário
                </li>
              </ul>
              <a
                href="https://links.upscale.vu/widget/booking/CydNwkofOGSg2NY6lH4M"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-center rounded-md py-3 font-bold text-white block transition-all"
              >
                Experimente por 14 dias
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;