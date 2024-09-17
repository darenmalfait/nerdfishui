'use client'
// based on https://github.com/sergiodxa/flagged/

import * as React from 'react'

export type FeatureGroup = {
	[featureName: string]: boolean | FeatureGroup
}

export type FeatureFlags = string[] | FeatureGroup

const FeatureFlagsContext = React.createContext<FeatureGroup>({})

function transformFlags(features: FeatureFlags) {
	if (!Array.isArray(features)) return features
	return Object.fromEntries(features.map((feature) => [feature, true]))
}

function mergeFeatures(a: FeatureGroup, b: FeatureGroup): FeatureGroup {
	return { ...a, ...b }
}

export function FlagsProvider({
	features = {},
	children,
}: {
	features?: FeatureFlags
	children: React.ReactNode
}) {
	const currentFeatures = useFeatures()
	return (
		<FeatureFlagsContext.Provider
			value={mergeFeatures(
				transformFlags(currentFeatures),
				transformFlags(features),
			)}
		>
			{children}
		</FeatureFlagsContext.Provider>
	)
}

// Custom Hook API
export function useFeatures(): FeatureGroup {
	return React.useContext(FeatureFlagsContext)
}

// Custom Hook API
export function useFeature(name: string): boolean | FeatureGroup {
	const features = useFeatures()
	if (Array.isArray(features)) return features.includes(name)
	if (typeof features[name] === 'boolean') return features[name]

	let featureGroup: FeatureGroup | boolean = structuredClone(features)
	for (const featureName of name.split('/')) {
		if (typeof featureGroup === 'boolean') return featureGroup
		if (featureGroup[featureName] === undefined) return false
		featureGroup = featureGroup[featureName]
	}

	return featureGroup
}

// Render Prop API
export function Feature({
	name,
	children,
	render = children,
}: {
	name: string
	children?:
		| React.ReactNode
		| ((hasFeature: boolean | FeatureGroup) => React.ReactElement)
	render?:
		| React.ReactNode
		| ((hasFeature: boolean | FeatureGroup) => React.ReactElement)
}) {
	const hasFeature = useFeature(name)
	if (typeof render === 'function') return render(hasFeature)
	if (!hasFeature) return null
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <React.Fragment>{render}</React.Fragment>
}

export type FeatureProps = React.ComponentPropsWithoutRef<typeof Feature>
