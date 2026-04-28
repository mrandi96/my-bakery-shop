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
		description: "Kue legendaris khas Bengkulu dengan tekstur lembut, rasa mentega yang kaya, dan isian selai nanas yang manis.",
		price: 35000,
		imageUrl: "/baytat.webp"
	},
	{
		id: "2",
		name: "Kue Siput",
		description: "Camilan renyah berbentuk siput yang terbuat dari kacang tanah dengan perpaduan bumbu rahasia yang gurih.",
		price: 25000,
		imageUrl: "/kue-siput.webp"
	},
	{
		id: "3",
		name: "Bolu Koja",
		description: "Kue spons hijau yang harum dengan aroma pandan dan santan kelapa, favorit warisan turun-temurun.",
		price: 45000,
		imageUrl: "/bolu-koja.webp"
	},
	{
		id: "4",
		name: "Lapis Legit",
		description: "Kue lapis khas Indonesia yang kaya akan mentega dan rempah-rempah, dipanggang lapis demi lapis dengan penuh ketelitian.",
		price: 120000,
		imageUrl: "/lapis-legit.webp"
	},
	{
		id: "5",
		name: "Kue Perut Punai",
		description: "Camilan tradisional Bengkulu yang terbuat dari tepung beras ketan, dibentuk menyerupai perut burung punai dan digoreng renyah.",
		price: 20000,
		imageUrl: "/perut-punai.webp"
	},
	{
		id: "6",
		name: "Lepek Binti",
		description: "Kue tradisional gurih berisi daging sapi cincang berbumbu yang dibungkus dengan daun pisang.",
		price: 15000,
		imageUrl: "/lepek-binti.webp"
	}
];
