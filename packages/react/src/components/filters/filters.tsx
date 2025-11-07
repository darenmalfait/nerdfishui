/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable complexity */
'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { AlertCircleIcon, CheckIcon, PlusIcon, XIcon } from 'lucide-react'
import {
	type ButtonHTMLAttributes,
	type ChangeEvent,
	type FocusEvent,
	type InputHTMLAttributes,
	type KeyboardEvent,
	type ReactNode,
	createContext,
	useCallback,
	useContext,
	useMemo,
	useState,
} from 'react'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from '@nerdfish/react/command'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@nerdfish/react/dropdown-menu'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nerdfish/react/popover'
import { Switch } from '@nerdfish/react/switch'
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'

import { DEFAULT_FILTERS_I18N, type FiltersI18nConfig } from './config'
import { type FilterFieldsConfig, type FilterFieldConfig } from './types'
import {
	createFilter,
	flattenFields,
	getFieldsMap,
	getOperatorsForField,
	isFieldGroup,
	isGroupLevelField,
} from './utils'

export * from './utils'
export * from './types'

// Context for all Filter component props
interface FilterContextValue {
	variant: 'solid' | 'outline'
	size: 'xs' | 'md' | 'md' | 'lg' | 'xl'
	radius: 'md' | 'full'
	i18n: FiltersI18nConfig
	cursorPointer: boolean
	className?: string
	showAddButton?: boolean
	addButtonText?: string
	addButtonIcon?: ReactNode
	addButtonClassName?: string
	addButton?: ReactNode
	showSearchInput?: boolean
	trigger?: ReactNode
	allowMultiple?: boolean
}

const FilterContext = createContext<FilterContextValue>({
	variant: 'outline',
	size: 'md',
	radius: 'md',
	i18n: DEFAULT_FILTERS_I18N,
	cursorPointer: true,
	className: undefined,
	showAddButton: true,
	addButtonText: undefined,
	addButtonIcon: undefined,
	addButtonClassName: undefined,
	addButton: undefined,
	showSearchInput: true,
	trigger: undefined,
	allowMultiple: true,
})

const useFilterContext = () => useContext(FilterContext)

const filterSizeVariants = cva(['gap-popover-compact'], {
	variants: {
		size: {
			xs: 'text-[0.625rem] [&_svg:not([class*=size-])]:size-4 px-2 py-1',
			sm: 'text-xs [&_svg:not([class*=size-])]:size-4 px-3 py-1.5',
			md: 'text-sm [&_svg:not([class*=size-])]:size-5 px-4 py-2',
			lg: 'text-lg [&_svg:not([class*=size-])]:size-6 px-6 py-3',
			xl: 'text-[clamp(1.25rem,4.2vw,1.6625rem)] [&_svg:not([class*=size-])]:size-10 px-8 py-4',
		},
	},
})

