// app/providers.tsx
'use client'
import { ReactNode } from 'react'

// Next themes provider, use it to change themes
import { ThemeProvider as NextThemesProvider } from 'next-themes'

// Next UI provider, Component library
// import { NextUIProvider } from '@nextui-org/system'
import { C_THEME_MODES } from '@/lib/constants'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider attribute='class' defaultTheme='light' themes={Object.values(C_THEME_MODES)} enableColorScheme>
      {/* <NextUIProvider> */}
      {children}
      {/* </NextUIProvider> */}
    </NextThemesProvider>
  )
}
