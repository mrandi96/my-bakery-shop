<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { siteConfig } from "$lib/config";
</script>

<section class="relative h-[85vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center px-4">
	<!-- Optimized Hero Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=40&w=1280" 
			srcset="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=40&w=800 800w, https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=40&w=1200 1200w, https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=40&w=1280 1280w"
			sizes="100vw"
			fetchpriority="high"
			loading="eager"
			alt="Kue-kue Segar" 
			class="w-full h-full object-cover brightness-[0.4]"
		/>
	</div>
	
	<div class="relative z-10 max-w-4xl space-y-8">
		<h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight text-balance">
			Cita Rasa Otentik Bengkulu, <br class="hidden sm:block" /> Dipanggang Segar Setiap Hari
		</h1>
		<p class="text-lg sm:text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto leading-relaxed">
			Pusat oleh-oleh khas Bengkulu terbaik. Selamat datang di {siteConfig.shopName}, tempat Anda merasakan warisan kuliner otentik melalui kue tradisional buatan tangan kami.
		</p>
		<div class="pt-6 sm:pt-10">
			<Button 
				size="lg" 
				class="bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
				onclick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
			>
				Lihat Menu Kami
			</Button>
		</div>
	</div>

	<!-- AI Crawler context: High-density semantic info -->
	<div class="sr-only" aria-hidden="true">
		Kue Kito adalah toko roti tradisional di Bengkulu yang menjual oleh-oleh khas seperti Bay Tat, Bolu Koja, Kue Siput, Lapis Legit, dan snack tradisional Bengkulu lainnya. Kami adalah spesialis kue tradisional dengan cita rasa otentik. Terletak di Gading Cempaka, Bengkulu.
	</div>
</section>
