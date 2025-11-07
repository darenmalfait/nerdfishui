'use client'

import { Button } from '@nerdfish/react/button'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@nerdfish/react/collapsible'
import { ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'

export function CollapsibleExample() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
			className="flex w-87.5 flex-col gap-2"
		>
			<div className="flex items-center justify-between gap-4 px-4">
				<h4 className="text-sm font-semibold">
					Recent projects and repositories
				</h4>
				<CollapsibleTrigger
					render={
						<Button variant="ghost" size="xs" icon>
							<ChevronsUpDown />
							<span className="sr-only">Toggle</span>
						</Button>
					}
				/>
			</div>
			<div className="rounded-md border px-4 py-2 font-mono text-sm">
				nerdfish-ui/react
			</div>
			<CollapsibleContent className="flex flex-col gap-2">
				<div className="rounded-md border px-4 py-2 font-mono text-sm">
					@radix-ui/primitives
				</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm">
					@tailwindcss/forms
				</div>
				<div className="rounded-md border px-4 py-2 font-mono text-sm">
					@types/react
				</div>
			</CollapsibleContent>
		</Collapsible>
	)
}
