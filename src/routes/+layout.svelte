<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import { Menu } from "@lucide/svelte";
	import { siteConfig } from "$lib/config";
	import BrandIcon from "$lib/components/icons/BrandIcon.svelte";
	import { onMount } from 'svelte';
	import { inject } from '@vercel/analytics';
	import { fade } from 'svelte/transition';

	let { children } = $props();

	let activeSection = $state("top");

	onMount(() => {
		inject();

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection = entry.target.id;
					}
				});
			},
			{ threshold: 0.3, rootMargin: "-80px 0px -50% 0px" }
		);

		["top", "heritage", "menu", "footer"].forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	});

	const navItems = [
		{ name: "Beranda", href: "#top" },
		{ name: "Tentang Kami", href: "#heritage" },
		{ name: "Menu", href: "#menu" },
		{ name: "Kontak", href: "#footer" },
	];

	function handleScroll(e: MouseEvent, href: string) {
		if (href.startsWith('#')) {
			e.preventDefault();
			const id = href.substring(1);
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}
</script>

<svelte:head>
	<title>{siteConfig.shopName} - Toko Kue & Oleh-oleh Khas Bengkulu Tradisional</title>
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen flex-col" id="top">
	<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="w-full flex h-16 sm:h-20 items-center justify-between px-4 md:px-12 lg:px-20">
			<div class="flex items-center gap-12">
				<a href="/" class="flex items-center space-x-2">
					<span class="font-bold text-xl sm:text-2xl text-primary font-serif uppercase tracking-[0.2em]">{siteConfig.shopName}</span>
				</a>
				<nav class="hidden lg:flex items-center space-x-10 text-sm font-semibold tracking-wide">
					{#each navItems as item}
						<a 
							href={item.href} 
							onclick={(e) => handleScroll(e, item.href)}
							class="transition-all duration-300 relative py-2 {activeSection === item.href.substring(1) ? 'text-primary scale-105' : 'text-foreground/60 hover:text-primary hover:scale-105'}"
						>
							{item.name}
							{#if activeSection === item.href.substring(1)}
								<span class="absolute -bottom-0.5 left-0 w-full h-0.5 bg-primary rounded-full" transition:fade></span>
							{/if}
						</a>
					{/each}
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<div class="hidden sm:flex items-center gap-4">
					<Button 
						class="rounded-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2 px-6 py-5 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
						href={`https://wa.me/${siteConfig.whatsappNumber}`}
						target="_blank"
					>
						<BrandIcon type="whatsapp" class="w-4 h-4 fill-current" />
						<span class="font-bold">Pesan Sekarang</span>
					</Button>
				</div>
				
				<!-- Mobile Menu -->
				<div class="lg:hidden flex items-center gap-2">
					<Sheet.Root>
						<Sheet.Trigger>
							<Button variant="ghost" size="icon" class="hover:bg-primary/10">
								<Menu class="h-7 w-7 text-primary" />
								<span class="sr-only">Buka menu</span>
							</Button>
						</Sheet.Trigger>
						<Sheet.Content side="right" class="w-[280px] sm:w-[350px] bg-background border-l border-primary/10 p-0 flex flex-col">
							<div class="p-8 border-b border-primary/5">
								<Sheet.Header>
									<Sheet.Title class="text-left font-serif text-primary text-2xl uppercase tracking-widest leading-none">{siteConfig.shopName}</Sheet.Title>
								</Sheet.Header>
							</div>
							<nav class="flex flex-col gap-2 p-6">
								{#each navItems as item}
									<a 
										href={item.href} 
										onclick={(e) => handleScroll(e, item.href)}
										class="text-xl font-semibold transition-all duration-200 px-6 py-4 rounded-2xl {activeSection === item.href.substring(1) ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'hover:bg-primary/5 text-foreground/70'}"
									>
										{item.name}
									</a>
								{/each}
								<div class="mt-8 pt-8 border-t border-primary/5">
									<Button 
										class="w-full rounded-2xl bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-3 py-8 shadow-xl shadow-primary/20"
										href={`https://wa.me/${siteConfig.whatsappNumber}`}
										target="_blank"
									>
										<BrandIcon type="whatsapp" class="w-6 h-6 fill-current" />
										<span class="text-lg font-bold">Pesan Sekarang</span>
									</Button>
								</div>
							</nav>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</header>

	<main class="flex-1 w-full overflow-x-hidden">
		{@render children()}
	</main>
</div>
