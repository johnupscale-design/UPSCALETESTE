import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="pt-12">
          <h1 className="text-3xl font-bold mb-2">Nossos Termos de Serviço (O nosso "Pacto de Transparência")</h1>
        </div>
        <p className="text-sm text-gray-500 mb-6">Última Atualização: 20/08/2025</p>
        <p className="mb-6">Bem-vindo à Upscale. A nossa missão é te libertar da dependência de marketplaces, transformando você de "inquilino" para "dono" do seu crescimento. Estes termos não são para te prender com letras miúdas; são para garantir que nossa parceria seja clara, justa e focada no seu sucesso.</p>
        <h2 className="text-xl font-semibold mb-2">1. A Nossa Filosofia: As Regras São Suas</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Seus Clientes são Seus: Sua base de clientes, seus dados e seus agendamentos são ativos 100% do seu negócio, não nossos. Nós nunca iremos sugerir um concorrente para um cliente seu.</li>
          <li>Sua Reputação é Sua: Nossa tecnologia trabalha para fortalecer o Perfil do Google do seu negócio, não o nosso. As avaliações 5 estrelas que você conquista são suas por direito.</li>
          <li>Você está no Controle: Você tem total liberdade para usar seus próprios canais (Instagram, WhatsApp) e direcionar seus clientes para onde quiser. Nosso objetivo é te dar autonomia, não criar dependência forçada.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">2. O Teste Gratuito de 14 Dias: Risco Zero de Verdade</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Sem Cartão de Crédito: Você não precisa fornecer dados de pagamento para iniciar o teste gratuito.</li>
          <li>Nós Construímos Para Você: Após você nos enviar seus materiais (logo, fotos), nossa equipe monta seu Smart Website e todo o ecossistema. Entregamos tudo pronto em uma chamada de ativação pessoal.</li>
          <li>Sem Compromisso: Ao final dos 14 dias, você decide se quer continuar. Sem pressão, sem pegadinhas.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">3. O Plano Upscale: €29/mês. Tudo Incluído.</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Preço Fixo, Sem Surpresas: Por €29 por mês, você tem acesso a TUDO. Isso inclui sua Fundação Digital, o Motor de Agendamentos, a Máquina de Marketing, Gestão do Negócio com colaboradores ilimitados e nosso Suporte Prioritário.</li>
          <li>Pagamento e Faturação: A cobrança é feita mensalmente, de forma recorrente. A falha no pagamento resultará na suspensão do serviço até a regularização, mas seus dados e sua base de clientes estarão seguros.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">4. Política de Cancelamento: Liberdade Para Sair</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Sem Contrato de Longo Prazo: Você pode cancelar sua assinatura a qualquer momento, sem multa ou burocracia.</li>
          <li>Portabilidade de Dados: Se decidir sair, nós garantimos a exportação da sua lista de clientes. Eles são seus, afinal.</li>
        </ul>
        <h2 className="text-xl font-semibold mb-2">5. Uso Aceitável</h2>
        <p className="mb-6">Esperamos que você utilize a plataforma Upscale para o propósito que ela foi criada: crescer o seu negócio de forma honesta e autêntica. Atividades ilegais, spam ou qualquer prática que prejudique a reputação da sua própria marca ou da nossa não serão toleradas.</p>
      </main>
      <Footer />
    </>
  );
}
