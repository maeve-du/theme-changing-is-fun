'use client'
import { useEffect } from 'react'

// Themes
import { useThemeStyleStore } from '@/store/useThemeStyleStore'
import { C_THEME_STYLES, ThemeSwitcherProps } from '@/lib/constants'

// helpers
import { cn, formatThemeName } from '@/lib/utils'
import useClientMounted from '@/hooks/useClientMounted'

// Components/Icons
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu'
import { Paintbrush2Icon } from 'lucide-react'

// --> Begins here
const ThemeStyleSwitcher = ({ handleOpen }: ThemeSwitcherProps) => {
  // local state
  const themeStyleColor = useThemeStyleStore((state) => state.theme_color)
  const setThemeColor = useThemeStyleStore((state) => state.setThemeStyleColor)

  const isMounted = useClientMounted()

  useEffect(() => {
    document.body.classList.add(themeStyleColor)
    return () => {
      document.body.classList.remove(themeStyleColor)
    }
  }, [themeStyleColor])

  if (!isMounted) return null

  return (
    <DropdownMenu onOpenChange={handleOpen}>
      {/* Trigger button */}
      <DropdownMenuTrigger asChild>
        <div>
          <Button variant='outline' className='bg-background/60'>
            <div className='mr-1 h-3 w-3 rounded-full border border-background/30 bg-primary'></div>
            <Paintbrush2Icon className='scale-[80%]' />
          </Button>
        </div>
      </DropdownMenuTrigger>

      {/* Droped menu */}
      <DropdownMenuContent align='end' className='mt-2 rounded-2xl  border-2 border-foreground/10 p-4 shadow-none'>
        {/* Title */}
        <DropdownMenuLabel className='mb-2 text-xl'>Pick a theme color</DropdownMenuLabel>

        {/* Option item list */}
        <div className='grid h-fit grid-cols-2 gap-1 tablet:grid-cols-3'>
          {Object.values(C_THEME_STYLES).map((themeName) => (
            // Item
            <DropdownMenuItem onClick={() => setThemeColor(themeName)} key={themeName} className='focus:bg-transparent'>
              <Button variant={'outline'} className='flex w-full items-center justify-start rounded-2xl px-3 py-5'>
                {/* Item check box */}
                <DropdownMenuCheckboxItem
                  checked={themeStyleColor === themeName}
                  className={cn(
                    'mr-2 flex aspect-square h-6 items-center justify-center rounded-full bg-primary p-0 px-0 py-0 pl-0 pr-0 ',
                    themeName,
                  )}
                />
                {/* Item label */}
                {formatThemeName(themeName)}
              </Button>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeStyleSwitcher
