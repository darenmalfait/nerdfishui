'use client'

import { Button } from '@nerdfish/ui'

export function ButtonVariantsExample() {
	return (
		<div className="space-x-sm flex">
			<Button variant="default">Default</Button>
			<Button variant="brand">Nerdfish</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="danger" onClick={() => {}}>
				Danger
			</Button>
			<Button variant="success">Success</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="accentuate">Accentuate</Button>
			<Button variant="link">Link</Button>
		</div>
	)
}
