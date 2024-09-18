import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from '@nerdfish/ui'

export function InputOTPExample() {
	return (
		<InputOTP
			maxLength={6}
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
