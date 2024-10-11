'use client'

import { cva, cx, type VariantProps } from '@nerdfish/utils'
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
				'mt-6 max-w-full leading-7 first:mt-0',
				prose ? 'prose prose-light dark:prose-invert' : 'text-primary',
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
			// Keep this the same to the prose styles in styles.css
			h1: 'font-title scroll-m-20 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]',
			h2: 'font-title mt-10 scroll-m-20 text-3xl font-extrabold tracking-tight first:mt-0 lg:text-4xl',
			h3: 'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight first:mt-0',
			h4: 'mt-8 scroll-m-20 text-xl font-semibold tracking-tight first:mt-0',
			h5: 'mt-8 text-lg font-bold first:mt-0 md:text-xl',
			h6: 'mt-8 text-lg font-bold first:mt-0',
		},
		variant: {
			primary: 'text-primary',
			secondary: 'text-muted',
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
			blurredClassName?: string
		}
>(function Title(
	{
		className,
		as,
		size,
		blurredClassName,
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
			{size === 'h1' || size === 'h2' ? (
				<div
					className={cx(
						'-z-1 absolute -left-8 h-12 w-32 rounded-full opacity-50 blur-3xl',
						{
							'bg-accent': variant === 'accent' && !blurredClassName,
							'bg-inverted': variant === 'primary' && !blurredClassName,
							'bg-inverted/80': variant === 'secondary' && !blurredClassName,
							blurredClassName,
						},
					)}
				/>
			) : null}
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
