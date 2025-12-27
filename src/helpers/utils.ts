type WhatsAppOptions = {
  baseUrl: string;
  message?: string;
};

export function buildWhatsAppLink({ baseUrl, message }: WhatsAppOptions) {
  if (!message) return baseUrl;

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
