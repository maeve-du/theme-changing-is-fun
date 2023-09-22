'use client'
import { useCatStore } from '@/store/useCatStore'

const Cat = () => {
  const bigCats = useCatStore((state) => state.cats.bigCats)
  const smallCats = useCatStore((state) => state.cats.smallCats)
  const increaseBigCats = useCatStore((state) => state.increaseBigCats)
  const decreaseBigCats = useCatStore((state) => state.decreaseBigCats)
  const increaseSmallCats = useCatStore((state) => state.increaseSmallCats)
  const decreaseSmallCats = useCatStore((state) => state.decreaseSmallCats)

  return (
    <div>
      <h1>Cats</h1>
      <h2>{bigCats} Big cats</h2>
      <button
        disabled={bigCats <= 0}
        onClick={() => decreaseBigCats()}
        className='mr-3 select-none rounded-md bg-primary px-3 py-1 disabled:opacity-60'>
        Decrease big cat
      </button>
      <button onClick={() => increaseBigCats()} className='mr-3 select-none rounded-md bg-primary px-3 py-1'>
        Increase big cat
      </button>

      <h2>{smallCats} Small cats</h2>
      <button
        disabled={smallCats <= 0}
        onClick={() => decreaseSmallCats()}
        className='mr-3 select-none rounded-md bg-primary px-3 py-1 disabled:opacity-60'>
        Decrease Small cat
      </button>
      <button onClick={() => increaseSmallCats()} className='mr-3 select-none rounded-md bg-primary px-3 py-1'>
        Increase Small cat
      </button>
    </div>
  )
}

export default Cat
