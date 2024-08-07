'use client'

import { getButtonClassName, H1, Paragraph } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import Link from 'next/link'
import * as React from 'react'

import { Icons } from './icons'

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	heading: string
	text?: string
	github?: string
}

export function DocsPageHeader({
	heading,
	text,
	className,
	children,
	github,
	...props
}: DocsPageHeaderProps) {
	return (
		<>
			<div className={cx('mb-12 space-y-4', className)} {...props}>
				<H1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
					{heading}
				</H1>
				{text ? <Paragraph className="max-w-[95%]">{text}</Paragraph> : null}
				{github ? (
					<Link
						target="_blank"
						href={github}
						className={getButtonClassName({
							className: 'mt-6',
						})}
						rel="noopener noreferrer"
					>
						<Icons.GitHub className="mr-2 size-5" />
						View on GitHub
					</Link>
				) : null}
			</div>

			{children}
		</>
	)
}
