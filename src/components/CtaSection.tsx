import React from "react";

const CtaSection = () => (
  <section className="py-20 bg-[#F5F5F5] text-primary-foreground">
    <div className="container mx-auto px-4 max-w-2xl">
      <div className="flex flex-col gap-8 mb-12">
        {/* Card 1: Fale conosco */}
        <div className="rounded-3xl p-7 flex flex-col gap-4 shadow-xl h-full min-h-[220px]" style={{ background: '#252525' }}>
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-1">Fale conosco</h3>
          <p className="text-white/80 text-lg md:text-xl mb-4">Veja uma demo personalizada da Upscale HQ.</p>
          <button className="bg-white text-[#252525] font-semibold rounded-full px-6 py-2 w-fit self-start hover:bg-gray-200 transition" onClick={() => window.location.href = '/agendamento'}>Agendar demo</button>
        </div>
        {/* Card 2: Veja a Demo */}
        <div className="rounded-3xl p-7 flex flex-col gap-4 bg-white shadow-xl h-full min-h-[220px]">
          <div className="w-12 h-12 rounded-xl bg-[#E7F3FA] flex items-center justify-center mb-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M8 7v10l8-5-8-5z" stroke="#252525" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="text-[#252525] text-2xl md:text-3xl font-bold mb-1">Veja a Demo</h3>
          <p className="text-[#252525]/80 text-lg md:text-xl mb-4">Aprenda tudo sobre a Upscale em 15min</p>
          <button className="bg-[#252525] text-[#F3F3F3] font-semibold rounded-full px-8 py-2 w-fit self-start hover:bg-gray-200 transition" onClick={() => window.location.href = '/agendamento'}>Ver agora</button>
        </div>
      </div>
      {/* Card 3: Copy principal em container com gradiente azul */}
      <div className="rounded-3xl p-7 flex flex-col gap-4 bg-gradient-to-br from-primary to-accent text-primary-foreground items-start shadow-xl h-full min-h-[220px] -mt-3">
        <h2 className="text-2xl md:text-3xl font-bold mb-1">Dê o próximo passo para o sucesso do seu negócio</h2>
        <p className="text-lg md:text-xl mb-4 opacity-90 max-w-2xl">É fácil, rápido e você pode começar agora. Sem compromisso.</p>
        <button className="bg-white text-[#252525] font-semibold rounded-full px-8 py-2 w-fit self-start hover:bg-gray-200 transition" onClick={() => window.location.href = '/agendamento'}>
          Comece Agora de Graça
        </button>
      </div>
    </div>
  </section>
);

export default CtaSection;
