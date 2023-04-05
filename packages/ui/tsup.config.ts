import {defineConfig} from 'tsup'

export default defineConfig(options => ({
  entry: ['src/index.tsx'],
  format: ['esm', 'cjs'],
  treeshake: true,
  splitting: true,
  dts: true,
  minify: true,
  clean: true,
  external: ['react'],
  esbuildOptions(o) {
    o.inject?.push('./scripts/inject.js')
  },
  ...options,
}))
