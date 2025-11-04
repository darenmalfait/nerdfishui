'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@nerdfish/react/avatar'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@nerdfish/react/breadcrumb'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@nerdfish/react/collapsible'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@nerdfish/react/dropdown-menu'
import { Separator } from '@nerdfish/react/separator'
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
} from '@nerdfish/react/sidebar'
import {
	AudioWaveform,
	BadgeCheck,
	Bell,
	BookOpen,
	Bot,
	ChevronRight,
	ChevronsUpDown,
	Command,
	CreditCard,
	Folder,
	Forward,
	Frame,
	GalleryVerticalEnd,
	LogOut,
	Map,
	MoreHorizontal,
	PieChart,
	Plus,
	Settings2,
	Sparkles,
	SquareTerminal,
	Trash2,
} from 'lucide-react'
import * as React from 'react'

export const iframeHeight = '800px'

export const description = 'A sidebar that collapses to icons.'

// This is sample data.
const data = {
	user: {
		name: 'shadcn',
		email: 'm@example.com',
		avatar: '/avatars/shadcn.jpg',
	},
	teams: [
		{
			name: 'Acme Inc',
			logo: GalleryVerticalEnd,
			plan: 'Enterprise',
		},
		{
			name: 'Acme Corp.',
			logo: AudioWaveform,
			plan: 'Startup',
		},
		{
			name: 'Evil Corp.',
			logo: Command,
			plan: 'Free',
		},
	],
	navMain: [
		{
			title: 'Playground',
			url: '#',
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: 'History',
					url: '#',
				},
				{
					title: 'Starred',
					url: '#',
				},
				{
					title: 'Settings',
					url: '#',
				},
			],
		},
		{
			title: 'Models',
			url: '#',
			icon: Bot,
			items: [
				{
					title: 'Genesis',
					url: '#',
				},
				{
					title: 'Explorer',
					url: '#',
				},
				{
					title: 'Quantum',
					url: '#',
				},
			],
		},
		{
			title: 'Documentation',
			url: '#',
			icon: BookOpen,
			items: [
				{
					title: 'Introduction',
					url: '#',
				},
				{
					title: 'Get Started',
					url: '#',
				},
				{
					title: 'Tutorials',
					url: '#',
				},
				{
					title: 'Changelog',
					url: '#',
				},
			],
		},
		{
			title: 'Settings',
			url: '#',
			icon: Settings2,
			items: [
				{
					title: 'General',
					url: '#',
				},
				{
					title: 'Team',
					url: '#',
				},
				{
					title: 'Billing',
					url: '#',
				},
				{
					title: 'Limits',
					url: '#',
				},
			],
		},
	],
	projects: [
		{
			name: 'Design Engineering',
			url: '#',
			icon: Frame,
		},
		{
			name: 'Sales & Marketing',
			url: '#',
			icon: PieChart,
		},
		{
			name: 'Travel',
			url: '#',
			icon: Map,
		},
	],
}

