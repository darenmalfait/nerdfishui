import {
	Button,
	type ButtonProps,
	DropdownMenu,
	Tooltip,
	TooltipProvider,
} from '@nerdfish/ui'
import { cx, useCopyToClipboard } from '@nerdfish/utils'
import React from 'react'
import { Icons } from './icons'
import { type NpmCommands } from '~/lib/types/unist'

const COPY_TIMOUT = 3000

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
		<TooltipProvider>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>
					<Button
						size="iconSm"
						{...props}
						className={cx('absolute right-2 top-2', className)}
						variant={copiedText ? 'success' : 'ghost'}
						aria-label="copy"
						onClick={() => handleCopy(code, COPY_TIMOUT)}
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
		</TooltipProvider>
	)
}

interface CopyNpmCommandButtonProps
	extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Trigger> {
	commands: Required<NpmCommands>
}

export function CopyNpmCommandButton({
	commands,
	className,
	...props
}: CopyNpmCommandButtonProps & {
	className?: string
}) {
	const { handleCopy, copiedText } = useCopyToClipboard()

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<Button
					size="iconSm"
					className={cx('absolute right-2 top-2', className)}
					variant={copiedText ? 'success' : 'ghost'}
					aria-label="copy"
					{...props}
				>
					{copiedText ? (
						<Icons.Check className="size-4" />
					) : (
						<Icons.Copy className="size-4" />
					)}
				</Button>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Item
					onClick={() => handleCopy(commands.__npmCommand__, COPY_TIMOUT)}
				>
					<Icons.Npm className="mr-2 size-4 fill-[#CB3837]" />
					<span>npm</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item
					onClick={() => handleCopy(commands.__yarnCommand__, COPY_TIMOUT)}
				>
					<Icons.Yarn className="mr-2 size-4 fill-[#2C8EBB]" />
					<span>yarn</span>
				</DropdownMenu.Item>
				<DropdownMenu.Item
					onClick={() => handleCopy(commands.__pnpmCommand__, COPY_TIMOUT)}
				>
					<Icons.Pnpm className="mr-2 size-4 fill-[#F69220]" />
					<span>pnpm</span>
				</DropdownMenu.Item>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	)
}
