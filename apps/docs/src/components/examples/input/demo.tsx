'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, toast } from '@nerdfish/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const validationSchema = z.object({
	email: z.string().email(),
})

type FormData = z.infer<typeof validationSchema>

export function InputDemo() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(validationSchema),
	})

	function onSubmit(data: FormData) {
		toast.success(`Form submitted successfully: ${data.email}`)
	}

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex w-full flex-col gap-4"
			noValidate
		>
			<Input
				{...register('email')}
				label="Email"
				description="Your email address"
				type="email"
				placeholder="Example: john@doe.com"
				error={errors.email?.message}
			/>
			<Button type="submit">Submit</Button>
		</form>
	)
}
