'use client'

import { Button } from '@nerdfish/react/button'
import { Spinner } from '@nerdfish/react/spinner'

export function SpinnerButtonExample() {
	return (
		<div className="flex flex-col items-center gap-4">
			<Button disabled size="sm">
				<Spinner />
				Loading...
			</Button>
			<Button variant="outline" disabled size="sm">
				<Spinner />
				Please wait
			</Button>
			<Button variant="secondary" disabled size="sm">
				<Spinner />
				Processing
			</Button>
		</div>
	)
}
