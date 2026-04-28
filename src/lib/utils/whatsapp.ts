import { siteConfig } from "../config";

export function getWhatsAppLink(productName: string) {
	const message = siteConfig.whatsappMessageTemplate.replace("[Nama Produk]", productName);
	const encodedMessage = encodeURIComponent(message);
	return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodedMessage}`;
}
