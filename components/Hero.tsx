'use client'
import Link from 'next/link'

// Helpers
import useClientMounted from '@/hooks/useClientMounted'
import { cn } from '@/lib/utils'

// Components
import {
  CardCalendar,
  CardCircularProgress,
  CardForm,
  CardPagination,
  CardProduct,
  CardSwitch,
  CardTCIFLogo,
  CardUserProfile,
} from '@/components/HeroCards'
import { Button } from '@/components/ui/button'
import GitHubLogo from '@/components/GitHubLogo'

// Animation
import { motion } from 'framer-motion'
import { containerAnimation, textAnimationVariants } from '@/lib/motion'
import { C_HashIds } from '@/lib/constants'

// Css
const cardSwitchStyles = 'hidden animate-float-10s laptop:absolute laptop:block laptop:top-[10px]'

const Hero = () => {
  const isMounted = useClientMounted()

  return (
    <div
      className={cn(
        'c-container items-between w-full flex-col gap-6 pb-10 pt-24 tablet:pt-36 laptop:min-h-[780px] laptop:flex-row',
        !isMounted && 'opacity-0',
      )}>
      {/* Left side */}
      {/* takes full width below laptop size, takes 50% width above laptop size */}
      {/* display items in cols */}
      <motion.div
        variants={containerAnimation(2)}
        initial='hidden'
        animate='show'
        className='mb-10 flex flex-col items-center justify-start gap-y-8 laptop:items-start'>
        <motion.h1
          variants={textAnimationVariants()}
          className='w-full text-center text-4xl font-extrabold leading-[52px] mini:text-6xl mini:leading-[76px] laptop:w-1/2 laptop:text-left'>
          Effortless <span className='primary_gradient'>Theme Customization</span> Made Simple
        </motion.h1>
        <motion.p
          variants={textAnimationVariants()}
          className='w-full text-center text-base text-foreground/70 laptop:w-1/2 laptop:text-left'>
          Tailwind CSS-powered simplicity. Easily configure themes for a unique website.
        </motion.p>
        <motion.div
          variants={textAnimationVariants()}
          className='grid w-full grid-cols-1 gap-4 tablet:flex tablet:w-fit'>
          <Button className='h-12 rounded-2xl px-16' asChild>
            <Link href={`#${C_HashIds.FEATURES}`}>Get Started</Link>
          </Button>
          <Button variant={'outline'} className='h-12 rounded-2xl' asChild>
            <a
              href='https://github.com/maeve-du/theme-changing-is-fun'
              rel='noopener noreferrer'
              target='_blank'
              className='underline underline-offset-4'>
              <GitHubLogo />
            </a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Right side */}
      {/* takes full width below laptop size, display items in rows and auto wrap the items */}
      {/* takes 50% width above laptop size and display items in cols */}
      <div className='relative flex w-full flex-row flex-wrap justify-center gap-10 laptop:w-1/2 laptop:flex-col'>
        {/*  */}
        {/* only show CardSwitchs above laptop size */}
        <CardSwitch className={cn(cardSwitchStyles, 'laptop:right-[200px]')} checked={false} />
        <CardSwitch className={cn(cardSwitchStyles, 'laptop:right-[80px]')} checked={true} />

        {/* always show CardUserProfile */}
        <CardUserProfile className='animate-float-16s laptop:absolute laptop:right-[450px] laptop:top-[320px]' />

        {/* always show CardProduct */}
        <CardProduct className='animate-float-16s-d1s laptop:absolute laptop:right-[202px] laptop:top-[88px]' />

        {/* always show CardCircularProgress */}
        <CardCircularProgress className='z-10 animate-float-12s-d1s laptop:absolute laptop:-right-[50px] laptop:top-[200px] laptop:block' />

        {/* only show CardCalendar above laptop size */}
        <CardCalendar className='hidden animate-float-17s-d1s laptop:absolute laptop:-top-[40px] laptop:right-[390px] laptop:block' />

        {/* only show CardCalendar above laptop size */}
        <CardForm className='hidden animate-float-14s-d1s laptop:absolute laptop:right-[20px] laptop:top-[360px]' />

        {/* only show CardTCIFLogo above laptop size */}
        <CardTCIFLogo className='hidden animate-float-14s-d1s laptop:absolute laptop:right-[300px] laptop:top-[360px] laptop:block' />

        {/* only show CardPagination above laptop size */}
        <CardPagination className='hidden animate-float-16s-d1s mobileL:absolute laptop:absolute laptop:-right-[200px] laptop:top-[80px] laptop:block' />
      </div>
    </div>
  )
}

export default Hero
