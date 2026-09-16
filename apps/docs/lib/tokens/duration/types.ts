import z from 'zod'

export const durationSchema = z.object({
	name: z.string(),
	variable: z.string(),
	ms: z.string(),
	className: z.string(),
})

export type Duration = z.infer<typeof durationSchema>

export const durationGroupSchema = z.object({
	title: z.string(),
	description: z.string().optional(),
	durations: z.array(durationSchema),
})

export type DurationGroup = z.infer<typeof durationGroupSchema>
