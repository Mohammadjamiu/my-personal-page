/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        ring: 'var(--ring)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        cream: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
        },
        ink: {
          DEFAULT: '#18181B',
          muted: '#52525B',
          subtle: '#A1A1AA',
        },
        brand: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FDE68A',
          muted: '#FEF3C7',
        },
        cyber: {
          DEFAULT: '#06B6D4',
          dark: '#0891B2',
          muted: '#E0F7FA',
        },
      },
      borderRadius: {
        none: '0',
        sm: '0',
        DEFAULT: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        '4xl': '0',
        full: '0',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 1px 3px rgb(0 0 0 / 0.04), 0 8px 24px -8px rgb(0 0 0 / 0.08)',
        'soft-lg': '0 4px 12px rgb(0 0 0 / 0.06), 0 20px 40px -12px rgb(0 0 0 / 0.12)',
        'soft-dark': '0 1px 3px rgb(0 0 0 / 0.3), 0 8px 24px -8px rgb(0 0 0 / 0.5)',
        'soft-dark-lg': '0 4px 12px rgb(0 0 0 / 0.4), 0 20px 40px -12px rgb(0 0 0 / 0.6)',
        glow: '0 0 0 1px rgb(99 102 241 / 0.15), 0 4px 16px rgb(99 102 241 / 0.1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.45s ease-out forwards',
        blink: 'blink 1.1s step-end infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.muted'),
            lineHeight: '1.85',
            fontFamily: String(theme('fontFamily.sans')),
            maxWidth: 'none',
            a: {
              color: 'var(--primary)',
              fontWeight: '500',
              textDecoration: 'underline',
              textDecorationColor: 'color-mix(in oklab, var(--primary) 35%, transparent)',
              textUnderlineOffset: '3px',
              '&:hover': {
                textDecorationColor: 'var(--primary)',
              },
            },
            'h1, h2, h3, h4': {
              fontFamily: String(theme('fontFamily.serif')),
              color: theme('colors.ink.DEFAULT'),
              fontWeight: '600',
              letterSpacing: '-0.02em',
            },
            h2: { marginTop: '2.25em' },
            blockquote: {
              borderLeftColor: 'var(--primary)',
              borderLeftWidth: '3px',
              fontStyle: 'normal',
              color: theme('colors.ink.muted'),
              backgroundColor: 'color-mix(in oklab, var(--primary) 12%, var(--background))',
              padding: '0.75rem 1.25rem',
              borderRadius: '0 0.5rem 0.5rem 0',
            },
            code: {
              backgroundColor: theme('colors.cream.200'),
              padding: '0.15em 0.4em',
              borderRadius: theme('borderRadius.md'),
              fontWeight: '500',
              fontSize: '0.875em',
              color: 'var(--primary)',
              fontFamily: String(theme('fontFamily.mono')),
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            pre: {
              backgroundColor: '#18181B',
              color: '#E4E4E7',
              borderRadius: theme('borderRadius.2xl'),
              fontFamily: String(theme('fontFamily.mono')),
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.zinc.300'),
            a: {
              color: 'var(--primary)',
              textDecorationColor: 'color-mix(in oklab, var(--primary) 35%, transparent)',
              '&:hover': { textDecorationColor: 'var(--primary)' },
            },
            'h1, h2, h3, h4': { color: theme('colors.zinc.50') },
            strong: { color: theme('colors.zinc.200') },
            blockquote: {
              borderLeftColor: 'var(--primary)',
              backgroundColor: 'color-mix(in oklab, var(--primary) 10%, transparent)',
              color: theme('colors.zinc.300'),
            },
            code: {
              backgroundColor: theme('colors.zinc.800'),
              color: 'var(--primary)',
            },
            pre: {
              backgroundColor: '#09090B',
            },
          },
        },
      }),
    },
  },
};
