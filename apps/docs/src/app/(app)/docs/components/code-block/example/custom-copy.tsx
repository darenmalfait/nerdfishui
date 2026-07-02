'use client'

import { Button } from '@nerdfish/react/button'
import { CodeBlock } from '@nerdfish/react/code-block'
import { useCopyToClipboard } from '@nerdfish/react/hooks/use-copy-to-clipboard'
import { CheckIcon, CopyIcon } from 'lucide-react'

const codeText = `export async function fetchUser(id: string) {
  const response = await fetch(\`/api/users/\${id}\`)

  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }

  return response.json()
}`

function CustomCopyAction({ code }: { code: string }) {
	const { handleCopy, copiedText } = useCopyToClipboard()

	return (
		<Button
			size="xs"
			variant={copiedText ? 'success' : 'outline'}
			onClick={() => void handleCopy(code, 3000)}
		>
			{copiedText ? (
				<CheckIcon className="size-4" />
			) : (
				<CopyIcon className="size-4" />
			)}
			{copiedText ? 'Copied' : 'Copy code'}
		</Button>
	)
}

export function CodeBlockCustomCopyExample() {
	return (
		<CodeBlock
			title="api.ts"
			language="typescript"
			code={codeText}
			actions={<CustomCopyAction code={codeText} />}
		/>
	)
}
