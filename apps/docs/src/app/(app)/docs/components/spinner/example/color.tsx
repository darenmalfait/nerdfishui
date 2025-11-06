'use client'

import { Spinner } from '@nerdfish/react/spinner'

export function SpinnerColorExample() {
	return (
		<div className="flex items-center gap-6">
			<Spinner className="text-destructive size-6" />
			<Spinner className="text-success size-6" />
			<Spinner className="text-info size-6" />
			<Spinner className="text-warning size-6" />
		</div>
	)
}
