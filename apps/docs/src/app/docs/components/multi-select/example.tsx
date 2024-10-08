'use client'

import { MultiSelect } from '@nerdfish/ui'

export function MultiSelectExample() {
	return (
		<MultiSelect
			name="framework"
			placeholder="Select a framework"
			onCreateItemsClicked={(value: string) => {
				console.info(`Create item "${value}"`)
			}}
			onEditItemsClicked={() => {
				console.info('Edit items')
			}}
			options={[
				{ value: 'next.js', label: 'Next.js', color: '#000000' },
				{ value: 'sveltekit', label: 'SvelteKit', color: '#ff3e00' },
				{ value: 'nuxt.js', label: 'Nuxt.js', color: '#00c58e' },
				{ value: 'remix', label: 'Remix', color: '#f5f5f5' },
				{ value: 'astro', label: 'Astro', color: '#ffffff' },
			]}
		/>
	)
}
