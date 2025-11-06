'use client'

import { Collapsible as BaseCollapsible } from '@base-ui-components/react/collapsible'
import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type CollapsibleProps = ComponentProps<typeof BaseCollapsible.Root>
export function Collapsible({ ...props }: CollapsibleProps) {
	return <BaseCollapsible.Root data-slot="collapsible" {...props} />
}

export type CollapsibleTriggerProps = ComponentProps<
	typeof BaseCollapsible.Trigger
>
export function CollapsibleTrigger({
	...props
}: ComponentProps<typeof BaseCollapsible.Trigger>) {
	return <BaseCollapsible.Trigger data-slot="collapsible-trigger" {...props} />
}

export type CollapsibleContentProps = ComponentProps<
	typeof BaseCollapsible.Panel
>
export function CollapsibleContent({
	className,
	children,
	...props
}: CollapsibleContentProps) {
	return (
		<BaseCollapsible.Panel
			data-slot="collapsible-panel"
			className={cx(
				'h-[var(--collapsible-panel-height)] overflow-hidden transition-all ease-out data-[ending-style]:h-0 data-[starting-style]:h-0',
				className,
			)}
			{...props}
		>
			{children}
		</BaseCollapsible.Panel>
	)
}
