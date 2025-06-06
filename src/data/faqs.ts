// src/data/faqs.ts

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: '1',
    question: 'Como faço para finalizar uma compra?',
    answer:
      'Para finalizar sua compra, adicione os produtos desejados ao carrinho e clique no ícone de carrinho no canto superior direito. Você será direcionado à página de checkout, onde poderá inserir seus dados de entrega e escolher a forma de pagamento. Após confirmar as informações, clique em “Finalizar Pedido”.'
  },
  {
    id: '2',
    question: 'Quais formas de pagamento são aceitas?',
    answer:
      'Aceitamos pagamentos por cartão de crédito (Visa, MasterCard, American Express), boleto bancário e Pix. No caso de boleto, o prazo de compensação pode levar até 3 dias úteis. Para pagamentos via Pix, o pedido é confirmado em até 1 hora após a quitação.'
  },
  {
    id: '3',
    question: 'Qual o prazo de entrega das flores?',
    answer:
      'O prazo de entrega varia de acordo com a sua região. Em capitais e regiões metropolitanas, o prazo médio é de 1 a 2 dias úteis. Para cidades do interior ou regiões mais distantes, o prazo pode chegar a 3 a 5 dias úteis. Durante datas comemorativas (Dia das Mães, Dia dos Namorados, Natal), esse prazo pode ser um pouco maior devido ao alto volume de pedidos.'
  },
  {
    id: '4',
    question: 'Vocês entregam flores em festas e eventos?',
    answer:
      'Sim! Trabalhamos com entregas em residências, empresas e locais de eventos em toda a área de cobertura. Basta informar o endereço completo e a data/hora desejada na página de checkout. Caso seja um pedido grande ou personalizado, entre em contato com a nossa equipe de atendimento para confirmar disponibilidade e condições especiais.'
  },
  {
    id: '5',
    question: 'É possível personalizar o arranjo de flores?',
    answer:
      'Claro! Oferecemos a opção de personalização. Você pode escolher o tipo de flores, cores predominantes e estilo (romântico, moderno, rústico etc.). Para isso, selecione “Personalizar Arranjo” em nossa seção de produtos ou envie uma mensagem via formulário de contato informando seu orçamento e preferência. Nossa equipe entrará em contato para criar um orçamento personalizado.'
  },
  {
    id: '6',
    question: 'Como faço para acompanhar meu pedido?',
    answer:
      'Após a confirmação do pagamento, você receberá um e-mail automático com o código de rastreamento do pedido, assim que ele for despachado pelos correios ou transportadora parceira. Também é possível acessar sua conta no site em “Meus Pedidos” para visualizar o status atualizado. Caso tenha dúvidas, entre em contato pelo chat ou e-mail atendimento@meusiteflores.com.br.'
  },
  {
    id: '7',
    question: 'Qual a política de troca e devolução?',
    answer:
      'Aceitamos troca ou devolução em até 7 dias corridos após o recebimento, conforme o Código de Defesa do Consumidor. Para solicitar, entre em contato pelo e-mail atendimento@meusiteflores.com.br com o número do pedido e motivo da solicitação. Produtos danificados durante o transporte ou que apresentem defeito devem ser fotografados e reportados imediatamente para analisarmos. Observação: flores são itens perecíveis; avaliaremos cada caso para encontrar a melhor solução.'
  },
  {
    id: '8',
    question: 'Vocês trabalham com assinaturas mensais de flores?',
    answer:
      'Sim, temos planos de assinatura mensal, trimestral e semestral. Você receberá um arranjo diferente a cada período escolhido. Para contratar, acesse nossa página de Assinaturas, selecione a frequência e preencha seus dados. A primeira entrega será realizada conforme o endereço informado e as próximas renovações ocorrerão automaticamente na data combinada. O cancelamento pode ser feito a qualquer momento, basta enviar e-mail solicitando o cancelamento com 5 dias de antecedência da próxima entrega.'
  },
  {
    id: '9',
    question: 'Como cuidar das flores após o recebimento?',
    answer:
      'Ao receber o arranjo, corte as hastes na diagonal e coloque-as em um vaso limpo com água fresca. Troque a água a cada dois dias e mantenha em local arejado, longe da luz solar direta e de calor excessivo. Utilize o aditivo floral que acompanha o pedido para aumentar a durabilidade. Se as pétalas murcharem, remova a parte danificada para evitar contaminação.'
  },
  {
    id: '10',
    question: 'Posso enviar flores para outro estado?',
    answer:
    'Sim, realizamos entregas para todo território nacional. No entanto, devido à distância, recomendamos escolher flores mais resistentes ao transporte ou embalagens especiais para viagem longa. Consulte o prazo estimado de entrega no checkout de acordo com o CEP de destino. Para destinos muito distantes, pode haver pequena variação no prazo padrão informado.'
  }
];

export default faqs;
