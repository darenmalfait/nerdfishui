'use client'

import { HoverCard } from '@nerdfish/ui'

export function HoverCardDemo() {
	return (
		<HoverCard.Root>
			<HoverCard.Trigger>Hover over the cake</HoverCard.Trigger>
			<HoverCard.Content>
				<div className="space-y-2">
					<h4 className="text-sm font-semibold">@darenmalfait</h4>
					<p className="text-sm">
						The ultimate cake making guide – created and maintained by
						@darenmalfait.
					</p>
				</div>
			</HoverCard.Content>
		</HoverCard.Root>
	)
}
