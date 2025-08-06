'use client'

import { Tabs as TabsPrimitive } from '@base-ui-components/react/tabs'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

export type TabsProps = React.ComponentProps<typeof TabsPrimitive.Root>
export const Tabs = TabsPrimitive.Root

const basePadding = 'p-sm'
const outerRadius = 'rounded-base'
const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List>
export function TabsList({ className, ...props }: TabsListProps) {
	return (
		<TabsPrimitive.List
			className={cx(
				'gap-sm bg-background-secondary flex w-auto items-center focus-within:outline-none',
				outerRadius,
				basePadding,
				className,
			)}
			{...props}
		/>
	)
}

export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Tab>
export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
	return (
		<TabsPrimitive.Tab
			className={cx(
				'focus-visible:!outline-foreground text-foreground data-[selected]:bg-muted py-sm px-md text-md relative inline-flex items-center justify-center font-medium outline-none transition-all disabled:pointer-events-none disabled:opacity-50',
				innerRadius,
				className,
			)}
			{...props}
		/>
	)
}

export type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Panel>
export function TabsContent({ className, ...props }: TabsContentProps) {
	return (
		<TabsPrimitive.Panel
			className={cx(
				'mt-md rounded-container focus-within:outline-none',
				className,
			)}
			{...props}
		/>
	)
}
