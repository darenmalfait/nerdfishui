'use client'

import { cx, useControllableState } from '@nerdfish/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import {
	Command,
	CommandInput,
	CommandList,
	CommandGroup,
	CommandItem,
	CommandEmpty,
} from './command'
import { inputVariants, type InputProps } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { ScrollArea } from './scroll-area'

export interface SelectProps extends Omit<InputProps, 'onChange'> {
	options?: {
		value: string
		label: string
		icon?: React.ElementType
	}[]
	emptyString?: string
	searchDisabled?: boolean
	onChange?: (value: string) => void
}

export const Select = React.forwardRef<HTMLInputElement, SelectProps>(
	function Select(
		{
			value: valueProp,
			className,
			placeholder = 'Search...',
			emptyString = 'No items found.',
			options = [],
			defaultValue = '',
			variant,
			inputSize,
			icon: Icon = ChevronsUpDown,
			searchDisabled,
			onChange,
			...props
		},
		ref,
	) {
		const [open, setOpen] = React.useState(false)
		const [value, setValue] = useControllableState(valueProp, defaultValue)

		const handleChange = React.useCallback(
			(v: string) => {
				setValue(v === value ? '' : v)
				onChange?.(v)
				setOpen(false)
			},
			[onChange, setValue, value],
		)

		return (
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<button
						role="combobox"
						aria-haspopup="listbox"
						aria-controls="listbox"
						aria-expanded={open}
						className={cx(
							inputVariants({ inputSize, variant }),
							'flex items-center justify-between',
							className,
						)}
					>
						<input ref={ref} type="hidden" value={value} {...props} />

						{value
							? options.find((item) => item.value === value)?.label
							: placeholder}
						<Icon className="ml-2 size-4 shrink-0 opacity-50" />
					</button>
				</PopoverTrigger>
				<PopoverContent className="w-full min-w-[200px] p-0">
					<Command
						filter={(val, search) => {
							const item = options.find(({ value: v }) => v === val)?.label

							if (item?.toLowerCase().includes(search.toLowerCase())) return 1
							return 0
						}}
					>
						{!searchDisabled ? (
							<>
								<CommandInput placeholder={placeholder} />
								<CommandEmpty>{emptyString}</CommandEmpty>
							</>
						) : null}
						<CommandList>
							<CommandGroup>
								<ScrollArea className="h-32 w-full">
									{options.map((item) => {
										const ItemIcon =
											value === item.value ? Check : (item.icon ?? 'div')

										return (
											<CommandItem
												key={item.value}
												onSelect={() => handleChange(item.value)}
											>
												<ItemIcon className={cx('mr-2 h-4 w-4')} />
												{item.label}
											</CommandItem>
										)
									})}
								</ScrollArea>
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
		)
	},
)

Select.displayName = 'Select'
