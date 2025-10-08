import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: false,
	pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

	typescript: {
		ignoreBuildErrors: true,
	},
	trailingSlash: true,

	/* We already do linting on GH actions */
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		remotePatterns: [
			{ hostname: 'avatars.githubusercontent.com' },
			{ hostname: 'images.unsplash.com' },
			{ hostname: 'cloudflare-ipfs.com' },
			{ hostname: 'avatar.vercel.sh' },
		],
	},
	experimental: {
		optimizePackageImports: [],
	},
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
