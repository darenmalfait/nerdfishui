'use client'

import {
	Attachment,
	AttachmentAction,
	AttachmentActions,
	AttachmentContent,
	AttachmentDescription,
	AttachmentMedia,
	AttachmentTitle,
	AttachmentTrigger,
} from '@nerdfish/react/attachment'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@nerdfish/react/dialog'
import { CopyIcon, FileSearchIcon, XIcon } from 'lucide-react'

export function AttachmentTriggerExample() {
	return (
		<div className="py-casual mx-auto w-full max-w-sm">
			<Dialog>
				<Attachment className="w-full">
					<AttachmentMedia>
						<FileSearchIcon />
					</AttachmentMedia>
					<AttachmentContent>
						<AttachmentTitle>research-summary.pdf</AttachmentTitle>
						<AttachmentDescription>Open preview dialog</AttachmentDescription>
					</AttachmentContent>
					<AttachmentActions>
						<AttachmentAction aria-label="Copy link">
							<CopyIcon />
						</AttachmentAction>
						<AttachmentAction aria-label="Remove research-summary.pdf">
							<XIcon />
						</AttachmentAction>
					</AttachmentActions>
					<DialogTrigger
						render={
							<AttachmentTrigger aria-label="Preview research-summary.pdf" />
						}
					/>
				</Attachment>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>research-summary.pdf</DialogTitle>
						<DialogDescription>
							The attachment trigger fills the card and opens the dialog, while
							the actions stay independently clickable above it.
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	)
}
