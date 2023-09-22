import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// import { C_THEME_NAMES } from './constants'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatThemeName(input: string): string {
  // Split the input string by '-' and take the second part
  const parts = input.split('-')
  if (parts.length > 1) {
    const secondPart = parts[1]
    // Capitalize the first letter of the second part
    return secondPart.charAt(0).toUpperCase() + secondPart.slice(1)
  } else {
    // If there is no dash, capitalize the first letter of the entire input
    return input.charAt(0).toUpperCase() + input.slice(1)
  }
}
