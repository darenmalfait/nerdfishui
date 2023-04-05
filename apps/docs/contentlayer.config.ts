import path from 'path'

import {
  defineDocumentType,
  defineNestedType,
  makeSource,
} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import {codeImport} from 'remark-code-import'
import remarkGfm from 'remark-gfm'
import {getHighlighter, loadTheme} from 'shiki'
import {visit} from 'unist-util-visit'

import {rehypeComponent} from './lib/rehype-component'
import {rehypeNpmCommand} from './lib/rehype-npm-command'

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
    remarkPlugins: [remarkGfm, codeImport],
    rehypePlugins: [
      rehypeSlug,
      rehypeComponent,
      () => tree => {
        visit(tree, node => {
          if (node.type === 'element' && node.tagName === 'pre') {
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') {
              return
            }

            node.__rawString__ = codeEl.children[0].value
            node.__src__ = node.properties.__src__
          }
        })
      },
      [
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            const theme = await loadTheme(
              path.join(process.cwd(), 'lib/vscode-theme.json'),
            )
            return getHighlighter({theme})
          },
          onVisitLine(node: any) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{type: 'text', value: ' '}]
            }
          },
          onVisitHighlightedLine(node: any) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node: any) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      () => tree => {
        visit(tree, node => {
          if (node.type === 'element' && node.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') {
              return
            }

            preElement.properties.__withMeta__ =
              node.children.at(0).tagName === 'div'
            preElement.properties.__rawString__ = node.__rawString__

            if (node.__src__) {
              preElement.properties.__src__ = node.__src__
            }
          }
        })
      },
      rehypeNpmCommand,
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
