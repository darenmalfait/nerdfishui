'use client'

import { Button } from '@nerdfish/react/button'
import { toast } from '@nerdfish/react/toast'

export function ToastExample() {
	return (
		<Button
			variant="outline"
			onClick={() =>
				toast('Event has been created', {
					description: 'Sunday, December 03, 2023 at 9:00 AM',
					action: {
						label: 'Undo',
						onClick: () => console.info('Undo'),
					},
				})
			}
		>
			Show Toast
		</Button>
	)
}
