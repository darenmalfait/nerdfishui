import { visit } from 'unist-util-visit'

export function rehypeMdxCodeMeta() {
	return (tree) => {
		visit(tree, 'element', (node) => {
			if (node.tagName !== 'code' || !node.data) return
			node.properties ||= {}
			node.data.meta.split(' ').forEach((t) => {
				const [key, value] = t.split('=')
				node.properties[key] = value
			})
		})
	}
}
