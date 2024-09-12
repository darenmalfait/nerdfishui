'use client'

import * as React from 'react'

export function useControllableState<T>(
	propValue: T | undefined,
	initialValue: T | (() => T),
	changeHandler?: React.Dispatch<React.SetStateAction<T | undefined>>,
): [T | undefined, (value: T) => void] {
	const [stateValue, setState] = React.useState<T>(initialValue)
	const value = propValue ?? stateValue

	return [
		value,
		(newValue: T) => {
			setState(newValue)
			changeHandler?.(newValue)
		},
	]
}

export function useMediaQuery(query: string) {
	const [value, setValue] = React.useState(false)

	React.useEffect(() => {
		function onChange(event: MediaQueryListEvent) {
			setValue(event.matches)
		}

		const result = matchMedia(query)
		result.addEventListener('change', onChange)
		setValue(result.matches)

		return () => result.removeEventListener('change', onChange)
	}, [query])

	return value
}

export function useCopyToClipboard() {
	const [copiedText, setCopiedText] = React.useState<string | null>(null)
	const copyTimeoutRef = React.useRef<
		ReturnType<typeof setTimeout> | undefined
	>()

	const handleCopy = React.useCallback(
		async (text: string, resetDelay?: number) => {
			// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- typescript thinks it's always defined, I'd rather check it
			if (!navigator.clipboard) {
				console.warn('Clipboard not supported')
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
				console.warn('Copy failed', error)
				setCopiedText(null)
				return false
			}
		},
		[],
	)

	const reset = React.useCallback(() => {
		setCopiedText(null)
	}, [])

	React.useEffect(() => {
		return () => {
			clearTimeout(copyTimeoutRef.current)
		}
	}, [])

	return { handleCopy, copiedText, reset }
}
