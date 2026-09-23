'use client'

import { cn } from '@nerdfish/utils/class'
import { CheckIcon, CopyIcon } from 'lucide-react'
import { useEffect, useState, type ComponentProps, type ReactNode } from 'react'
import { useCopyToClipboard } from '../../hooks/use-copy-to-clipboard'
import { Button, type ButtonProps } from '../button/button'
import { type LanguageIcon } from './language-icon-types'
import { languageLabel } from './language-registry'

const COPY_TIMEOUT = 1500

/** Chrome height for the absolute header bar (Blume: 2.75rem). */
const HEADER_HEIGHT_CLASS = 'h-11'
const HEADER_PADDING_CLASS = 'pt-11'
/** Clearance for the absolute copy control (Blume: 3rem). */
const COPY_CLEARANCE_CLASS = 'pe-14'
/** Blume mono leading — no semantic token for 1.55. */
const CODE_LEADING_CLASS = 'leading-[1.55]'

interface CodeHighlighter {
	codeToHtml: (code: string, options: { lang: string; theme: string }) => string
	loadLanguage: (lang: string) => Promise<unknown>
}

const CSS_VARIABLES_THEME = {
	name: 'css-variables',
	variablePrefix: '--colors-shiki-',
	variableDefaults: {
		foreground: 'inherit',
		background: 'transparent',
	},
	fontStyle: true,
} as const

let highlighterPromise: Promise<CodeHighlighter> | null = null
const loadedLangs = new Set<string>()

async function getHighlighter(language: string): Promise<CodeHighlighter> {
	const { createHighlighter, createCssVariablesTheme } = await import('shiki')

	if (!highlighterPromise) {
		highlighterPromise = createHighlighter({
			langs: [language],
			themes: [createCssVariablesTheme(CSS_VARIABLES_THEME)],
		}) as Promise<CodeHighlighter>
		loadedLangs.add(language)
	}

	const highlighter = await highlighterPromise

	if (!loadedLangs.has(language)) {
		await highlighter.loadLanguage(language)
		loadedLangs.add(language)
	}

	return highlighter
}

/** Move focus from Shiki's `<pre tabindex>` onto `<code>` before paint. */
function withCodeTabStop(html: string): string {
	if (typeof document === 'undefined') return html
	const container = document.createElement('div')
	container.innerHTML = html
	const codeEl = container.querySelector('code')
	const preEl = container.querySelector('pre')
	if (codeEl && preEl) {
		codeEl.setAttribute('tabindex', '0')
		preEl.removeAttribute('tabindex')
	}
	return container.innerHTML
}

