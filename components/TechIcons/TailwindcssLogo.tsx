'use client'

import { useTheme } from 'next-themes'
import { useState, type SVGProps } from 'react'

const TailwindcssLogo = (props: SVGProps<SVGSVGElement>) => {
  const { theme } = useTheme()

  const textColor = '#7591B8'
  const logoColor = '#7591B8'
  const hoverLogoColor = '#38BDF8'
  const hoverTextColor = `${theme === 'dark' ? '#FFFFFF' : '#2D3748'}`

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const currentTextColor = isHovered ? hoverTextColor : textColor
  const currentLogoColor = isHovered ? hoverLogoColor : logoColor

  return (
    <svg
      viewBox='0 0 138 60'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.0153 22C11.2779 22 8.94198 23.8121 8.00763 27.4362C9.40916 25.6242 11.0443 24.9446 12.913 25.3976C13.9792 25.6559 14.7412 26.4064 15.5847 27.2364C16.9587 28.5889 18.5492 30.1543 22.0229 30.1543C25.7603 30.1543 28.0962 28.3423 29.0305 24.7181C27.629 26.5302 25.9939 27.2097 24.1252 26.7567C23.059 26.4985 22.297 25.748 21.4535 24.9179C20.0794 23.5654 18.489 22 15.0153 22ZM8.00763 30.1543C4.27023 30.1543 1.93435 31.9664 1 35.5906C2.40153 33.7785 4.03664 33.099 5.90534 33.552C6.97154 33.8107 7.73356 34.5607 8.57707 35.3907C9.95108 36.7432 11.5416 38.3087 15.0153 38.3087C18.7527 38.3087 21.0885 36.4966 22.0229 32.8724C20.6214 34.6845 18.9863 35.3641 17.1176 34.911C16.0514 34.6528 15.2893 33.9023 14.4458 33.0723C13.0718 31.7198 11.4813 30.1543 8.00763 30.1543Z'
        fill={currentLogoColor}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M38.7554 28.8718H36.3095V33.4624C36.3095 34.6865 37.1379 34.6674 38.7554 34.5909V36.4463C35.481 36.8288 34.1792 35.949 34.1792 33.4624V28.8718H32.3644V26.8825H34.1792V24.3134L36.3095 23.7013V26.8825H38.7554V28.8718ZM48.0792 26.8825H50.2095V36.4463H48.0792V35.0691C47.3296 36.0828 46.1659 36.6949 44.6273 36.6949C41.9447 36.6949 39.7157 34.4953 39.7157 31.6644C39.7157 28.8144 41.9447 26.6339 44.6273 26.6339C46.1659 26.6339 47.3296 27.246 48.0792 28.2406V26.8825ZM44.9626 34.7248C46.7379 34.7248 48.0792 33.4433 48.0792 31.6644C48.0792 29.8855 46.7379 28.604 44.9626 28.604C43.1874 28.604 41.846 29.8855 41.846 31.6644C41.846 33.4433 43.1874 34.7248 44.9626 34.7248ZM53.7601 25.448C53.0105 25.448 52.399 24.8359 52.399 24.1282C52.3997 23.7784 52.5433 23.443 52.7984 23.1957C53.0535 22.9483 53.3993 22.8091 53.7601 22.8084C54.1208 22.8091 54.4666 22.9483 54.7217 23.1957C54.9768 23.443 55.1204 23.7784 55.1211 24.1282C55.1211 24.8359 54.5096 25.448 53.7601 25.448ZM52.6949 36.4463V26.8825H54.8252V36.4463H52.6949ZM57.2909 36.4463V22.4832H59.4212V36.4463H57.2909ZM73.2485 26.8825H75.4972L72.4004 36.4463H70.3095L68.2581 30.0003L66.1869 36.4463H64.0961L60.9992 26.8825H63.2479L65.1612 33.4815L67.2324 26.8825H69.2641L71.3155 33.4815L73.2485 26.8825ZM78.1404 25.448C77.3908 25.448 76.7794 24.8359 76.7794 24.1282C76.78 23.7784 76.9237 23.443 77.1787 23.1957C77.4338 22.9483 77.7796 22.8091 78.1404 22.8084C78.5011 22.8091 78.8469 22.9483 79.102 23.1957C79.3571 23.443 79.5007 23.7784 79.5014 24.1282C79.5014 24.8359 78.8899 25.448 78.1404 25.448ZM77.0752 36.4463V26.8825H79.2056V36.4463H77.0752ZM86.8589 26.6339C89.0681 26.6339 90.6462 28.0876 90.6462 30.5741V36.4463H88.5158V30.7845C88.5158 29.3308 87.6479 28.5658 86.3066 28.5658C84.9061 28.5658 83.8015 29.3691 83.8015 31.3201V36.4463H81.6712V26.8825H83.8015V28.1067C84.4525 27.1121 85.5176 26.6339 86.8589 26.6339ZM100.745 23.057H102.876V36.4463H100.745V35.0691C99.9959 36.0828 98.8321 36.6949 97.2936 36.6949C94.6109 36.6949 92.382 34.4953 92.382 31.6644C92.382 28.8144 94.6109 26.6339 97.2936 26.6339C98.8321 26.6339 99.9959 27.246 100.745 28.2406V23.057ZM97.6289 34.7248C99.4041 34.7248 100.745 33.4433 100.745 31.6644C100.745 29.8855 99.4041 28.604 97.6289 28.604C95.8536 28.604 94.5123 29.8855 94.5123 31.6644C94.5123 33.4433 95.8536 34.7248 97.6289 34.7248ZM110.016 36.6949C107.038 36.6949 104.809 34.4953 104.809 31.6644C104.809 28.8144 107.038 26.6339 110.016 26.6339C111.949 26.6339 113.626 27.6094 114.415 29.1013L112.581 30.1342C112.147 29.2352 111.18 28.6614 109.997 28.6614C108.261 28.6614 106.939 29.9429 106.939 31.6644C106.939 33.3859 108.261 34.6674 109.997 34.6674C111.18 34.6674 112.147 34.0745 112.62 33.1946L114.454 34.2084C113.626 35.7194 111.949 36.6949 110.016 36.6949ZM117.966 29.5221C117.966 31.2627 123.272 30.2107 123.272 33.7493C123.272 35.662 121.556 36.6949 119.425 36.6949C117.453 36.6949 116.032 35.8342 115.401 34.457L117.236 33.4241C117.551 34.2849 118.34 34.8013 119.425 34.8013C120.372 34.8013 121.102 34.4953 121.102 33.7302C121.102 32.0278 115.796 32.9842 115.796 29.5604C115.796 27.7624 117.394 26.6339 119.405 26.6339C121.023 26.6339 122.364 27.3607 123.055 28.6231L121.26 29.5986C120.905 28.8527 120.214 28.5084 119.405 28.5084C118.636 28.5084 117.966 28.8335 117.966 29.5221ZM127.059 29.5221C127.059 31.2627 132.365 30.2107 132.365 33.7493C132.365 35.662 130.649 36.6949 128.519 36.6949C126.546 36.6949 125.126 35.8342 124.495 34.457L126.329 33.4241C126.645 34.2849 127.434 34.8013 128.519 34.8013C129.465 34.8013 130.195 34.4953 130.195 33.7302C130.195 32.0278 124.889 32.9842 124.889 29.5604C124.889 27.7624 126.487 26.6339 128.499 26.6339C130.116 26.6339 131.458 27.3607 132.148 28.6231L130.353 29.5986C129.998 28.8527 129.308 28.5084 128.499 28.5084C127.73 28.5084 127.059 28.8335 127.059 29.5221Z'
        fill={currentTextColor}
      />
    </svg>
  )
}
export default TailwindcssLogo
