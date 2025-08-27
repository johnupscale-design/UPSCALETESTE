import { Calendar, Users, TrendingUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ProblemSolutionSection = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([false, false, false]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        {
          threshold: 0.2,
          rootMargin: "-50px 0px -50px 0px"
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => {
        if (observer) observer.disconnect();
      });
    };
  }, []);

  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  };
  return (
    <section className="pt-14 pb-20 relative overflow-hidden">
      {/* Background com gradient animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/30 to-pink-50/40"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100/20 via-transparent to-orange-100/20 animate-pulse"></div>
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-slow-spin"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-200/30 to-orange-200/30 rounded-full blur-3xl animate-slow-spin-reverse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-6" style={{ color: '#1c1a1a' }}>
            Você foca no cliente. <br />
            Nós, na <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">inovação</span>.
          </h2>
          {/* <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Automatizamos sua operação para você ter mais tempo e clientes mais felizes.
          </p> */}
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {/* Pilar 1 - Agendamento */}
          <div ref={setItemRef(0)} className="group relative order-2 md:order-none">
            <div className="relative p-3 md:p-8 h-56 md:h-72 bg-white/30 backdrop-blur-[30px] rounded-3xl border-2 border-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.15),0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.25),0_0_0_1px_rgba(255,255,255,0.5)] transition-all duration-500 hover:bg-white/40 hover:border-white/70 hover:scale-[1.02]">
              {/* Reflexo líquido mais intenso */}
              <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-t-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-white/15 to-transparent rounded-b-3xl pointer-events-none"></div>
              
              {/* Brilho nas bordas */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex md:flex-col md:items-center md:text-center h-full">
                {/* --- Layout Mobile --- */}
                <div className="flex items-center w-full md:hidden">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a41a7c2b4600395feaaa44.png" 
                    alt="Agendamento" 
                    className={`w-24 h-auto flex-shrink-0 mr-4 transition-all duration-700 ${
                      visibleItems[0] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '150ms' }}
                  />
                  <div className="flex-grow">
                    <h3 className={`text-lg font-semibold text-gray-800/95 leading-tight transition-all duration-700 ${
                      visibleItems[0] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>
                      Sua Reputação, Seu Maior Ativo.
                    </h3>
                    <p className={`text-sm text-gray-700/85 leading-relaxed transition-all duration-700 mt-2 ${
                      visibleItems[0] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '300ms' }}>
                      Nosso sistema fortalece seu Perfil no Google com as avaliações 5 estrelas dos seus clientes, atraindo mais público diretamente para você.
                    </p>
                  </div>
                </div>

                {/* --- Layout Desktop --- */}
                <div className="hidden md:flex md:flex-col md:items-center w-full">
                  <div className={`flex items-center justify-center w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-500/90 to-cyan-500/90 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-all duration-700 border border-white/50 shadow-lg ${
                    visibleItems[0] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '100ms' }}>
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold text-gray-800/95 leading-tight transition-all duration-700 mb-3 ${
                    visibleItems[0] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    Sua Reputação, Seu Maior Ativo.
                  </h3>
                  <p className={`text-sm text-gray-700/85 leading-relaxed transition-all duration-700 ${
                    visibleItems[0] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '300ms' }}>
                    Nosso sistema fortalece seu Perfil no Google com as avaliações 5 estrelas dos seus clientes, atraindo mais público diretamente para você.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pilar 2 - Clientes Engajados */}
          <div ref={setItemRef(1)} className="group relative order-1 md:order-none">
            <div className="relative p-3 md:p-8 h-56 md:h-72 bg-white/30 backdrop-blur-[30px] rounded-3xl border-2 border-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.15),0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.25),0_0_0_1px_rgba(255,255,255,0.5)] transition-all duration-500 hover:bg-white/40 hover:border-white/70 hover:scale-[1.02]">
              {/* Reflexo líquido mais intenso */}
              <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-t-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-white/15 to-transparent rounded-b-3xl pointer-events-none"></div>
              
              {/* Brilho nas bordas */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex md:flex-col md:items-center md:text-center h-full">
                {/* --- Layout Mobile --- */}
                <div className="flex items-center w-full md:hidden">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68af4fef00de61e0918fc07a.png" 
                    alt="Clientes Engajados" 
                    className={`w-24 h-auto flex-shrink-0 mr-4 transition-all duration-700 ${
                      visibleItems[1] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '150ms' }}
                  />
                  <div className="flex-grow">
                    <h3 className={`text-lg font-semibold text-gray-800/95 leading-tight transition-all duration-700 ${
                      visibleItems[1] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>
                      Sua Marca em Destaque Absoluto.
                    </h3>
                    <p className={`text-sm text-gray-700/85 leading-relaxed transition-all duration-700 mt-2 ${
                      visibleItems[1] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '300ms' }}>
                      Criamos um ambiente digital exclusivo para sua marca, onde a jornada do cliente é focada em você, sem a distração de concorrentes.
                    </p>
                  </div>
                </div>

                {/* --- Layout Desktop --- */}
                <div className="hidden md:flex md:flex-col md:items-center w-full">
                  <div className={`flex items-center justify-center w-14 h-14 flex-shrink-0 bg-gradient-to-br from-purple-500/90 to-pink-500/90 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-all duration-700 border border-white/50 shadow-lg ${
                    visibleItems[1] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '100ms' }}>
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold text-gray-800/95 leading-tight transition-all duration-700 mb-3 ${
                    visibleItems[1] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    Sua Marca em Destaque Absoluto.
                  </h3>
                  <p className={`text-sm text-gray-700/85 leading-relaxed transition-all duration-700 ${
                    visibleItems[1] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '300ms' }}>
                                          Criamos um ambiente digital exclusivo para sua marca, onde a jornada do cliente é focada em você, sem a distração de concorrentes.
                    </p>
                  </div>
                </div>
            </div>
          </div>

          {/* Pilar 3 - Controle e Receita */}
          <div ref={setItemRef(2)} className="group relative order-3 md:order-none">
            <div className="relative p-3 md:p-8 h-56 md:h-72 bg-white/30 backdrop-blur-[30px] rounded-3xl border-2 border-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.15),0_0_0_1px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(31,38,135,0.25),0_0_0_1px_rgba(255,255,255,0.5)] transition-all duration-500 hover:bg-white/40 hover:border-white/70 hover:scale-[1.02]">
              {/* Reflexo líquido mais intenso */}
              <div className="absolute top-0 left-0 right-0 h-2/5 bg-gradient-to-b from-white/40 via-white/20 to-transparent rounded-t-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1/5 bg-gradient-to-t from-white/15 to-transparent rounded-b-3xl pointer-events-none"></div>
              
              {/* Brilho nas bordas */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex md:flex-col md:items-center md:text-center h-full">
                {/* --- Layout Mobile --- */}
                <div className="flex items-center w-full md:hidden">
                  <img 
                    src="https://storage.googleapis.com/msgsndr/bwIqmcdNeNlOPKQFF6DF/media/68a4aa5eeddaa3f420eb7c63.png" 
                    alt="Controle e Receita" 
                    className={`w-24 h-auto flex-shrink-0 mr-4 transition-all duration-700 ${
                      visibleItems[2] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '150ms' }}
                  />
                  <div className="flex-grow">
                    <h3 className={`text-lg font-semibold text-gray-800/95 leading-tight transition-all duration-700 ${
                      visibleItems[2] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '200ms' }}>
                      Sua Conexão Direta com o Cliente.
                    </h3>
                    <p className={`text-sm text-gray-700/85 leading-relaxed transition-all duration-700 mt-2 ${
                      visibleItems[2] 
                        ? 'translate-y-0 opacity-100' 
                        : 'translate-y-8 opacity-0'
                    }`} style={{ transitionDelay: '300ms' }}>
                      Integre seu Instagram, WhatsApp e redes sociais para fortalecer sua comunidade e construir uma base de clientes que é 100% sua.
                    </p>
                  </div>
                </div>

                {/* --- Layout Desktop --- */}
                <div className="hidden md:flex md:flex-col md:items-center w-full">
                  <div className={`flex items-center justify-center w-14 h-14 flex-shrink-0 bg-gradient-to-br from-green-500/90 to-emerald-500/90 backdrop-blur-sm rounded-2xl mb-4 group-hover:scale-110 transition-all duration-700 border border-white/50 shadow-lg ${
                    visibleItems[2] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '100ms' }}>
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className={`text-lg font-semibold text-gray-800/95 leading-tight transition-all duration-700 mb-3 ${
                    visibleItems[2] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '200ms' }}>
                    Sua Conexão Direta com o Cliente.
                  </h3>
                  <p className={`text-sm text-gray-700/85 leading-relaxed transition-all duration-700 ${
                    visibleItems[2] 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-8 opacity-0'
                  }`} style={{ transitionDelay: '300ms' }}>
                    Integre seu Instagram, WhatsApp e redes sociais para fortalecer sua comunidade e construir uma base de clientes que é 100% sua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;