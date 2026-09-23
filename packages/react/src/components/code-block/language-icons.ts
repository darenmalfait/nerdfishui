/**
 * Language → brand icon path data. Loaded on demand so `@nerdfish/react/code-block`
 * does not pay for icons until a default language icon mounts (`icon={false}` skips).
 * Paths render in `currentColor` (no brand hex — dark surfaces kill logos).
 * Path/slug literals are vendored (no `simple-icons` runtime dependency).
 */

import { type LanguageIcon } from './language-icon-types'
import { type LanguageIconId, resolveLanguage } from './language-registry'

export type { LanguageIcon } from './language-icon-types'

type IconModule = { default: LanguageIcon }

/** One dynamic import per icon file — Rollup emits separate chunks. */
const ICON_LOADERS: Record<LanguageIconId, () => Promise<IconModule>> = {
	astro: () => import('./icons/astro'),
	bash: () => import('./icons/bash'),
	c: () => import('./icons/c'),
	cpp: () => import('./icons/cpp'),
	css: () => import('./icons/css'),
	dart: () => import('./icons/dart'),
	docker: () => import('./icons/docker'),
	go: () => import('./icons/go'),
	graphql: () => import('./icons/graphql'),
	html: () => import('./icons/html'),
	javascript: () => import('./icons/javascript'),
	json: () => import('./icons/json'),
	kotlin: () => import('./icons/kotlin'),
	less: () => import('./icons/less'),
	lua: () => import('./icons/lua'),
	markdown: () => import('./icons/markdown'),
	mdx: () => import('./icons/mdx'),
	nextjs: () => import('./icons/nextjs'),
	php: () => import('./icons/php'),
	prisma: () => import('./icons/prisma'),
	python: () => import('./icons/python'),
	react: () => import('./icons/react'),
	ruby: () => import('./icons/ruby'),
	rust: () => import('./icons/rust'),
	sass: () => import('./icons/sass'),
	scala: () => import('./icons/scala'),
	sql: () => import('./icons/sql'),
	svelte: () => import('./icons/svelte'),
	svg: () => import('./icons/svg'),
	swift: () => import('./icons/swift'),
	toml: () => import('./icons/toml'),
	typescript: () => import('./icons/typescript'),
	vue: () => import('./icons/vue'),
	wasm: () => import('./icons/wasm'),
	yaml: () => import('./icons/yaml'),
}

const cache = new Map<string, LanguageIcon | null>()

/** Resolve a language id to a brand icon, or `null` when unmapped. */
export async function loadLanguageIcon(
	language: string,
): Promise<LanguageIcon | null> {
	const key = language.toLowerCase()
	if (cache.has(key)) {
		return cache.get(key) ?? null
	}

	const iconId = resolveLanguage(key)?.icon
	if (!iconId) {
		cache.set(key, null)
		return null
	}

	const { default: icon } = await ICON_LOADERS[iconId]()
	cache.set(key, icon)
	return icon
}
