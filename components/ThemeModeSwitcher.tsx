'use client'
import { useEffect, useState } from 'react'

// Themes
import { useTheme } from 'next-themes'

//Helpers
import { cn } from '@/lib/utils'
import { C_THEME_MODES } from '@/lib/constants'
import useClientMounted from '@/hooks/useClientMounted'

// Components/Icons
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { CheckIcon, MoonStar, SunMedium } from 'lucide-react'
import { GaleOIconThememode } from 'gale-icons'

export interface ThemeModeSwitcherProps {
  handleOpen?: () => void
}

// --> Begins here
const ThemeModeSwitcher = ({ handleOpen }: ThemeModeSwitcherProps) => {
  const isMounted = useClientMounted()
  const { setTheme, theme } = useTheme()
  const [isSystemDarkMode, setIsSystemDarkMode] = useState(false)

  const showIcon = 'aspect-square rotate-0 opacity-100 transition-transform duration-300'
  const hideIcon = 'opacity-0 absolute left-0 top-0'

  useEffect(() => {
    setIsSystemDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches ? true : false)
  }, [])

  if (!isMounted) return null

  return (
    <DropdownMenu onOpenChange={handleOpen}>
      <DropdownMenuTrigger asChild>
        {/* DropdownMenuTrigger最后是会渲染成一个<button>DOM标签，
        这里用asChild不会再单独生成<button>了，而是把所有属性传给Child元素
        这样就可以用Button组件了 */}

        {/* 这里在Button外面再加了一层div，是因为点击了下拉菜单的选项后，会auto fouce按钮，默认情况下，Button有outline的样式，*/}
        {/* 如果再加一层div 就会aoto fucous在div上，不会有outline样式，就不用去掉Button在foucs时的outline效果，方面键盘操作*/}
        <div>
          <Button variant='outline' size={'icon'} className='bg-background/60'>
            <div className='scale-[80%]'>
              <SunMedium className={cn(theme === C_THEME_MODES.LIGHT ? showIcon : `${hideIcon} -rotate-90`)} />
              <MoonStar
                className={cn(theme === C_THEME_MODES.DARK ? showIcon || isSystemDarkMode : `${hideIcon} rotate-90`)}
              />
              <GaleOIconThememode
                className={cn(theme === C_THEME_MODES.SYSTEM ? showIcon || isSystemDarkMode : `${hideIcon} -rotate-90`)}
              />
            </div>
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align='end'
        className='w-[160px] rounded-2xl border-2 border-foreground/10 py-2 pt-4 shadow-none'>
        {Object.values(C_THEME_MODES).map((themMode) => (
          <DropdownMenuItem onClick={() => setTheme(themMode)} key={themMode} className='mb-2 w-full pl-6'>
            {themMode.charAt(0).toUpperCase() + themMode.slice(1)}
            {themMode === theme && <CheckIcon className={cn('ml-3 h-4 w-4')} />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeModeSwitcher
