'use client'

import { Item, ItemContent, ItemMedia, ItemTitle } from '@nerdfish/react/item'
import { Spinner } from '@nerdfish/react/spinner'

export function SpinnerExample() {
	return (
		<div className="gap-friends flex w-full flex-col [--radius:1rem]">
			<Item variant="muted">
				<ItemMedia>
					<Spinner />
				</ItemMedia>
				<ItemContent>
					<ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
				</ItemContent>
				<ItemContent className="flex-none justify-end">
					<span className="text-sm tabular-nums">$100.00</span>
				</ItemContent>
			</Item>
		</div>
	)
}
