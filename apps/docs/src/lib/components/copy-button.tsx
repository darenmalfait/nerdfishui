'use client'

import { Button, type ButtonProps } from '@nerdfish/react/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@nerdfish/react/dropdown-menu'
import { useCopyToClipboard } from '@nerdfish/react/hooks/use-copy-to-clipboard'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'
import { type ComponentPropsWithoutRef } from 'react'
import { Icons } from '@/lib/components/icons'
import { type NpmCommands } from '@/types/unist'

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
			<Tooltip>
				<TooltipTrigger
					render={
						<Button
							size="xs"
							{...props}
							className={className}
							aria-label="copy"
							onClick={() => handleCopy(code, COPY_TIMOUT)}
							icon
							variant={copiedText ? 'success' : 'outline'}
						/>
					}
				>
					{copiedText ? (
						<Icons.Check className="size-4" />
					) : (
						<Icons.Copy className="size-4" />
					)}
				</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

interface CopyNpmCommandButtonProps
	extends ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {
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
		<DropdownMenu>
			<DropdownMenuTrigger
				{...props}
				render={
					<Button
						size="sm"
						icon
						className={className}
						variant={copiedText ? 'success' : 'ghost'}
						aria-label="copy"
					>
						{copiedText ? (
							<Icons.Check className="size-4" />
						) : (
							<Icons.Copy className="size-4" />
						)}
					</Button>
				}
			/>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={() => handleCopy(commands.__npmCommand__, COPY_TIMOUT)}
				>
					<Icons.Npm className="mr-best-friends size-4 fill-[#CB3837]" />
					<span>npm</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleCopy(commands.__yarnCommand__, COPY_TIMOUT)}
				>
					<Icons.Yarn className="mr-best-friends size-4 fill-[#2C8EBB]" />
					<span>yarn</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleCopy(commands.__pnpmCommand__, COPY_TIMOUT)}
				>
					<Icons.Pnpm className="mr-best-friends size-4 fill-[#F69220]" />
					<span>pnpm</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
