'use client'

import { ScrollArea } from '@nerdfish/ui'

const tags = Array.from({ length: 50 }).map(
	(_, i, a) => `v1.2.0-beta.${a.length - i}`,
)

export function ScrollAreaExample() {
	return (
		<ScrollArea className="shadow-outline rounded-semi h-72 w-48 border">
			<div className="p-md">
				<h4 className="mb-md text-sm font-medium leading-none">Tags</h4>
				{tags.map((tag) => (
					<div className="text-sm" key={tag}>
						{tag}
					</div>
				))}
			</div>
		</ScrollArea>
	)
}
