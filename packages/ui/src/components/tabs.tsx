'use client'

import { cx } from '@nerdfish/utils'
import * as TabsPrimivite from '@radix-ui/react-tabs'
import * as React from 'react'

export type TabsProps = React.ComponentProps<typeof TabsPrimivite.Root>
export const Tabs = TabsPrimivite.Root

const basePadding = 'p-sm'
const outerRadius = 'rounded-base'
const innerRadius = 'rounded-[calc(theme(borderRadius.base)-theme(padding.sm))]'

export type TabsListProps = React.ComponentProps<typeof TabsPrimivite.List>
export function TabsList({ className, ...props }: TabsListProps) {
	return (
		<TabsPrimivite.List
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

export type TabsTriggerProps = React.ComponentProps<
	typeof TabsPrimivite.Trigger
>
export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
	return (
		<TabsPrimivite.Trigger
			className={cx(
				'focus-visible:!outline-foreground text-foreground data-[state=active]:bg-muted py-sm px-md text-md relative inline-flex items-center justify-center font-medium outline-none transition-all disabled:pointer-events-none disabled:opacity-50',
				innerRadius,
				className,
			)}
			{...props}
		/>
	)
}

export type TabsContentProps = React.ComponentProps<
	typeof TabsPrimivite.Content
>
export function TabsContent({ className, ...props }: TabsContentProps) {
	return (
		<TabsPrimivite.Content
			className={cx(
				'mt-md rounded-container focus-within:outline-none',
				className,
			)}
			{...props}
		/>
	)
}
