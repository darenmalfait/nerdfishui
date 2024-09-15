'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	CardContent,
	CardHeader,
	CardRoot,
	CardTitle,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	toast,
} from '@nerdfish/ui'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const validationSchema = z.object({
	email: z.string().email(),
})

type FormData = z.infer<typeof validationSchema>

export function InputDemo() {
	const form = useForm<FormData>({
		resolver: zodResolver(validationSchema),
	})

	function onSubmit(data: FormData) {
		toast.success(`Form submitted successfully: ${data.email}`)
	}

	return (
		<CardRoot>
			<CardHeader>
				<CardTitle>Submit your email</CardTitle>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="flex flex-col gap-6"
						noValidate
					>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormDescription>Your email address</FormDescription>
									<FormControl>
										<Input
											{...field}
											type="email"
											placeholder="Example: john@doe.com"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit">Submit</Button>
					</form>
				</Form>
			</CardContent>
		</CardRoot>
	)
}
