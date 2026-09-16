import * as React from 'react'
import { useMountEffect } from './use-mount-effect'

export function useCopyToClipboard({
	onError,
}: {
	onError?: (error: Error) => void
} = {}) {
	const [copiedText, setCopiedText] = React.useState<string | null>(null)
	const copyTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
		null,
	)
	const onErrorRef = React.useRef(onError)
	onErrorRef.current = onError

	const handleCopy = React.useCallback(
		async (text: string, resetDelay?: number) => {
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typescript thinks it's always defined, I'd rather check it
			if (!navigator.clipboard) {
				onErrorRef.current?.(new Error('Clipboard not supported'))
				return false
			}

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
				onErrorRef.current?.(error as Error)
				setCopiedText(null)
				return false
			}
		},
		[],
	)

	const reset = React.useCallback(() => {
		setCopiedText(null)
	}, [])

	useMountEffect(() => {
		return () => {
			if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current)
		}
	})

	return { handleCopy, copiedText, reset }
}
