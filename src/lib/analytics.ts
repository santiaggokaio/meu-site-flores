// src/lib/analytics.ts

/**
 * Tipagem para evento customizado
 */
export interface AnalyticsEvent {
  action: string
  category: string
  label?: string
  value?: number
}

/**
 * Declarando gtag no objeto Window para o TypeScript
 */
declare global {
  interface Window {
    /**
     * Função global gtag do Google Analytics
     * @param args Parâmetros variados de configuração e eventos
     */
    gtag?: (...args: unknown[]) => void
  }
}

export {} // Garantir que este arquivo seja tratado como módulo para a augmentação global

/**
 * ID do Google Analytics (GA4) definido nas variáveis de ambiente públicas
 */
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID

/**
 * Envia página visualizada ao Google Analytics
 * @param url Caminho da página (ex: "/produtos/rosas")
 */
export function trackPageView(url: string): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  window.gtag?.('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

/**
 * Envia evento customizado ao Google Analytics
 * @param event Dados do evento a ser rastreado
 */
export function trackEvent(event: AnalyticsEvent): void {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID) return
  window.gtag?.('event', event.action, {
    event_category: event.category,
    event_label: event.label,
    value: event.value,
  })
}
