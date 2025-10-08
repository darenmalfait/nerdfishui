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
import { type ComponentProps } from 'react'
import { StatusBadge } from './status-badge'
import { docsNav } from '@/nav'

export function DocsSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
	const pathname = usePathname()

	return (
		<Sidebar
			className="sticky top-[calc(var(--header-height)+1px)] z-0 hidden h-[calc(100svh-var(--footer-height)+2rem)] bg-transparent lg:flex"
			collapsible="none"
			{...props}
		>
			<SidebarContent className="no-scrollbar px-best-friends pb-acquaintances overflow-x-hidden">
				<div className="h-(--top-spacing) shrink-0" />
				{docsNav.map((item) => (
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
			</SidebarContent>
		</Sidebar>
	)
}
