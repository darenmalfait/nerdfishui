'use client'

import { Tabs as TabsPrimitive } from '@base-ui-components/react/tabs'
import { cva, cn, type VariantProps } from '@nerdfish/utils/class'
import { type ComponentProps, createContext, useContext } from 'react'

// Variants for TabsList
const tabsListVariants = cva('flex items-center shrink-0 w-fit', {
	variants: {
		variant: {
			default: 'bg-background-muted p-bff',
			button: '',
			line: 'border-b border-border',
		},
		shape: {
			default: '',
			pill: '',
		},
		size: {
			lg: 'gap-casual',
			md: 'gap-friends',
			sm: 'gap-best-friends',
			xs: 'gap-bff',
		},
	},
	compoundVariants: [
		{ variant: 'default', size: 'lg', className: 'p-best-friends gap-casual' },
		{ variant: 'default', size: 'md', className: 'p-pff gap-friends' },
		{ variant: 'default', size: 'sm', className: 'p-pff gap-best-friends' },
		{ variant: 'default', size: 'xs', className: 'p-pff gap-bff' },

		{
			variant: 'default',
			shape: 'default',
			size: 'lg',
			className: 'rounded-compact',
		},
		{
			variant: 'default',
			shape: 'default',
			size: 'md',
			className: 'rounded-compact',
		},
		{
			variant: 'default',
			shape: 'default',
			size: 'sm',
			className: 'rounded-compact',
		},
		{
			variant: 'default',
			shape: 'default',
			size: 'xs',
			className: 'rounded-compact',
		},

		{ variant: 'line', size: 'lg', className: 'gap-9' },
		{ variant: 'line', size: 'md', className: 'gap-8' },
		{ variant: 'line', size: 'sm', className: 'gap-4' },
		{ variant: 'line', size: 'xs', className: 'gap-4' },

		{
			variant: 'default',
			shape: 'pill',
			className: 'rounded-full [&_[role=tab]]:rounded-full',
		},
		{
			variant: 'button',
			shape: 'pill',
			className: 'rounded-full [&_[role=tab]]:rounded-full',
		},
	],
	defaultVariants: {
		variant: 'default',
		size: 'md',
		shape: 'default',
	},
})

// Variants for TabsTrigger
const tabsTriggerVariants = cva(
	'shrink-0 cursor-pointer whitespace-nowrap inline-flex justify-center items-center font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:shrink-0 [&_svg]:text-foreground-muted [&:hover_svg]:text-foreground [&[data-selected]_svg]:text-foreground',
	{
		variants: {
			variant: {
				default:
					'text-foreground-muted aria-selected:bg-background hover:text-foreground aria-selected:text-foreground aria-selected:shadow-xs aria-selected:shadow-black/5',
				button:
					'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-lg text-foreground hover:text-foreground aria-selected:bg-background-muted aria-selected:text-foreground',
				line: 'border-b-2 text-foreground-muted border-transparent aria-selected:border-foreground hover:text-foreground aria-selected:text-foreground aria-selected:text-foreground',
			},
			size: {
				lg: 'gap-casual [&_svg]:size-5 text-sm',
				md: 'gap-friends [&_svg]:size-4 text-sm',
				sm: 'gap-best-friends [&_svg]:size-3.5 text-xs',
				xs: 'gap-bff [&_svg]:size-3.5 text-xs',
			},
		},
		compoundVariants: [
			{
				variant: 'default',
				size: 'lg',
				className:
					'py-best-friends px-friends rounded-[calc(theme(borderRadius.compact)-theme(padding.best-friends))]',
			},
			{
				variant: 'default',
				size: 'md',
				className:
					'py-best-friends px-friends rounded-[calc(theme(borderRadius.compact)-theme(padding.bff))]',
			},
			{
				variant: 'default',
				size: 'sm',
				className:
					'py-bff px-best-friends rounded-[calc(theme(borderRadius.compact)-theme(padding.bff))]',
			},
			{
				variant: 'default',
				size: 'xs',
				className:
					'py-1 px-2 rounded-[calc(theme(borderRadius.compact)-theme(padding.bff))]',
			},

			{
				variant: 'button',
				size: 'lg',
				className:
					'py-best-friends px-friends rounded-[calc(theme(borderRadius.compact)-theme(padding.best-friends))]',
			},
			{
				variant: 'button',
				size: 'md',
				className:
					'py-best-friends px-friends rounded-[calc(theme(borderRadius.compact)-theme(padding.bff))]',
			},
			{
				variant: 'button',
				size: 'sm',
				className:
					'py-bff px-best-friends rounded-[calc(theme(borderRadius.compact)-theme(padding.bff))]',
			},
			{
				variant: 'button',
				size: 'xs',
				className:
					'py-1 px-2 rounded-[calc(theme(borderRadius.compact)-theme(padding.bff))]',
			},

			{ variant: 'line', size: 'lg', className: 'py-friends' },
			{ variant: 'line', size: 'md', className: 'py-best-friends' },
			{ variant: 'line', size: 'sm', className: 'py-bff' },
			{ variant: 'line', size: 'xs', className: 'py-1.5' },
		],
		defaultVariants: {
			variant: 'default',
			size: 'md',
		},
	},
)

// Variants for TabsContent
const tabsContentVariants = cva(
	'mt-friends focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
	{
		variants: {
			variant: {
				default: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

// Context
type TabsContextType = {
	variant?: 'default' | 'button' | 'line'
	size?: 'lg' | 'sm' | 'xs' | 'md'
}
const TabsContext = createContext<TabsContextType>({
	variant: 'default',
	size: 'md',
})

export type TabsProps = ComponentProps<typeof TabsPrimitive.Root>
export function Tabs({ className, ...props }: TabsProps) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn('', className)}
			{...props}
		/>
	)
}

export interface TabsListProps
	extends ComponentProps<typeof TabsPrimitive.List>,
		VariantProps<typeof tabsListVariants> {}
export function TabsList({
	className,
	variant,
	shape,
	size,
	...props
}: TabsListProps) {
	return (
		<TabsContext.Provider
			value={{ variant: variant ?? 'default', size: size ?? 'md' }}
		>
			<TabsPrimitive.List
				data-slot="tabs-list"
				className={cn(tabsListVariants({ variant, shape, size }), className)}
				{...props}
			>
				{props.children}
			</TabsPrimitive.List>
		</TabsContext.Provider>
	)
}

export type TabsTriggerProps = ComponentProps<typeof TabsPrimitive.Tab>
export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
	const { variant, size } = useContext(TabsContext)

	return (
		<TabsPrimitive.Tab
			data-slot="tabs-trigger"
			className={cn(tabsTriggerVariants({ variant, size }), className)}
			{...props}
		/>
	)
}

export interface TabsContentProps
	extends ComponentProps<typeof TabsPrimitive.Panel>,
		VariantProps<typeof tabsContentVariants> {}
export function TabsContent({
	className,
	variant,
	...props
}: ComponentProps<typeof TabsPrimitive.Panel> &
	VariantProps<typeof tabsContentVariants>) {
	return (
		<TabsPrimitive.Panel
			data-slot="tabs-content"
			className={cn(tabsContentVariants({ variant }), className)}
			{...props}
		/>
	)
}
