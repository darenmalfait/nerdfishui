import { visit } from 'unist-util-visit'

export function rehypeNpmCommand() {
	return (tree) => {
		visit(tree, (node) => {
			if (node.type !== 'element' || node.tagName !== 'pre') {
				return
			}

			// We'll only deal with the npm install command for now.

			if (node.properties?.__rawString__?.startsWith('npm install')) {
				const npmCommand = node.properties.__rawString__
				node.properties.__npmCommand__ = npmCommand
				node.properties.__yarnCommand__ = npmCommand.replace(
					'npm install',
					'yarn add',
				)
				node.properties.__pnpmCommand__ = npmCommand.replace(
					'npm install',
					'pnpm add',
				)
			}
		})
	}
}
