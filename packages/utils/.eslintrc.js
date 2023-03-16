const path = require('path')

module.exports = {
  root: true,
  extends: ['daren', 'daren/react', 'daren/jsx-a11y', 'daren/tailwind'],
  parserOptions: {
    project: path.join(__dirname, 'tsconfig.json'),
  },
}
