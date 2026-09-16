'use client'

import { CodeBlock } from '@nerdfish/react/code-block'

const code = `import { useState } from 'react'

export default function useCounter(initial = 0) {
  const [count, setCount] = useState(initial)

  return {
    count,
    increment: () => setCount((value) => value + 1),
    decrement: () => setCount((value) => value - 1),
  }
}`

export default function CodeBlockWithHeaderExample() {
	return <CodeBlock title="useCounter.ts" language="typescript" code={code} />
}
