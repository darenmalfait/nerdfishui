'use client'

import { useRender } from '@base-ui-components/react/use-render'
import { cva, cn, type VariantProps } from '@nerdfish/utils/class'
import { type ReactElement, type ComponentProps } from 'react'
import { Button } from '../button/button'
import { Input, inputVariants } from '../input/input'
import { Textarea } from '../textarea/textarea'

export type InputGroupProps = useRender.ComponentProps<'div'>
export function InputGroup({
	className,
	render = <div />,
	...props
}: InputGroupProps): ReactElement {
	return useRender({
		render,
		props: {
			'data-slot': 'input-group',
			role: 'group',
			className: cn(
				inputVariants(),
				'!p-0',
				'group/input-group relative flex w-full items-center border transition-[color,box-shadow] outline-none',
				'min-w-0 has-[>textarea]:h-auto',

				// Variants based on alignment.
				'has-[>[data-align=inline-start]]:[&>input]:pl-best-friends',
				'has-[>[data-align=inline-end]]:[&>input]:pr-best-friends',
				'has-[>[data-align=block-start]]:[&>input]:pb-casual has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col',
				'has-[>[data-align=block-end]]:[&>input]:pt-casual has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col',

				// Focus state.
				'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]',

				// Error state.
				'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive',

				className,
			),
			...props,
		},
	})
}

export const inputGroupAddonVariants = cva(
	"text-foreground-muted flex h-auto cursor-text items-center justify-center gap-best-friends py-best-friends text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
	{
		variants: {
			align: {
				'inline-start':
					'order-first pl-casual has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
				'inline-end':
					'order-last pr-casual has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]',
				'block-start':
					'order-first w-full justify-start px-casual pt-friends [.border-b]:pb-friends group-has-[>input]/input-group:pt-2.5',
				'block-end':
					'order-last w-full justify-start px-casual pb-friends [.border-t]:pt-friends group-has-[>input]/input-group:pb-2.5',
			},
		},
		defaultVariants: {
			align: 'inline-start',
		},
	},
)

export interface InputGroupAddonProps
	extends ComponentProps<'div'>,
		VariantProps<typeof inputGroupAddonVariants> {}
export function InputGroupAddon({
	className,
	align = 'inline-start',
	...props
}: InputGroupAddonProps) {
	return (
		<div
			role="group"
			data-slot="input-group-addon"
			data-align={align}
			className={cn(inputGroupAddonVariants({ align }), className)}
			onClick={(e) => {
				if ((e.target as HTMLElement).closest('button')) {
					return
				}
				e.currentTarget.parentElement?.querySelector('input')?.focus()
			}}
			{...props}
		/>
	)
}

export type InputGroupButtonProps = ComponentProps<typeof Button>
export function InputGroupButton({
	type = 'button',
	variant = 'ghost',
	size = 'md',
	...props
}: InputGroupButtonProps) {
	return <Button type={type} variant={variant} size={size} {...props} />
}

export type InputGroupTextProps = ComponentProps<'span'>
export function InputGroupText({ className, ...props }: InputGroupTextProps) {
	return (
		<span
			className={cn(
				"text-foreground-muted gap-best-friends flex items-center text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
				className,
			)}
			{...props}
		/>
	)
}

export type InputGroupInputProps = ComponentProps<typeof Input>
export function InputGroupInput({ className, ...props }: InputGroupInputProps) {
	return (
		<Input
			data-slot="input-group-control"
			className={cn(
				'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0',
				className,
			)}
			{...props}
		/>
	)
}

export type InputGroupTextareaProps = ComponentProps<typeof Textarea>
export function InputGroupTextarea({
	className,
	...props
}: InputGroupTextareaProps) {
	return (
		<Textarea
			data-slot="input-group-control"
			className={cn(
				'py-friends flex-1 resize-none rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0',
				className,
			)}
			{...props}
		/>
	)
}
