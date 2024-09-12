import { visit } from 'unist-util-visit'
import { type UnistTree } from './types/unist'

export function rehypeMdxCodeMeta() {
	return (tree: UnistTree) => {
		visit(tree, 'element', (node: any) => {
			if (node.tagName !== 'code' || !node.data) return
			node.properties ||= {}
			node.data.meta.split(' ').forEach((t: any) => {
				const [key, value] = t.split('=')
				node.properties[key] = value
			})
		})
	}
}
