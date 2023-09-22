// Helpers
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/constants'

// Components
import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Assets
import { product01 } from '@/public/assets/images'

const CardProduct = ({ className }: CardProps) => {
  return (
    <div className={cn('card-hero relative flex w-[160px] flex-col gap-y-3 p-5', className)}>
      {/* Header image */}
      <div className='relative'>
        <div className='relative aspect-square w-full overflow-hidden rounded-3xl'>
          <Image src={product01} alt='Avatar image' />
        </div>
      </div>

      {/* Body content */}
      <div className='w-full text-center'>
        <h3>Natural Energy</h3>
      </div>

      {/* Footer action */}
      <div className='w-full'>
        <Button className='w-full rounded-2xl' variant={'default'}>
          Add to cart
        </Button>
      </div>
    </div>
  )
}

export default CardProduct
