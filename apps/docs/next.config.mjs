import createMDX from '@next/mdx'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { codeImport } from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

// no alias paths, because it breaks the content layer build
import { rehypeMdxCodeMeta } from './src/lib/rehype-code-meta.js'
import { rehypeComponent } from './src/lib/rehype-component.js'
import { rehypeNpmCommand } from './src/lib/rehype-npm-command.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
	typescript: {
		ignoreBuildErrors: !!process.env.CI,
	},
	/* We already do linting on GH actions */
	eslint: {
		ignoreDuringBuilds: !!process.env.CI,
	},
	images: {
		remotePatterns: [
			{ hostname: 'avatars.githubusercontent.com' },
			{ hostname: 'images.unsplash.com' },
		],
	},
	experimental: {
		optimizePackageImports: ['@nerdfish/ui'],
	},
}

const withMDX = createMDX({
	options: {
		remarkPlugins: [remarkGfm, codeImport],
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
	},
})

export default withMDX(nextConfig)
