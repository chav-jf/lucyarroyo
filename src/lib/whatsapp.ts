// Número de WhatsApp de la escuela (formato internacional, sin +).
export const WHATSAPP_NUMBER = "573155562072";

/** Construye un enlace click-to-chat de WhatsApp, con mensaje opcional pre-armado. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Mensaje por defecto para los CTA de inscripción.
export const INSCRIPCION_MSG =
  "Hola, quiero inscribirme en la Escuela de Baile Lucy Arroyo. 💃";
