const breakpoints = require('@nerdfish/theme').breakpoints
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  ({addBase, addUtilities}) => {
    addUtilities({
      ':root': {
        '--color-gray-950': '#000000',
        '--color-gray-900': '#0A0A0A',
        '--color-gray-800': '#262626',
        '--color-gray-700': '#3C3C43',
        '--color-gray-600': '#71717a',
        '--color-gray-400': '#a1a1aa',
        '--color-gray-300': '#d4d4d8',
        '--color-gray-200': '#e4e4e7',
        '--color-gray-100': '#f4f4f5',
        '--color-gray-50': '#f8fafc',
      },
      '.focus-ring': {
        '@apply focus:outline-none focus-within:outline-none transition duration-300 disabled:ring-0 hover:ring-2 focus:ring-2 focus-within:ring-2 group-hover:ring-2 group-focus:ring-2 hover:ring-primary focus:ring-primary focus-within:ring-primary group-hover:ring-primary group-focus:ring-primary ring-primary ring-offset-4 ring-offset-inverted':
          {},
      },
      '.active-ring': {
        '@apply active:ring-2 active:ring-primary active:ring-offset-inverted active:ring-offset-4':
          {},
      },
      '.shadow-outline': {
        '@apply ring-1 ring-muted/30 border-transparent': {},
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
        '@apply mt-6 first:mt-0 border-gray-300 italic text-muted dark:border-gray-700 ltr:border-l-2 ltr:pl-6 rtl:border-r-2 rtl:pr-6':
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
      '.bg-popover': {
        '@apply backdrop-saturate-[200%] backdrop-blur-[30px] shadow-blur bg-[hsla(0,0%,100%,0.7)] dark:bg-[hsla(0,0%,0%,0.5)]':
          {},
      },
      '.bg-popover-inverse': {
        '@apply backdrop-saturate-[200%] backdrop-blur-[30px] shadow-blur bg-[hsla(0,0%,0%,0.7)] dark:bg-[hsla(0,100%,100%,0.95)]':
          {},
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
        colors: {
          transparent: 'transparent',
          current: 'currentColor',
          nerdfish: 'hsl(var(--colors-nerdfish) / <alpha-value>)',
          primary: 'hsl(var(--colors-foreground-primary) / <alpha-value>)',
          muted: 'hsl(var(--colors-foreground-muted) / <alpha-value>)',
          inverted: 'hsl(var(--colors-foreground-inverted) / <alpha-value>)',
          success: 'hsl(var(--colors-success-500) / <alpha-value>)',
          danger: 'hsl(var(--colors-danger-500) / <alpha-value>)',
          warning: 'hsl(var(--colors-warning-500) / <alpha-value>)',
          info: 'hsl(var(--colors-info-500) / <alpha-value>)',
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
        backgroundColor: {
          primary: 'hsl(var(--colors-background-primary) / <alpha-value>)',
          muted: 'hsl(var(--colors-background-muted) / <alpha-value>)',
          inverted: 'hsl(var(--colors-background-inverted) / <alpha-value>)',
          success: {
            DEFAULT: 'hsl(var(--colors-success-300) / <alpha-value>)',
            subtle: 'hsl(var(--colors-success-100) / <alpha-value>)',
          },
          danger: {
            DEFAULT: 'hsl(var(--colors-danger-300) / <alpha-value>)',
            subtle: 'hsl(var(--colors-danger-100) / <alpha-value>)',
          },
          warning: {
            DEFAULT: 'hsl(var(--colors-warning-300) / <alpha-value>)',
            subtle: 'hsl(var(--colors-warning-100) / <alpha-value>)',
          },
          info: {
            DEFAULT: 'hsl(var(--colors-info-300) / <alpha-value>)',
            subtle: 'hsl(var(--colors-info-100) / <alpha-value>)',
          },
        },
        textColor: {
          primary: 'hsl(var(--colors-foreground-primary) / <alpha-value>)',
          muted: 'hsl(var(--colors-foreground-muted) / <alpha-value>)',
          inverted: 'hsl(var(--colors-foreground-inverted) / <alpha-value>)',
          success: 'hsl(var(--colors-success-500) / <alpha-value>)',
          danger: 'hsl(var(--colors-danger-500) / <alpha-value>)',
          warning: 'hsl(var(--colors-warning-500) / <alpha-value>)',
          info: 'hsl(var(--colors-info-500) / <alpha-value>)',
        },
        borderColor: {
          primary: 'hsl(var(--colors-border-primary) / <alpha-value>)',
          muted: 'hsl(var(--colors-border-muted) / <alpha-value>)',
          success: 'hsl(var(--colors-success-300) / <alpha-value>)',
          danger: 'hsl(var(--colors-danger-300) / <alpha-value>)',
          warning: 'hsl(var(--colors-warning-300) / <alpha-value>)',
          info: 'hsl(var(--colors-info-300) / <alpha-value>)',
        },
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
        spacing: {
          '5vw': '5vw', // pull featured sections and navbar in the margin
          '8vw': '8vw', // positions hero img inside the margin
          '10vw': '10vw', // page margin
        },
        zIndex: {
          '-1': '-10',
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
