'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export const Link = React.forwardRef<
	HTMLElement,
	React.DetailedHTMLProps<
		React.AnchorHTMLAttributes<HTMLAnchorElement>,
		HTMLAnchorElement
	> & {
		disabled?: boolean
		external?: boolean
		as?: React.ElementType
		onClick?: React.MouseEventHandler<HTMLAnchorElement>
		to?: string
		children?: React.ReactNode
	}
>(function Link(props, ref) {
	const {
		disabled,
		external,
		onClick,
		to,
		href = to,
		className,
		as: Tag = 'a',
		...rest
	} = props
	const externalProps = external
		? { target: '_blank', rel: 'noopener noreferrer' }
		: null

	return (
		<Tag
			ref={ref}
			className={cx(
				'focus-outline space-x-sm text-foreground relative inline-flex bg-transparent outline-none hover:bg-transparent dark:hover:bg-transparent',
				className,
			)}
			tabIndex={disabled ? -1 : undefined}
			to={href}
			href={href}
			aria-disabled={disabled}
			onClick={disabled ? (event: any) => event.preventDefault() : onClick}
			{...externalProps}
			{...rest}
		/>
	)
})

export type LinkProps = React.ComponentPropsWithoutRef<typeof Link>
