// utils/generateWhatsAppLink.ts

/**
 * Gera um link do WhatsApp já com número e mensagem codificada.
 * Exemplo:
 *   generateWhatsAppLink('5511952249664', 'Olá, quero comprar flores!')
 *   → 'https://wa.me/5511999998888?text=Ol%C3%A1%2C%20quero%20comprar%20flores%21'
 */
export function generateWhatsAppLink(phone: string, message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}
