'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import { Check } from 'lucide-react'
import type * as React from 'react'

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
	bgClassName = 'bg-background',
	textClassName = 'text-foreground',
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
				'focus-within:outline-active rounded-lg transition-transform',
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
					'peer-[:not(:checked)]:bg-foreground/10 dark:peer-[:not(:checked)]:bg-foreground/20',
					// disabled state
					'peer-disabled:opacity-50',
					// checked state
					'peer-checked:border peer-checked:border-current',
				)}
			/>
			<span className="peer-checked:animate-pop pointer-events-none absolute inset-0 hidden rounded-md peer-checked:block">
				<Icon
					className={cx(
						textClassName,
						'p-xs pointer-events-none h-full w-full',
					)}
				/>
			</span>
		</label>
	)
}

export type CheckboxProps = React.ComponentPropsWithoutRef<typeof Checkbox>
