// types.ts
export interface Category {
	title: string
	icon: string
	gradient: string
	iconColor: string
	count: number
}

export interface CategoryDetailProps {
	category: Category
	onBack: () => void
}
