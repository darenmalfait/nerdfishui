'use client'

import { cn } from '@nerdfish/utils/class'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState, type ComponentProps, type ReactNode } from 'react'
import { createCssVariablesTheme, createHighlighter } from 'shiki'
import { Badge } from '@nerdfish/react/badge'
import { Button, type ButtonProps } from '@nerdfish/react/button'
import { useCopyToClipboard } from '@nerdfish/react/hooks/use-copy-to-clipboard'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@nerdfish/react/tooltip'

const COPY_TIMEOUT = 3000

function CodeBlockContainer({
	children,
	className,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'not-typography flex w-full flex-col overflow-clip',
				'shadow-outline bg-background-muted text-foreground rounded-base',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export interface CodeBlockProps extends ComponentProps<'div'> {
	code?: string
	language?: string
	title?: string
	actions?: ReactNode
	headerClassName?: string
	codeClassName?: string
	hideHeader?: boolean
}

export function CodeBlock({
	children,
	className,
	code,
	language,
	title,
	actions,
	headerClassName,
	codeClassName,
	hideHeader = false,
	...props
}: CodeBlockProps) {
	const shouldShowHeader =
		!hideHeader && (Boolean(title) || Boolean(language) || actions != null)

	if (children != null) {
		return (
			<CodeBlockContainer className={className} {...props}>
				{children}
			</CodeBlockContainer>
		)
	}

	return (
		<CodeBlockContainer className={className} {...props}>
			{shouldShowHeader ? (
				<CodeBlockHeader
					language={language}
					title={title}
					code={code}
					actions={actions}
					className={headerClassName}
				/>
			) : null}
			{code != null ? (
				<CodeBlockCode
					code={code}
					language={language}
					className={codeClassName}
				/>
			) : null}
		</CodeBlockContainer>
	)
}

export interface CodeBlockCodeProps extends ComponentProps<'div'> {
	code: string
	language?: string
}

export function CodeBlockCode({
	code,
	language = 'tsx',
	className,
	...props
}: CodeBlockCodeProps) {
	const [highlightedHtml, setHighlightedHtml] = useState<string | null>(null)

	useEffect(() => {
		async function highlight() {
			if (!code) {
				setHighlightedHtml('<pre><code></code></pre>')
				return
			}

			const theme = createCssVariablesTheme({
				name: 'css-variables',
				variablePrefix: '--colors-shiki-',
				variableDefaults: {},
				fontStyle: true,
			})

			const highlighter = await createHighlighter({
				langs: [language],
				themes: [theme],
			})

			const html = highlighter.codeToHtml(code, {
				lang: language,
				theme: 'css-variables',
			})

			setHighlightedHtml(html)
		}

		void highlight()
	}, [code, language])

	const classNames = cn(
		'[&>pre]:px-friends [&>pre]:py-friends w-full overflow-x-auto text-[14px]',
		className,
	)

	// SSR fallback: render plain code if not hydrated yet
	return highlightedHtml ? (
		<div
			className={classNames}
			dangerouslySetInnerHTML={{ __html: highlightedHtml }}
			{...props}
		/>
	) : (
		<div className={classNames} {...props}>
			<pre>
				<code>{code}</code>
			</pre>
		</div>
	)
}

export type CodeBlockGroupProps = ComponentProps<'div'>
export function CodeBlockGroup({
	children,
	className,
	...props
}: CodeBlockGroupProps) {
	return (
		<div
			className={cn('flex items-center justify-between', className)}
			{...props}
		>
			{children}
		</div>
	)
}

export function CodeBlockCopyButton({
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
							aria-label={label}
							onClick={() => void handleCopy(code, COPY_TIMEOUT)}
							icon
							variant={copiedText ? 'success' : 'outline'}
						/>
					}
				>
					{copiedText ? (
						<CheckIcon className="size-4" />
					) : (
						<CopyIcon className="size-4" />
					)}
				</TooltipTrigger>
				<TooltipContent>{label}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}

export interface CodeBlockHeaderProps extends ComponentProps<'div'> {
	language?: string
	title?: string
	code?: string
	actions?: ReactNode
}

export function CodeBlockHeader({
	language,
	title,
	code,
	actions,
	className,
	...props
}: CodeBlockHeaderProps) {
	const defaultActions =
		code != null ? (
			<CodeBlockCopyButton code={code} className="-mr-best-friends" />
		) : null

	return (
		<CodeBlockGroup
			className={cn(
				'border-muted/10 bg-background-muted p-best-friends px-friends border-b backdrop-blur-sm',
				className,
			)}
			{...props}
		>
			<div className="text-foreground/80 gap-best-friends flex min-w-0 items-center text-sm font-medium">
				{language ? (
					<Badge size="sm" variant="muted" appearance="outline">
						{language}
					</Badge>
				) : null}
				{title ? <span className="truncate">{title}</span> : null}
			</div>
			{actions ?? defaultActions}
		</CodeBlockGroup>
	)
}
