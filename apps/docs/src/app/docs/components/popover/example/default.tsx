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

export function PopoverExample() {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button variant="outline" className="w-10 rounded-full p-0">
					<Cake className="size-4" />
					<span className="sr-only">Open popover</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-80">
				<div className="gap-md grid">
					<div className="space-y-sm">
						<h4 className="font-medium leading-none">Cake Dimensions</h4>
						<p className="text-sm text-gray-500 dark:text-gray-400">
							Set the dimensions for the cake layer.
						</p>
					</div>
					<div className="gap-md grid">
						<div className="gap-md grid grid-cols-2 items-center">
							<Label htmlFor="width">Diameter</Label>
							<Input
								variant="bordered"
								name="width"
								id="width"
								defaultValue="10 inches"
								className="col-span-2"
								inputSize="sm"
							/>
						</div>
						<div className="gap-md grid grid-cols-2 items-center">
							<Label htmlFor="maxWidth">Max. Layers</Label>
							<Input
								variant="bordered"
								name="maxWidth"
								id="maxWidth"
								defaultValue="3"
								className="col-span-2"
								inputSize="sm"
							/>
						</div>
						<div className="gap-md grid grid-cols-2 items-center">
							<Label htmlFor="height">Height</Label>
							<Input
								variant="bordered"
								name="height"
								id="height"
								defaultValue="4 inches"
								className="col-span-2"
								inputSize="sm"
							/>
						</div>
						<div className="gap-md grid grid-cols-2 items-center">
							<Label htmlFor="maxHeight">Max. Toppings</Label>
							<Input
								variant="bordered"
								name="maxHeight"
								id="maxHeight"
								defaultValue="Unlimited"
								className="col-span-2"
								inputSize="sm"
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
