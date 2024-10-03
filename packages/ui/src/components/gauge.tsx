'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import * as React from 'react'

const GaugeContext = React.createContext<{
	value: number
	strokeWidth: number
} | null>(null)

const useGauge = () => {
	const context = React.useContext(GaugeContext)

	if (!context) {
		throw new Error('useGauge must be used within a Gauge component')
	}

	return context
}

export const gaugeVariants = cva(
	'text-primary [&>[data-slot=primary]]:stroke-current',
	{
		variants: {
			variant: {
				default: 'text-primary [&>[data-slot=secondary]]:stroke-primary/20',
				success: 'text-success [&>[data-slot=secondary]]:stroke-success/20',
				danger: 'text-danger [&>[data-slot=secondary]]:stroke-danger/20',
				warning: 'text-warning [&>[data-slot=secondary]]:stroke-warning/20',
				info: 'text-info [&>[data-slot=secondary]]:stroke-info/20',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export const GaugeText = React.forwardRef<
	SVGTextElement,
	React.ComponentPropsWithoutRef<'text'> & {
		value?: number
	}
>(function GaugeText({ className, ...props }, ref) {
	const { value, strokeWidth } = useGauge()

	return (
		<text
			ref={ref}
			x="50%"
			y="50%"
			data-slot="text"
			textAnchor="middle"
			dominantBaseline="middle"
			alignmentBaseline="central"
			fontSize={36}
			strokeWidth={strokeWidth}
			className={cx('fill-current text-current', className)}
			{...props}
		>
			{value}
		</text>
	)
})

export const Gauge = React.forwardRef<
	SVGSVGElement,
	React.ComponentPropsWithoutRef<'svg'> &
		VariantProps<typeof gaugeVariants> & {
			// Current value of the gauge, expressed as a percentage.
			value?: number
			// Width and height of the gauge. Defaults to 100%.
			size?: number | string
			// Percentage of the total circumference that represents a gap in the gauge. Defaults to 5%.
			gapPercent?: number
			// Stroke width of the gauge. Defaults to 10px.
			strokeWidth?: number
			// Determines if the gauge should have equal primary and secondary stroke lengths. Defaults to false.
			equal?: boolean
		}
>(function Gauge(
	{
		children,
		className,
		strokeWidth = 10,
		value = 0,
		equal = false,
		gapPercent = 5,
		size = 100,
		variant,
		...props
	},
	ref,
) {
	const strokePercent = value // %

	const circleSize = 100 // px
	const radius = circleSize / 2 - strokeWidth / 2
	const circumference = 2 * Math.PI * radius

	const percentToDegree = 360 / 100 // deg
	const percentToPx = circumference / 100 // px

	const offsetFactor = equal ? 0.5 : 0
	const offsetFactorSecondary = 1 - offsetFactor

	const primaryStrokeDasharray = () => {
		if (
			offsetFactor > 0 &&
			strokePercent > 100 - gapPercent * 2 * offsetFactor
		) {
			// calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
			const subtract = -strokePercent + 100

			return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
		} else {
			const subtract = gapPercent * 2 * offsetFactor

			return `${Math.max(strokePercent * percentToPx - subtract * percentToPx, 0)} ${circumference}`
		}
	}

	const secondaryStrokeDasharray = () => {
		if (
			offsetFactorSecondary < 1 &&
			strokePercent < gapPercent * 2 * offsetFactorSecondary
		) {
			// calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
			const subtract = strokePercent

			return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
		} else {
			const subtract = gapPercent * 2 * offsetFactorSecondary

			return `${Math.max((100 - strokePercent) * percentToPx - subtract * percentToPx, 0)} ${circumference}`
		}
	}

	const primaryTransform = () => {
		if (
			offsetFactor > 0 &&
			strokePercent > 100 - gapPercent * 2 * offsetFactor
		) {
			// calculation to gradually shift back to 0 offset as progress nears 100% when offsetFactor > 0
			const add = 0.5 * (-strokePercent + 100)

			return `rotate(${-90 + add * percentToDegree}deg)`
		} else {
			const add = gapPercent * offsetFactor

			return `rotate(${-90 + add * percentToDegree}deg)`
		}
	}

	const secondaryTransform = () => {
		if (
			offsetFactorSecondary < 1 &&
			strokePercent < gapPercent * 2 * offsetFactorSecondary
		) {
			// calculation to gradually shift back to 1 secondary offset as progress nears 100% when offsetFactorSecondary < 1
			const subtract = 0.5 * strokePercent

			return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`
		} else {
			const subtract = gapPercent * offsetFactorSecondary

			return `rotate(${360 - 90 - subtract * percentToDegree}deg) scaleY(-1)`
		}
	}

	const circleStyles: React.CSSProperties = {
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
		strokeDashoffset: 0,
		strokeWidth,
		transition: `all 300ms ease 300ms`,
		transformOrigin: '50% 50%',
		shapeRendering: 'geometricPrecision',
	}

	return (
		<GaugeContext.Provider value={{ value, strokeWidth }}>
			<svg
				ref={ref}
				className={cx(gaugeVariants({ variant }), className)}
				xmlns="http://www.w3.org/2000/svg"
				viewBox={`0 0 ${circleSize} ${circleSize}`}
				shapeRendering="crispEdges"
				width={size}
				height={size}
				style={{ userSelect: 'none' }}
				fill="none"
				{...props}
			>
				{/*secondary*/}
				<circle
					data-slot="secondary"
					cx={circleSize / 2}
					cy={circleSize / 2}
					r={radius}
					style={{
						...circleStyles,
						strokeDasharray: secondaryStrokeDasharray(),
						transform: secondaryTransform(),
					}}
				/>

				{/* primary */}
				<circle
					data-slot="primary"
					cx={circleSize / 2}
					cy={circleSize / 2}
					r={radius}
					style={{
						...circleStyles,
						strokeDasharray: primaryStrokeDasharray(),
						transform: primaryTransform(),
					}}
				/>
				{children}
			</svg>
		</GaugeContext.Provider>
	)
})
Gauge.displayName = 'Gauge'
