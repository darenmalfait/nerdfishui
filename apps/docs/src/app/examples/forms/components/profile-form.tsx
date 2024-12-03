'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
	Button,
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
	toast,
} from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

const profileFormSchema = z.object({
	username: z
		.string()
		.min(2, {
			message: 'Username must be at least 2 characters.',
		})
		.max(30, {
			message: 'Username must not be longer than 30 characters.',
		}),
	email: z
		.string({
			required_error: 'Please select an email to display.',
		})
		.email(),
	bio: z.string().max(160).min(4),
	urls: z
		.array(
			z.object({
				value: z.string().url({ message: 'Please enter a valid URL.' }),
			}),
		)
		.optional(),
})

type ProfileFormData = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormData> = {
	bio: 'I like to build things.',
	urls: [
		{ value: 'https://nerdfish.be' },
		{ value: 'http://twitter.com/darenmalfait' },
	],
}

export function ProfileForm() {
	const form = useForm<ProfileFormData>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	})

	const { fields, append } = useFieldArray({
		name: 'urls',
		control: form.control,
	})

	function onSubmit(data: ProfileFormData) {
		toast.success(
			<div>
				<span className="font=bold">You submitted the following values:</span>
				<pre className="mr-sm rounded-container bg-inverted p-md w-[340px]">
					<code className="text-inverted">{JSON.stringify(data, null, 2)}</code>
				</pre>
			</div>,
		)
	}

	return (
		<Form {...form}>
			<form
				noValidate
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Username
								<FormDescription>
									This is your public display name. It can be your real name or
									a pseudonym. You can only change this once every 30 days.
								</FormDescription>
							</FormLabel>

							<FormControl>
								<Input placeholder="nerdfish" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Email
								<FormDescription>
									This is your email address. You can only change this once
									every 30 days.
								</FormDescription>
							</FormLabel>

							<FormControl>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Select a verified email to display" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value="m@example.com">m@example.com</SelectItem>
										<SelectItem value="m@google.com">m@google.com</SelectItem>
										<SelectItem value="m@support.com">m@support.com</SelectItem>
									</SelectContent>
								</Select>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="bio"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								Bio
								<FormDescription>
									Tell us a little bit about yourself.
								</FormDescription>
							</FormLabel>

							<FormControl>
								<Textarea {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div>
					{fields.map((urlField, index) => (
						<FormField
							control={form.control}
							key={urlField.id}
							name={`urls.${index}.value`}
							render={({ field }) => (
								<FormItem>
									<FormLabel className={cx(index !== 0 && 'sr-only')}>
										URLs
										<FormDescription className={cx(index !== 0 && 'sr-only')}>
											Add links to your website, blog, or social media profiles.
										</FormDescription>
									</FormLabel>

									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button
						type="button"
						variant="outline"
						className="mt-md mr-sm"
						onClick={() => append({ value: '' })}
					>
						Add URL
					</Button>
				</div>

				<Button type="submit">Update profile</Button>
			</form>
		</Form>
	)
}
