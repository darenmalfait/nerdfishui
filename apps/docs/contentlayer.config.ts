import {
	defineDocumentType,
	defineNestedType,
	makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { codeImport } from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

// no alias paths, because it breaks the content layer build
import { rehypeMdxCodeMeta } from './src/lib/rehype-code-meta'
import { rehypeComponent } from './src/lib/rehype-component'
import { rehypeNpmCommand } from './src/lib/rehype-npm-command'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
	slug: {
		type: 'string',
		resolve: (doc: any) => `/${doc._raw.flattenedPath}`,
	},
	slugAsParams: {
		type: 'string',
		resolve: (doc: any) => {
			const flattened = doc._raw.flattenedPath.split('/')

			return flattened.length > 1 ? flattened.slice(1).join('/') : flattened[0]
		},
	},
}

const PackageProperties = defineNestedType(() => ({
	name: 'PackageProperties',
	fields: {
		name: {
			type: 'string',
		},
		path: {
			type: 'string',
		},
	},
}))

export const Doc = defineDocumentType(() => ({
	name: 'Doc',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			required: true,
		},
		description: {
			type: 'string',
			required: true,
		},
		published: {
			type: 'boolean',
			default: true,
		},
		package: {
			type: 'nested',
			of: PackageProperties,
		},
		component: {
			type: 'boolean',
			default: false,
			required: false,
		},
	},
	computedFields: computedFields as any,
}))

export default makeSource({
	contentDirPath: './content',
	documentTypes: [Doc],
	mdx: {
		rehypePlugins: [
			rehypeComponent,
			() => (tree) => {
				visit(tree, (node) => {
					if (node.type === 'element' && node.tagName === 'pre') {
						const [codeEl] = node.children

						if (codeEl.tagName !== 'code') return

						node.properties.__rawString__ = codeEl.children[0].value
					}
				})
			},
			rehypeNpmCommand,
			rehypeMdxCodeMeta,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ['subheading-anchor'],
						ariaLabel: 'Link to section',
					},
				},
			],
		],
		remarkPlugins: [remarkGfm, codeImport as any],
	},
})
