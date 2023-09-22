import {
  GaleOIconSunMoon,
  GaleOIconPaintbrush,
  GaleOIconMonitorMobile,
  GaleOIconLayer,
  GaleOIconCode,
  GaleOIconWand,
} from 'gale-icons'

// Theme mode names
export const C_THEME_MODES = {
  LIGHT: 'light' as const,
  DARK: 'dark' as const,
  SYSTEM: 'system' as const,
} as const

// Theme style names
export enum C_THEME_STYLES {
  GREEN = 'theme-green',
  ROSE = 'theme-rose',
  BLUE = 'theme-blue',
  RED = 'theme-red',
  ORANGE = 'theme-orange',
  YELLOW = 'theme-yellow',
  VIOLET = 'theme-violet',
  SLATE = 'theme-slate',
}

// Props for Hero Card components
export interface CardProps {
  className?: string
  checked?: boolean
}

// Props for Hero CardForm component
export interface City {
  label: string
  value: string
  ischecked: boolean
}

// City list data for CardForm component
export const CityList: City[] = [
  { label: 'Barcelona', value: 'barcelona', ischecked: true },
  { label: 'Paris', value: 'paris', ischecked: false },
  { label: 'London', value: 'london', ischecked: false },
  { label: 'Rome', value: 'rome', ischecked: false },
]

export const featuresCardsData = [
  {
    id: 1,
    title: 'Light and Dark UI',
    description:
      'Discover the convenience of seamlessly switching between light and dark modes. Customize the theme to your preferences, elevating your browsing experience with ease and style.',
    icon: GaleOIconSunMoon,
  },
  {
    id: 2,
    title: 'Effortless Color Styling',
    description:
      "Effortlessly adapt the website's appearance to match any unique style, making customization straightforward and simple.",
    icon: GaleOIconPaintbrush,
  },
  {
    id: 3,
    title: 'Responsive Across Devices',
    description:
      'Flawless on Every Screen, from desktops to smartphones. Responsive design guarantees a flawless user experience across all devices.',
    icon: GaleOIconMonitorMobile,
  },
  {
    id: 4,
    title: 'Smooth Interaction',
    description:
      'Experience a website that excels in delivering intuitive and elegant interactions, creating a dynamic online presence.',
    icon: GaleOIconLayer,
  },
  {
    id: 5,
    title: 'TypeScript and Next.js Integration',
    description:
      'Harness the robustness of TypeScript and the efficiency of Next.js to build a high-performance, maintainable website. Code confidently with these advanced tools.',
    icon: GaleOIconCode,
  },
  {
    id: 6,
    title: 'Seamless Styling with Tailwind CSS',
    description:
      'Unlock the potential for crafting captivating designs with the finesse of Tailwind CSS, simplifying the process of website styling.',
    icon: GaleOIconWand,
  },
]

export const C_HashIds = {
  HOME: 'home' as const,
  FEATURES: 'features' as const,
  ABOUT: 'about' as const,
} as const

export const NavItems = [
  { id: 1, label: 'Features', href: `#${C_HashIds.FEATURES}` },
  { id: 2, label: 'About', href: `#${C_HashIds.ABOUT}` },
]
