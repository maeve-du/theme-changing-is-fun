import { cn } from '@/lib/utils'
import { SVGProps } from 'react'
const ShadcnuiLogo = (props: SVGProps<SVGSVGElement>) => (
  <div className={cn('flex cursor-default items-center justify-center gap-x-1', props.className)}>
    <svg xmlns='http://www.w3.org/2000/svg' stroke='currentColor' viewBox='0 0 256 256' height='2rem'>
      <path
        fill='none'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={16}
        d='m208 128-80 80M192 40 40 192'
      />
    </svg>
    <span className='text-[1.5rem]'>Shadcn/ui</span>
  </div>
)
export default ShadcnuiLogo
