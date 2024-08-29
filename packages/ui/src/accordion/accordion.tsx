'use client'

import { cx } from '@nerdfish/utils'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

export const AccordionRoot = AccordionPrimitive.Root

export const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cx(
			'border-b border-b-gray-200 dark:border-b-gray-700',
			className,
		)}
		{...props}
	/>
))
AccordionItem.displayName = 'AccordionItem'

export const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cx(
				'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
				className,
			)}
			{...props}
		>
			{children}
			<ChevronDown className="size-4 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

export const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cx(
			'data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden text-sm transition-all',
			className,
		)}
		{...props}
	>
		<div className="pb-4 pt-0">{children}</div>
	</AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export type AccordionRootProps = React.ComponentPropsWithoutRef<
	typeof AccordionRoot
>
export type AccordionItemProps = React.ComponentPropsWithoutRef<
	typeof AccordionItem
>
export type AccordionTriggerProps = React.ComponentPropsWithoutRef<
	typeof AccordionTrigger
>
export type AccordionContentProps = React.ComponentPropsWithoutRef<
	typeof AccordionContent
>
