'use client'

import { Alert, AlertTitle, AlertDescription } from '@nerdfish/ui'

export function AlertInfo() {
	return (
		<Alert variant="info" className="w-full">
			<AlertTitle>Example alert</AlertTitle>
			<AlertDescription>Example description</AlertDescription>
		</Alert>
	)
}
