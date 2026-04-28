<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from "mode-watcher";
	import { Button } from "$lib/components/ui/button";
	import * as Sheet from "$lib/components/ui/sheet";
	import { Menu } from "@lucide/svelte";
	import ThemeToggle from "$lib/components/theme-toggle.svelte";

	let { children } = $props();

	const navItems = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Contact", href: "/contact" },
	];
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col">
	<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
		<div class="container mx-auto flex h-14 items-center justify-between px-4">
			<div class="flex items-center gap-6">
				<a href="/" class="flex items-center space-x-2">
					<span class="font-bold sm:inline-block">SVELTE BASE</span>
				</a>
				<nav class="hidden md:flex items-center space-x-6 text-sm font-medium">
					{#each navItems as item}
						<a href={item.href} class="transition-colors hover:text-foreground/80 text-foreground/60">{item.name}</a>
					{/each}
				</nav>
			</div>

			<div class="flex items-center gap-2">
				<div class="hidden md:flex">
					<ThemeToggle />
				</div>
				
				<!-- Mobile Menu -->
				<div class="md:hidden flex items-center gap-2">
					<ThemeToggle />
					<Sheet.Root>
						<Sheet.Trigger>
							<Button variant="outline" size="icon">
								<Menu class="h-5 w-5" />
								<span class="sr-only">Toggle menu</span>
							</Button>
						</Sheet.Trigger>
						<Sheet.Content side="right" class="w-[240px] sm:w-[300px]">
							<Sheet.Header>
								<Sheet.Title>Menu</Sheet.Title>
							</Sheet.Header>
							<nav class="flex flex-col gap-2 mt-8">
								{#each navItems as item}
									<a 
										href={item.href} 
										class="text-lg font-medium transition-colors hover:text-primary pl-4 py-2 hover:bg-muted rounded-md"
									>
										{item.name}
									</a>
								{/each}
							</nav>
						</Sheet.Content>
					</Sheet.Root>
				</div>
			</div>
		</div>
	</header>

	<main class="flex-1">
		<div class="container mx-auto p-4 md:p-8">
			{@render children()}
		</div>
	</main>

	<footer class="border-t py-6 md:py-0">
		<div class="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
			<p class="text-center text-sm leading-loose text-muted-foreground md:text-left">
				Built with Svelte 5 and shadcn-svelte.
			</p>
		</div>
	</footer>
</div>
