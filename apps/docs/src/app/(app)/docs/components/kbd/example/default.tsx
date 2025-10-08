'use client'

import { Kbd, KbdGroup } from '@nerdfish/react/kbd'

export function KbdExample() {
	return (
		<div className="flex flex-col items-center gap-4">
			<KbdGroup>
				<Kbd>⌘</Kbd>
				<Kbd>⇧</Kbd>
				<Kbd>⌥</Kbd>
				<Kbd>⌃</Kbd>
			</KbdGroup>
			<KbdGroup>
				<Kbd>Ctrl</Kbd>
				<span>+</span>
				<Kbd>B</Kbd>
			</KbdGroup>
		</div>
	)
}
