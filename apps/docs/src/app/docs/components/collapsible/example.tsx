'use client'

import {
	Button,
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from '@nerdfish/ui'
import { ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

export function CollapsibleExample() {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<Collapsible
			open={isOpen}
			onOpenChange={setIsOpen}
			className="w-[350px] space-y-2"
		>
			<div className="flex items-center justify-between space-x-4 px-4">
				<h4 className="text-sm font-semibold">@darenmalfait</h4>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						className="flex w-9 justify-center p-0"
					>
						<ChevronsUpDown className="size-4" />
						<span className="sr-only">Toggle</span>
					</Button>
				</CollapsibleTrigger>
			</div>
			<div className="rounded-lg border border-gray-200 px-4 py-3 font-mono text-sm dark:border-gray-700">
				Omnis cum inventore harum exercitationem illum.
			</div>
			<CollapsibleContent className="space-y-2">
				<div className="rounded-lg border border-gray-200 px-4 py-3 font-mono text-sm dark:border-gray-700">
					Explicabo aut debitis vitae at quo.
				</div>
				<div className="rounded-lg border border-gray-200 px-4 py-3 font-mono text-sm dark:border-gray-700">
					Non tempora provident.
				</div>
			</CollapsibleContent>
		</Collapsible>
	)
}
