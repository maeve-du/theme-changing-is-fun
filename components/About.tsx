'use client'

// Helpers
import { AboutImageVariants, containerAnimation, textAnimationVariants } from '@/lib/motion'

// Components
import { MotionAboutImage } from '@/components/AboutImage'
import { MotionSectionHeading, MotionSectionDescription } from '@/components/MotionTextWrappers'

// Animation
import { motion } from 'framer-motion'
import { C_HashIds } from '@/lib/constants'

const About = () => {
  return (
    <div className='c-container relative mt-36 h-52' id={C_HashIds.ABOUT}>
      <motion.div
        variants={containerAnimation(2, 0.3)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}
        className='flex w-full flex-col-reverse items-center justify-between gap-6 rounded-[32px] bg-indigo-950 p-8 mini:flex-row mini:gap-0 mini:py-36'>
        <div className=''>
          <MotionSectionHeading
            variants={textAnimationVariants()}
            className='break-all text-2xl text-white mobileL:text-3xl tablet:text-5xl'>
            Free and open-source
          </MotionSectionHeading>
          <MotionSectionDescription variants={textAnimationVariants()} className='w-[100%] text-white/80'>
            <span>The source code is available on </span>
            <a
              href='https://github.com/maeve-du/theme-changing-is-fun'
              rel='noopener noreferrer'
              target='_blank'
              className='py-4 pr-4 underline underline-offset-4'>
              <span>GitHub</span>
            </a>
          </MotionSectionDescription>
        </div>
        <MotionAboutImage variants={AboutImageVariants()} className='w-[35%] mini:w-[30%]' />
      </motion.div>
    </div>
  )
}

export default About
