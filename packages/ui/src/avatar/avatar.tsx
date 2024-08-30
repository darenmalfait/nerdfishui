'use client'

import { cx } from '@nerdfish/utils'
import * as AvatarPrimitive from '@radix-ui/react-avatar'
import * as React from 'react'

export const AvatarRoot = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Root
		ref={ref}
		className={cx(
			'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
			className,
		)}
		{...props}
	/>
))
AvatarRoot.displayName = AvatarPrimitive.Root.displayName

export const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Image
		ref={ref}
		className={cx('aspect-square h-full w-full', className)}
		{...props}
	/>
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

export const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
	<AvatarPrimitive.Fallback
		ref={ref}
		className={cx(
			'bg-muted flex h-full w-full items-center justify-center rounded-full',
			className,
		)}
		{...props}
	/>
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export type AvatarRootProps = React.ComponentPropsWithoutRef<typeof AvatarRoot>
export type AvatarImageProps = React.ComponentPropsWithoutRef<
	typeof AvatarImage
>
export type AvatarFallbackProps = React.ComponentPropsWithoutRef<
	typeof AvatarFallback
>
