'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nerdfish/react/button'
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@nerdfish/react/field'
import { Input } from '@nerdfish/react/input'
import { toast } from '@nerdfish/react/toast'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const FormSchema = z.object({
	email: z.string().email(),
})

export function InputInvalidExample() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: '',
		},
	})

	function onSubmit(data: z.infer<typeof FormSchema>) {
		toast('You submitted the following values', {
			description: (
				<pre className="rounded-base mt-2 w-[320px] bg-neutral-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		})
	}

	return (
		<form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm">
			<div className="flex flex-col">
				<FieldGroup>
					<Controller
						name="email"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor="form-phone-input-title">Phone</FieldLabel>
								<Input
									type="email"
									placeholder="your email address"
									{...field}
								/>
								{fieldState.invalid ? (
									<FieldError errors={[fieldState.error]} />
								) : null}
							</Field>
						)}
					/>

					<Button className="mt-friends" type="submit">
						Submit
					</Button>
				</FieldGroup>
			</div>
		</form>
	)
}
