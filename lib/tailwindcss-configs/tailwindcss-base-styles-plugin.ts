/**
 * @file Tailwind CSS Base Styles Plugin
 * @author Maeve Du
 * @version 1.0
 * @created 2023-09-12
 * @update
 * @description
 * This plugin defines base styles settings for the `tailwindcss.config.js` file.
 * The goal is to keep Tailwindcss.config.ts files neat and clean
 *
 * @AddToPreset
 * 1. Add this plugin to tailwindcss-preset.ts
 * 2. Include the `tailwindcss-preset` in the `presets` array within your `tailwind.config.js` file.
 *
 *
 */

// Tailwindcss config tools
import plugin from 'tailwindcss/plugin'

export const tailwindcssBaseStylesPlugin = plugin(
  // Add css variable definitions/base styles to @layer base
  function () {},

  // Extend/override Tailwind's default config: Themes,plugins, etc...
  {
    theme: {
      container: {
        padding: {
          DEFAULT: '20px',
          desktop: '40px',
        },
        screens: {
          desktop: '1440px',
          // set the max-width of the container to 1440px
        },
      },
      screens: {
        mobileL: '425px',
        // => @media (min-width: 640px) { ... }
        // Use it very occasionally, only when need to adjust for a specific layout

        mini: '640px',
        // => @media (min-width: 640px) { ... }

        tablet: '768px',
        // => @media (min-width: 768px) { ... }

        laptopS: '1024px',
        // => @media (min-width: 1024px) { ... }
        // Use it very occasionally, only when need to adjust for a specific layout

        laptop: '1280px',
        // => @media (min-width: 1280px) { ... }

        desktop: '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        boxShadow: {
          '3xl': '0 2px 50px -5px rgba(0, 0, 0, 0.3)',
        },
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)',
        },
        dropShadow: {
          '2xl': '0 25px 25px hsl(var(--foreground) /0.15)',
          '3xl': '0 35px 35px hsl(var(--foreground) /0.2)',
        },
      },
    },
  },
)
