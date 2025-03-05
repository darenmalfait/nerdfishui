'use client'

import { ScrollArea, ScrollBar } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type * as React from 'react'
import { Icons } from '~/app/components/icons'

const examples = [
	{
		name: 'Base',
		href: '/examples/base',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/base',
	},
	{
		name: 'Forms',
		href: '/examples/forms',
		code: 'https://github.com/shadcn/ui/tree/main/apps/www/app/(app)/examples/forms',
	},
]

type ExamplesNavProps = React.HTMLAttributes<HTMLDivElement>

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
	const pathname = usePathname()

	return (
		<div className="relative">
			<ScrollArea className="max-w-[600px] lg:max-w-none">
				<div
					className={cx('mb-md flex items-center border-b', className)}
					{...props}
				>
					{examples.map((example, index) => (
						<Link
							href={example.href}
							key={example.href}
							className={cx(
								'hover:text-foreground flex h-7 items-center justify-center border-b-2 border-transparent px-4 text-center text-sm transition-colors',
								pathname.startsWith(example.href) ||
									(index === 0 && pathname === '/')
									? 'text-foreground border-black font-medium dark:border-white'
									: 'text-foreground-muted',
							)}
						>
							{example.name}
						</Link>
					))}
				</div>
				<ScrollBar orientation="horizontal" className="invisible" />
			</ScrollArea>
		</div>
	)
}

interface ExampleCodeLinkProps {
	pathname: string | null
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
	const example = examples.find((ex) => pathname?.startsWith(ex.href))

	if (!example?.code) {
		return null
	}

	return (
		<Link
			href={example.code}
			target="_blank"
			rel="nofollow"
			className="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
		>
			View code
			<Icons.ArrowRight className="ml-sm size-4" />
		</Link>
	)
}
