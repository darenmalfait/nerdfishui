'use client'

import { cx } from '@nerdfish/utils'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { Circle } from 'lucide-react'
import * as React from 'react'

export const RadioGroup = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Root
			className={cx('grid gap-2', className)}
			{...props}
			ref={ref}
		/>
	)
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

export function RadioGroupField({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div
			data-slot="field"
			{...props}
			className={cx(
				className,

				// Base layout
				'grid grid-cols-[1.125rem_1fr] items-center gap-y-1 sm:grid-cols-[1rem_1fr]',

				// Control layout
				'[&>[data-slot=control]]:col-start-1 [&>[data-slot=control]]:row-start-1 [&>[data-slot=control]]:justify-self-center',

				// Label layout
				'[&>[data-slot=label]]:col-start-2 [&>[data-slot=label]]:row-start-1 [&>[data-slot=label]]:justify-self-start [&>[data-slot=label]]:pl-4',

				// Description layout
				'[&>[data-slot=description]]:col-start-2 [&>[data-slot=description]]:row-start-2',

				// With description
				'[&_[data-slot=description]]:font-normal',
			)}
		/>
	)
}

export const RadioGroupItem = React.forwardRef<
	React.ElementRef<typeof RadioGroupPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
	return (
		<RadioGroupPrimitive.Item
			data-slot="control"
			ref={ref}
			className={cx(
				'border-muted text-primary ring-offset-background focus-outline relative aspect-square h-4 w-4 rounded-full border outline-none disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		>
			<RadioGroupPrimitive.Indicator className="flex items-center justify-center">
				<Circle className="size-2.5 fill-current text-current" />
			</RadioGroupPrimitive.Indicator>
		</RadioGroupPrimitive.Item>
	)
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

export type RadioGroupProps = React.ComponentPropsWithoutRef<
	typeof RadioGroupPrimitive.Root
>

export type RadioGroupItemProps = React.ComponentPropsWithoutRef<
	typeof RadioGroupPrimitive.Item
>

export type RadioGroupFieldProps = React.ComponentPropsWithoutRef<
	typeof RadioGroupField
>
