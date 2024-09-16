'use client'

import { Alert, AlertTitle, AlertDescription } from '@nerdfish/ui'

export function AlertWarning() {
	return (
		<Alert variant="warning" className="w-full">
			<AlertTitle>Example alert</AlertTitle>
			<AlertDescription>Example description</AlertDescription>
		</Alert>
	)
}
