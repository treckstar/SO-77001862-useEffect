'use client'

import { useEffect, useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  console.log('The component is mounted')
  useEffect(() => {
    console.log('This line should print in the browser console')
  }, [])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}