// Reusable input variant component for consistent styling
const filterInputVariants = cva(
	[
		'transition shrink-0 outline-none text-foreground relative flex items-center',
		'has-[[data-slot=filters-input]:focus-visible]:ring-ring/30',
		'has-[[data-slot=filters-input]:focus-visible]:border-ring',
		'has-[[data-slot=filters-input]:focus-visible]:outline-none',
		'has-[[data-slot=filters-input]:focus-visible]:ring-[3px]',
		'has-[[data-slot=filters-input]:focus-visible]:z-1',
		'has-[[data-slot=filters-input]:[aria-invalid=true]]:border',
		'has-[[data-slot=filters-input]:[aria-invalid=true]]:border-border',
		'has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive/60',
		'has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/10',
		'dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:border-destructive',
		'dark:has-[[data-slot=filters-input]:[aria-invalid=true]]:ring-destructive/20',
		'has-[[data-slot=filters-prefix]]:ps-0 has-[[data-slot=filters-suffix]]:pe-0',
	],
	{
		variants: {
			variant: {
				solid: 'border-0 bg-background-muted',
				outline: 'bg-background border border-border',
			},
			size: {
				xs: filterSizeVariants({ size: 'xs', className: '!rounded-base' }),
				sm: filterSizeVariants({ size: 'md' }),
				md: filterSizeVariants({ size: 'md' }),
				lg: filterSizeVariants({ size: 'lg' }),
				xl: filterSizeVariants({ size: 'xl' }),
			},
			cursorPointer: {
				true: 'cursor-pointer',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
			cursorPointer: true,
		},
	},
)

// Reusable remove button variant component
const filterRemoveButtonVariants = cva(
	[
		'inline-flex items-center justify-center transition shrink-0 text-foreground-muted hover:text-foreground',
	],
	{
		variants: {
			variant: {
				solid: 'bg-background-muted',
				outline: 'border border-border border-s-0 hover:bg-background-muted',
			},
			size: {
				xs: filterSizeVariants({
					size: 'xs',
				}),
				sm: filterSizeVariants({
					size: 'md',
				}),
				md: filterSizeVariants({
					size: 'md',
				}),
				lg: filterSizeVariants({
					size: 'lg',
				}),
				xl: filterSizeVariants({
					size: 'xl',
				}),
			},
			cursorPointer: {
				true: 'cursor-pointer',
				false: '',
			},
			radius: {
				md: 'rounded-e-base',
				full: 'rounded-e-full',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
			radius: 'md',
			cursorPointer: true,
		},
	},
)

const filterAddButtonVariants = cva(
	[
		'inline-flex items-center shrink-0 justify-center transition text-foreground shadow-xs shadow-black/5',
		'[&_svg:not([role=img]):not([class*=text-]):not([class*=opacity-])]:opacity-60',
	],
	{
		variants: {
			variant: {
				solid: 'border border-input hover:bg-background-muted/60',
				outline: 'border border-border hover:bg-background-muted',
			},
			size: {
				xs: filterSizeVariants({
					size: 'xs',
				}),
				sm: filterSizeVariants({
					size: 'md',
				}),
				md: filterSizeVariants({
					size: 'md',
				}),
				lg: filterSizeVariants({
					size: 'lg',
				}),
				xl: filterSizeVariants({
					size: 'xl',
				}),
			},
			radius: {
				md: 'rounded-base',
				full: 'rounded-full',
			},
			cursorPointer: {
				true: 'cursor-pointer',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
			cursorPointer: true,
		},
	},
)

const filterOperatorVariants = cva(
	[
		'transition text-foreground-muted hover:text-foreground data-[state=open]:text-foreground shrink-0 flex items-center relative focus-visible:z-1',
	],
	{
		variants: {
			variant: {
				solid: 'bg-background-muted',
				outline:
					'bg-background border border-border border-e-0 hover:bg-background-muted data-[state=open]:bg-background-muted [&+[data-slot=filters-remove]]:border-s',
			},
			size: {
				xs: filterSizeVariants({ size: 'xs' }),
				sm: filterSizeVariants({ size: 'md' }),
				md: filterSizeVariants({ size: 'md' }),
				lg: filterSizeVariants({ size: 'lg' }),
				xl: filterSizeVariants({ size: 'xl' }),
			},
			cursorPointer: {
				true: 'cursor-pointer',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
			cursorPointer: true,
		},
	},
)

const filterFieldLabelVariants = cva(
	[
		'flex gap-1.5 shrink-0 px-1.5 py-1 items-center text-foreground',
		'[&_svg:not([class*=size-])]:size-3.5 [&_svg:not([class*=opacity-])]:opacity-60',
	],
	{
		variants: {
			variant: {
				solid: 'bg-background-muted',
				outline: 'border border-border border-e-0',
			},
			size: {
				xs: filterSizeVariants({
					size: 'xs',
				}),
				sm: filterSizeVariants({
					size: 'md',
				}),
				md: filterSizeVariants({
					size: 'md',
				}),
				lg: filterSizeVariants({
					size: 'lg',
				}),
				xl: filterSizeVariants({
					size: 'xl',
				}),
			},
			radius: {
				md: 'rounded-s-base',
				full: 'rounded-s-full',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
		},
	},
)

const filterFieldValueVariants = cva(
	[
		'text-foreground transition shrink-0 flex items-center gap-1 relative focus-visible:z-1',
	],
	{
		variants: {
			variant: {
				solid: 'bg-background-muted',
				outline:
					'bg-background border border-border hover:bg-background-muted has-[[data-slot=switch]]:hover:bg-transparent',
			},
			size: {
				xs: filterSizeVariants({
					size: 'xs',
				}),
				sm: filterSizeVariants({
					size: 'md',
				}),
				md: filterSizeVariants({
					size: 'md',
				}),
				lg: filterSizeVariants({
					size: 'lg',
				}),
				xl: filterSizeVariants({
					size: 'xl',
				}),
			},
			cursorPointer: {
				true: 'cursor-pointer has-[[data-slot=switch]]:cursor-default',
				false: '',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
			cursorPointer: true,
		},
	},
)

const filterFieldAddonVariants = cva(
	'text-foreground shrink-0 flex items-center justify-center !py-0 !px-best-friends pr-0',
	{
		variants: {
			variant: {
				solid: '',
				outline: '',
			},
			size: {
				xs: filterSizeVariants({
					size: 'xs',
				}),
				sm: filterSizeVariants({
					size: 'md',
				}),
				md: filterSizeVariants({
					size: 'md',
				}),
				lg: filterSizeVariants({
					size: 'lg',
				}),
				xl: filterSizeVariants({
					size: 'xl',
				}),
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
		},
	},
)

const filterFieldBetweenVariants = cva(
	'text-foreground-muted shrink-0 flex items-center',
	{
		variants: {
			variant: {
				solid: 'bg-background-muted',
				outline: 'bg-background border border-border border-x-0',
			},
			size: {
				xs: filterSizeVariants({
					size: 'xs',
				}),
				sm: filterSizeVariants({
					size: 'md',
				}),
				md: filterSizeVariants({
					size: 'md',
				}),
				lg: filterSizeVariants({
					size: 'lg',
				}),
				xl: filterSizeVariants({
					size: 'xl',
				}),
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
		},
	},
)

const filtersContainerVariants = cva(
	['flex flex-wrap items-center', 'gap-popover-compact'],
	{
		variants: {
			variant: {
				solid: 'gap-2',
				outline: '',
			},
			size: {
				xs: '',
				sm: '',
				md: '',
				lg: '',
				xl: '',
			},
		},
		defaultVariants: {
			variant: 'outline',
			size: 'md',
		},
	},
)

const filterItemVariants = cva('flex items-center shadow-xs shadow-black/5', {
	variants: {
		variant: {
			solid: 'gap-px',
			outline: '',
		},
	},
	defaultVariants: {
		variant: 'outline',
	},
})

function FilterInput<T = unknown>({
	field,
	onChange,
	onBlur,
	onKeyDown,
	onInputChange,
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement> & {
	className?: string
	field?: FilterFieldConfig<T>
	onInputChange?: (e: ChangeEvent<HTMLInputElement>) => void
}) {
	const context = useFilterContext()
	const [isValid, setIsValid] = useState(true)
	const [validationMessage, setValidationMessage] = useState('')

	// Validation function to check if input matches pattern
	const validateInput = (value: string, pattern?: string): boolean => {
		if (!pattern || !value) return true
		const regex = new RegExp(pattern)
		return regex.test(value)
	}

	// Get validation message for field type
	const getValidationMessage = (
		fieldType: string,
		hasCustomPattern: boolean = false,
	): string => {
		// If it's a text or number field with a custom pattern, use the generic invalid message
		if ((fieldType === 'text' || fieldType === 'number') && hasCustomPattern) {
			return context.i18n.validation.invalid
		}

		switch (fieldType) {
			case 'email':
				return context.i18n.validation.invalidEmail
			case 'url':
				return context.i18n.validation.invalidUrl
			case 'tel':
				return context.i18n.validation.invalidTel
			default:
				return context.i18n.validation.invalid
		}
	}

	// Handle input change - allow typing without validation
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		// Always allow typing, just call the original onChange
		onChange?.(e)
	}

	// Handle blur event - validate when user leaves input
	const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
		const value = e.target.value
		const pattern = field?.pattern ?? props.pattern

		// Only validate if there's a value and pattern
		if (value && pattern) {
			let valid = true

			// If there's a custom validation function, use it
			if (field?.validation) {
				valid = field.validation(value)
			} else {
				// Use pattern validation
				valid = validateInput(value, pattern)
			}

			setIsValid(valid)
			const hasCustomPattern = !!(field?.pattern ?? props.pattern)
			setValidationMessage(
				valid ? '' : getValidationMessage(field?.type ?? '', hasCustomPattern),
			)
		} else {
			// Reset validation state for empty values or no pattern
			setIsValid(true)
			setValidationMessage('')
		}

		// Call onInputChange if provided (for blur-based filter updates)
		if (onInputChange) {
			onInputChange(e as ChangeEvent<HTMLInputElement>)
		}

		// Call the original onBlur if provided
		onBlur?.(e)
	}

	// Handle keydown event - hide validation error when user starts typing
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		// Hide validation error when user starts typing (any key except special keys)
		if (
			!isValid &&
			![
				'Tab',
				'Escape',
				'Enter',
				'ArrowUp',
				'ArrowDown',
				'ArrowLeft',
				'ArrowRight',
			].includes(e.key)
		) {
			setIsValid(true)
			setValidationMessage('')
		}

		// Handle Enter key for immediate filter updates
		if (e.key === 'Enter' && onInputChange) {
			// Create a synthetic change event for Enter key
			const syntheticEvent = {
				...e,
				target: e.target as HTMLInputElement,
				currentTarget: e.currentTarget as HTMLInputElement,
			} as ChangeEvent<HTMLInputElement>
			onInputChange(syntheticEvent)
		}

		// Call the original onKeyDown if provided
		onKeyDown?.(e)
	}

	return (
		<div
			className={cx(
				'w-36',
				filterInputVariants({ variant: context.variant, size: context.size }),
				className,
			)}
			data-slot="filters-input-wrapper"
		>
			{field?.prefix ? (
				<div
					data-slot="filters-prefix"
					className={filterFieldAddonVariants({
						variant: context.variant,
						size: context.size,
					})}
				>
					{field.prefix}
				</div>
			) : null}

			<div className="flex w-full items-stretch">
				<input
					className="w-full outline-none"
					aria-invalid={!isValid}
					aria-describedby={
						!isValid && validationMessage
							? `${field?.key ?? 'input'}-error`
							: undefined
					}
					onChange={handleChange}
					onBlur={handleBlur}
					onKeyDown={handleKeyDown}
					data-slot="filters-input"
					{...props}
				/>
				{!isValid && validationMessage ? (
					<Tooltip>
						<TooltipTrigger
							render={
								<div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center">
									<AlertCircleIcon className="text-destructive size-3.5" />
								</div>
							}
						/>
						<TooltipContent>
							<p className="text-sm">{validationMessage}</p>
						</TooltipContent>
					</Tooltip>
				) : null}
			</div>

			{field?.suffix ? (
				<div
					data-slot="filters-suffix"
					className={cx(
						filterFieldAddonVariants({
							variant: context.variant,
							size: context.size,
						}),
					)}
				>
					{field.suffix}
				</div>
			) : null}
		</div>
	)
}

interface FilterRemoveButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof filterRemoveButtonVariants> {
	icon?: ReactNode
}

function FilterRemoveButton({
	className,
	icon = <XIcon />,
	...props
}: FilterRemoveButtonProps) {
	const context = useFilterContext()

	return (
		<button
			data-slot="filters-remove"
			className={cx(
				filterRemoveButtonVariants({
					variant: context.variant,
					size: context.size,
					cursorPointer: context.cursorPointer,
					radius: context.radius,
				}),
				className,
			)}
			{...props}
		>
			{icon}
		</button>
	)
}

interface FilterOperatorDropdownProps<T = unknown> {
	field: FilterFieldConfig<T>
	operator: string
	values: T[]
	onChange: (operator: string) => void
}

function FilterOperatorDropdown<T = unknown>({
	field,
	operator,
	values,
	onChange,
}: FilterOperatorDropdownProps<T>) {
	const context = useFilterContext()
	const operators = getOperatorsForField(field, values, context.i18n)

	// Find the operator label, with fallback to formatted operator name
	const operatorLabel =
		operators.find((op) => op.value === operator)?.label ??
		context.i18n.helpers.formatOperator(operator)

	// Debug logging to help identify the issue
	if (!operators.find((op) => op.value === operator)) {
		console.warn(
			`Operator "${operator}" not found in operators for field "${field.key}" (type: ${field.type}). Available operators:`,
			operators.map((op) => op.value),
		)
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger
				className={filterOperatorVariants({
					variant: context.variant,
					size: context.size,
				})}
			>
				{operatorLabel}
			</DropdownMenuTrigger>
			<DropdownMenuContent align="start" className="w-fit min-w-fit">
				{operators.map((op) => (
					<DropdownMenuItem
						key={op.value}
						onClick={() => onChange(op.value)}
						className="flex items-center justify-between"
					>
						<span>{op.label}</span>
						<CheckIcon
							className={`text-foreground ms-auto ${op.value === operator ? 'opacity-100' : 'opacity-0'}`}
						/>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

interface FilterValueSelectorProps<T = unknown> {
	field: FilterFieldConfig<T>
	values: T[]
	onChange: (values: T[]) => void
	operator: string
}

interface SelectOptionsPopoverProps<T = unknown> {
	field: FilterFieldConfig<T>
	values: T[]
	onChange: (values: T[]) => void
	onClose?: () => void
	showBackButton?: boolean
	onBack?: () => void
	inline?: boolean
}

function SelectOptionsPopover<T = unknown>({
	field,
	values,
	onChange,
	onClose,
	inline = false,
}: SelectOptionsPopoverProps<T>) {
	const [open, setOpen] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const context = useFilterContext()

	const isMultiSelect = field.type === 'multiselect' || values.length > 1
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	const effectiveValues = (field.value ?? values) || []
	const selectedOptions =
		field.options?.filter((opt) => effectiveValues.includes(opt.value)) ?? []
	const unselectedOptions =
		field.options?.filter((opt) => !effectiveValues.includes(opt.value)) ?? []

	const handleClose = () => {
		setOpen(false)
		onClose?.()
	}

	// If inline mode, render the content directly without popover
	if (inline) {
		return (
			<div className="w-full">
				<Command>
					{field.searchable !== false ? (
						<CommandInput
							placeholder={context.i18n.placeholders.searchField(
								field.label ?? '',
							)}
							className="h-8.5 text-sm"
							value={searchInput}
							onValueChange={setSearchInput}
						/>
					) : null}
					<CommandList>
						<CommandEmpty>{context.i18n.noResultsFound}</CommandEmpty>

						{/* Selected items */}
						{selectedOptions.length > 0 ? (
							<CommandGroup heading={field.label ?? 'Selected'}>
								{selectedOptions.map((option) => (
									<CommandItem
										key={String(option.value)}
										className={cx(
											'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
											'group flex items-center gap-2',
										)}
										onSelect={() => {
											if (isMultiSelect) {
												const next = effectiveValues.filter(
													(v) => v !== option.value,
												)
												if (field.onValueChange) {
													field.onValueChange(next)
												} else {
													onChange(next)
												}
											} else if (field.onValueChange) {
												field.onValueChange([] as T[])
											} else {
												onChange([] as T[])
											}
										}}
									>
										{option.icon ?? null}
										<span className="text-foreground truncate">
											{option.label}
										</span>
										<CheckIcon className="text-foreground ms-auto" />
									</CommandItem>
								))}
							</CommandGroup>
						) : null}

						{/* Available items */}
						{unselectedOptions.length > 0 ? (
							<>
								{selectedOptions.length > 0 ? <CommandSeparator /> : null}
								<CommandGroup>
									{unselectedOptions.map((option) => (
										<CommandItem
											key={String(option.value)}
											className={cx(
												'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
												'group flex items-center gap-2',
											)}
											value={option.label}
											onSelect={() => {
												if (isMultiSelect) {
													const newValues = [
														...effectiveValues,
														option.value,
													] as T[]
													if (
														field.maxSelections &&
														newValues.length > field.maxSelections
													) {
														return // Don't exceed max selections
													}
													if (field.onValueChange) {
														field.onValueChange(newValues)
													} else {
														onChange(newValues)
													}
													// For multiselect, don't close the popover to allow multiple selections
												} else {
													if (field.onValueChange) {
														field.onValueChange([option.value] as T[])
													} else {
														onChange([option.value] as T[])
													}
													onClose?.()
												}
											}}
										>
											{option.icon ?? null}
											<span className="truncate">{option.label}</span>
											<CheckIcon className="ms-auto opacity-0" />
										</CommandItem>
									))}
								</CommandGroup>
							</>
						) : null}
					</CommandList>
				</Command>
			</div>
		)
	}

	return (
		<Popover
			open={open}
			onOpenChange={(o) => {
				setOpen(o)
				if (!o) {
					setTimeout(() => setSearchInput(''), 200)
				}
			}}
		>
			<PopoverTrigger
				className={filterFieldValueVariants({
					variant: context.variant,
					size: context.size,
					cursorPointer: context.cursorPointer,
				})}
			>
				<div className="flex items-center gap-1.5">
					{field.customValueRenderer ? (
						field.customValueRenderer(values, field.options ?? [])
					) : (
						<>
							{selectedOptions.length > 0 ? (
								<div
									className={cx(
										'flex items-center -space-x-1.5',
										field.selectedOptionsClassName,
									)}
								>
									{selectedOptions.slice(0, 3).map((option) => (
										<div key={String(option.value)}>{option.icon}</div>
									))}
								</div>
							) : null}
							{selectedOptions.length === 1
								? selectedOptions[0]?.label
								: selectedOptions.length > 1
									? `${selectedOptions.length} ${context.i18n.selectedCount}`
									: context.i18n.select}
						</>
					)}
				</div>
			</PopoverTrigger>
			<PopoverContent
				align="start"
				className={cx('!p-popover-compact w-[200px]', field.className)}
			>
				<Command>
					{field.searchable !== false ? (
						<CommandInput
							placeholder={context.i18n.placeholders.searchField(
								field.label ?? '',
							)}
							className="h-12 text-sm"
							value={searchInput}
							onValueChange={setSearchInput}
						/>
					) : null}
					<CommandList>
						<CommandEmpty>{context.i18n.noResultsFound}</CommandEmpty>

						{/* Selected items */}
						{selectedOptions.length > 0 ? (
							<CommandGroup>
								{selectedOptions.map((option) => (
									<CommandItem
										key={String(option.value)}
										className={cx(
											'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
											'group flex items-center gap-2',
										)}
										onSelect={() => {
											if (isMultiSelect) {
												onChange(values.filter((v) => v !== option.value))
											} else {
												onChange([] as T[])
											}
											if (!isMultiSelect) {
												setOpen(false)
												handleClose()
											}
										}}
									>
										{option.icon ?? null}
										<span className="truncate">{option.label}</span>
										<CheckIcon className="ms-auto" />
									</CommandItem>
								))}
							</CommandGroup>
						) : null}

						{/* Available items */}
						{unselectedOptions.length > 0 ? (
							<>
								{selectedOptions.length > 0 ? <CommandSeparator /> : null}
								<CommandGroup>
									{unselectedOptions.map((option) => (
										<CommandItem
											key={String(option.value)}
											className={cx(
												'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
												'group flex items-center gap-2',
											)}
											value={option.label}
											onSelect={() => {
												if (isMultiSelect) {
													const newValues = [...values, option.value] as T[]
													if (
														field.maxSelections &&
														newValues.length > field.maxSelections
													) {
														return // Don't exceed max selections
													}
													onChange(newValues)
												} else {
													onChange([option.value] as T[])
													setOpen(false)
													handleClose()
												}
											}}
										>
											{option.icon ?? null}
											<span className="truncate">{option.label}</span>
											<CheckIcon className="ms-auto opacity-0" />
										</CommandItem>
									))}
								</CommandGroup>
							</>
						) : null}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

function FilterValueSelector<T = unknown>({
	field,
	values,
	onChange,
	operator,
}: FilterValueSelectorProps<T>) {
	const [open, setOpen] = useState(false)
	const [searchInput, setSearchInput] = useState('')
	const context = useFilterContext()

	// Hide value input for empty/not empty operators
	if (operator === 'empty' || operator === 'not_empty') {
		return null
	}

	// Use custom renderer if provided
	if (field.customRenderer) {
		return (
			<div
				className={filterFieldValueVariants({
					variant: context.variant,
					size: context.size,
					cursorPointer: context.cursorPointer,
				})}
			>
				{field.customRenderer({ field, values, onChange, operator })}
			</div>
		)
	}

	if (field.type === 'boolean') {
		const isChecked = values[0] === true

		// Use custom labels if provided, otherwise fall back to i18n defaults
		const onLabel = field.onLabel ?? context.i18n.true
		const offLabel = field.offLabel ?? context.i18n.false

		return (
			<div
				className={filterFieldValueVariants({
					variant: context.variant,
					size: context.size,
					cursorPointer: context.cursorPointer,
				})}
			>
				<div className="flex items-center gap-2">
					<Switch
						checked={isChecked}
						onCheckedChange={(checked) => onChange([checked as T])}
						size={context.size}
					/>
					{field.onLabel && field.offLabel ? (
						<span className="text-foreground-muted text-xs">
							{isChecked ? onLabel : offLabel}
						</span>
					) : null}
				</div>
			</div>
		)
	}

	if (field.type === 'time') {
		if (operator === 'between') {
			const startTime = (values[0] as string) || ''
			const endTime = (values[1] as string) || ''

			return (
				<div className="flex items-center" data-slot="filters-item">
					<FilterInput
						type="time"
						value={startTime}
						onChange={(e) => onChange([e.target.value, endTime] as T[])}
						onInputChange={field.onInputChange}
						className={field.className}
						field={field}
					/>
					<div
						data-slot="filters-between"
						className={filterFieldBetweenVariants({
							variant: context.variant,
							size: context.size,
						})}
					>
						{context.i18n.to}
					</div>
					<FilterInput
						type="time"
						value={endTime}
						onChange={(e) => onChange([startTime, e.target.value] as T[])}
						onInputChange={field.onInputChange}
						className={field.className}
						field={field}
					/>
				</div>
			)
		}

		return (
			<FilterInput
				type="time"
				value={(values[0] as string) || ''}
				onChange={(e) => onChange([e.target.value] as T[])}
				onInputChange={field.onInputChange}
				field={field}
				className={field.className}
			/>
		)
	}

	if (field.type === 'datetime') {
		if (operator === 'between') {
			const startDateTime = (values[0] as string) || ''
			const endDateTime = (values[1] as string) || ''

			return (
				<div className="flex items-center" data-slot="filters-item">
					<FilterInput
						type="datetime-local"
						value={startDateTime}
						onChange={(e) => onChange([e.target.value, endDateTime] as T[])}
						onInputChange={field.onInputChange}
						className={cx('w-36', field.className)}
						field={field}
					/>
					<div
						data-slot="filters-between"
						className={filterFieldBetweenVariants({
							variant: context.variant,
							size: context.size,
						})}
					>
						{context.i18n.to}
					</div>
					<FilterInput
						type="datetime-local"
						value={endDateTime}
						onChange={(e) => onChange([startDateTime, e.target.value] as T[])}
						onInputChange={field.onInputChange}
						className={cx('w-36', field.className)}
						field={field}
					/>
				</div>
			)
		}

		return (
			<FilterInput
				type="datetime-local"
				value={(values[0] as string) || ''}
				onChange={(e) => onChange([e.target.value] as T[])}
				onInputChange={field.onInputChange}
				className={cx('w-36', field.className)}
				field={field}
			/>
		)
	}

	if (['email', 'url', 'tel'].includes(field.type ?? '')) {
		const getInputType = () => {
			switch (field.type) {
				case 'email':
					return 'email'
				case 'url':
					return 'url'
				case 'tel':
					return 'tel'
				case undefined:
				case 'boolean':
				case 'text':
				case 'select':
				case 'multiselect':
				case 'separator':
				case 'custom':
				case 'datetime':
				case 'time':
				case 'numberrange':
				case 'daterange':
				case 'date':
				case 'number':
				default:
					return 'text'
			}
		}

		const getPattern = () => {
			switch (field.type) {
				case 'email':
					return '^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$'
				case 'url':
					return '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)$'
				case 'tel':
					return '^[\\+]?[1-9][\\d]{0,15}$'
				case undefined:
				case 'number':
				case 'boolean':
				case 'text':
				case 'select':
				case 'multiselect':
				case 'separator':
				case 'custom':
				case 'datetime':
				case 'time':
				case 'numberrange':
				case 'daterange':
				case 'date':
				default:
					return undefined
			}
		}

		return (
			<FilterInput
				type={getInputType()}
				value={(values[0] as string) || ''}
				onChange={(e) => onChange([e.target.value] as T[])}
				onInputChange={field.onInputChange}
				placeholder={
					field.placeholder ??
					context.i18n.placeholders.enterField(field.type ?? 'text')
				}
				pattern={field.pattern ?? getPattern()}
				className={field.className}
				field={field}
			/>
		)
	}

	if (field.type === 'daterange') {
		const startDate = (values[0] as string) || ''
		const endDate = (values[1] as string) || ''

		return (
			<div
				className={filterFieldValueVariants({
					variant: context.variant,
					size: context.size,
					cursorPointer: context.cursorPointer,
					className: '!gap-0 !border-none !p-0',
				})}
			>
				<FilterInput
					type="date"
					value={startDate}
					onChange={(e) => onChange([e.target.value, endDate] as T[])}
					onInputChange={field.onInputChange}
					className={cx('hover:bg-background-muted w-36', field.className)}
					field={field}
				/>
				<div
					data-slot="filters-between"
					className={filterFieldBetweenVariants({
						variant: context.variant,
						size: context.size,
					})}
				>
					{context.i18n.to}
				</div>
				<FilterInput
					type="date"
					value={endDate}
					onChange={(e) => onChange([startDate, e.target.value] as T[])}
					onInputChange={field.onInputChange}
					className={cx('hover:bg-background-muted w-36', field.className)}
					field={field}
				/>
			</div>
		)
	}

	// Handle different field types
	if (field.type === 'text' || field.type === 'number') {
		if (field.type === 'number' && operator === 'between') {
			const minVal = (values[0] as string) || ''
			const maxVal = (values[1] as string) || ''

			return (
				<div className="flex items-center" data-slot="filters-item">
					<FilterInput
						type="number"
						value={minVal}
						onChange={(e) => onChange([e.target.value, maxVal] as T[])}
						onInputChange={field.onInputChange}
						placeholder={context.i18n.min}
						className={cx('w-16', field.className)}
						min={field.min}
						max={field.max}
						step={field.step}
						pattern={field.pattern}
						field={field}
					/>
					<div
						data-slot="filters-between"
						className={filterFieldBetweenVariants({
							variant: context.variant,
							size: context.size,
						})}
					>
						{context.i18n.to}
					</div>
					<FilterInput
						type="number"
						value={maxVal}
						onChange={(e) => onChange([minVal, e.target.value] as T[])}
						onInputChange={field.onInputChange}
						placeholder={context.i18n.max}
						className={cx('w-16', field.className)}
						min={field.min}
						max={field.max}
						step={field.step}
						pattern={field.pattern}
						field={field}
					/>
				</div>
			)
		}

		return (
			<div className="flex items-center" data-slot="filters-item">
				<FilterInput
					type={field.type === 'number' ? 'number' : 'text'}
					value={(values[0] as string) || ''}
					onChange={(e) => onChange([e.target.value] as T[])}
					onInputChange={field.onInputChange}
					placeholder={field.placeholder}
					min={field.type === 'number' ? field.min : undefined}
					max={field.type === 'number' ? field.max : undefined}
					step={field.type === 'number' ? field.step : undefined}
					pattern={field.pattern}
					field={field}
					className={cx('w-36', field.className)}
				/>
			</div>
		)
	}

	if (field.type === 'date') {
		return (
			<FilterInput
				type="date"
				value={(values[0] as string) || ''}
				onChange={(e) => onChange([e.target.value] as T[])}
				onInputChange={field.onInputChange}
				field={field}
				className={cx('w-16', field.className)}
			/>
		)
	}

	// For select and multiselect types, use the SelectOptionsPopover component
	if (field.type === 'select' || field.type === 'multiselect') {
		return (
			<SelectOptionsPopover field={field} values={values} onChange={onChange} />
		)
	}

	const isMultiSelect = values.length > 1
	const selectedOptions =
		field.options?.filter((opt) => values.includes(opt.value)) ?? []
	const unselectedOptions =
		field.options?.filter((opt) => !values.includes(opt.value)) ?? []

	return (
		<Popover
			open={open}
			onOpenChange={(o) => {
				setOpen(o)
				if (!o) {
					setTimeout(() => setSearchInput(''), 200)
				}
			}}
		>
			<PopoverTrigger
				className={filterFieldValueVariants({
					variant: context.variant,
					size: context.size,
					cursorPointer: context.cursorPointer,
				})}
			>
				<div className="flex items-center gap-1.5">
					{field.customValueRenderer ? (
						field.customValueRenderer(values, field.options ?? [])
					) : (
						<>
							{selectedOptions.length > 0 ? (
								<div className="flex items-center -space-x-1.5">
									{selectedOptions.slice(0, 3).map((option) => (
										<div key={String(option.value)}>{option.icon}</div>
									))}
								</div>
							) : null}
							{selectedOptions.length === 1
								? selectedOptions[0]?.label
								: selectedOptions.length > 1
									? `${selectedOptions.length} ${context.i18n.selectedCount}`
									: context.i18n.select}
						</>
					)}
				</div>
			</PopoverTrigger>
			<PopoverContent
				className={cx('!p-popover-compact w-36', field.popoverContentClassName)}
			>
				<Command>
					{field.searchable !== false ? (
						<CommandInput
							placeholder={context.i18n.placeholders.searchField(
								field.label ?? '',
							)}
							className="h-12 text-sm"
							value={searchInput}
							onValueChange={setSearchInput}
						/>
					) : null}
					<CommandList>
						<CommandEmpty>{context.i18n.noResultsFound}</CommandEmpty>

						{/* Selected items */}
						{selectedOptions.length > 0 ? (
							<CommandGroup>
								{selectedOptions.map((option) => (
									<CommandItem
										key={String(option.value)}
										className={cx(
											'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
											'group flex items-center gap-2',
										)}
										onSelect={() => {
											if (isMultiSelect) {
												onChange(values.filter((v) => v !== option.value))
											} else {
												onChange([] as T[])
											}
											if (!isMultiSelect) setOpen(false)
										}}
									>
										{option.icon ?? null}
										<span className="text-foreground truncate">
											{option.label}
										</span>
										<CheckIcon className="text-foreground ms-auto" />
									</CommandItem>
								))}
							</CommandGroup>
						) : null}

						{/* Available items */}
						{unselectedOptions.length > 0 ? (
							<>
								{selectedOptions.length > 0 ? <CommandSeparator /> : null}
								<CommandGroup>
									{unselectedOptions.map((option) => (
										<CommandItem
											key={String(option.value)}
											className={cx(
												'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
												'group flex items-center gap-2',
											)}
											value={option.label}
											onSelect={() => {
												if (isMultiSelect) {
													const newValues = [...values, option.value] as T[]
													if (
														field.maxSelections &&
														newValues.length > field.maxSelections
													) {
														return // Don't exceed max selections
													}
													onChange(newValues)
												} else {
													onChange([option.value] as T[])
													setOpen(false)
												}
											}}
										>
											{option.icon ?? null}
											<span className="truncate">{option.label}</span>
											<CheckIcon className="ms-auto opacity-0" />
										</CommandItem>
									))}
								</CommandGroup>
							</>
						) : null}
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

export interface Filter<T = unknown> {
	id: string
	field: string
	operator: string
	values: T[]
}

export interface FilterGroup<T = unknown> {
	id: string
	label?: string
	filters: Filter<T>[]
	fields: FilterFieldConfig<T>[]
}

// FiltersContent component for the filter panel content
interface FiltersContentProps<T = unknown> {
	filters: Filter<T>[]
	fields: FilterFieldsConfig<T>
	onChange: (filters: Filter<T>[]) => void
}

export const FiltersContent = <T = unknown,>({
	filters,
	fields,
	onChange,
}: FiltersContentProps<T>) => {
	const context = useFilterContext()
	const fieldsMap = useMemo(() => getFieldsMap(fields), [fields])

	const updateFilter = useCallback(
		(filterId: string, updates: Partial<Filter<T>>) => {
			onChange(
				filters.map((filter) => {
					if (filter.id === filterId) {
						const updatedFilter = { ...filter, ...updates }
						// Clear values for empty/not empty operators
						if (
							updates.operator === 'empty' ||
							updates.operator === 'not_empty'
						) {
							updatedFilter.values = [] as T[]
						}
						return updatedFilter
					}
					return filter
				}),
			)
		},
		[filters, onChange],
	)

	const removeFilter = useCallback(
		(filterId: string) => {
			onChange(filters.filter((filter) => filter.id !== filterId))
		},
		[filters, onChange],
	)

	return (
		<div
			className={cx(
				filtersContainerVariants({
					variant: context.variant,
					size: context.size,
				}),
				context.className,
			)}
		>
			{filters.map((filter) => {
				const field = fieldsMap[filter.field]
				if (!field) return null

				return (
					<div
						key={filter.id}
						className={filterItemVariants({ variant: context.variant })}
						data-slot="filter-item"
					>
						{/* Field Label */}
						<div
							className={filterFieldLabelVariants({
								variant: context.variant,
								size: context.size,
								radius: context.radius,
							})}
						>
							{field.icon}
							{field.label}
						</div>

						{/* Operator Dropdown */}
						<FilterOperatorDropdown<T>
							field={field}
							operator={filter.operator}
							values={filter.values}
							onChange={(operator) => updateFilter(filter.id, { operator })}
						/>

						{/* Value Selector */}
						<FilterValueSelector<T>
							field={field}
							values={filter.values}
							onChange={(values) => updateFilter(filter.id, { values })}
							operator={filter.operator}
						/>

						{/* Remove Button */}
						<FilterRemoveButton onClick={() => removeFilter(filter.id)} />
					</div>
				)
			})}
		</div>
	)
}

interface FiltersProps<T = unknown> {
	filters: Filter<T>[]
	fields: FilterFieldsConfig<T>
	onChange: (filters: Filter<T>[]) => void
	className?: string
	showAddButton?: boolean
	addButtonText?: string
	addButtonIcon?: ReactNode
	addButtonClassName?: string
	addButton?: ReactNode
	variant?: 'solid' | 'outline'
	size?: 'md' | 'md' | 'lg'
	radius?: 'md' | 'full'
	i18n?: Partial<FiltersI18nConfig>
	showSearchInput?: boolean
	cursorPointer?: boolean
	trigger?: ReactNode
	allowMultiple?: boolean
	popoverContentClassName?: string
}

export function Filters<T = unknown>({
	filters,
	fields,
	onChange,
	className,
	showAddButton = true,
	addButtonText,
	addButtonIcon,
	addButtonClassName,
	addButton,
	variant = 'outline',
	size = 'md',
	radius = 'md',
	i18n,
	showSearchInput = true,
	cursorPointer = true,
	trigger,
	allowMultiple = true,
	popoverContentClassName,
}: FiltersProps<T>) {
	const [addFilterOpen, setAddFilterOpen] = useState(false)
	const [selectedFieldForOptions, setSelectedFieldForOptions] =
		useState<FilterFieldConfig<T> | null>(null)
	const [tempSelectedValues, setTempSelectedValues] = useState<unknown[]>([])

	// Merge provided i18n with defaults
	const mergedI18n: FiltersI18nConfig = {
		...DEFAULT_FILTERS_I18N,
		...i18n,
		operators: {
			...DEFAULT_FILTERS_I18N.operators,
			...i18n?.operators,
		},
		placeholders: {
			...DEFAULT_FILTERS_I18N.placeholders,
			...i18n?.placeholders,
		},
		validation: {
			...DEFAULT_FILTERS_I18N.validation,
			...i18n?.validation,
		},
	}

	const fieldsMap = useMemo(() => getFieldsMap(fields), [fields])

	const updateFilter = useCallback(
		(filterId: string, updates: Partial<Filter<T>>) => {
			onChange(
				filters.map((filter) => {
					if (filter.id === filterId) {
						const updatedFilter = { ...filter, ...updates }
						// Clear values for empty/not empty operators
						if (
							updates.operator === 'empty' ||
							updates.operator === 'not_empty'
						) {
							updatedFilter.values = [] as T[]
						}
						return updatedFilter
					}
					return filter
				}),
			)
		},
		[filters, onChange],
	)

	const removeFilter = useCallback(
		(filterId: string) => {
			onChange(filters.filter((filter) => filter.id !== filterId))
		},
		[filters, onChange],
	)

	const addFilter = useCallback(
		(fieldKey: string) => {
			const field = fieldsMap[fieldKey]
			if (field?.key) {
				// For select and multiselect types, show options directly
				if (field.type === 'select' || field.type === 'multiselect') {
					setSelectedFieldForOptions(field)
					// For multiselect, check if there's already a filter and use its values
					const existingFilter = filters.find((f) => f.field === fieldKey)
					const initialValues =
						field.type === 'multiselect' && existingFilter
							? existingFilter.values
							: []
					setTempSelectedValues(initialValues)
					return
				}

				// For other types, add filter directly
				const defaultOperator =
					field.defaultOperator ??
					(field.type === 'daterange'
						? 'between'
						: field.type === 'numberrange'
							? 'between'
							: field.type === 'boolean'
								? 'is'
								: 'is')
				let defaultValues: unknown[] = []

				if (
					[
						'text',
						'number',
						'date',
						'email',
						'url',
						'tel',
						'time',
						'datetime',
					].includes(field.type ?? '')
				) {
					defaultValues = [''] as unknown[]
				} else if (field.type === 'daterange') {
					defaultValues = ['', ''] as unknown[]
				} else if (field.type === 'numberrange') {
					defaultValues = [field.min ?? 0, field.max ?? 100] as unknown[]
				} else if (field.type === 'boolean') {
					defaultValues = [false] as unknown[]
				} else if (field.type === 'time') {
					defaultValues = [''] as unknown[]
				} else if (field.type === 'datetime') {
					defaultValues = [''] as unknown[]
				}

				const newFilter = createFilter<T>(
					fieldKey,
					defaultOperator,
					defaultValues as T[],
				)
				const newFilters = [...filters, newFilter]
				onChange(newFilters)
				setAddFilterOpen(false)
			}
		},
		[fieldsMap, filters, onChange],
	)

	const addFilterWithOption = useCallback(
		(
			field: FilterFieldConfig<T>,
			values: unknown[],
			closePopover: boolean = true,
		) => {
			if (!field.key) return

			const defaultOperator =
				field.defaultOperator ??
				(field.type === 'multiselect' ? 'is_any_of' : 'is')

			// Check if there's already a filter for this field
			const existingFilterIndex = filters.findIndex(
				(f) => f.field === field.key,
			)

			if (existingFilterIndex >= 0) {
				// Update existing filter
				const updatedFilters = [...filters]
				updatedFilters[existingFilterIndex] = {
					...updatedFilters[existingFilterIndex],
					id: updatedFilters[existingFilterIndex]?.id ?? '',
					field: updatedFilters[existingFilterIndex]?.field ?? '',
					operator: updatedFilters[existingFilterIndex]?.operator ?? '',
					values: values as T[],
				}
				onChange(updatedFilters)
			} else {
				// Create new filter
				const newFilter = createFilter<T>(
					field.key,
					defaultOperator,
					values as T[],
				)
				const newFilters = [...filters, newFilter]
				onChange(newFilters)
			}

			if (closePopover) {
				setAddFilterOpen(false)
				setSelectedFieldForOptions(null)
				setTempSelectedValues([])
			} else {
				// For multiselect, keep popover open but update temp values
				setTempSelectedValues(values)
			}
		},
		[filters, onChange],
	)

	const selectableFields = useMemo(() => {
		const flatFields = flattenFields(fields)
		return flatFields.filter((field) => {
			// Only include actual filterable fields (must have key and type)
			if (!field.key || field.type === 'separator') {
				return false
			}
			// If allowMultiple is true, don't filter out fields that already have filters
			if (allowMultiple) {
				return true
			}
			// Filter out fields that already have filters (default behavior)
			return !filters.some((filter) => filter.field === field.key)
		})
	}, [fields, filters, allowMultiple])

	return (
		<FilterContext.Provider
			value={{
				variant,
				size,
				radius,
				i18n: mergedI18n,
				cursorPointer,
				className,
				showAddButton,
				addButtonText,
				addButtonIcon,
				addButtonClassName,
				addButton,
				showSearchInput,
				trigger,
				allowMultiple,
			}}
		>
			<div
				className={cx(filtersContainerVariants({ variant, size }), className)}
			>
				{showAddButton && selectableFields.length > 0 ? (
					<Popover
						open={addFilterOpen}
						onOpenChange={(open) => {
							setAddFilterOpen(open)
							if (!open) {
								setSelectedFieldForOptions(null)
								setTempSelectedValues([])
							}
						}}
					>
						<PopoverTrigger
							render={
								(addButton as any) ?? (
									<button
										className={cx(
											filterAddButtonVariants({
												variant,
												size,
												cursorPointer,
												radius,
											}),
											addButtonClassName,
										)}
										title={mergedI18n.addFilterTitle}
									>
										{addButtonIcon ?? <PlusIcon />}
										{addButtonText ?? mergedI18n.addFilter}
									</button>
								)
							}
						/>
						<PopoverContent
							className={cx(
								'!p-popover-compact w-[200px]',
								popoverContentClassName,
							)}
							align="start"
						>
							<Command>
								{selectedFieldForOptions ? (
									// Show original select/multiselect rendering without back button
									<SelectOptionsPopover<T>
										field={selectedFieldForOptions}
										values={tempSelectedValues as T[]}
										onChange={(values) => {
											// For multiselect, create filter immediately but keep popover open
											// For single select, create filter and close popover
											const shouldClosePopover =
												selectedFieldForOptions.type === 'select'
											addFilterWithOption(
												selectedFieldForOptions,
												values as unknown[],
												shouldClosePopover,
											)
										}}
										onClose={() => setAddFilterOpen(false)}
										inline={true}
									/>
								) : (
									// Show field selection
									<>
										{showSearchInput ? (
											<CommandInput
												placeholder={mergedI18n.searchFields}
												className="h-12"
											/>
										) : null}
										<CommandList>
											<CommandEmpty>{mergedI18n.noFieldsFound}</CommandEmpty>
											{fields.map((item, index) => {
												// Handle grouped fields (FilterFieldGroup structure)
												if (isFieldGroup(item)) {
													const groupFields = item.fields.filter((field) => {
														// Include separators and labels for display
														if (field.type === 'separator') {
															return true
														}
														// If allowMultiple is true, don't filter out fields that already have filters
														if (allowMultiple) {
															return true
														}
														// Filter out fields that already have filters (default behavior)
														return !filters.some(
															(filter) => filter.field === field.key,
														)
													})

													if (groupFields.length === 0) return null

													return (
														<CommandGroup
															key={`group-${index}`}
															heading={item.group ?? 'Fields'}
														>
															{groupFields.map((field, fieldIndex) => {
																// Handle separator
																if (field.type === 'separator') {
																	return (
																		<CommandSeparator
																			key={`separator-${fieldIndex}`}
																		/>
																	)
																}

																// Regular field
																return (
																	<CommandItem
																		key={field.key}
																		className={cx(
																			'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
																			'group flex items-center gap-2',
																		)}
																		onSelect={() =>
																			field.key && addFilter(field.key)
																		}
																	>
																		{field.icon}
																		<span>{field.label}</span>
																	</CommandItem>
																)
															})}
														</CommandGroup>
													)
												}

												// Handle group-level fields (new FilterFieldConfig structure with group property)
												if (isGroupLevelField(item)) {
													const groupFields = item.fields!.filter((field) => {
														// Include separators and labels for display
														if (field.type === 'separator') {
															return true
														}
														// If allowMultiple is true, don't filter out fields that already have filters
														if (allowMultiple) {
															return true
														}
														// Filter out fields that already have filters (default behavior)
														return !filters.some(
															(filter) => filter.field === field.key,
														)
													})

													if (groupFields.length === 0) return null

													return (
														<CommandGroup
															key={`group-${index}`}
															heading={item.group ?? 'Fields'}
														>
															{groupFields.map((field, fieldIndex) => {
																// Handle separator
																if (field.type === 'separator') {
																	return (
																		<CommandSeparator
																			key={`separator-${fieldIndex}`}
																		/>
																	)
																}

																// Regular field
																return (
																	<CommandItem
																		key={field.key}
																		className={cx(
																			'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
																			'group flex items-center gap-2',
																		)}
																		onSelect={() =>
																			field.key && addFilter(field.key)
																		}
																	>
																		{field.icon}
																		<span>{field.label}</span>
																	</CommandItem>
																)
															})}
														</CommandGroup>
													)
												}

												// Handle flat field configuration (backward compatibility)
												const field = item

												// Handle separator
												if (field.type === 'separator') {
													return <CommandSeparator key={`separator-${index}`} />
												}

												// Regular field
												return (
													<CommandItem
														key={field.key}
														className={cx(
															'rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))]',
															'group flex items-center gap-2',
														)}
														onSelect={() => field.key && addFilter(field.key)}
													>
														{field.icon}
														<span>{field.label}</span>
													</CommandItem>
												)
											})}
										</CommandList>
									</>
								)}
							</Command>
						</PopoverContent>
					</Popover>
				) : null}

				{filters.map((filter) => {
					const field = fieldsMap[filter.field]
					if (!field) return null

					return (
						<div
							key={filter.id}
							className={filterItemVariants({ variant })}
							data-slot="filter-item"
						>
							{/* Field Label */}
							<div
								className={filterFieldLabelVariants({
									variant,
									size,
									radius,
								})}
							>
								{field.icon}
								{field.label}
							</div>

							{/* Operator Dropdown */}
							<FilterOperatorDropdown<T>
								field={field}
								operator={filter.operator}
								values={filter.values}
								onChange={(operator) => updateFilter(filter.id, { operator })}
							/>

							{/* Value Selector */}
							<FilterValueSelector<T>
								field={field}
								values={filter.values}
								onChange={(values) => updateFilter(filter.id, { values })}
								operator={filter.operator}
							/>

							{/* Remove Button */}
							<FilterRemoveButton onClick={() => removeFilter(filter.id)} />
						</div>
					)
				})}
			</div>
		</FilterContext.Provider>
	)
}
