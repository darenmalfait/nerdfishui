'use client'

import { Kbd, KbdGroup } from '@nerdfish/react/kbd'

export function KbdGroupExample() {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-foreground-muted text-sm">
				Use{' '}
				<KbdGroup>
					<Kbd>Ctrl + B</Kbd>
					<Kbd>Ctrl + K</Kbd>
				</KbdGroup>{' '}
				to open the command palette
			</p>
		</div>
	)
}
