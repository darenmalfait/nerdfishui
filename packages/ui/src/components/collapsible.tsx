'use client'

import { Collapsible as CollapsiblePrimitive } from '@base-ui-components/react/collapsible'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type CollapsibleProps = React.ComponentProps<
	typeof CollapsiblePrimitive.Root
>
export function Collapsible({ ...props }: CollapsibleProps) {
	return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

export type CollapsibleTriggerProps = React.ComponentProps<
	typeof CollapsiblePrimitive.Trigger
>
export function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
	return (
		<CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
	)
}

export type CollapsibleContentProps = React.ComponentProps<
	typeof CollapsiblePrimitive.Panel
>
export function CollapsibleContent({
	className,
	...props
}: CollapsibleContentProps) {
	return (
		<CollapsiblePrimitive.Panel
			data-slot="collapsible-content"
			className={cx(
				'data-ending-style:h-0 data-starting-style:h-0 h-[var(--collapsible-panel-height)] overflow-hidden text-sm transition-all duration-200',
				className,
			)}
			{...props}
		/>
	)
}
