import {
	InputOTP,
	InputOTPGroup,
	inputOTPPatterns,
	InputOTPSeparator,
	InputOTPSlot,
} from '@nerdfish/ui'

export function InputOTPPatternsDemo() {
	return (
		<InputOTP
			maxLength={6}
			pattern={inputOTPPatterns.digits}
			render={({ slots }) => (
				<>
					<InputOTPGroup>
						{slots.slice(0, 3).map((slot, index) => (
							<InputOTPSlot key={index} {...slot} />
						))}{' '}
					</InputOTPGroup>
					<InputOTPSeparator />
					<InputOTPGroup>
						{slots.slice(3).map((slot, index) => (
							<InputOTPSlot key={index + 3} {...slot} />
						))}
					</InputOTPGroup>
				</>
			)}
		/>
	)
}
