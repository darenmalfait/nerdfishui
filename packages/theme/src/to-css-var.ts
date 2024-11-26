import { pick, walkObject, type Dict, type WithCSSVar } from '@nerdfish/utils'

const tokens = ['colors', 'shape', 'breakpoints'] as const

type ThemeProps = (typeof tokens)[number]

function replaceWhiteSpace(value: string, replaceValue = '-') {
	return value.replace(/\s+/g, replaceValue)
}

function escape(value: string | number) {
	const valueStr = replaceWhiteSpace(value.toString())
	if (valueStr.includes('\\.')) return value
	const isDecimal = !Number.isInteger(parseFloat(value.toString()))

	return isDecimal ? valueStr.replace('.', `\\.`) : value
}

function toVarReference(name: string, fallback?: string) {
	return `var(${escape(name)}${fallback ? `, ${fallback}` : ''})`
}

function toVarDefinition(value: string) {
	return `--${value}`
}

function cssVar(name: string, fallback?: string) {
	const cssVariable = toVarDefinition(name)

	return {
		variable: cssVariable,
		reference: toVarReference(cssVariable, fallback),
	}
}

type TokenHandler = (
	keys: string[],

	value: unknown | { reference: string },
) => ThemeVars

/**
 * Define transformation handlers for ThemeProps
 */
const tokenHandlerMap: Partial<Record<ThemeProps, TokenHandler>> & {
	defaultHandler: TokenHandler
} = {
	defaultHandler: (keys, value) => {
		const lookupKey = keys.join('.')
		const varKey = keys.join('-')

		const { variable, reference } = cssVar(varKey, undefined)

		return {
			cssVars: {
				[variable]: value,
			},
			cssMap: {
				[lookupKey]: {
					value,
					var: variable,
					varRef: reference,
				},
			},
		}
	},
}

interface ThemeVars {
	cssVars: Dict
	cssMap: Dict
}

function createThemeVars(target: Dict) {
	const context: ThemeVars = {
		cssMap: {},
		cssVars: {},
	}

	walkObject(target, (value, path) => {
		const handler = tokenHandlerMap.defaultHandler

		const { cssVars, cssMap } = handler(path, value)
		Object.assign(context.cssVars, cssVars)
		Object.assign(context.cssMap, cssMap)
	})

	return context
}

function extractTokens(theme: Dict) {
	return pick(theme, tokens as unknown as string[])
}

function omitVars(rawTheme: Dict) {
	const { cssMap, cssVars, breakpoints, ...cleanTheme } = rawTheme
	return cleanTheme
}

function toCSSVar<T extends Dict>(rawTheme: T) {
	/**
	 * In the case the theme has already been converted to css-var (e.g extending the theme),
	 * we can omit the computed css vars and recompute it for the extended theme.
	 */
	const theme = omitVars(rawTheme)

	// omit components and breakpoints from css variable map
	const extractedTokens = extractTokens(theme)

	const {
		/**
		 * This is more like a dictionary of tokens users will type `green.500`,
		 * and their equivalent css variable.
		 */
		cssMap,
		/**
		 * The extracted css variables will be stored here
		 */
		cssVars,
	} = createThemeVars(extractedTokens)

	Object.assign(theme, {
		cssVars,
		cssMap,
	})

	return theme as WithCSSVar<T>
}

export { toCSSVar }
