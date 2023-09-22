'use client'
import { useEffect, useState } from 'react'

// Helpers
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/constants'

// Components
import { CircularProgress } from '@nextui-org/progress'

const CardCircularProgress = ({ className }: CardProps) => {
  const [value, setValue] = useState(0)

  // Animate the progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn('card-hero h-fit w-[160px] bg-background p-5', className)}>
      {/* More button */}
      <div className='group/dots absolute right-5 top-5 flex flex-col items-end gap-y-2'>
        <div className='h-2 w-2 rounded-full bg-foreground/20 group-hover/dots:bg-primary'></div>
        <div className='h-2 w-2 rounded-full bg-foreground/20 group-hover/dots:bg-primary'></div>
      </div>

      {/* Progress component (NextUI) */}
      <div className='mb-4 mt-4 items-center justify-center pb-0'>
        <CircularProgress
          aria-label='Loading...'
          classNames={{
            svg: 'w-28 h-28 strokeWidth-10',
            indicator: 'stroke-primary',
            track: 'stroke-primary/10',
            value:
              'text-2xl font-bold text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
          }}
          value={value}
          className='transition-all duration-300 ease-in'
          showValueLabel={true}
        />
      </div>
    </div>
  )
}

export default CardCircularProgress
