import fs from 'node:fs'
import path from 'node:path'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

export function rehypeComponent() {
	return async (tree) => {
		visit(tree, (node) => {
			const { value: src } = getNodeAttributeByName(node, 'src') ?? {}

			if (node.name === 'ComponentExample') {
				const source = getComponentSourceFileContent(node)

				if (!source) {
					return
				}

				// Reset the children of the node.
				node.children = []

				// Replace the Source component with a pre element.
				node.children?.push(
					u('element', {
						tagName: 'pre',
						properties: {
							__src__: src,
						},
						children: [
							u('element', {
								tagName: 'code',
								properties: {
									className: ['language-tsx'],
								},
								children: [
									{
										type: 'text',
										value: source,
									},
								],
							}),
						],
					}),
				)
			}
		})
	}
}

function getNodeAttributeByName(node, name) {
	return node.attributes?.find((attribute) => attribute.name === name)
}

function getComponentSourceFileContent(node) {
	const src = getNodeAttributeByName(node, 'src')?.value

	if (!src) {
		return null
	}

	// Read the source file.
	const filePath = path.join(process.cwd(), src)
	const source = fs.readFileSync(filePath, 'utf8')

	return source
}
