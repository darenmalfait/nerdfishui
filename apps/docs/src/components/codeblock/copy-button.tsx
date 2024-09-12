import { Button, type ButtonProps, Tooltip } from '@nerdfish/ui'
import { cx, useCopyToClipboard } from '@nerdfish/utils'
import React from 'react'
import { Icons } from '../icons'

export function CopyButton({
	code,
	className,
	...props
}: ButtonProps & {
	code: string
}) {
	const { handleCopy, copiedText } = useCopyToClipboard()

	const label = copiedText ? 'Copied' : 'Copy'

	return (
		<Tooltip.Root>
			<Tooltip.Trigger asChild>
				<Button
					size="iconSm"
					{...props}
					className={cx('absolute right-2 top-2', className)}
					variant="ghost"
					aria-label="copy"
					onClick={() => handleCopy(code)}
				>
					{copiedText ? (
						<Icons.Check className="size-4" />
					) : (
						<Icons.Copy className="size-4" />
					)}
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content>{label}</Tooltip.Content>
		</Tooltip.Root>
	)
}
