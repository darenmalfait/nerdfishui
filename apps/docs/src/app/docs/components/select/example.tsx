'use client'

import { Select } from '@nerdfish/ui'
import { ArrowRightIcon } from 'lucide-react'

export function SelectExample() {
	return (
		<Select
			name="framework"
			emptyString="No frameworks found"
			placeholder="Select a framework"
			options={[
				{ value: 'next.js', label: 'Next.js', icon: ArrowRightIcon },
				{ value: 'sveltekit', label: 'SvelteKit' },
				{ value: 'nuxt.js', label: 'Nuxt.js' },
				{ value: 'remix', label: 'Remix' },
				{ value: 'astro', label: 'Astro' },
				{ value: 'blitz', label: 'Blitz' },
				{ value: 'redwood', label: 'Redwood' },
				{ value: 'vite', label: 'Vite' },
				{ value: 'snowpack', label: 'Snowpack' },
			]}
		/>
	)
}
