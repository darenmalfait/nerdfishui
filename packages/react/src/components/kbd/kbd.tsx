import { cn } from '@nerdfish/utils/class'
import { type ComponentProps } from 'react'

export type KbdProps = ComponentProps<'kbd'>
export function Kbd({ className, ...props }: KbdProps) {
	return (
		<kbd
			data-slot="kbd"
			className={cn(
				'bg-background-muted text-foreground-muted gap-bff pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center rounded-sm px-1 font-sans text-xs font-medium select-none',
				"[&_svg:not([class*='size-'])]:size-3",
				className,
			)}
			{...props}
		/>
	)
}

export type KbdGroupProps = ComponentProps<'div'>
export function KbdGroup({ className, ...props }: KbdGroupProps) {
	return (
		<kbd
			data-slot="kbd-group"
			className={cn('gap-bff inline-flex items-center', className)}
			{...props}
		/>
	)
}
