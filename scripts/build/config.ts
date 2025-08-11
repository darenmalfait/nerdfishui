import { resolve } from 'node:path'
import alias, { type Alias } from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import glob from 'fast-glob'
import type { Plugin, RollupOptions } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import { preserveDirectives } from 'rollup-plugin-preserve-directives'

interface Options {
	dir: string
	aliases: Alias[]
}

export async function getConfig(options: Options): Promise<RollupOptions> {
	const { dir, aliases } = options

	const packageJson = await import(resolve(dir, 'package.json'))

	const isCli = packageJson.bin !== undefined

	const plugins: Plugin[] = [
		nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
		alias({ entries: aliases }),
		esbuild({
			sourceMap: true,
			tsconfig: resolve(dir, 'tsconfig.json'),
			platform: isCli ? 'node' : 'browser',
		}),
		replace({ preventAssignment: true }),
		preserveDirectives(),
		{
			name: '@rollup-plugin/remove-empty-chunks',
			generateBundle(_, bundle) {
				for (const [name, chunk] of Object.entries(bundle)) {
					if (chunk.type === 'chunk' && chunk.code.length === 0) {
						// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
						delete bundle[name]
					}
				}
			},
		},
	]

	const deps = [
		...Object.keys(packageJson.dependencies ?? {}),
		...Object.keys(packageJson.peerDependencies ?? {}),
	]

	const external = deps.length ? new RegExp(`^(${deps.join('|')})`) : undefined
	const entryFiles = await glob('src/**/*.{ts,tsx}')
	
	// Create input object mapping output names to source files
	const input: Record<string, string> = {}
	for (const file of entryFiles) {
		const outputName = file.replace(/^src\//, '').replace(/\.(ts|tsx)$/, '')
		input[outputName] = resolve(dir, file)
	}

	const outputs: RollupOptions['output'] = [
		{
			format: 'es',
			exports: 'named',
			entryFileNames: '[name].js',
			dir: resolve(dir, 'dist/esm'),
			preserveModules: true,
		},
	]

	if (!isCli) {
		outputs.push({
			format: 'cjs',
			exports: 'named',
			entryFileNames: '[name].cjs',
			dir: resolve(dir, 'dist/cjs'),
			preserveModules: true,
		})
	}

	return {
		input,
		onLog(level, log, handler) {
			if (log.code === 'EMPTY_BUNDLE') return
			return handler(level, log)
		},
		onwarn(warning, warn) {
			if (warning.code === 'SOURCEMAP_ERROR') return
			if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return
			warn(warning)
		},
		output: outputs,
		external,
		plugins,
	}
}
