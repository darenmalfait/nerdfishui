'use client'
import { Toggle } from '@nerdfish/react/toggle'
import { BookmarkIcon } from 'lucide-react'

export function ToggleExample() {
	return (
		<Toggle
			aria-label="Toggle bookmark"
			size="sm"
			variant="outline"
			className="data-[pressed]:text-foreground data-[pressed]:bg-transparent data-[pressed]:*:[svg]:fill-blue-500 data-[pressed]:*:[svg]:stroke-blue-500"
		>
			<BookmarkIcon />
			Bookmark
		</Toggle>
	)
}
