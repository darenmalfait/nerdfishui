'use client'

import { cx, type VariantProps } from '@nerdfish/utils'
import { CheckIcon, ChevronsUpDown } from 'lucide-react'
import {
	type ComponentProps,
	createContext,
	useCallback,
	useContext,
	useMemo,
} from 'react'
import * as RPNInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from '../command/command'
import { Input, inputVariants } from '../input/input'
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover'
import { ScrollArea } from '../scroll-area/scroll-area'

const BasePhoneInput = RPNInput.default

type PhoneInputContextProps = VariantProps<typeof inputVariants>

const PhoneInputContext = createContext<PhoneInputContextProps | null>(null)
PhoneInputContext.displayName = 'PhoneInputContext'

function usePhoneInput(): PhoneInputContextProps {
	const context = useContext(PhoneInputContext)

	if (!context) {
		throw new Error('You should use usePhoneInput within an PhoneInputContext')
	}

	return context
}

function FlagComponent({ country, countryName }: RPNInput.FlagProps) {
	const Flag = flags[country]

	return (
		<span className="bg-foreground/20 absolute inset-0 flex aspect-video size-full max-w-full overflow-hidden rounded-sm object-cover [&_svg]:size-full">
			{Flag ? <Flag title={countryName} /> : null}
		</span>
	)
}

function CountrySelectOption({
	country,
	countryName,
	selectedCountry,
	onChange,
}: RPNInput.FlagProps & {
	selectedCountry?: RPNInput.Country
	onChange: (country: RPNInput.Country) => void
}) {
	return (
		<CommandItem
			className={cx(
				'rounded-[calc(var(--radius-base)-theme(padding.best-friends))]',
				'gap-best-friends hover:bg-background-inverted! group/country-select-option hover:text-foreground-inverted!',
			)}
			onSelect={() => onChange(country)}
		>
			<div className="relative flex h-3 w-4">
				<FlagComponent country={country} countryName={countryName} />
			</div>
			<span className="flex-1 text-sm">{countryName}</span>
			<span className="text-foreground group-data-[selected=true]/country-select-option:text-foreground-inverted text-sm">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
			<CheckIcon
				className={`ml-auto size-4 ${country === selectedCountry ? 'opacity-100' : 'opacity-0'}`}
			/>
		</CommandItem>
	)
}

type CountryEntry = { label: string; value: RPNInput.Country | undefined }

function CountrySelect({
	disabled,
	value: selectedCountry,
	options: countryList,
	onChange,
}: {
	disabled?: boolean
	value: RPNInput.Country
	options: CountryEntry[]
	onChange: (country: RPNInput.Country) => void
}) {
	const { variant, size } = usePhoneInput()

	return (
		<Popover>
			<PopoverTrigger
				render={
					<button
						type="button"
						className={cx(
							inputVariants({ variant, size }),
							'px-friends py-bff mr-1 flex h-auto w-auto items-center gap-1 focus:z-10',
						)}
						disabled={disabled}
					>
						<div className="relative flex h-6 w-8">
							<FlagComponent
								country={selectedCountry}
								countryName={selectedCountry}
							/>
						</div>
						<ChevronsUpDown
							className={cx(
								'-mr-2 size-4 opacity-50',
								disabled ? 'hidden' : 'opacity-100',
							)}
						/>
					</button>
				}
			/>
			<PopoverContent className="w-75">
				<Command>
					<CommandInput placeholder="Search country..." />
					<CommandList className="mt-best-friends">
						<ScrollArea className="h-72">
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup className="gap-bff">
								{countryList.map(({ value: val, label }) =>
									val ? (
										<CountrySelectOption
											key={val}
											country={val}
											countryName={label}
											selectedCountry={selectedCountry}
											onChange={onChange}
										/>
									) : null,
								)}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	)
}

function InputComponent({ className, ...props }: ComponentProps<typeof Input>) {
	const { variant, size } = usePhoneInput()
	return (
		<Input
			variant={variant}
			size={size}
			className={cx('flex-1', className)}
			{...props}
		/>
	)
}

export type PhoneInputProps = Omit<
	ComponentProps<typeof Input>,
	'onChange' | 'value' | 'ref'
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
		onChange?: (value: RPNInput.Value) => void
	} & VariantProps<typeof inputVariants>

export function PhoneInput({
	className,
	onChange,
	size,
	variant,
	...props
}: PhoneInputProps) {
	const handleChange = useCallback(
		(value?: RPNInput.Value) => {
			onChange?.(value ?? ('' as RPNInput.Value))
		},
		[onChange],
	)

	return (
		<PhoneInputContext.Provider
			value={useMemo(() => ({ variant, size }), [size, variant])}
		>
			<BasePhoneInput
				className={cx('flex', className)}
				flagComponent={FlagComponent}
				countrySelectComponent={CountrySelect}
				inputComponent={InputComponent}
				smartCaret={false}
				{...props}
				/**
				 * Handles the onChange event.
				 *
				 * react-phone-number-input might trigger the onChange event as undefined
				 * when a valid phone number is not entered. To prevent this,
				 * the value is coerced to an empty string.
				 *
				 * @param {E164Number | undefined} value - The entered value
				 */
				onChange={handleChange}
			/>
		</PhoneInputContext.Provider>
	)
}
