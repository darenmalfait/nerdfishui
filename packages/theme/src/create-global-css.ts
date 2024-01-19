import fs from 'fs'

import {dark, light} from './colors'
import {toCSSVar} from './to-css-var'

function createGlobalCssVars() {
  const lightTheme = toCSSVar({
    colors: light,
  })

  const darkTheme = toCSSVar({
    colors: dark,
  })

  const lightVars = Object.keys(lightTheme.cssVars)
    .map(key => `${key}: ${lightTheme.cssVars[key]};`)
    .join('\n')

  const darkVars = Object.keys(darkTheme.cssVars)
    .map(key => `${key}: ${darkTheme.cssVars[key]};`)
    .join('\n')

  const content = `:root {\n${lightVars}\n}\n\n.dark{\n${darkVars}\n}`

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }

  fs.writeFile('./dist/nerdfishui.css', content, (err: any) => {
    if (err) console.error(err)
    // file written successfully
  })
}

createGlobalCssVars()
