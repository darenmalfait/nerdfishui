export function hexToRgb(hexColor: string) {
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4), 16)

  return {r, g, b}
}

export function getLuminance(color: {r: number; g: number; b: number}) {
  const [lumR, lumG, lumB] = [color.r, color.g, color.b].map(component => {
    const proportion = component / 255

    return proportion <= 0.03928
      ? proportion / 12.92
      : ((proportion + 0.055) / 1.055) ** 2.4
  })

  return 0.2126 * lumR + 0.7152 * lumG + 0.0722 * lumB
}

export function getContrastRatio(color1: string, color2: string) {
  const luminance1 = getLuminance(hexToRgb(color1))
  const luminance2 = getLuminance(hexToRgb(color2))

  const lighterLum = Math.max(luminance1, luminance2)
  const darkerLum = Math.min(luminance1, luminance2)

  return (lighterLum + 0.05) / (darkerLum + 0.05)
}

export function getContrastColor(hexColor: string) {
  const black = '#000000'
  const white = '#ffffff'

  const ratio1 = getContrastRatio(hexColor, black)
  const ratio2 = getContrastRatio(hexColor, white)

  return ratio2 > 1.79 ? white : ratio1 > ratio2 ? black : white
}
