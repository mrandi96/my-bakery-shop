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

	let { children } = $props();

	onMount(() => {
		inject();
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
	<title>{siteConfig.shopName} - Toko Kue Tradisional Bengkulu</title>
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen flex-col" id="top">
	<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="w-full flex h-16 items-center justify-between px-4 md:px-8">
			<div class="flex items-center gap-8">
				<a href="/" class="flex items-center space-x-2">
					<span class="font-bold text-xl text-primary font-serif uppercase tracking-wider">{siteConfig.shopName}</span>
				</a>
				<nav class="hidden md:flex items-center space-x-8 text-sm font-medium">
					{#each navItems as item}
						<a 
							href={item.href} 
							onclick={(e) => handleScroll(e, item.href)}
							class="transition-colors hover:text-primary text-foreground/70"
						>
							{item.name}
						</a>
					{/each}
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<div class="hidden md:flex items-center gap-4">
					
					<Button 
						class="rounded-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
						href={`https://wa.me/${siteConfig.whatsappNumber}`}
						target="_blank"
					>
						<BrandIcon type="whatsapp" class="w-4 h-4" />
						Pesan Sekarang
					</Button>
				</div>
				
				<!-- Mobile Menu -->
				<div class="md:hidden flex items-center gap-2">
					
					<Sheet.Root>
						<Sheet.Trigger>
							<Button variant="outline" size="icon">
								<Menu class="h-5 w-5" />
								<span class="sr-only">Buka menu</span>
							</Button>
						</Sheet.Trigger>
						<Sheet.Content side="right" class="w-[240px] sm:w-[300px]">
							<Sheet.Header>
								<Sheet.Title class="text-left font-serif">{siteConfig.shopName}</Sheet.Title>
							</Sheet.Header>
							<nav class="flex flex-col gap-2 mt-8">
								{#each navItems as item}
									<a 
										href={item.href} 
										onclick={(e) => handleScroll(e, item.href)}
										class="text-lg font-medium transition-colors hover:text-primary pl-4 py-2 hover:bg-muted rounded-md"
									>
										{item.name}
									</a>
								{/each}
								<Button 
									class="mt-4 rounded-full bg-primary hover:bg-primary/90 text-white flex items-center gap-2"
									href={`https://wa.me/${siteConfig.whatsappNumber}`}
									target="_blank"
								>
									<BrandIcon type="whatsapp" class="w-4 h-4" />
									Pesan Sekarang
								</Button>
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
