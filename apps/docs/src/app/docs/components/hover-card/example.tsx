'use client'

import { HoverCard, HoverCardTrigger, HoverCardContent } from '@nerdfish/ui'

export function HoverCardExample() {
	return (
		<HoverCard>
			<HoverCardTrigger>Hover over the cake</HoverCardTrigger>
			<HoverCardContent>
				<div className="space-y-2">
					<h4 className="text-sm font-semibold">@darenmalfait</h4>
					<p className="text-sm">
						The ultimate cake making guide – created and maintained by
						@darenmalfait.
					</p>
				</div>
			</HoverCardContent>
		</HoverCard>
	)
}
