'use client'

import { cx } from '@nerdfish/utils'
import { OTPInput, OTPInputContext, type RenderProps } from 'input-otp'
import { MinusIcon } from 'lucide-react'
import { useContext, type ComponentProps } from 'react'
import { inputVariants } from '../input/input'

export type InputOTPProps = ComponentProps<typeof OTPInput>
export function InputOTP({
	className,
	containerClassName,
	...props
}: InputOTPProps) {
	return (
		<OTPInput
			data-slot="input-otp"
			containerClassName={cx(
				'gap-best-friends flex items-center has-disabled:opacity-50',
				containerClassName,
			)}
			className={cx('disabled:cursor-not-allowed', className)}
			{...props}
		/>
	)
}

export type InputOTPGroupProps = ComponentProps<'div'>
export function InputOTPGroup({ className, ...props }: InputOTPGroupProps) {
	return (
		<div
			data-slot="input-otp-group"
			className={cx('gap-bff flex items-center', className)}
			{...props}
		/>
	)
}

export interface InputOTPSlotProps extends ComponentProps<'div'> {
	index: number
}
export function InputOTPSlot({
	index,
	className,
	...props
}: InputOTPSlotProps) {
	const inputOTPContext: RenderProps | undefined = useContext(OTPInputContext)

	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index] ?? {}

	return (
		<div
			data-slot="input-otp-slot"
			data-active={isActive}
			className={cx(
				inputVariants({ size: 'md' }),
				'relative flex size-12 items-center justify-center',
				'outline-nonedata-[active=true]:z-10 text-sm shadow-xs transition-all data-[active=true]:ring-[3px]',
				'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive',
				className,
			)}
			{...props}
		>
			{char}
			{hasFakeCaret ? (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="animate-caret-blink bg-background-inverted h-4 w-px duration-1000" />
				</div>
			) : null}
		</div>
	)
}

export type InputOTPSeparatorProps = ComponentProps<'div'>
export function InputOTPSeparator({ ...props }: InputOTPSeparatorProps) {
	return (
		<div data-slot="input-otp-separator" role="separator" {...props}>
			<MinusIcon className="text-foreground-muted size-4" />
		</div>
	)
}
