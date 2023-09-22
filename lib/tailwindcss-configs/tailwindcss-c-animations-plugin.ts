/**
 * @file Tailwind CSS Animation Plugin
 * @author Maeve Du
 * @version 1.0
 * @created 2023-09-12
 * @update
 * @description
 * This plugin defines animation settings for the `tailwindcss.config.js` file.
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

export const tailwindcssCAnimationPlugin = plugin(
  function () {},

  // Extend/override Tailwind's default config: Themes,plugins, etc...
  {
    theme: {
      extend: {
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          }, // default from tailwindcss
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          }, // default from tailwindcss
          float: {
            '0%': { transform: 'translateY(0)' },
            '30%': { transform: 'translateY(-10px)' },
            '50%': { transform: 'translateY(4px)' },
            '70%': { transform: 'translateY(-15px)' },
            to: { transform: 'translateY(0)' },
          },
          'another-ping': {
            '75%': { transform: 'scale(1.5)', opacity: '0' },
            '100%': { transform: 'scale(1.5)', opacity: '0' },
          },
          'another-bounce': {
            '0%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
            '60%': { transform: 'translateY(-20%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
            '100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          },
          scooter: {
            '0%': {
              transform: 'translateY(0)',
              animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            },
            '20%': { transform: 'translateY(-1%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
            '40%': { transform: 'translateY(0%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
            '60%': { transform: 'translateY(-2%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
            '80%': { transform: 'translateY(-1%)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
            '100%': {
              transform: 'translateY(0)',
              animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
            },
          },
          moving: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(100%)' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out', // default from tailwindcss
          'accordion-up': 'accordion-up 0.2s ease-out', // default from tailwindcss

          'another-ping': 'another-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
          'float-16s-d1s': 'float 16s ease 1s infinite reverse',
          'float-10s': 'float 10s ease reverse infinite',
          'float-12s-d1s': 'float 12s ease 1s infinite',
          'float-17s-d1s': 'float 17s ease 1s infinite',
          'float-16s': 'float 16s ease infinite',
          'float-18s': 'float 18s ease infinite',
          'float-14s-d1s': 'float 18s ease 1s infinite',
          'bounce-softer': 'another-bounce 1s ease infinite',
          scooter: 'scooter 3s cubic-bezier(0, 0.3, 0.7, 1) infinite',
          // moving: 'moving 2s linear',
        },
      },
    },
  },
)
