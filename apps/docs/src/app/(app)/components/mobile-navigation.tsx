'use client'

import { Button } from '@nerdfish/react/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@nerdfish/react/popover'
import { cx } from '@nerdfish/utils'
import Link, { type LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { type ReactNode, useState } from 'react'
import { docsNav } from '@/nav'

function MobileLink({
	href,
	onOpenChange,
	className,
	children,
	...props
}: LinkProps & {
	onOpenChange?: (open: boolean) => void
	children: ReactNode
	className?: string
}) {
	const router = useRouter()
	return (
		<Link
			href={href}
			onClick={() => {
				// eslint-disable-next-line @typescript-eslint/no-base-to-string
				router.push(href.toString())
				onOpenChange?.(false)
			}}
			className={cx('text-2xl font-medium', className)}
			{...props}
		>
			{children}
		</Link>
	)
}

export function MobileNav({ className }: { className?: string }) {
	const [open, setOpen] = useState(false)

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						variant="ghost"
						size="xs"
						className={cx(
							'extend-touch-target -ml-3 touch-manipulation lg:hidden',
							className,
						)}
					>
						<div className="relative flex items-center justify-center">
							<div className="relative size-4">
								<span
									className={cx(
										'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
										open ? 'top-[0.4rem] -rotate-45' : 'top-1',
									)}
								/>
								<span
									className={cx(
										'bg-foreground absolute left-0 block h-0.5 w-4 transition-all duration-100',
										open ? 'top-[0.4rem] rotate-45' : 'top-2.5',
									)}
								/>
							</div>
							<span className="sr-only">Toggle Menu</span>
						</div>
						<span className="flex items-center text-base leading-none font-medium">
							Menu
						</span>
					</Button>
				}
			/>
			<PopoverContent
				className="bg-background/90 no-scrollbar z-50 h-(--available-height) w-(--available-width) overflow-y-auto rounded-none border-none! p-0 shadow-none backdrop-blur duration-100"
				align="start"
				side="bottom"
				sideOffset={5}
			>
				<div className="gap-casual px-casual py-casual flex flex-col overflow-auto">
					<div className="gap-friends flex flex-col">
						<div className="text-foreground-muted text-sm font-medium">
							Menu
						</div>
						<div className="best-friends flex flex-col">
							<MobileLink href="/" onOpenChange={setOpen}>
								Home
							</MobileLink>
						</div>
					</div>

					<div className="gap-friends flex flex-col">
						{docsNav.map((item, index) => (
							<div key={index} className="gap-best-friends flex flex-col">
								<div className="text-foreground-muted text-sm font-medium">
									{item.title}
								</div>
								<div className="gap-best-friends flex flex-col">
									{item.links.map(({ title, href }) => (
										<MobileLink
											key={`${href}-${index}`}
											href={href}
											onOpenChange={setOpen}
											className="gap-bff flex items-center"
										>
											{title}
										</MobileLink>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
