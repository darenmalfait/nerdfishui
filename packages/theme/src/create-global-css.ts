import fs from 'fs'

import {colors} from './colors'
import {toCSSVar} from './to-css-var'

function createGlobalCssVars() {
  const theme = toCSSVar({
    colors,
  })

  const vars = Object.keys(theme.cssVars)
    .map(key => `${key}: ${theme.cssVars[key]};`)
    .join('\n')

  const content = `:root {\n${vars}\n}`

  if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist')
  }

  fs.writeFile('./dist/nerdfishui.css', content, (err: any) => {
    if (err) console.error(err)
    // file written successfully
  })
}

createGlobalCssVars()
