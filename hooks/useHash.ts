'use client'
import { useEffect, useState } from 'react'

const useHash = () => {
  const getHash = () => (typeof window !== 'undefined' ? decodeURIComponent(window.location.hash) : undefined)
  const [hash, setHash] = useState(getHash())

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash())
    }
    window.addEventListener('hashchange', handleHashChange)
  }, [])

  return { hash, setHash }
}

export default useHash
