'use client'

import { Alert } from '@nerdfish/ui'

export function AlertInfo() {
	return (
		<Alert variant="info" className="w-full">
			<Alert.Title>Example alert</Alert.Title>
			<Alert.Description>Example description</Alert.Description>
		</Alert>
	)
}
