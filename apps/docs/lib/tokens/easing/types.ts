import z from 'zod'

export const easingSchema = z.object({
	name: z.string(),
	variable: z.string(),
	value: z.string(),
	className: z.string(),
})

export type Easing = z.infer<typeof easingSchema>
