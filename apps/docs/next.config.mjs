import nextMDX from '@next/mdx'

import {recmaPlugins} from './mdx/recma.mjs'
import {rehypePlugins} from './mdx/rehype.mjs'
import {remarkPlugins} from './mdx/remark.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
    providerImportSource: '@mdx-js/react',
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    scrollRestoration: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
}

export default withMDX(nextConfig)
