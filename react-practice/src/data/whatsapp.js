export const WHATSAPP_NUMBER = '252907471339';

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openWhatsApp(message) {
  window.open(whatsappLink(message), '_blank', 'noopener,noreferrer');
}
