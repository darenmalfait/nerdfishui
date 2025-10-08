'use client'

import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar'
import { cx } from '@nerdfish/utils'
import { type ComponentProps } from 'react'

export type AvatarProps = ComponentProps<typeof AvatarPrimitive.Root>
export function Avatar({ className, ...props }: AvatarProps) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cx(
				'border-border relative flex size-10 shrink-0 overflow-hidden rounded-full border',
				className,
			)}
			{...props}
		/>
	)
}

export type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>
export function AvatarImage({ className, ...props }: AvatarImageProps) {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cx('aspect-square size-full', className)}
			{...props}
		/>
	)
}

export type AvatarFallbackProps = ComponentProps<
	typeof AvatarPrimitive.Fallback
>
export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cx(
				'bg-background-muted flex size-full items-center justify-center',
				className,
			)}
			{...props}
		/>
	)
}
