import { Star } from "lucide-react";
import anaImage from "@/assets/testimonial-ana.jpg";
import joaoImage from "@/assets/testimonial-joao.jpg";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            A voz de quem já está{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              crescendo
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg mb-6">
              "A Upscale me deu um website profissional e um assistente virtual que mudou meu jogo. 
              Minhas reservas triplicaram!"
            </blockquote>
            <div className="flex items-center">
              <img
                src={anaImage}
                alt="Ana Paula"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="font-semibold">Ana Paula</div>
                <div className="text-sm text-muted-foreground">Proprietária do Salão Pura Beleza</div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-2xl border shadow-lg">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg mb-6">
              "O chatbot com IA é um diferencial enorme. Meus clientes adoram e eu consigo focar no atendimento. 
              Recomendo muito!"
            </blockquote>
            <div className="flex items-center">
              <img
                src={joaoImage}
                alt="João Silva"
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <div className="font-semibold">João Silva</div>
                <div className="text-sm text-muted-foreground">Studio Mãos de Ouro</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;