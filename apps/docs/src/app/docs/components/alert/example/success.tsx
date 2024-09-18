'use client'

import { Alert, AlertTitle, AlertDescription } from '@nerdfish/ui'

export function AlertSuccessExample() {
	return (
		<Alert variant="success" className="w-full">
			<AlertTitle>Example alert</AlertTitle>
			<AlertDescription>Example description</AlertDescription>
		</Alert>
	)
}
