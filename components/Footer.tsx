import { LogoBW } from '@/components/Logo'
import GitHubLogo from '@/components/GitHubLogo'

import { DribbbleIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className='bottom-0 mt-32 w-full bg-slate-900/90 text-white/60'>
      <div className='c-container flex flex-col items-center gap-12 py-16 mobileL:justify-between mini:flex-row'>
        {/* left */}
        <div className='flex flex-col '>
          <div className='flex items-center gap-x-2 text-white'>
            <LogoBW className='w-10 ' />
            <p className='text-xl font-medium uppercase tablet:block'>THEME CHANGING IS FUN</p>
          </div>
          <p className='text-sm leading-relaxed'>
            <span>Designed and built with ❤️ by </span>
            <span>
              <a
                href='https://github.com/maeve-du'
                rel='noopener noreferrer'
                target='_blank'
                className='underline underline-offset-2'>
                Maeve Du
              </a>
            </span>
          </p>
        </div>

        {/* right */}
        <div className='flex gap-x-3'>
          <a href='https://dribbble.com' rel='noopener noreferrer' target='_blank'>
            <div className='rounded-full bg-white/10 p-2 text-pink-300 hover:bg-slate-800'>
              <DribbbleIcon />
            </div>
          </a>
          <a href='https://github.com/maeve-du' rel='noopener noreferrer' target='_blank'>
            <div className='rounded-full bg-white/10 p-2 hover:bg-slate-800'>
              <GitHubLogo />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
