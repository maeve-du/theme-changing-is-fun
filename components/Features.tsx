'use client'
// Helpers
import { C_HashIds, featuresCardsData } from '@/lib/constants'

// Components/UI
import { SectionHeading, SectionTitleGroup, SectionDescription, GradientText } from '@/components/TextWrappers'
import FeatureCard from '@/components/FeatureCard'

// Animation
import { containerAnimation } from '@/lib/motion'
import { motion } from 'framer-motion'

interface CardIconProps {
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>
}

const CardIcon = ({ IconComponent }: CardIconProps) => {
  return (
    <IconComponent className='h-10 w-10 text-primary group-hover/icon:animate-bounce-softer dark:brightness-200 dark:saturate-100' />
  )
}

const Features = () => {
  return (
    <div className='c-container flex-col' id={C_HashIds.FEATURES}>
      <SectionTitleGroup align='center' Padding='large'>
        <SectionHeading className='leading-[1.2em]' size='medium'>
          Unlock the <GradientText gradient='orange'>Power</GradientText> of Theme Customization
        </SectionHeading>
        <SectionDescription>
          Explore the outstanding features of the website, highlighting the mastery of our theme system configuration,
          designed to enhance the user experience
        </SectionDescription>
      </SectionTitleGroup>

      <motion.div
        variants={containerAnimation()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.15 }}
        className='grid grid-cols-1 gap-6 mini:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4'>
        {featuresCardsData.map((cardItem) => (
          <FeatureCard
            key={cardItem.id}
            title={cardItem.title}
            description={cardItem.description}
            icon={<CardIcon IconComponent={cardItem.icon} />}
          />
        ))}
      </motion.div>
    </div>
  )
}

export default Features
