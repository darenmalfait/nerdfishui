'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { Check } from 'lucide-react'
import * as React from 'react'

import { type InputProps } from './input'

export const checkboxVariants = cva(
	'relative flex items-center justify-center rounded-full',
	{
		variants: {
			inputSize: {
				sm: 'size-6',
				md: 'size-8',
				lg: 'size-10',
			},
		},
		defaultVariants: {
			inputSize: 'sm',
		},
	},
)

export function Checkbox({
	className,
	inputSize = 'sm',
	bgClassName = 'bg-primary',
	textClassName = 'text-primary',
	icon: Icon = Check,
	...props
}: Omit<InputProps, 'inputSize' | 'variant'> &
	VariantProps<typeof checkboxVariants> & {
		bgClassName?: string
		textClassName?: string
		icon?: React.ElementType
	}) {
	return (
		<label
			className={cx(
				textClassName,
				checkboxVariants({ inputSize }),
				'group-focus-within:outline-active transition-transform',
				className,
			)}
		>
			<input {...props} className="peer sr-only" type="checkbox" />
			<div
				className={cx(
					bgClassName,
					textClassName,
					// basic styles
					'relative inline-block h-full w-full rounded-lg border transition-all peer-[:not(:disabled)]:cursor-pointer',
					// border
					'border-transparent',
					// background
					'peer-[:not(:checked)]:bg-inverted/10 dark:peer-[:not(:checked)]:bg-inverted/20',
					// disabled state
					'peer-disabled:opacity-50',
					// checked state
					'peer-checked:border peer-checked:border-current',
				)}
			/>
			<span className="peer-checked:animate-pop pointer-events-none absolute inset-0 hidden rounded-lg peer-checked:block">
				<Icon
					className={cx(textClassName, 'pointer-events-none h-full w-full p-1')}
				/>
			</span>
		</label>
	)
}

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof Checkbox>