function CodeBlockFrame({
	children,
	className,
	...props
}: ComponentProps<'div'>) {
	return (
		<div
			data-slot="code-block"
			className={cn(
				'not-typography group/code-block relative w-full overflow-hidden',
				'border-border bg-background text-foreground rounded-base border',
				'font-mono text-sm',
				CODE_LEADING_CLASS,
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
	/**
	 * Pass `false` to suppress the auto header (e.g. highlight `language`
	 * without chrome). Prefer children + `CodeBlockCode` for custom layout.
	 */
	header?: false
	/**
	 * Language icon in the header.
	 * Default: brand icon for `language`. Pass `false` to hide, or a custom node.
	 */
	icon?: ReactNode | false
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
	header,
	icon,
	...props
}: CodeBlockProps) {
	if (children != null) {
		return (
			<CodeBlockFrame className={className} {...props}>
				{children}
			</CodeBlockFrame>
		)
	}

	const label = title ?? languageLabel(language)
	const shouldShowHeader =
		header !== false && (Boolean(label) || actions != null)
	const copyTarget = code ?? ''

	return (
		<CodeBlockFrame className={className} {...props}>
			{shouldShowHeader ? (
				<CodeBlockHeader
					language={language}
					title={title}
					code={code}
					actions={actions}
					icon={icon}
					className={headerClassName}
				/>
			) : null}
			{!shouldShowHeader && code != null ? (
				<CodeBlockCopyButton
					code={copyTarget}
					className="top-best-friends right-friends absolute z-2"
				/>
			) : null}
			{code != null ? (
				<CodeBlockCode
					code={code}
					language={language}
					className={cn(
						shouldShowHeader ? HEADER_PADDING_CLASS : '[&_code]:pe-14',
						codeClassName,
					)}
				/>
			) : null}
		</CodeBlockFrame>
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
		let cancelled = false

		async function highlight() {
			if (!code) {
				if (!cancelled) {
					setHighlightedHtml(withCodeTabStop('<pre><code></code></pre>'))
				}
				return
			}

			try {
				const highlighter = await getHighlighter(language)
				const html = withCodeTabStop(
					highlighter.codeToHtml(code.replace(/\n+$/u, ''), {
						lang: language,
						theme: 'css-variables',
					}),
				)
				if (cancelled) return
				setHighlightedHtml(html)
			} catch {
				if (!cancelled) {
					setHighlightedHtml(null)
				}
			}
		}

		void highlight()

		return () => {
			cancelled = true
		}
	}, [code, language])

	const classNames = cn(
		'w-full overflow-hidden',
		'[&>pre]:font-inherit [&>pre]:m-0 [&>pre]:bg-transparent [&>pre]:p-0 [&>pre]:text-inherit',
		// 24rem scroll cap matches Blume prose code blocks
		'[&_code]:block [&_code]:max-h-96 [&_code]:overflow-auto',
		'[&_code]:px-friends [&_code]:pb-best-friends',
		className,
	)

	return highlightedHtml ? (
		<div
			data-slot="code-block-code"
			className={classNames}
			dangerouslySetInnerHTML={{ __html: highlightedHtml }}
			{...props}
		/>
	) : (
		<div data-slot="code-block-code" className={classNames} {...props}>
			<pre>
				<code tabIndex={0}>{code}</code>
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
			data-slot="code-block-group"
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
	const copied = Boolean(copiedText)
	const label = copied ? 'Copied' : 'Copy code'

	return (
		<Button
			type="button"
			size="xs"
			icon
			variant="ghost"
			aria-label={label}
			{...props}
			className={cn(
				'bg-background text-foreground-muted border-transparent',
				!copied && 'hover:bg-background-muted hover:text-foreground',
				copied && 'text-success hover:text-success hover:bg-transparent',
				className,
			)}
			onClick={() => void handleCopy(code, COPY_TIMEOUT)}
		>
			<span className="relative size-3">
				<CheckIcon
					aria-hidden
					className={cn(
						'absolute inset-0 size-3 transition-transform',
						copied ? 'scale-100' : 'scale-0',
					)}
				/>
				<CopyIcon
					aria-hidden
					className={cn(
						'absolute inset-0 size-3 transition-transform',
						copied ? 'scale-0' : 'scale-100',
					)}
				/>
			</span>
		</Button>
	)
}

export interface CodeBlockHeaderProps extends ComponentProps<'div'> {
	language?: string
	title?: string
	code?: string
	actions?: ReactNode
	/**
	 * Language icon.
	 * Default: brand icon for `language`. Pass `false` to hide, or a custom node.
	 */
	icon?: ReactNode | false
}

function CodeBlockLanguageIcon({ language }: { language: string }) {
	const [icon, setIcon] = useState<LanguageIcon | null>(null)

	// justified useEffect because async
	useEffect(() => {
		let cancelled = false

		void import('./language-icons')
			.then(({ loadLanguageIcon }) => loadLanguageIcon(language))
			.then((next) => {
				if (!cancelled) {
					setIcon(next)
				}
			})
			.catch(() => {
				if (!cancelled) {
					setIcon(null)
				}
			})

		return () => {
			cancelled = true
		}
	}, [language])

	if (!icon) return null

	return (
		<svg
			data-slot="code-block-language-icon"
			data-icon={icon.slug}
			aria-hidden
			viewBox="0 0 24 24"
			className="size-3 shrink-0 fill-current"
		>
			<path d={icon.path} />
		</svg>
	)
}

function resolveLanguageIcon(
	icon: ReactNode | false | undefined,
	language?: string,
) {
	if (icon === false) return null
	if (icon !== undefined) return icon
	if (language) return <CodeBlockLanguageIcon language={language} />
	return null
}

export function CodeBlockHeader({
	language,
	title,
	code,
	actions,
	icon,
	className,
	...props
}: CodeBlockHeaderProps) {
	const label = title ?? languageLabel(language)
	const defaultActions =
		code != null ? <CodeBlockCopyButton code={code} /> : null
	const languageIcon = resolveLanguageIcon(icon, language)

	return (
		<div
			data-slot="code-block-header"
			className={cn(
				'border-border text-foreground-muted absolute inset-x-0 top-0 z-1 flex items-center',
				HEADER_HEIGHT_CLASS,
				'gap-best-friends px-friends border-b font-sans text-xs font-medium',
				COPY_CLEARANCE_CLASS,
				className,
			)}
			{...props}
		>
			{languageIcon}
			{label ? <span className="truncate">{label}</span> : null}
			<div className="top-best-friends right-friends absolute">
				{actions ?? defaultActions}
			</div>
		</div>
	)
}
