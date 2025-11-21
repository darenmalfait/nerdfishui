import { cn } from '@nerdfish/utils/class'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

export const fonts = cn(
	GeistSans.variable,
	GeistMono.variable,
	'touch-manipulation font-sans antialiased',
)
