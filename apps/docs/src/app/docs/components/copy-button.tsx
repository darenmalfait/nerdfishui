import {
	Button,
	type ButtonProps,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
	TooltipContent,
} from '@nerdfish/ui'
import { cx, useCopyToClipboard } from '@nerdfish/utils'
import React from 'react'
import { Icons } from '~/app/components/icons'
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
			<Tooltip>
				<TooltipTrigger asChild>
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
				</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

interface CopyNpmCommandButtonProps
	extends React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {
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
			<DropdownMenuTrigger asChild>
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
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem
					onClick={() => handleCopy(commands.__npmCommand__, COPY_TIMOUT)}
				>
					<Icons.Npm className="mr-2 size-4 fill-[#CB3837]" />
					<span>npm</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleCopy(commands.__yarnCommand__, COPY_TIMOUT)}
				>
					<Icons.Yarn className="mr-2 size-4 fill-[#2C8EBB]" />
					<span>yarn</span>
				</DropdownMenuItem>
				<DropdownMenuItem
					onClick={() => handleCopy(commands.__pnpmCommand__, COPY_TIMOUT)}
				>
					<Icons.Pnpm className="mr-2 size-4 fill-[#F69220]" />
					<span>pnpm</span>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
