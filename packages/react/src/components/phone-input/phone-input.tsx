/* eslint-disable react/jsx-pascal-case */
import { cn, type VariantProps } from '@nerdfish/utils/class'
import { ChevronDownIcon } from 'lucide-react'
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
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxItemIndicator,
	ComboboxList,
	ComboboxSeparator,
	ComboboxTrigger,
	ComboboxValue,
} from '../combobox/combobox'
import { Input, inputVariants } from '../input/input'
import { ScrollArea } from '../scroll-area/scroll-area'

type PhoneInputSize = VariantProps<typeof inputVariants>['size']
type PhoneInputVariant = VariantProps<typeof inputVariants>['variant']

type CountryEntry = { label: string; value: BasePhoneInput.Country | undefined }

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
		'onChange' | 'variant' | 'popupClassName' | 'scrollAreaClassName' | 'value'
	> & {
		value?: string
		onChange?: (value: string) => void
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
	const [value, setValue] = useControllableState<string | undefined>({
		prop: valueProp,
		onChange: onChange
			? (next) => {
					onChange(next ?? '')
				}
			: undefined,
	})
	const phoneInputSize = size ?? 'md'
	const phoneInputVariant = variant ?? 'default'
	const contextValue = useMemo(
		() => ({
			variant: phoneInputVariant,
			size: phoneInputSize,
			popupClassName,
			scrollAreaClassName,
		}),
		[phoneInputVariant, phoneInputSize, popupClassName, scrollAreaClassName],
	)

	return (
		<PhoneInputContext value={contextValue}>
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
				value={value === undefined || value.length === 0 ? undefined : value}
				onChange={(next) => {
					setValue(next ?? '')
				}}
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
			className={cn('w-0 min-w-0 flex-1 rounded-s-none focus:z-1', className)}
			{...props}
		/>
	)
}

type CountrySelectProps = {
	disabled?: boolean
	value: BasePhoneInput.Country
	options: CountryEntry[]
	onChange: (country: CountryEntry['value']) => void
}

function CountrySelect({
	disabled,
	value,
	options: countryList,
	onChange,
}: CountrySelectProps) {
	const [selectedCountry, setSelectedCountry] = useControllableState<
		CountryEntry['value']
	>({
		prop: value,
		defaultProp: '' as CountryEntry['value'],
		onChange,
	})
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
			onValueChange={setSelectedCountry as (value: unknown) => void}
		>
			<div className="relative shrink-0">
				<ComboboxTrigger
					render={
						<button
							disabled={disabled}
							className={cn(
								inputVariants({
									variant,
									size,
								}),
								'gap-bff flex w-auto shrink-0 items-center rounded-e-none',
								'hover:bg-background-inverted/20 group/phone-input-trigger h-full',
							)}
						>
							<ComboboxValue>
								{(val: BasePhoneInput.Country) => (
									<FlagComponent country={val} countryName={val} />
								)}
							</ComboboxValue>
							<div>
								<ChevronDownIcon className="size-4 opacity-60 group-hover/phone-input-trigger:opacity-100" />
							</div>
						</button>
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
		<span className="bg-foreground/10 flex h-4 w-8 overflow-hidden rounded-sm [&_svg:not([class*='size-'])]:size-full!">
			{Flag ? <Flag title={countryName} /> : null}
		</span>
	)
}

export type CountryCode = keyof typeof flags
