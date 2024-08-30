'use client'

import { cx, getContrastColor, useControllableState } from '@nerdfish/utils'
import { Check, ChevronsUpDown, Pencil, Plus } from 'lucide-react'
import * as React from 'react'

import { Badge } from './badge'
import { Command } from './command'
import { Field } from './field'
import {
	getInputClassName,
	type InputProps,
	type InputRootProps,
} from './input'
import { Popover } from './popover'
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
	React.ComponentPropsWithoutRef<'input'>,
	'onChange' | 'value' | 'defaultValue'
> &
	Pick<InputRootProps, 'hasError' | 'icon' | 'inputSize'> & {
		options?: MultiSelectItem[]
		placeholder?: string
		onChange?: React.Dispatch<
			React.SetStateAction<MultiSelectItem[] | undefined>
		>
		value?: MultiSelectItem[]
		defaultValue?: MultiSelectItem[]
		onCreateItemsClicked?: (value: string) => void
		onEditItemsClicked?: () => void
		createNewLabel?: string
		editItemsLabel?: string
	}

export const MultiSelectRoot = React.forwardRef<
	HTMLInputElement,
	MultiSelectProps
>(function MultiSelectRoot(
	{
		value: valueProp,
		defaultValue,
		onChange,
		options = [],
		onCreateItemsClicked,
		onEditItemsClicked,
		hasError,
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
			!selectedValues.includes(item)
				? [...selectedValues, item]
				: selectedValues.filter((l) => l.value !== item.value),
		)
		inputRef.current?.focus()
	}

	function onSelectOpenChange(value: boolean) {
		inputRef.current?.blur() // HACK: otherwise, would scroll automatically to the bottom of page
		setOpenSelect(value)
	}

	return (
		<div>
			<Popover.Root open={openSelect} onOpenChange={onSelectOpenChange}>
				<Popover.Trigger asChild>
					<button
						data-slot="control"
						role="combobox"
						aria-controls="listbox"
						aria-expanded={openSelect}
						className={getInputClassName(
							`flex items-center justify-between ${props.className}`,
							hasError,
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
						<ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
					</button>
				</Popover.Trigger>
				<Popover.Content className="w-[200px] p-0">
					<Command.Root
						filter={(value, search) => {
							const item = options.find(({ value: v }) => v === value)?.label

							if (item?.toLowerCase().includes(search.toLowerCase())) return 1
							return 0
						}}
						loop
					>
						<Command.Input
							ref={inputRef}
							placeholder="Search items..."
							value={inputValue}
							onValueChange={setInputValue}
						/>
						<ScrollArea className="h-32 w-full">
							<Command.List>
								<Command.Group>
									{options.map((item) => {
										const isActive = selectedValues.includes(item)

										return (
											<Command.Item
												key={item.value}
												value={item.value}
												onSelect={() => toggleItem(item)}
												className="items-start"
											>
												<Check
													className={cx(
														'mr-2 h-4 w-4 pt-1',
														isActive ? 'opacity-100' : 'opacity-0',
													)}
												/>
												<div className="flex flex-col items-start gap-y-1">
													<div className="flex justify-start">
														<span
															className="mr-2 size-4 rounded-full"
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
											</Command.Item>
										)
									})}
									{onEditItemsClicked && inputValue.length === 0 ? (
										<Command.Item
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
										</Command.Item>
									) : null}
								</Command.Group>
							</Command.List>
							{onCreateItemsClicked && inputValue.length > 0 ? (
								<button
									onSelect={() => {
										setOpenSelect(false)
										onCreateItemsClicked(inputValue)
									}}
									className="flex w-full items-center gap-x-2 px-2 py-1"
								>
									<span>
										<Plus className="size-4" />
									</span>
									<span>{createNewLabel ?? `Create "${inputValue}"`}</span>
								</button>
							) : null}
						</ScrollArea>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>

			<div className="relative mt-3 overflow-y-auto">
				{selectedValues.map(({ label, value, color }) => (
					<Badge
						key={value}
						variant="outline"
						style={color ? multiSelectBadgeStyle(color) : undefined}
						className="dark:!bg-opacity/20 bg-muted shadow-outline mb-2 mr-2 border"
					>
						{label}
					</Badge>
				))}
			</div>
		</div>
	)
})

export const MultiSelect = React.forwardRef<
	HTMLInputElement,
	MultiSelectProps & InputProps
>(function MultiSelect(
	{ defaultValue, error, name, label, className, description, id, ...props },
	ref,
) {
	const inputId = id ?? name
	const errorId = `${inputId}-error`
	const descriptionId = `${inputId}-description`

	return (
		<Field
			{...{
				description,
				descriptionId,
				error,
				errorId,
				htmlFor: inputId,
				label,
				className,
			}}
		>
			<MultiSelectRoot
				hasError={!!error}
				{...(props as MultiSelectProps)}
				ref={ref}
				name={name}
				id={inputId}
				autoComplete={name}
				required
				defaultValue={defaultValue}
				aria-describedby={
					error ? errorId : description ? descriptionId : undefined
				}
			/>
		</Field>
	)
})
