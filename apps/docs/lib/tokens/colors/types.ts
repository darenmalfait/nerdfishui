import z from 'zod'

export const colorSchema = z.object({
	name: z.string(),
	className: z.string(),
	foreground: z.string(),
	variable: z.string(),
})

export type Color = z.infer<typeof colorSchema>

export const colorPaletteSchema = z.object({
	name: z.string(),
	colors: z.array(colorSchema),
})

export type ColorPalette = z.infer<typeof colorPaletteSchema>
