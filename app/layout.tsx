import type { Metadata } from 'next'
import { Providers } from '@/provider/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <div className='bg-main'>
          <div className='bg-gradient' />
        </div>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
