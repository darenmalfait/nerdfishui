'use client'

import { Avatar as AvatarPrimitive } from '@base-ui-components/react/avatar'
import { cx } from '@nerdfish/utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const avatarVariants = cva(
	'relative flex shrink-0 overflow-hidden rounded-full',
	{
		variants: {
			size: {
				sm: 'size-8 text-sm',
				md: 'size-10',
				lg: 'size-12 text-lg',
			},
		},
		defaultVariants: {
			size: 'md',
		},
	},
)

export interface AvatarProps
	extends AvatarPrimitive.Root.Props,
		VariantProps<typeof avatarVariants> {}
export function Avatar({ className, size, ...props }: AvatarProps) {
	return (
		<AvatarPrimitive.Root
			data-slot="avatar"
			className={cx(avatarVariants({ size }), className)}
			{...props}
		/>
	)
}

export type AvatarImageProps = AvatarPrimitive.Image.Props
export function AvatarImage({ className, ...props }: AvatarImageProps) {
	return (
		<AvatarPrimitive.Image
			data-slot="avatar-image"
			className={cx('size-full object-cover', className)}
			{...props}
		/>
	)
}

export type AvatarFallbackProps = AvatarPrimitive.Fallback.Props
export function AvatarFallback({ className, ...props }: AvatarFallbackProps) {
	return (
		<AvatarPrimitive.Fallback
			data-slot="avatar-fallback"
			className={cx(
				'bg-muted flex size-full select-none items-center justify-center rounded-full',
				className,
			)}
			{...props}
		/>
	)
}
