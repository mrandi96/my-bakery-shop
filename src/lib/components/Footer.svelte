<script lang="ts">
	import { siteConfig } from "$lib/config";
	import { Instagram, MapPin, Clock } from "lucide-svelte";
</script>

<footer class="bg-secondary text-white py-16 px-4">
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
		<div class="space-y-4">
			<h3 class="text-3xl font-bold font-serif">{siteConfig.shopName}</h3>
			<p class="text-white/70 max-w-xs mx-auto md:mx-0">
				Authentic Bengkulu flavors, preserving heritage through every bite. Handmade with love since forever.
			</p>
		</div>
		
		<div class="space-y-4">
			<h4 class="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
				<MapPin class="w-5 h-5 text-primary" />
				Location & Hours
			</h4>
			<ul class="text-white/70 space-y-2">
				<li>{siteConfig.location}</li>
				<li class="flex items-center justify-center md:justify-start gap-2">
					<Clock class="w-4 h-4" />
					{siteConfig.operatingHours}
				</li>
			</ul>
		</div>
		
		<div class="space-y-4">
			<h4 class="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
				<Instagram class="w-5 h-5 text-primary" />
				Follow Us
			</h4>
			<a 
				href={siteConfig.instagramUrl} 
				target="_blank" 
				class="inline-block text-white/70 hover:text-white transition-colors hover:underline"
			>
				@kuekito_bengkulu
			</a>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
		&copy; {new Date().getFullYear()} {siteConfig.shopName}. All rights reserved.
	</div>
</footer>
