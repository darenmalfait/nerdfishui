import * as React from 'react'

const isBrowser = typeof document !== 'undefined'

export const useSafeEffect = isBrowser ? React.useLayoutEffect : React.useEffect

export const useSSRLayoutEffect =
	typeof window === 'undefined' ? () => {} : React.useLayoutEffect
