// src/utils/generateWhatsAppLink.ts

/**
 * Gera um link do WhatsApp já com número e mensagem codificada.
 * @param phone Número de telefone em formato E.164 (somente dígitos, ex: 5511952249664).
 * @param message Mensagem a ser enviada.
 * @returns URL do WhatsApp pronta para uso.
 * @throws Error se o número de telefone for inválido.
 */
export function generateWhatsAppLink(phone: string, message: string): string {
  // Remove quaisquer caracteres não numéricos
  const sanitizedPhone = phone.replace(/\D+/g, '');

  // Validaido número de telefone (10 a 15 dígitos)
  if (!/^\d{10,15}$/.test(sanitizedPhone)) {
    throw new Error(
      `Número de telefone inválido: "${phone}". Use o formato E.164 sem espaços ou símbolos.`
    );
  }

  // Trim na mensagem e codificação segura
  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${sanitizedPhone}?text=${encodedMessage}`;
}  

/**
 * Changelog:
 *
 * 1. Sanitização: remove caracteres não numéricos do telefone (phone.replace).
 * 2. Validação: garante entre 10 e 15 dígitos, lançando erro claro em caso de falha.
 * 3. Trim e codificação: aplica trim() na mensagem antes do encodeURIComponent.
 * 4. JSDoc aprimorado: inclui descrição de parâmetros, retorno e exceção.
 * 5. Mantém export nomeado e paths absolutos (@/utils/...).
 */
