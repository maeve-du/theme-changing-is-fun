/**
 * @file Tailwind CSS Theme Preset
 * @author Maeve Du
 * @version 1.0
 * @created 2023-08-31
 * @updated
 * @description
 * This file serves as a Tailwind CSS theme preset. It allows customization and extension of the Tailwind CSS configuration.
 * Customized Tailwind CSS plugins and third-party plugins can be added here.
 * To apply this preset, include its name in the `presets` array of the `tailwind.config.js` file.
 */

// Tailwindcss
import type { Config } from 'tailwindcss'

// costomized tailwindcss plugins
import { tailwindcssThemePlugin } from './tailwindcss-theme-plugin-scnui'
import { tailwindcssBaseStylesPlugin } from './tailwindcss-base-styles-plugin'
import { tailwindcssCAnimationPlugin } from './tailwindcss-c-animations-plugin'

// Third-party plugins
import animatePlugin from 'tailwindcss-animate'

export const tailwindcssPreset = {
  darkMode: ['class'],
  // content option is required here, just leave it as empty array, and fill it in tailwind.config.ts
  // don't forget to add './lib/**/*.{ts,tsx}' (or the folder for this file), to the tailwind.config.ts content
  content: [],
  plugins: [animatePlugin, tailwindcssThemePlugin, tailwindcssBaseStylesPlugin, tailwindcssCAnimationPlugin],
} satisfies Config
