'use client'

import { buttonVariants } from '@nerdfish/react/button'
import Link from 'next/link'
import { type HTMLAttributes } from 'react'
import { Icons } from '@/lib/components/icons'
import {
	PageActions,
	PageHeader,
	PageHeaderDescription,
	PageHeaderHeading,
} from '@/lib/components/page-header'

interface DocsPageHeaderProps extends HTMLAttributes<HTMLDivElement> {
	title?: string
	description?: string
	githubPath?: {
		package: string
		path: string
	}
}

export function DocsPageHeader({
	title,
	description,
	className,
	children,
	githubPath,
	...props
}: DocsPageHeaderProps) {
	return (
		<PageHeader className={className} {...props}>
			{title ? <PageHeaderHeading>{title}</PageHeaderHeading> : null}
			{description ? (
				<PageHeaderDescription className="max-w-[95%]">
					{description}
				</PageHeaderDescription>
			) : null}
			{githubPath ? (
				<PageActions>
					<Link
						target="_blank"
						href={`https://github.com/darenmalfait/nerdfishui/tree/main/packages/${githubPath.package}/src/${githubPath.path}`}
						className={buttonVariants({
							className: 'mr-best-friends',
						})}
						rel="noopener noreferrer"
					>
						<Icons.GitHub className="mr-best-friends size-4" />
						View on GitHub
					</Link>
				</PageActions>
			) : null}
			{children}
		</PageHeader>
	)
}
