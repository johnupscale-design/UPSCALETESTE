import { Button } from "@/components/ui/button";
import { Globe, Bot, Zap, Smartphone, Clock, Shield } from "lucide-react";

const FeaturesSection = () => {
  return (
    /* ===== SEÇÃO DE DETALHAMENTO DAS FUNCIONALIDADES ===== */
    /* Contém: Três blocos principais de funcionalidades detalhadas */
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Os recursos que só a{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Upscale oferece
            </span>{" "}
            para o seu sucesso
          </h2>
        </div>

        {/* Container das Funcionalidades Detalhadas */}
        <div className="space-y-24">
          {/* FUNCIONALIDADE 1: Smart Website */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Smart Website
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Seu Nome, Seu Domínio, Seus Clientes
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Tenha um website profissional que é o centro do seu universo digital. Com a sua marca, suas cores e seus links, ele é a ferramenta definitiva para transformar visitantes em agendamentos, sem dividir o palco com ninguém.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Smartphone className="w-4 h-4 mr-2 text-primary" />
                  Responsivo
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-primary" />
                  Pronto em minutos
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Shield className="w-4 h-4 mr-2 text-primary" />
                  Seguro
                </div>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Crie seu Website Grátis
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-card to-muted p-8 rounded-2xl border">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-primary to-accent rounded w-3/4"></div>
                  <div className="h-3 bg-muted-foreground/20 rounded w-1/2"></div>
                  <div className="h-3 bg-muted-foreground/20 rounded w-2/3"></div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="h-12 bg-primary/10 rounded flex items-center justify-center">
                      <span className="text-sm text-primary font-medium">Agendar</span>
                    </div>
                    <div className="h-12 bg-accent/10 rounded flex items-center justify-center">
                      <span className="text-sm text-accent font-medium">Contato</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FUNCIONALIDADE 2: Inteligência Artificial */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
                <Bot className="w-4 h-4 mr-2" />
                Inteligência Artificial
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Seu Assistente Virtual Focado em Conversão
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso chatbot com IA não é apenas um robô, é seu funcionário mais eficiente. Ele trabalha 24/7 para qualificar leads, agendar horários e responder dúvidas, garantindo que nenhum cliente em potencial seja perdido.
              </p>
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                Conheça o Chatbot
              </Button>
            </div>
            <div className="lg:order-1 relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-card to-muted p-6 rounded-2xl border">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Olá! Como posso ajudar você hoje?</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 justify-end">
                    <div className="bg-primary/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Gostaria de agendar um corte</p>
                    </div>
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div className="bg-accent/10 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Perfeito! Que dia funciona melhor para você?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FUNCIONALIDADE 3: Agilidade Máxima */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Zap className="w-4 h-4 mr-2" />
                Agilidade Máxima
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Mais agilidade, menos atrito
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Nosso fluxo de agendamento é o mais rápido e intuitivo do mercado. Capture informações 
                valiosas dos seus leads, envie lembretes automáticos e reduza drasticamente a taxa de faltas.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Experimente a Agilidade
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-gradient-to-br from-card to-muted p-6 rounded-2xl border">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                    <span className="text-sm font-medium">Agendar Corte</span>
                    <Zap className="w-4 h-4 text-primary" />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="h-8 bg-primary/10 rounded flex items-center justify-center text-xs">Seg</div>
                    <div className="h-8 bg-primary rounded flex items-center justify-center text-xs text-primary-foreground">Ter</div>
                    <div className="h-8 bg-primary/10 rounded flex items-center justify-center text-xs">Qua</div>
                  </div>
                  <div className="p-3 bg-accent/5 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-2">Horários disponíveis</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="h-6 bg-accent/20 rounded text-xs flex items-center justify-center">09:00</div>
                      <div className="h-6 bg-accent rounded text-xs flex items-center justify-center text-accent-foreground">10:30</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;