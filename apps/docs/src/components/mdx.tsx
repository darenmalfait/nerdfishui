'use client'

import * as uiComponents from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import Image from 'next/image'
import { useMDXComponent } from 'next-contentlayer/hooks'
import * as React from 'react'

import { type NpmCommands } from '../lib/types/unist'
import { AppDemo } from './app-demo'
import { CodeBlockWrapper } from './code-block-wrapper'
import { ComponentExample } from './component-example'
import { ComponentSource } from './component-source'
import { CopyButton, CopyNpmCommandButton } from './copy-button'
import { examples } from './examples'

import '../styles/mdx.css'

const { Accordion, H1, H2, H3, H4, H5, H6, Paragraph } = uiComponents

const components = {
	...uiComponents,
	Accordion,
	AppDemo,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
		<a
			className={cx(
				'text-primary font-medium underline underline-offset-4',
				className,
			)}
			{...props}
		/>
	),
	p: Paragraph,
	ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
		<ul className={cx('my-6 ml-6 list-disc', className)} {...props} />
	),
	ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
		<ol className={cx('my-6 ml-6 list-decimal', className)} {...props} />
	),
	li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<li className={cx('mt-2', className)} {...props} />
	),
	blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<blockquote
			className={cx(
				'mt-6 border-l-2 border-gray-300 pl-6 italic text-gray-800 [&>*]:text-gray-600',
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
			className={cx('rounded-md border border-gray-200', className)}
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
	table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
		<div className="my-6 w-full overflow-y-auto">
			<table className={cx('w-full', className)} {...props} />
		</div>
	),
	tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
		<tr
			className={cx(
				'even:bg-muted m-0 border-t border-gray-300 p-0',
				className,
			)}
			{...props}
		/>
	),
	th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
		<th
			className={cx(
				'border border-gray-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
				className,
			)}
			{...props}
		/>
	),
	td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
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
		return (
			<>
				<pre
					className={cx(
						'shadow-outline bg-muted mb-4 mt-6 overflow-x-auto rounded-lg px-2 py-4',
						className,
					)}
					{...props}
				/>
				{__rawString__ && !__npmCommand__ ? (
					<CopyButton
						value={__rawString__}
						src={__src__}
						className={cx(
							'absolute right-4 top-4 border-none text-gray-300 opacity-50 hover:bg-transparent hover:opacity-100',
							__withMeta__ && 'top-20',
						)}
					/>
				) : null}
				{__npmCommand__ && __yarnCommand__ && __pnpmCommand__ ? (
					<CopyNpmCommandButton
						commands={{
							__npmCommand__,
							__pnpmCommand__,
							__yarnCommand__,
						}}
						className={cx(
							'absolute right-4 top-4 border-none text-gray-300 opacity-50 hover:bg-transparent hover:opacity-100',
							__withMeta__ && 'top-20',
						)}
					/>
				) : null}
			</>
		)
	},
	code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
		<code
			className={cx(
				'rounded bg-transparent py-[0.2rem] font-mono text-sm font-semibold text-gray-900 ring-0 dark:text-gray-400',
				className,
			)}
			{...props}
		/>
	),
	Image,
	ComponentExample,
	ComponentSource,
	CodeBlockWrapper: ({ ...props }) => (
		<CodeBlockWrapper
			className="rounded-md border border-gray-100"
			{...props}
		/>
	),
	...examples,
}

interface MdxProps {
	code: string
}

export function Mdx({ code }: MdxProps) {
	const Component = useMDXComponent(code) as any

	return (
		<div className="mdx">
			<Component components={components} />
		</div>
	)
}
