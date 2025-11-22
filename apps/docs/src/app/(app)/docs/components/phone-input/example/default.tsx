'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@nerdfish/react/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@nerdfish/react/card'
import {
	Field,
	FieldError,
	FieldGroup,
	FieldLabel,
} from '@nerdfish/react/field'
import { type CountryCode, PhoneInput } from '@nerdfish/react/phone-input'
import { toast } from '@nerdfish/react/toast'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

const validationSchema = z.object({
	phone: z.string().min(10).max(15),
})

type FormData = z.infer<typeof validationSchema>

export function PhoneInputExample() {
	const form = useForm<FormData>({
		resolver: zodResolver(validationSchema),
		defaultValues: {
			phone: '',
		},
	})

	function onSubmit(data: FormData) {
		toast.success(`Form submitted successfully: ${data.phone}`)
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Submit your email</CardTitle>
			</CardHeader>
			<CardContent>
				<form
					id="form-phone-input"
					onSubmit={form.handleSubmit(onSubmit)}
					className="gap-md flex flex-col"
					noValidate
				>
					<FieldGroup>
						<Controller
							name="phone"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor="form-phone-input-title">
										Phone
									</FieldLabel>
									<PhoneInput
										variant="default"
										size="lg"
										{...field}
										value={field.value as CountryCode}
									/>
									{fieldState.invalid ? (
										<FieldError errors={[fieldState.error]} />
									) : null}
								</Field>
							)}
						/>
					</FieldGroup>
				</form>
			</CardContent>
			<CardFooter>
				<Button type="submit" form="form-phone-input">
					Submit
				</Button>
			</CardFooter>
		</Card>
	)
}
