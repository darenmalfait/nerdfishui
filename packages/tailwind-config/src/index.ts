import { breakpoints } from '@nerdfish/theme'
import plugin from 'tailwindcss/plugin'
import { type PluginCreator, type Config } from 'tailwindcss/types/config'
import { animation } from './animation'
import { base } from './base'
import { colors } from './colors'
import { font } from './font'
import { spacing } from './spacing'
import { typography } from './typography'
import { utilities } from './utilities'

// eslint-disable-next-line @typescript-eslint/unbound-method
const pluginConfig: PluginCreator = ({ addBase, addUtilities, addVariant }) => {
	addBase({ ...base })
	addUtilities({ ...utilities })

	addVariant(
		'disabled-within',
		`&:has(input:is(:disabled),button:is(:disabled))`,
	)
}

const config: Partial<Config> = {
	theme: {
		extend: {
			...font,
			...typography,
			...colors,
			...spacing,
			boxShadow: {
				highlight: '0 0 1rem -0.15rem hsl(var(--colors-nerdfish))',
				'soft-xxs': '0 1px 5px 1px #ddd',
				'soft-xs':
					'0 3px 5px -1px rgba(0,0,0,.09),0 2px 3px -1px rgba(0,0,0,.07)',
				'soft-sm':
					'0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)',
				'soft-md':
					'0 4px 7px -1px rgba(0,0,0,.11),0 2px 4px -1px rgba(0,0,0,.07)',
				'soft-xl': '0 20px 27px 0 rgba(0,0,0,.05)',
				blur: 'inset 0 0 1px 1px hsla(0,0%,100%,.9),0 20px 27px 0 rgba(0,0,0,.05)',
				'blur-inverse':
					'inset 0 0 1px 1px hsla(0,0%,0%,.9),0 20px 27px 0 rgba(0,0,0,.05)',
			},

			screens: {
				xsm: breakpoints.xsm,
				sm: breakpoints.sm,
				md: breakpoints.md,
				lg: breakpoints.lg,
				xl: breakpoints.xl,
				'2xl': breakpoints.xxl,
				wd: breakpoints.wd,
			},
			borderRadius: {
				semi: '0.875rem',
			},
			zIndex: {
				'-1': '-10',
			},
			maxWidth: {
				'8xl': '96rem',
			},
			...animation,
		},
	},
}

export default plugin(pluginConfig, config)
