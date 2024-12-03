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
					toast:
						'group p-md gap-md toast group-[.toaster]:bg-muted group-[.toaster]:text-primary group-[.toaster]:shadow-outline group-[.toaster]:border-none group-[.toaster]:shadow-lg',
					description: 'group-[.toast]:text-muted',
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
