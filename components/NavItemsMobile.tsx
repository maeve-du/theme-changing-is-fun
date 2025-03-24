import Link from 'next/link'

// Helpers
import { cn } from '@/lib/utils'
import { NavItems } from '@/lib/constants'

// Hooks
import useHash from '@/hooks/useHash'

interface Props {
  isNavToggleOn: boolean
  handleNavToggle: () => void
}

const NavItemsMobile = ({ isNavToggleOn: isNavToggleOn, handleNavToggle }: Props) => {
  const { setHash } = useHash()
  return (
    <div>
      <nav
        className={cn(
          isNavToggleOn ? 'z-50 flex min-h-fit w-full flex-col items-center px-4 py-12 ' : 'hidden',
          'w-full bg-background text-lg transition-all duration-300 ease-in first:border-b-foreground  mini:hidden',
        )}>
        {NavItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => {
              handleNavToggle()
              setHash(item.href)
            }}
            className='px-5 py-4 text-center first-of-type:border-b'>
            {item.label}
          </Link>
        ))}
      </nav>
      <div
        onClick={handleNavToggle}
        className={cn(
          isNavToggleOn ? 'absolute z-50 block min-h-screen w-full bg-foreground/60' : 'hidden',
          'mini:hidden',
        )}
      />
    </div>
  )
}

export default NavItemsMobile
