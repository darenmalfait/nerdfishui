'use client'

import { cx, roundToNearest15 } from '@nerdfish/utils'
import { AlertCircle, Clock } from 'lucide-react'
import * as React from 'react'

import { Field } from './field'
import { getInputClassName, type InputProps, type RawInputProps } from './input'

const RawTimepicker = React.forwardRef<HTMLInputElement, RawInputProps>(
	function RawTimepicker(props, ref) {
		const {
			value: valueProp,
			defaultValue,
			hasError,
			inputSize,
			icon: Icon = Clock,
			...inputProps
		} = props

		const ItemIcon = hasError ? AlertCircle : Clock

		const [value, setValue] = React.useState<string>(
			valueProp?.toString() ??
				defaultValue?.toString() ??
				roundToNearest15(new Date()).toISOString(),
		)

		const className = getInputClassName(props.className, hasError, inputSize)

		function onHourChange(e: React.ChangeEvent<HTMLSelectElement>) {
			const hour = e.target.value
			const date = new Date(value)
			date.setHours(parseInt(hour, 10))
			setValue(date.toISOString())
		}

		function onMinuteChange(e: React.ChangeEvent<HTMLSelectElement>) {
			const minute = e.target.value
			const date = new Date(value)
			date.setMinutes(parseInt(minute, 10))
			setValue(date.toISOString())
		}

		return (
			<div data-slot="control" className="relative shadow-sm">
				<input
					{...(inputProps as React.ComponentPropsWithoutRef<'input'>)}
					value={value}
					ref={ref}
					type="hidden"
				/>
				<div className={cx(className, { 'pr-14': !!Icon })}>
					<div className="flex">
						<div className="z-1 relative flex items-center justify-center text-center transition-transform hover:scale-110">
							<div className="shadow-soft-xl absolute -inset-1 hidden rounded-md group-hover:block group-hover:bg-black/10 dark:group-hover:bg-white/5" />
							<select
								name="hours"
								onChange={onHourChange}
								className="z-10 cursor-pointer appearance-none bg-transparent text-center text-xl outline-none"
								defaultValue={new Date(value).getHours().toString()}
							>
								<option value="0">00</option>
								<option value="1">01</option>
								<option value="2">02</option>
								<option value="3">03</option>
								<option value="4">04</option>
								<option value="5">05</option>
								<option value="6">06</option>
								<option value="7">07</option>
								<option value="8">08</option>
								<option value="9">09</option>
								<option value="10">10</option>
								<option value="11">10</option>
								<option value="12">12</option>
								<option value="13">13</option>
								<option value="14">14</option>
								<option value="15">15</option>
								<option value="16">16</option>
								<option value="17">17</option>
								<option value="18">18</option>
								<option value="19">19</option>
								<option value="20">20</option>
								<option value="21">21</option>
								<option value="22">22</option>
								<option value="23">23</option>
							</select>
						</div>
						<span className="mx-2 text-xl">:</span>
						<div className="z-1 relative flex items-center justify-center text-center transition-transform hover:scale-110">
							<div className="shadow-soft-xl absolute -inset-1 hidden rounded-md group-hover:block group-hover:bg-black/10 dark:group-hover:bg-white/5" />
							<select
								name="minutes"
								className="z-10 cursor-pointer appearance-none bg-transparent text-center text-xl outline-none"
								onChange={onMinuteChange}
								defaultValue={new Date(value).getMinutes().toString()}
							>
								<option value="0">00</option>
								<option value="15">15</option>
								<option value="30">30</option>
								<option value="45">45</option>
							</select>
						</div>
					</div>
				</div>

				<ItemIcon
					width="20px"
					height="20px"
					className={cx(
						'text-muted absolute right-5 top-0 z-10 flex h-full items-center justify-center p-0',
						{
							'text-danger': hasError,
						},
					)}
				/>
			</div>
		)
	},
)

const Timepicker = React.forwardRef<
	HTMLInputElement,
	InputProps & {
		id?: string
	}
>(function Timepicker(
	{ error, name, label, description, id, className, defaultValue, ...props },
	ref,
) {
	const inputId = id ?? name
	const errorId = `${inputId}-error`
	const descriptionId = `${inputId}-description`

	return (
		<Field
			{...{
				description,
				descriptionId,
				error,
				errorId,
				htmlFor: inputId,
				label,
				className,
			}}
		>
			<RawTimepicker
				hasError={!!error}
				{...(props as RawInputProps)}
				ref={ref}
				name={name}
				id={inputId}
				defaultValue={
					defaultValue ?? roundToNearest15(new Date()).toISOString()
				}
				aria-describedby={
					error ? errorId : description ? descriptionId : undefined
				}
			/>
		</Field>
	)
})

export { Timepicker, RawTimepicker }
