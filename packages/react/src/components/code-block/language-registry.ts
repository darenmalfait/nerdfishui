/**
 * Shared language id → label + optional brand icon id.
 * Aliases (`ts`, `mjs`, …) live here so labels and icon loaders cannot drift.
 */

export type LanguageIconId =
	| 'astro'
	| 'bash'
	| 'c'
	| 'cpp'
	| 'css'
	| 'dart'
	| 'docker'
	| 'go'
	| 'graphql'
	| 'html'
	| 'javascript'
	| 'json'
	| 'kotlin'
	| 'less'
	| 'lua'
	| 'markdown'
	| 'mdx'
	| 'nextjs'
	| 'php'
	| 'prisma'
	| 'python'
	| 'react'
	| 'ruby'
	| 'rust'
	| 'sass'
	| 'scala'
	| 'sql'
	| 'svelte'
	| 'svg'
	| 'swift'
	| 'toml'
	| 'typescript'
	| 'vue'
	| 'wasm'
	| 'yaml'

export interface LanguageEntry {
	label: string
	icon?: LanguageIconId
}

export const LANGUAGES: Record<string, LanguageEntry> = {
	astro: { label: 'Astro', icon: 'astro' },
	bash: { label: 'Bash', icon: 'bash' },
	c: { label: 'C', icon: 'c' },
	'c++': { label: 'C++', icon: 'cpp' },
	cjs: { label: 'JavaScript', icon: 'javascript' },
	cpp: { label: 'C++', icon: 'cpp' },
	css: { label: 'CSS', icon: 'css' },
	cts: { label: 'TypeScript', icon: 'typescript' },
	dart: { label: 'Dart', icon: 'dart' },
	docker: { label: 'Docker', icon: 'docker' },
	dockerfile: { label: 'Docker', icon: 'docker' },
	go: { label: 'Go', icon: 'go' },
	gql: { label: 'GraphQL', icon: 'graphql' },
	graphql: { label: 'GraphQL', icon: 'graphql' },
	html: { label: 'HTML', icon: 'html' },
	javascript: { label: 'JavaScript', icon: 'javascript' },
	js: { label: 'JavaScript', icon: 'javascript' },
	json: { label: 'JSON', icon: 'json' },
	json5: { label: 'JSON', icon: 'json' },
	jsonc: { label: 'JSON', icon: 'json' },
	jsx: { label: 'JSX', icon: 'react' },
	kotlin: { label: 'Kotlin', icon: 'kotlin' },
	kt: { label: 'Kotlin', icon: 'kotlin' },
	less: { label: 'Less', icon: 'less' },
	lua: { label: 'Lua', icon: 'lua' },
	markdown: { label: 'Markdown', icon: 'markdown' },
	md: { label: 'Markdown', icon: 'markdown' },
	mdx: { label: 'MDX', icon: 'mdx' },
	mjs: { label: 'JavaScript', icon: 'javascript' },
	mts: { label: 'TypeScript', icon: 'typescript' },
	nextjs: { label: 'Next.js', icon: 'nextjs' },
	php: { label: 'PHP', icon: 'php' },
	plaintext: { label: 'Text' },
	prisma: { label: 'Prisma', icon: 'prisma' },
	py: { label: 'Python', icon: 'python' },
	python: { label: 'Python', icon: 'python' },
	rb: { label: 'Ruby', icon: 'ruby' },
	react: { label: 'React', icon: 'react' },
	rs: { label: 'Rust', icon: 'rust' },
	ruby: { label: 'Ruby', icon: 'ruby' },
	rust: { label: 'Rust', icon: 'rust' },
	sass: { label: 'Sass', icon: 'sass' },
	scala: { label: 'Scala', icon: 'scala' },
	scss: { label: 'SCSS', icon: 'sass' },
	sh: { label: 'Shell', icon: 'bash' },
	shell: { label: 'Shell', icon: 'bash' },
	sql: { label: 'SQL', icon: 'sql' },
	svelte: { label: 'Svelte', icon: 'svelte' },
	svg: { label: 'SVG', icon: 'svg' },
	swift: { label: 'Swift', icon: 'swift' },
	toml: { label: 'TOML', icon: 'toml' },
	ts: { label: 'TypeScript', icon: 'typescript' },
	tsx: { label: 'TSX', icon: 'react' },
	txt: { label: 'Text' },
	typescript: { label: 'TypeScript', icon: 'typescript' },
	vue: { label: 'Vue', icon: 'vue' },
	wasm: { label: 'WebAssembly', icon: 'wasm' },
	yaml: { label: 'YAML', icon: 'yaml' },
	yml: { label: 'YAML', icon: 'yaml' },
	zsh: { label: 'Zsh', icon: 'bash' },
}

export function resolveLanguage(language?: string): LanguageEntry | undefined {
	if (!language) return undefined
	return LANGUAGES[language.toLowerCase()]
}

export function languageLabel(language?: string): string | undefined {
	if (!language) return undefined
	return resolveLanguage(language)?.label ?? language
}
