/* eslint-disable react/jsx-pascal-case */
import { cn, type VariantProps } from '@nerdfish/utils/class'
import {
	type ComponentProps,
	createContext,
	useContext,
	useMemo,
	useState,
} from 'react'
import * as BasePhoneInput from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import { useControllableState } from '../../hooks/use-controllable-state'
import { Button } from '../button/button'
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxIcon,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxList,
	ComboboxSeparator,
	ComboboxTrigger,
	ComboboxValue,
} from '../combobox/combobox'
import { Input, type inputVariants } from '../input/input'
import { ScrollArea } from '../scroll-area/scroll-area'

type PhoneInputSize = VariantProps<typeof inputVariants>['size']
type PhoneInputVariant = VariantProps<typeof inputVariants>['variant']

const PhoneInputContext = createContext<{
	variant: PhoneInputVariant
	size: PhoneInputSize
	popupClassName?: string
	scrollAreaClassName?: string
}>({
	variant: 'default',
	size: 'md',
	popupClassName: undefined,
	scrollAreaClassName: undefined,
})

type PhoneInputProps = Omit<
	ComponentProps<typeof Input>,
	'onChange' | 'value' | 'ref'
> &
	Omit<
		BasePhoneInput.Props<typeof BasePhoneInput.default>,
		'onChange' | 'variant' | 'popupClassName' | 'scrollAreaClassName'
	> & {
		onChange?: (value: BasePhoneInput.Value) => void
		popupClassName?: string
		scrollAreaClassName?: string
	}

export function PhoneInput({
	className,
	variant,
	size,
	popupClassName,
	scrollAreaClassName,
	onChange,
	value: valueProp,
	...props
}: PhoneInputProps) {
	const [value, setValue] = useControllableState<BasePhoneInput.Value>(
		valueProp as BasePhoneInput.Value,
		'' as BasePhoneInput.Value,
		onChange,
	)
	const phoneInputSize = size ?? 'md'
	const phoneInputVariant = variant ?? 'default'

	return (
		<PhoneInputContext
			value={{
				variant: phoneInputVariant,
				size: phoneInputSize,
				popupClassName,
				scrollAreaClassName,
			}}
		>
			<BasePhoneInput.default
				className={cn(
					'flex',
					props['aria-invalid'] &&
						'[&_*[data-slot=combobox-trigger]]:border-destructive [&_*[data-slot=combobox-trigger]]:ring-destructive/50',
					className,
				)}
				flagComponent={FlagComponent}
				countrySelectComponent={CountrySelect}
				inputComponent={InputComponent}
				smartCaret={false}
				value={value}
				onChange={(val) => setValue(val ?? ('' as BasePhoneInput.Value))}
				{...props}
			/>
		</PhoneInputContext>
	)
}

function InputComponent({ className, ...props }: ComponentProps<typeof Input>) {
	const { variant, size } = useContext(PhoneInputContext)
	return (
		<Input
			variant={variant}
			size={size}
			className={cn('rounded-s-none focus:z-1', className)}
			{...props}
		/>
	)
}

type CountryEntry = { label: string; value: BasePhoneInput.Country | undefined }

type CountrySelectProps = {
	disabled?: boolean
	value: BasePhoneInput.Country
	options: CountryEntry[]
	onChange: (country: BasePhoneInput.Country) => void
}

function CountrySelect({
	disabled,
	value,
	options: countryList,
	onChange,
}: CountrySelectProps) {
	const [selectedCountry, setSelectedCountry] = useControllableState(
		value,
		'' as BasePhoneInput.Country,
		onChange,
	)
	const { variant, size, popupClassName, scrollAreaClassName } =
		useContext(PhoneInputContext)
	const [searchValue, setSearchValue] = useState('')

	const filteredCountries = useMemo(() => {
		if (!searchValue) return countryList
		return countryList.filter(({ label }) =>
			label.toLowerCase().includes(searchValue.toLowerCase()),
		)
	}, [countryList, searchValue])

	return (
		<Combobox
			items={filteredCountries}
			value={selectedCountry}
			onValueChange={(country) => {
				if (country) {
					setSelectedCountry(country as BasePhoneInput.Country)
				}
			}}
		>
			<div className="relative">
				<ComboboxTrigger
					render={
						<Button
							size={size}
							variant={variant === 'default' ? 'secondary' : 'outline'}
							className={cn(
								[
									'h-full w-full',
									'rounded-s-compact rounded-e-none border-e-0 px-0! focus:z-10',
								],
								disabled && 'opacity-50',
							)}
							disabled={disabled}
						>
							<div className="flex h-full w-18 items-center justify-center gap-1">
								<div>
									<ComboboxValue>
										{(val: BasePhoneInput.Country) => (
											<FlagComponent country={val} countryName={val} />
										)}
									</ComboboxValue>
								</div>
								<div>
									<ComboboxIcon />
								</div>
							</div>
						</Button>
					}
				/>
			</div>
			<ComboboxContent className={cn('w-75 overflow-hidden', popupClassName)}>
				<ComboboxInput
					variant="default"
					placeholder="e.g. United States"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					className={cn([
						'rounded-[calc(var(--radius-popover)-theme(padding.popover-compact))]!',
						'border-0 bg-transparent shadow-none',
						'focus-visible:border-border focus-visible:ring-0 focus-visible:ring-offset-0',
					])}
				/>
				<ComboboxSeparator />
				<ComboboxEmpty className="px-2 pt-4 pb-2 text-center">
					No country found.
				</ComboboxEmpty>
				<ScrollArea className={cn('h-75', scrollAreaClassName)}>
					<ComboboxList className="my-1 overflow-hidden">
						{filteredCountries.map(({ value: valueCountry, label }) =>
							valueCountry ? (
								<ComboboxItem
									key={valueCountry}
									value={valueCountry}
									className="gap-best-friends ps-friends flex items-center pe-8"
								>
									<FlagComponent country={valueCountry} countryName={label} />
									<span className="flex-1 text-sm">{label}</span>
									<span className="text-foreground/50 text-sm">
										{`+${BasePhoneInput.getCountryCallingCode(valueCountry)}`}
									</span>
									<ComboboxItemIndicator className="start-auto end-2.5" />
								</ComboboxItem>
							) : null,
						)}
					</ComboboxList>
				</ScrollArea>
			</ComboboxContent>
		</Combobox>
	)
}

function FlagComponent({ country, countryName }: BasePhoneInput.FlagProps) {
	const Flag = flags[country]

	return (
		<span className="bg-foreground/10 flex h-4 w-6 overflow-hidden rounded-sm [&_svg:not([class*='size-'])]:size-full!">
			{Flag ? <Flag title={countryName} /> : null}
		</span>
	)
}
