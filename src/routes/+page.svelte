<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { Button } from "$lib/components/ui/button";
	import { ArrowRight, Star, Shield, Zap } from "@lucide/svelte";

	const features = [
		{
			title: "Svelte 5 Powered",
			description: "Built with the latest Svelte 5 runes for maximum performance and developer experience.",
			icon: Zap
		},
		{
			title: "Shadcn UI",
			description: "Beautiful, accessible, and customizable components out of the box.",
			icon: Star
		},
		{
			title: "Mobile Ready",
			description: "Responsive by default, ensuring your app looks great on any screen size.",
			icon: Shield
		}
	];
</script>

<div class="space-y-12 py-8">
	<section class="text-center space-y-4">
		<h1 class="text-4xl font-extrabold tracking-tight lg:text-5xl">
			Welcome to Kue Kito
		</h1>
		<p class="text-xl text-muted-foreground max-w-[700px] mx-auto">
			Your neighborhood bakery serving fresh, handmade delights every single day.
		</p>
		<div class="flex justify-center gap-4 pt-4">
			<Button size="lg">
				Get Started
				<ArrowRight class="ml-2 h-4 w-4" />
			</Button>
			<Button variant="outline" size="lg">Learn More</Button>
		</div>
	</section>

	<section class="grid gap-6 md:grid-cols-3">
		{#each features as feature}
			<Card.Root>
				<Card.Header>
					<div class="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">
						<feature.icon class="h-6 w-6" />
					</div>
					<Card.Title>{feature.title}</Card.Title>
					<Card.Description>{feature.description}</Card.Description>
				</Card.Header>
				<Card.Footer>
					<Button variant="ghost" class="px-0 hover:bg-transparent hover:underline">
						Read more
						<ArrowRight class="ml-1 h-3 w-3" />
					</Button>
				</Card.Footer>
			</Card.Root>
		{/each}
	</section>
</div>
