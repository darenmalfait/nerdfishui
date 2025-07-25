'use client'

import type * as React from 'react'
import { Toaster as Sonner, toast } from 'sonner'
import { getButtonClassName } from './button'

export type ToasterProps = React.ComponentProps<typeof Sonner>

export function Toaster(props: ToasterProps) {
	return (
		<Sonner
			className="toaster group"
			richColors
			toastOptions={{
				classNames: {
					error:
						'!bg-background-danger !text-foreground-danger-contrast !ring-foreground-danger',
					info: '!bg-background-info !text-foreground-info-contrast !ring-foreground-info',
					warning:
						'!bg-background-warning !text-foreground-warning-contrast !ring-foreground-warning',
					success:
						'!bg-background-success !text-foreground-success-contrast !ring-foreground-success',
					toast:
						'!rounded-base !border-transparent p-md gap-md toast group-[.toaster]:bg-background-muted group-[.toaster]:text-foreground group-[.toaster]:shadow-outline group group-[.toaster]:border-none group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-foreground-muted',
					actionButton: getButtonClassName({
						variant: 'default',
						size: 'default',
					}),
					cancelButton: getButtonClassName({
						variant: 'outline',
						size: 'default',
					}),
				},
			}}
			{...props}
		/>
	)
}

export { toast }
