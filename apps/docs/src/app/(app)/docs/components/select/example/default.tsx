'use client'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@nerdfish/react/select'

const fruits = [
	{ label: 'Select a fruit', value: null },
	{ label: 'Apple', value: 'apple' },
	{ label: 'Banana', value: 'banana' },
	{ label: 'Blueberry', value: 'blueberry' },
	{ label: 'Grapes', value: 'grapes' },
	{ label: 'Pineapple', value: 'pineapple' },
]
export function SelectExample() {
	return (
		<Select items={fruits}>
			<SelectTrigger className="w-[180px]">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					{fruits.map((fruit) => (
						<SelectItem key={fruit.value} value={fruit.value}>
							{fruit.label}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
