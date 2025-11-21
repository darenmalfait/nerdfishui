'use client'

import { Accordion as AccordionPrimitive } from '@base-ui-components/react/accordion'
import { cn } from '@nerdfish/utils/class'
import { ChevronDown } from 'lucide-react'
import { type ComponentProps } from 'react'

export type AccordionProps = ComponentProps<typeof AccordionPrimitive.Root>
export function Accordion({ className, ...props }: AccordionProps) {
	return (
		<AccordionPrimitive.Root
			data-slot="accordion"
			className={cn('space-y-friends', className)}
			{...props}
		/>
	)
}

export type AccordionItemProps = ComponentProps<typeof AccordionPrimitive.Item>
export function AccordionItem({ className, ...props }: AccordionItemProps) {
	return (
		<AccordionPrimitive.Item
			data-slot="accordion-item"
			className={cn(
				'focus-within:ring-ring border-border rounded-base group/accordion-item border focus-within:ring',
				className,
			)}
			{...props}
		/>
	)
}

export interface AccordionTriggerProps
	extends ComponentProps<typeof AccordionPrimitive.Trigger> {
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
				className={cn(
					'p-friends hover:bg-background-muted/20 rounded-base relative flex flex-1 items-center justify-between text-left font-medium transition-all outline-none',
					'data-panel-open:hover:bg-transparent',
					'[&[data-panel-open]>[data-slot="accordion-trigger-icon"]>svg]:rotate-180',
					'font-bold',
					className,
				)}
				{...props}
			>
				{children}
				{!hideIcon ? (
					<div data-slot="accordion-trigger-icon">
						<ChevronDown className="ml-friends size-5 transition-transform duration-200" />
					</div>
				) : null}
			</AccordionPrimitive.Trigger>
		</AccordionPrimitive.Header>
	)
}

export type AccordionContentProps = ComponentProps<
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
			className={cn(
				'h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] ease-out',
				'data-ending-style:h-0 data-starting-style:h-0',
				className,
			)}
			{...props}
		>
			<div className="px-friends pb-friends text-foreground-muted pr-proximity-acquaintance pt-0">
				{children}
			</div>
		</AccordionPrimitive.Panel>
	)
}
