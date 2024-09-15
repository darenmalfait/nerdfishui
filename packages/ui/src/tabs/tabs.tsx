'use client'

import { cx } from '@nerdfish/utils'
import * as TabsPrimivite from '@radix-ui/react-tabs'
import * as React from 'react'

export const TabsRoot = TabsPrimivite.Root

export const TabsList = React.forwardRef<
	React.ElementRef<typeof TabsPrimivite.List>,
	React.ComponentPropsWithoutRef<typeof TabsPrimivite.List>
>(({ className, ...props }, ref) => (
	<TabsPrimivite.List
		ref={ref}
		className={cx(
			'inline-flex items-center justify-center gap-1 rounded-lg focus-within:outline-none',
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
			'text-primary focus-outline relative inline-flex items-center justify-center rounded-lg px-3 py-1 text-sm font-medium transition-all focus-within:outline-none hover:bg-black/5 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-black/10 dark:hover:bg-white/5 dark:data-[state=active]:bg-white/10',
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
			'mt-3 rounded-lg bg-black/10 p-6 focus-within:outline-none dark:bg-white/10',
			className,
		)}
		{...props}
		ref={ref}
	/>
))
TabsContent.displayName = TabsPrimivite.Content.displayName

export type TabsRootProps = React.ComponentPropsWithoutRef<typeof TabsRoot>
export type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsList>
export type TabsTriggerProps = React.ComponentPropsWithoutRef<
	typeof TabsTrigger
>
export type TabsContentProps = React.ComponentPropsWithoutRef<
	typeof TabsContent
>
