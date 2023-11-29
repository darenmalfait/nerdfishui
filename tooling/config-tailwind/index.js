/** @type {import('tailwindcss').Config} */
const {fontFamily} = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@nerdfish/tailwind-config'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)', ...fontFamily.sans],
      },
      spacing: {
        18: '4.5rem',
        112: '25rem',
        120: '27rem',
      },
    },
  },
}
