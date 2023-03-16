const path = require('path')

module.exports = {
  root: true,
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
  extends: ['daren', 'daren/react', 'daren/jsx-a11y', 'daren/tailwind'],
}
