'use client'

import { Alert } from '@nerdfish/ui'
import * as React from 'react'

export function AlertInfo() {
	return (
		<Alert variant="info" className="w-full">
			<Alert.Title>Example alert</Alert.Title>
			<Alert.Description>Example description</Alert.Description>
		</Alert>
	)
}
