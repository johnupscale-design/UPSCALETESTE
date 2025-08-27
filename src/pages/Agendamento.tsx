import React from "react";

const AgendamentoPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 flex items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 md:p-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Excelente decisão!
        </h1>
        <p className="text-lg text-gray-600 mb-10">Vamos criar a primeira versão do seu Smart Website.</p>
        <div className="flex flex-row items-center justify-center space-x-2 md:space-x-4 mb-12">
          <div className="flex items-center text-sm font-medium text-indigo-600">
            <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
            </div>
            <span className="ml-2 md:ml-3 text-xs md:text-sm">Agende</span>
          </div>
          <div className="w-4 md:w-8 h-px bg-gray-300"></div>
          <div className="flex items-center text-sm font-medium text-gray-500">
            <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z"></path></svg>
            </div>
            <span className="ml-2 md:ml-3 text-xs md:text-sm">Personalize</span>
          </div>
          <div className="w-4 md:w-8 h-px bg-gray-300"></div>
          <div className="flex items-center text-sm font-medium text-gray-500">
            <div className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
            <span className="ml-2 md:ml-3 text-xs md:text-sm">Apresentação</span>
          </div>
        </div>
        <div className="text-left bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Para que nossa chamada seja 100% focada no seu sucesso, o processo funciona em duas etapas rápidas:</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-indigo-700">Passo 1: Agendamento</h3>
              <p className="text-gray-600">Primeiro, você escolherá o melhor dia e horário na nossa agenda para a apresentação do seu site.</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Passo 2: Personalização Rápida</h3>
              <p className="text-gray-600">Depois, você será direcionado para um formulário de 5 minutos onde nos dará as informações essenciais (seus serviços, horários, etc.) para construirmos a prévia personalizada do seu site.</p>
            </div>
          </div>
        </div>
        <div className="bg-indigo-50 text-indigo-800 rounded-lg p-4 mb-10">
          <p className="font-medium">Ao final deste processo, você não verá uma demonstração genérica, mas sim o <strong>seu próprio site</strong> ganhando vida.</p>
        </div>
        <a href="#" className="w-full md:w-auto inline-block bg-indigo-600 text-white font-bold text-lg py-4 px-10 rounded-lg shadow-md hover:bg-indigo-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300">
          Avançar para o Agendamento
        </a>
      </div>
    </div>
  );
};

export default AgendamentoPage;
