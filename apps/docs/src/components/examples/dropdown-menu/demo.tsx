'use client'

import { Button, DropdownMenu } from '@nerdfish/ui'
import {
	Cloud,
	CreditCard,
	Github,
	Keyboard,
	LifeBuoy,
	LogOut,
	Mail,
	MessageSquare,
	Plus,
	PlusCircle,
	Settings,
	User,
	UserPlus,
	Users,
} from 'lucide-react'

export function DropdownMenuDemo() {
	return (
		<DropdownMenu>
			<DropdownMenu.Trigger asChild>
				<Button variant="outline">Open</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content className="w-56">
				<DropdownMenu.Label>Cake Shop</DropdownMenu.Label>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<User className="mr-2 size-4" />
						<span>Our Story</span>
						<DropdownMenu.Shortcut>⇧⌘O</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<CreditCard className="mr-2 size-4" />
						<span>Cakes Menu</span>
						<DropdownMenu.Shortcut>⌘C</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Settings className="mr-2 size-4" />
						<span>Order Online</span>
						<DropdownMenu.Shortcut>⌘O</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
					<DropdownMenu.Item>
						<Keyboard className="mr-2 size-4" />
						<span>Specials</span>
						<DropdownMenu.Shortcut>⌘S</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Group>
					<DropdownMenu.Item>
						<Users className="mr-2 size-4" />
						<span>Our Team</span>
					</DropdownMenu.Item>
					<DropdownMenu.Sub>
						<DropdownMenu.SubTrigger>
							<UserPlus className="mr-2 size-4" />
							<span>Join Us</span>
						</DropdownMenu.SubTrigger>
						<DropdownMenu.Portal>
							<DropdownMenu.SubContent>
								<DropdownMenu.Item>
									<Mail className="mr-2 size-4" />
									<span>Email Us</span>
								</DropdownMenu.Item>
								<DropdownMenu.Item>
									<MessageSquare className="mr-2 size-4" />
									<span>Message Us</span>
								</DropdownMenu.Item>
								<DropdownMenu.Separator />
								<DropdownMenu.Item>
									<PlusCircle className="mr-2 size-4" />
									<span>More...</span>
								</DropdownMenu.Item>
							</DropdownMenu.SubContent>
						</DropdownMenu.Portal>
					</DropdownMenu.Sub>
					<DropdownMenu.Item>
						<Plus className="mr-2 size-4" />
						<span>New Recipe</span>
						<DropdownMenu.Shortcut>⌘+R</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</DropdownMenu.Group>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<Github className="mr-2 size-4" />
					<span>GitHub</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item>
					<LifeBuoy className="mr-2 size-4" />
					<span>Contact Us</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item disabled>
					<Cloud className="mr-2 size-4" />
					<span>API</span>
				</DropdownMenu.Item>
				<DropdownMenu.Separator />
				<DropdownMenu.Item>
					<LogOut className="mr-2 size-4" />
					<span>Log out</span>
					<DropdownMenu.Shortcut>⇧⌘Q</DropdownMenu.Shortcut>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu>
	)
}
