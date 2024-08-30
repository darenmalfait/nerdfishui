'use client'

import { cx, useControllableState } from '@nerdfish/utils'
import { Check, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'

import { Command } from './command'
import { FieldError, FieldLabel } from './field'
import {
	getInputClassName,
	type InputProps,
	type InputRootProps,
} from './input'
import { Popover } from './popover'
import { ScrollArea } from './scroll-area'

interface SelectProps
	extends Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange'>,
		Pick<InputRootProps, 'hasError' | 'icon' | 'inputSize'> {
	id?: string
	options?: {
		value: string
		label: string
		icon?: React.ElementType
	}[]
	hasError?: boolean
	placeholder?: string
	emptyString?: string
	searchDisabled?: boolean
	onChange?: (value: string) => void
}

const SelectRoot = React.forwardRef<HTMLInputElement, SelectProps>(
	function SelectRoot(
		{
			value: valueProp,
			className,
			placeholder = 'Search...',
			emptyString = 'No items found.',
			options = [],
			defaultValue = '',
			hasError,
			icon: Icon = ChevronsUpDown,
			inputSize,
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
			<Popover.Root open={open} onOpenChange={setOpen}>
				<Popover.Trigger asChild>
					<button
						role="combobox"
						aria-haspopup="listbox"
						aria-controls="listbox"
						aria-expanded={open}
						className={cx(
							getInputClassName(className, hasError, inputSize),
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
				</Popover.Trigger>
				<Popover.Content className="w-full min-w-[200px] p-0">
					<Command.Root
						filter={(val, search) => {
							const item = options.find(({ value: v }) => v === val)?.label

							if (item?.toLowerCase().includes(search.toLowerCase())) return 1
							return 0
						}}
					>
						{!searchDisabled ? (
							<>
								<Command.Input placeholder={placeholder} />
								<Command.Empty>{emptyString}</Command.Empty>
							</>
						) : null}
						<Command.List>
							<Command.Group>
								<ScrollArea className="h-32 w-full">
									{options.map((item) => {
										const ItemIcon =
											value === item.value ? Check : item.icon ?? 'div'

										return (
											<Command.Item
												key={item.value}
												onSelect={() => handleChange(item.value)}
											>
												<ItemIcon className={cx('mr-2 h-4 w-4')} />
												{item.label}
											</Command.Item>
										)
									})}
								</ScrollArea>
							</Command.Group>
						</Command.List>
					</Command.Root>
				</Popover.Content>
			</Popover.Root>
		)
	},
)
SelectRoot.displayName = 'SelectRoot'

export const Select = React.forwardRef<
	HTMLInputElement,
	SelectProps & InputProps
>(function Select(
	{ defaultValue, error, name, label, className, description, id, ...props },
	ref,
) {
	const inputId = id ?? name
	const errorId = `${inputId}-error`
	const descriptionId = `${inputId}-description`

	return (
		<div className="w-full">
			{label ? (
				<div className="flex flex-col justify-between gap-y-1 md:flex-row md:gap-x-1 md:gap-y-0">
					<FieldLabel htmlFor={inputId}>{label}</FieldLabel>
					{description ? (
						<span className="text-muted text-sm" id={descriptionId}>
							{description}
						</span>
					) : null}
				</div>
			) : null}

			<SelectRoot
				ref={ref}
				{...props}
				name={name}
				id={inputId}
				autoComplete={name}
				required
				defaultValue={defaultValue}
				aria-describedby={
					error ? errorId : description ? descriptionId : undefined
				}
				hasError={!!error}
			/>

			<FieldError errorId={errorId}>{error}</FieldError>
		</div>
	)
})
Select.displayName = 'Select'
