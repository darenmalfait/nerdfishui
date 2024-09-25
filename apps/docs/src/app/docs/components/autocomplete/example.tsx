'use client'

import { type AutocompleteOption, AutoComplete } from '@nerdfish/ui'

const FRAMEWORKS = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
	{
		value: 'wordpress',
		label: 'WordPress',
	},
	{
		value: 'express.js',
		label: 'Express.js',
	},
	{
		value: 'nest.js',
		label: 'Nest.js',
	},
] satisfies AutocompleteOption[]

export function AutocompleteExample() {
	return (
		<div className="flex h-full w-full items-start justify-center">
			<AutoComplete options={FRAMEWORKS} />
		</div>
	)
}
