import {defineConfig, Options} from 'tsup'

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
    // These are client components. They will get the 'use client' at the top.
    entry: {index: 'src/index.tsx'},
    esbuildOptions(o) {
      o.banner = {
        js: '"use client"',
      }
    },
    external: ['react'],
    outDir: 'dist',
  },
])
