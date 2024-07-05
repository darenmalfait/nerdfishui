'use client'

import { Command } from '@nerdfish/ui'
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from 'lucide-react'

export function CommandDemo() {
	return (
		<Command className="shadow-soft-sm shadow-outline rounded-lg border">
			<Command.Input placeholder="Type a command or search..." />
			<Command.Empty>No results found.</Command.Empty>
			<Command.List>
				<Command.Group heading="Suggestions">
					<Command.Item>
						<Calendar className="mr-2 size-4" />
						<span>Calendar</span>
					</Command.Item>
					<Command.Item>
						<Smile className="mr-2 size-4" />
						<span>Search Emoji</span>
					</Command.Item>
					<Command.Item>
						<Calculator className="mr-2 size-4" />
						<span>Calculator</span>
					</Command.Item>
				</Command.Group>
				<Command.Separator />
				<Command.Group heading="Settings">
					<Command.Item>
						<User className="mr-2 size-4" />
						<span>Profile</span>
						<Command.Shortcut>⌘P</Command.Shortcut>
					</Command.Item>
					<Command.Item>
						<CreditCard className="mr-2 size-4" />
						<span>Billing</span>
						<Command.Shortcut>⌘B</Command.Shortcut>
					</Command.Item>
					<Command.Item>
						<Settings className="mr-2 size-4" />
						<span>Settings</span>
						<Command.Shortcut>⌘S</Command.Shortcut>
					</Command.Item>
				</Command.Group>
			</Command.List>
		</Command>
	)
}
