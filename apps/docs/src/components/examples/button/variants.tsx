'use client'

import { Button } from '@nerdfish/ui'
import * as React from 'react'

export function ButtonVariants() {
	return (
		<div className="flex space-x-2">
			<Button variant="default">Default</Button>
			<Button variant="nerdfish">Nerdfish</Button>
			<Button variant="secondary">Secondary</Button>
			<Button variant="danger" onClick={() => {}}>
				Danger
			</Button>
			<Button variant="success">Success</Button>
			<Button variant="ghost">Ghost</Button>
			<Button variant="outline">Outline</Button>
			<Button variant="link">Link</Button>
		</div>
	)
}