export function SidebarExample() {
	const [activeTeam, setActiveTeam] = React.useState(data.teams[0])

	if (!activeTeam) {
		return null
	}

	return (
		<div className="p-best-friends border-border rounded-base relative h-fit translate-0 transform overflow-hidden overflow-y-auto border [&_*]:!max-h-[500px]">
			<SidebarProvider className="!min-h-[500px]">
				<Sidebar collapsible="icon">
					<SidebarHeader>
						<SidebarMenu>
							<SidebarMenuItem>
								<DropdownMenu>
									<DropdownMenuTrigger
										render={
											<SidebarMenuButton
												size="lg"
												className="data-[state=open]:bg-sidebar-muted data-[state=open]:text-sidebar-muted-contrast"
											>
												<div className="bg-sidebar-secondary text-sidebar-secondary-contrast rounded-compact flex aspect-square size-8 shrink-0 items-center justify-center">
													<activeTeam.logo className="size-4" />
												</div>

												<div className="grid flex-1 text-left text-sm leading-tight">
													<span className="truncate font-semibold">
														{activeTeam.name}
													</span>
													<span className="truncate text-xs">
														{activeTeam.plan}
													</span>
												</div>
												<ChevronsUpDown className="ml-auto" />
											</SidebarMenuButton>
										}
									/>
									<DropdownMenuContent
										className="rounded-compact w-[--radix-dropdown-menu-trigger-width] min-w-56"
										align="start"
										side="right"
										sideOffset={4}
									>
										<DropdownMenuGroup>
											<DropdownMenuLabel className="text-muted-contrast text-xs">
												Teams
											</DropdownMenuLabel>
											{data.teams.map((team, index) => (
												<DropdownMenuItem
													key={team.name}
													onClick={() => setActiveTeam(team)}
													className="gap-best-friends p-2"
												>
													<div className="flex size-6 items-center justify-center rounded-sm border">
														<team.logo className="size-4 shrink-0" />
													</div>
													{team.name}
													<DropdownMenuShortcut>
														⌘{index + 1}
													</DropdownMenuShortcut>
												</DropdownMenuItem>
											))}
										</DropdownMenuGroup>
										<DropdownMenuSeparator />
										<DropdownMenuGroup>
											<DropdownMenuItem className="gap-best-friends p-2">
												<div className="bg-background flex size-6 items-center justify-center rounded-md border">
													<Plus className="text-foreground size-4" />
												</div>
												<div className="font-medium">Add team</div>
											</DropdownMenuItem>
										</DropdownMenuGroup>
									</DropdownMenuContent>
								</DropdownMenu>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarHeader>
					<SidebarContent>
						<SidebarGroup>
							<SidebarGroupLabel>Platform</SidebarGroupLabel>
							<SidebarMenu>
								{data.navMain.map((item) => (
									<Collapsible
										key={item.title}
										render={
											<SidebarMenuItem>
												<CollapsibleTrigger
													render={
														<SidebarMenuButton tooltip={item.title}>
															<item.icon />
															<span>{item.title}</span>
															<ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
														</SidebarMenuButton>
													}
												/>
												<CollapsibleContent>
													<SidebarMenuSub>
														{item.items.map((subItem) => (
															<SidebarMenuSubItem key={subItem.title}>
																<SidebarMenuSubButton
																	render={
																		<a href={subItem.url}>
																			<span>{subItem.title}</span>
																		</a>
																	}
																/>
															</SidebarMenuSubItem>
														))}
													</SidebarMenuSub>
												</CollapsibleContent>
											</SidebarMenuItem>
										}
										defaultOpen={item.isActive}
										className="group/collapsible"
									/>
								))}
							</SidebarMenu>
						</SidebarGroup>
						<SidebarGroup className="group-data-[collapsible=icon]:hidden">
							<SidebarGroupLabel>Projects</SidebarGroupLabel>
							<SidebarMenu>
								{data.projects.map((item) => (
									<SidebarMenuItem key={item.name}>
										<SidebarMenuButton
											tooltip="View Project"
											className="text-sidebar-foreground"
											render={<a href={item.url} />}
										>
											<item.icon />
											<span>{item.name}</span>
										</SidebarMenuButton>
										<DropdownMenu>
											<DropdownMenuTrigger
												render={
													<SidebarMenuAction showOnHover>
														<MoreHorizontal />
														<span className="sr-only">More</span>
													</SidebarMenuAction>
												}
											/>
											<DropdownMenuContent
												className="rounded-compact w-48"
												side="bottom"
												align="end"
											>
												<DropdownMenuGroup>
													<DropdownMenuItem>
														<Folder className="text-muted-contrast" />
														<span>View Project</span>
													</DropdownMenuItem>
													<DropdownMenuItem>
														<Forward className="text-muted-contrast" />
														<span>Share Project</span>
													</DropdownMenuItem>
													<DropdownMenuSeparator />
													<DropdownMenuItem>
														<Trash2 className="text-muted-contrast" />
														<span>Delete Project</span>
													</DropdownMenuItem>
												</DropdownMenuGroup>
											</DropdownMenuContent>
										</DropdownMenu>
									</SidebarMenuItem>
								))}
								<SidebarMenuItem>
									<SidebarMenuButton className="text-sidebar-foreground/70">
										<MoreHorizontal className="text-sidebar-foreground/70" />
										<span>More</span>
									</SidebarMenuButton>
								</SidebarMenuItem>
							</SidebarMenu>
						</SidebarGroup>
					</SidebarContent>
					<SidebarFooter>
						<SidebarMenu>
							<SidebarMenuItem>
								<DropdownMenu>
									<DropdownMenuTrigger
										render={
											<SidebarMenuButton
												size="lg"
												className="data-[state=open]:bg-sidebar-muted data-[state=open]:text-sidebar-muted-contrast"
											>
												<Avatar className="rounded-compact h-8 w-8">
													<AvatarImage
														src={data.user.avatar}
														alt={data.user.name}
													/>
													<AvatarFallback>CN</AvatarFallback>
												</Avatar>
												<div className="grid flex-1 text-left text-sm leading-tight">
													<span className="truncate font-semibold">
														{data.user.name}
													</span>
													<span className="truncate text-xs">
														{data.user.email}
													</span>
												</div>
												<ChevronsUpDown className="ml-auto size-4" />
											</SidebarMenuButton>
										}
									/>
									<DropdownMenuContent
										className="rounded-compact w-[--radix-dropdown-menu-trigger-width] min-w-56"
										side="bottom"
										align="end"
										sideOffset={4}
									>
										<DropdownMenuGroup>
											<DropdownMenuLabel className="p-0 font-normal">
												<div className="gap-best-friends px-bff py-bff flex items-center text-left text-sm">
													<Avatar className="rounded-compact h-8 w-8">
														<AvatarImage
															src={data.user.avatar}
															alt={data.user.name}
														/>
														<AvatarFallback className="rounded-compact">
															CN
														</AvatarFallback>
													</Avatar>
													<div className="grid flex-1 text-left text-sm leading-tight">
														<span className="truncate font-semibold">
															{data.user.name}
														</span>
														<span className="truncate text-xs">
															{data.user.email}
														</span>
													</div>
												</div>
											</DropdownMenuLabel>
											<DropdownMenuSeparator />
											<DropdownMenuGroup>
												<DropdownMenuItem>
													<Sparkles />
													Upgrade to Pro
												</DropdownMenuItem>
											</DropdownMenuGroup>
											<DropdownMenuSeparator />
											<DropdownMenuGroup>
												<DropdownMenuItem>
													<BadgeCheck />
													Account
												</DropdownMenuItem>
												<DropdownMenuItem>
													<CreditCard />
													Billing
												</DropdownMenuItem>
												<DropdownMenuItem>
													<Bell />
													Notifications
												</DropdownMenuItem>
											</DropdownMenuGroup>
											<DropdownMenuSeparator />
											<DropdownMenuItem>
												<LogOut />
												Log out
											</DropdownMenuItem>
										</DropdownMenuGroup>
									</DropdownMenuContent>
								</DropdownMenu>
							</SidebarMenuItem>
						</SidebarMenu>
					</SidebarFooter>
					<SidebarRail />
				</Sidebar>
				<SidebarInset>
					<header className="gap-best-friends flex h-16 shrink-0 items-center transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
						<div className="gap-best-friends flex items-center px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className="hidden md:block">
										<BreadcrumbLink href="#">
											Building Your Application
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>Data Fetching</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
					</header>
					<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
						<div className="grid auto-rows-min gap-4 md:grid-cols-3">
							<div className="bg-background-muted/50 aspect-video rounded-xl" />
							<div className="bg-background-muted/50 aspect-video rounded-xl" />
							<div className="bg-background-muted/50 aspect-video rounded-xl" />
						</div>
						<div className="bg-background-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
					</div>
				</SidebarInset>
			</SidebarProvider>
		</div>
	)
}
