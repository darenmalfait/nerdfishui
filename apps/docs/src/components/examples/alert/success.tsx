'use client'

import { Alert } from '@nerdfish/ui'

export function AlertSuccess() {
	return (
		<Alert variant="success" className="w-full">
			<Alert.Title>Example alert</Alert.Title>
			<Alert.Description>Example description</Alert.Description>
		</Alert>
	)
}
