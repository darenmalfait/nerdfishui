import { cx } from '@nerdfish/utils'
import { Check } from 'lucide-react'
import * as React from 'react'
import { useControllableState } from '../hooks'
import {
	CommandGroup,
	CommandItem,
	CommandList,
	CommandInput,
	Command,
	CommandLoading,
	CommandEmpty,
} from './command'
import { EmptyState, EmptyStateDescription } from './empty-state'
import { type InputProps } from './input'
import { Skeleton } from './skeleton'

export type AutocompleteOption = Record<'value' | 'label', string> &
	Record<string, string>

export const AutoComplete = React.forwardRef<
	HTMLDivElement,
	InputProps & {
		options: AutocompleteOption[]
		emptyMessage?: string
		value?: string
		defaultValue?: string
		onChange?: (value: string) => void
		isLoading?: boolean
	}
>(
	(
		{
			options,
			emptyMessage = 'No results found',
			value: valueProp,
			defaultValue,
			onChange: onChangeProp,
			isLoading,
			disabled,
			placeholder,
			...props
		},
		ref,
	) => {
		const inputRef = React.useRef<HTMLInputElement>(null)
		const [value, setValue] = useControllableState(
			valueProp,
			defaultValue ?? '',
			onChangeProp,
		)

		const [inputValue, setInputValue] = React.useState<string>(
			value ?? defaultValue ?? '',
		)

		const [isOpen, setOpen] = React.useState(false)

		React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

		const handleKeyDown = React.useCallback(
			(event: React.KeyboardEvent<HTMLDivElement>) => {
				const input = inputRef.current
				if (!input) return

				// Keep the options displayed when the user is typing
				if (!isOpen) setOpen(true)

				// This is not a default behaviour of the <input /> field
				if (event.key === 'Enter' && input.value !== '') {
					const optionToSelect = options.find(
						(option) => option.label === input.value,
					)

					if (optionToSelect) setValue(optionToSelect.value)
				}

				if (event.key === 'Escape') {
					input.blur()
				}
			},
			[isOpen, options, setValue],
		)

		const handleBlur = React.useCallback(() => {
			setOpen(false)
			const selectedOption = options.find((option) => option.value === value)
			setValue(selectedOption?.label ?? '')
		}, [options, setValue, value])

		const handleSelectOption = React.useCallback(
			(selectedOption: AutocompleteOption) => {
				setInputValue(selectedOption.label)
				setValue(selectedOption.value)

				// This is a hack to prevent the input from being focused after the user selects an option
				// We can call this hack: "The next tick"
				setTimeout(() => {
					inputRef.current?.blur()
				}, 0)
			},
			[setValue],
		)

		return (
			<Command onKeyDown={handleKeyDown}>
				<div>
					<CommandInput
						{...props}
						ref={inputRef}
						value={inputValue}
						onValueChange={isLoading ? undefined : setInputValue}
						onBlur={handleBlur}
						onFocus={() => setOpen(true)}
						placeholder={placeholder}
						disabled={disabled}
					/>
				</div>
				<div className="relative mt-2">
					<CommandList>
						<div
							className={cx(
								'bg-popover text-primary animate-in shadow-outline absolute top-0 z-10 w-full rounded-3xl p-2 shadow-md outline-none',
								isOpen ? 'block' : 'hidden',
							)}
						>
							{isLoading ? (
								<CommandLoading>
									<div className="p-1">
										<Skeleton className="h-8 w-full" />
									</div>
								</CommandLoading>
							) : null}

							{options.length > 0 && !isLoading ? (
								<CommandGroup className="h-full overflow-auto">
									{options.map((option) => {
										const isSelected = value === option.value

										return (
											<CommandItem
												key={option.value}
												value={option.label}
												onMouseDown={(event) => {
													event.preventDefault()
													event.stopPropagation()
												}}
												onSelect={() => handleSelectOption(option)}
												className={cx(
													'flex w-full items-center gap-2',
													!isSelected ? 'pl-8' : null,
												)}
											>
												{isSelected ? <Check className="w-4" /> : null}
												{option.label}
											</CommandItem>
										)
									})}
								</CommandGroup>
							) : null}

							{!isLoading ? (
								<CommandEmpty className="select-none rounded-sm px-2 py-3 text-center text-sm">
									<EmptyState>
										<EmptyStateDescription>
											{emptyMessage}
										</EmptyStateDescription>
									</EmptyState>
								</CommandEmpty>
							) : null}
						</div>
					</CommandList>
				</div>
			</Command>
		)
	},
)
AutoComplete.displayName = 'AutoComplete'

export type AutoCompleteProps = React.ComponentPropsWithoutRef<
	typeof AutoComplete
>
