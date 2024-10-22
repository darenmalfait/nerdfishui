'use client'

import {
	CommandDialog,
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
import * as React from 'react'

export function CommandDialogExample() {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'j' && e.metaKey) {
				setOpen((o) => !o)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<>
			<p className="text-muted text-sm">
				Press{' '}
				<kbd className="bg-muted text-muted shadow-outline gap-sm pointer-events-none inline-flex h-5 select-none items-center rounded border px-1.5 font-mono text-[10px] font-medium opacity-100">
					<span className="text-xs">⌘</span>J
				</kbd>
			</p>
			<CommandDialog open={open} onOpenChange={setOpen}>
				<CommandInput placeholder="Type a command or search..." />
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
			</CommandDialog>
		</>
	)
}
