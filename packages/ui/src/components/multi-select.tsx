'use client'

import { cx, getContrastColor } from '@nerdfish/utils'
import { Check, ChevronsUpDown, Pencil, Plus } from 'lucide-react'
import * as React from 'react'
import { useControllableState } from '../hooks'
import { Badge } from './badge'
import {
	Command,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from './command'
import { type InputProps, inputVariants } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { ScrollArea } from './scroll-area'

export type MultiSelectItem = {
	value: string
	label: string
	color?: string
	description?: string
}

export const multiSelectBadgeStyle = (color: string) => ({
	borderColor: color,
	backgroundColor: color,
	color: getContrastColor(color),
})

export type MultiSelectProps = Omit<
	InputProps,
	'onChange' | 'value' | 'defaultValue'
> & {
	options?: MultiSelectItem[]
	onChange?: React.Dispatch<React.SetStateAction<MultiSelectItem[] | undefined>>
	value?: MultiSelectItem[]
	defaultValue?: MultiSelectItem[]
	onCreateItemsClicked?: (value: string) => void
	onEditItemsClicked?: () => void
	createNewLabel?: string
	editItemsLabel?: string
}

export const MultiSelect = React.forwardRef<HTMLInputElement, MultiSelectProps>(
	function MultiSelect(
		{
			value: valueProp,
			defaultValue,
			onChange,
			options = [],
			onCreateItemsClicked,
			onEditItemsClicked,
			variant,
			inputSize,
			placeholder = 'Select items',
			createNewLabel,
			editItemsLabel,
			...props
		},
		ref,
	) {
		const inputRef = React.useRef<HTMLInputElement>(null)
		const [openSelect, setOpenSelect] = React.useState(false)
		const [inputValue, setInputValue] = React.useState<string>('')
		const [selectedValues = [], setSelectedValues] = useControllableState<
			MultiSelectItem[] | undefined
		>(valueProp, defaultValue ?? [], onChange)

		React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

		function toggleItem(item: MultiSelectItem) {
			setSelectedValues(
				selectedValues.includes(item)
					? selectedValues.filter((l) => l.value !== item.value)
					: [...selectedValues, item],
			)
			inputRef.current?.focus()
		}

		function onSelectOpenChange(value: boolean) {
			inputRef.current?.blur() // HACK: otherwise, would scroll automatically to the bottom of page
			setOpenSelect(value)
		}

		return (
			<div>
				<Popover open={openSelect} onOpenChange={onSelectOpenChange}>
					<PopoverTrigger asChild>
						<button
							data-slot="control"
							role="combobox"
							aria-controls="listbox"
							aria-expanded={openSelect}
							className={cx(
								inputVariants({ inputSize, variant }),
								'flex items-center justify-between',
								props.className,
							)}
						>
							<span className="truncate">
								{selectedValues.length === 0 ? placeholder : null}
								{selectedValues.length === 1 ? selectedValues[0]?.label : null}
								{selectedValues.length === 2
									? selectedValues.map(({ label }) => label).join(', ')
									: null}
								{selectedValues.length > 2
									? `${selectedValues.length} items selected`
									: null}
							</span>
							<ChevronsUpDown className="ml-sm size-4 shrink-0 opacity-50" />
						</button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0">
						<Command
							filter={(value, search) => {
								const item = options.find(({ value: v }) => v === value)?.label

								if (item?.toLowerCase().includes(search.toLowerCase())) return 1
								return 0
							}}
							loop
						>
							<CommandInput
								ref={inputRef}
								placeholder="Search items..."
								value={inputValue}
								onValueChange={setInputValue}
							/>
							<ScrollArea className="h-32 w-full">
								<CommandList>
									<CommandGroup>
										{options.map((item) => {
											const isActive = selectedValues.includes(item)

											return (
												<CommandItem
													key={item.value}
													value={item.value}
													onSelect={() => toggleItem(item)}
													className="items-start"
												>
													<Check
														className={cx(
															'mr-sm pt-sm h-4 w-4',
															isActive ? 'opacity-100' : 'opacity-0',
														)}
													/>
													<div className="flex flex-col items-start gap-y-1">
														<div className="flex justify-start">
															<span
																className="mr-sm size-4 rounded-full"
																style={{ backgroundColor: item.color }}
															/>
															<span className="flex-1">{item.label}</span>
														</div>
														{item.description ? (
															<span className="text-muted text-[10px]">
																{item.description}
															</span>
														) : null}
													</div>
												</CommandItem>
											)
										})}
										{onEditItemsClicked && inputValue.length === 0 ? (
											<CommandItem
												onSelect={() => {
													setOpenSelect(false)
													onEditItemsClicked()
												}}
												className="flex gap-x-2"
												{...{ inputValue, options }}
											>
												<span>
													<Pencil className="size-4" />
												</span>
												<span>{editItemsLabel ?? 'Edit labels'}</span>
											</CommandItem>
										) : null}
									</CommandGroup>
								</CommandList>
								{onCreateItemsClicked && inputValue.length > 0 ? (
									<button
										onSelect={() => {
											setOpenSelect(false)
											onCreateItemsClicked(inputValue)
										}}
										className="gap-x-sm px-sm py-xs flex w-full items-center"
									>
										<span>
											<Plus className="size-4" />
										</span>
										<span>{createNewLabel ?? `Create "${inputValue}"`}</span>
									</button>
								) : null}
							</ScrollArea>
						</Command>
					</PopoverContent>
				</Popover>

				<div className="mt-md relative overflow-y-auto">
					{selectedValues.map(({ label, value, color }) => (
						<Badge
							key={value}
							variant="outline"
							style={color ? multiSelectBadgeStyle(color) : undefined}
							className="dark:!bg-opacity/20 mr-sm mb-sm bg-muted shadow-outline border"
						>
							{label}
						</Badge>
					))}
				</div>
			</div>
		)
	},
)
