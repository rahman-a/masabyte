/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '645px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      heading: ['var(--font-inter)'],
      body: ['var(--font-karla)'],
      logirent: ['var(--font-logirent)'],
    },
    container: {
      center: true,
      padding: {
        sm: '1.5rem',
        md: '2rem',
        lg: '5.5rem',
      },
    },
    extend: {
      backgroundImage: {
        'surface-pattern': 'linear-gradient(271deg, #011a2a, #020617)',
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
