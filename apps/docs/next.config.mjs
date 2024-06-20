import {withContentlayer} from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: !!process.env.CI,
  },
  /* We already do linting on GH actions */
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
  images: {
    remotePatterns: [
      {hostname: 'avatars.githubusercontent.com'},
      {hostname: 'images.unsplash.com'},
    ],
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    serverComponentsExternalPackages: ['@floating-ui/dom'],
  },
}

export default withContentlayer(nextConfig)
