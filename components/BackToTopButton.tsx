'use client'
import Link from 'next/link'

import useHash from '@/hooks/useHash'
import useScrolling from '@/hooks/useScrolling'

import { ChevronUp } from 'lucide-react'
import { C_HashIds } from '@/lib/constants'

const BackToTopButton = () => {
  const { setHash } = useHash()
  const { isScrolling } = useScrolling(400)
  if (!isScrolling) return null

  return (
    <Link
      href={`#${C_HashIds.HOME}`}
      className='fixed bottom-12 right-6 flex aspect-square w-11 select-none items-center justify-center rounded-2xl border-2 border-foreground/20 bg-background p-2 text-foreground/50 hover:border-white/40 hover:bg-primary/60 hover:text-primary-foreground mini:bottom-36'
      onClick={() => setHash(`#${C_HashIds.HOME}`)}>
      <ChevronUp />
    </Link>
  )
}

export default BackToTopButton
