'use client'

import { Button } from '@nerdfish/react/button'
import { MoonIcon, SunIcon } from 'lucide-react'
import { type ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { useTheme } from '../../theme-provider'

function ThemeToggle({
	className,
	...props
}: Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'popover'>) {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme, systemTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	const isDarkMode =
		theme === 'dark' || (theme === 'system' && systemTheme === 'dark')

	return (
		<Button
			variant="ghost"
			icon
			type="button"
			{...props}
			onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
		>
			{isDarkMode ? <SunIcon /> : <MoonIcon />}
			<div className="sr-only">{isDarkMode ? 'Light' : 'Dark'} Mode</div>
		</Button>
	)
}

export { ThemeToggle }
