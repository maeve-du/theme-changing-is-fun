import { forwardRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TextWrapperBaseProps {
  children?: ReactNode
  className?: string
  noMarginBottom?: boolean
}

interface HeadingProps extends TextWrapperBaseProps {
  size?: 'large' | 'medium' | 'small'
}

interface TitleGroupProps extends TextWrapperBaseProps {
  align?: 'left' | 'center' | 'right'
  Padding?: 'none' | 'small' | 'medium' | 'large'
}

interface GradientTextProps extends TextWrapperBaseProps {
  gradient?: 'orange' | 'green' | 'blue' | 'purple'
}

// Title Group
export const SectionTitleGroup = forwardRef<HTMLDivElement, TitleGroupProps>(
  ({ children, align = 'left', Padding = 'large', className }, ref) => {
    const PaddingStyleMap = {
      none: 'py-0',
      small: 'py-8',
      medium: 'py-16',
      large: 'pt-32 pb-20',
    }
    const paddingStyles = PaddingStyleMap[Padding]

    const alignStyleMap = {
      left: 'items-start',
      center: 'items-center text-center mx-auto',
      right: 'items-end',
    }

    const alignStyles = alignStyleMap[align]

    return (
      <div ref={ref} className={cn('flex flex-col', paddingStyles, alignStyles, className)}>
        {children}
      </div>
    )
  },
)

SectionTitleGroup.displayName = 'SectionTitleGroup'

// Sub heading
export const SectionSubHeading = forwardRef<HTMLHeadingElement, TextWrapperBaseProps>(
  ({ children, noMarginBottom, className, ...rest }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          'text-sm font-light uppercase tracking-[0.2em] text-foreground/60',
          !noMarginBottom && 'mb-2',
          className,
        )}
        {...rest}>
        {children}
      </h3>
    )
  },
)
SectionSubHeading.displayName = 'SectionSubHeading'

// Heading
export const SectionHeading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ children, noMarginBottom, className, size = 'large', ...rest }, ref) => {
    const textSizeMap = {
      large: 'text-5xl',
      medium: 'text-4xl',
      small: 'text-3xl',
    }
    const textSize = textSizeMap[size]

    return (
      <h2 ref={ref} className={cn('font-bold', textSize, !noMarginBottom && 'mb-8', className)} {...rest}>
        {children}
      </h2>
    )
  },
)

SectionHeading.displayName = 'SectionHeading'

// Description
export const SectionDescription = forwardRef<HTMLParagraphElement, TextWrapperBaseProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <p ref={ref} className={cn('w-[60%] whitespace-normal font-light text-muted-foreground/80', className)} {...rest}>
        {children}
      </p>
    )
  },
)

SectionDescription.displayName = 'SectionDescription'

// Gradient text
export const GradientText = ({ children, gradient = 'blue' }: GradientTextProps) => {
  const gradientClassMap = {
    orange: 'orange_gradient',
    green: 'green_gradient',
    blue: 'blue_gradient',
    purple: 'purple_gradient',
    // Add more gradients as needed
  }

  const className = gradientClassMap[gradient]

  return <span className={className}>{children}</span>
}
