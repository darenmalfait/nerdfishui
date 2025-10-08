import z from 'zod'

export const spacingSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	variable: z.string(),
})

export type Spacing = z.infer<typeof spacingSchema>
