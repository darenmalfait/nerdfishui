import { useEffect, useState } from 'react'

type BreakpointEntry = {
	mql: MediaQueryList
	subscribers: Set<(isMobile: boolean) => void>
	onChange: () => void
}

const breakpointListeners = new Map<number, BreakpointEntry>()

function getIsMobile(breakpoint: number) {
	return window.innerWidth < breakpoint
}

function subscribe(breakpoint: number, callback: (isMobile: boolean) => void) {
	let entry = breakpointListeners.get(breakpoint)

	if (!entry) {
		const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
		const subscribers = new Set<(isMobile: boolean) => void>()
		const onChange = () => {
			const matches = getIsMobile(breakpoint)
			for (const subscriber of subscribers) {
				subscriber(matches)
			}
		}

		mql.addEventListener('change', onChange)
		entry = { mql, subscribers, onChange }
		breakpointListeners.set(breakpoint, entry)
	}

	const current = entry
	current.subscribers.add(callback)
	callback(getIsMobile(breakpoint))

	return () => {
		current.subscribers.delete(callback)
		if (current.subscribers.size === 0) {
			current.mql.removeEventListener('change', current.onChange)
			breakpointListeners.delete(breakpoint)
		}
	}
}

export function useIsMobile(mobileBreakpoint = 768) {
	const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

	useEffect(() => subscribe(mobileBreakpoint, setIsMobile), [mobileBreakpoint])

	return !!isMobile
}
