/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve('@nerdfish/lint/node')],
  parserOptions: {
    project: `${__dirname}/tsconfig.json`,
  },
}
