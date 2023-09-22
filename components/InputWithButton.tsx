import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ChevronRightIcon } from 'lucide-react'

export function InputWithButton() {
  return (
    <div className='flex w-full max-w-sm items-center space-x-2'>
      <Input
        type='text'
        placeholder='Location'
        className='h-10 rounded-[13px] border-none bg-muted-foreground/10 placeholder:text-foreground/20'
      />
      <Button type='submit' size={'icon'} variant={'outline'} className='aspect-square h-10 w-14 rounded-[14px]'>
        <ChevronRightIcon />
      </Button>
    </div>
  )
}
