'use client'

import {
	Button,
	Input,
	Label,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nerdfish/ui'
import { Cake } from 'lucide-react'

export function PopoverDemo() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className="w-10 rounded-full p-0">
					<Cake className="size-4" />
					<span className="sr-only">Open popover</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="grid gap-4">
					<div className="space-y-2">
						<h4 className="font-medium leading-none">Cake Dimensions</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Set the dimensions for the cake layer.
						</p>
					</div>
					<div className="grid gap-4">
						<div className="grid grid-cols-2 items-center gap-4">
							<Label htmlFor="width">Diameter</Label>
							<Input
								name="width"
								id="width"
								defaultValue="10 inches"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-2 items-center gap-4">
							<Label htmlFor="maxWidth">Max. Layers</Label>
							<Input
								name="maxWidth"
								id="maxWidth"
								defaultValue="3"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-2 items-center gap-4">
							<Label htmlFor="height">Height</Label>
							<Input
								name="height"
								id="height"
								defaultValue="4 inches"
								className="col-span-2 h-8"
							/>
						</div>
						<div className="grid grid-cols-2 items-center gap-4">
							<Label htmlFor="maxHeight">Max. Toppings</Label>
							<Input
								name="maxHeight"
								id="maxHeight"
								defaultValue="Unlimited"
								className="col-span-2 h-8"
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
