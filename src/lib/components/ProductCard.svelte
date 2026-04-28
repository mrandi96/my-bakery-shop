<script lang="ts">
	import type { Product } from "$lib/data/products";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { formatIDR } from "$lib/utils/currency";
	import { getWhatsAppLink } from "$lib/utils/whatsapp";
	import { MessageCircle } from "lucide-svelte";

	let { product }: { product: Product } = $props();
</script>

<Card.Root class="overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(160,63,40,0.12)] border-border/50 bg-card h-full flex flex-col">
	<div class="aspect-[4/5] overflow-hidden">
		<img 
			src={product.imageUrl} 
			alt={product.name} 
			class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
		/>
	</div>
	<Card.Header class="space-y-2 flex-grow">
		<div class="flex justify-between items-start gap-2">
			<Card.Title class="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
				{product.name}
			</Card.Title>
			<span class="text-primary font-bold text-lg whitespace-nowrap">
				{formatIDR(product.price)}
			</span>
		</div>
		<Card.Description class="text-foreground/70 text-base leading-relaxed">
			{product.description}
		</Card.Description>
	</Card.Header>
	<Card.Footer class="pt-2">
		<Button 
			class="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2 py-6 rounded-md"
			href={getWhatsAppLink(product.name)}
			target="_blank"
		>
			<MessageCircle class="w-5 h-5" />
			Order via WhatsApp
		</Button>
	</Card.Footer>
</Card.Root>
