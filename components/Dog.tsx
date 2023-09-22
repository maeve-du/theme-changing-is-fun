'use client'

import { useDogStore } from '@/store/useDogStore'
import React from 'react'

const Dog = () => {
  const giantDogs = useDogStore((state) => state.dog.giantDogs)
  const puppies = useDogStore((state) => state.dog.puppies)
  const addGiantDog = useDogStore((state) => state.increaceGiantDogs)
  const addPuppy = useDogStore((state) => state.increacePuppies)
  return (
    <div>
      <h1>Dogs</h1>
      <h3>{giantDogs} giant dogs</h3>{' '}
      <button onClick={() => addGiantDog()} className='rounded-md bg-primary px-3 py-1'>
        Add more
      </button>
      <h3>{puppies} puppies</h3>{' '}
      <button onClick={() => addPuppy()} className='rounded-md bg-primary px-3 py-1'>
        Add more
      </button>
    </div>
  )
}

export default Dog
