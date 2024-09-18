'use client'

import { themes } from 'prism-react-renderer'
import * as React from 'react'
import { CodeContainer } from './code-container'
import { Highlight } from './highlight'

export function CodeBlock(props: { children: any }) {
	if (!props.children?.props) throw new Error('CodeBlock must have children')
	const { className, children, viewlines, ln } = props.children.props

	const language = className?.replace(/language-/, '')
	const rawCode = children.trim()

	const theme = {
		...themes.shadesOfPurple,
		plain: {
			backgroundColor: 'bg-muted',
			color: themes.shadesOfPurple.plain.color,
		},
	}

	return (
		<div className="dark relative z-0">
			<CodeContainer
				className="overflow-hidden px-0"
				style={{
					backgroundColor: theme.plain.backgroundColor,
				}}
			>
				<Highlight
					codeString={rawCode}
					language={language}
					theme={theme}
					metastring={ln}
					showLines={viewlines}
				/>
			</CodeContainer>
		</div>
	)
}
