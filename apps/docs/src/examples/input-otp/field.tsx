import { Field, InputOTP } from '@nerdfish/ui'

export function InputOTPFieldDemo() {
	return (
		<Field
			label="OTP"
			htmlFor="otp"
			description="Enter the 6-digit code sent to your phone"
		>
			<InputOTP.Root
				name="otp"
				maxLength={6}
				render={({ slots }) => (
					<>
						<InputOTP.Group>
							{slots.slice(0, 3).map((slot, index) => (
								<InputOTP.Slot key={index} {...slot} />
							))}{' '}
						</InputOTP.Group>
						<InputOTP.Separator />
						<InputOTP.Group>
							{slots.slice(3).map((slot, index) => (
								<InputOTP.Slot key={index + 3} {...slot} />
							))}
						</InputOTP.Group>
					</>
				)}
			/>
		</Field>
	)
}
