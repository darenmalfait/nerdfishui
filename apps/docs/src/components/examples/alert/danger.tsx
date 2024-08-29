'use client'

import { Alert } from '@nerdfish/ui'

export function AlertDanger() {
	return (
		<Alert.Root variant="danger" className="w-full">
			<Alert.Title>Example alert</Alert.Title>
			<Alert.Description>Example description</Alert.Description>
		</Alert.Root>
	)
}
