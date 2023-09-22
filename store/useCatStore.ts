import { create } from 'zustand'

interface CatStoreState {
  cats: {
    bigCats: number
    smallCats: number
  }
  increaseBigCats: (by?: number) => void
  decreaseBigCats: (by?: number) => void
  increaseSmallCats: (by?: number) => void
  decreaseSmallCats: (by?: number) => void
}

export const useCatStore = create<CatStoreState>((set) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },
  
  increaseBigCats: (by = 1) => {
    set((state) => ({
      cats: {
        ...state.cats,
        bigCats: state.cats.bigCats + 1,
      },
    }))
  },
  decreaseBigCats: (by = 1) => {
    set((state) => ({
      cats: {
        ...state.cats,
        bigCats: state.cats.bigCats > 0 ? state.cats.bigCats - by : state.cats.bigCats,
      },
    }))
  },

  increaseSmallCats: (by = 1) => {
    set((state) => ({
      cats: {
        ...state.cats,
        smallCats: state.cats.smallCats + by,
      },
    }))
  },
  decreaseSmallCats: (by = 1) => {
    set((state) => ({
      cats: {
        ...state.cats,
        smallCats: state.cats.smallCats > 0 ? state.cats.smallCats - by : state.cats.smallCats,
      },
    }))
  },
}))
