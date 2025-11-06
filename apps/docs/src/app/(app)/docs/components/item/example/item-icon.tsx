'use client'

import { Button } from '@nerdfish/react/button'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from '@nerdfish/react/item'
import { ShieldAlertIcon } from 'lucide-react'

export function ItemIconExample() {
	return (
		<div className="flex w-full flex-col gap-6">
			<Item variant="outline">
				<ItemMedia variant="icon">
					<ShieldAlertIcon />
				</ItemMedia>
				<ItemContent>
					<ItemTitle>Security Alert</ItemTitle>
					<ItemDescription>
						New login detected from unknown device.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button size="sm" variant="outline">
						Review
					</Button>
				</ItemActions>
			</Item>
		</div>
	)
}
