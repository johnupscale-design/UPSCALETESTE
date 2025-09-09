import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingSection = () => {
  return (
    /* ===== SEÇÃO DE PLANOS E PREÇOS ===== */
    /* Contém: Três cartões de planos (Gratuito, Pro, Enterprise) */
    <section id="pricing" className="pt-20 pb-32">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16 ">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Crescimento sem surpresas.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <br></br>Apenas resultados.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Um único plano completo que inclui tudo. Começas com 14 dias gratuitos, com a nossa equipa a configurar tudo para ti.
          </p>
        </div>

        {/* Grade de Cartões de Planos */}
        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {/* PLANO Pro (Mais Popular) */}
          <div className="bg-gradient-to-br from-primary to-accent p-[3px] rounded-2xl relative">
            <div className="bg-card p-8 rounded-2xl h-full">
              <div className="text-center mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent text-sm font-medium">
                  PLANO COMPLETO
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Plano Pro</h3>
              <p className="text-muted-foreground mb-6">Acesso total à nossa plataforma para construíres a tua marca e aumentares os teus agendamentos.</p>
              <div className="mb-6">
                <span className="text-4xl font-bold"> 29,99€</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Smart Website 100% Personalizado 
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Sistema de Agendamento Online 24/7 
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Automação de Avaliações para o Google 
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Colaboradores Ilimitados sem custo extra 
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Onboarding "Nós Construímos Para Você"
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-primary mr-3" />
                  Suporte Prioritário via WhatsApp
                </li>
              </ul>
              <a
                href="/agendamento"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-center rounded-md py-3 font-bold text-white block transition-all"
              >
                 Iniciar teste de 14 dias
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;