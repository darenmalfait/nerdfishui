'use client'

import { type VariantProps, cva, cx } from '@nerdfish/utils'
import * as React from 'react'

export const Paragraph = React.forwardRef<
	HTMLParagraphElement,
	React.ComponentPropsWithRef<'p'> & {
		prose?: boolean
		as?: React.ElementType
	}
>(function Paragraph(
	{ className, prose = false, as: Tag = 'p', ...props },
	ref,
) {
	return (
		<Tag
			{...props}
			ref={ref}
			className={cx(
				'mt-md max-w-full leading-7 first:mt-0',
				prose ? 'prose prose-light dark:prose-invert' : 'text-foreground',
				className,
			)}
		/>
	)
})
Paragraph.displayName = 'Paragraph'

export type ParagraphProps = React.ComponentPropsWithRef<typeof Paragraph>

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
			accent: 'text-accent',
		},
	},
	defaultVariants: {
		size: DEFAULT_TITLE_SIZE,
	},
})

const Title = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h1'> &
		VariantProps<typeof titleVariants> & {
			as?: React.ElementType
		}
>(function Title(
	{
		className,
		as,
		size,
		variant = size === 'h1' || size === 'h2' ? 'accent' : 'primary',
		...props
	},
	ref,
) {
	const Tag = as ?? size ?? DEFAULT_TITLE_SIZE

	return (
		<Tag
			{...props}
			ref={ref}
			className={cx(
				titleVariants({
					size,
					variant,
				}),
				variant === 'accent',
				className,
			)}
		>
			{props.children}
		</Tag>
	)
})

export type TitleProps = React.ComponentPropsWithRef<typeof Title>

export const H1 = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h1'> & TitleProps
>(function H1(props, ref) {
	return (
		<Title
			{...props}
			className={cx('relative', props.className)}
			size="h1"
			ref={ref}
		>
			{props.children}
		</Title>
	)
})

export const H2 = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h2'> & TitleProps
>(function H2(props, ref) {
	return (
		<Title
			{...props}
			className={cx('relative', props.className)}
			size="h2"
			ref={ref}
		>
			{props.children}
		</Title>
	)
})

export const H3 = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h3'> & TitleProps
>(function H3(props, ref) {
	return <Title {...props} size="h3" ref={ref} />
})

export const H4 = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h3'> & TitleProps
>(function H4(props, ref) {
	return <Title {...props} size="h4" ref={ref} />
})

export const H5 = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h5'> & TitleProps
>(function H5(props, ref) {
	return <Title {...props} size="h5" ref={ref} />
})

export const H6 = React.forwardRef<
	HTMLHeadingElement,
	React.ComponentPropsWithRef<'h6'> & TitleProps
>(function H6(props, ref) {
	return <Title {...props} size="h6" ref={ref} />
})
