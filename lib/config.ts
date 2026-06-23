export const WHATSAPP_NUMBER = '573007876642'

export function getWhatsAppUrl(productName: string): string {
  const text = encodeURIComponent(`Hola, quiero pedir ${productName}`)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}
