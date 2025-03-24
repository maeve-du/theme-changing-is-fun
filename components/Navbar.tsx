'use client'
import { useState } from 'react'
import Link from 'next/link'

// Helpers
import { cn } from '@/lib/utils'
import useClientMounted from '@/hooks/useClientMounted'
import { C_HashIds, NavItems } from '@/lib/constants'

// Hooks
import useHash from '@/hooks/useHash'
import useScrolling from '@/hooks/useScrolling'

// Components/UI
import ThemeModeSwitcher from '@/components/ThemeModeSwitcher'
import ThemeStyleSwitcher from '@/components/ThemeStyleSwitcher'
import NavItemsMobile from '@/components/NavItemsMobile'
import { Button } from '@/components/ui/button'
import Logo from '@/components/Logo'

// Icons
import { GaleOIconBars3Hi, GaleOIconXMarkHi } from 'gale-icons'
import useBodyScroll from '@/hooks/useBodyScroll'

// --> Begins here
const Navbar = () => {
  const isMounted = useClientMounted()
  const { hash, setHash } = useHash()
  const [isNavToggleOn, setIsNavToggleOn] = useState(false)
  const { isScrolling } = useScrolling()

  const headerScrollTransition = isScrolling
    ? 'bg-background/75 py-4 shadow-sm shadow-foreground/5 backdrop-blur-md'
    : 'bg-transparent py-6 shadow-none'

  const handleNavToggle = () => {
    setIsNavToggleOn((prevState) => !prevState)
  }

  const handleNavToggleOff = () => {
    if (isNavToggleOn) setIsNavToggleOn(false)
  }

  // Prevent body scroll when mobile nav is open
  useBodyScroll(isNavToggleOn)

  if (!isMounted) return null

  return (
    // full header container, fixed to top, transition on scroll, full width
    <header className={cn('fixed z-50 mx-auto w-full')} onClick={handleNavToggleOff}>
      {/* main nav container */}
      <div
        className={cn(
          headerScrollTransition,
          'c-container flex-row items-center justify-between transition-all duration-300',
        )}>
        {/* left logo */}
        <Link className='flex items-center gap-x-2' href={`#${C_HashIds.HOME}`} onClick={() => setHash(C_HashIds.HOME)}>
          <Logo />
          <p className='hidden text-xl font-medium uppercase tablet:block'>THEME CHANGING IS FUN</p>
          <p className='text-xl font-medium uppercase tablet:hidden'>TCIF</p>
        </Link>
        {/* center nav items */}
        <nav className={cn('hidden gap-x-4 mini:flex')}>
          {NavItems.map((item) => {
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  'rounded-xl px-4 py-2 text-foreground/80 transition-all duration-300 ease-in hover:text-foreground',
                  hash === item.href ? 'bg-foreground/5 text-foreground/100' : 'bg-transparent',
                )}
                onClick={() => setHash(item.href)}>
                {item.label}
              </Link>
            )
          })}
        </nav>
        <div className='flex items-center gap-x-2'>
          {/* right Links and buttons */}
          <ThemeModeSwitcher handleOpen={handleNavToggleOff} />
          <ThemeStyleSwitcher handleOpen={handleNavToggleOff} />

          {/* Mobile Nav toggle button */}
          <Button
            onClick={handleNavToggle}
            className='cursor-pointer border mini:hidden'
            size={'icon'}
            variant={'ghost'}>
            {isNavToggleOn ? <GaleOIconXMarkHi /> : <GaleOIconBars3Hi />}
          </Button>
        </div>
      </div>
      {/* mobile nav items */}
      <NavItemsMobile isNavToggleOn={isNavToggleOn} handleNavToggle={handleNavToggle} />
    </header>
  )
}

export default Navbar
