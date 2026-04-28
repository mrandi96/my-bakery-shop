export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
}

export const products: Product[] = [
	{
		id: "1",
		name: "Bay Tat",
		description: "A legendary royal Bengkulu pastry with a soft, buttery crust and a sweet pineapple jam filling.",
		price: 35000,
		imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800&h=1000"
	},
	{
		id: "2",
		name: "Kue Siput",
		description: "Crunchy, snail-shaped cookies made with peanuts and a secret blend of spices.",
		price: 25000,
		imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800&h=1000"
	},
	{
		id: "3",
		name: "Bolu Kojo",
		description: "A fragrant green sponge cake infused with pandan and coconut milk, a true heritage favorite.",
		price: 45000,
		imageUrl: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&q=80&w=800&h=1000"
	},
	{
		id: "4",
		name: "Lapis Legit",
		description: "Indonesian thousand-layer cake, rich in butter and spices, meticulously baked layer by layer.",
		price: 120000,
		imageUrl: "https://images.unsplash.com/photo-1535141123063-3bb610932e47?auto=format&fit=crop&q=80&w=800&h=1000"
	},
	{
		id: "5",
		name: "Kue Perut Punai",
		description: "Traditional Bengkulu snack made from glutinous rice flour, shaped like a bird's stomach and fried to perfection.",
		price: 20000,
		imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?auto=format&fit=crop&q=80&w=800&h=1000"
	},
	{
		id: "6",
		name: "Lepek Binti",
		description: "A savory traditional cake filled with spiced minced beef and wrapped in banana leaves.",
		price: 15000,
		imageUrl: "https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&q=80&w=800&h=1000"
	}
];
