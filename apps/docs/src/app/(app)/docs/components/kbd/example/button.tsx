'use client'

import { Button } from '@nerdfish/react/button'
import { Kbd } from '@nerdfish/react/kbd'

export function KbdButtonExample() {
	return (
		<div className="flex flex-wrap items-center gap-4">
			<Button variant="outline" size="sm" className="pr-3">
				Accept <Kbd>⏎</Kbd>
			</Button>
			<Button variant="outline" size="sm" className="pr-3">
				Cancel <Kbd>Esc</Kbd>
			</Button>
		</div>
	)
}
