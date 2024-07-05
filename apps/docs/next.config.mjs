import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
	trailingSlash: true,
	swcMinify: true,
	typescript: {
		ignoreBuildErrors: !!process.env.CI,
	},
	/* We already do linting on GH actions */
	eslint: {
		ignoreDuringBuilds: !!process.env.CI,
	},
	images: {
		remotePatterns: [
			{ hostname: 'avatars.githubusercontent.com' },
			{ hostname: 'images.unsplash.com' },
		],
	},
	experimental: {
		serverComponentsExternalPackages: ['@floating-ui/dom'],
	},
}

export default withContentlayer(nextConfig)
