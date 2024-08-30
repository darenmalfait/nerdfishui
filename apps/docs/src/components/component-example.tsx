'use client'

import { Tabs } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import * as React from 'react'

import { CopyButton, CopyWithClassNames } from './copy-button'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
	extractClassname?: boolean
	extractedClassNames?: string
	align?: 'center' | 'start' | 'end'
}

export function ComponentExample({
	children,
	className,
	extractClassname,
	extractedClassNames,
	align = 'center',
	...props
}: ComponentExampleProps) {
	const [Example, Code, ...Children] = React.Children.toArray(
		children,
	) as React.ReactElement[]

	const codeString = React.useMemo(() => {
		if (
			typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
		) {
			const [, Button] = React.Children.toArray(
				Code.props.children,
			) as React.ReactElement[]
			return (Button as any)?.props?.value || null
		}
	}, [Code])

	return (
		<div
			className={cx('relative my-4 flex flex-col space-y-2', className)}
			{...props}
		>
			<Tabs.Root defaultValue="preview" className="mr-auto w-full">
				<div className="flex items-center justify-between">
					<Tabs.List>
						<Tabs.Trigger value="preview">Preview</Tabs.Trigger>
						<Tabs.Trigger value="code">Code</Tabs.Trigger>
					</Tabs.List>
					{extractedClassNames ? (
						<CopyWithClassNames
							value={codeString}
							classNames={extractedClassNames}
							className="border-none"
						/>
					) : (
						codeString && <CopyButton value={codeString} />
					)}
				</div>
				<Tabs.Content
					value="preview"
					className="!bg-primary shadow-outline p-0"
				>
					<div
						className={cx('flex min-h-[350px] justify-center p-10', {
							'items-center': align === 'center',
							'items-start': align === 'start',
							'items-end': align === 'end',
						})}
					>
						{Example}
					</div>
				</Tabs.Content>
				<Tabs.Content value="code" className="!bg-primary shadow-outline p-0">
					<div className="flex flex-col space-y-4">
						<div className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
							{Code}
						</div>
						{Children.length ? (
							<div className="rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
								{Children}
							</div>
						) : null}
					</div>
				</Tabs.Content>
			</Tabs.Root>
		</div>
	)
}
