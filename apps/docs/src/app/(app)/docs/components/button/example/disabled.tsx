'use client'

import { Button } from '@nerdfish/react/button'

export function ButtonDisabledExample() {
	return (
		<div className="space-y-friends flex flex-col">
			<Button disabled variant="default">
				Default
			</Button>
			<Button disabled variant="accent">
				Nerdfish
			</Button>
			<Button disabled variant="secondary">
				Secondary
			</Button>
			<Button disabled variant="destructive">
				Danger
			</Button>
			<Button disabled variant="success">
				Success
			</Button>
			<Button disabled variant="ghost">
				Ghost
			</Button>
			<Button disabled variant="outline">
				Outline
			</Button>
			<Button disabled variant="link">
				Link
			</Button>
		</div>
	)
}
