'use client'

import { Input } from '@nerdfish/ui'
import { SearchIcon } from 'lucide-react'

export function InputCustomStylesExample() {
	return (
		<div className="flex h-[240px] w-[340px] items-center justify-center rounded-2xl bg-gradient-to-tr from-pink-500 to-yellow-500 px-8 text-white shadow-lg">
			<Input
				icon={SearchIcon}
				className="bg-popover text-foreground"
				type="text"
				placeholder="Search for anything"
			/>
		</div>
	)
}
