import { GradientText, SectionHeading } from '@/components/TextWrappers'
import {
  MotionLogo,
  NextUILogo,
  NextjsLogo,
  ReactLogo,
  ShadcnuiLogo,
  TailwindcssLogo,
  TypeScriptLogo,
  ZustandLogo,
} from '@/components/TechIcons'

const Tech = () => {
  return (
    <div className='mx-auto w-full bg-slate-400/10'>
      <div className='c-container flex-col items-center justify-center gap-y-8 py-24'>
        <SectionHeading noMarginBottom>
          <GradientText>Build with</GradientText>
        </SectionHeading>
        <div className='flex flex-wrap items-center justify-center gap-6'>
          <ReactLogo height={'3.5rem'} className='scale-105 text-[#7591B8] hover:text-[#61DAFB]' />
          <NextjsLogo height={'3.2rem'} className='text-[#7591B8] hover:text-foreground' />
          <TypeScriptLogo height={'3rem'} className='text-[#7591B8] hover:text-[#007ACC]' />
          <TailwindcssLogo height={'5rem'} />
          <ZustandLogo />
          <NextUILogo height={'3rem'} className='text-[#7591B8]  hover:text-foreground' />
          <ShadcnuiLogo className='text-[#7591B8]  hover:text-foreground' />
          <MotionLogo height={'3.5rem'} className='text-[#7591B8] hover:text-foreground' />
        </div>
      </div>
    </div>
  )
}

export default Tech
