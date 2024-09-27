'use client'

import { cx } from '@nerdfish/utils'
import * as TabsPrimivite from '@radix-ui/react-tabs'
import * as React from 'react'

export const Tabs = TabsPrimivite.Root

export const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimivite.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimivite.List>
>(({ className, ...props }, ref) => (
	<TabsPrimivite.List
		ref={ref}
		className={cx(
			'flex w-full items-center justify-start gap-1 border-b focus-within:outline-none',
			className,
		)}
		{...props}
	/>
))
TabsList.displayName = TabsPrimivite.List.displayName

export const TabsTrigger = React.forwardRef<
	React.ElementRef<typeof TabsPrimivite.Trigger>,
	React.ComponentPropsWithoutRef<typeof TabsPrimivite.Trigger>
>(({ className, ...props }, ref) => (
	<TabsPrimivite.Trigger
		className={cx(
			'text-primary focus-visible:!border-accent relative inline-flex items-center justify-center border-b-2 border-transparent px-3 py-2 text-sm font-medium transition-all focus-within:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b-2 data-[state=active]:border-black dark:data-[state=active]:border-white',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
TabsTrigger.displayName = TabsPrimivite.Trigger.displayName

export const TabsContent = React.forwardRef<
	React.ElementRef<typeof TabsPrimivite.Content>,
	React.ComponentPropsWithoutRef<typeof TabsPrimivite.Content>
>(({ className, ...props }, ref) => (
	<TabsPrimivite.Content
		className={cx(
			'rounded-semi bg-muted mt-3 p-4 focus-within:outline-none',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
TabsContent.displayName = TabsPrimivite.Content.displayName

export type TabsProps = React.ComponentPropsWithoutRef<typeof Tabs>
export type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsList>
export type TabsTriggerProps = React.ComponentPropsWithoutRef<
	typeof TabsTrigger
>
export type TabsContentProps = React.ComponentPropsWithoutRef<
	typeof TabsContent
>
