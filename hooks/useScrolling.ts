import { useEffect, useState } from 'react'

const useScrolling = (offset: number = 40) => {
  const [isScrolling, setIsScrollying] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > offset) {
        setIsScrollying(true)
      } else {
        setIsScrollying(false)
      }
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      setIsScrollying(false)
    }
  }, [])

  return { isScrolling }
}

export default useScrolling
