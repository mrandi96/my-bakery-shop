<script lang="ts">
	import { products } from "$lib/data/products";
	import ProductCard from "./ProductCard.svelte";
</script>

<section id="menu" class="py-24 px-4 bg-accent/10">
	<div class="max-w-7xl mx-auto space-y-16">
		<div class="text-center space-y-4">
			<h2 class="text-4xl md:text-5xl font-bold text-primary">Our Traditional Menu</h2>
			<p class="text-xl text-foreground/70 max-w-2xl mx-auto font-light">
				Explore our curated selection of Bengkulu's finest pastries and cakes.
			</p>
		</div>
		
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
			{#each products as product (product.id)}
				<ProductCard {product} />
			{/each}
		</div>
	</div>
</section>
