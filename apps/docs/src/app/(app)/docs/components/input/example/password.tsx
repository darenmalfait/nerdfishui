'use client'

import { Field, FieldLabel } from '@nerdfish/react/field'
import {
	InputGroup,
	InputGroupAddon,
	InputGroupButton,
	InputGroupInput,
} from '@nerdfish/react/input-group'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

export function InputPasswordExample() {
	const [password, setPassword] = useState('')
	const [show, setShow] = useState(false)

	return (
		<Field className="w-full max-w-sm">
			<FieldLabel htmlFor="password">Password</FieldLabel>
			<InputGroup>
				<InputGroupInput
					id="password"
					type={show ? 'text' : 'password'}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder="Password"
				/>
				<InputGroupAddon align="inline-end">
					<InputGroupButton
						type="button"
						onClick={() => setShow((s) => !s)}
						aria-label={show ? 'Hide password' : 'Show password'}
						icon
						size="xs"
					>
						{show ? <EyeOffIcon /> : <EyeIcon />}
					</InputGroupButton>
				</InputGroupAddon>
			</InputGroup>
		</Field>
	)
}
