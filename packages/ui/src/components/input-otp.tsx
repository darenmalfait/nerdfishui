'use client'
// based on https://input-otp.rodz.dev/

import { cx } from '@nerdfish/utils'
import {
	OTPInput,
	REGEXP_ONLY_CHARS,
	REGEXP_ONLY_DIGITS,
	REGEXP_ONLY_DIGITS_AND_CHARS,
	type SlotProps,
} from 'input-otp'
import { Dot } from 'lucide-react'
import * as React from 'react'

import { inputVariants } from './input'

export const InputOTP = React.forwardRef<
	React.ElementRef<typeof OTPInput>,
	React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, ...props }, ref) => (
	<OTPInput
		ref={ref}
		containerClassName={cx('gap-md flex items-center', className)}
		{...props}
	/>
))
InputOTP.displayName = 'InputOTP'

export const InputOTPGroup = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx('gap-sm flex items-center', className)}
		{...props}
	/>
))
InputOTPGroup.displayName = 'InputOTPGroup'

export const InputOTPSlot = React.forwardRef<
	React.ElementRef<'div'>,
	SlotProps &
		React.ComponentPropsWithoutRef<'div'> & {
			activeClassName?: string
		}
>(
	(
		{ char, hasFakeCaret, isActive, className, activeClassName, ...props },
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cx(
					inputVariants(),
					'relative flex h-10 w-10 items-center justify-center',
					isActive &&
						cx(
							'ring-accent ring-offset-background z-10 ring-2',
							activeClassName,
						),
					className,
				)}
				{...props}
			>
				{char}
				{hasFakeCaret ? (
					<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
						<div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
					</div>
				) : null}
			</div>
		)
	},
)
InputOTPSlot.displayName = 'InputOTPSlot'

export const InputOTPSeparator = React.forwardRef<
	React.ElementRef<'div'>,
	React.ComponentPropsWithoutRef<'div'>
>(({ ...props }, ref) => (
	<div ref={ref} role="separator" {...props}>
		<Dot />
	</div>
))
InputOTPSeparator.displayName = 'InputOTPSeparator'

export const inputOTPPatterns = {
	digits: REGEXP_ONLY_DIGITS,
	chars: REGEXP_ONLY_CHARS,
	digitsAndChars: REGEXP_ONLY_DIGITS_AND_CHARS,
}

export type InputOTPProps = React.ComponentPropsWithoutRef<typeof InputOTP>
export type InputOTPGroupProps = React.ComponentPropsWithoutRef<
	typeof InputOTPGroup
>
export type InputOTPSlotProps = React.ComponentPropsWithoutRef<
	typeof InputOTPSlot
>
export type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<
	typeof InputOTPSeparator
>
