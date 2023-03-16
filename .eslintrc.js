module.exports = {
  root: true,
  extends: ['daren'],
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
