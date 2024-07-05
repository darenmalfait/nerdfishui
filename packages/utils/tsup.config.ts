import { defineConfig, type Options } from 'tsup'

const cfg: Options = {
	clean: false,
	dts: true,
	format: ['esm', 'cjs'],
	minify: true,
	sourcemap: false,
	splitting: false,
	target: 'es2022',
	treeshake: false,
}

export default defineConfig([
	{
		...cfg,
		entry: { index: 'src/index.tsx' },
		external: ['react'],
		outDir: 'dist',
	},
])
