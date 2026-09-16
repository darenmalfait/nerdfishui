import { config as defaultConfig } from '@nerdfish/config/eslint'
import conventionsRules from '@nerdfish/config/eslint/conventions'
import testingRules from '@nerdfish/config/eslint/testing'
import bddRules from '@nerdfish/config/eslint/testing/bdd'

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	...conventionsRules,
	...testingRules,
	...bddRules,
	{
		files: ['**/*.ts?(x)', '**/*.js?(x)'],
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	{
		// Blume islands are referenced by PascalCase component name in MDX.
		files: ['apps/docs/islands/**/*.{ts,tsx}'],
		rules: {
			'unicorn/filename-case': 'off',
		},
	},
	{
		ignores: [
			'**/.changeset/**',
			'**/__generated__/**',
			'**/.next/**',
			'**/.blume/**',
			'**/.blume-verify/**',
			'**/.react-email/**',
			'**/.turbo/**',
			'**/dist/**',
			'**/next-env.d.ts',
			'**/next/**',
			'**/public/**',
			'**/generated/**',
			'**/.content-collections/**',
			'**/.obsidian/**',
			'**/.makemd/**',
			'**/.space/**',
			'**/.trash/**',
		],
	},
]
