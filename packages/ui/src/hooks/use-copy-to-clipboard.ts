import * as React from 'react'

export function useCopyToClipboard({
	onError,
}: {
	onError?: (error: Error) => void
} = {}) {
	const [copiedText, setCopiedText] = React.useState<string | null>(null)
	const copyTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
		null,
	)

	const handleCopy = React.useCallback(
		async (text: string, resetDelay?: number) => {
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typescript thinks it's always defined, I'd rather check it
			if (!navigator.clipboard) {
				onError?.(new Error('Clipboard not supported'))
				return false
			}

			// Try to save to clipboard then save it in the state if worked
			try {
				await navigator.clipboard.writeText(text)
				setCopiedText(text)

				if (resetDelay) {
					copyTimeoutRef.current = setTimeout(() => {
						setCopiedText(null)
					}, resetDelay)
				}

				return true
			} catch (error) {
				onError?.(error as Error)
				setCopiedText(null)
				return false
			}
		},
		[onError],
	)

	const reset = React.useCallback(() => {
		setCopiedText(null)
	}, [])

	React.useEffect(() => {
		return () => {
			if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
		}
	}, [])

	return { handleCopy, copiedText, reset }
}
