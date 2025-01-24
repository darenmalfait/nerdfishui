import { config as defaultConfig } from '@nerdfish/config/eslint'

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	{
		ignores: [
			'**/.next/**',
			'**/.turbo/**',
			'**/dist/**',
			'**/next-env.d.ts',
			'**/next/**',
			'**/public/**',
		],
	},
]
