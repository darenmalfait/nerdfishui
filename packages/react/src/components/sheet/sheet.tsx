import { Dialog as SheetPrimitive } from '@base-ui-components/react/dialog'
import { cva, cn, type VariantProps } from '@nerdfish/utils/class'
import { XIcon } from 'lucide-react'
import { type ComponentProps } from 'react'
import { buttonVariants } from '../button/button'

export type SheetProps = ComponentProps<typeof SheetPrimitive.Root>
export function Sheet({ ...props }: SheetProps) {
	return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

export type SheetTriggerProps = ComponentProps<typeof SheetPrimitive.Trigger>
export function SheetTrigger({
	...props
}: ComponentProps<typeof SheetPrimitive.Trigger>) {
	return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

export type SheetCloseProps = ComponentProps<typeof SheetPrimitive.Close>
export function SheetClose({ className, ...props }: SheetCloseProps) {
	return (
		<SheetPrimitive.Close
			data-slot="sheet-action"
			className={cn(
				!props.render && buttonVariants({ variant: 'outline' }),
				className,
			)}
			{...props}
		/>
	)
}

export type SheetActionProps = ComponentProps<typeof SheetPrimitive.Close>
export function SheetAction({ className, ...props }: SheetActionProps) {
	return (
		<SheetPrimitive.Close
			data-slot="sheet-close"
			className={cn(!props.render && buttonVariants(), className)}
			{...props}
		/>
	)
}

export type SheetPortalProps = ComponentProps<typeof SheetPrimitive.Portal>
export function SheetPortal({ ...props }: SheetPortalProps) {
	return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

export type SheetBackdropProps = ComponentProps<typeof SheetPrimitive.Backdrop>
function SheetBackdrop({ className, ...props }: SheetBackdropProps) {
	return (
		<SheetPrimitive.Backdrop
			data-slot="sheet-overlay"
			className={cn(
				'data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-closed:animation-duration-[300ms] data-open:fade-in-0 fixed inset-0 bg-black/50',
				className,
			)}
			{...props}
		/>
	)
}

export const sheetVariants = cva(
	'bg-background data-[open]:animate-in data-[closed]:animate-out gap-friends fixed flex flex-col shadow-lg transition ease-in-out data-[closed]:duration-300 data-[open]:duration-500',
	{
		variants: {
			variant: {
				default: '',
				inset: 'rounded-container border-border',
			},
			side: {
				top: 'data-[closed]:slide-out-to-top data-[open]:slide-in-from-top',
				right:
					'data-[closed]:slide-out-to-right data-[open]:slide-in-from-right sm:max-w-sm',
				bottom:
					'data-[closed]:slide-out-to-bottom data-[open]:slide-in-from-bottom',
				left: 'data-[closed]:slide-out-to-left data-[open]:slide-in-from-left sm:max-w-sm',
			},
		},
		compoundVariants: [
			{
				variant: 'inset',
				side: 'top',
				className: 'inset-x-best-friends top-best-friends h-auto',
			},
			{
				variant: 'default',
				side: 'top',
				className: 'inset-x-0 top-0 h-auto',
			},
			{
				variant: 'inset',
				side: 'right',
				className:
					'inset-y-best-friends right-best-friends w-[calc(100%-theme(padding.best-friends)*2)] h-[calc(100%-theme(padding.best-friends)*2)]',
			},
			{
				variant: 'default',
				side: 'right',
				className: 'inset-y-0 right-0 h-full border-l w-full',
			},
			{
				variant: 'inset',
				side: 'left',
				className:
					'inset-y-best-friends left-best-friends w-[calc(100%-theme(padding.best-friends)*2)] h-[calc(100%-theme(padding.best-friends)*2)]',
			},
			{
				variant: 'default',
				side: 'left',
				className: 'inset-y-0 left-0 h-full border-r w-full',
			},
			{
				variant: 'inset',
				side: 'bottom',
				className:
					'inset-x-best-friends bottom-best-friends w-[calc(100%-theme(padding.best-friends)*2)] h-auto',
			},
			{
				variant: 'default',
				side: 'bottom',
				className: 'inset-x-0 bottom-0 h-auto border-t w-full',
			},
			{
				variant: 'inset',
				side: 'top',
				className: 'inset-x-best-friends top-best-friends h-auto',
			},
			{
				variant: 'default',
				side: 'top',
				className: 'inset-x-0 top-0 h-auto',
			},
		],
		defaultVariants: {
			variant: 'default',
			side: 'right',
		},
	},
)

export interface SheetContentProps
	extends ComponentProps<typeof SheetPrimitive.Popup>,
		VariantProps<typeof sheetVariants> {}
export function SheetContent({
	className,
	children,
	variant = 'default',
	side = 'right',
	...props
}: SheetContentProps) {
	return (
		<SheetPortal>
			<SheetBackdrop />
			<SheetPrimitive.Popup
				data-slot="sheet-content"
				className={cn(sheetVariants({ variant, side }), className)}
				{...props}
			>
				{children}
				<SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-open:bg-background-muted top-friends right-friends rounded-base absolute opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
					<XIcon className="size-4" />
					<span className="sr-only">Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Popup>
		</SheetPortal>
	)
}

export type SheetHeaderProps = ComponentProps<'div'>
export function SheetHeader({ className, ...props }: SheetHeaderProps) {
	return (
		<div
			data-slot="sheet-header"
			className={cn('p-friends gap-bff flex flex-col', className)}
			{...props}
		/>
	)
}

export type SheetBodyProps = ComponentProps<'div'>
export function SheetBody({ className, ...props }: SheetBodyProps) {
	return (
		<div
			data-slot="sheet-body"
			className={cn('py-best-friends px-friends', className)}
			{...props}
		/>
	)
}

export type SheetFooterProps = ComponentProps<'div'>
export function SheetFooter({ className, ...props }: SheetFooterProps) {
	return (
		<div
			data-slot="sheet-footer"
			className={cn(
				'p-friends sm:space-x-best-friends flex flex-col-reverse sm:flex-row sm:justify-end',
				className,
			)}
			{...props}
		/>
	)
}

export type SheetTitleProps = ComponentProps<typeof SheetPrimitive.Title>
export function SheetTitle({ className, ...props }: SheetTitleProps) {
	return (
		<SheetPrimitive.Title
			data-slot="sheet-title"
			className={cn('text-foreground font-semibold', className)}
			{...props}
		/>
	)
}

export type SheetDescriptionProps = ComponentProps<
	typeof SheetPrimitive.Description
>
export function SheetDescription({
	className,
	...props
}: SheetDescriptionProps) {
	return (
		<SheetPrimitive.Description
			data-slot="sheet-description"
			className={cn('text-foreground-muted text-sm', className)}
			{...props}
		/>
	)
}
