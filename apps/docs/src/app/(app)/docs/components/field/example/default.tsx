'use client'

import { Button } from '@nerdfish/react/button'
import { Checkbox } from '@nerdfish/react/checkbox'
import {
	Field,
	FieldDescription,
	FieldGroup,
	FieldLabel,
	FieldLegend,
	FieldSeparator,
	FieldSet,
} from '@nerdfish/react/field'
import { Input } from '@nerdfish/react/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@nerdfish/react/select'
import { Textarea } from '@nerdfish/react/textarea'

const months = [
	{ label: 'MM', value: null },
	{ label: '01', value: '01' },
	{ label: '02', value: '02' },
	{ label: '03', value: '03' },
	{ label: '04', value: '04' },
	{ label: '05', value: '05' },
]

const years = [
	{ label: 'YYYY', value: null },
	{ label: '2024', value: '2024' },
	{ label: '2025', value: '2025' },
	{ label: '2026', value: '2026' },
	{ label: '2027', value: '2027' },
	{ label: '2028', value: '2028' },
	{ label: '2029', value: '2029' },
]

export function FieldExample() {
	return (
		<div className="w-125">
			<form>
				<FieldGroup>
					<FieldSet>
						<FieldLegend>Payment Method</FieldLegend>
						<FieldDescription>
							All transactions are secure and encrypted
						</FieldDescription>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="checkout-7j9-card-name-43j">
									Name on Card
								</FieldLabel>
								<Input
									id="checkout-7j9-card-name-43j"
									placeholder="Evil Rabbit"
									required
								/>
							</Field>
							<Field>
								<FieldLabel htmlFor="checkout-7j9-card-number-uw1">
									Card Number
								</FieldLabel>
								<Input
									id="checkout-7j9-card-number-uw1"
									placeholder="1234 5678 9012 3456"
									required
								/>
								<FieldDescription>
									Enter your 16-digit card number
								</FieldDescription>
							</Field>
							<div className="grid grid-cols-3 gap-4">
								<Field>
									<FieldLabel htmlFor="checkout-exp-month-ts6">
										Month
									</FieldLabel>
									<Select items={months}>
										<SelectTrigger id="checkout-exp-month-ts6">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{months.map((month) => (
												<SelectItem key={month.value} value={month.value}>
													{month.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</Field>
								<Field>
									<FieldLabel htmlFor="checkout-7j9-exp-year-f59">
										Year
									</FieldLabel>
									<Select items={years}>
										<SelectTrigger id="checkout-7j9-exp-year-f59">
											<SelectValue />
										</SelectTrigger>
										<SelectContent>
											{years.map((year) => (
												<SelectItem key={year.value} value={year.value}>
													{year.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</Field>
								<Field>
									<FieldLabel htmlFor="checkout-7j9-cvv">CVV</FieldLabel>
									<Input id="checkout-7j9-cvv" placeholder="123" required />
								</Field>
							</div>
						</FieldGroup>
					</FieldSet>
					<FieldSeparator />
					<FieldSet>
						<FieldLegend>Billing Address</FieldLegend>
						<FieldDescription>
							The billing address associated with your payment method
						</FieldDescription>
						<FieldGroup>
							<Field orientation="horizontal">
								<Checkbox
									id="checkout-7j9-same-as-shipping-wgm"
									defaultChecked
								/>
								<FieldLabel
									htmlFor="checkout-7j9-same-as-shipping-wgm"
									className="font-normal"
								>
									Same as shipping address
								</FieldLabel>
							</Field>
						</FieldGroup>
					</FieldSet>
					<FieldSet>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="checkout-7j9-optional-comments">
									Comments
								</FieldLabel>
								<Textarea
									id="checkout-7j9-optional-comments"
									placeholder="Add any additional comments"
									className="resize-none"
								/>
							</Field>
						</FieldGroup>
					</FieldSet>
					<Field orientation="horizontal">
						<Button type="submit">Submit</Button>
						<Button variant="outline" type="button">
							Cancel
						</Button>
					</Field>
				</FieldGroup>
			</form>
		</div>
	)
}
