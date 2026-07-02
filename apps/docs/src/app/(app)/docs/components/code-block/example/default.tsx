'use client'

import { CodeBlock } from '@nerdfish/react/code-block'

const code = `function greet(name: string) {
  return \`Hello, \${name}!\`
}

greet('world')`

export function CodeBlockExample() {
	return <CodeBlock code={code} language="typescript" />
}
