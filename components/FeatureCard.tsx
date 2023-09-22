'use client'
// Helpers
import { cn } from '@/lib/utils'
import useClientMounted from '@/hooks/useClientMounted'

// Animation
import { motion } from 'framer-motion'
import { childItemAnimation } from '@/lib/motion'
import { ReactNode } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  const isMounted = useClientMounted()
  return (
    <motion.div
      variants={childItemAnimation}
      className={cn(
        'group/icon flex w-full flex-col items-start gap-y-5 rounded-3xl border border-foreground/5  bg-background p-7 transition-all duration-300 ease-in-out hover:border-transparent hover:drop-shadow-3xl dark:border-white/10 dark:bg-slate-900',
        !isMounted && 'invisible',
      )}>
      <div className='grid aspect-square h-20 items-center justify-center rounded-3xl bg-primary/10  dark:bg-white/10'>
        {icon}
      </div>
      <div>
        <h3 className='mb-2 text-2xl font-semibold'>{title}</h3>
        <p className='text-sm font-light leading-relaxed text-foreground/80'>{description}</p>
      </div>
    </motion.div>
  )
}

export default FeatureCard
