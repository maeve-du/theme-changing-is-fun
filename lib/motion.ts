import { Variants } from 'framer-motion'

interface MotionProps {
  direction?: 'left' | 'right' | 'up' | 'down'
  delay?: number
  duration?: number
  type?: 'easeOut' | 'easeInOut' | 'easeIn'
}

const getDirectionProps = (direction: MotionProps['direction']) => {
  switch (direction) {
    case 'left':
      return { x: '-100%' }
    case 'right':
      return { x: '100%' }
    case 'up':
      return { y: '-100%' }
    case 'down':
      return { y: '100%' }
    default:
      return {}
  }
}

export const AboutImageVariants = (): Variants => {
  return {
    hidden: {
      x: -400,
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 3,
      },
    },
  }
}

export const containerAnimation = (duration: number = 0.5, delay: number = 0.2): Variants => {
  return {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        duration: duration,
      },
    },
  }
}

export const childItemAnimation = {
  hidden: { x: -20, opacity: 0.8 },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'easeIn',
    },
  },
}

export const textAnimationVariants = (): Variants => {
  return {
    hidden: {
      y: -30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'easeIn',
        duration: 1,
      },
    },
  }
}
