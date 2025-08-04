'use client'

import { Accordion as AccordionPrimitive } from '@base-ui-components/react/accordion'
import { cx } from '@nerdfish/utils'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

export type AccordionProps = React.ComponentProps<
	typeof AccordionPrimitive.Root
>
export function Accordion({ ...props }: AccordionProps) {
	return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

export type AccordionItemProps = React.ComponentProps<
	typeof AccordionPrimitive.Item
>
export function AccordionItem({ className, ...props }: AccordionItemProps) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cx(
				'border-b border-b-gray-200 dark:border-b-gray-700',
				className,
			)}
			{...props}
		/>
	)
}

export interface AccordionTriggerProps
	extends React.ComponentProps<typeof AccordionPrimitive.Trigger> {
	hideIcon?: boolean
}
export function AccordionTrigger({
	className,
	children,
	hideIcon,
	...props
}: AccordionTriggerProps) {
	return (
		<AccordionPrimitive.Header className="flex">
			<AccordionPrimitive.Trigger
				data-slot="accordion-trigger"
				className={cx(
					'py-md focus-visible:outline-active relative flex flex-1 items-center justify-between text-left font-medium outline-none transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
					className,
				)}
				{...props}
			>
				{children}
				{!hideIcon ? (
					<ChevronDown className="size-4 transition-transform duration-200" />
				) : null}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
}

export type AccordionContentProps = React.ComponentProps<
	typeof AccordionPrimitive.Panel
>
export function AccordionContent({
	children,
	className,
	...props
}: AccordionContentProps) {
	return (
		<AccordionPrimitive.Panel
			data-slot="accordion-content"
			className={cx(
				'h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] ease-out',
				'data-[ending-style]:h-0 data-[starting-style]:h-0',
				className,
			)}
			{...props}
		>
			<div className="pb-4 pt-0">{children}</div>
		</AccordionPrimitive.Panel>
	)
}
