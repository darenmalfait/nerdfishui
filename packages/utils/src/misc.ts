import * as React from 'react'

const isBrowser = typeof document !== 'undefined'

const useSafeEffect = isBrowser ? React.useLayoutEffect : React.useEffect

const useSSRLayoutEffect =
  typeof window === 'undefined' ? () => {} : React.useLayoutEffect

export {isBrowser, useSafeEffect, useSSRLayoutEffect}
