'use client'

import { useCopyToClipboard } from '@nerdfish/react/hooks/use-copy-to-clipboard'
import { toast } from '@nerdfish/react/toast'
import { CheckIcon, ClipboardIcon } from 'lucide-react'
import { useEffect, type CSSProperties } from 'react'
import { type Color } from '../types'

export function Color({ color }: { color: Color }) {
	const { handleCopy, copiedText, reset } = useCopyToClipboard()

	useEffect(() => {
		if (!copiedText) return

		const timeout = setTimeout(() => {
			reset()
		}, 2000)

		return () => clearTimeout(timeout)
	}, [copiedText, reset])

	return (
		<button
			key={color.className}
			className="group rounded-base gap-best-friends text-foreground sm:max-w-28.75&>svg]:absolute relative flex w-full flex-1 cursor-pointer flex-col [&>svg]:absolute [&>svg]:top-4 [&>svg]:right-4 [&>svg]:z-10 [&>svg]:h-4 [&>svg]:w-4 [&>svg]:opacity-0 [&>svg]:transition-opacity"
			data-last-copied={copiedText === color.className}
			onClick={async () => {
				await handleCopy(color.className)

				toast.success(`Copied ${color.className} to clipboard.`)
			}}
			style={
				{
					'--text': color.foreground,
					'--bg': color.variable,
				} as CSSProperties
			}
		>
			{!!copiedText ? (
				<CheckIcon className="text-(--text) group-hover:opacity-100 group-data-[last-copied=true]:opacity-100" />
			) : (
				<ClipboardIcon className="text-(--text) group-hover:opacity-100" />
			)}
			<div className="after:border-input rounded-base after:rounded-base md:rounded-base aspect-3/1 w-full flex-1 bg-(--bg) sm:aspect-2/3 sm:h-auto sm:w-auto" />
			<div className="gap-bff flex w-full flex-1 flex-col items-center justify-start">
				<span className="text-foreground-muted group-hover:text-foreground group-data-[last-copied=true]:text-foreground line-clamp-1 flex font-mono text-xs tabular-nums transition-colors">
					{color.name}
				</span>
			</div>
		</button>
	)
}
