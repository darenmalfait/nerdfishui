import { config as defaultConfig } from '@nerdfish/config/eslint'

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	{
		ignores: [
			'**/.turbo**',
			'**/.next**',
			'**/.changeset**',
			'**/.contentlayer/**',
			'**/dist/**',
			'**/next/**',
			'**/next-env.d.ts',
			'**/__generated__/**',
			'**/public/**',
		],
	},
]
