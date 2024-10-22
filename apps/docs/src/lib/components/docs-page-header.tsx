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
						className={getButtonClassName({
							className: 'mr-sm',
						})}
						rel="noopener noreferrer"
					>
						<Icons.GitHub className="mr-sm size-5" />
						View on GitHub
					</Link>
				</PageActions>
			) : null}
			{children}
		</PageHeader>
	)
}
