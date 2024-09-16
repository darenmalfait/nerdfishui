'use client'

import { Alert, AlertTitle, AlertDescription } from '@nerdfish/ui'

export function AlertDanger() {
	return (
		<Alert variant="danger" className="w-full">
			<AlertTitle>Example alert</AlertTitle>
			<AlertDescription>Example description</AlertDescription>
		</Alert>
	)
}
