import z from 'zod'

export const radiusSchema = z.object({
	name: z.string(),
	description: z.string().optional(),
	variable: z.string(),
})

export type Radius = z.infer<typeof radiusSchema>
