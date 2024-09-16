'use client'

import { Alert, AlertTitle, AlertDescription } from '@nerdfish/ui'

export function AlertDemo() {
	return (
		<Alert className="w-full">
			<AlertTitle>Example alert</AlertTitle>
			<AlertDescription>Example description</AlertDescription>
		</Alert>
	)
}
