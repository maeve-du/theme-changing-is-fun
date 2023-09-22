'use client'

// Libraries
import { motion } from 'framer-motion'

// Components
import { SectionDescription, SectionHeading, SectionSubHeading, SectionTitleGroup } from '@/components/TextWrappers'

// Section title group
export const MotionSectionTitleGroup = motion(SectionTitleGroup, { forwardMotionProps: true })

// Section sub heading with motion
export const MotionSectionSubHeading = motion(SectionSubHeading, { forwardMotionProps: true })

// Section heading with motion
export const MotionSectionHeading = motion(SectionHeading, { forwardMotionProps: true })

// Section description with motion
export const MotionSectionDescription = motion(SectionDescription, { forwardMotionProps: true })
