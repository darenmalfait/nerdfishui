'use client'

import { Badge } from '@nerdfish/react/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@nerdfish/react/tabs'
import { Bell, UserRound } from 'lucide-react'

export function TabsVariantsExample() {
	return (
		<div className="gap-casual flex flex-col">
			<Tabs
				defaultValue="profile"
				className="text-muted-foreground w-[375px] text-sm"
			>
				<TabsList variant="default" className="grid w-full grid-cols-2">
					<TabsTrigger value="profile">
						<UserRound /> Profile
					</TabsTrigger>
					<TabsTrigger value="notifications">
						<Bell />
						Notifications
						<Badge variant="destructive" className="rounded-full">
							5
						</Badge>
					</TabsTrigger>
				</TabsList>
				<TabsContent value="profile">Content for Profile</TabsContent>
				<TabsContent value="notifications">
					Content for Notifications
				</TabsContent>
			</Tabs>
			<Tabs
				defaultValue="profile"
				className="text-muted-foreground w-[375px] text-sm"
			>
				<TabsList variant="button" className="grid w-full grid-cols-2">
					<TabsTrigger value="profile">
						<UserRound /> Profile
					</TabsTrigger>
					<TabsTrigger value="notifications">
						<Bell />
						Notifications
						<Badge variant="destructive" className="rounded-full">
							5
						</Badge>
					</TabsTrigger>
				</TabsList>
				<TabsContent value="profile">Content for Profile</TabsContent>
				<TabsContent value="notifications">
					Content for Notifications
				</TabsContent>
			</Tabs>
			<Tabs
				defaultValue="profile"
				className="text-muted-foreground w-[375px] text-sm"
			>
				<TabsList variant="line" className="grid w-full grid-cols-2">
					<TabsTrigger value="profile">
						<UserRound /> Profile
					</TabsTrigger>
					<TabsTrigger value="notifications">
						<Bell />
						Notifications
						<Badge variant="destructive" className="rounded-full">
							5
						</Badge>
					</TabsTrigger>
				</TabsList>
				<TabsContent value="profile">Content for Profile</TabsContent>
				<TabsContent value="notifications">
					Content for Notifications
				</TabsContent>
			</Tabs>
		</div>
	)
}
