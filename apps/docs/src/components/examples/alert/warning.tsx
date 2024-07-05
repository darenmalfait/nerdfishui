'use client'

import { Alert } from '@nerdfish/ui'

export function AlertWarning() {
	return (
		<Alert variant="warning" className="w-full">
			<Alert.Title>Example alert</Alert.Title>
			<Alert.Description>Example description</Alert.Description>
		</Alert>
	)
}
