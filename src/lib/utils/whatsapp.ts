import { siteConfig } from "../config";

export function getWhatsAppLink(productName: string) {
	const message = `Hi, I would like to order ${productName} from your website.`;
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
