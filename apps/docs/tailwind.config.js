const path = require('path')

const defaultTheme = require('tailwindcss/defaultTheme')

const fromRoot = p => path.join(__dirname, p)

module.exports = {
  content: [
    fromRoot('./node_modules/@nerdfish/**/*.{js,ts,jsx,tsx}'), // path to nerdfishui
    fromRoot('./components/**/*.{js,jsx,ts,tsx}'),
    fromRoot('./context/**/*.{js,jsx,ts,tsx}'),
    fromRoot('./styles/**/*.{js,jsx,ts,tsx}'),
    fromRoot('./pages/**/*.{js,jsx,ts,tsx,mdx}'),
    fromRoot('./mdx/**/*.{js,jsx,ts,tsx}'),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: ['Inter var', 'Font Sans', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', 'Font Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  typography: theme => ({
    DEFAULT: {
      css: {
        h1: {
          ...theme('fontSize.2xl')[1],
          marginBottom: theme('spacing.2'),
        },
      },
    },
  }),
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@nerdfish/tailwind-config'),
  ],
}
