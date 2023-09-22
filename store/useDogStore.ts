import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface Dog {
  giantDogs: number
  puppies: number
}

interface DogStoreState {
  dog: Dog
  increaceGiantDogs: (by?: number) => void
  increacePuppies: (by?: number) => void
  // summary: () => void
}

export const useDogStore = create<DogStoreState>()(
  immer((set) => ({
    dog: {
      giantDogs: 0,
      puppies: 0,
    },
    increaceGiantDogs: (by = 1) => {
      set((state) => {
        state.dog.giantDogs += by
      })
    },
    increacePuppies(by = 1) {
      set((state) => {
        state.dog.puppies += by
      })
    },
    summary: () => {
      const { dog } = useDogStore.getState()
      return `There are ${dog.giantDogs} giant dogs and ${dog.puppies} puppies.}`
    },
  })),
)
