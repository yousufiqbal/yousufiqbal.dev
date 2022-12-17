// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

export type Templates = {
	name: string, from: string
}[]

export type Benefits = {
	bookmark: boolean
	icon: string
	above: string
	title: string
	description: string
}[]

export type Services = {
	name: string, icon: string, description: string, href: string
}[]