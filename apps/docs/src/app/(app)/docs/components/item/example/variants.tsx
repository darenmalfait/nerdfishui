'use client'

import { Button } from '@nerdfish/react/button'
import {
	Item,
	ItemActions,
	ItemContent,
	ItemDescription,
	ItemTitle,
} from '@nerdfish/react/item'

export function ItemVariantsExample() {
	return (
		<div className="gap-casual flex flex-col">
			<Item>
				<ItemContent>
					<ItemTitle>Default Variant</ItemTitle>
					<ItemDescription>
						Standard styling with subtle background and borders.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button variant="outline" size="sm">
						Open
					</Button>
				</ItemActions>
			</Item>
			<Item variant="outline">
				<ItemContent>
					<ItemTitle>Outline Variant</ItemTitle>
					<ItemDescription>
						Outlined style with clear borders and transparent background.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button variant="outline" size="sm">
						Open
					</Button>
				</ItemActions>
			</Item>
			<Item variant="muted">
				<ItemContent>
					<ItemTitle>Muted Variant</ItemTitle>
					<ItemDescription>
						Subdued appearance with muted colors for secondary content.
					</ItemDescription>
				</ItemContent>
				<ItemActions>
					<Button variant="outline" size="sm">
						Open
					</Button>
				</ItemActions>
			</Item>
		</div>
	)
}
