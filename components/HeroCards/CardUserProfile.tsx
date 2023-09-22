import { avatar01 } from '@/public/assets/images'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/constants'

const badgeStyle =
  'after:absolute after:-right-2 after:bottom-1 after:grid after:h-7 after:w-7 after:items-center after:justify-center after:rounded-full after:bg-destructive after:text-[15px] after:font-bold after:text-destructive-foreground after:shadow-lg after:shadow-destructive after:content-["1"]'

const CardUserProfile = ({ className }: CardProps) => {
  return (
    <div
      className={cn(
        'card-hero flex h-fit min-w-[330px] flex-row gap-x-2 bg-background/30 p-5 mobileL:min-w-[430px] mobileL:gap-x-6',
        className,
      )}>
      {/* left side */}
      <div className='relative max-h-[7rem] max-w-[7rem]'>
        {/* User avatar and badge */}
        <div className={badgeStyle}>
          <div className='relative aspect-square h-28 min-w-[7rem] overflow-hidden rounded-3xl'>
            <Image src={avatar01} alt='Avatar image' />
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='w-full'>
        {/* info */}
        <div>
          <h3 className='text-lg font-medium'>Shadrias Pearson</h3>
          <p className='mb-5 w-auto whitespace-normal font-light text-muted-foreground/60'>Sent you a friend request</p>
          <p className='hidden w-auto whitespace-normal text-sm font-light text-muted-foreground/60 mobileL:block'>
            1 hour ago
          </p>
        </div>

        {/* actions */}
        <div className='absolute -bottom-4 flex gap-x-2 mobileL:gap-x-4'>
          <Button className='rounded-2xl shadow-xl shadow-primary/10 mobileL:px-8' variant={'default'}>
            Accept
          </Button>
          <Button
            variant={'ghost'}
            className='rounded-2xl bg-background text-foreground/70 shadow-xl shadow-foreground/5 mobileL:px-8'>
            Not now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CardUserProfile
