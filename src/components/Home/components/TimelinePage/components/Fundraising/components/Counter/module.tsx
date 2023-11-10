'use client'
import { ICounter } from './types'
import { Container } from './style'
import { useEffect, useState } from 'react'
export const Counter = ({ total }: ICounter) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (count >= total) {
        setCount(total)
        clearTimeout(timeout)
        return
      }
      setCount(count + 25)
    }, 25)
  }, [count, total])

  const dollar = count.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return <Container>{dollar}</Container>
}
