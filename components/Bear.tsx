'use client'
import { cn } from '@/lib/utils'
import { useBearStroe } from '@/store/useBearStore'
import { Loader2 } from 'lucide-react'
import { Fragment, useEffect, useState } from 'react'

const Loading = () => <Loader2 className='inline-block h-4 animate-spin' />

const Bear = () => {
  const count = useBearStroe((state) => state.count)
  const increment = useBearStroe((state) => state.increment)
  const decrement = useBearStroe((state) => state.decrement)
  const removeAll = useBearStroe((state) => state.removeAll)

  const [isMounted, setIsMounted] = useState(false)
  const [bearState, setBearState] = useState<number>()

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
    setBearState(count)
  }, [count])

  // if (!isMounted) return <div>Loading...</div>

  return (
    <div>
      <h1 className='flex items-center '>{isMounted ? count : <Loading />}bears</h1>

      <button
        onClick={() => decrement()}
        disabled={!isMounted ? false : count <= 0}
        className={cn(
          'mr-3 select-none rounded-md bg-primary px-3 py-1 disabled:opacity-60',
          !isMounted && 'opacity-0',
        )}>
        Decrease
      </button>
      <button
        onClick={() => increment()}
        className={cn(
          'mr-3 select-none rounded-md bg-primary px-3 py-1 disabled:opacity-60',
          !isMounted && 'opacity-0',
        )}>
        Increase
      </button>
      <button
        onClick={() => removeAll()}
        className={cn(
          'mr-3 select-none rounded-md bg-primary px-3 py-1 disabled:opacity-60',
          !isMounted && 'opacity-0',
        )}>
        Remove all
      </button>
    </div>
  )
}

export default Bear
