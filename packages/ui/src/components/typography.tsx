'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as React from 'react'

export interface ParagraphProps extends React.ComponentProps<'p'> {
	prose?: boolean
	as?: React.ElementType
}
export function Paragraph({
	className,
	prose = false,
	as: Tag = 'p',
	...props
}: ParagraphProps) {
	return (
		<Tag
			{...props}
			className={cx(
				'mt-md max-w-full leading-7 first:mt-0',
				prose ? 'prose' : 'text-foreground',
				className,
			)}
		/>
	)
}

const DEFAULT_TITLE_SIZE = 'h2'

export const titleVariants = cva('', {
	variants: {
		size: {
			// Keep this the same to the prose styles in base.css (tailwind-config)
			h1: 'scroll-m-20 font-extrabold font-title text-4xl leading-[1.1] lg:text-[6.5vw] 2xl:text-[8.125rem]',
			h2: 'mt-lg scroll-m-20 font-extrabold font-title text-2xl first:mt-0 md:text-3xl lg:text-4xl',
			h3: 'mt-lg scroll-m-20 font-semibold text-xl first:mt-0 md:text-2xl',
			h4: 'mt-lg scroll-m-20 font-semibold text-lg first:mt-0 md:text-xl',
			h5: 'mt-lg font-bold text-base first:mt-0 md:text-lg',
			h6: 'mt-lg font-bold text-base first:mt-0',
		},
		variant: {
			primary: 'text-foreground',
			secondary: 'text-foreground-muted',
			brand: 'text-brand',
		},
	},
	defaultVariants: {
		size: DEFAULT_TITLE_SIZE,
	},
})

export interface TitleProps
	extends React.ComponentProps<'h1'>,
		VariantProps<typeof titleVariants> {
	as?: React.ElementType
}

export function Title({
	className,
	as,
	size,
	variant = 'primary',
	...props
}: TitleProps) {
	const Tag = as ?? size ?? DEFAULT_TITLE_SIZE

	return (
		<Tag
			{...props}
			className={cx(
				titleVariants({
					size,
					variant,
				}),
				variant === 'brand',
				className,
			)}
		>
			{props.children}
		</Tag>
	)
}

export function H1({ className, ...props }: Omit<TitleProps, 'size'>) {
	return <Title {...props} className={cx('relative', className)} size="h1" />
}

export function H2({ className, ...props }: Omit<TitleProps, 'size'>) {
	return <Title {...props} className={cx('relative', className)} size="h2" />
}

export function H3({ className, ...props }: Omit<TitleProps, 'size'>) {
	return <Title {...props} size="h3" />
}

export function H4({ className, ...props }: Omit<TitleProps, 'size'>) {
	return <Title {...props} size="h4" />
}

export function H5({ className, ...props }: Omit<TitleProps, 'size'>) {
	return <Title {...props} size="h5" />
}

export function H6({ className, ...props }: Omit<TitleProps, 'size'>) {
	return <Title {...props} size="h6" />
}
