'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'

export interface LinkProps extends React.ComponentProps<'a'> {
	disabled?: boolean
	external?: boolean
	as?: React.ElementType
	onClick?: React.MouseEventHandler<HTMLAnchorElement>
	to?: string
	children?: React.ReactNode
}

export function Link(props: LinkProps) {
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
}
