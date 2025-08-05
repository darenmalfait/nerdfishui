'use client'

import { ToggleGroup, ToggleGroupItem } from '@nerdfish/ui'
import { Bold, Italic, Underline } from 'lucide-react'

export function ToggleGroupExample() {
	return (
		<div className="gap-sm flex flex-col">
			<ToggleGroup>
				<ToggleGroupItem value="a">A</ToggleGroupItem>
				<ToggleGroupItem value="b">B</ToggleGroupItem>
				<ToggleGroupItem value="c">C</ToggleGroupItem>
			</ToggleGroup>
			<ToggleGroup toggleMultiple>
				<ToggleGroupItem value="bold" aria-label="Toggle bold">
					<Bold className="size-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Toggle italic">
					<Italic className="size-4" />
				</ToggleGroupItem>
				<ToggleGroupItem value="underline" aria-label="Toggle underline">
					<Underline className="size-4" />
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	)
}
