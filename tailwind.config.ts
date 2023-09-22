import type { Config } from 'tailwindcss'

// import { fontFamliy } from 'tailwindcss/defaultTheme'

import { tailwindcssPreset } from './lib/tailwindcss-configs/tailwindcss-preset'

const config = {
  presets: [tailwindcssPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
} satisfies Config

export default config
