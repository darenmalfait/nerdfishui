'use client'

import { cx, type VariantProps } from '@nerdfish/utils'
import { CheckIcon, ChevronsUpDown } from 'lucide-react'
import * as React from 'react'
import * as RPNInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from './command'
import { Input, inputVariants } from './input'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { ScrollArea } from './scroll-area'

const BasePhoneInput = RPNInput.default

type PhoneInputContextProps = VariantProps<typeof inputVariants>

const PhoneInputContext = React.createContext<PhoneInputContextProps | null>(
	null,
)
PhoneInputContext.displayName = 'PhoneInputContext'

function usePhoneInput(): PhoneInputContextProps {
	const context = React.useContext(PhoneInputContext)

	if (!context) {
		throw new Error('You should use usePhoneInput within an PhoneInputContext')
	}

	return context
}

function FlagComponent({ country, countryName }: RPNInput.FlagProps) {
	const Flag = flags[country]

	return (
		<span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm [&_svg]:size-full">
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
		<CommandItem className="gap-sm" onSelect={() => onChange(country)}>
			<FlagComponent country={country} countryName={countryName} />
			<span className="flex-1 text-sm">{countryName}</span>
			<span className="text-foreground text-sm">{`+${RPNInput.getCountryCallingCode(country)}`}</span>
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
	const { variant, inputSize } = usePhoneInput()

	return (
		<Popover>
			<PopoverTrigger asChild>
				<button
					type="button"
					className={cx(
						inputVariants({ variant, inputSize }),
						'mr-xs gap-xs flex h-auto w-auto items-center focus:z-10',
					)}
					disabled={disabled}
				>
					<FlagComponent
						country={selectedCountry}
						countryName={selectedCountry}
					/>
					<ChevronsUpDown
						className={cx(
							'-mr-2 size-4 opacity-50',
							disabled ? 'hidden' : 'opacity-100',
						)}
					/>
				</button>
			</PopoverTrigger>
			<PopoverContent className="w-[300px] p-0">
				<Command>
					<CommandInput placeholder="Search country..." />
					<CommandList>
						<ScrollArea className="h-72">
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
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

const InputComponent = React.forwardRef<
	HTMLInputElement,
	React.ComponentProps<'input'>
>(({ className, ...props }, ref) => {
	const { variant, inputSize } = usePhoneInput()
	return (
		<Input
			variant={variant}
			inputSize={inputSize}
			className={cx('flex-1', className)}
			{...props}
			ref={ref}
		/>
	)
})
InputComponent.displayName = 'InputComponent'

export type PhoneInputProps = Omit<
	React.ComponentProps<'input'>,
	'onChange' | 'value' | 'ref'
> &
	Omit<RPNInput.Props<typeof RPNInput.default>, 'onChange'> & {
		onChange?: (value: RPNInput.Value) => void
	} & VariantProps<typeof inputVariants>

export const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
	React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
		({ className, onChange, inputSize, variant, ...props }, ref) => {
			const handleChange = React.useCallback(
				(value?: RPNInput.Value) => {
					onChange?.(value ?? ('' as RPNInput.Value))
				},
				[onChange],
			)

			return (
				<PhoneInputContext.Provider
					value={React.useMemo(
						() => ({ variant, inputSize }),
						[inputSize, variant],
					)}
				>
					<BasePhoneInput
						ref={ref}
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
		},
	)
PhoneInput.displayName = 'PhoneInput'
