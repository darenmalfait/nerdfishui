'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Select, toast } from '@nerdfish/ui'
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
	const {
		handleSubmit,
		register,
		control,
		setValue,
		formState: { errors },
	} = useForm<ProfileFormData>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	})

	const { fields, append } = useFieldArray({
		name: 'urls',
		control,
	})

	function onSubmit(data: ProfileFormData) {
		toast.success(
			<div>
				<span className="font=bold">You submitted the following values:</span>
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">{JSON.stringify(data, null, 2)}</code>
				</pre>
			</div>,
		)
	}

	return (
		<form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-8">
			<Input
				label="Username"
				description="This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days."
				placeholder="nerdfish"
				{...register('username')}
				error={errors.username?.message}
			/>

			<Select
				options={[
					{ value: 'm@example.com', label: 'm@example.com' },
					{ value: 'm@google.com', label: 'm@google.com' },
					{ value: 'm@support.com', label: 'm@support.com' },
				]}
				{...register('email')}
				onChange={(value) => {
					setValue('email', value)
				}}
				label="Email"
				description="This is your email address. You can only change this once every 30 days."
				placeholder="Select a verified email to display"
				error={errors.email?.message}
			/>

			<Input
				type="textarea"
				{...register('bio')}
				description="Tell us a little bit about yourself"
				label="Bio"
				error={errors.bio?.message}
			/>

			<div className="flex flex-col gap-4">
				{fields.map((field, index) => (
					<Input
						key={field.id}
						{...field}
						{...register(`urls.${index}.value`)}
						label="URL"
						description="Add links to your website, blog, or social media profiles."
						error={errors.urls?.[index]?.value?.message}
					/>
				))}

				<Button
					type="button"
					variant="outline"
					size="sm"
					className="mt-2"
					onClick={() => append({ value: '' })}
				>
					Add URL
				</Button>
			</div>
			<Button type="submit">Update profile</Button>
		</form>
	)
}
