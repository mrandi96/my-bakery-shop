<script lang="ts">
	import { siteConfig } from "$lib/config";
	import { MapPin, Clock } from "@lucide/svelte";
	import BrandIcon from "./icons/BrandIcon.svelte";
</script>

<footer id="footer" class="bg-[#1c1c19] text-white py-16 px-4">
	<div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
		<div class="space-y-4">
			<h3 class="text-3xl font-bold font-serif text-primary">{siteConfig.shopName}</h3>
			<p class="text-white/70 max-w-xs mx-auto md:mx-0 leading-relaxed">
				Cita rasa otentik Bengkulu, menjaga warisan melalui setiap gigitan. Dibuat dengan cinta dan resep turun-temurun.
			</p>
		</div>
		
		<div class="space-y-4">
			<h4 class="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
				<MapPin class="w-5 h-5 text-white" />
				Lokasi & Jam Buka
			</h4>
			<ul class="text-white/70 space-y-2">
				<li>
					<a 
						href={siteConfig.googleMapsUrl} 
						target="_blank" 
						class="hover:text-white transition-colors hover:underline"
					>
						{siteConfig.location}
					</a>
				</li>
				<li class="flex items-center justify-center md:justify-start gap-2">
					<Clock class="w-4 h-4" />
					{siteConfig.operatingHours}
				</li>
			</ul>
		</div>
		
		<div class="space-y-4">
			<h4 class="text-xl font-bold flex items-center justify-center md:justify-start gap-2">
				Ikuti Kami
			</h4>
			<div class="flex flex-col gap-3">
				<a 
					href={siteConfig.instagramUrl} 
					target="_blank" 
					class="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-white transition-colors group"
				>
					<BrandIcon type="instagram" class="w-5 h-5 text-white group-hover:text-primary transition-colors" />
					<span>Instagram</span>
				</a>
				<a 
					href={siteConfig.facebookUrl} 
					target="_blank" 
					class="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-white transition-colors group"
				>
					<BrandIcon type="facebook" class="w-5 h-5 text-white group-hover:text-primary transition-colors" />
					<span>Facebook</span>
				</a>
				<a 
					href={`https://wa.me/${siteConfig.whatsappNumber}`} 
					target="_blank" 
					class="flex items-center justify-center md:justify-start gap-3 text-white/70 hover:text-white transition-colors group"
				>
					<BrandIcon type="whatsapp" class="w-5 h-5 text-white group-hover:text-primary transition-colors" />
					<span>WhatsApp</span>
				</a>
			</div>
		</div>
	</div>
	
	<div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
		&copy; {new Date().getFullYear()} {siteConfig.shopName}. Hak Cipta Dilindungi.
	</div>
</footer>
