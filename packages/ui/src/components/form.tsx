'use client'

import { cx } from '@nerdfish/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import {
	Controller,
	type ControllerProps,
	type FieldPath,
	type FieldValues,
	FormProvider,
	useFormContext,
} from 'react-hook-form'
import { Description, ErrorDescription } from './description'
import { Field } from './field'
import { type InputProps } from './input'
import { Label } from './label'

const Form = FormProvider

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)
const FormItemContext = React.createContext<FormItemContextValue | null>(null)

const FormField = <
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
	...props
}: ControllerProps<TFieldValues, TName>) => {
	return (
		<FormFieldContext.Provider value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext.Provider>
	)
}

const useFormField = () => {
	const fieldContext = React.useContext(FormFieldContext)
	const itemContext = React.useContext(FormItemContext)
	const { getFieldState, formState } = useFormContext()

	if (!fieldContext)
		throw new Error('useFormField should be used within <FormField>')
	if (!itemContext)
		throw new Error('useFormField should be used within <FormItem>')

	const fieldState = getFieldState(fieldContext.name, formState)

	const { id } = itemContext

	return {
		id,
		name: fieldContext.name,
		formItemId: `${id}-form-item`,
		formDescriptionId: `${id}-form-item-description`,
		formMessageId: `${id}-form-item-message`,
		...fieldState,
	}
}

type FormItemContextValue = {
	id: string
}

const FormItem = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
	const id = React.useId()

	return (
		<FormItemContext.Provider value={{ id }}>
			<Field ref={ref} {...props} />
		</FormItemContext.Provider>
	)
})
FormItem.displayName = 'FormItem'

const FormLabel = React.forwardRef<
	React.ElementRef<typeof Label>,
	React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => {
	const { error, formItemId } = useFormField()

	return (
		<Label
			ref={ref}
			className={cx(error && 'text-danger', className)}
			htmlFor={formItemId}
			{...props}
		/>
	)
})
FormLabel.displayName = 'FormLabel'

const FormControl = React.forwardRef<
	React.ElementRef<typeof Slot>,
	React.ComponentPropsWithoutRef<typeof Slot> & {
		variant?: InputProps['variant']
	}
>(({ className, ...props }, ref) => {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

	return (
		<Slot
			ref={ref}
			id={formItemId}
			aria-describedby={
				!error
					? `${formDescriptionId}`
					: `${formDescriptionId} ${formMessageId}`
			}
			aria-invalid={!!error}
			variant={props.variant ?? (error ? 'error' : 'default')}
			{...props}
		/>
	)
})
FormControl.displayName = 'FormControl'

const FormDescription = React.forwardRef<
	React.ElementRef<typeof Description>,
	React.ComponentPropsWithoutRef<typeof Description>
>((props, ref) => {
	const { formDescriptionId } = useFormField()

	return <Description ref={ref} id={formDescriptionId} {...props} />
})
FormDescription.displayName = 'FormDescription'

const FormMessage = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ children, ...props }, ref) => {
	const { error, formMessageId } = useFormField()
	const body = error ? String(error.message) : children

	if (!body) {
		return null
	}

	return (
		<ErrorDescription ref={ref} id={formMessageId} {...props}>
			{body}
		</ErrorDescription>
	)
})
FormMessage.displayName = 'FormMessage'

export {
	useFormField,
	Form,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	FormField,
}

export type FormProps = React.ComponentPropsWithoutRef<typeof Form>
export type FormItemProps = React.ComponentPropsWithoutRef<typeof FormItem>
export type FormLabelProps = React.ComponentPropsWithoutRef<typeof FormLabel>
export type FormControlProps = React.ComponentPropsWithoutRef<
	typeof FormControl
>
export type FormDescriptionProps = React.ComponentPropsWithoutRef<
	typeof FormDescription
>
export type FormMessageProps = React.ComponentPropsWithoutRef<
	typeof FormMessage
>
export type FormFieldProps = React.ComponentPropsWithoutRef<typeof FormField>
