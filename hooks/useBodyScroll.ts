import { useEffect } from 'react'

const useBodyScroll = (noScroll: boolean = false) => {
  useEffect(() => {
    if (noScroll) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [noScroll])
}

export default useBodyScroll
