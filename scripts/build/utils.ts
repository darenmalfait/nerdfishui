import * as fs from 'node:fs/promises'

export async function fileExists(filePath: string) {
	return fs.stat(filePath).then(
		(stats) => stats.isFile(),
		() => false,
	)
}

export async function fileOrDirExists(filePath: string) {
	return fs.stat(filePath).then(
		(stats) => stats.isFile() || stats.isDirectory(),
		() => false,
	)
}
