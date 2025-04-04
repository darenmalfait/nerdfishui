import { cx } from '@nerdfish/utils'
import {
	Highlight as BaseHighlight,
	type Language,
	type PrismTheme,
} from 'prism-react-renderer'
import type React from 'react'

const RE = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
	if (!RE.test(meta)) {
		return () => false
	}
	const lineNumbers =
		RE.exec(meta)?.[1]
			?.split(',')
			.map((v) => v.split('-').map((x) => Number.parseInt(x, 10))) ?? []

	return (index: number) => {
		const lineNumber = index + 1
		const inRange = lineNumbers.some(([start, end]) =>
			end
				? lineNumber >= (start ?? 0) && lineNumber <= end
				: lineNumber === start,
		)
		return inRange
	}
}

export function Highlight({
	codeString,
	language,
	metastring,
	showLines,
	...props
}: {
	codeString: string
	language: Language
	theme: PrismTheme
	metastring?: string
	showLines?: boolean
}) {
	const shouldHighlightLine = calculateLinesToHighlight(metastring ?? '')

	return (
		<BaseHighlight code={codeString} language={language} {...props}>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<div
					className="overflow-x-auto font-mono text-sm"
					data-language={language}
				>
					<pre className={className} style={style}>
						{tokens.map((line, i) => {
							const lineProps = getLineProps({ line, key: i })
							return (
								<div
									{...lineProps}
									key={i}
									className={cx(
										shouldHighlightLine(i) ? 'bg-foreground/15' : undefined,
										lineProps.className,
									)}
								>
									{showLines ? (
										<span className="mr-md text-xs opacity-30">{i + 1}</span>
									) : null}
									{line.map((token, key) => (
										<span {...getTokenProps({ token, key })} key={key} />
									))}
								</div>
							)
						})}
					</pre>
				</div>
			)}
		</BaseHighlight>
	)
}

export type HighlightProps = React.ComponentProps<typeof BaseHighlight>
