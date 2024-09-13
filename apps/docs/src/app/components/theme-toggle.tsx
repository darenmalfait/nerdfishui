'use client'

import { Button } from '@nerdfish/ui'
import { Moon, Sun } from 'lucide-react'
import * as React from 'react'
import { useTheme } from '../theme-provider'

function ThemeToggle({
	className,
	...props
}: Omit<React.ComponentPropsWithoutRef<'button'>, 'onClick'>) {
	const [mounted, setMounted] = React.useState(false)
	const { theme, setTheme, systemTheme } = useTheme()

	// useEffect only runs on the client, so now we can safely show the UI
	React.useEffect(() => {
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
			size="icon"
			type="button"
			{...props}
			onClick={() => setTheme(isDarkMode ? 'light' : 'dark')}
		>
			{isDarkMode ? <Sun className="w-5" /> : <Moon className="w-5" />}
			<div className="sr-only">{isDarkMode ? `Light` : `Dark`} Mode</div>
		</Button>
	)
}

export { ThemeToggle }
