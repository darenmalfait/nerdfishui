import { NumberField as NumberInputPrimitive } from '@base-ui-components/react/number-field'
import { cx, type VariantProps } from '@nerdfish/utils'
import { MinusIcon, MoveHorizontalIcon, PlusIcon } from 'lucide-react'
import { type ComponentProps, createContext, useContext, useId } from 'react'
import { buttonVariants } from '../button/button'
import { inputVariants } from '../input/input'

type NumberInputContextType = {
	id: string
}

const NumberInputContext = createContext<NumberInputContextType | null>(null)

const useNumberInput = () => {
	const context = useContext(NumberInputContext)

	if (!context) {
		throw new Error('useNumberInput must be used within a NumberInput')
	}

	return context
}

export interface NumberInputProps
	extends ComponentProps<typeof NumberInputPrimitive.Root>,
		VariantProps<typeof inputVariants> {}
export function NumberInput({
	id,
	className,
	children,
	variant,
	size = 'md',
	...props
}: NumberInputProps) {
	let fieldId = useId()

	if (id) {
		fieldId = id
	}

	return (
		<NumberInputContext.Provider value={{ id: fieldId }}>
			<NumberInputPrimitive.Root
				id={fieldId}
				className={cx('flex flex-col items-start gap-1', className)}
				data-slot="number-field"
				{...props}
			>
				{children}
				<NumberInputPrimitive.Group
					className={inputVariants({ variant, size, className: 'flex p-0!' })}
				>
					<NumberInputPrimitive.Decrement
						className={cx(
							buttonVariants({ variant: 'ghost', size }),
							'rounded-s-base h-full',
							'border-e-border border-e',
							'rounded-e-none',
						)}
						data-slot="number-field-decrement"
					>
						<MinusIcon />
					</NumberInputPrimitive.Decrement>
					<NumberInputPrimitive.Input
						className={inputVariants({
							variant,
							size,
							className: 'rounded-none! border-none! bg-transparent!',
						})}
						data-slot="number-field-input"
					/>
					<NumberInputPrimitive.Increment
						className={cx(
							buttonVariants({ variant: 'ghost', size }),
							'rounded-e-base h-full rounded-s-none',
							'border-s-border border-s',
						)}
						data-slot="number-field-increment"
					>
						<PlusIcon />
					</NumberInputPrimitive.Increment>
				</NumberInputPrimitive.Group>
			</NumberInputPrimitive.Root>
		</NumberInputContext.Provider>
	)
}

export type NumberInputScrubAreaProps = ComponentProps<
	typeof NumberInputPrimitive.ScrubArea
>
export function NumberInputScrubArea({
	className,
	children,
	...props
}: NumberInputScrubAreaProps) {
	const { id: fieldId } = useNumberInput()

	return (
		<NumberInputPrimitive.ScrubArea
			className={cx('cursor-ew-resize', className)}
			data-slot="number-field-scrub-area"
			{...props}
		>
			<label
				htmlFor={fieldId}
				className="text-foreground cursor-ew-resize text-sm font-medium"
				data-slot="number-field-label"
			>
				{children}
			</label>
			<NumberInputPrimitive.ScrubAreaCursor
				className="drop-shadow-sm filter"
				data-slot="number-field-scrub-area-cursor"
			>
				<MoveHorizontalIcon className="size-4.5" />
			</NumberInputPrimitive.ScrubAreaCursor>
		</NumberInputPrimitive.ScrubArea>
	)
}
