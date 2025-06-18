import * as uiComponents from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { type MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import type * as React from 'react'
import * as examples from './component-examples.ts'
import { ComponentExample } from './lib/components/component-example'
import { CopyButton, CopyNpmCommandButton } from './lib/components/copy-button'
import { DocsPageHeader } from './lib/components/docs-page-header'
import { Icons } from '~/app/components/icons'
import { type NpmCommands } from '~/lib/types/unist'
import { stripPreSlash } from '~/lib/utils/string'

const {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Paragraph,
	CodeBlock,
	CodeBlockGroup,
	CodeBlockCode,
} = uiComponents

export function useMDXComponents(components: MDXComponents) {
	return {
		...components,
		...uiComponents,
		DocsPageHeader,
		code: (props: React.HTMLAttributes<HTMLElement>) => <code {...props} />,
		h1: H1,
		h2: H2,
		h3: H3,
		h4: H4,
		h5: H5,
		h6: H6,
		a: ({
			className,
			children,
			href,
			...props
		}: React.ComponentPropsWithoutRef<'a'>) => {
			const isExternal = href?.startsWith('http')
			const slug = isExternal ? href : `/${stripPreSlash(href ?? '')}`

			if (!slug) return null

			return (
				<Link
					{...props}
					className={cx(
						'border-brand hover:text-brand inline-flex items-center border-b-2 font-normal text-inherit no-underline transition-colors',
						className,
					)}
					href={slug}
					target={isExternal ? '_blank' : undefined}
				>
					{children}
					{isExternal ? <Icons.ExternalLink className="ml-sm size-4" /> : null}
				</Link>
			)
		},
		p: Paragraph,
		ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
			<ul className={cx('my-md ml-md list-disc', className)} {...props} />
		),
		ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
			<ol className={cx('my-md ml-md list-decimal', className)} {...props} />
		),
		li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
			<li className={cx('mt-sm', className)} {...props} />
		),
		blockquote: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLElement>) => (
			<blockquote
				className={cx(
					'mt-md pl-md border-l-2 border-gray-300 italic text-gray-800 [&>*]:text-gray-600',
					className,
				)}
				{...props}
			/>
		),
		img: ({
			className,
			alt,
			...props
		}: React.ImgHTMLAttributes<HTMLImageElement>) => (
			<img
				className={cx('rounded-container border border-gray-200', className)}
				alt={alt}
				{...props}
			/>
		),
		hr: ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => (
			<hr
				className="my-4 border-gray-200 md:my-8 dark:border-gray-700"
				{...props}
			/>
		),
		table: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableElement>) => (
			<div className="my-md w-full overflow-y-auto">
				<table className={cx('w-full', className)} {...props} />
			</div>
		),
		tr: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableRowElement>) => (
			<tr
				className={cx(
					'even:bg-background-muted m-0 border-t border-gray-300 p-0',
					className,
				)}
				{...props}
			/>
		),
		th: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableCellElement>) => (
			<th
				className={cx(
					'border border-gray-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
					className,
				)}
				{...props}
			/>
		),
		td: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableCellElement>) => (
			<td
				className={cx(
					'border border-gray-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
					className,
				)}
				{...props}
			/>
		),
		pre: ({
			className,
			__rawString__,
			__npmCommand__,
			__pnpmCommand__,
			__yarnCommand__,
			__withMeta__,
			__src__,
			children,
			...rest
		}: React.HTMLAttributes<HTMLPreElement> & {
			__rawString__?: string
			__withMeta__?: boolean
			__src__?: string
		} & NpmCommands) => {
			if (typeof children === 'string') return <pre {...rest} />

			const { props } = children as any

			const match = /language-(\w+)/.exec(props.className ?? '')
			const language = match ? match[1] : null

			if (!language) return <pre {...rest} />

			return (
				<CodeBlock className="my-md">
					<CodeBlockGroup className="border-muted/10 p-sm bg-popover border-b">
						<div className="flex items-center gap-2">
							<div className="bg-foreground/10 text-primary px-sm py-xs rounded-[calc(theme(borderRadius.base)-theme(padding.sm))] text-xs font-medium">
								{language}
							</div>
						</div>
						<div>
							{__rawString__ && !__npmCommand__ ? (
								<CopyButton code={__rawString__} />
							) : null}
							{__npmCommand__ && __yarnCommand__ && __pnpmCommand__ ? (
								<CopyNpmCommandButton
									commands={{
										__npmCommand__,
										__pnpmCommand__,
										__yarnCommand__,
									}}
								/>
							) : null}
						</div>
					</CodeBlockGroup>
					<CodeBlockCode code={__rawString__ ?? ''} />
				</CodeBlock>
			)
		},
		Image,
		ComponentExample,
		...examples,
	}
}
