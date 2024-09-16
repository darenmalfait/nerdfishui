'use client'

import { getButtonClassName } from '@nerdfish/ui'
import Link from 'next/link'
import * as React from 'react'
import { Icons } from '~/app/components/icons'
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from '~/app/components/page-header'

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
		<PageHeader className={className} {...props}>
			<PageHeaderHeading>{heading}</PageHeaderHeading>
			{text ? (
				<PageHeaderDescription className="max-w-[95%]">
					{text}
				</PageHeaderDescription>
			) : null}
			<PageActions>
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
			</PageActions>
			{children}
		</PageHeader>
	)
}
