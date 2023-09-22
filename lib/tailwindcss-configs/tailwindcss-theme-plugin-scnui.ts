/**
 * @file Tailwind CSS Theme Plugin Definition
 * @author Maeve Du
 * @version 1.0
 * @created 2023-08-31
 * @update
 * @description
 * This plugin defines theme colors and common styles for the `tailwindcss.config.js` file.
 * The theme structure used here follows the pattern of shadcn/ui.
 * The goal is to keep both global.css and Tailwindcss.config.ts files neat and clean
 *
 * @AddToPreset
 * 1. Add this plugin to tailwindcss-preset.ts
 * 2. Include the `tailwindcss-preset` in the `presets` array within your `tailwind.config.js` file.
 *
 * @NewTheme
 * 1. Define new theme palette variables using HSL format, e.g., --background: '0deg 0% 100%'.
 * 2. Use tools like https://transform.tools/css-to-js to convert CSS variables to JS objects.
 * 3. Within the plugin function, add a new `addBase()` call and pass the JS object to it.
 *
 */

// Tailwindcss config tools
import plugin from 'tailwindcss/plugin'

// Can't use import from @/lib/constants, Error: Cannot find module '@/lib/constants'
import { C_THEME_MODES, C_THEME_STYLES } from '../constants'

export const tailwindcssThemePlugin = plugin(
  // Add css variable definitions/base styles to @layer base
  function ({ addBase }) {
    // default theme mode (light)
    addBase({
      ':root': {
        '--background': '0deg 0% 100%',
        '--foreground': '222deg 47% 11%',
        '--card': '0deg 0% 100%',
        '--card-foreground': '222deg 47% 11%',
        '--popover': '0deg 0% 100%',
        '--popover-foreground': '222deg 47% 11%',
        '--primary': '239deg 84% 67%',
        '--primary-foreground': '204deg 100% 97%',
        '--secondary': '213deg 27% 84%',
        '--secondary-foreground': '239deg 84% 67%',
        '--muted': '213deg 27% 84%',
        '--muted-foreground': '215deg 16% 47%',
        '--accent': '213deg 27% 84%',
        '--accent-foreground': '239deg 84% 67%',
        '--destructive': '350deg 89% 60%',
        '--destructive-foreground': '204deg 100 97',
        '--border': '214deg 32% 91%',
        '--input': '214deg 32% 91%',
        '--ring': '222deg 47% 11%',
        '--radius': '0.75rem',
      },
    })

    // dark theme mode
    addBase({
      ['.' + C_THEME_MODES.DARK]: {
        '--background': '222deg 47% 11%',
        '--foreground': '204deg 100% 97%',
        '--card': '222deg 47% 11%',
        '--card-foreground': '204deg 100% 97%',
        '--popover': '222deg 47% 11%',
        '--popover-foreground': '204deg 100% 97%',
        '--primary': '204deg 100% 97%',
        '--primary-foreground': '239deg 84% 67%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '204deg 100% 97%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215deg 20.2% 65.1%',
        '--accent': '217.2 32.6% 17.5%',
        '--accent-foreground': '204deg 100% 97%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '204deg 100% 97%',
        '--border': '217deg 36% 22%',
        '--input': '217deg 36% 22%',
        '--ring': '212.7deg 26.8% 83.9%',
      },
    })

    // themes color: Light Green
    addBase({
      ['.' + C_THEME_STYLES.GREEN]: {
        '--background': '0 0% 100%',
        '--foreground': '240 10% 3.9%',
        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '240 10% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '240 10% 3.9%',
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--primary': '142.1 76.2% 36.3%',
        '--primary-foreground': '355.7 100% 97.3%',
        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',
        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--ring': '142.1 76.2% 36.3%',
      },
    })

    // theme style: Dark Green
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.GREEN]: {
        '--background': '20 14.3% 4.1%',
        '--foreground': '0 0% 95%',
        '--muted': '0 0% 15%',
        '--muted-foreground': '240 5% 64.9%',
        '--popover': '0 0% 9%',
        '--popover-foreground': '0 0% 95%',
        '--card': '24 9.8% 10%',
        '--card-foreground': '0 0% 95%',
        '--border': '240 3.7% 15.9%',
        '--input': '240 3.7% 15.9%',
        '--primary': '142.1 70.6% 45.3%',
        '--primary-foreground': '144.9 80.4% 10%',
        '--secondary': '240 3.7% 15.9%',
        '--secondary-foreground': '0 0% 98%',
        '--accent': '12 6.5% 15.1%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 85.7% 97.3%',
        '--ring': '142.4 71.8% 29.2%',
      },
    })

    // theme style: Light Rose
    addBase({
      ['.' + C_THEME_STYLES.ROSE]: {
        '--background': '0 0% 100%',
        '--foreground': '240 10% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '240 10% 3.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '240 10% 3.9%',
        '--primary': '346.8 77.2% 49.8%',
        '--primary-foreground': '355.7 100% 97.3%',
        '--secondary': '240 4.8% 95.9%',
        '--secondary-foreground': '240 5.9% 10%',
        '--muted': '240 4.8% 95.9%',
        '--muted-foreground': '240 3.8% 46.1%',
        '--accent': '240 4.8% 95.9%',
        '--accent-foreground': '240 5.9% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '240 5.9% 90%',
        '--input': '240 5.9% 90%',
        '--ring': '346.8 77.2% 49.8%',
      },
    })

    // // other themes: Rose Dark
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.ROSE]: {
        '--background': '20 14.3% 4.1%',
        '--foreground': '0 0% 95%',
        '--card': '24 9.8% 10%',
        '--card-foreground': '0 0% 95%',
        '--popover': '0 0% 9%',
        '--popover-foreground': '0 0% 95%',
        '--primary': '346.8 77.2% 49.8%',
        '--primary-foreground': '355.7 100% 97.3%',
        '--secondary': '240 3.7% 15.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '0 0% 15%',
        '--muted-foreground': '240 5% 64.9%',
        '--accent': '12 6.5% 15.1%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 85.7% 97.3%',
        '--border': '240 3.7% 15.9%',
        '--input': '240 3.7% 15.9%',
        '--ring': '346.8 77.2% 49.8%',
      },
    })

    // theme style: Light Red
    addBase({
      ['.' + C_THEME_STYLES.RED]: {
        '--background': '0 0% 100%',
        '--foreground': '0 0% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '0 0% 3.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '0 0% 3.9%',
        '--primary': '0 72.2% 50.6%',
        '--primary-foreground': '0 85.7% 97.3%',
        '--secondary': '0 0% 96.1%',
        '--secondary-foreground': '0 0% 9%',
        '--muted': '0 0% 96.1%',
        '--muted-foreground': '0 0% 45.1%',
        '--accent': '0 0% 96.1%',
        '--accent-foreground': '0 0% 9%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 89.8%',
        '--input': '0 0% 89.8%',
        '--ring': '0 72.2% 50.6%',
      },
    })

    // theme style: Dark Red
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.RED]: {
        '--background': '0 0% 3.9%',
        '--foreground': '0 0% 98%',
        '--card': '0 0% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--popover': '0 0% 3.9%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 72.2% 50.6%',
        '--primary-foreground': '0 85.7% 97.3%',
        '--secondary': '0 0% 14.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '0 0% 14.9%',
        '--muted-foreground': '0 0% 63.9%',
        '--accent': '0 0% 14.9%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 14.9%',
        '--input': '0 0% 14.9%',
        '--ring': '0 72.2% 50.6%',
      },
    })

    // theme style: Light Orange
    addBase({
      ['.' + C_THEME_STYLES.ORANGE]: {
        '--background': '0 0% 100%',
        '--foreground': '20 14.3% 4.1%',
        '--card': '0 0% 100%',
        '--card-foreground': '20 14.3% 4.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '20 14.3% 4.1%',
        '--primary': '24.6 95% 53.1%',
        '--primary-foreground': '60 9.1% 97.8%',
        '--secondary': '60 4.8% 95.9%',
        '--secondary-foreground': '24 9.8% 10%',
        '--muted': '60 4.8% 95.9%',
        '--muted-foreground': '25 5.3% 44.7%',
        '--accent': '60 4.8% 95.9%',
        '--accent-foreground': '24 9.8% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '60 9.1% 97.8%',
        '--border': '20 5.9% 90%',
        '--input': '20 5.9% 90%',
        '--ring': '24.6 95% 53.1%',
      },
    })

    // theme style: Dark Orange
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.ORANGE]: {
        '--background': '20 14.3% 4.1%',
        '--foreground': '60 9.1% 97.8%',
        '--card': '20 14.3% 4.1%',
        '--card-foreground': '60 9.1% 97.8%',
        '--popover': '20 14.3% 4.1%',
        '--popover-foreground': '60 9.1% 97.8%',
        '--primary': '20.5 90.2% 48.2%',
        '--primary-foreground': '60 9.1% 97.8%',
        '--secondary': '12 6.5% 15.1%',
        '--secondary-foreground': '60 9.1% 97.8%',
        '--muted': '12 6.5% 15.1%',
        '--muted-foreground': '24 5.4% 63.9%',
        '--accent': '12 6.5% 15.1%',
        '--accent-foreground': '60 9.1% 97.8%',
        '--destructive': '0 72.2% 50.6%',
        '--destructive-foreground': '60 9.1% 97.8%',
        '--border': '12 6.5% 15.1%',
        '--input': '12 6.5% 15.1%',
        '--ring': '20.5 90.2% 48.2%',
      },
    })

    // theme style: Light Blue
    addBase({
      ['.' + C_THEME_STYLES.BLUE]: {
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '221.2 83.2% 53.3%',
        '--primary-foreground': '210 40% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '210 40% 96.1%',
        '--accent-foreground': '222.2 47.4% 11.2%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '221.2 83.2% 53.3%',
      },
    })

    // theme style: Dark Blue
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.BLUE]: {
        '--background': '222.2 84% 4.9%',
        '--foreground': '210 40% 98%',
        '--card': '222.2 84% 4.9%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 84% 4.9%',
        '--popover-foreground': '210 40% 98%',
        '--primary': '217.2 91.2% 59.8%',
        '--primary-foreground': '222.2 47.4% 11.2%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--accent': '217.2 32.6% 17.5%',
        '--accent-foreground': '210 40% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': '224.3 76.3% 48%',
      },
    })

    // theme style: Light Yellow
    addBase({
      ['.' + C_THEME_STYLES.YELLOW]: {
        '--background': '0 0% 100%',
        '--foreground': '20 14.3% 4.1%',
        '--card': '0 0% 100%',
        '--card-foreground': '20 14.3% 4.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '20 14.3% 4.1%',
        '--primary': '47.9 95.8% 53.1%',
        '--primary-foreground': '26 83.3% 14.1%',
        '--secondary': '60 4.8% 95.9%',
        '--secondary-foreground': '24 9.8% 10%',
        '--muted': '60 4.8% 95.9%',
        '--muted-foreground': '25 5.3% 44.7%',
        '--accent': '60 4.8% 95.9%',
        '--accent-foreground': '24 9.8% 10%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '60 9.1% 97.8%',
        '--border': '20 5.9% 90%',
        '--input': '20 5.9% 90%',
        '--ring': '20 14.3% 4.1%',
      },
    })

    // theme style: Dark Yellow
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.YELLOW]: {
        '--background': '20 14.3% 4.1%',
        '--foreground': '60 9.1% 97.8%',
        '--card': '20 14.3% 4.1%',
        '--card-foreground': '60 9.1% 97.8%',
        '--popover': '20 14.3% 4.1%',
        '--popover-foreground': '60 9.1% 97.8%',
        '--primary': '47.9 95.8% 53.1%',
        '--primary-foreground': '26 83.3% 14.1%',
        '--secondary': '12 6.5% 15.1%',
        '--secondary-foreground': '60 9.1% 97.8%',
        '--muted': '12 6.5% 15.1%',
        '--muted-foreground': '24 5.4% 63.9%',
        '--accent': '12 6.5% 15.1%',
        '--accent-foreground': '60 9.1% 97.8%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '60 9.1% 97.8%',
        '--border': '12 6.5% 15.1%',
        '--input': '12 6.5% 15.1%',
        '--ring': '35.5 91.7% 32.9%',
      },
    })

    // theme style: Light Violet
    addBase({
      ['.' + C_THEME_STYLES.VIOLET]: {
        '--background': '0 0% 100%',
        '--foreground': '224 71.4% 4.1%',
        '--card': '0 0% 100%',
        '--card-foreground': '224 71.4% 4.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '224 71.4% 4.1%',
        '--primary': '262.1 83.3% 57.8%',
        '--primary-foreground': '210 20% 98%',
        '--secondary': '220 14.3% 95.9%',
        '--secondary-foreground': '220.9 39.3% 11%',
        '--muted': '220 14.3% 95.9%',
        '--muted-foreground': '220 8.9% 46.1%',
        '--accent': '220 14.3% 95.9%',
        '--accent-foreground': '220.9 39.3% 11%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 20% 98%',
        '--border': '220 13% 91%',
        '--input': '220 13% 91%',
        '--ring': '262.1 83.3% 57.8%',
      },
    })

    // theme style: Dark Violet
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.VIOLET]: {
        '--background': '224 71.4% 4.1%',
        '--foreground': '210 20% 98%',
        '--card': '224 71.4% 4.1%',
        '--card-foreground': '210 20% 98%',
        '--popover': '224 71.4% 4.1%',
        '--popover-foreground': '210 20% 98%',
        '--primary': '263.4 70% 50.4%',
        '--primary-foreground': '210 20% 98%',
        '--secondary': '215 27.9% 16.9%',
        '--secondary-foreground': '210 20% 98%',
        '--muted': '215 27.9% 16.9%',
        '--muted-foreground': '217.9 10.6% 64.9%',
        '--accent': '215 27.9% 16.9%',
        '--accent-foreground': '210 20% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 20% 98%',
        '--border': '215 27.9% 16.9%',
        '--input': '215 27.9% 16.9%',
      },
    })

    // theme style: Light Slate
    addBase({
      ['.' + C_THEME_STYLES.SLATE]: {
        '--background': '0 0% 100%',
        '--foreground': '222.2 84% 4.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '222.2 84% 4.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '222.2 84% 4.9%',
        '--primary': '222.2 47.4% 11.2%',
        '--primary-foreground': '210 40% 98%',
        '--secondary': '210 40% 96.1%',
        '--secondary-foreground': '222.2 47.4% 11.2%',
        '--muted': '210 40% 96.1%',
        '--muted-foreground': '215.4 16.3% 46.9%',
        '--accent': '210 40% 96.1%',
        '--accent-foreground': '222.2 47.4% 11.2%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '214.3 31.8% 91.4%',
        '--input': '214.3 31.8% 91.4%',
        '--ring': '222.2 84% 4.9%',
      },
    })

    // theme style: Dark Slate
    addBase({
      ['.' + C_THEME_MODES.DARK + ' .' + C_THEME_STYLES.SLATE]: {
        '--background': '222.2 84% 4.9%',
        '--foreground': '210 40% 98%',
        '--card': '222.2 84% 4.9%',
        '--card-foreground': '210 40% 98%',
        '--popover': '222.2 84% 4.9%',
        '--popover-foreground': '210 40% 98%',
        '--primary': '210 40% 98%',
        '--primary-foreground': '222.2 47.4% 11.2%',
        '--secondary': '217.2 32.6% 17.5%',
        '--secondary-foreground': '210 40% 98%',
        '--muted': '217.2 32.6% 17.5%',
        '--muted-foreground': '215 20.2% 65.1%',
        '--accent': '217.2 32.6% 17.5%',
        '--accent-foreground': '210 40% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 40% 98%',
        '--border': '217.2 32.6% 17.5%',
        '--input': '217.2 32.6% 17.5%',
        '--ring': '212.7 26.8% 83.9',
      },
    })

    // base styles
    addBase({
      '*': { '@apply border-border': {} },
      body: { '@apply bg-background text-foreground/95': {} },
    })
  },
)
