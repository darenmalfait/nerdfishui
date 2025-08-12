'use client'

import { useRender } from '@base-ui-components/react'
import { cx } from '@nerdfish/utils'
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
import { Field, type FieldProps } from './field'
import { type InputProps } from './input'
import { Label } from './label'

export type FormProps = React.ComponentProps<typeof FormProvider>
export const Form = FormProvider

type FormFieldContextValue<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
	name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null)
const FormItemContext = React.createContext<FormItemContextValue | null>(null)

export type FormFieldProps<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = ControllerProps<TFieldValues, TName>

export function FormField<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({ ...props }: FormFieldProps<TFieldValues, TName>) {
	return (
		<FormFieldContext value={{ name: props.name }}>
			<Controller {...props} />
		</FormFieldContext>
	)
}

export function useFormField() {
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

export type FormItemProps = FieldProps
export function FormItem({ ...props }: FormItemProps) {
	const id = React.useId()

	return (
		<FormItemContext value={{ id }}>
			<Field {...props} />
		</FormItemContext>
	)
}

export type FormLabelProps = React.ComponentProps<typeof Label>
export function FormLabel({ className, ...props }: FormLabelProps) {
	const { error, formItemId } = useFormField()

	return (
		<Label
			className={cx(error && 'text-foreground-danger', className)}
			htmlFor={formItemId}
			{...props}
		/>
	)
}

export interface FormControlProps extends useRender.ComponentProps<'div'> {
	render: useRender.RenderProp<React.ComponentProps<'div'>>
	variant?: InputProps['variant']
}

export function FormControl({ render, variant, ...props }: FormControlProps) {
	const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

	return useRender({
		render,
		props: {
			'data-slot': 'form-control',
			id: formItemId,
			'aria-describedby': !error
				? `${formDescriptionId}`
				: `${formDescriptionId} ${formMessageId}`,
			'aria-invalid': !!error,
			variant: variant ?? (error ? 'error' : 'default'),
			...props,
		},
	})
}

export type FormDescriptionProps = React.ComponentProps<typeof Description>
export function FormDescription({ ...props }: FormDescriptionProps) {
	const { formDescriptionId } = useFormField()
	return <Description id={formDescriptionId} {...props} />
}

export type FormMessageProps = React.ComponentProps<typeof ErrorDescription>
export function FormMessage({ children, ...props }: FormMessageProps) {
	const { error, formMessageId } = useFormField()

	const body = error ? String(error.message) : children

	if (!body) {
		return null
	}

	return (
		<ErrorDescription id={formMessageId} {...props}>
			{body}
		</ErrorDescription>
	)
}
