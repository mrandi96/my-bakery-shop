import { siteConfig } from "../config";

export function getWhatsAppLink(productName: string) {
	const message = `Halo, saya ingin memesan ${productName} dari website Anda.`;
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
