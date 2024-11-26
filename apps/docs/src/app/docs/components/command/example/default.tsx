'use client'

import {
	Command,
	CommandInput,
	CommandEmpty,
	CommandList,
	CommandGroup,
	CommandItem,
	CommandSeparator,
	CommandShortcut,
} from '@nerdfish/ui'
import {
	Calculator,
	Calendar,
	CreditCard,
	Settings,
	Smile,
	User,
} from 'lucide-react'

export function CommandExample() {
	return (
		<Command className="shadow-soft-sm shadow-outline rounded-container border">
			<div className="border-primary border-b">
				<CommandInput
					placeholder="Type a command or search..."
					className="rounded-container bg-transparent"
				/>
			</div>

			<CommandEmpty>No results found.</CommandEmpty>
			<CommandList>
				<CommandGroup heading="Suggestions">
					<CommandItem>
						<Calendar className="mr-sm size-4" />
						<span>Calendar</span>
					</CommandItem>
					<CommandItem>
						<Smile className="mr-sm size-4" />
						<span>Search Emoji</span>
					</CommandItem>
					<CommandItem>
						<Calculator className="mr-sm size-4" />
						<span>Calculator</span>
					</CommandItem>
				</CommandGroup>
				<CommandSeparator />
				<CommandGroup heading="Settings">
					<CommandItem>
						<User className="mr-sm size-4" />
						<span>Profile</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<CreditCard className="mr-sm size-4" />
						<span>Billing</span>
						<CommandShortcut>⌘B</CommandShortcut>
					</CommandItem>
					<CommandItem>
						<Settings className="mr-sm size-4" />
						<span>Settings</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>
				</CommandGroup>
			</CommandList>
		</Command>
	)
}
