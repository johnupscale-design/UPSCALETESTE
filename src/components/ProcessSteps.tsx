import React from "react";
import { FileText, Users, Rocket } from "lucide-react";

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

const ProcessStep = ({ number, title, description, icon, className }: ProcessStepProps) => {
  return (
    <div className={`text-center group ${className}`}>
      <div className="relative mb-6">
        {/* Moldura Externa Liquid Glass */}
        <div className="w-24 h-24 mx-auto rounded-3xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-xl p-2">
          {/* Icon Container with Number Inside - Liquid Glass Effect */}
          <div className="w-full h-full rounded-2xl flex flex-col items-center justify-center text-primary group-hover:scale-105 transition-all duration-300 ease-out relative backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
            {/* Number Badge - Top Right - Sobreposto */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-20 shadow-lg" style={{ backgroundColor: '#1B1A1A' }}>
              {number}
            </div>
            
            {/* Icon */}
            <div className="mt-1">
              {React.cloneElement(icon as React.ReactElement, { size: 32 })}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold text-foreground leading-tight">
          {title}
        </h3>
        
        <p className="text-base text-muted-foreground leading-relaxed max-w-sm mx-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

const ProcessSteps = () => {
  return (
    <section className="py-20 lg:py-32" style={{ backgroundColor: '#e7f3faff' }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          {/* Ícone acima do título */}
          <div className="flex justify-center mb-6">
            <img 
              src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a56d77f0f9c3eab11cd7d4.png" 
              alt="Como Funciona" 
              className="w-16 h-16 object-contain"
            />
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Como <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nosso processo é simples e eficiente. Você só precisa nos contar sobre seu negócio e cuidamos do resto.
          </p>
        </div>
        
        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          <ProcessStep
            number="1"
            title="Conte-nos sobre seu negócio"
            description="Preencha um formulário rápido com as informações principais: sua logo, fotos do espaço, serviços e horários."
            icon={<FileText />}
            className="hover:-translate-y-2 transition-all duration-500 ease-out"
          />
          
          <ProcessStep
            number="2"
            title="Nossa equipe entra em ação"
            description="Deixe com a gente! Nossos especialistas em design e marketing constroem sua plataforma personalizada, otimizada para agendamentos."
            icon={<Users />}
            className="hover:-translate-y-2 transition-all duration-500 ease-out"
          />
          
          <ProcessStep
            number="3"
            title="Receba sua plataforma pronta!"
            description="Agende uma chamada de apresentação no melhor horário para você e veja seu novo site no ar, já funcionando para atrair clientes."
            icon={<Rocket />}
            className="hover:-translate-y-2 transition-all duration-500 ease-out"
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
