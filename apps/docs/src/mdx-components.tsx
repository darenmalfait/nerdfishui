import * as uiComponents from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { type MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import * as examples from './component-examples.ts'
import { CodeBlock } from './lib/components/codeblock/codeblock'
import { ComponentExample } from './lib/components/component-example'
import { CopyButton, CopyNpmCommandButton } from './lib/components/copy-button'
import { DocsPageHeader } from './lib/components/docs-page-header'
import { Icons } from '~/app/components/icons'
import { type NpmCommands } from '~/lib/types/unist'
import { stripPreSlash } from '~/lib/utils/string'

const { H1, H2, H3, H4, H5, H6, Paragraph } = uiComponents

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
						'border-accent hover:text-accent inline-flex items-center border-b-2 font-normal text-inherit no-underline transition-colors',
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
				className={cx('rounded-large border border-gray-200', className)}
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
					'even:bg-muted m-0 border-t border-gray-300 p-0',
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
			...props
		}: React.HTMLAttributes<HTMLPreElement> & {
			__rawString__?: string
			__withMeta__?: boolean
			__src__?: string
		} & NpmCommands) => {
			if (typeof props.children === 'string') return <pre {...props} />

			return (
				<div className="dark relative my-4">
					<CodeBlock {...props}>{props.children}</CodeBlock>
					{__rawString__ && !__npmCommand__ ? (
						<CopyButton
							code={__rawString__}
							className={cx('top-md', __withMeta__ && 'top-20')}
						/>
					) : null}
					{__npmCommand__ && __yarnCommand__ && __pnpmCommand__ ? (
						<CopyNpmCommandButton
							commands={{
								__npmCommand__,
								__pnpmCommand__,
								__yarnCommand__,
							}}
							className={cx(__withMeta__ && 'top-20')}
						/>
					) : null}
				</div>
			)
		},
		Image,
		ComponentExample,
		...examples,
	}
}
