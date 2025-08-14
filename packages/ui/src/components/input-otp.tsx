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

export const inputOTPPatterns = {
	digits: REGEXP_ONLY_DIGITS,
	chars: REGEXP_ONLY_CHARS,
	digitsAndChars: REGEXP_ONLY_DIGITS_AND_CHARS,
}

export type InputOTPProps = React.ComponentProps<typeof OTPInput>
export function InputOTP({ className, ...props }: InputOTPProps) {
	return (
		<OTPInput
			containerClassName={cx('gap-md flex items-center', className)}
			{...props}
		/>
	)
}

export type InputOTPGroupProps = React.ComponentProps<'div'>
export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
	return (
		<div className={cx('gap-sm flex items-center', className)} {...props} />
	)
}

export interface InputOTPSlotProps
	extends SlotProps,
		React.ComponentProps<'div'> {
	activeClassName?: string
}
export function InputOTPSlot({
	char,
	hasFakeCaret,
	isActive,
	className,
	activeClassName,
	...props
}: InputOTPSlotProps) {
	return (
		<div
			className={cx(
				inputVariants(),
				'relative flex h-10 w-10 items-center justify-center',
				isActive &&
					cx('ring-brand ring-offset-background z-10 ring-2', activeClassName),
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
}

export type InputOTPSeparatorProps = React.ComponentProps<'div'>
export function InputOTPSeparator({
	className,
	...props
}: InputOTPSeparatorProps) {
	return (
		<div role="separator" {...props}>
			<Dot />
		</div>
	)
}
