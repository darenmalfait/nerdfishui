'use client'

import { Alert } from '@nerdfish/ui'

export function AlertDemo() {
	return (
		<Alert.Root className="w-full">
			<Alert.Title>Example alert</Alert.Title>
			<Alert.Description>Example description</Alert.Description>
		</Alert.Root>
	)
}
