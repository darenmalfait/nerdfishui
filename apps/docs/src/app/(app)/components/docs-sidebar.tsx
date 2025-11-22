'use client'

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@nerdfish/react/sidebar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo, type ComponentProps } from 'react'
import { StatusBadge } from './status-badge'
import { blocksNav, docsNav } from '@/nav'

export function DocsSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	const pathname = usePathname()

	const nav = useMemo(() => {
		if (pathname.includes('/docs/blocks/')) {
			return blocksNav
		}

		if (pathname.includes('/docs/')) {
			return docsNav
		}

		return []
	}, [pathname])

	return (
		<Sidebar
			className="sticky top-[calc(var(--header-height)+1px)] z-0 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
			collapsible="none"
			{...props}
		>
			<SidebarContent className="no-scrollbar px-best-friends overflow-x-hidden">
				<div className="from-background via-background/80 to-background/50 sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b blur-xs" />

				{nav.map((item) => (
					<SidebarGroup key={item.title}>
						<SidebarGroupLabel>{item.title}</SidebarGroupLabel>
						<SidebarGroupContent>
							<SidebarMenu>
								{item.links.map(({ title, href, status }) => (
									<SidebarMenuItem key={title} className="w-fit">
										<SidebarMenuButton
											render={
												<Link
													className="inline-flex w-fit items-center"
													href={href}
												>
													<span>{title}</span>
													<StatusBadge status={status} />
												</Link>
											}
											isActive={href === pathname}
										/>
									</SidebarMenuItem>
								))}
							</SidebarMenu>
						</SidebarGroupContent>
					</SidebarGroup>
				))}
				<div className="from-background via-background/80 to-background/50 sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
			</SidebarContent>
		</Sidebar>
	)
}
