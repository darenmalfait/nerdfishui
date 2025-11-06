import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import { rmSync } from 'node:fs'
import set from 'lodash-es/set'
import { resolve } from 'node:path'
import { join } from 'node:path/posix'
import type { Alias } from '@rollup/plugin-alias'
import * as rollup from 'rollup'
import { getConfig } from './config.js'
import { generateTypes } from './tsc.js'
import * as fs from 'node:fs/promises'
import * as path from 'node:path'
import { fileExists, fileOrDirExists } from './utils.js'

function getOutExtension(bundle: 'esm' | 'cjs', isType = false) {
	if (isType) {
		return '.d.ts'
	}

	return bundle === 'esm' ? '.js' : '.cjs'
}

async function createExportsFor({
	basePath,
	importPath,
	key,
	dir,
	bundle,
	newExports,
	typeOutExtension,
	outExtension,
}: {
	basePath: string
	importPath: string
	key: string
	dir: string
	bundle: 'esm' | 'cjs'
	newExports: Record<string, string | Record<string, string> | null>
	typeOutExtension: string
	outExtension: string
	typesDirPrefix: string
}) {
	const exportFileExists = importPath.includes('*')
		? true
		: await fs.stat(path.join(basePath, importPath)).then(
				(stats) => stats.isFile() || stats.isDirectory(),
				() => false,
			)

	if (!exportFileExists) {
		throw new Error(
			`The import path "${importPath}" for export "${key}" does not exist in the package. Either remove the export or add the file/folder to the package.`,
		)
	}
	const srcPath = importPath.replace(
		/\.\/src\//,
		`./${dir === '.' ? '' : `${dir}/`}`,
	)
	const typesPath = importPath.replace(/\.\/src\//, `./types/`)
	const ext = path.extname(srcPath)

	if (ext === '.css' || ext === '.mjs') {
		// remove dir from srcPath
		const outPath = srcPath.replace(`./${dir}/`, './')
		set(newExports, [key], outPath)
		return {
			path: [key],
			importPath: outPath,
		}
	}

	return {
		path: [key, bundle === 'cjs' ? 'require' : 'import'],
		importPath: {
			types: typesPath.replace(ext, typeOutExtension),
			default: srcPath.replace(ext, outExtension),
		},
	}
}

async function writePackageJson({
	basePath,
	packageJson,
	outputDir,
	name,
}: {
	basePath: string
	packageJson: any
	outputDir: string
	name: string
}) {
	delete packageJson.scripts
	delete packageJson.publishConfig?.directory
	delete packageJson.devDependencies
	delete packageJson.imports

	packageJson.type = packageJson.type || 'commonjs'

	const originalExports: Record<
		string,
		string | Record<string, string> | null
	> = packageJson.exports || {}
	delete packageJson.exports

	const newExports: Record<string, string | Record<string, string> | null> = {
		'./package.json': './package.json',
	}

	const bundles: ('esm' | 'cjs')[] = ['esm', 'cjs']

	await Promise.all(
		bundles.map(async (bundle) => {
			const dir = bundle
			const typesDir = 'types'

			const outExtension = getOutExtension(bundle)
			const typeOutExtension = getOutExtension(bundle, true)

			const typeFileExists = await fileExists(
				path.join(join(outputDir, typesDir), `index${typeOutExtension}`),
			)
			const indexFileExists = await fileExists(
				path.join(outputDir, dir, `index${outExtension}`),
			)

			const exportDir = `./${dir}/index${outExtension}`
			const typeExportDir = `./${typesDir}/index${typeOutExtension}`

			if (indexFileExists) {
				// skip `packageJson.module` to support parcel and some older bundlers

				set(newExports, ['.', bundle === 'cjs' ? 'require' : 'import'], {
					types: typeFileExists ? typeExportDir : undefined,
					default: exportDir,
				})
			}

			if (typeFileExists && bundle === 'cjs') {
				packageJson.types = typeExportDir
			}

			const exportKeys = Object.keys(originalExports)

			// need to maintain the order of exports
			for (const key of exportKeys) {
				const importPath = originalExports[key] as string

				if (!importPath) {
					set(newExports, [key], null)
					return
				}
				// eslint-disable-next-line no-await-in-loop
				const res = await createExportsFor({
					basePath,
					importPath,
					key,
					dir,
					bundle,
					newExports,
					typeOutExtension,
					typesDirPrefix: typesDir,
					outExtension,
				})

				set(newExports, res.path, res.importPath)
			}
		}),
	)

	packageJson.exports = newExports

	await fs.writeFile(
		path.join(outputDir, 'package.json'),
		JSON.stringify(packageJson, null, 2),
		'utf-8',
	)

	console.info(`[${name}][JS] Written package.json ✅`)
}

async function recursiveCopy({
	source,
	target,
}: {
	source: string
	target: string
}) {
	try {
		await fs.cp(source, target, { recursive: true })
		// eslint-disable-next-line no-console
		console.log(`Copied ${source} to ${target}`)
		return true
	} catch (err: any) {
		if (/** @type {{ code: string }} */ err.code !== 'ENOENT') {
			throw err
		}
		console.warn(`Source does not exist: ${source}`)

		throw err
	}
}

async function copyFiles(dir: string) {
	const workspaceDir = await findWorkspaceDir(dir)
	if (!workspaceDir) throw new Error('Workspace directory not found')

	const packageJsonModule = await import(resolve(dir, 'package.json'))
	const packageJson = { ...packageJsonModule.default }
	const outputDir = join(dir, packageJson.publishConfig?.directory || 'dist')

	const filesToCopy: string[] = []

	const localOrRootFiles = [
		[path.join(dir, 'README.md'), path.join(workspaceDir, 'README.md')],
		[path.join(dir, 'LICENSE'), path.join(workspaceDir, 'LICENSE')],
		[path.join(dir, 'CHANGELOG.md'), path.join(workspaceDir, 'CHANGELOG.md')],
	]

	await Promise.all(
		localOrRootFiles.map(async (files) => {
			for (const file of files) {
				// eslint-disable-next-line no-await-in-loop
				if (await fileOrDirExists(file)) {
					filesToCopy.push(file)
					break
				}
			}
		}),
	)

	if (filesToCopy.length) {
		await Promise.all(
			filesToCopy.map(async (file) => {
				const [sourcePath, targetPath] = path.isAbsolute(file)
					? [file, undefined]
					: file.split(':')
				const resolvedSourcePath = path.resolve(dir, sourcePath)
				const resolvedTargetPath = path.resolve(
					outputDir,
					targetPath ?? path.basename(file),
				)
				return recursiveCopy({
					source: resolvedSourcePath,
					target: resolvedTargetPath,
				})
			}),
		)
	}

	console.log(`Copied ${filesToCopy.length} files.`)
}

interface BuildOptions {
	dir: string
	name: string
	watch?: boolean
	clean?: boolean
	dts?: boolean
	aliases?: Alias[]
}

export async function buildProject(options: BuildOptions) {
	const { dir, name, watch, clean, dts, aliases = [] } = options
	console.info(`[${name}] Building...`)

	const packageJsonModule = await import(resolve(dir, 'package.json'))
	const packageJson = { ...packageJsonModule.default }
	const outputDir = join(dir, packageJson.publishConfig?.directory || 'dist')

	if (clean) {
		rmSync(outputDir, { recursive: true, force: true })
	}

	const config = await getConfig({ dir, aliases })

	if (watch) {
		config.watch = {
			include: config.input as string[],
			chokidar: { ignoreInitial: true },
		}

		const watcher = rollup.watch(config)
		console.info(`[${name}][JS] Watching source files...`)

		watcher.on('change', () => {
			console.info(`[${name}][JS] File changed, rebuilding...`)
		})
	} else {
		const build = await rollup.rollup(config)

		const outputs: rollup.OutputOptions[] = Array.isArray(config.output)
			? config.output
			: // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
				[config.output!]

		await Promise.all(outputs.map((output) => build.write(output)))

		console.info(`[${name}][JS] Generated CJS and ESM files ✅`)

		if (dts) {
			await generateTypes(dir)
			console.info(`[${name}][DTS] Generated type definitions ✅`)
		}

		await writePackageJson({
			basePath: dir,
			packageJson,
			outputDir: outputDir,
			name,
		})

		await copyFiles(dir)
	}
}
