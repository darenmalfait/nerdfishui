import { useEffect, type EffectCallback } from 'react'

export function useMountEffect(effect: EffectCallback) {
	// Mount-only: we intentionally ignore changes to the callback identity.
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(effect, [])
}
