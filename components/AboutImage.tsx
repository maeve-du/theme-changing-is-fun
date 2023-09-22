import { forwardRef } from 'react'

import Image from 'next/image'
import { Saly } from '@/public/assets/images'

import { motion } from 'framer-motion'

interface AboutImageProps {
  className?: string
}

const AboutImage = forwardRef<HTMLDivElement, AboutImageProps>(({ className }, ref) => {
  return (
    <motion.div ref={ref} className={className}>
      <Image
        src={Saly}
        alt=''
        className='aspect-square w-[500px] origin-bottom -translate-y-[0px] translate-x-[0px] laptopS:-translate-y-[50px] laptop:translate-x-[83px] '
      />
    </motion.div>
  )
})

AboutImage.displayName = 'AboutImage'

export const MotionAboutImage = motion(AboutImage, { forwardMotionProps: true })

export default AboutImage
