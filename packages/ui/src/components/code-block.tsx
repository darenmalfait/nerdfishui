'use client'

import { cx } from '@nerdfish/utils'
import * as React from 'react'
import { createCssVariablesTheme, createHighlighter } from 'shiki'

export type CodeBlockProps = React.ComponentProps<'div'>

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
	return (
		<div
			className={cx(
				'not-prose flex w-full flex-col overflow-clip',
				'shadow-outline bg-background-muted text-foreground rounded-base',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export interface CodeBlockCodeProps extends React.ComponentProps<'div'> {
	code: string
	language?: string
}

export function CodeBlockCode({
	code,
	language = 'tsx',
	className,
	...props
}: CodeBlockCodeProps) {
	const [highlightedHtml, setHighlightedHtml] = React.useState<string | null>(
		null,
	)

	React.useEffect(() => {
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

	const classNames = cx(
		'[&>pre]:px-md [&>pre]:py-md w-full overflow-x-auto text-[13px]',
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

export type CodeBlockGroupProps = React.ComponentProps<'div'>
export function CodeBlockGroup({
	children,
	className,
	...props
}: CodeBlockGroupProps) {
	return (
		<div
			className={cx('flex items-center justify-between', className)}
			{...props}
		>
			{children}
		</div>
	)
}
