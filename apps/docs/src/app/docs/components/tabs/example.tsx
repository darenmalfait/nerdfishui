'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@nerdfish/ui'

export function TabsExample() {
	return (
		<Tabs defaultValue="general" className="w-[400px]">
			<TabsList>
				<TabsTrigger value="general">General</TabsTrigger>
				<TabsTrigger value="privacy">Privacy</TabsTrigger>
			</TabsList>
			<TabsContent value="general">
				<p className="text-primary text-sm">General settings tab</p>
			</TabsContent>
			<TabsContent value="privacy">
				<p className="text-primary text-sm">Privacy settings tab</p>
			</TabsContent>
		</Tabs>
	)
}