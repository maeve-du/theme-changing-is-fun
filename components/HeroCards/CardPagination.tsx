// Helpers
import { cn } from '@/lib/utils'
import { CardProps } from '@/lib/constants'

// Components
import { Pagination } from '@nextui-org/pagination'

const CardPagination = ({ className }: CardProps) => {
  return (
    <div
      className={cn(
        'card-hero grid max-h-[80px] min-w-[380px] items-center justify-center rounded-3xl px-5 py-2',
        className,
      )}>
      <div>
        <Pagination
          total={10}
          initialPage={2}
          classNames={{
            wrapper: 'overflow-visible h-12 gap-2 w-full',
            item: 'w-10 h-10 text-small bg-foreground/5 rounded-lg',
            cursor: 'w-10 h-10  shadow-lg bg-primary rounded-lg tansition-all duration-300',
          }}
        />
      </div>
    </div>
  )
}

export default CardPagination
