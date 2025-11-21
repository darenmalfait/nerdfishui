import {
	CodeBlock,
	CodeBlockCode,
	CodeBlockGroup,
} from '@nerdfish/react/code-block'
import { cn } from '@nerdfish/utils/class'
import { type MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import type * as React from 'react'
import { ComponentExample } from './lib/components/component-example'
import { CopyButton } from './lib/components/copy-button'
import { DocsPageHeader } from './lib/components/docs-page-header'
import { Icons } from './lib/components/icons'
import { stripPreSlash } from '@/lib/utils/string'

export function useMDXComponents(components: MDXComponents) {
	return {
		...components,

		DocsPageHeader,
		pre: (props: React.HTMLAttributes<HTMLElement>) => (
			<CodeBlock className="my-friends">
				<CodeBlockGroup className="border-muted/10 p-best-friends px-friends border-b backdrop-blur-sm">
					<div className="text-sm font-medium" />
					<CopyButton
						code={props.children as string}
						className="-mr-best-friends"
					/>
				</CodeBlockGroup>

				<CodeBlockCode
					className="max-h-87.5 overflow-auto"
					code={props.children as string}
				/>
			</CodeBlock>
		),
		code: (props: React.HTMLAttributes<HTMLElement>) => (
			<code
				className="bg-background-muted text-foreground-muted rounded-md px-1.5 py-0.5 text-sm"
				{...props}
			/>
		),
		h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h1
				className="typography-heading mb-casual mt-acquaintances first:mt-0"
				{...props}
			/>
		),
		h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h2
				className="typography-heading-sm mb-casual mt-acquaintances first:mt-0"
				{...props}
			/>
		),
		h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
			<h3
				className="typography-subtitle mb-friends mt-friends first:mt-0"
				{...props}
			/>
		),

		p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
			<p
				className="typography-body mb-friends mt-casual first:mt-0"
				{...props}
			/>
		),
		a: ({
			className,
			children,
			href,
			...props
		}: Omit<React.ComponentPropsWithoutRef<'a'>, 'popover'>) => {
			const isExternal = href?.startsWith('http')
			const slug = isExternal ? href : `/${stripPreSlash(href ?? '')}`

			if (!slug) return null

			return (
				<Link
					{...props}
					className={cn(
						'border-accent hover:text-accent inline-flex items-center border-b-2 font-normal text-inherit no-underline transition-colors',
						className,
					)}
					href={slug}
					target={isExternal ? '_blank' : undefined}
				>
					{children}
					{isExternal ? (
						<Icons.ExternalLink className="ml-best-friends size-4" />
					) : null}
				</Link>
			)
		},
		ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
			<ul
				className={cn('my-friends ml-friends list-disc', className)}
				{...props}
			/>
		),
		ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
			<ol
				className={cn('my-friends ml-friends list-decimal', className)}
				{...props}
			/>
		),
		li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
			<li className={cn('mt-best-friends', className)} {...props} />
		),
		blockquote: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLElement>) => (
			<blockquote
				className={cn(
					'mt-friends pl-friends border-l-2 border-gray-300 text-gray-800 italic *:text-gray-600',
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
			// eslint-disable-next-line @next/next/no-img-element
			<img
				className={cn('rounded-container border border-gray-200', className)}
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
			<div className="my-friends w-full overflow-y-auto">
				<table className={cn('w-full', className)} {...props} />
			</div>
		),
		tr: ({
			className,
			...props
		}: React.HTMLAttributes<HTMLTableRowElement>) => (
			<tr
				className={cn(
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
				className={cn(
					'border border-gray-200 px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right',
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
				className={cn(
					'border border-gray-200 px-4 py-2 text-left [[align=center]]:text-center [[align=right]]:text-right',
					className,
				)}
				{...props}
			/>
		),

		Image,
		ComponentExample,
	}
}
