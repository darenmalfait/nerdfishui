import fs from 'fs'

import { breakpoints } from './breakpoints'
import { dark, light } from './colors'
import { shape } from './shape'
import { toCSSVar } from './to-css-var'

function createGlobalCssVars() {
	const baseTheme = toCSSVar({
		colors: light,
		breakpoints,
		shape,
	})

	const darkTheme = toCSSVar({
		colors: dark,
	})

	const baseVars = Object.keys(baseTheme.cssVars)
		.map((key) => `${key}: ${baseTheme.cssVars[key]};`)
		.join('\n')

	const darkVars = Object.keys(darkTheme.cssVars)
		.map((key) => `${key}: ${darkTheme.cssVars[key]};`)
		.join('\n')

	const content = `:root {\n${baseVars}\n}\n\n.dark{\n${darkVars}\n}`

	if (!fs.existsSync('./dist')) {
		fs.mkdirSync('./dist')
	}

	fs.writeFile('./dist/nerdfishui.css', content, (err: any) => {
		if (err) console.error(err)
		// file written successfully
	})
}

createGlobalCssVars()
