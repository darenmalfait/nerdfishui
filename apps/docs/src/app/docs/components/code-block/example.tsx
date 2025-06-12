'use client'

import {
	CodeBlock,
	CodeBlockGroup,
	Button,
	CodeBlockCode,
	useCopyToClipboard,
} from '@nerdfish/ui'
import { CheckIcon, CopyIcon } from 'lucide-react'
import * as React from 'react'

export function CodeBlockExample() {
	const { handleCopy, copiedText } = useCopyToClipboard()

	const code = `function calculateTotal(items) {
  return items
    .filter(item => item.price > 0)
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
}`

	return (
		<div className="w-full max-w-[450px]">
			<CodeBlock>
				<CodeBlockGroup className="border-muted/10 p-sm bg-secondary/10 border-b">
					<div className="flex items-center gap-2">
						<div className="bg-foreground/10 text-primary px-sm py-xs rounded-[calc(theme(borderRadius.base)-theme(padding.sm))] text-xs font-medium">
							JavaScript
						</div>
						<span className="text-foreground-muted text-sm">CSS Variables</span>
					</div>
					<Button
						variant="ghost"
						icon
						className="h-8 w-8"
						onClick={() => void handleCopy(code)}
					>
						{copiedText ? (
							<CheckIcon className="text-success-foreground h-4 w-4" />
						) : (
							<CopyIcon className="h-4 w-4" />
						)}
					</Button>
				</CodeBlockGroup>
				<CodeBlockCode code={code} language="javascript" />
			</CodeBlock>
		</div>
	)
}
