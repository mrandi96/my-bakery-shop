<script lang="ts">
	import { products } from "$lib/data/products";
	import ProductCard from "./ProductCard.svelte";
</script>

<section id="menu" class="py-20 sm:py-32 px-4 bg-accent/20 scroll-mt-10">
	<div class="max-w-7xl mx-auto space-y-12 sm:space-y-20">
		<div class="text-center space-y-4">
			<h2 class="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">Menu Tradisional Kami</h2>
			<p class="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto font-light leading-relaxed">
				Jelajahi pilihan kue dan kudapan terbaik khas Bengkulu yang kami kurasi khusus untuk Anda.
			</p>
		</div>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
			{#each products as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
