'use client'
import { useState } from 'react'

// Helpers
import useClientMounted from '@/hooks/useClientMounted'
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/constants'

// Components
import { Calendar } from '@/components/ui/calendar'

// Packages
import { DateRange } from 'react-day-picker'
import { addDays } from 'date-fns'

const CardCalendar = ({ className }: CardProps) => {
  const isMounted = useClientMounted()

  const today = new Date()
  const defaultSelected = {
    from: today,
    to: addDays(today, 4),
  }
  const [range, setRange] = useState<DateRange | undefined>(defaultSelected)

  if (!isMounted) return null
  return (
    <div className={cn('w-full tablet:max-w-[300px]', className)}>
      <Calendar mode='range' selected={range} onSelect={setRange} className='card-hero p-5' />
    </div>
  )
}

export default CardCalendar
