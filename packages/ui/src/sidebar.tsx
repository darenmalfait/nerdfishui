import { cva, cx, type VariantProps } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

export const sidebarVariants = cva('flex flex-col border-r border-primary', {
	variants: {
		variant: {
			default: 'w-full max-w-64 lg:max-w-72 py-3',
			compact: 'w-full max-w-16 py-3',
		},
	},
	defaultVariants: {
		variant: 'default',
	},
})

export const sidebarContentVariants: typeof sidebarVariants = cva(
	'flex flex-col gap-2 px-3',
	{
		variants: {
			variant: {
				default: '',
				compact: '',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	},
)

export const Sidebar = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'nav'> &
		VariantProps<typeof sidebarVariants> & {
			asChild?: boolean
		}
>(({ className, children, asChild, variant, ...props }, ref) => {
	const Comp = asChild ? Slot : 'nav'

	return (
		<Comp
			className={cx(sidebarVariants({ variant }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</Comp>
	)
})
Sidebar.displayName = 'Sidebar'

export const SidebarSection = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'> &
		VariantProps<typeof sidebarContentVariants> & {
			asChild?: boolean
		}
>(({ className, children, asChild, variant, ...props }, ref) => {
	const Comp = asChild ? Slot : 'div'

	return (
		<Comp
			className={cx(sidebarContentVariants({ variant }), className)}
			ref={ref}
			{...props}
		>
			{children}
		</Comp>
	)
})
SidebarSection.displayName = 'SidebarSection'

export const SidebarDivider = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
	return <div className={cx('bg-muted h-px w-full')} ref={ref} {...props} />
})
SidebarDivider.displayName = 'SidebarDivider'

export type SidebarProps = React.ComponentPropsWithoutRef<typeof Sidebar>

export type SidebarSectionProps = React.ComponentPropsWithoutRef<
	typeof SidebarSection
>

export type SidebarDividerProps = React.ComponentPropsWithoutRef<
	typeof SidebarDivider
>
