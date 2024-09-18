import {
	Description,
	Field,
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
	Label,
} from '@nerdfish/ui'

export function InputOTPFieldExample() {
	return (
		<Field>
			<Label htmlFor="otp">OTP</Label>
			<Description>Enter the 6-digit code sent to your phone</Description>
			<InputOTP
				name="otp"
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
		</Field>
	)
}
