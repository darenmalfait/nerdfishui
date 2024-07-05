import { InputOTP } from '@nerdfish/ui'
import * as React from 'react'

export function InputOTPDemo() {
	return (
		<InputOTP
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
	)
}
