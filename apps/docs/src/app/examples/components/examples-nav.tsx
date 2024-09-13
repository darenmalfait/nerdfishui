'use client'

import { ScrollArea, ScrollBar } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
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
				<div className={cx('mb-4 flex items-center', className)} {...props}>
					{examples.map((example, index) => (
						<Link
							href={example.href}
							key={example.href}
							className={cx(
								'hover:text-primary flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors',
								pathname?.startsWith(example.href) ||
									(index === 0 && pathname === '/')
									? 'bg-muted text-primary font-medium'
									: 'text-muted-foreground',
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
			<Icons.ArrowRight className="ml-1 h-4 w-4" />
		</Link>
	)
}
