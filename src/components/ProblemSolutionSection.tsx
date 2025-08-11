import { Calendar, Users, TrendingUp } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    /* ===== SEÇÃO DE PROBLEMA E SOLUÇÃO ===== */
    /* Contém: Apresentação do problema e os três pilares de solução */
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Apresentação do Problema Central */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            O seu negócio merece crescer.{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              A gente faz a parte difícil.
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chega de perder tempo com agendamentos por telefone, clientes que faltam e planilhas confusas. 
            A Upscale automatiza a sua operação, liberando tempo para você focar no que realmente importa: 
            seus clientes e seu crescimento.
          </p>
        </div>

        {/* Três Pilares de Solução */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pilar 1: Agendamento Inteligente */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Agendamento 24/7 sem dor de cabeça</h3>
            <p className="text-muted-foreground">
              Seus clientes podem agendar a qualquer hora, de qualquer lugar. 
              Sistema inteligente que reduz conflitos e otimiza sua agenda.
            </p>
          </div>

          {/* Pilar 2: Gestão de Clientes */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Clientes mais engajados e fiéis</h3>
            <p className="text-muted-foreground">
              Lembretes automáticos, histórico completo e comunicação personalizada 
              que mantém seus clientes sempre conectados ao seu negócio.
            </p>
          </div>

          {/* Pilar 3: Controle e Receita */}
          <div className="text-center group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Controle total e aumento de receita</h3>
            <p className="text-muted-foreground">
              Relatórios inteligentes, análise de performance e insights que ajudam 
              você a tomar decisões estratégicas para crescer ainda mais.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;