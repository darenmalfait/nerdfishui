import { InputOTP, inputOTPPatterns } from '@nerdfish/ui'

export function InputOTPPatternsDemo() {
	return (
		<InputOTP.Root
			maxLength={6}
			pattern={inputOTPPatterns.digits}
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
	)
}
