'use client'

import { Badge } from '@nerdfish/react/badge'
import {
	CodeBlock,
	CodeBlockCode,
	CodeBlockGroup,
} from '@nerdfish/react/code-block'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@nerdfish/react/tabs'
import { cx } from '@nerdfish/utils'
import { type ReactNode, type HTMLAttributes, type ReactElement } from 'react'
import reactElementToJSXString from 'react-element-to-jsx-string'
import { CopyButton } from './copy-button'

function Preview({ children }: { children: ReactNode }) {
	return (
		<div className="rounded-base p-friends border-border flex min-h-[450px] items-center justify-center border">
			<div className="mx-auto flex w-full max-w-[800px] justify-center">
				{children}
			</div>
		</div>
	)
}

const options = {
	useBooleanShorthandSyntax: false,
	showDefaultProps: false,
	showFunctions: false,
	filterProps: ['onChange', 'onBlur', 'onFocus'],
	maxInlineAttributesLineLength: 60,
}

export function ComponentExample({
	className,
	component,
	name,
}: HTMLAttributes<HTMLDivElement> & {
	component?: () => ReactElement
	name?: string
}) {
	const sourceCode =
		typeof component === 'function'
			? reactElementToJSXString(component(), options)
			: reactElementToJSXString(component, options)

	if (!sourceCode) return null

	const Component = component

	return (
		<div className={cx('mt-friends gap-friends flex flex-col', className)}>
			<Tabs defaultValue={Component ? 'example' : 'code'}>
				<TabsList>
					{Component ? (
						<TabsTrigger value="example">Preview</TabsTrigger>
					) : null}
					<TabsTrigger value="code">Code</TabsTrigger>
				</TabsList>
				{Component ? (
					<TabsContent value="example">
						<Preview>{<Component />}</Preview>
					</TabsContent>
				) : null}
				<TabsContent value="code">
					<CodeBlock>
						<CodeBlockGroup className="border-muted/10 p-best-friends px-friends bg-background-muted border-b backdrop-blur-sm">
							<div className="text-sm font-medium">
								<Badge>{name}</Badge>
							</div>
							<CopyButton code={sourceCode} className="-mr-best-friends" />
						</CodeBlockGroup>

						<CodeBlockCode
							className="max-h-[350px] overflow-auto"
							code={sourceCode}
						/>
					</CodeBlock>
				</TabsContent>
			</Tabs>
		</div>
	)
}
