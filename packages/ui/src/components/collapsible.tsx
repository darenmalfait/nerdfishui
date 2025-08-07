'use client'

import { Collapsible as CollapsiblePrimitive } from '@base-ui-components/react/collapsible'
import { cx } from '@nerdfish/utils'

export type CollapsibleProps = CollapsiblePrimitive.Root.Props
export function Collapsible({ ...props }: CollapsibleProps) {
	return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

export type CollapsibleTriggerProps = CollapsiblePrimitive.Trigger.Props
export function CollapsibleTrigger({ ...props }: CollapsibleTriggerProps) {
	return (
		<CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props} />
	)
}

export type CollapsibleContentProps = CollapsiblePrimitive.Panel.Props
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
