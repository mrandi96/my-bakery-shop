<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { siteConfig } from "$lib/config";
</script>

<section class="relative h-[80vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center text-center px-4">
	<!-- Placeholder Background Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=2000" 
			alt="Kue-kue Segar" 
			class="w-full h-full object-cover brightness-50"
		/>
	</div>
	
	<div class="relative z-10 max-w-4xl space-y-6">
		<h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
			Cita Rasa Otentik Bengkulu, <br class="hidden md:block" /> Dipanggang Segar Setiap Hari
		</h1>
		<p class="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
			Pusat oleh-oleh khas Bengkulu terbaik. Selamat datang di {siteConfig.shopName}, tempat Anda merasakan warisan kuliner otentik melalui kue tradisional buatan tangan kami.
		</p>
		<div class="pt-8">
			<Button 
				size="lg" 
				class="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
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
