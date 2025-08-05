'use client'

import {
	Breadcrumb,
	BreadcrumbLink,
	BreadcrumbItem,
	BreadcrumbSeparator,
	BreadcrumbEllipsis,
	BreadcrumbList,
	BreadcrumbPage,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@nerdfish/ui'

export function BreadcrumbExample() {
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<DropdownMenu>
						<DropdownMenuTrigger className="gap-sm flex items-center">
							<BreadcrumbEllipsis className="size-4" />
							<span className="sr-only">Toggle menu</span>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="start">
							<DropdownMenuItem>Documentation</DropdownMenuItem>
							<DropdownMenuItem>Themes</DropdownMenuItem>
							<DropdownMenuItem>GitHub</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbLink href="/docs/components/breadcrumb">
						Components
					</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<BreadcrumbPage>Breadcrumb</BreadcrumbPage>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}
