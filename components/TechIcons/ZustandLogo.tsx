'use client'

import { cn } from '@/lib/utils'
import { ZustandIcon, ZustandIconHover } from '@/public/assets/images'
import Image from 'next/image'
import React, { useState } from 'react'
const ZustandLogo = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className='flex cursor-default flex-row items-center gap-x-2'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div>
        <Image src={isHovered ? ZustandIconHover : ZustandIcon} alt='ZustandIcon' className='aspect-square w-12' />
      </div>
      <p className={cn(isHovered ? 'text-foreground' : 'text-[#7591B8]', 'text-2xl font-extrabold')}>ZUSTAND</p>
    </div>
  )
}

export default ZustandLogo
