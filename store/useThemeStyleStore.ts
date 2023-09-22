import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { C_THEME_STYLES } from '@/lib/constants'

interface colorStoreState {
  theme_color: C_THEME_STYLES
  theme_radius: number
  setThemeStyleColor: (color: C_THEME_STYLES) => void
}

export const useThemeStyleStore = create<colorStoreState>()(
  persist(
    (set) => ({
      theme_color: C_THEME_STYLES.ROSE,
      theme_radius: 0.95,
      setThemeStyleColor: (color) => set({ theme_color: color }),
    }),
    { name: 'theme-style-config' },
  ),
)
