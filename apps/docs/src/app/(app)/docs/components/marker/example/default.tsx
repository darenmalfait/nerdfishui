'use client'

import { Marker, MarkerContent, MarkerIcon } from '@nerdfish/react/marker'
import { Spinner } from '@nerdfish/react/spinner'

export function MarkerExample() {
	return (
		<div className="gap-casual py-casual mx-auto flex w-full max-w-sm flex-col">
			<Marker role="status">
				<MarkerIcon>
					<Spinner />
				</MarkerIcon>
				<MarkerContent>Checking the logs...</MarkerContent>
			</Marker>
			<Marker variant="separator">
				<MarkerContent>Today</MarkerContent>
			</Marker>
			<Marker variant="border">
				<MarkerContent>New messages</MarkerContent>
			</Marker>
		</div>
	)
}
