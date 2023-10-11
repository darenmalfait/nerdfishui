const breakpoints = require('@nerdfish/theme').breakpoints
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({addBase, addUtilities}) => {
    addUtilities({
      ':root': {
        '--color-gray-900': '#000000',
        '--color-gray-800': '#0A0A0A',
        '--color-gray-700': '#1A1A1A',
        '--color-gray-600': '#3f3f46',
        '--color-gray-500': '#71717a',
        '--color-gray-400': '#a1a1aa',
        '--color-gray-300': '#d4d4d8',
        '--color-gray-200': '#e4e4e7',
        '--color-gray-100': '#f4f4f5',
        '--color-gray-50': '#f8fafc',
      },
      '.focus-ring': {
        '@apply focus:outline-none focus-within:outline-none transition duration-300 disabled:ring-0 hover:ring-2 focus:ring-2 focus-within:ring-2 group-hover:ring-2 group-focus:ring-2 hover:ring-accent focus:ring-accent focus-within:ring-accent group-hover:ring-accent group-focus:ring-accent ring-accent ring-offset-4 dark:ring-offset-gray-900 ring-offset-white dark:hover:ring-accent-100 dark:focus:ring-accent-100 dark:focus-within:ring-accent-100 dark:group-hover:ring-accent-100 dark:group-focus:ring-accent-100 dark:ring-accent-100':
          {},
      },
      '.active-ring': {
        '@apply active:ring-2 active:ring-accent active:ring-offset-4 dark:active:ring-offset-gray-900 dark:active:ring-accent-100':
          {},
      },
      // '@apply bg-primary-500 dark:bg-gray-900' is throwing an error which I don't to find the cause of. This is a workaround.
      '.dark': {
        '.bg-primary': {
          '@apply bg-gray-900': {},
        },
      },
      '.bg-primary': {
        '@apply bg-primary-500': {},
      },
      '.bg-secondary': {
        '@apply bg-primary-600 dark:bg-gray-800': {},
      },
      '.text-primary': {
        '@apply text-primary-500 dark:text-primary-50': {},
      },
      '.text-secondary': {
        '@apply text-primary-400 dark:text-primary-100': {},
      },
      '.text-inverse': {
        '@apply text-primary-50 dark:text-primary-500': {},
      },
      '.bg-inverse': {
        '@apply bg-gray-900 dark:bg-primary-500': {},
      },
      '.border-primary': {
        '@apply border-primary-500 dark:border-primary-50': {},
      },
      '.set-colors-accent-nerdfish': {
        '--colors-accent-500': 'var(--colors-nerdfish-500)',
        '--colors-accent-100': 'var(--colors-nerdfish-500)',
      },
      '.set-colors-accent-danger': {
        '--colors-accent-500': 'var(--colors-danger-500)',
        '--colors-accent-100': 'var(--colors-danger-500)',
      },
      '.set-colors-accent-success': {
        '--colors-accent-500': 'var(--colors-success-500)',
        '--colors-accent-100': 'var(--colors-success-500)',
      },
      '.set-colors-current': {
        '--colors-accent-500': 'currentColor',
        '--colors-accent-100': 'currentColor',
      },
      '.shadow-outline': {
        '@apply ring-1 ring-gray-100 dark:ring-gray-700': {},
      },
      '.empty-content': {
        content: "''",
      },
    })

    addBase({
      html: {
        '@apply text-primary antialiased font-sans': {},
      },
      code: {
        '@apply text-primary shadow-outline bg-transparent rounded-lg px-2 py-1 !text-2xs':
          {},
      },
      // keep these styles in sync with the ones in packages/ui/src/typography
      // not .not-prose prose

      '.prose h1:not(:where([class~="not-prose"] *))': {
        '@apply scroll-m-20 font-title text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]':
          {},
      },
      '.prose h2:not(:where([class~="not-prose"] *))': {
        '@apply mt-10 first:mt-0 scroll-m-20 font-title text-3xl !leading-normal':
          {},
      },
      '.prose h3:not(:where([class~="not-prose"] *))': {
        '@apply mt-8 first:mt-0 scroll-m-20 text-2xl font-semibold tracking-tight':
          {},
      },
      '.prose h4:not(:where([class~="not-prose"] *))': {
        '@apply mt-8 first:mt-0 scroll-m-20 text-xl font-semibold tracking-tight':
          {},
      },
      '.prose p:not(:where([class~="not-prose"] *))': {
        '@apply leading-7 mt-6 first:mt-0': {},
      },
      '.prose blockquote:not(:where([class~="not-prose"] *))': {
        '@apply mt-6 first:mt-0 border-gray-300 italic text-gray-700 dark:border-gray-700 dark:text-gray-400 ltr:border-l-2 ltr:pl-6 rtl:border-r-2 rtl:pr-6':
          {},
      },
      '.prose ul:not(:where([class~="not-prose"] *))': {
        '@apply list-disc first:mt-0 ltr:ml-6 rtl:mr-6': {},
      },
      '.prose ol:not(:where([class~="not-prose"] *))': {
        '@apply list-decimal first:mt-0 ltr:ml-6 rtl:mr-6': {},
      },
      '.prose ol li:not(:where([class~="not-prose"] *)), .prose ul li:not(:where([class~="not-prose"] *))':
        {
          '@apply my-2': {},
        },
      '.prose > div:not(:where([class~="not-prose"] *))': {
        '@apply mt-6 first:mt-0': {},
      },
    })
  },
  {
    mode: 'jit',
    theme: {
      extend: {
        fontSize: {
          '2xs': ['0.75rem', {lineHeight: '1.25rem'}],
        },
        fontFamily: {
          title: [...defaultTheme.fontFamily.sans],
          sans: [...defaultTheme.fontFamily.sans],
          serif: [...defaultTheme.fontFamily.serif],
        },
        typography: theme => {
          return {
            DEFAULT: {
              css: {
                '> *': {
                  gridColumn: '1 / -1',

                  [`@media (min-width: ${theme('screens.lg')})`]: {
                    gridColumn: '3 / span 8',
                  },
                },
                'h1, h2, h3, h4': {
                  marginTop: theme('spacing.0'),
                  marginBottom: theme('spacing.0'),
                },
                'code::before': {
                  content: '',
                },
                'code::after': {
                  content: '',
                },
                img: {
                  // images are wrapped in <p>, which already has margin
                  marginTop: 0,
                  marginBottom: 0,
                  borderRadius: theme('borderRadius.lg'),
                },
              },
              dark: {
                css: {
                  color: theme('colors.gray[300]'),
                  '[class~="lead"]': {color: theme('colors.gray[400]')},
                  a: {color: theme('colors.gray[100]')},
                  strong: {color: theme('colors.gray[100]')},
                  'ul > li::before': {
                    backgroundColor: theme('colors.gray[700]'),
                  },
                  hr: {borderColor: theme('colors.gray[800]')},
                  blockquote: {
                    color: theme('colors.gray[100]'),
                    borderLeftColor: theme('colors.gray[800]'),
                  },
                  h1: {color: theme('colors.gray[100]')},
                  h2: {color: theme('colors.gray[100]')},
                  h3: {color: theme('colors.gray[100]')},
                  h4: {color: theme('colors.gray[100]')},
                  code: {color: theme('colors.gray[100]')},
                  'a code': {color: theme('colors.gray[100]')},
                  pre: {
                    color: theme('colors.gray[200]'),
                    backgroundColor: theme('colors.gray[800]'),
                  },
                  thead: {
                    color: theme('colors.gray[100]'),
                    borderBottomColor: theme('colors.gray[700]'),
                  },
                  'tbody tr': {borderBottomColor: theme('colors.gray[800]')},
                },
              },
            },
          }
        },
        backgroundColor: {
          primary: {
            500: 'var(--colors-background-500)',
            600: 'var(--colors-background-600)',
            700: 'var(--colors-background-700)',
            800: 'var(--colors-background-800)',
            900: 'var(--colors-background-900)',
          },
        },
        textColor: {
          primary: {
            50: 'var(--colors-text-50)',
            100: 'var(--colors-text-100)',
            200: 'var(--colors-text-200)',
            300: 'var(--colors-text-300)',
            400: 'var(--colors-text-400)',
            500: 'var(--colors-text-500)',
            600: 'var(--colors-text-600)',
            700: 'var(--colors-text-700)',
            800: 'var(--colors-text-800)',
            900: 'var(--colors-text-900)',
          },
        },
        borderColor: {
          primary: {
            50: 'var(--colors-text-50)',
            100: 'var(--colors-text-100)',
            200: 'var(--colors-text-200)',
            300: 'var(--colors-text-300)',
            400: 'var(--colors-text-400)',
            500: 'var(--colors-text-500)',
            600: 'var(--colors-text-600)',
            700: 'var(--colors-text-700)',
            800: 'var(--colors-text-800)',
            900: 'var(--colors-text-900)',
          },
        },
        boxShadow: {
          'soft-xxs': '0 1px 5px 1px #ddd',
          'soft-xs':
            '0 3px 5px -1px rgba(0,0,0,.09),0 2px 3px -1px rgba(0,0,0,.07)',
          'soft-sm':
            '0 .25rem .375rem -.0625rem hsla(0,0%,8%,.12),0 .125rem .25rem -.0625rem hsla(0,0%,8%,.07)',
          'soft-md':
            '0 4px 7px -1px rgba(0,0,0,.11),0 2px 4px -1px rgba(0,0,0,.07)',
          'soft-lg': '0 2px 12px 0 rgba(0,0,0,.16)',
          'soft-xl': '0 20px 27px 0 rgba(0,0,0,.05)',
          'soft-2xl': '0 .3125rem .625rem 0 rgba(0,0,0,.12)',
          'soft-3xl':
            '0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)',
        },
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          nerdfish: {
            DEFAULT: 'var(--colors-nerdfish-500)',
            100: 'var(--colors-nerdfish-100)',
            500: 'var(--colors-nerdfish-500)',
            900: 'var(--colors-nerdfish-900)',
          },
          accent: {
            DEFAULT: 'var(--colors-accent-500)',
            100: 'var(--colors-accent-100)',
            400: 'var(--colors-accent-400)',
            500: 'var(--colors-accent-500)',
            600: 'var(--colors-accent-600)',
          },
          danger: {
            DEFAULT: 'var(--colors-danger-500)',
            100: 'var(--colors-danger-100)',
            500: 'var(--colors-danger-500)',
            900: 'var(--colors-danger-900)',
          },
          success: {
            DEFAULT: 'var(--colors-success-500)',
            100: 'var(--colors-success-100)',
            500: 'var(--colors-success-500)',
            900: 'var(--colors-success-900)',
          },
          gray: {
            100: 'var(--color-gray-100)',
            200: 'var(--color-gray-200)',
            300: 'var(--color-gray-300)',
            400: 'var(--color-gray-400)',
            500: 'var(--color-gray-500)',
            600: 'var(--color-gray-600)',
            700: 'var(--color-gray-700)',
            800: 'var(--color-gray-800)',
            900: 'var(--color-gray-900)',
          },
        },

        spacing: {
          '5vw': '5vw', // pull featured sections and navbar in the margin
          '8vw': '8vw', // positions hero img inside the margin
          '10vw': '10vw', // page margin
        },
        zIndex: {
          '-1': '-10',
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
        maxWidth: {
          '8xl': '96rem',
        },
        keyframes: {
          'accordion-down': {
            from: {height: 0},
            to: {height: 'var(--radix-accordion-content-height)'},
          },
          'accordion-up': {
            from: {height: 'var(--radix-accordion-content-height)'},
            to: {height: 0},
          },
          jump: {
            '0%, 100%': {
              transform: 'scale(100%)',
            },
            '10%': {
              transform: 'scale(80%)',
            },
            '50%': {
              transform: 'scale(120%)',
            },
          },
          'jump-in': {
            '0%': {
              transform: 'scale(0%)',
            },
            '80%': {
              transform: 'scale(120%)',
            },
            '100%': {
              transform: 'scale(100%)',
            },
          },
          'jump-out': {
            '0%': {
              transform: 'scale(100%)',
            },
            '20%': {
              transform: 'scale(120%)',
            },
            '100%': {
              transform: 'scale(0%)',
            },
          },
          shake: {
            '0%, 100%': {
              transform: `translateX(0)`,
            },
            '20%, 60%': {
              transform: `translateX(-10px)`,
            },
            '40%, 80%': {
              transform: `translateX(10px)`,
            },
          },
          check: {
            '0%': {
              transform: 'scale(1)',
            },
            '10%': {
              transform: 'scale(0.7)',
              opacity: '0.1',
              background: 'rgba(0,0,0,0.2)',
            },
            '12%': {
              transform: 'scale(0.7)',
              opacity: '0.4',
              background: 'rgba(0,0,0,0.1)',
            },
            '50%': {
              transform: 'scale(1)',
              opacity: '0.6',
              background: 'currentColor',
            },
            '100%': {
              transform: 'scale(1)',
              opacity: '1',
              background: 'currentColor',
            },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          jump: 'jump .3s both',
          'jump-in': 'jump-in .3s both',
          'jump-out': 'jump-out .3s both',
          shake: `shake 0.5s forwards`,
          check: `check .5s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards`,
        },
      },
    },
  },
)
