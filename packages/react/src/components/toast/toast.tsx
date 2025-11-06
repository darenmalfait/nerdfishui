'use client'

import { cx } from '@nerdfish/utils'
import {
	CircleCheckIcon,
	InfoIcon,
	Loader2Icon,
	OctagonXIcon,
	TriangleAlertIcon,
} from 'lucide-react'
import { type CSSProperties } from 'react'
import {
	Toaster as Sonner,
	type ToasterProps as SonnerToasterProps,
	toast,
} from 'sonner'

export type ToasterProps = SonnerToasterProps

export function Toaster({ position = 'top-center', ...props }: ToasterProps) {
	return (
		<Sonner
			theme="dark"
			className="toaster group"
			position={position}
			icons={{
				success: <CircleCheckIcon className="!size-4" />,
				info: <InfoIcon className="!size-4" />,
				warning: <TriangleAlertIcon className="!size-4" />,
				error: <OctagonXIcon className="!size-4" />,
				loading: <Loader2Icon className="!size-4 animate-spin" />,
			}}
			style={
				{
					'--normal-bg': 'var(--popover)',
					'--normal-text': 'var(--popover-contrast)',
					'--normal-border': 'var(--border)',
				} as CSSProperties
			}
			toastOptions={{
				...props.toastOptions,
				classNames: {
					...props.toastOptions?.classNames,

					toast: cx(
						'!rounded-popover !p-popover has-[>[data-icon]]:!p-popover-compact has-[>[data-icon]>.sonner-loader[data-visible=true]]:!p-popover',
						'[&_[data-icon]]:!p-best-friends [&_[data-icon]]:!rounded-[calc(theme(borderRadius.popover)-theme(padding.popover-compact))] [&_[data-icon]]:!ml-px [&_[data-icon]]:!flex [&_[data-icon]]:!size-auto [&_[data-icon]]:!items-center [&_[data-icon]]:!justify-center',
					),
					success:
						'[&_[data-icon]]:!bg-success [&_[data-icon]]:!text-success-contrast !bg-success-background !text-success !border-success/10',
					info: '[&_[data-icon]]:!bg-info [&_[data-icon]]:!text-info-contrast !bg-info-background !text-info !border-info/10',
					warning:
						'[&_[data-icon]]:!bg-warning [&_[data-icon]]:!text-warning-contrast !bg-warning-background !text-warning !border-warning/10',
					error:
						'[&_[data-icon]]:!bg-destructive [&_[data-icon]]:!text-destructive-contrast !bg-destructive-background !text-destructive !border-destructive/10',

					description: '!text-foreground-muted',

					// action buttons
					actionButton:
						'focus-within:!ring-ring focus-within:!ring-[3px] !outline-none !relative !inline-flex !gap-best-friends !items-center !justify-center hover:!scale-[105%] !rounded-base !border !px-[1.5em] !py-[1em] !font-medium !transition-all active:!scale-95 disabled:!pointer-events-none !border-transparent !bg-foreground !text-background hover:!bg-foreground/80 disabled:!bg-foreground/90 disabled:!text-background/60 !text-xs',
					cancelButton:
						'focus-within:!ring-ring focus-within:!ring-[3px] !outline-none !relative !inline-flex !gap-best-friends !items-center !justify-center hover:!scale-[105%] !rounded-base !border !px-[1.5em] !py-[1em] !font-medium !transition-all active:!scale-95 disabled:!pointer-events-none !bg-transparent !text-foreground !border-border hover:!bg-background-inverted/5 disabled:!text-foreground/50 disabled:!border-muted !text-xs',
				},
			}}
			{...props}
		/>
	)
}

export { toast }
