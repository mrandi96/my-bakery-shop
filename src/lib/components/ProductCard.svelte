<script lang="ts">
	import type { Product } from "$lib/data/products";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import { formatIDR } from "$lib/utils/currency";
	import { getWhatsAppLink } from "$lib/utils/whatsapp";
	import BrandIcon from "./icons/BrandIcon.svelte";

	let { product }: { product: Product } = $props();
</script>

<Card.Root class="overflow-hidden group transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(160,63,40,0.15)] border-border/50 bg-card h-full flex flex-col rounded-2xl">
	<div class="aspect-[4/5] overflow-hidden">
		<img 
			src={product.imageUrl} 
			alt={product.name} 
			loading="lazy"
			class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
		/>
	</div>
	<Card.Header class="space-y-3 flex-grow p-5 sm:p-6">
		<div class="flex justify-between items-start gap-4">
			<Card.Title class="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
				{product.name}
			</Card.Title>
			<!-- 
			<span class="text-primary font-bold text-lg whitespace-nowrap">
				{formatIDR(product.price)}
			</span>
			-->
		</div>
		<Card.Description class="text-foreground/80 text-base leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
			{product.description}
		</Card.Description>
	</Card.Header>
	<Card.Footer class="p-5 sm:p-6 pt-0">
		<Button 
			class="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-3 py-6 sm:py-7 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
			href={getWhatsAppLink(product.name)}
			target="_blank"
			aria-label="Pesan {product.name} melalui WhatsApp"
		>
			<BrandIcon type="whatsapp" class="w-5 h-5 fill-current" />
			<span class="font-semibold">Pesan via WhatsApp</span>
		</Button>
	</Card.Footer>
</Card.Root>
