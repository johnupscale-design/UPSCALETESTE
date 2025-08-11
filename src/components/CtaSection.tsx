import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    /* ===== SEÇÃO DE CTA FINAL ===== */
    /* Contém: Chamada para ação final do site */
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Dê o próximo passo para o sucesso do seu negócio
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          É fácil, rápido e você pode começar agora. Sem compromisso.
        </p>
        <Button size="lg" variant="secondary" className="px-12 py-4 text-lg">
          Comece Agora de Graça
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;