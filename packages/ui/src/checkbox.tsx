'use client'

import { cva, cx, type ExtractProps, type VariantProps } from '@nerdfish/utils'
import { Check } from 'lucide-react'
import * as React from 'react'

import { type InputProps } from './input'

const checkboxVariants = cva(
	'relative flex items-center justify-center rounded-full focus:scale-75',
	{
		variants: {
			variant: {
				sm: 'size-6',
				md: 'size-8',
				lg: 'size-10',
			},
		},
		defaultVariants: {
			variant: 'sm',
		},
	},
)

function RawCheckbox({
	className,
	variant = 'sm',
	bgClassName = 'bg-primary',
	textClassName = 'text-primary',
	icon: Icon = Check,
	...props
}: React.ComponentPropsWithRef<'input'> &
	VariantProps<typeof checkboxVariants> & {
		bgClassName?: string
		textClassName?: string
		icon?: React.ElementType
	}) {
	return (
		<label
			className={cx(
				textClassName,
				checkboxVariants({ variant }),
				'disabled-within:active:scale-100 group-focus-within:outline-active transition-transform active:scale-75',
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
			<span className="peer-checked:animate-jelly pointer-events-none absolute inset-0 hidden rounded-md peer-checked:block">
				<Icon
					className={cx(textClassName, 'pointer-events-none h-full w-full p-1')}
				/>
			</span>
		</label>
	)
}

function CheckboxError({ error, id }: { error?: string | null; id: string }) {
	if (!error) return null

	return (
		<p className="text-danger mt-2 text-left text-sm" id={id}>
			{error}
		</p>
	)
}

const Checkbox = React.forwardRef<
	HTMLInputElement,
	InputProps & ExtractProps<typeof RawCheckbox>
>(function Checkbox(
	{ error, name, label, id, className, defaultValue, ...props },
	ref,
) {
	const inputId = id ?? name
	const errorId = `${inputId}-error`

	return (
		<div className={cx(className, 'group w-full')}>
			<div className="relative flex items-center">
				<div className="flex h-5 items-center">
					<RawCheckbox ref={ref} id={inputId} name={name} {...props} />
				</div>
				<div className="ml-3 text-base">
					<label htmlFor={inputId} className="text-primary">
						{label}
					</label>
				</div>
			</div>

			<CheckboxError error={error} id={errorId} />
		</div>
	)
})

export { RawCheckbox, Checkbox }
