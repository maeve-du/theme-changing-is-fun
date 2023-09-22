import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface BearStoreState {
  count: number
  increment: (by?: number) => void
  decrement: (by?: number) => void
  removeAll: () => void
}

export const useBearStroe = create<BearStoreState>()(
  persist(
    (set) => ({
      count: 0,
      increment: (by = 1) => set((state) => ({ count: state.count + by })),
      decrement: (by = 1) => set((state) => ({ count: state.count > 0 ? state.count - by : state.count })),
      removeAll: () => set({ count: 0 }),
    }),
    { name: 'bear store' },
  ),
)
