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
export function TabsList({ className, children, ...props }: TabsListProps) {
	return (
		<TabsPrimitive.List
			className={cx(
				'gap-sm bg-background-secondary relative flex w-auto items-center focus-within:outline-none',
				outerRadius,
				basePadding,
				className,
			)}
			{...props}
		>
			<TabsPrimitive.Indicator
				className={cx(
					// position
					'absolute left-0 top-1/2 h-9 w-[var(--active-tab-width)] -translate-y-1/2',
					// styling
					'bg-muted',
					innerRadius,
					'transition-all duration-200 ease-in-out',
				)}
				style={{ transform: 'translate(var(--active-tab-left), -50%)' }}
			/>
			{children}
		</TabsPrimitive.List>
	)
}

export type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Tab>
export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
	return (
		<TabsPrimitive.Tab
			className={cx(
				'focus-visible:!outline-foreground text-foreground py-sm px-md text-md relative inline-flex items-center justify-center font-medium outline-none transition-all disabled:pointer-events-none disabled:opacity-50',
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
