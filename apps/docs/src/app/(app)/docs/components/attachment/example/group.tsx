'use client'

import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentGroup,
	AttachmentMedia,
	AttachmentTitle,
} from '@nerdfish/react/attachment'
import {
	FileCodeIcon,
	FileTextIcon,
	TableIcon,
	XIcon,
	type LucideIcon,
} from 'lucide-react'
import Image from 'next/image'

interface AttachmentItem {
	name: string
	meta: string
	icon?: LucideIcon
	src?: string
}

const items: AttachmentItem[] = [
	{ name: 'briefing-notes.pdf', meta: 'PDF · 1.4 MB', icon: FileTextIcon },
	{
		name: 'workspace.png',
		meta: 'PNG · 820 KB',
		src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80',
	},
	{ name: 'customers.csv', meta: 'CSV · 18 KB', icon: TableIcon },
	{ name: 'renderer.tsx', meta: 'TSX · 12 KB', icon: FileCodeIcon },
]

export function AttachmentGroupExample() {
	return (
		<div className="py-casual mx-auto w-full max-w-sm">
			<AttachmentGroup className="w-full">
				{items.map((item) => {
					const Icon = item.icon

					return (
						<Attachment key={item.name} className="w-64">
							{item.src ? (
								<AttachmentMedia variant="image">
									<Image
										src={item.src}
										alt={item.name}
										width={900}
										height={900}
									/>
								</AttachmentMedia>
							) : Icon ? (
								<AttachmentMedia>
									<Icon />
								</AttachmentMedia>
							) : null}
							<AttachmentContent>
								<AttachmentTitle>{item.name}</AttachmentTitle>
								<AttachmentDescription>{item.meta}</AttachmentDescription>
							</AttachmentContent>
							<AttachmentActions>
								<AttachmentAction aria-label={`Remove ${item.name}`}>
									<XIcon />
								</AttachmentAction>
							</AttachmentActions>
						</Attachment>
					)
				})}
			</AttachmentGroup>
		</div>
	)
}
