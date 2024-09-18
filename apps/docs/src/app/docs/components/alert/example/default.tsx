'use client'

import { Alert, AlertTitle, AlertDescription } from '@nerdfish/ui'

export function AlertExample() {
	return (
		<Alert className="w-full">
			<AlertTitle>Example alert</AlertTitle>
			<AlertDescription>Example description</AlertDescription>
		</Alert>
	)
}
