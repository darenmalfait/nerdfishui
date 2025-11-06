'use client'

import { Badge } from '@nerdfish/react/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@nerdfish/react/tabs'
import { Bell, ShieldCheck, UserRound } from 'lucide-react'

export function TabsVerticalExample() {
	return (
		<Tabs
			defaultValue="profile"
			orientation="vertical"
			className="text-foreground-muted border-border flex w-full flex-col justify-stretch gap-4 rounded-lg border p-4 text-sm lg:w-[500px] lg:flex-row"
		>
			<div className="lg:w-[175px] lg:shrink-0">
				<TabsList
					variant="button"
					className="!gap-bff flex flex-col items-stretch *:justify-start"
				>
					<TabsTrigger value="profile">
						<UserRound /> Profile
					</TabsTrigger>
					<TabsTrigger value="security">
						<ShieldCheck /> Security
					</TabsTrigger>
					<TabsTrigger value="notifications">
						<Bell /> Notifications
						<Badge variant="destructive">5</Badge>
					</TabsTrigger>
				</TabsList>
			</div>

			<div className="border-border ms-4 grow border-s py-0 ps-4">
				<TabsContent value="profile" className="!mt-2">
					Content for Profile
				</TabsContent>
				<TabsContent value="security" className="!mt-2">
					Content for Security
				</TabsContent>
				<TabsContent value="notifications" className="!mt-2">
					Content for Notifications
				</TabsContent>
			</div>
		</Tabs>
	)
}
