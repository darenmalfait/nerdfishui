'use client'

import { ToggleGroup, ToggleGroupItem } from '@nerdfish/react/toggle-group'
import { Bold, Italic, Underline } from 'lucide-react'

export function ToggleGroupOutlineExample() {
	return (
		<ToggleGroup multiple variant="outline">
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<Bold className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<Italic className="h-4 w-4" />
			</ToggleGroupItem>
			<ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
				<Underline className="h-4 w-4" />
			</ToggleGroupItem>
		</ToggleGroup>
	)
}
