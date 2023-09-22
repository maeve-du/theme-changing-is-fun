'use client'
import { useState } from 'react'

// Helpers
import { CardProps } from '@/lib/constants'

// Components
import { Switch } from '@/components/ui/switch'

const CardSwitch = ({ className, checked }: CardProps) => {
  const [isChecked, setIsChecked] = useState(checked)

  return (
    <Switch
      id='switch-component'
      checked={isChecked}
      onClick={() => setIsChecked((preState) => !preState)}
      className={className}
    />
  )
}

export default CardSwitch
