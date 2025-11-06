'use client'

import { Slider as SliderPrimitive } from '@base-ui-components/react/slider'
import { cx } from '@nerdfish/utils'
import {
	type ComponentProps,
	type ReactNode,
	useCallback,
	useEffect,
	useState,
} from 'react'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'

export type SliderProps = ComponentProps<typeof SliderPrimitive.Root> & {
	showTooltip?: boolean
	tooltipContent?: (value: number) => ReactNode
	tooltipVariant?: 'dark' | 'light'
}
export function Slider({
	className,
	defaultValue,
	value,
	min = 0,
	max = 100,
	showTooltip = false,
	tooltipContent,
	onValueChange,
	children,
	...props
}: SliderProps) {
	const [internalValues, setInternalValues] = useState<number[]>(
		Array.isArray(value)
			? value
			: Array.isArray(defaultValue)
				? defaultValue
				: [min, max],
	)

	useEffect(() => {
		if (value !== undefined) {
			setInternalValues(Array.isArray(value) ? value : [value])
		}
	}, [value])

	const handleValueChange = (
		newValue: number | readonly number[],
		eventDetails: {
			reason: 'none'
			event: Event
			cancel: () => void
			allowPropagation: () => void
			isCanceled: boolean
			isPropagationAllowed: boolean
			activeThumbIndex: number
		},
	) => {
		const values = Array.isArray(newValue) ? [...newValue] : [newValue]
		setInternalValues(values)
		if (onValueChange) {
			onValueChange(values, eventDetails)
		}
	}

	const [showTooltipState, setShowTooltipState] = useState(false)

	const handlePointerDown = () => {
		if (showTooltip) {
			setShowTooltipState(true)
		}
	}

	const handlePointerUp = useCallback(() => {
		if (showTooltip) {
			setShowTooltipState(false)
		}
	}, [showTooltip])

	useEffect(() => {
		if (showTooltip) {
			document.addEventListener('pointerup', handlePointerUp)
			return () => {
				document.removeEventListener('pointerup', handlePointerUp)
			}
		}
	}, [showTooltip, handlePointerUp])

	const renderThumb = (thumbValue: number, index: number) => {
		const thumb = (
			<SliderPrimitive.Thumb
				key={index}
				data-slot="slider-thumb"
				className={cx(
					'border-info bg-background ring-ring/20 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none hover:ring-4 disabled:pointer-events-none disabled:opacity-50 data-[dragging]:ring-4 data-[focused]:ring-4 data-[touched]:ring-4',
				)}
				onPointerDown={handlePointerDown}
			/>
		)

		if (!showTooltip) return thumb

		return (
			<TooltipProvider key={index}>
				<Tooltip open={showTooltipState}>
					<TooltipTrigger render={thumb} />
					<TooltipContent
						className="px-2 py-1 text-xs"
						sideOffset={8}
						side={props.orientation === 'vertical' ? 'right' : 'top'}
					>
						<p>{tooltipContent ? tooltipContent(thumbValue) : thumbValue}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		)
	}

	return (
		<SliderPrimitive.Root
			data-slot="slider"
			defaultValue={defaultValue}
			value={value}
			min={min}
			max={max}
			className={cx(
				'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
				className,
			)}
			onValueChange={handleValueChange}
			{...props}
		>
			<SliderPrimitive.Control className="relative flex h-4 w-full touch-none items-center select-none data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col">
				<SliderPrimitive.Track className="bg-background-muted relative h-1.5 w-full overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5">
					<SliderPrimitive.Indicator className="bg-info absolute h-full data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full" />
				</SliderPrimitive.Track>
				{showTooltip
					? internalValues.map((thumbValue, index) =>
							renderThumb(thumbValue, index),
						)
					: children}
			</SliderPrimitive.Control>
		</SliderPrimitive.Root>
	)
}

export type SliderThumbProps = ComponentProps<typeof SliderPrimitive.Thumb>
export function SliderThumb({ className, ...props }: SliderThumbProps) {
	return (
		<SliderPrimitive.Thumb
			data-slot="slider-thumb"
			className={cx(
				'border-info bg-background ring-ring/20 block size-4 shrink-0 rounded-full border shadow-sm transition-[color,box-shadow] outline-none hover:ring-4 disabled:pointer-events-none disabled:opacity-50 data-[dragging]:ring-4 data-[focused]:ring-4 data-[touched]:ring-4',
				className,
			)}
			{...props}
		/>
	)
}
