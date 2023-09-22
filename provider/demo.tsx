'use client'

import { createContext, useContext, useState } from 'react'

const UnameContext = createContext<any>(null)

const Demo = () => {
  return <Parent />
}

export default Demo

const Parent = () => {
  const [uname, setUname] = useState('')

  return (
    <UnameContext.Provider value={{ uname, setUname }}>
      <p>-------</p>
      <h1>父组件</h1>
      <p>Hello name:{uname ? uname : 'xxx'}</p>
      <p>-------</p>
      <Child />
      <p>-------</p>
    </UnameContext.Provider>
  )
}

const Child = () => {
  const { uname } = useContext(UnameContext)
  return (
    <div>
      <h1>子组件 {uname ? uname : 'xxx'}</h1>
      <p>-------</p>
      <GroundChild />
    </div>
  )
}

const GroundChild = () => {
  const { setUname } = useContext(UnameContext)
  return (
    <div>
      <h1>孙组件 name:</h1>
      <button className='border' onClick={() => setUname('aaa')}>
        Change user name
      </button>
    </div>
  )
}
