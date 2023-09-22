'use client'
import { useState } from 'react'

// Helpers
import { cn } from '@/lib/utils'
import { CardProps, City, CityList } from '@/lib/constants'

import { InputWithButton } from '@/components/InputWithButton'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

// --> Begins here
const CardForm = ({ className }: CardProps) => {
  const [cities, setCities] = useState<City[]>(CityList)

  // Change the state of the checkbox
  const handleCheckboxClick = (currentCity: City) => {
    setCities((preState) => {
      return preState.map((clickedCity) => {
        if (clickedCity.value === currentCity.value) {
          return { ...clickedCity, ischecked: !clickedCity.ischecked }
        }
        return clickedCity
      })
    })
  }

  return (
    <div className={cn('card-hero w-[240px] flex-col gap-y-5 p-5 laptop:flex', className)}>
      {/* Form header */}
      <InputWithButton />

      {/* Form body */}
      <div className='space--2 flex flex-col items-start gap-y-4'>
        {cities.map((city) => (
          <div className='flex flex-row items-center gap-x-3' key={city.value}>
            <Checkbox
              id={city.value}
              value={city.value}
              checked={city.ischecked}
              className='rounded-[8px]'
              onClick={() => handleCheckboxClick(city)}
            />
            <Label htmlFor={city.value}>{city.label}</Label>
          </div>
        ))}
      </div>

      {/* footer */}
      <div>
        <Button className='w-full rounded-2xl'>{`Search`}</Button>
      </div>
    </div>
  )
}

export default CardForm
