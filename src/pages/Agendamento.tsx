import React from "react";

const Agendamento = () => {
  return (
    <div className="bg-gray-50 text-gray-800 flex items-center justify-center pt-6 pb-3 px-3 mt-0" style={{ fontFamily: 'Inter, sans-serif' }}>
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg text-center overflow-hidden">
        <div className="p-6 sm:p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Ótima escolha!</h1>
          <p className="text-lg text-gray-600 mb-4">Seu site está quase pronto. <br></br>Faltam 2 passos:</p>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="flex items-center text-sm font-medium text-blue-600">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <span className="ml-2">Agende</span>
            </div>
            <div className="w-12 h-px bg-gray-300"></div>
            <div className="flex items-center text-sm font-medium text-gray-500">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center font-bold">2</div>
              <span className="ml-2">Personalize</span>
            </div>
          </div>
          <div className="text-left bg-gray-50 rounded-lg p-5 mb-1 border border-gray-200">
            <div className="space-y-2">
              <div>
                <h3 className="font-bold text-blue-700">1. Agendamento</h3>
                <p className="text-gray-600">Escolha o melhor dia e horário para apresentarmos seu novo site.</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-700">2. Personalização</h3>
                <p className="text-gray-600">Em seguida, preencha um formulário rápido (3 min) para construirmos sua prévia.</p>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 text-blue-800 rounded-lg p-2">
            <p className="font-medium">Você verá uma prévia do <strong>seu próprio site</strong>, não uma demonstração genérica.</p>
          </div>
        </div>
        <a href="https://links.upscale.vu/widget/booking/CydNwkofOGSg2NY6lH4M" className="w-full block bg-[#252525] text-white text-base py-5 px-8 transition-colors hover:bg-[#3a3a3a] focus:outline-none focus:ring-4 focus:ring-gray-400" target="_blank" rel="noopener noreferrer">
          Avançar para o Agendamento
        </a>
      </div>
    </div>
  );
};

export default Agendamento;
