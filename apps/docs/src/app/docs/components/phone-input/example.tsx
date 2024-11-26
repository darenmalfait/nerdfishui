'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	CardContent,
	CardHeader,
	Card,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	PhoneInput,
	toast,
	LabelAsterisk,
} from '@nerdfish/ui'
import { useForm } from 'react-hook-form'
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
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="gap-md flex flex-col"
						noValidate
					>
						<FormField
							control={form.control}
							name="phone"
							render={({ field }) => (
								<FormItem>
									<FormLabel>
										Phone number
										<LabelAsterisk />
										<FormDescription>Your phone number</FormDescription>
									</FormLabel>

									<FormControl>
										<PhoneInput variant="default" inputSize="lg" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
