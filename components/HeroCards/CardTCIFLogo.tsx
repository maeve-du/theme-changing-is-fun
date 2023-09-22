// Helpers
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/constants'

// Components
import { LogoBW } from '@/components/Logo'

const LogoCardAnimationBaseStyle =
  'absolute inset-0 aspect-square h-full w-full rounded-[32px] outline-1 group-hover/logo:outline'

const CardTCIFLogo = ({ className }: CardProps) => {
  return (
    <div className={cn(`card-hero group/logo relative h-min bg-background p-5`, className)}>
      {/* Black and white Logo */}
      <LogoBW className='aspect-square h-min w-20 text-foreground transition-all duration-300 ease-in-out group-hover/logo:scale-105' />

      {/* smaller ping animation item */}
      <div
        className={cn(
          LogoCardAnimationBaseStyle,
          'outline-offset-4 outline-foreground/20 group-hover/logo:animate-another-ping',
        )}
      />

      {/* larger ping animation item */}
      <div
        className={cn(
          LogoCardAnimationBaseStyle,
          'outline-offset-8 outline-foreground/5 group-hover/logo:animate-ping',
        )}
      />
    </div>
  )
}

export default CardTCIFLogo
