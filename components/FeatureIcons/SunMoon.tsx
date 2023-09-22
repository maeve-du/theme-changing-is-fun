import { SVGProps } from 'react'

const SunMoon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    strokeLinecap='round'
    strokeLinejoin='round'
    stroke='currentColor'
    {...props}>
    <path d='M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4' />
  </svg>
)
export default SunMoon
