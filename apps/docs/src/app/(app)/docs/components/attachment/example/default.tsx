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
import { Spinner } from '@nerdfish/react/spinner'
import { FileCodeIcon, XIcon } from 'lucide-react'
import Image from 'next/image'

const images = [
	{
		name: 'workspace.png',
		meta: 'PNG · 820 KB',
		src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&auto=format&fit=crop&q=80',
		alt: 'Workspace',
	},
	{
		name: 'desk-reference.jpg',
		meta: 'JPG · 1.1 MB',
		src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&auto=format&fit=crop&q=80',
		alt: 'Desk',
	},
	{
		name: 'office-reference.jpg',
		meta: 'JPG · 940 KB',
		src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&auto=format&fit=crop&q=80',
		alt: 'Office',
	},
]

export function AttachmentExample() {
	return (
		<div className="gap-friends py-casual mx-auto flex w-full max-w-sm flex-col">
			<AttachmentGroup>
				{images.map((image) => (
					<Attachment key={image.name} orientation="vertical">
						<AttachmentMedia variant="image">
							<Image src={image.src} alt={image.alt} width={900} height={900} />
						</AttachmentMedia>
						<AttachmentContent>
							<AttachmentTitle>{image.name}</AttachmentTitle>
							<AttachmentDescription>{image.meta}</AttachmentDescription>
						</AttachmentContent>
					</Attachment>
				))}
			</AttachmentGroup>
			<Attachment state="uploading" className="w-full">
				<AttachmentMedia>
					<Spinner />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>sales-dashboard.pdf</AttachmentTitle>
					<AttachmentDescription>Uploading · 64%</AttachmentDescription>
				</AttachmentContent>
				<AttachmentActions>
					<AttachmentAction aria-label="Cancel upload">
						<XIcon />
					</AttachmentAction>
				</AttachmentActions>
			</Attachment>
			<Attachment className="w-full">
				<AttachmentMedia>
					<FileCodeIcon />
				</AttachmentMedia>
				<AttachmentContent>
					<AttachmentTitle>message-renderer.tsx</AttachmentTitle>
					<AttachmentDescription>TypeScript · 12 KB</AttachmentDescription>
				</AttachmentContent>
				<AttachmentActions>
					<AttachmentAction aria-label="Remove message-renderer.tsx">
						<XIcon />
					</AttachmentAction>
				</AttachmentActions>
			</Attachment>
		</div>
	)
}
