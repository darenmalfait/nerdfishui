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
					error: '!bg-danger-accent !text-white !ring-danger',
					info: '!bg-info-accent !text-white !ring-info',
					warning: '!bg-warning-accent !text-white !ring-warning',
					success: '!bg-success-accent !text-white !ring-success',
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
